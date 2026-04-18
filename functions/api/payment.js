// functions/api/payment.js
import { jsonResponse } from '../utils/response.js';
import { authenticate } from '../middleware/auth.js';

// ✅ 获取可用的支付方式（前台调用）
export async function getAvailableGateways(request, env) {
  try {
    const settings = await env.MY_DB.prepare(
      "SELECT value FROM settings WHERE key = 'payment_gateways'"
    ).first();
    
    let gateways = [];
    if (settings?.value) {
      const allGateways = JSON.parse(settings.value);
      // 只返回启用的支付方式，并隐藏敏感信息
      gateways = allGateways
        .filter(g => g.is_active)
        .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
        .map(g => ({
          id: g.id,
          name: g.name || g.type,
          type: g.type,
          icon: g.type,
          is_default: g.is_default || false
        }));
    }
    
    return jsonResponse({ success: true, data: gateways });
  } catch (error) {
    console.error('getAvailableGateways error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// 创建 Stripe Checkout Session（使用 HTTP API）
async function createStripeSession(secretKey, itemName, amount, successUrl, cancelUrl, orderId) {
  const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${secretKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      'payment_method_types[]': 'card',
      'line_items[0][price_data][currency]': 'usd',
      'line_items[0][price_data][product_data][name]': itemName,
      'line_items[0][price_data][unit_amount]': Math.round(amount * 100),
      'line_items[0][quantity]': '1',
      'mode': 'payment',
      'success_url': successUrl,
      'cancel_url': cancelUrl,
      'metadata[orderId]': orderId,
    }),
  });
  
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Stripe API 错误: ${error}`);
  }
  
  return response.json();
}

export async function createOrder(request, env) {
  try {
    const auth = await authenticate(request, env);
    if (auth.error) {
      return jsonResponse({ error: auth.error }, auth.status);
    }
    const user = auth.user;
    
    const body = await request.json();
    const { packageId, type, paymentMethod } = body;
    
    console.log('📦 createOrder 请求:', { packageId, type, paymentMethod });
    
    if (!packageId || !type || !paymentMethod) {
      return jsonResponse({ error: '缺少必要参数' }, 400);
    }
    
    // 获取支付网关配置
    const gatewaySettings = await env.MY_DB.prepare(
      "SELECT value FROM settings WHERE key = 'payment_gateways'"
    ).first();
    const gateways = JSON.parse(gatewaySettings?.value || '[]');
    const gateway = gateways.find(g => g.type === paymentMethod && g.is_active);
    
    if (!gateway) {
      return jsonResponse({ error: '支付方式不可用' }, 400);
    }
    
    // 获取套餐信息
    let itemName, amount, itemId, details;
    if (type === 'coins') {
      const pkg = await env.MY_DB.prepare(
        'SELECT * FROM coin_packages WHERE id = ? AND is_active = 1'
      ).bind(packageId).first();
      
      if (!pkg) {
        return jsonResponse({ error: '套餐不存在' }, 400);
      }
      itemName = pkg.name || `${pkg.base_coins} 金币`;
      amount = pkg.price_usd || 0;
      itemId = pkg.id;
      details = { coins: pkg.base_coins || 0, bonus: pkg.bonus_coins || 0 };
      
    } else if (type === 'vip') {
      const plan = await env.MY_DB.prepare(
        'SELECT * FROM vip_plans WHERE id = ? AND is_active = 1'
      ).bind(packageId).first();
      
      if (!plan) {
        return jsonResponse({ error: '套餐不存在' }, 400);
      }
      itemName = plan.name || `VIP ${plan.duration_days}天`;
      amount = plan.price_usd || 0;
      itemId = plan.id;
      details = { duration: plan.duration_days || 0 };
    } else {
      return jsonResponse({ error: '无效的购买类型' }, 400);
    }
    
    // 生成订单号
    const orderNo = `ORD${Date.now()}${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    const orderId = crypto.randomUUID();
    
    // 保存订单
    await env.MY_DB.prepare(`
      INSERT INTO purchases (id, user_id, item_type, item_id, amount_paid, currency, status, order_no, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      orderId, user.id, type, itemId, Math.round(amount * 100), 'USD', 'pending', orderNo, new Date().toISOString()
    ).run();
    
    // 根据支付方式生成支付参数
    let paymentParams = {};
    
    if (paymentMethod === 'stripe') {
      if (!gateway.secret_key) {
        return jsonResponse({ error: 'Stripe 支付未配置' }, 500);
      }
      
      try {
        const successUrl = `${request.headers.get('origin')}/pages/payment-success.html?orderId=${orderId}`;
        const cancelUrl = `${request.headers.get('origin')}/pages/payment-cancel.html?orderId=${orderId}`;
        
        const session = await createStripeSession(
          gateway.secret_key,
          itemName,
          amount,
          successUrl,
          cancelUrl,
          orderId
        );
        
        paymentParams = { url: session.url };
        console.log('✅ Stripe session URL:', session.url);
        
      } catch (stripeError) {
        console.error('❌ Stripe 错误:', stripeError);
        return jsonResponse({ error: 'Stripe 初始化失败: ' + stripeError.message }, 500);
      }
    } else {
      paymentParams = { simulate: true };
    }
    
    return jsonResponse({
      success: true,
      data: {
        orderId,
        orderNo,
        amount,
        currency: 'USD',
        itemName,
        details,
        paymentParams,
        gateway: paymentMethod
      }
    });
  } catch (error) {
    console.error('❌ createOrder error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// 查询订单状态
export async function getOrderStatus(request, env) {
  try {
    const auth = await authenticate(request, env);
    if (auth.error) {
      return jsonResponse({ error: auth.error }, auth.status);
    }
    
    const url = new URL(request.url);
    const orderId = url.searchParams.get('orderId');
    const orderNo = url.searchParams.get('orderNo');
    
    if (!orderId && !orderNo) {
      return jsonResponse({ error: '缺少订单参数' }, 400);
    }
    
    let order;
    if (orderId) {
      order = await env.MY_DB.prepare(
        'SELECT * FROM purchases WHERE id = ?'
      ).bind(orderId).first();
    } else {
      order = await env.MY_DB.prepare(
        'SELECT * FROM purchases WHERE order_no = ?'
      ).bind(orderNo).first();
    }
    
    if (!order) {
      return jsonResponse({ error: '订单不存在' }, 404);
    }
    
    if (order.user_id !== auth.user.id) {
      return jsonResponse({ error: '无权查看此订单' }, 403);
    }
    
    return jsonResponse({
      success: true,
      data: {
        orderId: order.id,
        orderNo: order.order_no,
        status: order.status,
        amount: order.amount_paid / 100,
        currency: order.currency,
        itemType: order.item_type
      }
    });
  } catch (error) {
    console.error('getOrderStatus error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// 模拟支付成功
export async function mockPaymentSuccess(request, env) {
  try {
    const auth = await authenticate(request, env);
    if (auth.error) {
      return jsonResponse({ error: auth.error }, auth.status);
    }
    
    const body = await request.json();
    const { orderId } = body;
    
    if (!orderId) {
      return jsonResponse({ error: '缺少订单ID' }, 400);
    }
    
    await updateOrderSuccess(env, orderId, 'mock');
    
    return jsonResponse({ success: true });
  } catch (error) {
    console.error('mockPaymentSuccess error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// 支付回调处理
export async function paymentCallback(request, env, provider) {
  try {
    let orderId, transactionId;
    
    if (provider === 'stripe') {
      const payload = await request.text();
      try {
        const event = JSON.parse(payload);
        if (event.type === 'checkout.session.completed') {
          orderId = event.data?.object?.metadata?.orderId;
          transactionId = event.data?.object?.id;
        }
      } catch (e) {
        console.error('解析 Stripe 回调失败:', e);
      }
    } else if (provider === 'paypal') {
      const body = await request.json();
      orderId = body.resource?.purchase_units?.[0]?.custom_id;
      transactionId = body.resource?.id;
    }
    
    if (orderId) {
      await updateOrderSuccess(env, orderId, provider, transactionId);
    }
    
    return jsonResponse({ success: true });
  } catch (error) {
    console.error('paymentCallback error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// 更新订单成功状态
async function updateOrderSuccess(env, orderId, paymentMethod, transactionId = null) {
  const order = await env.MY_DB.prepare(
    'SELECT * FROM purchases WHERE id = ? AND status = ?'
  ).bind(orderId, 'pending').first();
  
  if (!order) return;
  
  await env.MY_DB.prepare(
    'UPDATE purchases SET status = ?, payment_method = ?, transaction_id = ?, updated_at = ? WHERE id = ?'
  ).bind('success', paymentMethod, transactionId || '', new Date().toISOString(), orderId).run();
  
  if (order.item_type === 'coins') {
    const pkg = await env.MY_DB.prepare(
      'SELECT base_coins, bonus_coins FROM coin_packages WHERE id = ?'
    ).bind(order.item_id).first();
    
    if (pkg) {
      const totalCoins = (pkg.base_coins || 0) + (pkg.bonus_coins || 0);
      await env.MY_DB.prepare(
        'UPDATE users SET coins = coins + ? WHERE id = ?'
      ).bind(totalCoins, order.user_id).run();
    }
  } else if (order.item_type === 'vip') {
    const plan = await env.MY_DB.prepare(
      'SELECT duration_days FROM vip_plans WHERE id = ?'
    ).bind(order.item_id).first();
    
    if (plan) {
      const durationDays = plan.duration_days || 30;
      const expiresAt = new Date(Date.now() + durationDays * 24 * 60 * 60 * 1000).toISOString();
      
      await env.MY_DB.prepare(
        'UPDATE users SET is_vip = ?, vip_expires_at = ? WHERE id = ?'
      ).bind(1, expiresAt, order.user_id).run();
    }
  }
}