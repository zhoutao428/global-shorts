// src/routes/admin/admins.js
import { jsonResponse } from '../../utils/response.js';

// 获取管理员列表
export async function getAdmins(request, env) {
  try {
    const { results } = await env.MY_DB.prepare(`
      SELECT id, username, email, full_name, role, last_login, created_at 
      FROM users 
      WHERE is_admin = 1 
      ORDER BY created_at DESC
    `).all();
    return jsonResponse({ success: true, data: results });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 获取单个管理员
export async function getAdmin(request, env, id) {
  try {
    const admin = await env.MY_DB.prepare(`
      SELECT id, username, email, full_name, role, last_login, created_at 
      FROM users 
      WHERE id = ? AND is_admin = 1
    `).bind(id).first();
    if (!admin) {
      return jsonResponse({ error: '管理员不存在' }, 404);
    }
    return jsonResponse({ success: true, data: admin });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 创建管理员
export async function createAdmin(request, env) {
  try {
    const { username, email, password, full_name, role } = await request.json();

    // 验证必填字段
    if (!email || !password) {
      return jsonResponse({ error: '邮箱和密码不能为空' }, 400);
    }

    // 检查用户名或邮箱是否已存在
    const existing = await env.MY_DB.prepare(
      'SELECT id FROM users WHERE email = ? OR username = ?'
    ).bind(email, username).first();

    if (existing) {
      return jsonResponse({ error: '用户名或邮箱已存在' }, 400);
    }

    const id = crypto.randomUUID();
    await env.MY_DB.prepare(`
      INSERT INTO users 
      (id, username, email, password_hash, full_name, role, is_admin, created_at) 
      VALUES (?, ?, ?, ?, ?, ?, 1, ?)
    `).bind(
      id, 
      username, 
      email, 
      password, 
      full_name || null, 
      role || 'admin', 
      new Date().toISOString()
    ).run();

    return jsonResponse({ success: true, id });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 更新管理员
export async function updateAdmin(request, env, id) {
  try {
    const { email, full_name, role, password } = await request.json();

    // 检查是否降级最后一个超级管理员
    const admin = await env.MY_DB.prepare(
      'SELECT role FROM users WHERE id = ?'
    ).bind(id).first();
    
    if (admin && admin.role === 'superadmin' && role !== 'superadmin') {
      const superAdminCount = await env.MY_DB.prepare(
        'SELECT COUNT(*) as count FROM users WHERE role = "superadmin" AND is_admin = 1'
      ).first();
      if (superAdminCount.count <= 1) {
        return jsonResponse({ error: '至少需要保留一个超级管理员' }, 400);
      }
    }

    let query = 'UPDATE users SET email = ?, full_name = ?, role = ?';
    const params = [email, full_name, role];
    
    if (password) {
      query += ', password_hash = ?';
      params.push(password);
    }
    
    query += ' WHERE id = ? AND is_admin = 1';
    params.push(id);

    await env.MY_DB.prepare(query).bind(...params).run();

    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 删除管理员
export async function deleteAdmin(request, env, id) {
  try {
    const admin = await env.MY_DB.prepare(
      'SELECT role FROM users WHERE id = ? AND is_admin = 1'
    ).bind(id).first();
    
    if (!admin) {
      return jsonResponse({ error: '管理员不存在' }, 404);
    }
    
    if (admin.role === 'superadmin') {
      const superAdminCount = await env.MY_DB.prepare(
        'SELECT COUNT(*) as count FROM users WHERE role = "superadmin" AND is_admin = 1'
      ).first();
      if (superAdminCount.count <= 1) {
        return jsonResponse({ error: '不能删除最后一个超级管理员' }, 400);
      }
    }
    
    await env.MY_DB.prepare('DELETE FROM users WHERE id = ? AND is_admin = 1').bind(id).run();
    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 获取角色列表
export async function getRoles(request, env) {
  try {
    // 从数据库获取实际角色，或者返回预定义列表
    const roles = [
      { id: 1, name: 'admin', label: '管理员' },
      { id: 2, name: 'superadmin', label: '超级管理员' },
      { id: 3, name: 'moderator', label: '审核员' }
    ];
    return jsonResponse({ success: true, data: roles });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}