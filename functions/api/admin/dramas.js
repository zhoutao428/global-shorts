// functions/api/admin/dramas.js

export async function getDramas(request, env) {
    try {
        const url = new URL(request.url);
        const page = parseInt(url.searchParams.get('page')) || 1;
        const limit = parseInt(url.searchParams.get('limit')) || 10;
        const search = url.searchParams.get('search') || '';
        const category = url.searchParams.get('category') || '';
        const status = url.searchParams.get('status') || '';
        
        const offset = (page - 1) * limit;
        
        console.log('getDramas called with:', { page, limit, search, category, status, offset });

        // 获取当前登录用户ID
        let userId = null;
        try {
            const { authenticate } = await import('../../middleware/auth.js');
            const auth = await authenticate(request, env);
            if (!auth.error) {
                userId = auth.user?.id;
            }
        } catch (e) {
            console.log('Auth error (non-critical):', e.message);
        }

        // 构建 WHERE 条件
        let whereConditions = [];
        let queryParams = [];
        
        if (search) {
            whereConditions.push('d.title LIKE ?');
            queryParams.push(`%${search}%`);
        }
        if (category) {
            whereConditions.push('d.category = ?');
            queryParams.push(category);
        }
        if (status) {
            whereConditions.push('d.status = ?');
            queryParams.push(status);
        }
        
        const whereClause = whereConditions.length > 0 
            ? 'WHERE ' + whereConditions.join(' AND ') 
            : '';

        // 1. 查询总数
        const countQuery = `
            SELECT COUNT(*) as total 
            FROM dramas d
            ${whereClause}
        `;
        console.log('Count query:', countQuery);
        console.log('Count params:', queryParams);
        
        const countResult = await env.MY_DB.prepare(countQuery).bind(...queryParams).first();
        const total = countResult?.total || 0;
        console.log('Total count:', total);

        // 2. 查询数据
        const dataQuery = `
            SELECT 
                d.id,
                d.title,
                d.description,
                d.cover_url,
                d.category,
                d.language,
                d.region,
                d.total_episodes,
                d.views_count as view_count,
                d.likes_count as like_count,
                d.favorites_count,
                d.comments_count,
                d.shares_count,
                d.is_vip,
                d.status,
                d.tags,
                d.subtitles,
                d.created_at,
                d.updated_at,
                (SELECT COUNT(*) FROM episodes e WHERE e.drama_id = d.id) as actual_episodes,
                (SELECT COUNT(DISTINCT uh.episode_id) FROM user_history uh WHERE uh.drama_id = d.id AND uh.user_id = ?) as watchedEpisodes
            FROM dramas d
            ${whereClause}
            ORDER BY d.created_at DESC
            LIMIT ${limit} OFFSET ${offset}
        `;
        
        const dataParams = [userId || '', ...queryParams];
        console.log('Data query:', dataQuery);
        console.log('Data params:', dataParams);
        
        const statement = env.MY_DB.prepare(dataQuery).bind(...dataParams);
        console.log('SQL:', statement);
        
        const { results } = await statement.all();
        console.log('Results count:', results?.length || 0);
        
        const processedResults = (results || []).map(drama => ({
            ...drama,
            total_episodes: drama.actual_episodes || drama.total_episodes || 0
        }));

        return jsonResponse({ 
            success: true, 
            data: processedResults,
            pagination: {
                current_page: page,
                per_page: limit,
                total: total,
                total_pages: Math.ceil(total / limit)
            }
        });
    } catch (error) { 
        console.error('getDramas ERROR:', error);
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
        console.error('Error cause:', error.cause);
        
        return jsonResponse({ 
            success: false,
            error: error.message,
            stack: error.stack,
            cause: error.cause?.message
        }, 500); 
    }
}

export async function createDrama(request, env) {
    try {
        const { title, description, cover_url, category, total_episodes, status, tags, subtitles, region, language } = await request.json();
        const id = crypto.randomUUID();
        
        await env.MY_DB.prepare(`
            INSERT INTO dramas (id, title, description, cover_url, category, total_episodes, status, tags, subtitles, region, language) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(id, title, description || '', cover_url || '', category || '', total_episodes || 0, status || 'draft', tags ? JSON.stringify(tags) : null, subtitles ? JSON.stringify(subtitles) : null, region || 'global', language || 'en-US').run();
        
        return jsonResponse({ success: true, id });
    } catch (error) { 
        console.error('createDrama error:', error);
        return jsonResponse({ error: error.message }, 500); 
    }
}

export async function getDrama(request, env, id) {
    try {
        const drama = await env.MY_DB.prepare(`
            SELECT 
                d.*,
                d.views_count as view_count,
                d.likes_count as like_count,
                (SELECT COUNT(*) FROM episodes e WHERE e.drama_id = d.id) as actual_episodes
            FROM dramas d 
            WHERE d.id = ?
        `).bind(id).first();
        
        if (!drama) {
            return jsonResponse({ error: '剧集不存在' }, 404);
        }
        
        // 确保 total_episodes 有值
        drama.total_episodes = drama.actual_episodes || drama.total_episodes || 0;
        
        // 解析 JSON 字段
        if (drama.tags) {
            try {
                drama.tags = JSON.parse(drama.tags);
            } catch {
                drama.tags = drama.tags.split(',').map(t => t.trim());
            }
        } else {
            drama.tags = [];
        }
        
        if (drama.subtitles) {
            try {
                drama.subtitles = JSON.parse(drama.subtitles);
            } catch {
                drama.subtitles = [];
            }
        } else {
            drama.subtitles = [];
        }
        
        return jsonResponse({ success: true, data: drama });
    } catch (error) { 
        console.error('getDrama error:', error);
        return jsonResponse({ error: error.message }, 500); 
    }
}

export async function updateDrama(request, env, id) {
    try {
        const { title, description, cover_url, category, total_episodes, status, tags, subtitles, region, language } = await request.json();
        
        await env.MY_DB.prepare(`
            UPDATE dramas 
            SET title = ?, description = ?, cover_url = ?, category = ?, total_episodes = ?, status = ?, tags = ?, subtitles = ?, region = ?, language = ?, updated_at = CURRENT_TIMESTAMP
            WHERE id = ?
        `).bind(title, description || '', cover_url || '', category || '', total_episodes || 0, status || 'draft', tags ? JSON.stringify(tags) : null, subtitles ? JSON.stringify(subtitles) : null, region || 'global', language || 'en-US', id).run();
        
        return jsonResponse({ success: true });
    } catch (error) { 
        console.error('updateDrama error:', error);
        return jsonResponse({ error: error.message }, 500); 
    }
}

export async function deleteDrama(request, env, id) {
    try {
        // 先删除关联的分集
        await env.MY_DB.prepare('DELETE FROM episodes WHERE drama_id = ?').bind(id).run();
        // 再删除剧集
        await env.MY_DB.prepare('DELETE FROM dramas WHERE id = ?').bind(id).run();
        
        return jsonResponse({ success: true });
    } catch (error) { 
        console.error('deleteDrama error:', error);
        return jsonResponse({ error: error.message }, 500); 
    }
}