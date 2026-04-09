// src/routes/admin/withdrawals.js
import { jsonResponse } from '../../utils/response.js';

// 获取提现列表（支持分页、状态筛选）
export async function getWithdrawals(request, env, url) {
  try {
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;
    const status = url.searchParams.get('status'); // 可选：pending, approved, rejected, completed

    let whereClause = 'WHERE 1=1';
    const params = [];
    if (status) {
      whereClause += ' AND w.status = ?';
      params.push(status);
    }

    // 获取总数
    const countResult = await env.MY_DB.prepare(
      `SELECT COUNT(*) as total FROM withdraw_requests w ${whereClause}`
    ).bind(...params).first();
    const total = countResult.total || 0;

    // 获取列表，关联用户表获取用户名和邮箱
    const { results } = await env.MY_DB.prepare(`
      SELECT 
        w.*,
        u.nickname as user_name,
        u.email as user_email
      FROM withdraw_requests w
      JOIN users u ON w.user_id = u.id
      ${whereClause}
      ORDER BY w.created_at DESC
      LIMIT ? OFFSET ?
    `).bind(...params, limit, offset).all();

    return jsonResponse({
      success: true,
      data: results,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) }
    });
  } catch (error) {
    console.error('getWithdrawals error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// 获取单条提现详情
export async function getWithdrawal(request, env, url, id) {
  try {
    const withdrawal = await env.MY_DB.prepare(`
      SELECT 
        w.*,
        u.nickname as user_name,
        u.email as user_email
      FROM withdraw_requests w
      JOIN users u ON w.user_id = u.id
      WHERE w.id = ?
    `).bind(id).first();

    if (!withdrawal) {
      return jsonResponse({ error: '提现记录不存在' }, 404);
    }

    return jsonResponse({ success: true, data: withdrawal });
  } catch (error) {
    console.error('getWithdrawal error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// 更新提现状态（审核通过/拒绝/完成）
export async function updateWithdrawalStatus(request, env, url, id) {
  try {
    const body = await request.json();
    const { status, remark } = body; // status: approved, rejected, completed
    // 从认证中获取管理员ID（假设 authenticate 已将用户信息附加到 request.user）
    const adminId = request.user?.id;

    if (!status) {
      return jsonResponse({ error: '缺少状态参数' }, 400);
    }

    // 获取当前提现记录
    const withdrawal = await env.MY_DB.prepare(
      'SELECT * FROM withdraw_requests WHERE id = ?'
    ).bind(id).first();

    if (!withdrawal) {
      return jsonResponse({ error: '提现记录不存在' }, 404);
    }

    // 如果已经是终态，不能再次修改
    if (['approved', 'rejected', 'completed'].includes(withdrawal.status)) {
      return jsonResponse({ error: '该记录已无法修改' }, 400);
    }

    const now = new Date().toISOString();
    let updates = [];
    let params = [];

    updates.push('status = ?');
    params.push(status);
    updates.push('reviewed_at = ?');
    params.push(now);
    updates.push('reviewer_id = ?');
    params.push(adminId);
    if (remark !== undefined) {
      updates.push('remark = ?');
      params.push(remark);
    }
    if (status === 'completed') {
      updates.push('completed_at = ?');
      params.push(now);
    }

    params.push(id);
    const query = `UPDATE withdraw_requests SET ${updates.join(', ')} WHERE id = ?`;

    await env.MY_DB.prepare(query).bind(...params).run();

    // 根据状态处理用户金币
    if (status === 'approved') {
      // 审核通过：实际扣除用户冻结的金币（申请时已冻结，只需减少 frozen_coins）
      await env.MY_DB.prepare(
        'UPDATE users SET frozen_coins = frozen_coins - ? WHERE id = ? AND frozen_coins >= ?'
      ).bind(withdrawal.amount, withdrawal.user_id, withdrawal.amount).run();
    } else if (status === 'rejected') {
      // 审核拒绝：返还冻结的金币给用户（增加 coins，减少 frozen_coins）
      await env.MY_DB.prepare(
        'UPDATE users SET coins = coins + ?, frozen_coins = frozen_coins - ? WHERE id = ? AND frozen_coins >= ?'
      ).bind(withdrawal.amount, withdrawal.amount, withdrawal.user_id, withdrawal.amount).run();
    }
    // 如果是 completed，只是打款完成，金币已扣除，无需再操作

    return jsonResponse({ success: true });
  } catch (error) {
    console.error('updateWithdrawalStatus error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}