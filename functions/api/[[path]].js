// functions/api/[[path]].js
import { corsHeaders } from '../config/constants.js';
import { jsonResponse } from '../utils/response.js';
import { handlePublic } from './public.js';
import { handleUser } from './user.js';
import { handleAdmin } from './admin/index.js';

// ========== 添加 CORS 头函数 ==========
function addCors(response) {
    const newResponse = new Response(response.body, response);
    Object.entries(corsHeaders).forEach(([key, value]) => {
        newResponse.headers.set(key, value);
    });
    return newResponse;
}

export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;
    
    // ========== R2 连接测试端点 ==========
    if (path === '/api/test-r2' && method === 'GET') {
        try {
            // 测试写入
            await env.MY_BUCKET.put('test.txt', 'Hello R2!');
            // 测试读取
            const object = await env.MY_BUCKET.get('test.txt');
            const text = await object.text();
            // 测试删除
            await env.MY_BUCKET.delete('test.txt');
            
            return new Response(JSON.stringify({ 
                success: true, 
                message: 'R2 连接成功！',
                testData: text 
            }), {
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (error) {
            return new Response(JSON.stringify({ 
                success: false, 
                error: error.message 
            }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    }
    
    // ========== 原有代码 ==========
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