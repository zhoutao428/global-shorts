// src/routes/admin/stats.js
import { jsonResponse } from '../../utils/response.js';

// 仪表盘统计数据
export async function getStats(request, env) {
  try {
    const usersCount = await env.MY_DB.prepare('SELECT COUNT(*) as count FROM users').first();
    const dramasCount = await env.MY_DB.prepare('SELECT COUNT(*) as count FROM dramas').first();
    const episodesCount = await env.MY_DB.prepare('SELECT COUNT(*) as count FROM episodes').first();

    const today = new Date().toISOString().split('T')[0];
    const todayUsers = await env.MY_DB.prepare(
      'SELECT COUNT(*) as count FROM users WHERE DATE(created_at) = ?'
    ).bind(today).first();

    const firstDayOfMonth = new Date();
    firstDayOfMonth.setDate(1);
    const monthStart = firstDayOfMonth.toISOString().split('T')[0];

    const monthRevenue = await env.MY_DB.prepare(
      'SELECT SUM(amount_paid) as total FROM purchases WHERE DATE(created_at) >= ?'
    ).bind(monthStart).first();

    return jsonResponse({
      success: true,
      data: {
        users: usersCount.count,
        dramas: dramasCount.count,
        episodes: episodesCount.count,
        todayUsers: todayUsers.count,
        monthRevenue: monthRevenue.total || 0
      }
    });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 用户增长趋势
export async function getUserGrowth(request, env, url) {
  try {
    const days = parseInt(url.searchParams.get('days') || '30');
    const { results } = await env.MY_DB.prepare(`
      SELECT DATE(created_at) as date, COUNT(*) as count
      FROM users
      WHERE created_at >= DATE('now', ?)
      GROUP BY DATE(created_at)
      ORDER BY date ASC
    `).bind(`-${days} days`).all();
    return jsonResponse({ success: true, data: results });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 收入趋势
export async function getRevenueTrend(request, env, url) {
  try {
    const days = parseInt(url.searchParams.get('days') || '30');
    const { results } = await env.MY_DB.prepare(`
      SELECT DATE(created_at) as date, SUM(amount) as total
      FROM purchases
      WHERE created_at >= DATE('now', ?) AND status = 'success'
      GROUP BY DATE(created_at)
      ORDER BY date ASC
    `).bind(`-${days} days`).all();
    return jsonResponse({ success: true, data: results });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 最近活动
export async function getActivities(request, env, url) {
  try {
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const adminLogs = await env.MY_DB.prepare(`
      SELECT 
        'admin' as type,
        u.username as user,
        l.action as action,
        l.created_at as time,
        l.ip as ip
      FROM admin_logs l
      JOIN users u ON l.admin_id = u.id
      ORDER BY l.created_at DESC
      LIMIT ?
    `).bind(limit).all();

    const userActivities = await env.MY_DB.prepare(`
      (SELECT 
         'user' as type,
         u.nickname as user,
         '新用户注册' as action,
         u.created_at as time,
         NULL as ip
        FROM users u
        ORDER BY u.created_at DESC
        LIMIT 5)
      UNION ALL
      (SELECT 
         'user' as type,
         u.nickname as user,
         CONCAT('购买了 ', v.name) as action,
         p.created_at as time,
         NULL as ip
        FROM purchases p
        JOIN users u ON p.user_id = u.id
        LEFT JOIN vip_plans v ON p.item_id = v.id AND p.type = 'vip'
        WHERE p.status = 'success'
        ORDER BY p.created_at DESC
        LIMIT 5)
    `).all();

    let allActivities = [...adminLogs.results, ...userActivities.results];
    allActivities.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
    allActivities = allActivities.slice(0, limit);

    return jsonResponse({ success: true, data: allActivities });
  } catch (error) {
    console.error('获取活动失败:', error);
    return jsonResponse({ success: true, data: [] });
  }
}

// 管理员登录历史
export async function getAdminLogins(request, env) {
  try {
    const { results } = await env.MY_DB.prepare(`
      SELECT l.*, u.username 
      FROM admin_logs l
      JOIN users u ON l.admin_id = u.id
      ORDER BY l.created_at DESC
      LIMIT 10
    `).all();
    return jsonResponse({ success: true, data: results });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 获取互动记录
export async function getInteractions(request, env, url) {
  try {
    const type = url.searchParams.get('type'); // 'likes' 或 'favorites'
    const userId = url.searchParams.get('user_id');
    const dramaId = url.searchParams.get('drama_id');
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;

    let likesQuery = `
      SELECT l.*, 
             u.email as user_email, u.nickname as user_name,
             d.title as drama_title, d.cover_url
      FROM user_likes l
      JOIN users u ON l.user_id = u.id
      JOIN dramas d ON l.drama_id = d.id
      WHERE 1=1
    `;
    let favoritesQuery = `
      SELECT f.*, 
             u.email as user_email, u.nickname as user_name,
             d.title as drama_title, d.cover_url
      FROM user_favorites f
      JOIN users u ON f.user_id = u.id
      JOIN dramas d ON f.drama_id = d.id
      WHERE 1=1
    `;

    const params = [];
    if (userId) {
      likesQuery += ' AND l.user_id = ?';
      favoritesQuery += ' AND f.user_id = ?';
      params.push(userId);
    }
    if (dramaId) {
      likesQuery += ' AND l.drama_id = ?';
      favoritesQuery += ' AND f.drama_id = ?';
      params.push(dramaId);
    }

    likesQuery += ' ORDER BY l.created_at DESC LIMIT ? OFFSET ?';
    favoritesQuery += ' ORDER BY f.created_at DESC LIMIT ? OFFSET ?';

    const [likes, favorites] = await Promise.all([
      env.MY_DB.prepare(likesQuery).bind(...params, limit, offset).all(),
      env.MY_DB.prepare(favoritesQuery).bind(...params, limit, offset).all()
    ]);

    const [likesCount, favoritesCount] = await Promise.all([
      env.MY_DB.prepare('SELECT COUNT(*) as count FROM user_likes' + (userId ? ' WHERE user_id = ?' : '')).bind(userId).first(),
      env.MY_DB.prepare('SELECT COUNT(*) as count FROM user_favorites' + (userId ? ' WHERE user_id = ?' : '')).bind(userId).first()
    ]);

    return jsonResponse({
      success: true,
      data: {
        likes: likes.results,
        favorites: favorites.results,
        pagination: {
          page, limit,
          total: (likesCount?.count || 0) + (favoritesCount?.count || 0)
        }
      }
    });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 互动统计数据
export async function getInteractionStats(request, env, url) {
  try {
    const days = parseInt(url.searchParams.get('days') || '30');

    const [likesTotal, favoritesTotal] = await Promise.all([
      env.MY_DB.prepare('SELECT COUNT(*) as count FROM user_likes').first(),
      env.MY_DB.prepare('SELECT COUNT(*) as count FROM user_favorites').first()
    ]);

    const likesTrend = await env.MY_DB.prepare(`
      SELECT DATE(created_at) as date, COUNT(*) as count
      FROM user_likes
      WHERE created_at >= DATE('now', ?)
      GROUP BY DATE(created_at)
      ORDER BY date ASC
    `).bind(`-${days} days`).all();

    const favoritesTrend = await env.MY_DB.prepare(`
      SELECT DATE(created_at) as date, COUNT(*) as count
      FROM user_favorites
      WHERE created_at >= DATE('now', ?)
      GROUP BY DATE(created_at)
      ORDER BY date ASC
    `).bind(`-${days} days`).all();

    const topDramas = await env.MY_DB.prepare(`
      SELECT d.id, d.title, d.cover_url,
             COUNT(DISTINCT l.id) as likes_count,
             COUNT(DISTINCT f.id) as favorites_count,
             (COUNT(DISTINCT l.id) + COUNT(DISTINCT f.id)) as total_interactions
      FROM dramas d
      LEFT JOIN user_likes l ON d.id = l.drama_id
      LEFT JOIN user_favorites f ON d.id = f.drama_id
      GROUP BY d.id
      ORDER BY total_interactions DESC
      LIMIT 10
    `).all();

    return jsonResponse({
      success: true,
      data: {
        totals: {
          likes: likesTotal?.count || 0,
          favorites: favoritesTotal?.count || 0
        },
        trends: {
          likes: likesTrend.results,
          favorites: favoritesTrend.results
        },
        topDramas: topDramas.results
      }
    });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}