// src/routes/admin/ad-positions.js
import { jsonResponse } from '../../utils/response.js';

export async function getPositions(request, env) {
  try {
    const { results } = await env.MY_DB.prepare(
      'SELECT * FROM ad_positions ORDER BY created_at DESC'
    ).all();
    return jsonResponse({ success: true, data: results });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function createPosition(request, env) {
  try {
    const { name, code, width, height, duration, type, pricing, price, description, is_active } = await request.json();
    const id = crypto.randomUUID();
    await env.MY_DB.prepare(`
      INSERT INTO ad_positions 
      (id, name, code, width, height, duration, type, pricing, price, description, is_active) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(id, name, code, width, height, duration || null, type || 'image', pricing || 'cpm', price || null, description || null, is_active ? 1 : 0).run();
    return jsonResponse({ success: true, id });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function getPosition(request, env, id) {
  try {
    const position = await env.MY_DB.prepare(
      'SELECT * FROM ad_positions WHERE id = ?'
    ).bind(id).first();
    if (!position) {
      return jsonResponse({ error: '广告位不存在' }, 404);
    }
    return jsonResponse({ success: true, data: position });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function updatePosition(request, env, id) {
  try {
    const { name, code, width, height, duration, type, pricing, price, description, is_active } = await request.json();
    await env.MY_DB.prepare(`
      UPDATE ad_positions SET 
       name = ?, code = ?, width = ?, height = ?, duration = ?, 
       type = ?, pricing = ?, price = ?, description = ?, is_active = ? 
       WHERE id = ?
    `).bind(name, code, width, height, duration || null, type, pricing, price, description, is_active ? 1 : 0, id).run();
    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function deletePosition(request, env, id) {
  try {
    await env.MY_DB.prepare('DELETE FROM ad_positions WHERE id = ?').bind(id).run();
    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}