// src/routes/admin/translations.js
import { jsonResponse } from '../../utils/response.js';

// 获取所有翻译键及对应翻译
export async function getTranslationKeys(request, env) {
   console.log('✅ getTranslationKeys 被调用了');
  try {
    const keys = await env.MY_DB.prepare(
      'SELECT * FROM translation_keys ORDER BY key'
    ).all();

    const values = await env.MY_DB.prepare(
      'SELECT tk.key, tv.lang_code, tv.value FROM translation_values tv JOIN translation_keys tk ON tv.key_id = tk.id'
    ).all();

    const result = {};
    keys.results.forEach(key => {
      result[key.key] = { key: key.key };
    });

    values.results.forEach(val => {
      if (result[val.key]) {
        result[val.key][val.lang_code] = val.value;
      }
    });

    return jsonResponse({ success: true, data: Object.values(result) });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}
// 新增翻译键（修复版）
export async function createTranslationKey(request, env) {
  try {
    // 接收完整的翻译数据
    const { key, description, translations } = await request.json();
    
    if (!key) {
      return jsonResponse({ error: '键名不能为空' }, 400);
    }

    // 检查键是否已存在
    const existing = await env.MY_DB.prepare(
      'SELECT id FROM translation_keys WHERE key = ?'
    ).bind(key).first();

    if (existing) {
      return jsonResponse({ error: '翻译键已存在' }, 400);
    }

    // 1. 创建键名
    const keyId = crypto.randomUUID();
    await env.MY_DB.prepare(
      'INSERT INTO translation_keys (id, key, description) VALUES (?, ?, ?)'
    ).bind(keyId, key, description || null).run();

    // 2. 如果有翻译值，批量插入
    if (translations && Object.keys(translations).length > 0) {
      const stmt = env.MY_DB.prepare(
        'INSERT INTO translation_values (id, key_id, lang_code, value) VALUES (?, ?, ?, ?)'
      );
      
      const batch = [];
      for (const [lang_code, value] of Object.entries(translations)) {
        if (value && value.trim()) {  // 只插入非空翻译
          batch.push(stmt.bind(crypto.randomUUID(), keyId, lang_code, value));
        }
      }
      
      if (batch.length > 0) {
        await env.MY_DB.batch(batch);
      }
    }

    return jsonResponse({ 
      success: true, 
      id: keyId,
      message: `翻译键创建成功，已添加 ${batch?.length || 0} 种语言`
    });
  } catch (error) {
    console.error('createTranslationKey error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}
// 更新单个翻译
export async function updateTranslation(request, env, key) {
  try {
    // 确保 key 是正确解码的
    console.log('updateTranslation received key:', key);

    const { lang_code, value } = await request.json();
    console.log('lang_code:', lang_code, 'value:', value);

    // 查询键ID
    const keyRow = await env.MY_DB.prepare(
      'SELECT id FROM translation_keys WHERE key = ?'
    ).bind(key).first();

    if (!keyRow) {
      // 返回更详细的错误
      return jsonResponse({ error: `键不存在: ${key}` }, 404);
    }

    const keyId = keyRow.id;

    // 检查是否已有该语言的翻译
    const existing = await env.MY_DB.prepare(
      'SELECT id FROM translation_values WHERE key_id = ? AND lang_code = ?'
    ).bind(keyId, lang_code).first();

    if (existing) {
      await env.MY_DB.prepare(
        'UPDATE translation_values SET value = ? WHERE key_id = ? AND lang_code = ?'
      ).bind(value, keyId, lang_code).run();
    } else {
      const id = crypto.randomUUID();
      await env.MY_DB.prepare(
        'INSERT INTO translation_values (id, key_id, lang_code, value) VALUES (?, ?, ?, ?)'
      ).bind(id, keyId, lang_code, value).run();
    }

    return jsonResponse({ success: true });
  } catch (error) {
    console.error('updateTranslation error:', error);
    return jsonResponse({ error: error.message, stack: error.stack }, 500);
  }
}
// 批量导入翻译
export async function importTranslations(request, env) {
  try {
    const { data, mode, langCode } = await request.json();

    if (!langCode) {
      return jsonResponse({ error: '缺少 langCode 参数' }, 400);
    }

    // 递归展平对象
    const flatMap = new Map();
    function flatten(obj, prefix = '') {
      for (const [key, value] of Object.entries(obj)) {
        const fullKey = prefix ? `${prefix}.${key}` : key;
        if (value && typeof value === 'object' && !Array.isArray(value)) {
          flatten(value, fullKey);
        } else {
          flatMap.set(fullKey, String(value));
        }
      }
    }
    flatten(data);

    let added = 0, updated = 0;

    for (const [key, value] of flatMap.entries()) {
      // 确保 translation_keys 中有该键
      let keyRow = await env.MY_DB.prepare(
        'SELECT id FROM translation_keys WHERE key = ?'
      ).bind(key).first();

      let keyId;
      if (!keyRow) {
        keyId = crypto.randomUUID();
        await env.MY_DB.prepare(
          'INSERT INTO translation_keys (id, key) VALUES (?, ?)'
        ).bind(keyId, key).run();
        added++;
      } else {
        keyId = keyRow.id;
      }

      // 使用 ON CONFLICT 插入或更新翻译值
      const result = await env.MY_DB.prepare(
        `INSERT INTO translation_values (id, key_id, lang_code, value)
         VALUES (?, ?, ?, ?)
         ON CONFLICT(key_id, lang_code) DO UPDATE SET value = excluded.value`
      ).bind(crypto.randomUUID(), keyId, langCode, value).run();

      // 判断是插入还是更新（根据 changes 字段）
      if (result.meta && result.meta.changes > 0) {
        updated++;
      }
    }

    return jsonResponse({ success: true, added, updated });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 导出翻译
export async function exportTranslations(request, env) {
  try {
    const keys = await env.MY_DB.prepare(
      'SELECT * FROM translation_keys ORDER BY key'
    ).all();

    const values = await env.MY_DB.prepare(
      'SELECT tk.key, tv.lang_code, tv.value FROM translation_values tv JOIN translation_keys tk ON tv.key_id = tk.id'
    ).all();

    const result = {};
    keys.results.forEach(key => {
      result[key.key] = {};
    });

    values.results.forEach(val => {
      if (result[val.key]) {
        result[val.key][val.lang_code] = val.value;
      }
    });

    return new Response(JSON.stringify(result), {
      headers: {
        'Content-Type': 'application/json',
        'Content-Disposition': 'attachment; filename=translations.json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}
// 删除翻译键
export async function deleteTranslationKey(request, env, key) {
  try {
    // 删除翻译键及所有关联的翻译值
    await env.MY_DB.prepare('DELETE FROM translation_values WHERE key_id IN (SELECT id FROM translation_keys WHERE key = ?)').bind(key).run();
    await env.MY_DB.prepare('DELETE FROM translation_keys WHERE key = ?').bind(key).run();

    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}