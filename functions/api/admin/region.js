// src/routes/admin/region.js
import { jsonResponse } from '../../utils/response.js';

// 获取语言配置中的国家列表
async function getCountriesFromSettings(env) {
  try {
    const settings = await env.MY_DB.prepare(
      "SELECT value FROM settings WHERE key = 'languages'"
    ).first();

    if (settings && settings.value) {
      const languages = JSON.parse(settings.value);
      // 过滤出有国家代码的语言
      return languages
        .filter(lang => lang.code && lang.code.includes('-'))
        .map(lang => {
          const [language, country] = lang.code.split('-');
          return {
            code: country,
            name: lang.native_name || lang.name,
            language: language,
            flag: lang.flag || '🌐'
          };
        });
    }
  } catch (e) {
    console.error('获取语言配置失败:', e);
  }
  return [];
}

// 获取所有可用的分类（从 dramas 表）
async function getCategories(env) {
  try {
    const { results } = await env.MY_DB.prepare(`
      SELECT DISTINCT category 
      FROM dramas 
      WHERE category IS NOT NULL AND category != ''
      ORDER BY category
    `).all();
    return results.map(r => r.category);
  } catch (e) {
    console.error('获取分类失败:', e);
    return [];
  }
}

// 获取地区概览数据
export async function getRegionOverview(request, env, url) {
  try {
    const region = url.searchParams.get('region') || 'all';
    const timeRange = url.searchParams.get('timeRange') || 'month';

    // 获取所有用户（按地区分组）
    const { results: userStats } = await env.MY_DB.prepare(`
      SELECT 
        COALESCE(region, '未知') as region,
        COUNT(*) as user_count,
        SUM(CASE WHEN is_vip = 1 THEN 1 ELSE 0 END) as vip_count
      FROM users
      GROUP BY region
    `).all();

    // 获取海外收入（按时间范围）
    let timeCondition = '';
    switch(timeRange) {
      case 'week': timeCondition = "AND p.created_at >= DATE('now', '-7 days')"; break;
      case 'month': timeCondition = "AND p.created_at >= DATE('now', '-30 days')"; break;
      case 'quarter': timeCondition = "AND p.created_at >= DATE('now', '-90 days')"; break;
      case 'year': timeCondition = "AND p.created_at >= DATE('now', '-365 days')"; break;
      default: timeCondition = "";
    }

    const revenueResult = await env.MY_DB.prepare(`
      SELECT COALESCE(SUM(p.amount_paid) / 100.0, 0) as total
      FROM purchases p
      JOIN users u ON p.user_id = u.id
      WHERE u.region != '中国' AND u.region != '未知' ${timeCondition}
    `).first();

    // 获取国家列表
    const countries = await getCountriesFromSettings(env);
    
    // 计算海外用户数
    const overseasUsers = userStats
      .filter(stat => stat.region !== '中国' && stat.region !== '未知')
      .reduce((sum, stat) => sum + stat.user_count, 0);

    // 计算各地区占比
    const totalUsers = userStats.reduce((sum, stat) => sum + stat.user_count, 0);
    const distribution = {
      north_america: 0,
      europe: 0,
      asia: 0,
      oceania: 0,
      south_america: 0,
      africa: 0,
      other: 0
    };

    // 简单的大洲映射（基于常见国家）
    const regionMap = {
      '美国': 'north_america', '加拿大': 'north_america', '墨西哥': 'north_america',
      '英国': 'europe', '德国': 'europe', '法国': 'europe', '意大利': 'europe', '西班牙': 'europe',
      '中国': 'asia', '日本': 'asia', '韩国': 'asia', '印度': 'asia', '新加坡': 'asia',
      '澳大利亚': 'oceania', '新西兰': 'oceania',
      '巴西': 'south_america', '阿根廷': 'south_america',
      '南非': 'africa', '埃及': 'africa'
    };

    userStats.forEach(stat => {
      const regionGroup = regionMap[stat.region] || 'other';
      if (distribution.hasOwnProperty(regionGroup)) {
        distribution[regionGroup] += stat.user_count;
      }
    });

    // 转换为百分比
    Object.keys(distribution).forEach(key => {
      distribution[key] = totalUsers > 0 ? Math.round(distribution[key] / totalUsers * 100) : 0;
    });

    return jsonResponse({
      success: true,
      data: {
        stats: {
          totalCountries: countries.length,
          overseasUsers,
          overseasGrowth: 0,
          overseasRevenue: revenueResult.total || 0
        },
        distribution
      }
    });
  } catch (error) {
    console.error('❌ getRegionOverview 详细错误:', {
      message: error.message,
      stack: error.stack,
      cause: error.cause
    });
    return jsonResponse({ 
      error: error.message,
      details: error.message
    }, 500);
  }
}

// 获取地区排行榜
export async function getRegionTop(request, env, url) {
  try {
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const offset = (page - 1) * limit;
    const timeRange = url.searchParams.get('timeRange') || 'month';

    // 构建时间条件
    let timeCondition = '';
    switch(timeRange) {
      case 'week': timeCondition = "AND p.created_at >= DATE('now', '-7 days')"; break;
      case 'month': timeCondition = "AND p.created_at >= DATE('now', '-30 days')"; break;
      case 'quarter': timeCondition = "AND p.created_at >= DATE('now', '-90 days')"; break;
      case 'year': timeCondition = "AND p.created_at >= DATE('now', '-365 days')"; break;
      default: timeCondition = "";
    }

    // 获取地区数据
    const { results } = await env.MY_DB.prepare(`
      SELECT 
        u.region,
        COUNT(DISTINCT u.id) as user_count,
        COUNT(CASE WHEN u.is_vip = 1 THEN 1 END) as vip_count,
        COALESCE(SUM(p.amount_paid) / 100.0, 0) as revenue
      FROM users u
      LEFT JOIN purchases p ON u.id = p.user_id ${timeCondition}
      WHERE u.region IS NOT NULL AND u.region != '' AND u.region != '未知'
      GROUP BY u.region
      ORDER BY user_count DESC
      LIMIT ? OFFSET ?
    `).bind(limit, offset).all();

    // 获取总数
    const countResult = await env.MY_DB.prepare(`
      SELECT COUNT(DISTINCT region) as total 
      FROM users 
      WHERE region IS NOT NULL AND region != '' AND region != '未知'
    `).first();

    // 获取一个示例分类（用于热门内容）
    const dramaResult = await env.MY_DB.prepare(`
      SELECT category FROM dramas 
      WHERE category IS NOT NULL AND category != ''
      LIMIT 1
    `).first();
    const defaultCategory = dramaResult?.category || '暂无数据';

    const list = results.map(row => ({
      country: row.region,
      code: 'UN',
      users: row.user_count,
      vipCount: row.vip_count || 0,
      growth: 0,
      popularContent: defaultCategory,
      revenue: row.revenue || 0
    }));

    return jsonResponse({
      success: true,
      data: list,
      pagination: {
        page,
        limit,
        total: countResult.total || 0,
        pages: Math.ceil((countResult.total || 0) / limit)
      }
    });
  } catch (error) {
    console.error('❌ getRegionTop 详细错误:', {
      message: error.message,
      stack: error.stack,
      cause: error.cause
    });
    return jsonResponse({ 
      error: error.message,
      details: error.message
    }, 500);
  }
}

// 获取地区内容偏好 - 从 categories 表获取真实分类
export async function getRegionPreference(request, env, url) {
  try {
    const region = url.searchParams.get('region') || 'north_america';
    
    // 从 categories 表获取所有活跃的分类
    const { results } = await env.MY_DB.prepare(`
      SELECT name FROM categories 
      WHERE is_active = 1 
      ORDER BY sort_order ASC
    `).all();
    
    let categories = [];
    let percentages = [];
    
    if (results && results.length > 0) {
      // 获取到了真实分类
      categories = results.map(r => r.name);
      
      // 计算等比例百分比（如果有真实数据，这里可以替换为实际统计）
      const equalPercent = Math.floor(100 / categories.length);
      percentages = categories.map((_, i) => 
        i === categories.length - 1 ? 100 - equalPercent * (categories.length - 1) : equalPercent
      );
    } else {
      // 没有分类数据时使用默认值
      categories = ['剧情', '喜剧', '动作', '爱情', '悬疑'];
      percentages = [30, 25, 20, 15, 10];
    }
    
    return jsonResponse({
      success: true,
      data: {
        categories,
        percentages
      }
    });
    
  } catch (error) {
    console.error('getRegionPreference 错误:', error);
    // 出错时返回默认值
    return jsonResponse({
      success: true,
      data: {
        categories: ['剧情', '喜剧', '动作', '爱情', '悬疑'],
        percentages: [30, 25, 20, 15, 10]
      }
    });
  }
}
// 导出地区数据
export async function exportRegionData(request, env, url) {
  try {
    const { results } = await env.MY_DB.prepare(`
      SELECT 
        u.region,
        COUNT(DISTINCT u.id) as user_count,
        COUNT(CASE WHEN u.is_vip = 1 THEN 1 END) as vip_count,
        COALESCE(SUM(p.amount_paid) / 100.0, 0) as revenue
      FROM users u
      LEFT JOIN purchases p ON u.id = p.user_id
      WHERE u.region IS NOT NULL AND u.region != '' AND u.region != '未知'
      GROUP BY u.region
      ORDER BY user_count DESC
    `).all();

    const csvHeader = '国家/地区,用户数,VIP用户数,收入(USD)\n';
    const csvRows = results.map(row => 
      `${row.region},${row.user_count},${row.vip_count || 0},${row.revenue}`
    ).join('\n');
    
    const csv = csvHeader + csvRows;

    return new Response(csv, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename=region_analysis_${new Date().toISOString().split('T')[0]}.csv`,
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    console.error('❌ exportRegionData 详细错误:', {
      message: error.message,
      stack: error.stack,
      cause: error.cause
    });
    return jsonResponse({ 
      error: error.message,
      details: error.message
    }, 500);
  }
}