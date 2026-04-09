// src/routes/admin/categories.js
import { jsonResponse } from '../../utils/response.js';

export async function getCategories(request, env) {
  try {
    const { results } = await env.MY_DB.prepare(
      'SELECT * FROM categories ORDER BY sort_order ASC'
    ).all();
    return jsonResponse({ success: true, data: results });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function createCategory(request, env) {
  try {
    const { name, slug, description, sort_order, is_active } = await request.json();
    const id = crypto.randomUUID();
    await env.MY_DB.prepare(
      'INSERT INTO categories (id, name, slug, description, sort_order, is_active) VALUES (?, ?, ?, ?, ?, ?)'
    ).bind(id, name, slug, description, sort_order || 0, is_active ? 1 : 0).run();
    return jsonResponse({ success: true, id });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function getCategory(request, env, id) {
  try {
    const category = await env.MY_DB.prepare(
      'SELECT * FROM categories WHERE id = ?'
    ).bind(id).first();
    if (!category) {
      return jsonResponse({ error: '分类不存在' }, 404);
    }
    return jsonResponse({ success: true, data: category });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function updateCategory(request, env, id) {
  try {
    const { name, slug, description, sort_order, is_active } = await request.json();
    await env.MY_DB.prepare(
      'UPDATE categories SET name = ?, slug = ?, description = ?, sort_order = ?, is_active = ? WHERE id = ?'
    ).bind(name, slug, description, sort_order || 0, is_active ? 1 : 0, id).run();
    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function deleteCategory(request, env, id) {
  try {
    // 检查分类下是否有剧集
    const dramaCount = await env.MY_DB.prepare(
      'SELECT COUNT(*) as count FROM dramas WHERE category = ?'
    ).bind(id).first();
    if (dramaCount.count > 0) {
      return jsonResponse({ error: '该分类下还有剧集，无法删除' }, 400);
    }
    await env.MY_DB.prepare('DELETE FROM categories WHERE id = ?').bind(id).run();
    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}