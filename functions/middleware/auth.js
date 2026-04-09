// src/middleware/auth.js
export async function authenticate(request, env, requiredRole = null) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: '未授权', status: 401 };
  }
  const token = authHeader.slice(7);
  // 从 token 提取 userId (格式: user_xxx_timestamp)
  const userId = token.split('_')[1];
  if (!userId) {
    return { error: '无效的 token', status: 401 };
  }

  try {
    const user = await env.MY_DB.prepare(
      'SELECT id, is_admin FROM users WHERE id = ?'
    ).bind(userId).first();

    if (!user) {
      return { error: '用户不存在', status: 401 };
    }

    if (requiredRole === 'admin' && !user.is_admin) {
      return { error: '需要管理员权限', status: 403 };
    }

    return { user };
  } catch (error) {
    console.error('认证失败:', error);
    return { error: '服务器错误', status: 500 };
  }
}