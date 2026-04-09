// src/routes/admin/content-performance.js
import { jsonResponse } from '../../utils/response.js';

// 辅助函数：根据 timeRange 生成时间条件
function getTimeCondition(timeRange) {
  const now = new Date();
  switch (timeRange) {
    case 'today':
      return `DATE(created_at) = DATE('now')`;
    case 'week':
      return `created_at >= DATE('now', '-7 days')`;
    case 'month':
      return `created_at >= DATE('now', '-30 days')`;
    case 'year':
      return `created_at >= DATE('now', '-365 days')`;
    case 'all':
    default:
      return '1=1'; // 无条件
  }
}

// 获取总览统计和 TOP10
export async function getOverview(request, env, url) {
  try {
    const category = url.searchParams.get('category') || '';
    const timeRange = url.searchParams.get('timeRange') || 'week';
    const timeCondition = getTimeCondition(timeRange);

    // 构建剧集筛选条件（如果有分类）
    const dramaWhere = category ? `AND d.category = '${category}'` : '';

    // 1. 获取总览统计数据
    const statsQuery = `
      SELECT
        COALESCE((SELECT SUM(views_count) FROM dramas WHERE 1=1 ${dramaWhere}), 0) as totalViews,
        COALESCE((SELECT COUNT(*) FROM user_likes l JOIN dramas d ON l.drama_id = d.id WHERE 1=1 ${dramaWhere} AND ${timeCondition.replace('created_at', 'l.created_at')}), 0) as totalLikes,
        COALESCE((SELECT COUNT(*) FROM user_favorites f JOIN dramas d ON f.drama_id = d.id WHERE 1=1 ${dramaWhere} AND ${timeCondition.replace('created_at', 'f.created_at')}), 0) as totalFavorites,
        COALESCE((SELECT COUNT(*) FROM user_comments c JOIN dramas d ON c.drama_id = d.id WHERE 1=1 ${dramaWhere} AND ${timeCondition.replace('created_at', 'c.created_at')}), 0) as totalComments,
        COALESCE((SELECT COUNT(*) FROM user_shares s JOIN dramas d ON s.drama_id = d.id WHERE 1=1 ${dramaWhere} AND ${timeCondition.replace('created_at', 's.created_at')}), 0) as totalShares
    `;
    const stats = await env.MY_DB.prepare(statsQuery).first();

    // 2. 获取 TOP10 剧集（按播放量）
    const topDramasQuery = `
      SELECT
        d.title,
        COALESCE(d.views_count, 0) as views,
        COALESCE((SELECT COUNT(*) FROM user_likes WHERE drama_id = d.id AND ${timeCondition.replace('created_at', 'created_at')}), 0) as likes
      FROM dramas d
      WHERE 1=1 ${dramaWhere}
      ORDER BY views DESC
      LIMIT 10
    `;
    const { results: topDramas } = await env.MY_DB.prepare(topDramasQuery).all();

    return jsonResponse({
      success: true,
      data: {
        stats: {
          totalViews: stats.totalViews || 0,
          totalLikes: stats.totalLikes || 0,
          totalFavorites: stats.totalFavorites || 0,
          totalComments: stats.totalComments || 0,
          totalShares: stats.totalShares || 0
        },
        topDramas: topDramas.map(d => ({
          title: d.title,
          views: d.views,
          likes: d.likes
        }))
      }
    });
  } catch (error) {
    console.error('getOverview error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// 获取分页剧集列表
export async function getDramasPage(request, env, url) {
  try {
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const offset = (page - 1) * limit;
    const category = url.searchParams.get('category') || '';
    const timeRange = url.searchParams.get('timeRange') || 'week';
    const timeCondition = getTimeCondition(timeRange);

    const dramaWhere = category ? `WHERE d.category = '${category}'` : '';

    // 获取总数
    const countQuery = `SELECT COUNT(*) as total FROM dramas d ${dramaWhere}`;
    const countResult = await env.MY_DB.prepare(countQuery).first();
    const total = countResult.total || 0;

    // 获取分页数据，包含互动统计
    const pageQuery = `
      SELECT
        d.id,
        d.title,
        d.category,
        COALESCE(d.views_count, 0) as views,
        COALESCE((SELECT COUNT(*) FROM user_likes WHERE drama_id = d.id AND ${timeCondition.replace('created_at', 'created_at')}), 0) as likes,
        COALESCE((SELECT COUNT(*) FROM user_favorites WHERE drama_id = d.id AND ${timeCondition.replace('created_at', 'created_at')}), 0) as favorites,
        COALESCE((SELECT COUNT(*) FROM user_comments WHERE drama_id = d.id AND ${timeCondition.replace('created_at', 'created_at')}), 0) as comments,
        COALESCE((SELECT COUNT(*) FROM user_shares WHERE drama_id = d.id AND ${timeCondition.replace('created_at', 'created_at')}), 0) as shares,
        -- 完播率暂缺，返回 0 或从其他表计算（需要时后续补充）
        0 as completion_rate
      FROM dramas d
      ${dramaWhere}
      ORDER BY views DESC
      LIMIT ? OFFSET ?
    `;
    const { results } = await env.MY_DB.prepare(pageQuery).bind(limit, offset).all();

    return jsonResponse({
      success: true,
      data: results,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('getDramasPage error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// 获取分类统计
export async function getCategoryStats(request, env, url) {
  try {
    const period = url.searchParams.get('period') || 'month';
    const timeCondition = getTimeCondition(period);

    // 按分类分组统计播放量
    const statsQuery = `
      SELECT
        d.category as name,
        COALESCE(SUM(d.views_count), 0) as views
      FROM dramas d
      WHERE d.category IS NOT NULL AND d.category != ''
      GROUP BY d.category
      ORDER BY views DESC
    `;
    const { results } = await env.MY_DB.prepare(statsQuery).all();

    // 计算总播放量用于百分比
    const totalViews = results.reduce((sum, item) => sum + item.views, 0);
    const categories = results.map(item => ({
      name: item.name,
      views: item.views,
      percentage: totalViews > 0 ? Math.round((item.views / totalViews) * 100) : 0
    }));

    return jsonResponse({
      success: true,
      data: categories
    });
  } catch (error) {
    console.error('getCategoryStats error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// 导出数据（CSV）
export async function exportData(request, env, url) {
  try {
    const category = url.searchParams.get('category') || '';
    const timeRange = url.searchParams.get('timeRange') || 'week';
    const timeCondition = getTimeCondition(timeRange);
    const dramaWhere = category ? `WHERE d.category = '${category}'` : '';

    // 获取所有剧集数据（不分页）
    const exportQuery = `
      SELECT
        d.title,
        d.category,
        COALESCE(d.views_count, 0) as views,
        COALESCE((SELECT COUNT(*) FROM user_likes WHERE drama_id = d.id AND ${timeCondition.replace('created_at', 'created_at')}), 0) as likes,
        COALESCE((SELECT COUNT(*) FROM user_favorites WHERE drama_id = d.id AND ${timeCondition.replace('created_at', 'created_at')}), 0) as favorites,
        COALESCE((SELECT COUNT(*) FROM user_comments WHERE drama_id = d.id AND ${timeCondition.replace('created_at', 'created_at')}), 0) as comments,
        COALESCE((SELECT COUNT(*) FROM user_shares WHERE drama_id = d.id AND ${timeCondition.replace('created_at', 'created_at')}), 0) as shares
      FROM dramas d
      ${dramaWhere}
      ORDER BY views DESC
    `;
    const { results } = await env.MY_DB.prepare(exportQuery).all();

    // 生成 CSV
    const headers = ['剧集名称', '分类', '播放量', '点赞', '收藏', '评论', '分享'];
    const csvRows = results.map(d => [
      d.title,
      d.category,
      d.views,
      d.likes,
      d.favorites,
      d.comments,
      d.shares
    ].join(','));
    const csv = [headers.join(','), ...csvRows].join('\n');

    return new Response(csv, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename=content_performance_${new Date().toISOString().split('T')[0]}.csv`,
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    console.error('exportData error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}