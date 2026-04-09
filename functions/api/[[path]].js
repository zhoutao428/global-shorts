// functions/api/[[path]].js
import { corsHeaders } from '../config/constants.js';
import { jsonResponse } from '../utils/response.js';
import { handlePublic } from './public.js';
import { handleUser } from './user.js';
import { handleAdmin } from './admin/index.js';

export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const path = url.pathname;
    
    // ========== 测试端点 ==========
    if (path === '/api/test') {
        return new Response(JSON.stringify({ 
            message: 'OK', 
            hasDB: !!env.MY_DB,
            dbType: typeof env.MY_DB
        }), {
            headers: { 'Content-Type': 'application/json' }
        });
    }
    
    // ========== 测试 D1 查询 ==========
    if (path === '/api/test-db') {
        try {
            const result = await env.MY_DB.prepare('SELECT 1 as test').first();
            return new Response(JSON.stringify({ success: true, result }), {
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (err) {
            return new Response(JSON.stringify({ error: err.message, stack: err.stack }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    }
    
    // ========== 原有代码用 try-catch 包裹 ==========
    try {
        // 处理 OPTIONS 预检请求
        if (request.method === 'OPTIONS') {
            return new Response(null, { headers: corsHeaders });
        }

        // ---------- 🚩 第一步：公开接口 ----------
        const publicResponse = await handlePublic(request, env, url, method);
        if (publicResponse) return addCors(publicResponse);

        // ---------- 第二步：管理员路由 ----------
        if (path.startsWith('/api/admin/')) {
            const response = await handleAdmin(request, env, url, method);
            if (response) return addCors(response);
        }

        // ---------- 第三步：用户私有接口 ----------
        const userResponse = await handleUser(request, env, url, method);
        if (userResponse) return addCors(userResponse);

        return jsonResponse({ error: 'Not found' }, 404);
    } catch (error) {
        console.error('Unhandled error:', error);
        // 返回详细错误信息
        return new Response(JSON.stringify({ 
            error: error.message, 
            stack: error.stack 
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}