// src/routes/admin/dramas.js
import { jsonResponse } from '../../utils/response.js';

export async function getDramas(request, env) {
    try {
        // 获取当前登录用户ID
        let userId = null;
        try {
            const { authenticate } = await import('../../middleware/auth.js');
            const auth = await authenticate(request, env);
            if (!auth.error) {
                userId = auth.user?.id;
            }
        } catch (e) {
            // 未登录，userId 保持 null
        }

        const query = `
            SELECT 
                d.*,
                COUNT(DISTINCT h.episode_id) as watchedEpisodes
            FROM dramas d
            LEFT JOIN user_history h ON d.id = h.drama_id AND h.user_id = ?
            GROUP BY d.id
            ORDER BY d.created_at DESC
        `;
        
        const { results } = await env.MY_DB.prepare(query).bind(userId).all();
        
        return jsonResponse({ success: true, data: results });
    } catch (error) { 
        return jsonResponse({ error: error.message }, 500); 
    }
}
export async function createDrama(request, env) {
    try {
        const { title, description, cover_url, category, total_episodes, status, tags, subtitles, region, language } = await request.json();
        const id = crypto.randomUUID();
        await env.MY_DB.prepare(`
            INSERT INTO dramas (id, title, description, cover_url, category, total_episodes, status, tags, subtitles, region, language) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(id, title, description, cover_url, category, total_episodes || 0, status || 'draft', tags ? JSON.stringify(tags) : null, subtitles ? JSON.stringify(subtitles) : null, region || 'global', language || 'en-US').run();
        return jsonResponse({ success: true, id });
    } catch (error) { return jsonResponse({ error: error.message }, 500); }
}

export async function getDrama(request, env, id) {
    try {
        const drama = await env.MY_DB.prepare('SELECT * FROM dramas WHERE id = ?').bind(id).first();
        if (!drama) return jsonResponse({ error: '剧集不存在' }, 404);
        return jsonResponse({ success: true, data: drama });
    } catch (error) { return jsonResponse({ error: error.message }, 500); }
}

export async function updateDrama(request, env, id) {
    try {
        const { title, description, cover_url, category, total_episodes, status, tags, subtitles, region, language } = await request.json();
        await env.MY_DB.prepare(`
            UPDATE dramas SET title = ?, description = ?, cover_url = ?, category = ?, total_episodes = ?, status = ?, tags = ?, subtitles = ?, region = ?, language = ? WHERE id = ?
        `).bind(title, description, cover_url, category, total_episodes || 0, status || 'draft', tags ? JSON.stringify(tags) : null, subtitles ? JSON.stringify(subtitles) : null, region || 'global', language || 'en-US', id).run();
        return jsonResponse({ success: true });
    } catch (error) { return jsonResponse({ error: error.message }, 500); }
}

export async function deleteDrama(request, env, id) {
    try {
        await env.MY_DB.prepare('DELETE FROM dramas WHERE id = ?').bind(id).run();
        return jsonResponse({ success: true });
    } catch (error) { return jsonResponse({ error: error.message }, 500); }
}