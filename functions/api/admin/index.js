// src/routes/admin/index.js
import { jsonResponse } from '../../utils/response.js';
import { authenticate } from '../../middleware/auth.js';
import * as dramas from './dramas.js';
import * as episodes from './episodes.js';
import * as users from './users.js';
import * as categories from './categories.js';
import * as settings from './settings.js';
import * as stats from './stats.js';
import * as payment from './payment.js';
import * as vipPlans from './vip-plans.js';
import * as coinPackages from './coin-packages.js';
import * as adPositions from './ad-positions.js';
import * as translations from './translations.js';
import * as admins from './admins.js';
import * as paymentGateways from './payment-gateways.js';
import * as upload from './upload.js';
import * as revenue from './revenue.js';
import * as region from './region.js';
import * as withdrawals from './withdrawals.js';
console.log('withdrawals exports:', Object.keys(withdrawals));
import * as interactions from './interactions.js';
import * as contentPerformance from './content-performance.js';
export async function handleAdmin(request, env, url, method) {
  const path = url.pathname;

  // 所有管理员接口都需要验证管理员权限
  const auth = await authenticate(request, env, 'admin');
  if (auth.error) {
    return jsonResponse({ error: auth.error }, auth.status);
  }
 
  request.user = auth.user;

  // ---------- 仪表盘统计数据 ----------
  if (path === '/api/admin/stats' && method === 'GET') {
    return stats.getStats(request, env);
  }

  // ---------- 用户增长趋势 ----------
  if (path === '/api/admin/user-growth' && method === 'GET') {
    return stats.getUserGrowth(request, env, url);
  }

  // ---------- 收入趋势 ----------
  if (path === '/api/admin/revenue-trend' && method === 'GET') {
    return stats.getRevenueTrend(request, env, url);
  }

  // ---------- 最近活动 ----------
  if (path === '/api/admin/activities' && method === 'GET') {
    return stats.getActivities(request, env, url);
  }

  // ---------- 管理员登录历史 ----------
  if (path === '/api/admin/admin-logins' && method === 'GET') {
    return stats.getAdminLogins(request, env);
  }

  // ---------- 互动记录 ----------
  if (path === '/api/admin/interactions' && method === 'GET') {
    return stats.getInteractions(request, env, url);
  }

  // ---------- 互动统计 ----------
  if (path === '/api/admin/interactions/stats' && method === 'GET') {
    return stats.getInteractionStats(request, env, url);
  }
// 点赞管理
if (path === '/api/admin/likes' && method === 'GET') {
  return interactions.getLikes(request, env, url);
}
if (path.match(/^\/api\/admin\/likes\/[^\/]+$/) && method === 'DELETE') {
  const id = path.split('/')[4];
  return interactions.deleteLike(request, env, id);
}

// 收藏管理
if (path === '/api/admin/favorites' && method === 'GET') {
  return interactions.getFavorites(request, env, url);
}
if (path.match(/^\/api\/admin\/favorites\/[^\/]+$/) && method === 'DELETE') {
  const id = path.split('/')[4];
  return interactions.deleteFavorite(request, env, id);
}
  // ---------- 用户管理 ----------
  if (path === '/api/admin/users' && method === 'GET') {
    return users.getUsers(request, env);
  }
  if (path === '/api/admin/users' && method === 'POST') {
    return users.createUser(request, env);
  }
  if (path.match(/^\/api\/admin\/users\/[^\/]+$/) && method === 'GET') {
    const id = path.split('/')[4];
    return users.getUser(request, env, id);
  }
  if (path.match(/^\/api\/admin\/users\/[^\/]+$/) && method === 'PUT') {
    const id = path.split('/')[4];
    return users.updateUser(request, env, id);
  }
  if (path.match(/^\/api\/admin\/users\/[^\/]+$/) && method === 'DELETE') {
    const id = path.split('/')[4];
    return users.deleteUser(request, env, id);
  }
  if (path.match(/^\/api\/admin\/users\/[^\/]+\/history$/) && method === 'GET') {
    const id = path.split('/')[4];
    return users.getUserHistory(request, env, id, url);
  }
  if (path.match(/^\/api\/admin\/users\/[^\/]+\/likes\/[^\/]+$/) && method === 'DELETE') {
    const parts = path.split('/');
    const userId = parts[4];
    const dramaId = parts[6];
    return users.removeUserLike(request, env, userId, dramaId);
  }
  if (path.match(/^\/api\/admin\/users\/[^\/]+\/favorites\/[^\/]+$/) && method === 'DELETE') {
    const parts = path.split('/');
    const userId = parts[4];
    const dramaId = parts[6];
    return users.removeUserFavorite(request, env, userId, dramaId);
  }

  // ---------- 剧集管理 ----------
  if (path === '/api/admin/dramas' && method === 'GET') {
    return dramas.getDramas(request, env);
  }
  if (path === '/api/admin/dramas' && method === 'POST') {
    return dramas.createDrama(request, env);
  }
  if (path.match(/^\/api\/admin\/dramas\/[^\/]+$/) && method === 'GET') {
    const id = path.split('/')[4];
    return dramas.getDrama(request, env, id);
  }
  if (path.match(/^\/api\/admin\/dramas\/[^\/]+$/) && method === 'PUT') {
    const id = path.split('/')[4];
    return dramas.updateDrama(request, env, id);
  }
  if (path.match(/^\/api\/admin\/dramas\/[^\/]+$/) && method === 'DELETE') {
    const id = path.split('/')[4];
    return dramas.deleteDrama(request, env, id);
  }

  // ---------- 分集管理 ----------
  if (path === '/api/admin/episodes' && method === 'GET') {
    return episodes.getEpisodes(request, env, url);
  }
  if (path === '/api/admin/episodes' && method === 'POST') {
    return episodes.createEpisode(request, env);
  }
  if (path.match(/^\/api\/admin\/episodes\/[^\/]+$/) && method === 'GET') {
    const id = path.split('/')[4];
    return episodes.getEpisode(request, env, id);
  }
  if (path.match(/^\/api\/admin\/episodes\/[^\/]+$/) && method === 'PUT') {
    const id = path.split('/')[4];
    return episodes.updateEpisode(request, env, id);
  }
  if (path.match(/^\/api\/admin\/episodes\/[^\/]+$/) && method === 'DELETE') {
    const id = path.split('/')[4];
    return episodes.deleteEpisode(request, env, id);
  }
  if (path === '/api/admin/episodes/batch' && method === 'POST') {
    return episodes.batchCreateEpisodes(request, env);
  }
  if (path === '/api/admin/episodes/batch-sort' && method === 'POST') {
    return episodes.batchUpdateSort(request, env);
  }
// 内容表现路由
if (path === '/api/admin/content/performance' && method === 'GET') {
  return contentPerformance.getOverview(request, env, url);
}
if (path === '/api/admin/content/performance/dramas' && method === 'GET') {
  return contentPerformance.getDramasPage(request, env, url);
}
if (path === '/api/admin/content/performance/categories' && method === 'GET') {
  return contentPerformance.getCategoryStats(request, env, url);
}
if (path === '/api/admin/content/performance/export' && method === 'GET') {
  return contentPerformance.exportData(request, env, url);
}
  // ---------- 分类管理 ----------
  if (path === '/api/admin/categories' && method === 'GET') {
    return categories.getCategories(request, env);
  }
  if (path === '/api/admin/categories' && method === 'POST') {
    return categories.createCategory(request, env);
  }
  if (path.match(/^\/api\/admin\/categories\/[^\/]+$/) && method === 'GET') {
    const id = path.split('/')[4];
    return categories.getCategory(request, env, id);
  }
  if (path.match(/^\/api\/admin\/categories\/[^\/]+$/) && method === 'PUT') {
    const id = path.split('/')[4];
    return categories.updateCategory(request, env, id);
  }
  if (path.match(/^\/api\/admin\/categories\/[^\/]+$/) && method === 'DELETE') {
    const id = path.split('/')[4];
    return categories.deleteCategory(request, env, id);
  }

  // ---------- VIP套餐管理 ----------
  if (path === '/api/admin/vip-plans' && method === 'GET') {
    return vipPlans.getPlans(request, env);
  }
  if (path === '/api/admin/vip-plans' && method === 'POST') {
    return vipPlans.createPlan(request, env);
  }
  if (path.match(/^\/api\/admin\/vip-plans\/[^\/]+$/) && method === 'GET') {
    const id = path.split('/')[4];
    return vipPlans.getPlan(request, env, id);
  }
  if (path.match(/^\/api\/admin\/vip-plans\/[^\/]+$/) && method === 'PUT') {
    const id = path.split('/')[4];
    return vipPlans.updatePlan(request, env, id);
  }
  if (path.match(/^\/api\/admin\/vip-plans\/[^\/]+$/) && method === 'DELETE') {
    const id = path.split('/')[4];
    return vipPlans.deletePlan(request, env, id);
  }

  // ---------- 金币套餐管理 ----------
  if (path === '/api/admin/coin-packages' && method === 'GET') {
    return coinPackages.getPackages(request, env);
  }
  if (path === '/api/admin/coin-packages' && method === 'POST') {
    return coinPackages.createPackage(request, env);
  }
  if (path.match(/^\/api\/admin\/coin-packages\/[^\/]+$/) && method === 'GET') {
    const id = path.split('/')[4];
    return coinPackages.getPackage(request, env, id);
  }
  if (path.match(/^\/api\/admin\/coin-packages\/[^\/]+$/) && method === 'PUT') {
    const id = path.split('/')[4];
    return coinPackages.updatePackage(request, env, id);
  }
  if (path.match(/^\/api\/admin\/coin-packages\/[^\/]+$/) && method === 'DELETE') {
    const id = path.split('/')[4];
    return coinPackages.deletePackage(request, env, id);
  }
// 前台支付路由（不需要管理员权限）
if (path === '/api/payment/gateways' && method === 'GET') {
  return payment.getAvailableGateways(request, env);
}
if (path === '/api/payment/order' && method === 'POST') {
  return payment.createOrder(request, env);
}
if (path === '/api/payment/status' && method === 'GET') {
  return payment.getOrderStatus(request, env);
}
if (path === '/api/payment/mock-success' && method === 'POST') {
  return payment.mockPaymentSuccess(request, env);
}
if (path.startsWith('/api/payment/callback/') && method === 'POST') {
  const provider = path.split('/')[4];
  return payment.paymentCallback(request, env, provider);
}  
// ---------- 广告位管理 ----------
  if (path === '/api/admin/ad-positions' && method === 'GET') {
    return adPositions.getPositions(request, env);
  }
  if (path === '/api/admin/ad-positions' && method === 'POST') {
    return adPositions.createPosition(request, env);
  }
  if (path.match(/^\/api\/admin\/ad-positions\/[^\/]+$/) && method === 'GET') {
    const id = path.split('/')[4];
    return adPositions.getPosition(request, env, id);
  }
  if (path.match(/^\/api\/admin\/ad-positions\/[^\/]+$/) && method === 'PUT') {
    const id = path.split('/')[4];
    return adPositions.updatePosition(request, env, id);
  }
  if (path.match(/^\/api\/admin\/ad-positions\/[^\/]+$/) && method === 'DELETE') {
    const id = path.split('/')[4];
    return adPositions.deletePosition(request, env, id);
  }

  // ---------- 语言管理 ----------
  if (path === '/api/admin/languages' && method === 'GET') {
    return settings.getLanguages(request, env);
  }
  if (path === '/api/admin/languages' && method === 'POST') {
    return settings.createLanguage(request, env);
  }
  if (path.match(/^\/api\/admin\/languages\/[^\/]+$/) && method === 'GET') {
    const code = path.split('/')[4];
    return settings.getLanguage(request, env, code);
  }
  if (path.match(/^\/api\/admin\/languages\/[^\/]+$/) && method === 'PUT') {
    const code = path.split('/')[4];
    return settings.updateLanguage(request, env, code);
  }
  if (path.match(/^\/api\/admin\/languages\/[^\/]+$/) && method === 'DELETE') {
    const code = path.split('/')[4];
    return settings.deleteLanguage(request, env, code);
  }

  // ---------- 区域设置 ----------
  if (path === '/api/admin/settings/region' && method === 'PUT') {
    return settings.updateRegionSettings(request, env);
  }

  // ---------- 系统设置 ----------
  if (path === '/api/admin/settings' && method === 'GET') {
    return settings.getAllSettings(request, env);
  }
  if (path === '/api/admin/settings' && method === 'PUT') {
    return settings.updateAllSettings(request, env);
  }
  if (path.match(/^\/api\/admin\/settings\/[^\/]+$/) && method === 'GET') {
    const key = path.split('/')[4];
    return settings.getSetting(request, env, key);
  }
  if (path.match(/^\/api\/admin\/settings\/[^\/]+$/) && method === 'PUT') {
    const key = path.split('/')[4];
    return settings.updateSetting(request, env, key);
  }

  // ---------- 支付接口管理 ----------
  if (path === '/api/admin/payment-gateways' && method === 'GET') {
    return paymentGateways.getGateways(request, env);
  }
  if (path === '/api/admin/payment-gateways' && method === 'POST') {
    return paymentGateways.createGateway(request, env);
  }
  if (path.match(/^\/api\/admin\/payment-gateways\/[^\/]+$/) && method === 'GET') {
    const id = path.split('/')[4];
    return paymentGateways.getGateway(request, env, id);
  }
  if (path.match(/^\/api\/admin\/payment-gateways\/[^\/]+$/) && method === 'PUT') {
    const id = path.split('/')[4];
    return paymentGateways.updateGateway(request, env, id);
  }
  if (path.match(/^\/api\/admin\/payment-gateways\/[^\/]+$/) && method === 'DELETE') {
    const id = path.split('/')[4];
    return paymentGateways.deleteGateway(request, env, id);
  }
if (path === '/api/admin/withdrawals' && method === 'GET') {
  return withdrawals.getWithdrawals(request, env, url);
}
if (path.match(/^\/api\/admin\/withdrawals\/[^\/]+$/) && method === 'GET') {
  const id = path.split('/')[4];
  return withdrawals.getWithdrawal(request, env, id);
}
if (path.match(/^\/api\/admin\/withdrawals\/[^\/]+$/) && method === 'PUT') {
  const id = path.split('/')[4];
  return withdrawals.updateWithdrawalStatus(request, env, url, id);
}
// ---------- 支付全局设置 ----------
  if (path === '/api/admin/settings/payment' && method === 'GET') {
    return paymentGateways.getPaymentSettings(request, env);
  }
  if (path === '/api/admin/settings/payment' && method === 'PUT') {
    return paymentGateways.updatePaymentSettings(request, env);
  }

  // ---------- 翻译管理 ----------
  if (path === '/api/admin/translations/keys' && method === 'GET') {
    return translations.getTranslationKeys(request, env);
  }
  if (path === '/api/admin/translations/keys' && method === 'POST') {
    return translations.createTranslationKey(request, env);
  }
  if (path.match(/^\/api\/admin\/translations\/keys\/[^\/]+$/) && method === 'DELETE') {
    const key = path.split('/')[4];
    return translations.deleteTranslationKey(request, env, key);
  }
  if (path.match(/^\/api\/admin\/translations\/[^\/]+$/) && method === 'PUT') {
    const encodedKey = path.split('/')[4];
    const key = decodeURIComponent(encodedKey);
    return translations.updateTranslation(request, env, key);
}
  if (path === '/api/admin/translations/import' && method === 'POST') {
    return translations.importTranslations(request, env);
  }
  if (path === '/api/admin/translations/export' && method === 'GET') {
    return translations.exportTranslations(request, env);
  }

  // ---------- 管理员管理 ----------
  if (path === '/api/admin/admins' && method === 'GET') {
    return admins.getAdmins(request, env);
  }
  if (path === '/api/admin/admins' && method === 'POST') {
    return admins.createAdmin(request, env);
  }
  if (path.match(/^\/api\/admin\/admins\/[^\/]+$/) && method === 'GET') {
    const id = path.split('/')[4];
    return admins.getAdmin(request, env, id);
  }
  if (path.match(/^\/api\/admin\/admins\/[^\/]+$/) && method === 'PUT') {
    const id = path.split('/')[4];
    return admins.updateAdmin(request, env, id);
  }
  if (path.match(/^\/api\/admin\/admins\/[^\/]+$/) && method === 'DELETE') {
    const id = path.split('/')[4];
    return admins.deleteAdmin(request, env, id);
  }
  if (path === '/api/admin/roles' && method === 'GET') {
  return admins.getRoles(request, env);
}
  // ---------- 文件上传 ----------
  if (path === '/upload' && method === 'POST') {
    return upload.uploadGeneric(request, env);
  }
  if (path === '/api/admin/upload/image' && method === 'POST') {
    return upload.uploadImage(request, env);
  }
  if (path === '/api/admin/upload/video' && method === 'POST') {
    return upload.uploadVideo(request, env);
  }
  if (path === '/api/admin/upload/status' && method === 'GET') {
    return upload.getUploadStatus(request, env, url);
  }
// 收入分析路由
if (path === '/api/admin/revenue/summary' && method === 'GET') {
  return revenue.getRevenueSummary(request, env, url);
}
if (path === '/api/admin/revenue/trend' && method === 'GET') {
  return revenue.getRevenueTrend(request, env, url);
}
if (path === '/api/admin/revenue/composition' && method === 'GET') {
  return revenue.getRevenueComposition(request, env, url);
}
if (path === '/api/admin/revenue/details' && method === 'GET') {
  return revenue.getRevenueDetails(request, env, url);
}
if (path === '/api/admin/revenue/export' && method === 'GET') {
  return revenue.exportRevenue(request, env, url);
}
if (path === '/api/admin/revenue/target' && method === 'POST') {
  return revenue.setRevenueTarget(request, env);
}
// 地区分析路由
if (path === '/api/admin/region/overview' && method === 'GET') {
  return region.getRegionOverview(request, env, url);
}
if (path === '/api/admin/region/top' && method === 'GET') {
  return region.getRegionTop(request, env, url);
}
if (path === '/api/admin/region/preference' && method === 'GET') {
  return region.getRegionPreference(request, env, url);
}
if (path === '/api/admin/region/export' && method === 'GET') {
  return region.exportRegionData(request, env, url);
}
// 生成预签名上传 URL
if (path === '/api/admin/upload/presigned' && method === 'GET') {
    return upload.getPresignedUrl(request, env);
}
 // 未匹配
  return null;
}