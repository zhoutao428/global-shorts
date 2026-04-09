// src/routes/admin/vip-plans.js
import { jsonResponse } from '../../utils/response.js';

export async function getPlans(request, env) {
  try {
    const { results } = await env.MY_DB.prepare(
      'SELECT * FROM vip_plans ORDER BY sort_order ASC'
    ).all();
    return jsonResponse({ success: true, data: results });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function createPlan(request, env) {
  try {
    const { name, duration_days, price_usd, original_price, features, sort_order, is_popular, is_active } = await request.json();
    const id = crypto.randomUUID();
    await env.MY_DB.prepare(`
      INSERT INTO vip_plans 
      (id, name, duration_days, price_usd, original_price, features, sort_order, is_popular, is_active) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(id, name, duration_days, price_usd, original_price, features, sort_order || 1, is_popular ? 1 : 0, is_active ? 1 : 0).run();
    return jsonResponse({ success: true, id });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function getPlan(request, env, id) {
  try {
    const plan = await env.MY_DB.prepare(
      'SELECT * FROM vip_plans WHERE id = ?'
    ).bind(id).first();
    if (!plan) {
      return jsonResponse({ error: '套餐不存在' }, 404);
    }
    return jsonResponse({ success: true, data: plan });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function updatePlan(request, env, id) {
  try {
    const { name, duration_days, price_usd, original_price, features, sort_order, is_popular, is_active } = await request.json();
    await env.MY_DB.prepare(`
      UPDATE vip_plans SET 
       name = ?, duration_days = ?, price_usd = ?, original_price = ?, 
       features = ?, sort_order = ?, is_popular = ?, is_active = ? 
       WHERE id = ?
    `).bind(name, duration_days, price_usd, original_price, features, sort_order, is_popular ? 1 : 0, is_active ? 1 : 0, id).run();
    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function deletePlan(request, env, id) {
  try {
    const purchaseCount = await env.MY_DB.prepare(
      'SELECT COUNT(*) as count FROM purchases WHERE item_id = ? AND type = "vip"'
    ).bind(id).first();
    if (purchaseCount.count > 0) {
      return jsonResponse({ error: '该套餐已有用户购买，无法删除' }, 400);
    }
    await env.MY_DB.prepare('DELETE FROM vip_plans WHERE id = ?').bind(id).run();
    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}