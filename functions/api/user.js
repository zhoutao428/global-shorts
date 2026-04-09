// src/routes/user.js
import { jsonResponse } from '../utils/response.js';
import { getPathSegment } from '../utils/helpers.js';
import { authenticate } from '../middleware/auth.js';
// ---------- 获取用户签到记录 ----------
async function getUserCheckins(request, env, user, url) {
    try {
        const startDate = url.searchParams.get('start_date');
        const endDate = url.searchParams.get('end_date');
        
        if (!startDate || !endDate) {
            return jsonResponse({ error: '缺少 start_date 或 end_date 参数' }, 400);
        }
        
        const { results } = await env.MY_DB.prepare(
            `SELECT checkin_date, reward_coins 
             FROM user_checkins 
             WHERE user_id = ? AND checkin_date BETWEEN ? AND ?
             ORDER BY checkin_date DESC`
        ).bind(user.id, startDate, endDate).all();
        
        return jsonResponse({ success: true, data: results });
    } catch (error) {
        return jsonResponse({ error: error.message }, 500);
    }
}
// ---------- 获取用户已解锁单集 ----------
async function getUnlockedEpisodes(request, env, user, url) {
    try {
        const userId = getPathSegment(url.pathname, 3);
        if (userId !== user.id) {
            return jsonResponse({ error: '无权访问' }, 403);
        }

        const { results } = await env.MY_DB.prepare(`
            SELECT episode_id, drama_id, unlocked_at
            FROM user_unlocked_episodes
            WHERE user_id = ?
            ORDER BY unlocked_at DESC
        `).bind(user.id).all();

        return jsonResponse({ success: true, data: results });
    } catch (error) {
        console.error('获取已解锁单集失败:', error);
        return jsonResponse({ error: error.message }, 500);
    }
}
// ---------- 点赞状态 ----------
async function getLikeStatus(request, env, url, user) {
  try {
    const dramaId = getPathSegment(url.pathname, 3);
    if (!dramaId) {
      return jsonResponse({ error: '参数错误' }, 400);
    }

    const like = await env.MY_DB.prepare(
      'SELECT id FROM user_likes WHERE user_id = ? AND drama_id = ?'
    ).bind(user.id, dramaId).first();

    const drama = await env.MY_DB.prepare(
      'SELECT likes_count FROM dramas WHERE id = ?'
    ).bind(dramaId).first();

    return jsonResponse({
      success: true,
      data: {
        liked: !!like,
        likes_count: drama?.likes_count || 0
      }
    });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// ---------- 点赞 ----------
async function likeDrama(request, env, user, url) {
  try {
    let dramaId;
    if (url.pathname.match(/^\/api\/dramas\/[^\/]+\/like$/)) {
      dramaId = getPathSegment(url.pathname, 3);
    } else {
      const body = await request.json();
      dramaId = body.dramaId;
    }

    if (!dramaId) {
      return jsonResponse({ error: '参数错误' }, 400);
    }

    const existing = await env.MY_DB.prepare(
      'SELECT id FROM user_likes WHERE user_id = ? AND drama_id = ?'
    ).bind(user.id, dramaId).first();

    if (existing) {
      return jsonResponse({ error: '已经点赞过了' }, 400);
    }

    const id = crypto.randomUUID();
    await env.MY_DB.prepare(
      'INSERT INTO user_likes (id, user_id, drama_id, created_at) VALUES (?, ?, ?, ?)'
    ).bind(id, user.id, dramaId, new Date().toISOString()).run();

    await env.MY_DB.prepare(
      'UPDATE dramas SET likes_count = likes_count + 1 WHERE id = ?'
    ).bind(dramaId).run();

    const drama = await env.MY_DB.prepare(
      'SELECT likes_count FROM dramas WHERE id = ?'
    ).bind(dramaId).first();

    return jsonResponse({ success: true, likes_count: drama.likes_count });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// ---------- 取消点赞 ----------
async function unlikeDrama(request, env, user, url) {
  try {
    let dramaId;
    if (url.pathname.match(/^\/api\/dramas\/[^\/]+\/unlike$/)) {
      dramaId = getPathSegment(url.pathname, 3);
    } else {
      const body = await request.json();
      dramaId = body.dramaId;
    }

    if (!dramaId) {
      return jsonResponse({ error: '参数错误' }, 400);
    }

    const result = await env.MY_DB.prepare(
      'DELETE FROM user_likes WHERE user_id = ? AND drama_id = ?'
    ).bind(user.id, dramaId).run();

    if (result.meta.changes > 0) {
      await env.MY_DB.prepare(
        'UPDATE dramas SET likes_count = likes_count - 1 WHERE id = ? AND likes_count > 0'
      ).bind(dramaId).run();
    }

    const drama = await env.MY_DB.prepare(
      'SELECT likes_count FROM dramas WHERE id = ?'
    ).bind(dramaId).first();

    return jsonResponse({ success: true, likes_count: drama?.likes_count || 0 });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// ---------- 收藏状态 ----------
async function getFavoriteStatus(request, env, user, url) {
  try {
    const dramaId = getPathSegment(url.pathname, 3);
    const existing = await env.MY_DB.prepare(
      'SELECT id FROM user_favorites WHERE user_id = ? AND drama_id = ?'
    ).bind(user.id, dramaId).first();

    const drama = await env.MY_DB.prepare(
      'SELECT favorites_count FROM dramas WHERE id = ?'
    ).bind(dramaId).first();

    return jsonResponse({
      success: true,
      data: {
        favorited: !!existing,
        favorites_count: drama?.favorites_count || 0
      }
    });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}
// ---------- 收藏 ----------
async function favoriteDrama(request, env, user, url) {
  try {
    let dramaId;
    if (url.pathname.match(/^\/api\/dramas\/[^\/]+\/favorite$/)) {
      dramaId = getPathSegment(url.pathname, 3);
    } else {
      const body = await request.json();
      dramaId = body.dramaId;
    }

    if (!dramaId) {
      return jsonResponse({ error: '参数错误' }, 400);
    }

    const existing = await env.MY_DB.prepare(
      'SELECT id FROM user_favorites WHERE user_id = ? AND drama_id = ?'
    ).bind(user.id, dramaId).first();

    if (existing) {
      return jsonResponse({ error: '已经收藏过了' }, 400);
    }

    const id = crypto.randomUUID();
    await env.MY_DB.prepare(
      'INSERT INTO user_favorites (id, user_id, drama_id, created_at) VALUES (?, ?, ?, ?)'
    ).bind(id, user.id, dramaId, new Date().toISOString()).run();

    await env.MY_DB.prepare(
      'UPDATE dramas SET favorites_count = favorites_count + 1 WHERE id = ?'
    ).bind(dramaId).run();

    const drama = await env.MY_DB.prepare(
      'SELECT favorites_count FROM dramas WHERE id = ?'
    ).bind(dramaId).first();

    return jsonResponse({ success: true, favorites_count: drama.favorites_count });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// ---------- 取消收藏 ----------
async function unfavoriteDrama(request, env, user, url) {
  try {
    let dramaId;
    if (url.pathname.match(/^\/api\/dramas\/[^\/]+\/unfavorite$/)) {
      dramaId = getPathSegment(url.pathname, 3);
    } else {
      const body = await request.json();
      dramaId = body.dramaId;
    }

    if (!dramaId) {
      return jsonResponse({ error: '参数错误' }, 400);
    }

    const result = await env.MY_DB.prepare(
      'DELETE FROM user_favorites WHERE user_id = ? AND drama_id = ?'
    ).bind(user.id, dramaId).run();

    if (result.meta.changes > 0) {
      await env.MY_DB.prepare(
        'UPDATE dramas SET favorites_count = favorites_count - 1 WHERE id = ? AND favorites_count > 0'
      ).bind(dramaId).run();
    }

    const drama = await env.MY_DB.prepare(
      'SELECT favorites_count FROM dramas WHERE id = ?'
    ).bind(dramaId).first();

    return jsonResponse({ success: true, favorites_count: drama?.favorites_count || 0 });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// ---------- 记录分享 ----------
async function share(request, env, user) {
  try {
    const body = await request.json();
    const { drama_id, episode_id, platform } = body;

    if (!drama_id || !platform) {
      return jsonResponse({ error: '剧集ID和分享平台不能为空' }, 400);
    }

    const id = crypto.randomUUID();
    await env.MY_DB.prepare(`
      INSERT INTO user_shares (id, user_id, drama_id, episode_id, platform)
      VALUES (?, ?, ?, ?, ?)
    `).bind(id, user?.id || null, drama_id, episode_id || null, platform).run();

    await env.MY_DB.prepare(
      'UPDATE dramas SET shares_count = shares_count + 1 WHERE id = ?'
    ).bind(drama_id).run();

    const drama = await env.MY_DB.prepare(
      'SELECT shares_count FROM dramas WHERE id = ?'
    ).bind(drama_id).first();

    return jsonResponse({ success: true, shares_count: drama.shares_count });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// ---------- 获取用户信息 ----------
async function getUserProfile(request, env, user, url) {
  try {
    const userIdFromPath = getPathSegment(url.pathname, 3);
    if (userIdFromPath !== user.id) {
      return jsonResponse({ error: '无权访问其他用户信息' }, 403);
    }

    // 修改这里：添加 vip_expires_at 字段
    const userInfo = await env.MY_DB.prepare(
      'SELECT id, email, nickname, coins, is_vip, vip_expires_at, created_at FROM users WHERE id = ?'
    ).bind(user.id).first();

    const mockData = {
      ...userInfo,
      watchHours: 142,
      dramasWatched: 38,
      episodesWatched: 245,
      country: 'US',
      language: 'en'
    };

    return jsonResponse({ success: true, data: mockData });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}
// ---------- 获取用户已解锁剧集 ----------
async function getUnlockedDramas(request, env, user, url) {
  try {
    const userIdFromPath = getPathSegment(url.pathname, 3);
    if (userIdFromPath !== user.id) {
      return jsonResponse({ error: '无权访问' }, 403);
    }

    const { results } = await env.MY_DB.prepare(`
      SELECT d.* 
      FROM dramas d
      JOIN user_unlocked u ON d.id = u.drama_id
      WHERE u.user_id = ?
      ORDER BY u.unlocked_at DESC
    `).bind(user.id).all();

    return jsonResponse({ success: true, data: results });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}
// 获取用户统计数据
async function getUserStats(request, env, user) {
  try {
    // 从 user_history 表统计，明确指定表别名
    const stats = await env.MY_DB.prepare(`
      SELECT 
        COUNT(DISTINCT h.drama_id) as dramasWatched,
        COUNT(*) as episodesWatched,
        COALESCE(SUM(e.duration), 0) as watchSeconds
      FROM user_history h
      LEFT JOIN episodes e ON h.episode_id = e.id
      WHERE h.user_id = ?
    `).bind(user.id).first();

    const watchHours = Math.floor((stats.watchSeconds || 0) / 3600);

    return jsonResponse({
      success: true,
      data: {
        watchHours,
        dramasWatched: stats.dramasWatched || 0,
        episodesWatched: stats.episodesWatched || 0
      }
    });
  } catch (error) {
    console.error('getUserStats error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}
// 获取用户观看历史
async function getUserHistory(request, env, user, url) {
  try {
    const userId = getPathSegment(url.pathname, 3); // 从路径获取 userId
    // 验证用户只能访问自己的历史
    if (userId !== user.id) {
      return jsonResponse({ error: '无权访问' }, 403);
    }

    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;

    // 获取总数
    const countResult = await env.MY_DB.prepare(
      'SELECT COUNT(*) as total FROM user_history WHERE user_id = ?'
    ).bind(user.id).first();
    const total = countResult.total || 0;

    // 获取历史记录，关联剧集和分集
    const { results } = await env.MY_DB.prepare(`
      SELECT 
        h.*,
        d.id as drama_id,
        d.title as drama_title,
        d.cover_url,
        e.episode_number,
        e.title as episode_title,
        e.duration
      FROM user_history h
      JOIN dramas d ON h.drama_id = d.id
      LEFT JOIN episodes e ON h.episode_id = e.id
      WHERE h.user_id = ?
      ORDER BY h.watched_at DESC
      LIMIT ? OFFSET ?
    `).bind(user.id, limit, offset).all();

    // 格式化返回数据，添加进度（如果有）
    const list = results.map(item => ({
      id: item.id,
      dramaId: item.drama_id,
      dramaTitle: item.drama_title,
      coverUrl: item.cover_url,
      episodeId: item.episode_id,
      episodeNumber: item.episode_number,
      episodeTitle: item.episode_title,
      watchedAt: item.watched_at,
      progress: item.progress || 0, // 如果 history 表有 progress 字段
      duration: item.duration
    }));

    return jsonResponse({
      success: true,
      data: list,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}
// 获取用户收藏列表
async function getUserFavorites(request, env, user, url) {
  try {
    const userId = getPathSegment(url.pathname, 3);
    if (userId !== user.id) {
      return jsonResponse({ error: '无权访问' }, 403);
    }

    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;

    const countResult = await env.MY_DB.prepare(
      'SELECT COUNT(*) as total FROM user_favorites WHERE user_id = ?'
    ).bind(user.id).first();
    const total = countResult.total || 0;

    const { results } = await env.MY_DB.prepare(`
      SELECT 
        f.*,
        d.id as drama_id,
        d.title,
        d.cover_url,
        d.total_episodes,
        d.is_vip
      FROM user_favorites f
      JOIN dramas d ON f.drama_id = d.id
      WHERE f.user_id = ?
      ORDER BY f.created_at DESC
      LIMIT ? OFFSET ?
    `).bind(user.id, limit, offset).all();

    const list = results.map(item => ({
      id: item.id,
      dramaId: item.drama_id,
      title: item.title,
      coverUrl: item.cover_url,
      totalEpisodes: item.total_episodes,
      isVip: item.is_vip,
      favoritedAt: item.created_at
    }));

    return jsonResponse({
      success: true,
      data: list,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}
// 获取用户交易记录
async function getUserTransactions(request, env, user, url) {
  try {
    const userId = getPathSegment(url.pathname, 3);
    if (userId !== user.id) {
      return jsonResponse({ error: '无权访问' }, 403);
    }

    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;

    // 移除 status 条件，因为表里没有这个字段
    const countResult = await env.MY_DB.prepare(
      'SELECT COUNT(*) as total FROM purchases WHERE user_id = ?'
    ).bind(user.id).first();
    const total = countResult.total || 0;

    const { results } = await env.MY_DB.prepare(`
      SELECT *
      FROM purchases
      WHERE user_id = ?
      ORDER BY created_at DESC
      LIMIT ? OFFSET ?
    `).bind(user.id, limit, offset).all();

    // 格式化，金额转换为美元（假设amount_paid是分）
    const list = results.map(item => ({
      id: item.id,
      type: item.item_type, // 注意字段名是 item_type
      itemId: item.item_id,
      amount: item.amount_paid / 100,
      currency: item.currency || 'USD',
      createdAt: item.created_at,
      description: getTransactionDescription(item) 
    }));

    return jsonResponse({
      success: true,
      data: list,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}
// 辅助函数生成描述
function getTransactionDescription(item) {
  if (item.item_type === 'vip') {  // 使用 item_type
    return 'VIP会员购买';
  } else if (item.item_type === 'coin') {
    return '金币充值';
  } else if (item.item_type === 'episode') {
    return '单集购买';
  }
  return '其他';
}
// ---------- 每日签到 ----------
async function checkin(request, env, user) {
  try {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

    // 检查今天是否已签到
    const existing = await env.MY_DB.prepare(
      'SELECT id FROM user_checkins WHERE user_id = ? AND checkin_date = ?'
    ).bind(user.id, today).first();

    if (existing) {
      return jsonResponse({ error: '今天已经签过到了' }, 400);
    }

    // 随机获得10-50金币
    const coinsEarned = Math.floor(Math.random() * 41) + 10; // 10-50

    const id = crypto.randomUUID();
    await env.MY_DB.prepare(`
      INSERT INTO user_checkins (id, user_id, checkin_date, reward_coins, created_at)
      VALUES (?, ?, ?, ?, ?)
    `).bind(id, user.id, today, coinsEarned, new Date().toISOString()).run();

    // 更新用户金币
    await env.MY_DB.prepare(
      'UPDATE users SET coins = coins + ? WHERE id = ?'
    ).bind(coinsEarned, user.id).run();

    // 获取最新金币数量
    const userUpdated = await env.MY_DB.prepare(
      'SELECT coins FROM users WHERE id = ?'
    ).bind(user.id).first();

    return jsonResponse({
      success: true,
      reward: coinsEarned,
      coins: userUpdated.coins
    });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}
// ---------- 记录剧集播放（增加播放量） ----------
async function recordPlay(request, env, user) {
  try {
    const body = await request.json();
    const { drama_id, episode_id } = body;

    if (!drama_id) {
      return jsonResponse({ error: '缺少 drama_id 参数' }, 400);
    }

    // 1. 更新剧集播放量
    await env.MY_DB.prepare(
      'UPDATE dramas SET views_count = views_count + 1 WHERE id = ?'
    ).bind(drama_id).run();

    // 2. 记录用户观看历史（用于进度条）
    if (episode_id) {
      const existing = await env.MY_DB.prepare(
        'SELECT id FROM user_history WHERE user_id = ? AND drama_id = ? AND episode_id = ?'
      ).bind(user.id, drama_id, episode_id).first();

      if (!existing) {
        const historyId = crypto.randomUUID();
        await env.MY_DB.prepare(`
          INSERT INTO user_history (id, user_id, drama_id, episode_id, watched_at)
          VALUES (?, ?, ?, ?, ?)
        `).bind(historyId, user.id, drama_id, episode_id, new Date().toISOString()).run();
      }
    }

    return jsonResponse({ success: true });
  } catch (error) {
    console.error('记录播放失败:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}
// 提现申请
async function withdraw(request, env, user) {
  try {
    const body = await request.json();
    const { amount, method, account } = body;

    if (!amount || !method || !account) {
      return jsonResponse({ error: '缺少必要参数' }, 400);
    }

    // 检查用户金币是否足够
    if (user.coins < amount) {
      return jsonResponse({ error: '金币不足' }, 400);
    }

    // 最低提现1000金币（可根据需要调整）
    if (amount < 1000) {
      return jsonResponse({ error: '最低提现金额为1000金币' }, 400);
    }

    const id = crypto.randomUUID();
    await env.MY_DB.prepare(`
      INSERT INTO withdraw_requests (id, user_id, amount, method, account, status)
      VALUES (?, ?, ?, ?, ?, 'pending')
    `).bind(id, user.id, amount, method, account).run();

    // 扣除用户金币，并增加冻结金额
    await env.MY_DB.prepare(
      'UPDATE users SET coins = coins - ?, frozen_coins = frozen_coins + ? WHERE id = ?'
    ).bind(amount, amount, user.id).run();

    return jsonResponse({
      success: true,
      request_id: id
    });
  } catch (error) {
    console.error('withdraw error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}
// 获取用户提现记录
async function getUserWithdrawals(request, env, user, url) {
  try {
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;

    const countResult = await env.MY_DB.prepare(
      'SELECT COUNT(*) as total FROM withdraw_requests WHERE user_id = ?'
    ).bind(user.id).first();
    const total = countResult.total || 0;

    const { results } = await env.MY_DB.prepare(`
      SELECT * FROM withdraw_requests
      WHERE user_id = ?
      ORDER BY created_at DESC
      LIMIT ? OFFSET ?
    `).bind(user.id, limit, offset).all();

    return jsonResponse({
      success: true,
      data: results,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) }
    });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}
// 更新用户资料（支持 nickname、email、language）
async function updateUserProfile(request, env, user, url) {
  try {
    const userId = getPathSegment(url.pathname, 3);
    if (userId !== user.id) {
      return jsonResponse({ error: '无权访问' }, 403);
    }

    const body = await request.json();
    const { nickname, email, language } = body;

    // 动态构建 SET 子句
    let updates = [];
    let params = [];

    if (nickname !== undefined) {
      updates.push('nickname = ?');
      params.push(nickname);
    }
    if (email !== undefined) {
      // 可选：验证邮箱格式
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return jsonResponse({ error: '邮箱格式不正确' }, 400);
      }
      updates.push('email = ?');
      params.push(email);
    }
    if (language !== undefined) {
      updates.push('language = ?');
      params.push(language);
    }

    if (updates.length === 0) {
      return jsonResponse({ error: '没有要更新的字段' }, 400);
    }

    const query = `UPDATE users SET ${updates.join(', ')} WHERE id = ?`;
    params.push(user.id);

    await env.MY_DB.prepare(query).bind(...params).run();

    // 返回更新后的用户信息
    const updatedUser = await env.MY_DB.prepare(
      'SELECT id, email, nickname, coins, is_vip, language, created_at FROM users WHERE id = ?'
    ).bind(user.id).first();

    return jsonResponse({ success: true, data: updatedUser });
  } catch (error) {
    console.error('updateUserProfile error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
} 
// ---------- 解锁单集（扣除金币）----------
// ---------- 解锁单集（扣除金币）----------
async function unlockEpisode(request, env, user) {
    try {
        const { episode_id, drama_id } = await request.json();
        if (!episode_id || !drama_id) {
            return jsonResponse({ error: '缺少 episode_id 或 drama_id 参数' }, 400);
        }

       
        const episode = await env.MY_DB.prepare(
            'SELECT price FROM episodes WHERE id = ?'  // ✅ 只查 price，不查 is_free
        ).bind(episode_id).first();
        
        if (!episode) {
            return jsonResponse({ error: '单集不存在' }, 404);
        }
        
        const cost = episode.price;

        // 如果价格是 0，免费观看
        if (cost === 0) {
            return jsonResponse({ 
                success: true, 
                coins_remaining: user.coins, 
                message: '该集免费' 
            });
        }

        // 检查用户金币
        if (user.coins < cost) {
            return jsonResponse({ error: '金币不足' }, 400);
        }

        // 检查是否已解锁
        const existing = await env.MY_DB.prepare(
            'SELECT id FROM user_unlocked_episodes WHERE user_id = ? AND episode_id = ?'
        ).bind(user.id, episode_id).first();
        
        if (existing) {
            return jsonResponse({ error: '该集已解锁' }, 400);
        }

        // 扣除金币
        await env.MY_DB.prepare(
            'UPDATE users SET coins = coins - ? WHERE id = ?'
        ).bind(cost, user.id).run();

        // 生成 UUID（SQLite 兼容）
        const uuidRow = await env.MY_DB.prepare(
            `SELECT hex(randomblob(4)) || '-' || 
                    hex(randomblob(2)) || '-' || 
                    hex(randomblob(2)) || '-' || 
                    hex(randomblob(2)) || '-' || 
                    hex(randomblob(6)) as id`
        ).first();
        const id = uuidRow.id;

        // 插入解锁记录
        await env.MY_DB.prepare(
            'INSERT INTO user_unlocked_episodes (id, user_id, episode_id, drama_id, unlocked_at) VALUES (?, ?, ?, ?, ?)'
        ).bind(id, user.id, episode_id, drama_id, new Date().toISOString()).run();

        // 获取更新后的金币余额
        const updatedUser = await env.MY_DB.prepare(
            'SELECT coins FROM users WHERE id = ?'
        ).bind(user.id).first();

        return jsonResponse({
            success: true,
            coins_remaining: updatedUser.coins,
            episode_id: episode_id
        });
    } catch (error) {
        console.error('解锁单集失败:', error);
        return jsonResponse({ error: error.message }, 500);
    }
}
// 用户路由分发函数
export async function handleUser(request, env, url, method) {
  const path = url.pathname;

  // 首先验证用户
  const auth = await authenticate(request, env);
  if (auth.error) {
    return jsonResponse({ error: auth.error }, auth.status);
  }
  const user = auth.user;
// 获取签到记录
if (path === '/api/user/checkins' && method === 'GET') {
    return getUserCheckins(request, env, user, url);
}

// 每日签到
if (path === '/api/user/checkin' && method === 'POST') {
    return checkin(request, env, user);
} 
 // ==================== 剧集相关（点赞、收藏、评论） ====================
  // 点赞状态
  if (path.match(/^\/api\/dramas\/[^\/]+\/like-status$/) && method === 'GET') {
    return getLikeStatus(request, env, url, user);
  }

  // 点赞
  if ((path === '/api/dramas/like' || path.match(/^\/api\/dramas\/[^\/]+\/like$/)) && method === 'POST') {
    return likeDrama(request, env, user, url);
  }

  // 取消点赞
  if ((path === '/api/dramas/unlike' || path.match(/^\/api\/dramas\/[^\/]+\/unlike$/)) && method === 'POST') {
    return unlikeDrama(request, env, user, url);
  }

  // 收藏状态
  if (path.match(/^\/api\/dramas\/[^\/]+\/favorite-status$/) && method === 'GET') {
    return getFavoriteStatus(request, env, user, url);
  }

  // 收藏
  if ((path === '/api/dramas/favorite' || path.match(/^\/api\/dramas\/[^\/]+\/favorite$/)) && method === 'POST') {
    return favoriteDrama(request, env, user, url);
  }

  // 取消收藏
  if ((path === '/api/dramas/unfavorite' || path.match(/^\/api\/dramas\/[^\/]+\/unfavorite$/)) && method === 'POST') {
    return unfavoriteDrama(request, env, user, url);
  }

  // 记录分享
  if (path === '/api/shares' && method === 'POST') {
    return share(request, env, user);
  }

  // ==================== 用户相关接口（具体路径优先） ====================
  // 获取用户统计数据
  if (path === '/api/user/stats' && method === 'GET') {
    return getUserStats(request, env, user);
  }

   // 提现申请
  if (path === '/api/user/withdraw' && method === 'POST') {
    return withdraw(request, env, user);
  }
  if (path === '/api/user/withdrawals' && method === 'GET') {
  return getUserWithdrawals(request, env, user, url);
}

  // ==================== 用户相关接口（带参数路径） ====================
  // 获取用户信息 (GET /api/user/:id)
  if (path.startsWith('/api/user/') && method === 'GET' && path.split('/').length === 4) {
    return getUserProfile(request, env, user, url);
  }

  // 更新用户资料 (PUT /api/user/:id)
  if (path.match(/^\/api\/user\/[^\/]+$/) && method === 'PUT') {
    return updateUserProfile(request, env, user, url);
  }

  // 获取用户观看历史 (GET /api/user/:id/history)
  if (path.match(/^\/api\/user\/[^\/]+\/history$/) && method === 'GET') {
    return getUserHistory(request, env, user, url);
  }

  // 获取用户收藏列表 (GET /api/user/:id/favorites)
  if (path.match(/^\/api\/user\/[^\/]+\/favorites$/) && method === 'GET') {
    return getUserFavorites(request, env, user, url);
  }

  // 获取用户交易记录 (GET /api/user/:id/transactions)
  if (path.match(/^\/api\/user\/[^\/]+\/transactions$/) && method === 'GET') {
    return getUserTransactions(request, env, user, url);
  }
if (path === '/api/user/unlock-drama' && method === 'POST') {
    return unlockDrama(request, env, user);
}
  // 获取用户已解锁剧集 (GET /api/user/:id/unlocked-dramas)
  if (path.match(/^\/api\/user\/[^\/]+\/unlocked-dramas$/) && method === 'GET') {
    return getUnlockedDramas(request, env, user, url);
  }
// 获取用户已解锁单集
if (path.match(/^\/api\/user\/[^\/]+\/unlocked-episodes$/) && method === 'GET') {
    return getUnlockedEpisodes(request, env, user, url);
}

// 解锁单集
if (path === '/api/user/unlock-episode' && method === 'POST') {
    return unlockEpisode(request, env, user);
}
// 记录播放
if (path === '/api/drama/play' && method === 'POST') {
  return recordPlay(request, env, user);
}
  // 未匹配
  return null;
}  