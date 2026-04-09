// src/utils/helpers.js
// 从路径中提取指定位置的片段（例如 /api/dramas/123/like -> index 3 返回 '123'）
export function getPathSegment(path, index) {
  const parts = path.split('/');
  return parts[index] || null;
}

// 从路径中按模式提取参数（预留，暂未使用）
export function extractParams(path, pattern) {
  const pathParts = path.split('/');
  const patternParts = pattern.split('/');
  const params = {};
  for (let i = 0; i < patternParts.length; i++) {
    if (patternParts[i].startsWith(':')) {
      const paramName = patternParts[i].slice(1);
      params[paramName] = pathParts[i];
    }
  }
  return params;
}