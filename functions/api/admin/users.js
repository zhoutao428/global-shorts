// src/routes/admin/users.js
import { jsonResponse } from '../../utils/response.js';

// 获取用户列表
export async function getUsers(request, env) {
  try {
    const { results } = await env.MY_DB.prepare(
      'SELECT id, email, nickname, coins, is_vip, is_admin, is_active, created_at FROM users ORDER BY created_at DESC'
    ).all();
    return jsonResponse({ success: true, data: results });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 获取单个用户
export async function getUser(request, env, id) {
  try {
    const user = await env.MY_DB.prepare(
      'SELECT id, email, nickname, coins, is_vip, is_admin, is_active, created_at FROM users WHERE id = ?'
    ).bind(id).first();
    if (!user) {
      return jsonResponse({ error: '用户不存在' }, 404);
    }
    return jsonResponse({ success: true, data: user });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}
export async function updateUser(request, env, id) {
  try {
    const { nickname, email, coins, is_vip, is_active, vip_expires_at } = await request.json();
    
    console.log('收到更新请求:', { id, coins, is_vip, is_active });  // 添加调试
    
    const updates = [];
    const params = [];
    
    if (nickname !== undefined) {
      updates.push('nickname = ?');
      params.push(nickname);
    }
    if (email !== undefined) {
      updates.push('email = ?');
      params.push(email);
    }
    if (coins !== undefined) {
      updates.push('coins = ?');
      params.push(coins);
    }
    if (is_vip !== undefined) {
      updates.push('is_vip = ?');
      params.push(is_vip ? 1 : 0);
    }
    if (is_active !== undefined) {
      updates.push('is_active = ?');
      params.push(is_active ? 1 : 0);
    }
    if (vip_expires_at !== undefined) {
      updates.push('vip_expires_at = ?');
      params.push(vip_expires_at || null);
    }
    
    if (updates.length === 0) {
      return jsonResponse({ error: '没有要更新的字段' }, 400);
    }
    
    params.push(id);
    
    const sql = `UPDATE users SET ${updates.join(', ')} WHERE id = ?`;
    console.log('执行 SQL:', sql, params);  // 添加调试
    
    await env.MY_DB.prepare(sql).bind(...params).run();
    
    // 验证更新
    const updatedUser = await env.MY_DB.prepare(
      'SELECT id, email, nickname, coins, is_vip, is_admin, is_active, created_at FROM users WHERE id = ?'
    ).bind(id).first();
    
    console.log('更新后用户:', updatedUser);  // 添加调试
    
    return jsonResponse({ success: true, data: updatedUser });
  } catch (error) {
    console.error('更新用户失败:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// 删除用户
export async function deleteUser(request, env, id) {
  try {
    await env.MY_DB.prepare('DELETE FROM users WHERE id = ?').bind(id).run();
    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}
// 创建新用户（管理员接口）
export async function createUser(request, env) {
  try {
    const { email, password, nickname, coins, is_vip, is_admin } = await request.json();

    // 验证必填字段
    if (!email || !password) {
      return jsonResponse({ error: '邮箱和密码不能为空' }, 400);
    }

    // 检查邮箱是否已存在
    const existing = await env.MY_DB.prepare(
      'SELECT id FROM users WHERE email = ?'
    ).bind(email).first();

    if (existing) {
      return jsonResponse({ error: '邮箱已存在' }, 400);
    }

    // 生成新用户 ID
    const id = crypto.randomUUID();

    // 插入用户（使用明文密码，原代码如此；建议实际项目用 bcrypt）
    await env.MY_DB.prepare(`
      INSERT INTO users 
      (id, email, password_hash, nickname, coins, is_vip, is_admin, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      id,
      email,
      password,
      nickname || null,
      coins || 0,
      is_vip ? 1 : 0,
      is_admin ? 1 : 0,
      new Date().toISOString()
    ).run();

    // 返回成功响应
    return jsonResponse({
      success: true,
      id,
      message: '用户创建成功'
    });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}
// 获取用户观看历史
export async function getUserHistory(request, env, userId, url) {
  try {
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const { results } = await env.MY_DB.prepare(`
      SELECT h.*, d.title as drama_title, e.episode_number
      FROM user_history h
      JOIN dramas d ON h.drama_id = d.id
      JOIN episodes e ON h.episode_id = e.id
      WHERE h.user_id = ?
      ORDER BY h.watched_at DESC
      LIMIT ?
    `).bind(userId, limit).all();
    return jsonResponse({ success: true, data: results });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 移除用户点赞
export async function removeUserLike(request, env, userId, dramaId) {
  try {
    await env.MY_DB.prepare(
      'DELETE FROM user_likes WHERE user_id = ? AND drama_id = ?'
    ).bind(userId, dramaId).run();

    // 更新剧集点赞数
    await env.MY_DB.prepare(
      'UPDATE dramas SET likes_count = likes_count - 1 WHERE id = ? AND likes_count > 0'
    ).bind(dramaId).run();

    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}
// 移除用户收藏
export async function removeUserFavorite(request, env, userId, dramaId) {
  try {
    await env.MY_DB.prepare(
      'DELETE FROM user_favorites WHERE user_id = ? AND drama_id = ?'
    ).bind(userId, dramaId).run();

    // 更新剧集收藏数
    await env.MY_DB.prepare(
      'UPDATE dramas SET favorites_count = favorites_count - 1 WHERE id = ? AND favorites_count > 0'
    ).bind(dramaId).run();

    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}