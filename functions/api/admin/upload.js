// src/routes/admin/upload.js
import { jsonResponse } from '../../utils/response.js';

// R2 公开访问域名（固定值）
const R2_PUBLIC_URL = 'https://pub-14d8ae6302504cd1acd67e69300b1d91.r2.dev';

// 上传图片
export async function uploadImage(request, env) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    
    if (!file) {
      console.error('封面上传：没有文件');
      return jsonResponse({ error: '没有上传文件' }, 400);
    }
    
    // 获取文件扩展名
    const fileName = file.name || 'image.jpg';
    const ext = fileName.split('.').pop().toLowerCase();
    const allowedExt = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    
    // 根据扩展名判断，而不是依赖 MIME 类型
    if (!allowedExt.includes(ext)) {
      console.error('封面上传：不支持的扩展名', ext);
      return jsonResponse({ error: `不支持的图片格式: .${ext}` }, 400);
    }
    
    // 根据扩展名设置正确的 Content-Type
    const mimeMap = {
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'png': 'image/png',
      'gif': 'image/gif',
      'webp': 'image/webp'
    };
    const contentType = mimeMap[ext] || 'image/jpeg';
    
    const filename = `images/${Date.now()}-${crypto.randomUUID()}.${ext}`;
    
    await env.MY_BUCKET.put(filename, file.stream(), {
      httpMetadata: { contentType },
    });
    
    const publicUrl = `${R2_PUBLIC_URL}/${filename}`;
    console.log('封面上传成功:', publicUrl);
    return jsonResponse({ success: true, url: publicUrl });
  } catch (error) {
    console.error('封面上传失败:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// 上传视频
export async function uploadVideo(request, env) {
  try {
    const url = new URL(request.url);
    const customPath = url.searchParams.get('path');
    
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
    
    let filename;
    if (customPath) {
      filename = customPath;
    } else {
      filename = `videos/${Date.now()}-${crypto.randomUUID()}.${ext}`;
    }
    
    await env.MY_BUCKET.put(filename, file.stream(), {
      httpMetadata: { contentType: file.type || 'video/mp4' },
    });
    
    const publicUrl = `${R2_PUBLIC_URL}/${filename}`;
    return jsonResponse({ success: true, url: publicUrl, filename, size: file.size });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 通用上传
export async function uploadGeneric(request, env) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    if (!file) {
      return jsonResponse({ error: '没有上传文件' }, 400);
    }
    const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
    await env.MY_BUCKET.put(filename, file.stream(), {
      httpMetadata: { contentType: file.type },
    });
    const publicUrl = `${R2_PUBLIC_URL}/${filename}`;
    return jsonResponse({ success: true, url: publicUrl });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 获取上传任务状态
export async function getUploadStatus(request, env, url) {
  try {
    const taskIds = url.searchParams.get('ids')?.split(',') || [];
    const statuses = taskIds.map(id => ({
      task_id: id,
      status: 'completed',
      progress: 100,
      url: `${R2_PUBLIC_URL}/videos/${id}.mp4`
    }));
    return jsonResponse({ success: true, data: statuses });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

