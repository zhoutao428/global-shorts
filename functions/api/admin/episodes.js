// src/routes/admin/episodes.js
import { jsonResponse } from '../../utils/response.js';

export async function getEpisodes(request, env, url) {
  try {
    const dramaId = url.searchParams.get('drama_id');
    let query = 'SELECT * FROM episodes';
    const binds = [];
    if (dramaId) {
      query += ' WHERE drama_id = ?';
      binds.push(dramaId);
    }
    query += ' ORDER BY episode_number';
    const { results } = await env.MY_DB.prepare(query).bind(...binds).all();
    return jsonResponse({ success: true, data: results });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function getEpisode(request, env, id) {
  try {
    const episode = await env.MY_DB.prepare(
      'SELECT * FROM episodes WHERE id = ?'
    ).bind(id).first();
    if (!episode) {
      return jsonResponse({ error: '分集不存在' }, 404);
    }
    return jsonResponse({ success: true, data: episode });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function createEpisode(request, env) {
  try {
    const body = await request.json();
    console.log('收到请求体:', JSON.stringify(body, null, 2));
    
    const { 
      drama_id, 
      episode_number, 
      title, 
      video_url, 
      duration, 
      price, 
      status, 
      language 
    } = body;
    
    // ========== 必填字段验证 ==========
    const missingFields = [];
    if (!drama_id) missingFields.push('drama_id');
    if (episode_number === undefined || episode_number === null) missingFields.push('episode_number');
    if (!title) missingFields.push('title');
    if (!video_url) missingFields.push('video_url');
    
    if (missingFields.length > 0) {
      return jsonResponse({ 
        error: `缺少必填字段: ${missingFields.join(', ')}`,
        received: { drama_id, episode_number, title, video_url, duration, price, status, language }
      }, 400);
    }
    
    // ========== episode_number 必须是数字 ==========
    const episodeNumber = parseInt(episode_number);
    if (isNaN(episodeNumber)) {
      return jsonResponse({ error: `集数必须是数字，收到: ${episode_number}` }, 400);
    }
    
    // ========== 其他字段默认值 ==========
    const id = crypto.randomUUID();
    const finalPrice = (price !== undefined && price !== null) ? price : 0;
    const finalStatus = status || 'published';
    const finalLanguage = language || 'en-US';
    const finalDuration = duration || 0;
    
    await env.MY_DB.prepare(
      `INSERT INTO episodes 
       (id, drama_id, episode_number, title, video_url, duration, price, status, language, created_at, updated_at) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      id, 
      drama_id, 
      episodeNumber,  // 使用转换后的数字
      title, 
      video_url, 
      finalDuration, 
      finalPrice, 
      finalStatus, 
      finalLanguage,
      new Date().toISOString(),
      new Date().toISOString()
    ).run();
    
    return jsonResponse({ success: true, id });
  } catch (error) {
    console.error('createEpisode error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function updateEpisode(request, env, id) {
  try {
    const body = await request.json();
    const { episode_number, title, video_url, duration, price, status, language } = body;
    
    // episode_number 必须是数字
    const episodeNumber = parseInt(episode_number);
    if (isNaN(episodeNumber)) {
      return jsonResponse({ error: `集数必须是数字，收到: ${episode_number}` }, 400);
    }
    
    const finalPrice = (price !== undefined && price !== null) ? price : 0;
    
    await env.MY_DB.prepare(
      'UPDATE episodes SET episode_number = ?, title = ?, video_url = ?, duration = ?, price = ?, status = ?, language = ?, updated_at = ? WHERE id = ?'
    ).bind(
      episodeNumber, 
      title, 
      video_url, 
      duration || 0,
      finalPrice,
      status || 'published', 
      language || 'en-US',
      new Date().toISOString(),
      id
    ).run();
    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function deleteEpisode(request, env, id) {
  try {
    await env.MY_DB.prepare('DELETE FROM episodes WHERE id = ?').bind(id).run();
    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function batchCreateEpisodes(request, env) {
  try {
    const { drama_id, episodes } = await request.json();
    if (!drama_id || !episodes || !Array.isArray(episodes)) {
      return jsonResponse({ error: '参数错误' }, 400);
    }
    const results = [], errors = [];
    for (const ep of episodes) {
      try {
        const id = crypto.randomUUID();
        const episodeNumber = parseInt(ep.episode_number);
        if (isNaN(episodeNumber)) {
          errors.push({ episode: ep.episode_number, error: '集数必须是数字' });
          continue;
        }
        const finalPrice = (ep.price !== undefined && ep.price !== null) ? ep.price : 0;
        await env.MY_DB.prepare(
          `INSERT INTO episodes 
           (id, drama_id, episode_number, title, video_url, duration, price, status, language, created_at, updated_at) 
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        ).bind(
          id, 
          drama_id, 
          episodeNumber, 
          ep.title, 
          ep.video_url, 
          ep.duration || 0,
          finalPrice,
          ep.status || 'published', 
          ep.language || 'en-US',
          new Date().toISOString(),
          new Date().toISOString()
        ).run();
        results.push({ id, episode_number: episodeNumber, title: ep.title });
      } catch (e) {
        errors.push({ episode: ep.episode_number, error: e.message });
      }
    }
    return jsonResponse({
      success: true,
      data: { success_count: results.length, error_count: errors.length, results, errors }
    });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function batchUpdateSort(request, env) {
  try {
    const { updates } = await request.json();
    if (!updates || !Array.isArray(updates)) {
      return jsonResponse({ error: '参数错误' }, 400);
    }
    for (const item of updates) {
      await env.MY_DB.prepare(
        'UPDATE episodes SET episode_number = ? WHERE id = ?'
      ).bind(item.episode_number, item.id).run();
    }
    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}