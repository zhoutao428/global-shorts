// src/routes/admin/revenue.js
import { jsonResponse } from '../../utils/response.js';

// 获取收入汇总（顶部卡片）
export async function getRevenueSummary(request, env, url) {
  try {
    // 今日收入
    const todayResult = await env.MY_DB.prepare(`
      SELECT COALESCE(SUM(amount_paid) / 100.0, 0) as total
      FROM purchases
      WHERE DATE(created_at) = DATE('now')
    `).first();

    // 昨日收入
    const yesterdayResult = await env.MY_DB.prepare(`
      SELECT COALESCE(SUM(amount_paid) / 100.0, 0) as total
      FROM purchases
      WHERE DATE(created_at) = DATE('now', '-1 day')
    `).first();

    // 本周收入
    const weekResult = await env.MY_DB.prepare(`
      SELECT COALESCE(SUM(amount_paid) / 100.0, 0) as total
      FROM purchases
      WHERE created_at >= DATE('now', '-7 days')
    `).first();

    // 上周收入
    const lastWeekResult = await env.MY_DB.prepare(`
      SELECT COALESCE(SUM(amount_paid) / 100.0, 0) as total
      FROM purchases
      WHERE created_at >= DATE('now', '-14 days') 
        AND created_at < DATE('now', '-7 days')
    `).first();

    // 本月收入
    const monthResult = await env.MY_DB.prepare(`
      SELECT COALESCE(SUM(amount_paid) / 100.0, 0) as total
      FROM purchases
      WHERE strftime('%Y-%m', created_at) = strftime('%Y-%m', 'now')
    `).first();

    // 上月收入
    const lastMonthResult = await env.MY_DB.prepare(`
      SELECT COALESCE(SUM(amount_paid) / 100.0, 0) as total
      FROM purchases
      WHERE strftime('%Y-%m', created_at) = strftime('%Y-%m', 'now', '-1 month')
    `).first();

    // 计算增长率
    const todayGrowth = yesterdayResult.total > 0 
      ? Math.round((todayResult.total - yesterdayResult.total) / yesterdayResult.total * 100) 
      : 0;
    
    const weekGrowth = lastWeekResult.total > 0 
      ? Math.round((weekResult.total - lastWeekResult.total) / lastWeekResult.total * 100) 
      : 0;
    
    const monthGrowth = lastMonthResult.total > 0 
      ? Math.round((monthResult.total - lastMonthResult.total) / lastMonthResult.total * 100) 
      : 0;

    // 获取月度目标
    let monthTarget = 0;
    try {
      const targetResult = await env.MY_DB.prepare(`
        SELECT amount FROM revenue_targets 
        WHERE month = strftime('%Y-%m', 'now')
        ORDER BY created_at DESC LIMIT 1
      `).first();
      monthTarget = targetResult?.amount || 0;
    } catch (e) {
      console.log('revenue_targets 表不存在');
    }

    const achieved = monthResult.total || 0;
    const percentage = monthTarget > 0 ? Math.round(achieved / monthTarget * 100) : 0;
    
    // 计算剩余天数和日均需达成
    const now = new Date();
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const remainingDays = lastDay.getDate() - now.getDate();
    const dailyNeeded = remainingDays > 0 && monthTarget > achieved 
      ? (monthTarget - achieved) / remainingDays 
      : 0;

    return jsonResponse({
      success: true,
      data: {
        stats: {
          today: { amount: todayResult.total || 0, growth: todayGrowth },
          week: { amount: weekResult.total || 0, growth: weekGrowth },
          month: { amount: monthResult.total || 0, growth: monthGrowth },
          growth: { rate: monthGrowth, previous: lastMonthResult.total || 0 }
        },
        target: {
          monthTarget,
          achieved,
          percentage,
          remainingDays,
          dailyNeeded: Math.max(0, Math.round(dailyNeeded * 100) / 100)
        }
      }
    });
  } catch (error) {
    console.error('getRevenueSummary error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// 获取收入趋势（图表）
export async function getRevenueTrend(request, env, url) {
  try {
    const days = 30;
    
    const { results } = await env.MY_DB.prepare(`
      SELECT 
        DATE(created_at) as date,
        SUM(CASE WHEN item_type = 'vip' THEN amount_paid ELSE 0 END) / 100.0 as vip,
        SUM(CASE WHEN item_type = 'episode' THEN amount_paid ELSE 0 END) / 100.0 as episode,
        SUM(CASE WHEN item_type = 'ad' THEN amount_paid ELSE 0 END) / 100.0 as ad,
        SUM(CASE WHEN item_type = 'coin' THEN amount_paid ELSE 0 END) / 100.0 as coin
      FROM purchases
      WHERE created_at >= DATE('now', ?)
      GROUP BY DATE(created_at)
      ORDER BY date ASC
    `).bind(`-${days} days`).all();

    const labels = [];
    const vip = [];
    const episode = [];
    const ad = [];
    const coin = [];

    results.forEach(row => {
      labels.push(row.date);
      vip.push(row.vip || 0);
      episode.push(row.episode || 0);
      ad.push(row.ad || 0);
      coin.push(row.coin || 0);
    });

    return jsonResponse({
      success: true,
      data: { labels, vip, episode, ad, coin }
    });
  } catch (error) {
    console.error('getRevenueTrend error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// 获取收入构成（饼图）
export async function getRevenueComposition(request, env, url) {
  try {
    const period = url.searchParams.get('period') || 'month';
    
    let whereClause = '';
    switch(period) {
      case 'month':
        whereClause = "strftime('%Y-%m', created_at) = strftime('%Y-%m', 'now')";
        break;
      case 'quarter':
        whereClause = "created_at >= DATE('now', '-3 months')";
        break;
      case 'year':
        whereClause = "strftime('%Y', created_at) = strftime('%Y', 'now')";
        break;
      default:
        whereClause = "strftime('%Y-%m', created_at) = strftime('%Y-%m', 'now')";
    }

    const { results } = await env.MY_DB.prepare(`
      SELECT 
        item_type,
        SUM(amount_paid) / 100.0 as total
      FROM purchases
      WHERE ${whereClause}
      GROUP BY item_type
    `).all();

    const composition = { vip: 0, episode: 0, ad: 0, coin: 0 };

    results.forEach(row => {
      if (composition.hasOwnProperty(row.item_type)) {
        composition[row.item_type] = row.total || 0;
      }
    });

    return jsonResponse({
      success: true,
      data: composition
    });
  } catch (error) {
    console.error('getRevenueComposition error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// 获取收入明细（表格）
export async function getRevenueDetails(request, env, url) {
  try {
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const offset = (page - 1) * limit;
    const viewType = url.searchParams.get('viewType') || 'day';
    const dateRange = url.searchParams.get('dateRange') || 'week';
    const channel = url.searchParams.get('channel') || 'all';

    // 构建日期条件
    let dateCondition = '';
    switch(dateRange) {
      case 'today':
        dateCondition = "DATE(created_at) = DATE('now')";
        break;
      case 'week':
        dateCondition = "created_at >= DATE('now', '-7 days')";
        break;
      case 'month':
        dateCondition = "strftime('%Y-%m', created_at) = strftime('%Y-%m', 'now')";
        break;
      default:
        dateCondition = "1=1";
    }

    // 构建渠道条件
    let channelCondition = '';
    if (channel !== 'all') {
      channelCondition = ` AND item_type = '${channel}'`;
    }

    // 获取总记录数
    const countResult = await env.MY_DB.prepare(`
      SELECT COUNT(DISTINCT DATE(created_at)) as total
      FROM purchases
      WHERE ${dateCondition} ${channelCondition}
    `).first();

    // 获取分页数据
    const { results } = await env.MY_DB.prepare(`
      SELECT 
        DATE(created_at) as date,
        COUNT(*) as orders,
        SUM(CASE WHEN item_type = 'vip' THEN amount_paid ELSE 0 END) / 100.0 as vip,
        SUM(CASE WHEN item_type = 'episode' THEN amount_paid ELSE 0 END) / 100.0 as episode,
        SUM(CASE WHEN item_type = 'ad' THEN amount_paid ELSE 0 END) / 100.0 as ad,
        SUM(CASE WHEN item_type = 'coin' THEN amount_paid ELSE 0 END) / 100.0 as coin,
        SUM(amount_paid) / 100.0 as total
      FROM purchases
      WHERE ${dateCondition} ${channelCondition}
      GROUP BY DATE(created_at)
      ORDER BY created_at DESC
      LIMIT ? OFFSET ?
    `).bind(limit, offset).all();

    const details = results.map(row => ({
      date: row.date,
      orders: row.orders,
      vip: row.vip || 0,
      episode: row.episode || 0,
      ad: row.ad || 0,
      coin: row.coin || 0,
      total: row.total || 0
    }));

    return jsonResponse({
      success: true,
      data: details,
      pagination: {
        page,
        limit,
        total: countResult.total || 0,
        pages: Math.ceil((countResult.total || 0) / limit)
      }
    });
  } catch (error) {
    console.error('getRevenueDetails error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// 导出报表
export async function exportRevenue(request, env, url) {
  try {
    const dateRange = url.searchParams.get('dateRange') || 'month';
    const channel = url.searchParams.get('channel') || 'all';
    
    let whereClause = '1=1';
    if (channel !== 'all') {
      whereClause += ` AND item_type = '${channel}'`;
    }

    switch(dateRange) {
      case 'today':
        whereClause += " AND DATE(created_at) = DATE('now')";
        break;
      case 'week':
        whereClause += " AND created_at >= DATE('now', '-7 days')";
        break;
      case 'month':
        whereClause += " AND strftime('%Y-%m', created_at) = strftime('%Y-%m', 'now')";
        break;
    }

    const { results } = await env.MY_DB.prepare(`
      SELECT 
        DATE(created_at) as date,
        user_id,
        item_type,
        item_id,
        amount_paid / 100.0 as amount,
        created_at
      FROM purchases
      WHERE ${whereClause}
      ORDER BY created_at DESC
    `).all();

    const csvHeader = '日期,用户ID,类型,物品ID,金额,创建时间\n';
    const csvRows = results.map(row => 
      `${row.date},${row.user_id},${row.item_type},${row.item_id},${row.amount},${row.created_at}`
    ).join('\n');
    
    const csv = csvHeader + csvRows;

    return new Response(csv, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename=revenue_${new Date().toISOString().split('T')[0]}.csv`,
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    console.error('exportRevenue error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// 设置月度目标
export async function setRevenueTarget(request, env) {
  try {
    const { month, amount, note } = await request.json();

    const id = crypto.randomUUID();
    await env.MY_DB.prepare(`
      INSERT INTO revenue_targets (id, month, amount, note)
      VALUES (?, ?, ?, ?)
      ON CONFLICT(month) DO UPDATE SET 
        amount = excluded.amount, 
        note = excluded.note,
        created_at = CURRENT_TIMESTAMP
    `).bind(id, month, amount, note || null).run();

    return jsonResponse({ success: true, id });
  } catch (error) {
    console.error('setRevenueTarget error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}