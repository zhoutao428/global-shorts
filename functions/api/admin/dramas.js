// functions/api/admin/dramas.js
import { jsonResponse } from '../../utils/response.js';

export async function getDramas(request, env) {
    try {
        const url = new URL(request.url);
        const page = parseInt(url.searchParams.get('page')) || 1;
        const limit = parseInt(url.searchParams.get('limit')) || 10;
        const search = url.searchParams.get('search') || '';
        const category = url.searchParams.get('category') || '';
        const status = url.searchParams.get('status') || '';
        
        const offset = (page - 1) * limit;
        
        // 获取当前登录用户ID（已经在 index.js 中验证过管理员权限）
        const userId = request.user?.id || null;

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
        
        let countResult;
        if (queryParams.length > 0) {
            countResult = await env.MY_DB.prepare(countQuery).bind(...queryParams).first();
        } else {
            countResult = await env.MY_DB.prepare(countQuery).first();
        }
        const total = countResult?.total || 0;

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
                COALESCE(d.total_episodes, 0) as total_episodes,
                COALESCE(d.views_count, 0) as view_count,
                COALESCE(d.likes_count, 0) as like_count,
                COALESCE(d.favorites_count, 0) as favorites_count,
                COALESCE(d.comments_count, 0) as comments_count,
                COALESCE(d.shares_count, 0) as shares_count,
                d.is_vip,
                d.status,
                d.tags,
                d.subtitles,
                d.created_at,
              
                (SELECT COUNT(*) FROM episodes e WHERE e.drama_id = d.id) as actual_episodes
            FROM dramas d
            ${whereClause}
            ORDER BY d.created_at DESC
            LIMIT ${limit} OFFSET ${offset}
        `;
        
        let results;
        if (queryParams.length > 0) {
            const statement = env.MY_DB.prepare(dataQuery).bind(...queryParams);
            const result = await statement.all();
            results = result.results;
        } else {
            const statement = env.MY_DB.prepare(dataQuery);
            const result = await statement.all();
            results = result.results;
        }
        
        // 处理结果
        const processedResults = (results || []).map(drama => ({
            ...drama,
            total_episodes: drama.actual_episodes || drama.total_episodes || 0,
            tags: parseJsonField(drama.tags),
            subtitles: parseJsonField(drama.subtitles)
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
        console.error('getDramas error:', error);
        return new Response(JSON.stringify({ 
            success: false,
            error: error.message,
            stack: error.stack 
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

// 辅助函数：解析 JSON 字段
function parseJsonField(field) {
    if (!field) return [];
    if (Array.isArray(field)) return field;
    try {
        return JSON.parse(field);
    } catch {
        return [];
    }
}

export async function createDrama(request, env) {
    try {
        const body = await request.json();
        const { title, description, cover_url, category, total_episodes, status, tags, subtitles, region, language } = body;
        const id = crypto.randomUUID();
        
        await env.MY_DB.prepare(`
            INSERT INTO dramas (id, title, description, cover_url, category, total_episodes, status, tags, subtitles, region, language) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(
            id, 
            title, 
            description || '', 
            cover_url || '', 
            category || '', 
            total_episodes || 0, 
            status || 'draft', 
            tags ? JSON.stringify(tags) : null, 
            subtitles ? JSON.stringify(subtitles) : null, 
            region || 'global', 
            language || 'en-US'
        ).run();
        
        return jsonResponse({ success: true, id });
    } catch (error) {
        console.error('createDrama error:', error);
        return new Response(JSON.stringify({ 
            success: false,
            error: error.message 
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

export async function getDrama(request, env, id) {
    try {
        const drama = await env.MY_DB.prepare(`
            SELECT 
                d.*,
                COALESCE(d.views_count, 0) as view_count,
                COALESCE(d.likes_count, 0) as like_count,
                (SELECT COUNT(*) FROM episodes e WHERE e.drama_id = d.id) as actual_episodes
            FROM dramas d 
            WHERE d.id = ?
        `).bind(id).first();
        
        if (!drama) {
            return jsonResponse({ error: '剧集不存在' }, 404);
        }
        
        drama.total_episodes = drama.actual_episodes || drama.total_episodes || 0;
        drama.tags = parseJsonField(drama.tags);
        drama.subtitles = parseJsonField(drama.subtitles);
        
        return jsonResponse({ success: true, data: drama });
    } catch (error) {
        console.error('getDrama error:', error);
        return new Response(JSON.stringify({ 
            success: false,
            error: error.message 
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

export async function updateDrama(request, env, id) {
    try {
        const body = await request.json();
        const { title, description, cover_url, category, total_episodes, status, tags, subtitles, region, language } = body;
        
        await env.MY_DB.prepare(`
            UPDATE dramas 
            SET title = ?, description = ?, cover_url = ?, category = ?, total_episodes = ?, status = ?, tags = ?, subtitles = ?, region = ?, language = ?, updated_at = CURRENT_TIMESTAMP
            WHERE id = ?
        `).bind(
            title, 
            description || '', 
            cover_url || '', 
            category || '', 
            total_episodes || 0, 
            status || 'draft', 
            tags ? JSON.stringify(tags) : null, 
            subtitles ? JSON.stringify(subtitles) : null, 
            region || 'global', 
            language || 'en-US', 
            id
        ).run();
        
        return jsonResponse({ success: true });
    } catch (error) {
        console.error('updateDrama error:', error);
        return new Response(JSON.stringify({ 
            success: false,
            error: error.message 
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
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
        return new Response(JSON.stringify({ 
            success: false,
            error: error.message 
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}