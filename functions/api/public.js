// src/routes/public.js
import { jsonResponse } from '../utils/response.js';
import { getPathSegment } from '../utils/helpers.js';
import { authenticate } from '../middleware/auth.js';

// 获取剧集列表（支持分页、分类、搜索，语言过滤并返回当前用户的观看进度）

async function getDramas(request, env, url) {
  try {
    // 获取查询参数
    const language = url.searchParams.get('language') || 'en-US';
    const category = url.searchParams.get('category') || '';
    const search = url.searchParams.get('search') || '';
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;

    // 构建 WHERE 条件
    let whereClause = 'WHERE d.status = "published" AND d.language = ?';
    const params = [language];
    
    if (category && category !== 'all') {
      whereClause += ' AND d.category = ?';
      params.push(category);
    }
    if (search) {
      whereClause += ' AND (d.title LIKE ? OR d.description LIKE ?)';
      params.push(`%${search}%`, `%${search}%`);
    }

    // 获取当前用户ID（如果已登录）
    let userId = null;
    try {
      const auth = await authenticate(request, env);
      if (!auth.error) userId = auth.user.id;
    } catch (e) {
      // 忽略认证错误，视为未登录
    }

    // 查询总数
    const countQuery = `
      SELECT COUNT(*) as total 
      FROM dramas d
      ${whereClause}
    `;
    const countResult = await env.MY_DB.prepare(countQuery).bind(...params).first();
    const total = countResult.total || 0;

    // 构建主查询 - 动态计算 total_episodes
    let selectFields = `
      d.*,
      (SELECT COUNT(*) FROM episodes WHERE drama_id = d.id) as total_episodes,
      (SELECT COUNT(DISTINCT episode_id) FROM user_history WHERE user_id = ? AND drama_id = d.id) as watchedEpisodes
    `;
    let mainParams = [];
    if (userId) {
      mainParams.push(userId);
    } else {
      selectFields = `
        d.*,
        (SELECT COUNT(*) FROM episodes WHERE drama_id = d.id) as total_episodes,
        NULL as watchedEpisodes
      `;
    }

    const query = `
      SELECT ${selectFields}
      FROM dramas d
      ${whereClause}
      ORDER BY d.created_at DESC
      LIMIT ? OFFSET ?
    `;

    // 合并参数
    let allParams = [];
    if (userId) {
      allParams = [userId, ...params, limit, offset];
    } else {
      allParams = [...params, limit, offset];
    }

    const { results } = await env.MY_DB.prepare(query).bind(...allParams).all();

    // 未登录时删除 watchedEpisodes 字段
    if (!userId) {
      results.forEach(item => delete item.watchedEpisodes);
    }

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
    console.error('getDramas error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}
// 获取剧集详情
async function getDrama(request, env, url) {
  try {
    const id = getPathSegment(url.pathname, 3);
    console.log('获取剧集详情, ID:', id);
    
    const drama = await env.MY_DB.prepare(
      'SELECT * FROM dramas WHERE id = ?'
    ).bind(id).first();
    
    if (!drama) {
      console.log('剧集不存在:', id);
      return jsonResponse({ error: '剧集不存在' }, 404);
    }
    
    console.log('剧集详情获取成功:', drama.id);
    return jsonResponse({ success: true, data: drama });
  } catch (error) {
    console.error('获取剧集详情失败:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// 获取单集详情
async function getEpisode(request, env, url) {
  try {
    const id = getPathSegment(url.pathname, 3);
    const episode = await env.MY_DB.prepare(
      "SELECT * FROM episodes WHERE id = ?"
    ).bind(id).first();
    if (!episode) {
      return jsonResponse({ error: '剧集不存在' }, 404);
    }
    return jsonResponse({ success: true, data: episode });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 获取某剧集的分集列表
async function getEpisodesByDrama(request, env, url) {
  try {
    const dramaId = url.searchParams.get('drama_id');
    if (!dramaId) {
      return jsonResponse({ error: '缺少 drama_id 参数' }, 400);
    }
    const { results } = await env.MY_DB.prepare(
      'SELECT * FROM episodes WHERE drama_id = ? ORDER BY episode_number'
    ).bind(dramaId).all();
    return jsonResponse({ success: true, data: results });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 用户注册
async function register(request, env) {
  try {
    const body = await request.json();
    const { email, password, nickname } = body;

    if (!email || !password) {
      return jsonResponse({ error: '邮箱和密码不能为空' }, 400);
    }

    // 检查邮箱是否已存在
    const existing = await env.MY_DB.prepare(
      "SELECT id FROM users WHERE email = ?"
    ).bind(email).first();

    if (existing) {
      return jsonResponse({ error: '邮箱已注册' }, 400);
    }

    const newId = crypto.randomUUID();
    await env.MY_DB.prepare(`
      INSERT INTO users (id, email, password_hash, nickname, coins, is_vip, is_admin)
      VALUES (?, ?, ?, ?, 0, FALSE, FALSE)
    `).bind(newId, email, password, nickname || '用户').run();

    return jsonResponse({ success: true, message: '注册成功' });
  } catch (error) {
    console.error(`[REGISTER ERROR] ${error.message}`);
    return jsonResponse({ error: error.message }, 500);
  }
}
// 用户登录
async function login(request, env) {
  try {
    const { email, password } = await request.json();

    const user = await env.MY_DB.prepare(
      'SELECT * FROM users WHERE email = ?'
    ).bind(email).first();

    if (!user) {
      return jsonResponse({ error: '用户不存在' }, 401);
    }

    // 明文密码对比（实际应使用 bcrypt）
    if (password !== user.password_hash) {
      return jsonResponse({ error: '密码错误' }, 401);
    }

    // ========== 新增：插入登录日志 ==========
    const ip = request.headers.get('CF-Connecting-IP') || 
               request.headers.get('X-Forwarded-For') || 
               request.headers.get('X-Real-IP') || 
               'unknown';
    const userAgent = request.headers.get('User-Agent') || '';

    const logId = crypto.randomUUID();
    await env.MY_DB.prepare(
      `INSERT INTO user_login_logs (id, user_id, login_time, ip, user_agent)
       VALUES (?, ?, ?, ?, ?)`
    ).bind(logId, user.id, new Date().toISOString(), ip, userAgent).run();

    // 可选：更新用户的 last_login 字段
    await env.MY_DB.prepare(
      'UPDATE users SET last_login = ? WHERE id = ?'
    ).bind(new Date().toISOString(), user.id).run();
    // ========== 新增结束 ==========

    const token = `user_${user.id}_${Date.now()}`;
    const userSafe = {
      id: user.id,
      email: user.email,
      nickname: user.nickname,
      coins: user.coins,
      is_vip: user.is_vip,
      is_admin: user.is_admin || false
    };

    return jsonResponse({ success: true, user: userSafe, token });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 管理员登录
async function adminLogin(request, env) {
  try {
    const { username, password } = await request.json();

    const admin = await env.MY_DB.prepare(
      'SELECT * FROM users WHERE email = ? AND is_admin = 1'
    ).bind(username).first();

    if (!admin || password !== admin.password_hash) {
      return jsonResponse({ error: '用户名或密码错误' }, 401);
    }

    return jsonResponse({
      success: true,
      token: `user_${admin.id}_${Date.now()}`
    });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 获取分类列表（前台）
async function getCategories(request, env) {
  try {
    const { results } = await env.MY_DB.prepare(
      `SELECT * FROM categories 
       WHERE is_active = 1 
       ORDER BY sort_order ASC`
    ).all();
    return jsonResponse({ success: true, data: results });
  } catch (error) {
    // 出错返回空数组
    return jsonResponse({ success: true, data: [] });
  }
}

// 获取语言列表（前台）
async function getLanguages(request, env) {
  try {
    const settings = await env.MY_DB.prepare(
      "SELECT value FROM settings WHERE key = 'languages'"
    ).first();

    let languages = [];
    if (settings && settings.value) {
      languages = JSON.parse(settings.value).filter(lang => lang.is_active === true);
    }
    return jsonResponse({ success: true, data: languages });
  } catch (error) {
    return jsonResponse({ success: true, data: [] });
  }
}

// 获取指定语言的翻译
async function getTranslations(request, env, url) {
  try {
    const langCode = getPathSegment(url.pathname, 3);
    const { results } = await env.MY_DB.prepare(
      `SELECT tk.key, tv.value 
       FROM translation_keys tk
       LEFT JOIN translation_values tv ON tk.id = tv.key_id AND tv.lang_code = ?
       ORDER BY tk.key`
    ).bind(langCode).all();

    const translations = {};
    results.forEach(row => {
      translations[row.key] = row.value || '';
    });
    return jsonResponse({ success: true, data: translations });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// ==================== 评论系统相关接口 ====================

// 获取评论列表（支持分页和层级）
async function getComments(request, env, url) {
  try {
    const targetId = url.searchParams.get('targetId');
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;

    if (!targetId) {
      return jsonResponse({ error: '缺少 targetId 参数' }, 400);
    }

    // 先查询一级评论总数
    const countResult = await env.MY_DB.prepare(
      'SELECT COUNT(*) as total FROM comments WHERE target_id = ? AND parent_id IS NULL'
    ).bind(targetId).first();
    const total = countResult.total || 0;

    // 查询一级评论，并带上回复数量
    const comments = await env.MY_DB.prepare(`
      SELECT 
        c.*,
        u.nickname as user_name,
        u.avatar_url,
        (SELECT COUNT(*) FROM comments WHERE parent_id = c.id) as reply_count
      FROM comments c
      JOIN users u ON c.user_id = u.id
      WHERE c.target_id = ? AND c.parent_id IS NULL
      ORDER BY c.created_at DESC
      LIMIT ? OFFSET ?
    `).bind(targetId, limit, offset).all();

    return jsonResponse({
      success: true,
      data: comments.results,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) }
    });
  } catch (error) {
    console.error('getComments error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// 获取某个评论的回复（子评论）
async function getReplies(request, env, url) {
  try {
    const parentId = url.searchParams.get('parentId');
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '50');
    const offset = (page - 1) * limit;

    if (!parentId) {
      return jsonResponse({ error: '缺少 parentId 参数' }, 400);
    }

    const replies = await env.MY_DB.prepare(`
      SELECT 
        c.*,
        u.nickname as user_name,
        u.avatar_url
      FROM comments c
      JOIN users u ON c.user_id = u.id
      WHERE c.parent_id = ?
      ORDER BY c.created_at ASC
      LIMIT ? OFFSET ?
    `).bind(parentId, limit, offset).all();

    return jsonResponse({ success: true, data: replies.results });
  } catch (error) {
    console.error('getReplies error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// 发表评论（支持回复，需要登录）
async function createComment(request, env, user) {
  try {
    const { targetId, content, parentId } = await request.json();
    if (!targetId || !content) {
      return jsonResponse({ error: '缺少 targetId 或 content' }, 400);
    }

    const id = crypto.randomUUID();
    const now = new Date().toISOString();

    await env.MY_DB.prepare(`
      INSERT INTO comments (id, user_id, target_id, parent_id, content, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).bind(id, user.id, targetId, parentId || null, content, now, now).run();

    // 返回新评论的完整信息（便于前端直接添加）
    const newComment = await env.MY_DB.prepare(`
      SELECT c.*, u.nickname as user_name, u.avatar_url
      FROM comments c
      JOIN users u ON c.user_id = u.id
      WHERE c.id = ?
    `).bind(id).first();

    return jsonResponse({ success: true, data: newComment });
  } catch (error) {
    console.error('createComment error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// 点赞评论（需要登录）
async function likeComment(request, env, user, url) {
  try {
    const commentId = url.pathname.split('/')[3];
    
    // 检查是否已点赞
    const existing = await env.MY_DB.prepare(
      'SELECT id FROM comment_likes WHERE user_id = ? AND comment_id = ?'
    ).bind(user.id, commentId).first();
    
    if (existing) {
      return jsonResponse({ error: '已经点赞过了' }, 400);
    }

    const id = crypto.randomUUID();
    await env.MY_DB.prepare(
      'INSERT INTO comment_likes (id, user_id, comment_id) VALUES (?, ?, ?)'
    ).bind(id, user.id, commentId).run();

    // 更新评论的 likes_count
    await env.MY_DB.prepare(
      'UPDATE comments SET likes_count = likes_count + 1 WHERE id = ?'
    ).bind(commentId).run();

    // 获取最新点赞数
    const updated = await env.MY_DB.prepare(
      'SELECT likes_count FROM comments WHERE id = ?'
    ).bind(commentId).first();

    return jsonResponse({ success: true, likes_count: updated.likes_count });
  } catch (error) {
    console.error('likeComment error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// 取消点赞评论（需要登录）
async function unlikeComment(request, env, user, url) {
  try {
    const commentId = url.pathname.split('/')[3];
    
    await env.MY_DB.prepare(
      'DELETE FROM comment_likes WHERE user_id = ? AND comment_id = ?'
    ).bind(user.id, commentId).run();

    await env.MY_DB.prepare(
      'UPDATE comments SET likes_count = likes_count - 1 WHERE id = ? AND likes_count > 0'
    ).bind(commentId).run();

    const updated = await env.MY_DB.prepare(
      'SELECT likes_count FROM comments WHERE id = ?'
    ).bind(commentId).first();

    return jsonResponse({ success: true, likes_count: updated?.likes_count || 0 });
  } catch (error) {
    console.error('unlikeComment error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// 删除评论（仅作者可删，需要登录）
async function deleteComment(request, env, user, url) {
  try {
    const commentId = url.pathname.split('/')[3];
    
    const comment = await env.MY_DB.prepare(
      'SELECT user_id FROM comments WHERE id = ?'
    ).bind(commentId).first();
    
    if (!comment) return jsonResponse({ error: '评论不存在' }, 404);
    if (comment.user_id !== user.id) {
      return jsonResponse({ error: '无权删除' }, 403);
    }

    // 删除所有子评论
    await env.MY_DB.prepare('DELETE FROM comments WHERE id = ? OR parent_id = ?').bind(commentId, commentId).run();
    // 同时删除相关点赞记录
    await env.MY_DB.prepare('DELETE FROM comment_likes WHERE comment_id = ?').bind(commentId).run();

    return jsonResponse({ success: true });
  } catch (error) {
    console.error('deleteComment error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}
// 获取所有启用的金币套餐
async function getCoinPackages(request, env) {
  try {
    const { results } = await env.MY_DB.prepare(
      `SELECT id, name, base_coins, bonus_coins, price_usd, 
              original_price, tag, sort_order, is_popular 
       FROM coin_packages 
       WHERE is_active = 1 
       ORDER BY sort_order ASC`
    ).all();

    // 转换为前端期望的格式
    const packages = results.map(pkg => ({
      id: pkg.id,
      coins: pkg.base_coins,
      bonus: pkg.bonus_coins || 0,
      price: pkg.price_usd,
      originalPrice: pkg.original_price || pkg.price_usd,
      popular: pkg.is_popular === 1,
      discount: pkg.original_price ? Math.round((1 - pkg.price_usd / pkg.original_price) * 100) : 0,
      tag: pkg.tag || ''
    }));

    return jsonResponse({ success: true, data: packages });
  } catch (error) {
    console.error('getCoinPackages error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// 获取所有启用的VIP套餐
async function getVipPlans(request, env) {
  try {
    const { results } = await env.MY_DB.prepare(
      `SELECT id, name, duration_days, price_usd, original_price, 
              features, sort_order, is_popular 
       FROM vip_plans 
       WHERE is_active = 1 
       ORDER BY sort_order ASC`
    ).all();

    // 转换 features 字段（假设存储为 JSON 数组字符串）
    const plans = results.map(plan => ({
      id: plan.id,
      name: plan.name,
      duration: plan.duration_days,
      price: plan.price_usd,
      originalPrice: plan.original_price || plan.price_usd,
      popular: plan.is_popular === 1,
      discount: plan.original_price ? Math.round((1 - plan.price_usd / plan.original_price) * 100) : 0,
      features: plan.features ? JSON.parse(plan.features) : []
    }));

    return jsonResponse({ success: true, data: plans });
  } catch (error) {
    console.error('getVipPlans error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}
// ==================== 路由分发函数 ====================

// 公开路由分发函数（由入口文件调用）
export async function handlePublic(request, env, url, method) {
  const path = url.pathname;

  // GET /api/dramas
  if (path === '/api/dramas' && method === 'GET') {
    return getDramas(request, env, url);
  }

  // GET /api/dramas/:id
  if (path.startsWith('/api/dramas/') && method === 'GET' && path.split('/').length === 4) {
    return getDrama(request, env, url);
  }

  // GET /api/episode/:id
  if (path.startsWith('/api/episode/') && method === 'GET') {
    return getEpisode(request, env, url);
  }

  // GET /api/episodes?drama_id=xxx
  if (path === '/api/episodes' && method === 'GET') {
    return getEpisodesByDrama(request, env, url);
  }
// 获取金币套餐
if (path === '/api/coin-packages' && method === 'GET') {
  return getCoinPackages(request, env);
}

// 获取VIP套餐
if (path === '/api/vip-plans' && method === 'GET') {
  return getVipPlans(request, env);
}
  // POST /api/register
  if (path === '/api/register' && method === 'POST') {
    return register(request, env);
  }

  // POST /api/login
  if (path === '/api/login' && method === 'POST') {
    return login(request, env);
  }

  // POST /api/admin/login (放在公开接口，因为登录不需要管理员token)
  if (path === '/api/admin/login' && method === 'POST') {
    return adminLogin(request, env);
  }

  // GET /api/categories
  if (path === '/api/categories' && method === 'GET') {
    return getCategories(request, env);
  }

  // GET /api/languages
  if (path === '/api/languages' && method === 'GET') {
    return getLanguages(request, env);
  }

  // GET /api/translations/:langCode
  if (path.startsWith('/api/translations/') && method === 'GET' && path.split('/').length === 4) {
    return getTranslations(request, env, url);
  }

  // ==================== 评论系统路由 ====================
  
  // GET /api/comments?targetId=xxx&page=1&limit=20 - 获取一级评论列表
  if (path === '/api/comments' && method === 'GET' && !url.searchParams.has('parentId')) {
    return getComments(request, env, url);
  }

  // GET /api/comments?parentId=xxx&page=1&limit=50 - 获取回复列表
  if (path === '/api/comments' && method === 'GET' && url.searchParams.has('parentId')) {
    return getReplies(request, env, url);
  }

  // POST /api/comments - 发表评论（需要登录）
  if (path === '/api/comments' && method === 'POST') {
    // 需要验证用户登录
    const auth = await authenticate(request, env);
    if (auth.error) {
      return jsonResponse({ error: auth.error }, auth.status);
    }
    return createComment(request, env, auth.user);
  }

  // POST /api/comments/:commentId/like - 点赞评论（需要登录）
  if (path.match(/^\/api\/comments\/[^\/]+\/like$/) && method === 'POST') {
    const auth = await authenticate(request, env);
    if (auth.error) {
      return jsonResponse({ error: auth.error }, auth.status);
    }
    return likeComment(request, env, auth.user, url);
  }

  // DELETE /api/comments/:commentId/like - 取消点赞（需要登录）
  if (path.match(/^\/api\/comments\/[^\/]+\/like$/) && method === 'DELETE') {
    const auth = await authenticate(request, env);
    if (auth.error) {
      return jsonResponse({ error: auth.error }, auth.status);
    }
    return unlikeComment(request, env, auth.user, url);
  }

  // DELETE /api/comments/:commentId - 删除评论（需要登录）
  if (path.match(/^\/api\/comments\/[^\/]+$/) && method === 'DELETE' && path.split('/').length === 4) {
    const auth = await authenticate(request, env);
    if (auth.error) {
      return jsonResponse({ error: auth.error }, auth.status);
    }
    return deleteComment(request, env, auth.user, url);
  }

  // 如果不是公开接口，返回 null 表示未匹配
  return null;
}