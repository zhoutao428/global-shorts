// functions/api/[[path]].js
import { corsHeaders } from '../config/constants.js';
import { jsonResponse } from '../utils/response.js';
import { handlePublic } from './public.js';
import { handleUser } from './user.js';
import { handleAdmin } from './admin/index.js';
// 👇 修改导入：添加 getPresignedUrl
import { uploadImage, uploadVideo, uploadGeneric, getPresignedUrl } from './admin/upload.js';

export async function onRequest(context) {
    const { request, env } = context;
    
    // 处理 OPTIONS 预检请求
    if (request.method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    try {
        // ---------- 🚩 上传路由（不需要 /api/admin 前缀，保持向后兼容）----------
        if (path === '/api/upload/image' && method === 'POST') {
            const response = await uploadImage(request, env);
            return addCors(response);
        }
        
        if (path === '/api/upload/video' && method === 'POST') {
            const response = await uploadVideo(request, env);
            return addCors(response);
        }

        if (path === '/api/upload' && method === 'POST') {
            const response = await uploadGeneric(request, env);
            return addCors(response);
        }

        // ---------- 🚩 第一步：公开接口（完全无需认证）----------
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

        // 未匹配到任何路由
        return jsonResponse({ error: 'Not found' }, 404);
    } catch (error) {
        console.error('Unhandled error:', error);
        return jsonResponse({ error: 'Internal server error' }, 500);
    }
}

// 添加 CORS 头
function addCors(response) {
    const newResponse = new Response(response.body, response);
    Object.entries(corsHeaders).forEach(([key, value]) => {
        newResponse.headers.set(key, value);
    });
    return newResponse;
}