// src/routes/admin/interactions.js
import { jsonResponse } from '../../utils/response.js';

// 获取点赞列表（可筛选）
export async function getLikes(request, env, url) {
  try {
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;
    const userId = url.searchParams.get('user_id');
    const dramaId = url.searchParams.get('drama_id');

    let whereClause = 'WHERE 1=1';
    const params = [];
    if (userId) {
      whereClause += ' AND l.user_id = ?';
      params.push(userId);
    }
    if (dramaId) {
      whereClause += ' AND l.drama_id = ?';
      params.push(dramaId);
    }

    const countResult = await env.MY_DB.prepare(
      `SELECT COUNT(*) as total FROM user_likes l ${whereClause}`
    ).bind(...params).first();
    const total = countResult.total || 0;

    const { results } = await env.MY_DB.prepare(`
      SELECT l.*, u.email, u.nickname, d.title as drama_title
      FROM user_likes l
      JOIN users u ON l.user_id = u.id
      JOIN dramas d ON l.drama_id = d.id
      ${whereClause}
      ORDER BY l.created_at DESC
      LIMIT ? OFFSET ?
    `).bind(...params, limit, offset).all();

    return jsonResponse({
      success: true,
      data: results,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) }
    });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 删除点赞记录
export async function deleteLike(request, env, id) {
  try {
    // 先获取点赞信息，以便更新剧集点赞数
    const like = await env.MY_DB.prepare(
      'SELECT drama_id FROM user_likes WHERE id = ?'
    ).bind(id).first();

    if (!like) {
      return jsonResponse({ error: '点赞记录不存在' }, 404);
    }

    await env.MY_DB.prepare('DELETE FROM user_likes WHERE id = ?').bind(id).run();

    // 更新剧集点赞数
    await env.MY_DB.prepare(
      'UPDATE dramas SET likes_count = likes_count - 1 WHERE id = ? AND likes_count > 0'
    ).bind(like.drama_id).run();

    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 获取收藏列表（可筛选）
export async function getFavorites(request, env, url) {
  // 类似 getLikes，从 user_favorites 表查询
  try {
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;
    const userId = url.searchParams.get('user_id');
    const dramaId = url.searchParams.get('drama_id');

    let whereClause = 'WHERE 1=1';
    const params = [];
    if (userId) {
      whereClause += ' AND f.user_id = ?';
      params.push(userId);
    }
    if (dramaId) {
      whereClause += ' AND f.drama_id = ?';
      params.push(dramaId);
    }

    const countResult = await env.MY_DB.prepare(
      `SELECT COUNT(*) as total FROM user_favorites f ${whereClause}`
    ).bind(...params).first();
    const total = countResult.total || 0;

    const { results } = await env.MY_DB.prepare(`
      SELECT f.*, u.email, u.nickname, d.title as drama_title
      FROM user_favorites f
      JOIN users u ON f.user_id = u.id
      JOIN dramas d ON f.drama_id = d.id
      ${whereClause}
      ORDER BY f.created_at DESC
      LIMIT ? OFFSET ?
    `).bind(...params, limit, offset).all();

    return jsonResponse({
      success: true,
      data: results,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) }
    });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 删除收藏记录
export async function deleteFavorite(request, env, id) {
  try {
    const fav = await env.MY_DB.prepare(
      'SELECT drama_id FROM user_favorites WHERE id = ?'
    ).bind(id).first();

    if (!fav) {
      return jsonResponse({ error: '收藏记录不存在' }, 404);
    }

    await env.MY_DB.prepare('DELETE FROM user_favorites WHERE id = ?').bind(id).run();
// 内容表现
if (path === '/api/admin/content/performance' && method === 'GET') {
  return contentPerformance.getOverview(request, env, url);
}
if (path === '/api/admin/content/performance/dramas' && method === 'GET') {
  return contentPerformance.getDramasPage(request, env, url);
}
if (path === '/api/admin/content/performance/categories' && method === 'GET') {
  return contentPerformance.getCategoryStats(request, env, url);
}
if (path === '/api/admin/content/performance/export' && method === 'GET') {
  return contentPerformance.exportData(request, env, url);
}
    // 更新剧集收藏数
    await env.MY_DB.prepare(
      'UPDATE dramas SET favorites_count = favorites_count - 1 WHERE id = ? AND favorites_count > 0'
    ).bind(fav.drama_id).run();

    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}