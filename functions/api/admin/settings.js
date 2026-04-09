// src/routes/admin/settings.js
import { jsonResponse } from '../../utils/response.js';

// ---------- 语言管理 ----------
export async function getLanguages(request, env) {
  try {
    const settings = await env.MY_DB.prepare(
      "SELECT value FROM settings WHERE key = 'languages'"
    ).first();

    let languages = [];
    if (settings && settings.value) {
      languages = JSON.parse(settings.value);
    } else {
      languages = [
        { code: 'zh-CN', name: '简体中文', native_name: '中文', is_default: true, is_active: true, sort_order: 1, flag: '🇨🇳', direction: 'ltr' },
        { code: 'en-US', name: 'English', native_name: 'English', is_default: false, is_active: true, sort_order: 2, flag: '🇺🇸', direction: 'ltr' },
        { code: 'es-ES', name: 'Español', native_name: 'Español', is_default: false, is_active: true, sort_order: 3, flag: '🇪🇸', direction: 'ltr' },
        { code: 'ja-JP', name: '日语', native_name: '日本語', is_default: false, is_active: false, sort_order: 4, flag: '🇯🇵', direction: 'ltr' },
        { code: 'ko-KR', name: '韩语', native_name: '한국어', is_default: false, is_active: false, sort_order: 5, flag: '🇰🇷', direction: 'ltr' }
      ];
    }
    return jsonResponse({ success: true, data: languages });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function createLanguage(request, env) {
  try {
    const { code, name, native_name, flag, sort_order, is_default, is_active, direction } = await request.json();
    const languageFlag = flag || '🌐';

    const settings = await env.MY_DB.prepare(
      "SELECT value FROM settings WHERE key = 'languages'"
    ).first();

    let languages = [];
    if (settings && settings.value) {
      languages = JSON.parse(settings.value);
    }

    if (languages.some(lang => lang.code === code)) {
      return jsonResponse({ error: '语言代码已存在' }, 400);
    }

    if (is_default) {
      languages.forEach(lang => lang.is_default = false);
    }

    languages.push({
      code, name, native_name: native_name || name, flag: languageFlag,
      sort_order: sort_order || languages.length + 1,
      is_default: is_default || false,
      is_active: is_active !== false,
      direction: direction || 'ltr'
    });

    languages.sort((a, b) => a.sort_order - b.sort_order);

    await env.MY_DB.prepare(
      "UPDATE settings SET value = ? WHERE key = 'languages'"
    ).bind(JSON.stringify(languages)).run();

    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function getLanguage(request, env, code) {
  try {
    const settings = await env.MY_DB.prepare(
      "SELECT value FROM settings WHERE key = 'languages'"
    ).first();
    if (!settings || !settings.value) {
      return jsonResponse({ error: '语言配置不存在' }, 404);
    }
    const languages = JSON.parse(settings.value);
    const language = languages.find(lang => lang.code === code);
    if (!language) {
      return jsonResponse({ error: '语言不存在' }, 404);
    }
    return jsonResponse({ success: true, data: language });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function updateLanguage(request, env, code) {
  try {
    const { name, native_name, flag, sort_order, is_default, is_active, direction } = await request.json();
    const settings = await env.MY_DB.prepare(
      "SELECT value FROM settings WHERE key = 'languages'"
    ).first();
    if (!settings || !settings.value) {
      return jsonResponse({ error: '语言配置不存在' }, 404);
    }
    let languages = JSON.parse(settings.value);
    const index = languages.findIndex(lang => lang.code === code);
    if (index === -1) {
      return jsonResponse({ error: '语言不存在' }, 404);
    }

    if (is_default) {
      languages.forEach(lang => lang.is_default = false);
    }

    languages[index] = {
      ...languages[index],
      name: name || languages[index].name,
      native_name: native_name || languages[index].native_name,
      flag: flag || languages[index].flag,
      sort_order: sort_order || languages[index].sort_order,
      is_default: is_default || false,
      is_active: is_active !== undefined ? is_active : languages[index].is_active,
      direction: direction || languages[index].direction
    };

    languages.sort((a, b) => a.sort_order - b.sort_order);

    await env.MY_DB.prepare(
      "UPDATE settings SET value = ? WHERE key = 'languages'"
    ).bind(JSON.stringify(languages)).run();

    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function deleteLanguage(request, env, code) {
  try {
    const settings = await env.MY_DB.prepare(
      "SELECT value FROM settings WHERE key = 'languages'"
    ).first();
    if (!settings || !settings.value) {
      return jsonResponse({ error: '语言配置不存在' }, 404);
    }
    let languages = JSON.parse(settings.value);
    const language = languages.find(lang => lang.code === code);
    if (!language) {
      return jsonResponse({ error: '语言不存在' }, 404);
    }
    if (language.is_default) {
      return jsonResponse({ error: '不能删除默认语言' }, 400);
    }
    languages = languages.filter(lang => lang.code !== code);

    await env.MY_DB.prepare(
      "UPDATE settings SET value = ? WHERE key = 'languages'"
    ).bind(JSON.stringify(languages)).run();

    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// ---------- 区域设置 ----------
export async function updateRegionSettings(request, env) {
  try {
    const settings = await request.json();
    await env.MY_DB.prepare(
      "UPDATE settings SET value = ? WHERE key = 'region_settings'"
    ).bind(JSON.stringify(settings)).run();
    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// ---------- 系统设置（通用） ----------
export async function getAllSettings(request, env) {
  try {
    const { results } = await env.MY_DB.prepare(
      'SELECT * FROM settings ORDER BY key ASC'
    ).all();
    const settings = {};
    results.forEach(item => {
      try {
        settings[item.key] = JSON.parse(item.value);
      } catch {
        settings[item.key] = item.value;
      }
    });
    return jsonResponse({ success: true, data: settings });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function updateAllSettings(request, env) {
  try {
    const settings = await request.json();
    for (const [key, value] of Object.entries(settings)) {
      const existing = await env.MY_DB.prepare(
        'SELECT id FROM settings WHERE key = ?'
      ).bind(key).first();
      const valueStr = typeof value === 'object' ? JSON.stringify(value) : String(value);
      if (existing) {
        await env.MY_DB.prepare(
          'UPDATE settings SET value = ? WHERE key = ?'
        ).bind(valueStr, key).run();
      } else {
        const id = crypto.randomUUID();
        await env.MY_DB.prepare(
          'INSERT INTO settings (id, key, value) VALUES (?, ?, ?)'
        ).bind(id, key, valueStr).run();
      }
    }
    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function getSetting(request, env, key) {
  try {
    const setting = await env.MY_DB.prepare(
      'SELECT * FROM settings WHERE key = ?'
    ).bind(key).first();
    if (!setting) {
      return jsonResponse({ error: '设置不存在' }, 404);
    }
    let value;
    try {
      value = JSON.parse(setting.value);
    } catch {
      value = setting.value;
    }
    return jsonResponse({ success: true, data: { [key]: value } });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function updateSetting(request, env, key) {
  try {
    const { value } = await request.json();
    const valueStr = typeof value === 'object' ? JSON.stringify(value) : String(value);
    const existing = await env.MY_DB.prepare(
      'SELECT id FROM settings WHERE key = ?'
    ).bind(key).first();
    if (existing) {
      await env.MY_DB.prepare(
        'UPDATE settings SET value = ? WHERE key = ?'
      ).bind(valueStr, key).run();
    } else {
      const id = crypto.randomUUID();
      await env.MY_DB.prepare(
        'INSERT INTO settings (id, key, value) VALUES (?, ?, ?)'
      ).bind(id, key, valueStr).run();
    }
    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}