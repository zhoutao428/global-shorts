// functions/api/payment.js
import { jsonResponse } from '../utils/response.js';
import { authenticate } from '../middleware/auth.js';
import Stripe from 'stripe';

// 获取可用的支付方式（前台调用，从后台配置读取）
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
          name: g.display_name || g.name || g.type,
          type: g.type,
          description: g.description || '',
          icon: g.type,
          is_default: g.is_default || false,
          is_active: g.is_active,
          sort_order: g.sort_order,
          config: g.config || {}
        }));
    }
    
    // 如果没有配置，返回默认的 card
    if (gateways.length === 0) {
      gateways = [{
        id: 'default-card',
        name: '信用卡/借记卡',
        type: 'card',
        description: 'Visa, MasterCard, AMEX',
        icon: 'card',
        is_default: true,
        is_active: true,
        sort_order: 1,
        config: {}
      }];
    }
    
    console.log('getAvailableGateways 返回:', gateways.length, '个支付方式');
    return jsonResponse({ success: true, data: gateways });
  } catch (error) {
    console.error('getAvailableGateways error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// 创建订单
export async function createOrder(request, env) {
  try {
    const auth = await authenticate(request, env);
    if (auth.error) {
      return jsonResponse({ error: auth.error }, auth.status);
    }
    const user = auth.user;
    
    const body = await request.json();
    const { packageId, type, paymentMethod, promoCode } = body;
    
    console.log('📦 createOrder 请求:', { packageId, type, paymentMethod, promoCode, userId: user.id });
    
    if (!packageId || !type || !paymentMethod) {
      return jsonResponse({ error: '缺少必要参数' }, 400);
    }
    
    // 获取支付网关配置
    const gatewaySettings = await env.MY_DB.prepare(
      "SELECT value FROM settings WHERE key = 'payment_gateways'"
    ).first();
    const gateways = JSON.parse(gatewaySettings?.value || '[]');
    const gateway = gateways.find(g => g.type === paymentMethod && g.is_active);
    
    console.log('🔑 网关配置:', gateway ? { 
      type: gateway.type, 
      hasSecretKey: !!gateway.secret_key,
      hasMerchantId: !!gateway.merchant_id 
    } : '未找到');
    
    if (!gateway) {
      return jsonResponse({ error: '支付方式不可用' }, 400);
    }
    
    // 从数据库表获取套餐信息
    let itemName, amount, itemId, details;
    if (type === 'coins') {
      const pkg = await env.MY_DB.prepare(
        'SELECT * FROM coin_packages WHERE id = ? AND is_active = 1'
      ).bind(packageId).first();
      
      if (!pkg) {
        return jsonResponse({ error: '套餐不存在' }, 400);
      }
      itemName = pkg.name;
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
      itemName = plan.name;
      amount = plan.price_usd || 0;
      itemId = plan.id;
      details = { duration: plan.duration_days || 0 };
      
    } else {
      return jsonResponse({ error: '无效的购买类型' }, 400);
    }
    
    console.log('💰 套餐信息:', { itemName, amount });
    
    // 生成订单号
    const orderNo = `ORD${Date.now()}${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    const orderId = crypto.randomUUID();
    
    // 保存订单
    await env.MY_DB.prepare(`
      INSERT INTO purchases (id, user_id, item_type, item_id, amount_paid, currency, status, order_no, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      orderId,
      user.id,
      type,
      itemId,
      Math.round(amount * 100),
      'USD',
      'pending',
      orderNo,
      new Date().toISOString()
    ).run();
    
    console.log('✅ 订单已创建:', orderNo);
    
    // 获取全局支付设置
    const paymentSettingsRes = await env.MY_DB.prepare(
      "SELECT value FROM settings WHERE key = 'payment_settings'"
    ).first();
    const paymentSettings = paymentSettingsRes?.value ? JSON.parse(paymentSettingsRes.value) : {
      currency: 'USD',
      currency_symbol: '$'
    };
    
    // 根据支付方式生成支付参数
    let paymentParams = {};
    
    if (paymentMethod === 'stripe') {
      // 检查密钥
      if (!gateway.secret_key) {
        console.error('❌ Stripe 密钥未配置');
        return jsonResponse({ error: 'Stripe 支付未正确配置，请联系管理员' }, 500);
      }
      
      try {
        console.log('🔄 创建 Stripe Checkout Session...');
        const stripe = new Stripe(gateway.secret_key);
        
        const successUrl = `${request.headers.get('origin')}/pages/payment-success.html?orderId=${orderId}`;
        const cancelUrl = `${request.headers.get('origin')}/pages/payment-cancel.html?orderId=${orderId}`;
        
        console.log('📎 Success URL:', successUrl);
        console.log('📎 Cancel URL:', cancelUrl);
        
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: [{
            price_data: {
              currency: 'usd',
              product_data: { 
                name: itemName,
                description: type === 'coins' ? `${details.coins} 金币 + ${details.bonus} 赠送` : `${details.duration} 天 VIP`
              },
              unit_amount: Math.round(amount * 100),
            },
            quantity: 1,
          }],
          mode: 'payment',
          success_url: successUrl,
          cancel_url: cancelUrl,
          metadata: { 
            orderId,
            userId: user.id,
            type 
          },
        });
        
        paymentParams = { url: session.url };
        console.log('✅ Stripe Session 创建成功:', session.url);
        
      } catch (stripeError) {
        console.error('❌ Stripe 错误:', stripeError);
        return jsonResponse({ 
          error: 'Stripe 支付初始化失败: ' + (stripeError.message || '未知错误') 
        }, 500);
      }
    } else if (paymentMethod === 'card') {
      // 信用卡支付 - 模拟
      paymentParams = { 
        simulate: true,
        message: '模拟信用卡支付'
      };
      console.log('💳 使用模拟信用卡支付');
    } else if (paymentMethod === 'paypal') {
      // PayPal - 模拟
      paymentParams = { 
        simulate: true,
        message: '模拟 PayPal 支付'
      };
      console.log('🅿️ 使用模拟 PayPal 支付');
    } else if (paymentMethod === 'alipay' || paymentMethod === 'wechat') {
      // 支付宝/微信 - 模拟二维码
      paymentParams = { 
        qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=ORDER_${orderNo}`,
        simulate: true
      };
      console.log('📱 使用模拟二维码支付');
    } else {
      // 其他支付方式
      paymentParams = { 
        simulate: true,
        message: '模拟支付'
      };
      console.log('🎯 使用模拟支付');
    }
    
    const responseData = {
      orderId,
      orderNo,
      amount,
      currency: paymentSettings.currency || 'USD',
      currencySymbol: paymentSettings.currency_symbol || '$',
      itemName,
      details,
      paymentParams,
      gateway: paymentMethod
    };
    
    console.log('📤 返回数据:', { 
      orderId, 
      amount, 
      gateway: paymentMethod, 
      hasUrl: !!paymentParams.url 
    });
    
    return jsonResponse({
      success: true,
      data: responseData
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
    
    console.log('🔍 查询订单状态:', { orderId, orderNo });
    
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
    
    // 验证订单归属
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

// 模拟支付成功（用于测试，实际应由回调处理）
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
    
    console.log('🎭 模拟支付成功:', orderId);
    
    // 更新订单状态
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
    console.log('📞 支付回调:', provider);
    
    let orderId, transactionId;
    
    if (provider === 'stripe') {
      const payload = await request.text();
      const sig = request.headers.get('stripe-signature');
      
      try {
        const event = JSON.parse(payload);
        
        // 检查事件类型
        if (event.type === 'checkout.session.completed') {
          orderId = event.data?.object?.metadata?.orderId;
          transactionId = event.data?.object?.id;
          console.log('✅ Stripe 支付成功:', { orderId, transactionId });
        }
      } catch (e) {
        console.error('解析 Stripe 回调失败:', e);
      }
    } else if (provider === 'paypal') {
      const body = await request.json();
      orderId = body.resource?.purchase_units?.[0]?.custom_id;
      transactionId = body.resource?.id;
      console.log('✅ PayPal 支付成功:', { orderId, transactionId });
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
  console.log('🔄 更新订单状态:', { orderId, paymentMethod, transactionId });
  
  const order = await env.MY_DB.prepare(
    'SELECT * FROM purchases WHERE id = ? AND status = ?'
  ).bind(orderId, 'pending').first();
  
  if (!order) {
    console.log('⚠️ 订单不存在或已处理:', orderId);
    return;
  }
  
  // 更新订单状态
  await env.MY_DB.prepare(
    'UPDATE purchases SET status = ?, payment_method = ?, transaction_id = ?, updated_at = ? WHERE id = ?'
  ).bind('success', paymentMethod, transactionId || '', new Date().toISOString(), orderId).run();
  
  console.log('✅ 订单状态已更新为 success');
  
  // 根据购买类型处理
  if (order.item_type === 'coins') {
    const pkg = await env.MY_DB.prepare(
      'SELECT base_coins, bonus_coins FROM coin_packages WHERE id = ?'
    ).bind(order.item_id).first();
    
    if (pkg) {
      const totalCoins = (pkg.base_coins || 0) + (pkg.bonus_coins || 0);
      await env.MY_DB.prepare(
        'UPDATE users SET coins = coins + ? WHERE id = ?'
      ).bind(totalCoins, order.user_id).run();
      
      console.log('💰 用户金币已增加:', totalCoins);
    }
  } else if (order.item_type === 'vip') {
    const plan = await env.MY_DB.prepare(
      'SELECT duration_days FROM vip_plans WHERE id = ?'
    ).bind(order.item_id).first();
    
    if (plan) {
      const durationDays = plan.duration_days || 30;
      const expiresAt = new Date(Date.now() + durationDays * 24 * 60 * 60 * 1000).toISOString();
      
      // 检查用户当前 VIP 状态
      const user = await env.MY_DB.prepare(
        'SELECT vip_expires_at FROM users WHERE id = ?'
      ).bind(order.user_id).first();
      
      let finalExpiresAt = expiresAt;
      if (user?.vip_expires_at) {
        const currentExpires = new Date(user.vip_expires_at);
        if (currentExpires > new Date()) {
          // 如果当前 VIP 未过期，叠加时间
          finalExpiresAt = new Date(currentExpires.getTime() + durationDays * 24 * 60 * 60 * 1000).toISOString();
        }
      }
      
      await env.MY_DB.prepare(
        'UPDATE users SET is_vip = ?, vip_expires_at = ? WHERE id = ?'
      ).bind(1, finalExpiresAt, order.user_id).run();
      
      console.log('👑 用户 VIP 已激活，过期时间:', finalExpiresAt);
    }
  }
}