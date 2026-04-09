// src/routes/admin/coin-packages.js
import { jsonResponse } from '../../utils/response.js';

export async function getPackages(request, env) {
  try {
    const { results } = await env.MY_DB.prepare(
      'SELECT * FROM coin_packages ORDER BY sort_order ASC'
    ).all();
    return jsonResponse({ success: true, data: results });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function createPackage(request, env) {
  try {
    const { name, base_coins, bonus_coins, price_usd, tag, sort_order, is_popular, is_active } = await request.json();
    const id = crypto.randomUUID();
    await env.MY_DB.prepare(`
      INSERT INTO coin_packages 
      (id, name, base_coins, bonus_coins, price_usd, tag, sort_order, is_popular, is_active) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(id, name, base_coins, bonus_coins || 0, price_usd, tag, sort_order || 1, is_popular ? 1 : 0, is_active ? 1 : 0).run();
    return jsonResponse({ success: true, id });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function getPackage(request, env, id) {
  try {
    const pkg = await env.MY_DB.prepare(
      'SELECT * FROM coin_packages WHERE id = ?'
    ).bind(id).first();
    if (!pkg) {
      return jsonResponse({ error: '套餐不存在' }, 404);
    }
    return jsonResponse({ success: true, data: pkg });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function updatePackage(request, env, id) {
  try {
    const { name, base_coins, bonus_coins, price_usd, tag, sort_order, is_popular, is_active } = await request.json();
    await env.MY_DB.prepare(`
      UPDATE coin_packages SET 
       name = ?, base_coins = ?, bonus_coins = ?, price_usd = ?, 
       tag = ?, sort_order = ?, is_popular = ?, is_active = ? 
       WHERE id = ?
    `).bind(name, base_coins, bonus_coins || 0, price_usd, tag, sort_order, is_popular ? 1 : 0, is_active ? 1 : 0, id).run();
    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function deletePackage(request, env, id) {
  try {
    const purchaseCount = await env.MY_DB.prepare(
      'SELECT COUNT(*) as count FROM purchases WHERE item_id = ? AND type = "coin"'
    ).bind(id).first();
    if (purchaseCount.count > 0) {
      return jsonResponse({ error: '该套餐已有用户购买，无法删除' }, 400);
    }
    await env.MY_DB.prepare('DELETE FROM coin_packages WHERE id = ?').bind(id).run();
    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}