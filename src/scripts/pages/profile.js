/**
 * 个人中心页面逻辑
 * 处理用户资料、观看历史、收藏、设置等功能
 */

export default class ProfilePage {
    constructor(params) {
        this.params = params;
        this.userData = null;
        this.activeTab = 'profile'; // profile, history, favorites, settings
        
        this.init();
    }
    
    /**
     * 初始化
     */
    async init() {
        console.log('Profile page initialized', this.params);
        
        // 检查登录状态
        if (!window.auth.isLoggedIn()) {
            window.router.navigate('/login', { redirect: 'profile' });
            return;
        }
        
        // 显示加载中
        this.showLoading();
        
        // 加载用户数据
        await this.loadUserData();
        
        // 初始化选项卡
        this.initTabs();
        
        // 加载各模块数据
        this.loadProfileData();
        this.loadHistoryData();
        this.loadFavoritesData();
        
        // 绑定事件
        this.bindEvents();
        
        // 隐藏加载中
        this.hideLoading();
    }
    
    /**
     * 加载用户数据
     */
    async loadUserData() {
        try {
            // 模拟数据 - 实际应从API获取
            this.userData = {
                id: 'user_123',
                username: 'john_smith',
                email: 'john@example.com',
                fullName: 'John Smith',
                avatar: '/images/default-avatar.jpg',
                coins: 1250,
                isVip: true,
                vipExpiresAt: '2024-12-31',
                watchHours: 142,
                dramasWatched: 38,
                episodesWatched: 245,
                createdAt: '2024-01-15',
                country: 'US',
                language: 'en'
            };
            
            // 更新用户信息显示
            this.updateUserInfo();
            
        } catch (error) {
            console.error('Failed to load user data:', error);
            this.showError('加载用户数据失败');
        }
    }
    
    /**
     * 更新用户信息显示
     */
    updateUserInfo() {
        // 更新头像
        const avatarEl = document.querySelector('.profile-avatar');
        if (avatarEl) {
            const initials = this.userData.username.charAt(0).toUpperCase();
            avatarEl.textContent = initials;
        }
        
        // 更新用户名
        document.querySelector('.profile-name').innerHTML = `
            ${this.userData.fullName || this.userData.username}
            ${this.userData.isVip ? '<span class="vip-badge"><i class="fas fa-crown"></i> VIP</span>' : ''}
        `;
        
        // 更新邮箱
        document.querySelector('.profile-email').innerHTML = `
            <i class="fas fa-envelope"></i> ${this.userData.email}
        `;
        
        // 更新统计
        document.getElementById('watchHours').textContent = this.userData.watchHours;
        document.getElementById('dramaCount').textContent = this.userData.dramasWatched;
        document.getElementById('episodeCount').textContent = this.userData.episodesWatched;
        
        // 更新VIP状态
        if (this.userData.isVip) {
            const vipStatus = document.querySelector('.vip-status-container');
            if (vipStatus) {
                const expires = new Date(this.userData.vipExpiresAt);
                const daysLeft = Math.ceil((expires - new Date()) / (1000 * 60 * 60 * 24));
                vipStatus.querySelector('.vip-details p').textContent = 
                    `有效期至 ${this.userData.vipExpiresAt} · 剩余${daysLeft}天`;
            }
        } else {
            // 显示非VIP状态
            this.showNonVipStatus();
        }
        
        // 更新金币
        document.querySelector('.coin-amount span').textContent = 
            this.userData.coins.toLocaleString();
    }
    
    /**
     * 显示非VIP状态
     */
    showNonVipStatus() {
        const vipContainer = document.querySelector('.vip-status-container');
        if (vipContainer) {
            vipContainer.innerHTML = `
                <div class="vip-info">
                    <div class="vip-icon">
                        <i class="fas fa-crown" style="opacity: 0.3;"></i>
                    </div>
                    <div class="vip-details">
                        <h3>尚未开通VIP</h3>
                        <p>开通VIP享受无广告观看、独家内容等特权</p>
                    </div>
                </div>
                <button class="btn btn-primary" id="upgradeVipBtn">
                    <i class="fas fa-gem"></i>
                    立即开通
                </button>
            `;
            
            document.getElementById('upgradeVipBtn')?.addEventListener('click', () => {
                window.router.navigate('/payment', { tab: 'vip' });
            });
        }
    }
    
    /**
     * 初始化选项卡
     */
    initTabs() {
        const tabs = document.querySelectorAll('.profile-tab');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabName = tab.dataset.tab;
                
                // 更新激活状态
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // 切换选项卡
                this.switchTab(tabName);
            });
        });
    }
    
    /**
     * 切换选项卡
     */
    switchTab(tabName) {
        this.activeTab = tabName;
        
        // 隐藏所有内容
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // 显示选中内容
        document.getElementById(`${tabName}Tab`).classList.add('active');
    }
    
    /**
     * 加载个人资料数据
     */
    loadProfileData() {
        // 个人资料表单已静态存在，不需要额外加载
        // 可以在这里填充表单数据
        document.getElementById('displayName').value = this.userData.fullName || '';
        document.getElementById('email').value = this.userData.email;
        document.getElementById('country').value = this.userData.country || '';
        document.getElementById('language').value = this.userData.language || 'en';
    }
    
    /**
     * 加载观看历史
     */
    async loadHistoryData() {
        const container = document.getElementById('historyList');
        if (!container) return;
        
        try {
            // 模拟数据 - 实际应从API获取
            const history = [
                {
                    id: 1,
                    dramaTitle: "总裁的秘密婚姻",
                    episode: "第5集 契约的开始",
                    time: "2小时前",
                    progress: 65,
                    thumbnail: '/images/history1.jpg'
                },
                {
                    id: 2,
                    dramaTitle: "爱情在巴黎",
                    episode: "第12集 塞纳河畔",
                    time: "昨天",
                    progress: 100,
                    thumbnail: '/images/history2.jpg'
                },
                {
                    id: 3,
                    dramaTitle: "我的狼人上司",
                    episode: "第3集 满月之夜",
                    time: "2天前",
                    progress: 45,
                    thumbnail: '/images/history3.jpg'
                },
                {
                    id: 4,
                    dramaTitle: "亿万富翁的错嫁妻",
                    episode: "第8集 真相大白",
                    time: "3天前",
                    progress: 80,
                    thumbnail: '/images/history4.jpg'
                },
                {
                    id: 5,
                    dramaTitle: "办公室恋爱101",
                    episode: "第1集 初次见面",
                    time: "1周前",
                    progress: 100,
                    thumbnail: '/images/history5.jpg'
                }
            ];
            
            container.innerHTML = '';
            
            history.forEach(item => {
                const historyItem = this.createHistoryItem(item);
                container.appendChild(historyItem);
            });
            
        } catch (error) {
            console.error('Failed to load history:', error);
            container.innerHTML = '<div class="empty-state">加载失败</div>';
        }
    }
    
    /**
     * 创建历史记录项
     */
    createHistoryItem(item) {
        const div = document.createElement('div');
        div.className = 'history-item';
        
        div.innerHTML = `
            <div class="history-thumb">
                <img src="${item.thumbnail}" alt="${item.dramaTitle}">
            </div>
            <div class="history-info">
                <div class="history-title">${item.dramaTitle}</div>
                <div class="history-meta">
                    <span>${item.episode}</span>
                    <span>${item.time}</span>
                </div>
                <div class="history-progress">
                    <div class="history-progress-bar" style="width: ${item.progress}%"></div>
                </div>
            </div>
        `;
        
        div.addEventListener('click', () => {
            window.router.navigate(`/player/${item.id}`);
        });
        
        return div;
    }
    
    /**
     * 加载收藏列表
     */
    async loadFavoritesData() {
        const container = document.getElementById('favoritesGrid');
        if (!container) return;
        
        try {
            // 模拟数据 - 实际应从API获取
            const favorites = [
                {
                    id: 1,
                    title: "总裁的秘密婚姻",
                    episodes: 12,
                    isVip: true,
                    thumbnail: '/images/fav1.jpg'
                },
                {
                    id: 2,
                    title: "前妻的复仇",
                    episodes: 30,
                    isVip: true,
                    thumbnail: '/images/fav2.jpg'
                },
                {
                    id: 3,
                    title: "爱情在巴黎",
                    episodes: 24,
                    isVip: false,
                    thumbnail: '/images/fav3.jpg'
                },
                {
                    id: 4,
                    title: "血红玫瑰之谜",
                    episodes: 16,
                    isVip: false,
                    thumbnail: '/images/fav4.jpg'
                },
                {
                    id: 5,
                    title: "隔壁的吸血鬼",
                    episodes: 15,
                    isVip: false,
                    thumbnail: '/images/fav5.jpg'
                },
                {
                    id: 6,
                    title: "我的狼人上司",
                    episodes: 18,
                    isVip: false,
                    thumbnail: '/images/fav6.jpg'
                }
            ];
            
            container.innerHTML = '';
            
            favorites.forEach(item => {
                const favItem = this.createFavoriteItem(item);
                container.appendChild(favItem);
            });
            
        } catch (error) {
            console.error('Failed to load favorites:', error);
            container.innerHTML = '<div class="empty-state">加载失败</div>';
        }
    }
    
    /**
     * 创建收藏项
     */
    createFavoriteItem(item) {
        const div = document.createElement('div');
        div.className = 'favorite-item';
        
        div.innerHTML = `
            <div class="favorite-thumb">
                <img src="${item.thumbnail}" alt="${item.title}">
                ${item.isVip ? '<div class="vip-badge">VIP</div>' : ''}
            </div>
            <div class="favorite-info">
                <div class="favorite-title">${item.title}</div>
                <div class="favorite-meta">${item.episodes}集</div>
            </div>
        `;
        
        div.addEventListener('click', () => {
            window.router.navigate(`/player/${item.id}`);
        });
        
        return div;
    }
    
    /**
     * 加载交易记录
     */
    async loadTransactions() {
        const container = document.getElementById('transactionsList');
        if (!container) return;
        
        try {
            // 模拟数据 - 实际应从API获取
            const transactions = [
                {
                    id: 1,
                    type: 'earned',
                    title: '每日签到',
                    description: '第7天连续签到',
                    amount: 50,
                    date: '今天'
                },
                {
                    id: 2,
                    type: 'spent',
                    title: '解锁剧集',
                    description: '总裁的秘密婚姻 - 第6集',
                    amount: -30,
                    date: '今天'
                },
                {
                    id: 3,
                    type: 'earned',
                    title: '邀请奖励',
                    description: '好友 Sarah 注册',
                    amount: 100,
                    date: '昨天'
                },
                {
                    id: 4,
                    type: 'earned',
                    title: '观看广告',
                    description: '30秒广告奖励',
                    amount: 10,
                    date: '2天前'
                },
                {
                    id: 5,
                    type: 'spent',
                    title: '解锁剧集',
                    description: '前妻的复仇 - 全集',
                    amount: -200,
                    date: '3天前'
                }
            ];
            
            container.innerHTML = '';
            
            transactions.forEach(item => {
                const transItem = this.createTransactionItem(item);
                container.appendChild(transItem);
            });
            
        } catch (error) {
            console.error('Failed to load transactions:', error);
        }
    }
    
    /**
     * 创建交易记录项
     */
    createTransactionItem(item) {
        const div = document.createElement('div');
        div.className = `transaction-item transaction-${item.type}`;
        
        div.innerHTML = `
            <div class="transaction-info">
                <div class="transaction-icon">
                    <i class="fas fa-${item.type === 'earned' ? 'plus' : 'minus'}"></i>
                </div>
                <div class="transaction-details">
                    <h4>${item.title}</h4>
                    <p>${item.description} · ${item.date}</p>
                </div>
            </div>
            <div class="transaction-amount">
                ${item.type === 'earned' ? '+' : ''}${item.amount}
            </div>
        `;
        
        return div;
    }
    
    /**
     * 绑定事件
     */
    bindEvents() {
        // 编辑资料按钮
        document.getElementById('editProfileBtn')?.addEventListener('click', () => {
            this.showEditProfileModal();
        });
        
        // 设置按钮
        document.getElementById('settingsBtn')?.addEventListener('click', () => {
            this.switchTab('settings');
        });
        
        // 管理VIP按钮
        document.getElementById('manageVipBtn')?.addEventListener('click', () => {
            window.router.navigate('/payment', { tab: 'vip' });
        });
        
        // 查看全部历史
        document.getElementById('viewAllHistory')?.addEventListener('click', () => {
            this.switchTab('history');
        });
        
        // 查看全部收藏
        document.getElementById('viewAllFavorites')?.addEventListener('click', () => {
            this.switchTab('favorites');
        });
        
        // 查看全部交易
        document.getElementById('viewAllTransactions')?.addEventListener('click', () => {
            window.router.navigate('/payment', { tab: 'history' });
        });
        
        // 金币相关按钮
        document.getElementById('earnCoinsBtn')?.addEventListener('click', () => {
            this.showEarnCoinsModal();
        });
        
        document.getElementById('buyCoinsBtn')?.addEventListener('click', () => {
            window.router.navigate('/payment');
        });
        
        document.getElementById('withdrawCoinsBtn')?.addEventListener('click', () => {
            this.showWithdrawModal();
        });
        
        // 设置项点击
        document.querySelectorAll('.setting-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const settingId = item.id;
                this.handleSettingClick(settingId, e);
            });
        });
        
        // 保存资料按钮
        document.getElementById('saveProfileBtn')?.addEventListener('click', () => {
            this.saveProfile();
        });
        
        // 取消编辑按钮
        document.getElementById('cancelEditBtn')?.addEventListener('click', () => {
            this.hideEditProfileModal();
        });
        
        // 关闭模态框按钮
        document.querySelectorAll('.close-modal').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const modal = e.target.closest('.modal-overlay');
                if (modal) {
                    modal.classList.remove('active');
                }
            });
        });
        
        // 点击模态框外部关闭
        document.querySelectorAll('.modal-overlay').forEach(overlay => {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    overlay.classList.remove('active');
                }
            });
        });
        
        // 通知开关
        document.getElementById('notificationToggle')?.addEventListener('change', (e) => {
            this.saveNotificationSetting(e.target.checked);
        });
        
        // 语言设置
        document.getElementById('languageSettings')?.addEventListener('click', () => {
            this.showLanguageModal();
        });
        
        // 登出
        document.getElementById('logoutBtn')?.addEventListener('click', () => {
            this.handleLogout();
        });
    }
    
    /**
     * 处理设置项点击
     */
    handleSettingClick(settingId, event) {
        // 排除开关点击
        if (event.target.closest('.switch')) return;
        
        switch(settingId) {
            case 'notificationSettings':
                // 已经通过开关处理
                break;
            case 'languageSettings':
                this.showLanguageModal();
                break;
            case 'playbackSettings':
                this.showPlaybackSettings();
                break;
            case 'privacySettings':
                this.showPrivacySettings();
                break;
            case 'helpSettings':
                this.showHelp();
                break;
            case 'logoutBtn':
                this.handleLogout();
                break;
        }
    }
    
    /**
     * 显示编辑资料模态框
     */
    showEditProfileModal() {
        const modal = document.getElementById('editProfileModal');
        if (modal) {
            // 填充当前数据
            document.getElementById('editDisplayName').value = this.userData.fullName || '';
            document.getElementById('editEmail').value = this.userData.email;
            
            modal.classList.add('active');
        }
    }
    
    /**
     * 隐藏编辑资料模态框
     */
    hideEditProfileModal() {
        const modal = document.getElementById('editProfileModal');
        if (modal) {
            modal.classList.remove('active');
        }
    }
    
    /**
     * 保存资料
     */
    async saveProfile() {
        const displayName = document.getElementById('editDisplayName').value.trim();
        const email = document.getElementById('editEmail').value.trim();
        
        if (!displayName || !email) {
            this.showError('请填写所有字段');
            return;
        }
        
        // 模拟保存
        this.showLoading();
        
        setTimeout(() => {
            this.userData.fullName = displayName;
            this.userData.email = email;
            
            this.updateUserInfo();
            this.hideEditProfileModal();
            this.hideLoading();
            this.showToast('资料已更新');
        }, 1000);
    }
    
    /**
     * 显示赚金币模态框
     */
    showEarnCoinsModal() {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay active';
        modal.innerHTML = `
            <div class="modal">
                <div class="modal-header">
                    <h3 class="modal-title">赚取金币</h3>
                    <button class="close-modal"><i class="fas fa-times"></i></button>
                </div>
                <div class="modal-body">
                    <div class="earn-options">
                        <div class="earn-option">
                            <i class="fas fa-calendar-check"></i>
                            <div>
                                <h4>每日签到</h4>
                                <p>每天签到获得10-50金币</p>
                                <button class="btn btn-primary btn-sm" id="dailyCheckinBtn">立即签到</button>
                            </div>
                        </div>
                        <div class="earn-option">
                            <i class="fas fa-users"></i>
                            <div>
                                <h4>邀请好友</h4>
                                <p>每邀请一位好友获得100金币</p>
                                <button class="btn btn-primary btn-sm" id="inviteBtn">邀请好友</button>
                            </div>
                        </div>
                        <div class="earn-option">
                            <i class="fas fa-ad"></i>
                            <div>
                                <h4>观看广告</h4>
                                <p>观看广告获得5-20金币</p>
                                <button class="btn btn-primary btn-sm" id="watchAdBtn">观看广告</button>
                            </div>
                        </div>
                        <div class="earn-option">
                            <i class="fas fa-share-alt"></i>
                            <div>
                                <h4>分享内容</h4>
                                <p>分享剧集给好友获得30金币</p>
                                <button class="btn btn-primary btn-sm" id="shareContentBtn">立即分享</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // 绑定关闭事件
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
        
        // 绑定签到按钮
        modal.querySelector('#dailyCheckinBtn')?.addEventListener('click', () => {
            this.handleCheckin();
        });
    }
    
    /**
     * 处理签到
     */
    async handleCheckin() {
        this.showToast('签到成功 +50金币');
        this.userData.coins += 50;
        document.querySelector('.coin-amount span').textContent = this.userData.coins.toLocaleString();
    }
    
    /**
     * 显示提现模态框
     */
    showWithdrawModal() {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay active';
        modal.innerHTML = `
            <div class="modal">
                <div class="modal-header">
                    <h3 class="modal-title">提现金币</h3>
                    <button class="close-modal"><i class="fas fa-times"></i></button>
                </div>
                <div class="modal-body">
                    <div class="withdraw-info">
                        <p>当前可用金币: <strong>${this.userData.coins}</strong></p>
                        <p>1000金币 = $1.00 USD</p>
                    </div>
                    <div class="form-group">
                        <label class="form-label">提现金额</label>
                        <select class="form-control" id="withdrawAmount">
                            <option value="1000">1000金币 ($1.00)</option>
                            <option value="5000">5000金币 ($5.00)</option>
                            <option value="10000">10000金币 ($10.00)</option>
                            <option value="50000">50000金币 ($50.00)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">提现方式</label>
                        <select class="form-control" id="withdrawMethod">
                            <option value="paypal">PayPal</option>
                            <option value="alipay">支付宝</option>
                            <option value="wechat">微信支付</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">账户信息</label>
                        <input type="text" class="form-control" placeholder="输入你的账户邮箱/账号">
                    </div>
                    <button class="btn btn-primary" id="submitWithdrawBtn">提交提现申请</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // 绑定关闭事件
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
        
        modal.querySelector('#submitWithdrawBtn')?.addEventListener('click', () => {
            this.showToast('提现申请已提交，预计1-3个工作日到账');
            modal.remove();
        });
    }
    
    /**
     * 显示语言设置模态框
     */
    showLanguageModal() {
        const modal = document.getElementById('languageModal');
        if (modal) {
            modal.classList.add('active');
        }
    }
    
    /**
     * 显示播放设置
     */
    showPlaybackSettings() {
        // 可以显示一个简单的提示或跳转到设置页
        this.showToast('播放设置功能开发中');
    }
    
    /**
     * 显示隐私设置
     */
    showPrivacySettings() {
        this.showToast('隐私设置功能开发中');
    }
    
    /**
     * 显示帮助
     */
    showHelp() {
        window.open('https://help.globalshorts.com', '_blank');
    }
    
    /**
     * 保存通知设置
     */
    async saveNotificationSetting(enabled) {
        // 模拟保存
        console.log('Notification setting saved:', enabled);
        this.showToast(enabled ? '通知已开启' : '通知已关闭');
    }
    
    /**
     * 处理登出
     */
    handleLogout() {
        if (confirm('确定要退出登录吗？')) {
            // 清除本地存储
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            
            // 清除认证状态
            window.auth.logout();
            
            // 跳转到首页
            window.router.navigate('/');
            
            this.showToast('已退出登录');
        }
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
        console.log('Profile page destroyed');
    }
}