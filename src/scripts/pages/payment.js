/**
 * 充值页页面逻辑
 * 处理金币套餐、VIP订阅、支付流程等
 */

export default class PaymentPage {
    constructor(params) {
        this.params = params;
        this.activeTab = params.tab || 'coins'; // coins, vip, history
        this.selectedPackage = null;
        this.selectedPaymentMethod = 'card';
        this.promoCode = null;
        this.discount = 0;
        
        this.init();
    }
    
    /**
     * 初始化
     */
    async init() {
        console.log('Payment page initialized', this.params);
        
        // 检查登录状态
        if (!window.auth.isLoggedIn()) {
            window.router.navigate('/login', { redirect: 'payment' });
            return;
        }
        
        // 显示加载中
        this.showLoading();
        
        // 初始化选项卡
        this.initTabs();
        
        // 加载数据
        await this.loadCoinPackages();
        await this.loadVipPlans();
        await this.loadTransactionHistory();
        
        // 绑定事件
        this.bindEvents();
        
        // 隐藏加载中
        this.hideLoading();
        
        // 如果URL指定了选项卡，切换到对应tab
        if (this.activeTab !== 'coins') {
            this.switchTab(this.activeTab);
        }
    }
    
    /**
     * 初始化选项卡
     */
    initTabs() {
        const tabs = document.querySelectorAll('.payment-tab');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabName = tab.dataset.tab;
                this.switchTab(tabName);
            });
        });
    }
    
    /**
     * 切换选项卡
     */
    switchTab(tabName) {
        this.activeTab = tabName;
        
        // 更新选项卡激活状态
        document.querySelectorAll('.payment-tab').forEach(tab => {
            if (tab.dataset.tab === tabName) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
        
        // 显示对应内容
        document.querySelectorAll('.tab-content').forEach(content => {
            if (content.id === `${tabName}Tab`) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
        
        // 更新URL参数但不刷新页面
        const url = new URL(window.location);
        url.searchParams.set('tab', tabName);
        window.history.replaceState({}, '', url);
    }
    
    /**
     * 加载金币套餐
     */
    async loadCoinPackages() {
        try {
            // 模拟数据 - 实际应从API获取
            this.coinPackages = [
                {
                    id: 1,
                    coins: 100,
                    price: 0.99,
                    bonus: 0,
                    popular: false,
                    originalPrice: 0.99
                },
                {
                    id: 2,
                    coins: 500,
                    price: 4.99,
                    bonus: 50,
                    popular: false,
                    originalPrice: 4.99,
                    discount: 0
                },
                {
                    id: 3,
                    coins: 1200,
                    price: 9.99,
                    bonus: 200,
                    popular: true,
                    originalPrice: 11.99,
                    discount: 17
                },
                {
                    id: 4,
                    coins: 2500,
                    price: 19.99,
                    bonus: 500,
                    popular: false,
                    originalPrice: 24.99,
                    discount: 20
                },
                {
                    id: 5,
                    coins: 6500,
                    price: 49.99,
                    bonus: 1500,
                    popular: false,
                    originalPrice: 64.99,
                    discount: 23
                },
                {
                    id: 6,
                    coins: 14000,
                    price: 99.99,
                    bonus: 4000,
                    popular: false,
                    originalPrice: 139.99,
                    discount: 29
                }
            ];
            
            this.renderCoinPackages();
            
        } catch (error) {
            console.error('Failed to load coin packages:', error);
            this.showError('加载套餐失败');
        }
    }
    
    /**
     * 渲染金币套餐
     */
    renderCoinPackages() {
        const container = document.getElementById('coinPackages');
        if (!container) return;
        
        container.innerHTML = '';
        
        this.coinPackages.forEach(pkg => {
            const card = document.createElement('div');
            card.className = 'package-card';
            if (pkg.popular) {
                card.classList.add('popular');
            }
            
            card.innerHTML = `
                ${pkg.popular ? '<div class="popular-badge">最受欢迎</div>' : ''}
                <div class="package-icon">
                    <i class="fas fa-coins"></i>
                </div>
                <div class="package-amount">${pkg.coins.toLocaleString()} 金币</div>
                ${pkg.bonus > 0 ? `<div class="package-bonus">+ ${pkg.bonus} 额外赠送</div>` : ''}
                <div class="package-price">
                    ${pkg.discount ? `<span class="original-price">$${pkg.originalPrice.toFixed(2)}</span>` : ''}
                    <span class="current-price">$${pkg.price.toFixed(2)}</span>
                </div>
                ${pkg.discount ? `<div class="package-discount">节省 ${pkg.discount}%</div>` : ''}
                <button class="buy-btn" data-package='${JSON.stringify(pkg)}'>
                    立即购买
                </button>
            `;
            
            container.appendChild(card);
        });
    }
    
    /**
     * 加载VIP套餐
     */
    async loadVipPlans() {
        try {
            // 模拟数据 - 实际应从API获取
            this.vipPlans = [
                {
                    id: 1,
                    name: '月度VIP',
                    duration: 30,
                    price: 9.99,
                    originalPrice: 9.99,
                    discount: 0,
                    popular: false,
                    features: [
                        '无广告观看',
                        '独家内容访问',
                        '高清画质',
                        '提前观看新剧集'
                    ]
                },
                {
                    id: 2,
                    name: '季度VIP',
                    duration: 90,
                    price: 24.99,
                    originalPrice: 29.97,
                    discount: 17,
                    popular: true,
                    features: [
                        '所有月度VIP权益',
                        '额外20%金币奖励',
                        '专属客服',
                        '生日礼物'
                    ]
                },
                {
                    id: 3,
                    name: '年度VIP',
                    duration: 365,
                    price: 79.99,
                    originalPrice: 119.88,
                    discount: 33,
                    popular: false,
                    features: [
                        '所有季度VIP权益',
                        '专属VIP徽章',
                        '线下活动优先权',
                        '年度会员礼盒'
                    ]
                }
            ];
            
            this.renderVipPlans();
            
        } catch (error) {
            console.error('Failed to load VIP plans:', error);
            this.showError('加载VIP套餐失败');
        }
    }
    
    /**
     * 渲染VIP套餐
     */
    renderVipPlans() {
        const container = document.getElementById('vipPackages');
        if (!container) return;
        
        container.innerHTML = '';
        
        this.vipPlans.forEach(plan => {
            const card = document.createElement('div');
            card.className = 'vip-card';
            if (plan.popular) {
                card.classList.add('popular');
            }
            
            card.innerHTML = `
                ${plan.popular ? '<div class="popular-badge">最受欢迎</div>' : ''}
                <div class="vip-icon">
                    <i class="fas fa-crown"></i>
                </div>
                <h3 class="vip-name">${plan.name}</h3>
                <div class="vip-duration">${plan.duration}天</div>
                <div class="vip-price">
                    ${plan.discount ? `<span class="original-price">$${plan.originalPrice.toFixed(2)}</span>` : ''}
                    <span class="current-price">$${plan.price.toFixed(2)}</span>
                </div>
                ${plan.discount ? `<div class="vip-discount">节省 ${plan.discount}%</div>` : ''}
                <ul class="vip-features">
                    ${plan.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
                </ul>
                <button class="buy-vip-btn" data-plan='${JSON.stringify(plan)}'>
                    立即开通
                </button>
            `;
            
            container.appendChild(card);
        });
    }
    
    /**
     * 加载交易历史
     */
    async loadTransactionHistory() {
        try {
            // 模拟数据 - 实际应从API获取
            this.transactions = [
                {
                    id: 1,
                    type: 'purchase',
                    item: '1200金币套餐',
                    amount: 9.99,
                    status: 'success',
                    date: '2024-03-15 14:30',
                    paymentMethod: '信用卡'
                },
                {
                    id: 2,
                    type: 'subscription',
                    item: '月度VIP',
                    amount: 9.99,
                    status: 'success',
                    date: '2024-03-01 10:15',
                    paymentMethod: 'PayPal'
                },
                {
                    id: 3,
                    type: 'purchase',
                    item: '500金币套餐',
                    amount: 4.99,
                    status: 'pending',
                    date: '2024-02-28 16:45',
                    paymentMethod: 'Google Pay'
                },
                {
                    id: 4,
                    type: 'purchase',
                    item: '2500金币套餐',
                    amount: 19.99,
                    status: 'success',
                    date: '2024-02-20 11:20',
                    paymentMethod: '信用卡'
                },
                {
                    id: 5,
                    type: 'subscription',
                    item: '季度VIP',
                    amount: 24.99,
                    status: 'success',
                    date: '2024-02-01 09:30',
                    paymentMethod: 'PayPal'
                }
            ];
            
            this.renderTransactionHistory();
            
        } catch (error) {
            console.error('Failed to load transactions:', error);
        }
    }
    
    /**
     * 渲染交易历史
     */
    renderTransactionHistory() {
        const container = document.getElementById('transactionHistory');
        if (!container) return;
        
        if (this.transactions.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-receipt"></i>
                    <h4>暂无交易记录</h4>
                    <p>完成首次购买后记录将显示在这里</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = '';
        
        this.transactions.forEach(transaction => {
            const item = document.createElement('div');
            item.className = 'history-item';
            
            const statusClass = transaction.status === 'success' ? 'success' : 
                               transaction.status === 'pending' ? 'pending' : 'failed';
            
            item.innerHTML = `
                <div class="history-info">
                    <div class="history-icon ${statusClass}">
                        <i class="fas ${this.getStatusIcon(transaction.status)}"></i>
                    </div>
                    <div class="history-details">
                        <h4>${transaction.item}</h4>
                        <p>${transaction.date} · ${transaction.paymentMethod}</p>
                    </div>
                </div>
                <div class="history-amount ${statusClass}">
                    $${transaction.amount.toFixed(2)}
                </div>
            `;
            
            container.appendChild(item);
        });
    }
    
    /**
     * 获取状态图标
     */
    getStatusIcon(status) {
        const icons = {
            'success': 'fa-check-circle',
            'pending': 'fa-clock',
            'failed': 'fa-exclamation-circle',
            'refunded': 'fa-undo'
        };
        return icons[status] || 'fa-circle';
    }
    
    /**
     * 绑定事件
     */
    bindEvents() {
        // 支付方式选择
        document.querySelectorAll('.method-card').forEach(card => {
            card.addEventListener('click', () => {
                document.querySelectorAll('.method-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                this.selectedPaymentMethod = card.dataset.method;
            });
        });
        
        // 购买按钮委托事件
        document.addEventListener('click', (e) => {
            const buyBtn = e.target.closest('.buy-btn');
            if (buyBtn) {
                const packageData = JSON.parse(buyBtn.dataset.package);
                this.selectCoinPackage(packageData);
            }
            
            const vipBtn = e.target.closest('.buy-vip-btn');
            if (vipBtn) {
                const planData = JSON.parse(vipBtn.dataset.plan);
                this.selectVipPlan(planData);
            }
        });
        
        // 支付表单提交
        document.getElementById('paymentForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.processPayment();
        });
        
        // 优惠码应用
        document.getElementById('applyPromoBtn')?.addEventListener('click', () => {
            this.applyPromoCode();
        });
        
        // 优惠码输入框回车
        document.getElementById('promoCode')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.applyPromoCode();
            }
        });
        
        // 查看全部交易
        document.getElementById('viewAllTransactions')?.addEventListener('click', () => {
            this.switchTab('history');
        });
        
        // 返回按钮
        document.getElementById('backBtn')?.addEventListener('click', () => {
            window.history.back();
        });
    }
    
    /**
     * 选择金币套餐
     */
    selectCoinPackage(pkg) {
        this.selectedPackage = {
            type: 'coins',
            ...pkg
        };
        
        // 计算最终价格
        const finalPrice = this.applyDiscount(pkg.price);
        
        // 更新支付按钮
        this.updatePayButton(`支付 $${finalPrice.toFixed(2)}`);
        
        // 滚动到支付表单
        document.getElementById('paymentFormSection').scrollIntoView({ 
            behavior: 'smooth' 
        });
        
        // 高亮选中的套餐
        document.querySelectorAll('.package-card').forEach(card => {
            card.style.borderColor = '';
        });
        event.currentTarget.closest('.package-card').style.borderColor = 'var(--primary)';
    }
    
    /**
     * 选择VIP套餐
     */
    selectVipPlan(plan) {
        this.selectedPackage = {
            type: 'vip',
            ...plan
        };
        
        // 计算最终价格
        const finalPrice = this.applyDiscount(plan.price);
        
        // 更新支付按钮
        this.updatePayButton(`支付 $${finalPrice.toFixed(2)}`);
        
        // 滚动到支付表单
        document.getElementById('paymentFormSection').scrollIntoView({ 
            behavior: 'smooth' 
        });
        
        // 高亮选中的套餐
        document.querySelectorAll('.vip-card').forEach(card => {
            card.style.borderColor = '';
        });
        event.currentTarget.closest('.vip-card').style.borderColor = 'var(--primary)';
    }
    
    /**
     * 应用折扣
     */
    applyDiscount(price) {
        if (this.discount > 0) {
            return price * (1 - this.discount / 100);
        }
        return price;
    }
    
    /**
     * 更新支付按钮
     */
    updatePayButton(text) {
        const payBtn = document.getElementById('payNowBtn');
        if (payBtn) {
            payBtn.innerHTML = `<i class="fas fa-lock"></i> ${text}`;
            payBtn.disabled = false;
        }
    }
    
    /**
     * 应用优惠码
     */
    async applyPromoCode() {
        const input = document.getElementById('promoCode');
        const code = input.value.trim().toUpperCase();
        
        if (!code) {
            this.showError('请输入优惠码');
            return;
        }
        
        // 模拟验证优惠码
        const validCodes = {
            'WELCOME10': 10,
            'VIP20': 20,
            'SAVE30': 30,
            'COIN50': 50
        };
        
        if (validCodes[code]) {
            this.discount = validCodes[code];
            input.style.borderColor = 'var(--success)';
            this.showToast(`优惠码应用成功！获得${this.discount}%折扣`);
            
            // 如果已选择套餐，更新价格
            if (this.selectedPackage) {
                const finalPrice = this.applyDiscount(this.selectedPackage.price);
                this.updatePayButton(`支付 $${finalPrice.toFixed(2)}`);
            }
        } else {
            input.style.borderColor = 'var(--error)';
            this.showError('无效的优惠码');
        }
    }
    
    /**
     * 处理支付
     */
    async processPayment() {
        if (!this.selectedPackage) {
            this.showError('请先选择套餐');
            return;
        }
        
        // 获取支付表单数据
        const formData = {
            cardNumber: document.getElementById('cardNumber')?.value.replace(/\s/g, ''),
            cardName: document.getElementById('cardName')?.value,
            expiry: document.getElementById('expiry')?.value,
            cvv: document.getElementById('cvv')?.value,
            email: document.getElementById('email')?.value
        };
        
        // 简单验证
        if (!formData.cardNumber || !formData.cardName || !formData.expiry || !formData.cvv) {
            this.showError('请填写完整的支付信息');
            return;
        }
        
        // 显示处理中状态
        const payBtn = document.getElementById('payNowBtn');
        const originalText = payBtn.innerHTML;
        payBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 处理中...';
        payBtn.disabled = true;
        
        try {
            // 模拟支付请求
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // 模拟成功概率90%
            const success = Math.random() > 0.1;
            
            if (success) {
                // 支付成功
                const finalPrice = this.applyDiscount(this.selectedPackage.price);
                
                // 创建交易记录
                const transaction = {
                    id: Date.now(),
                    type: this.selectedPackage.type === 'coins' ? 'purchase' : 'subscription',
                    item: this.selectedPackage.type === 'coins' 
                        ? `${this.selectedPackage.coins}金币套餐`
                        : this.selectedPackage.name,
                    amount: finalPrice,
                    status: 'success',
                    date: new Date().toLocaleString(),
                    paymentMethod: this.selectedPaymentMethod === 'card' ? '信用卡' : this.selectedPaymentMethod
                };
                
                this.transactions.unshift(transaction);
                this.renderTransactionHistory();
                
                // 更新用户金币
                if (this.selectedPackage.type === 'coins') {
                    const totalCoins = this.selectedPackage.coins + (this.selectedPackage.bonus || 0);
                    await this.updateUserCoins(totalCoins);
                } else {
                    // 更新VIP状态
                    await this.updateVipStatus(this.selectedPackage);
                }
                
                // 显示成功消息
                this.showToast('支付成功！');
                
                // 重置表单
                this.resetPaymentForm();
                
                // 3秒后跳转到个人中心或停留
                setTimeout(() => {
                    if (this.selectedPackage.type === 'vip') {
                        window.router.navigate('/profile?tab=vip');
                    }
                }, 3000);
                
            } else {
                throw new Error('Payment failed');
            }
            
        } catch (error) {
            console.error('Payment failed:', error);
            this.showError('支付失败，请重试');
            
            // 恢复按钮
            payBtn.innerHTML = originalText;
            payBtn.disabled = false;
        }
    }
    
    /**
     * 更新用户金币
     */
    async updateUserCoins(amount) {
        // 模拟API调用
        console.log(`Adding ${amount} coins to user`);
        
        // 更新本地存储的显示
        const balanceEl = document.querySelector('.coin-balance span');
        if (balanceEl) {
            const current = parseInt(balanceEl.textContent.replace(/,/g, ''));
            balanceEl.textContent = (current + amount).toLocaleString();
        }
    }
    
    /**
     * 更新VIP状态
     */
    async updateVipStatus(plan) {
        // 模拟API调用
        console.log(`Upgrading to VIP ${plan.name}`);
        
        // 这里可以触发全局VIP状态更新
    }
    
    /**
     * 重置支付表单
     */
    resetPaymentForm() {
        document.getElementById('paymentForm')?.reset();
        document.getElementById('payNowBtn').innerHTML = '<i class="fas fa-lock"></i> 立即支付';
        document.getElementById('payNowBtn').disabled = true;
        this.selectedPackage = null;
        this.discount = 0;
        document.getElementById('promoCode').value = '';
        
        // 移除套餐高亮
        document.querySelectorAll('.package-card, .vip-card').forEach(card => {
            card.style.borderColor = '';
        });
    }
    
    /**
     * 格式化卡号输入
     */
    formatCardNumber(input) {
        let value = input.value.replace(/\D/g, '');
        value = value.replace(/(.{4})/g, '$1 ').trim();
        input.value = value.substring(0, 19);
    }
    
    /**
     * 格式化有效期输入
     */
    formatExpiry(input) {
        let value = input.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        input.value = value;
    }
    
    /**
     * 显示加载中
     */
    showLoading() {
        const loading = document.getElementById('pageLoading');
        if (loading) {
            loading.classList.add('show');
        }
    }
    
    /**
     * 隐藏加载中
     */
    hideLoading() {
        const loading = document.getElementById('pageLoading');
        if (loading) {
            loading.classList.remove('show');
        }
    }
    
    /**
     * 显示提示
     */
    showToast(message) {
        const event = new CustomEvent('showToast', {
            detail: { message, type: 'success' }
        });
        document.dispatchEvent(event);
    }
    
    /**
     * 显示错误
     */
    showError(message) {
        const event = new CustomEvent('showToast', {
            detail: { message, type: 'error' }
        });
        document.dispatchEvent(event);
    }
    
    /**
     * 页面销毁
     */
    destroy() {
        console.log('Payment page destroyed');
    }
}