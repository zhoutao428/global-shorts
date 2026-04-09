// src/routes/admin/upload.js
import { jsonResponse } from '../../utils/response.js';

// 通用上传（原 /upload）
export async function uploadGeneric(request, env) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    const type = formData.get('type') || 'video';

    if (!file) {
      return jsonResponse({ error: '没有上传文件' }, 400);
    }

    const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
    await env.MY_BUCKET.put(filename, file.stream(), {
      httpMetadata: { contentType: file.type },
    });
    const publicUrl = `https://cdn.globalshorts.com/${filename}`;

    return jsonResponse({ success: true, url: publicUrl });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 上传图片
export async function uploadImage(request, env) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    if (!file) {
      return jsonResponse({ error: '没有上传文件' }, 400);
    }
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return jsonResponse({ error: '不支持的文件类型' }, 400);
    }
    const ext = file.name.split('.').pop();
    const filename = `images/${Date.now()}-${crypto.randomUUID()}.${ext}`;
    await env.MY_BUCKET.put(filename, file.stream(), {
      httpMetadata: { contentType: file.type },
    });
    const publicUrl = `https://cdn.globalshorts.com/${filename}`;
    return jsonResponse({ success: true, url: publicUrl });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 上传视频
export async function uploadVideo(request, env) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    if (!file) {
      return jsonResponse({ error: '没有上传文件' }, 400);
    }
    const allowedExt = ['mp4', 'm3u8', 'ts', 'avi', 'mov', 'mkv'];
    const ext = file.name.split('.').pop().toLowerCase();
    if (!allowedExt.includes(ext)) {
      return jsonResponse({ error: '不支持的视频格式' }, 400);
    }
    const filename = `videos/${Date.now()}-${crypto.randomUUID()}.${ext}`;
    await env.MY_BUCKET.put(filename, file.stream(), {
      httpMetadata: { contentType: file.type || 'video/mp4' },
    });
    const publicUrl = `https://cdn.globalshorts.com/${filename}`;
    return jsonResponse({ success: true, url: publicUrl, filename, size: file.size });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 获取上传任务状态（模拟）
export async function getUploadStatus(request, env, url) {
  try {
    const taskIds = url.searchParams.get('ids')?.split(',') || [];
    const statuses = taskIds.map(id => ({
      task_id: id,
      status: 'completed',
      progress: 100,
      url: `https://cdn.globalshorts.com/videos/${id}.mp4`
    }));
    return jsonResponse({ success: true, data: statuses });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}