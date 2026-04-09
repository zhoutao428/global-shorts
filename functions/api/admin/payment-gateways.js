// src/routes/admin/payment-gateways.js
import { jsonResponse } from '../../utils/response.js';

export async function getGateways(request, env) {
  try {
    const settings = await env.MY_DB.prepare(
      "SELECT value FROM settings WHERE key = 'payment_gateways'"
    ).first();
    let gateways = [];
    if (settings && settings.value) {
      gateways = JSON.parse(settings.value);
    } else {
      gateways = [
        { id: '1', name: '支付宝', type: 'alipay', merchant_id: '', is_active: false, sort_order: 1, config: {} },
        { id: '2', name: '微信支付', type: 'wechat', merchant_id: '', is_active: false, sort_order: 2, config: {} },
        { id: '3', name: 'PayPal', type: 'paypal', merchant_id: '', is_active: false, sort_order: 3, config: {} },
        { id: '4', name: 'Stripe', type: 'stripe', merchant_id: '', is_active: false, sort_order: 4, config: {} }
      ];
    }
    return jsonResponse({ success: true, data: gateways });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function createGateway(request, env) {
  try {
    const { name, type, merchant_id, secret_key, public_key, gateway_url, webhook_secret, sort_order, is_active, is_default } = await request.json();
    const settings = await env.MY_DB.prepare(
      "SELECT value FROM settings WHERE key = 'payment_gateways'"
    ).first();
    let gateways = [];
    if (settings && settings.value) {
      gateways = JSON.parse(settings.value);
    }
    const id = crypto.randomUUID();
    if (is_default) {
      gateways.forEach(g => g.is_default = false);
    }
    gateways.push({
      id, name, type, merchant_id, secret_key, public_key: public_key || '',
      gateway_url: gateway_url || '', webhook_secret: webhook_secret || '',
      sort_order: sort_order || gateways.length + 1,
      is_active: is_active !== false,
      is_default: is_default || false,
      created_at: new Date().toISOString()
    });
    gateways.sort((a, b) => a.sort_order - b.sort_order);
    await env.MY_DB.prepare(
      "UPDATE settings SET value = ? WHERE key = 'payment_gateways'"
    ).bind(JSON.stringify(gateways)).run();
    return jsonResponse({ success: true, id });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function getGateway(request, env, id) {
  try {
    const settings = await env.MY_DB.prepare(
      "SELECT value FROM settings WHERE key = 'payment_gateways'"
    ).first();
    if (!settings || !settings.value) {
      return jsonResponse({ error: '支付接口不存在' }, 404);
    }
    const gateways = JSON.parse(settings.value);
    const gateway = gateways.find(g => g.id === id);
    if (!gateway) {
      return jsonResponse({ error: '支付接口不存在' }, 404);
    }
    const safeGateway = { ...gateway };
    if (safeGateway.secret_key) safeGateway.secret_key = '********';
    if (safeGateway.webhook_secret) safeGateway.webhook_secret = '********';
    return jsonResponse({ success: true, data: safeGateway });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function updateGateway(request, env, id) {
  try {
    const { name, type, merchant_id, secret_key, public_key, gateway_url, webhook_secret, sort_order, is_active, is_default } = await request.json();
    const settings = await env.MY_DB.prepare(
      "SELECT value FROM settings WHERE key = 'payment_gateways'"
    ).first();
    if (!settings || !settings.value) {
      return jsonResponse({ error: '支付接口不存在' }, 404);
    }
    let gateways = JSON.parse(settings.value);
    const index = gateways.findIndex(g => g.id === id);
    if (index === -1) {
      return jsonResponse({ error: '支付接口不存在' }, 404);
    }
    if (is_default) {
      gateways.forEach(g => g.is_default = false);
    }
    gateways[index] = {
      ...gateways[index],
      name: name || gateways[index].name,
      type: type || gateways[index].type,
      merchant_id: merchant_id !== undefined ? merchant_id : gateways[index].merchant_id,
      public_key: public_key !== undefined ? public_key : gateways[index].public_key,
      gateway_url: gateway_url !== undefined ? gateway_url : gateways[index].gateway_url,
      sort_order: sort_order || gateways[index].sort_order,
      is_active: is_active !== undefined ? is_active : gateways[index].is_active,
      is_default: is_default || false
    };
    if (secret_key && secret_key !== '********') {
      gateways[index].secret_key = secret_key;
    }
    if (webhook_secret && webhook_secret !== '********') {
      gateways[index].webhook_secret = webhook_secret;
    }
    gateways.sort((a, b) => a.sort_order - b.sort_order);
    await env.MY_DB.prepare(
      "UPDATE settings SET value = ? WHERE key = 'payment_gateways'"
    ).bind(JSON.stringify(gateways)).run();
    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function deleteGateway(request, env, id) {
  try {
    const settings = await env.MY_DB.prepare(
      "SELECT value FROM settings WHERE key = 'payment_gateways'"
    ).first();
    if (!settings || !settings.value) {
      return jsonResponse({ error: '支付接口不存在' }, 404);
    }
    let gateways = JSON.parse(settings.value);
    const gateway = gateways.find(g => g.id === id);
    if (!gateway) {
      return jsonResponse({ error: '支付接口不存在' }, 404);
    }
    if (gateway.is_default) {
      return jsonResponse({ error: '不能删除默认支付接口' }, 400);
    }
    gateways = gateways.filter(g => g.id !== id);
    await env.MY_DB.prepare(
      "UPDATE settings SET value = ? WHERE key = 'payment_gateways'"
    ).bind(JSON.stringify(gateways)).run();
    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// 支付全局设置
export async function getPaymentSettings(request, env) {
  try {
    const settings = await env.MY_DB.prepare(
      "SELECT value FROM settings WHERE key = 'payment_settings'"
    ).first();
    let paymentSettings = {
      default_payment: '',
      timeout: 30,
      currency: 'USD',
      enable_callback: true,
      notify_url: 'https://api.globalshorts.com/payment/notify',
      return_url: 'https://globalshorts.com/payment/success',
      success_url: 'https://globalshorts.com/payment/success',
      fail_url: 'https://globalshorts.com/payment/fail'
    };
    if (settings && settings.value) {
      paymentSettings = { ...paymentSettings, ...JSON.parse(settings.value) };
    }
    return jsonResponse({ success: true, data: paymentSettings });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

export async function updatePaymentSettings(request, env) {
  try {
    const settings = await request.json();
    await env.MY_DB.prepare(
      "UPDATE settings SET value = ? WHERE key = 'payment_settings'"
    ).bind(JSON.stringify(settings)).run();
    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}