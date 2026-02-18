/**
 * 首页页面逻辑
 * 处理剧集展示、分类筛选、搜索等功能
 */

export default class HomePage {
    constructor(params) {
        this.params = params;
        this.currentCategory = 'all';
        this.searchQuery = '';
        this.page = 1;
        this.isLoading = false;
        this.hasMore = true;
        
        this.init();
    }
    
    init() {
        console.log('Home page initialized', this.params);
        
        // 初始化组件
        this.initCategoryTabs();
        this.initSearch();
        this.initInfiniteScroll();
        
        // 加载剧集数据
        this.loadDramas();
        
        // 绑定事件
        this.bindEvents();
    }
    
    /**
     * 初始化分类选项卡
     */
    initCategoryTabs() {
        const categoryTabs = document.querySelectorAll('.category-item');
        
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const category = tab.dataset.category;
                
                // 更新激活状态
                categoryTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // 切换分类
                this.currentCategory = category;
                this.page = 1;
                this.hasMore = true;
                
                // 清空并重新加载
                document.getElementById('dramaGrid').innerHTML = '';
                this.loadDramas();
            });
        });
    }
    
    /**
     * 初始化搜索功能
     */
    initSearch() {
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        
        if (!searchInput || !searchBtn) return;
        
        const performSearch = () => {
            const query = searchInput.value.trim();
            if (query === this.searchQuery) return;
            
            this.searchQuery = query;
            this.page = 1;
            this.hasMore = true;
            
            // 清空并重新加载
            document.getElementById('dramaGrid').innerHTML = '';
            this.loadDramas();
        };
        
        searchBtn.addEventListener('click', performSearch);
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    /**
     * 初始化无限滚动
     */
    initInfiniteScroll() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.isLoading && this.hasMore) {
                    this.page++;
                    this.loadDramas();
                }
            });
        }, options);
        
        // 观察加载更多触发器
        const trigger = document.getElementById('loadMoreTrigger');
        if (trigger) {
            observer.observe(trigger);
        }
    }
    
    /**
     * 加载剧集数据
     */
    async loadDramas() {
        if (this.isLoading || !this.hasMore) return;
        
        this.isLoading = true;
        this.showLoading();
        
        try {
            // 构建请求参数
            const params = new URLSearchParams({
                page: this.page,
                limit: 20,
                category: this.currentCategory !== 'all' ? this.currentCategory : '',
                search: this.searchQuery
            });
            
            // 调用API
            const response = await fetch(`http://localhost:3001/dramas?${params}`);
            const data = await response.json();
            
            if (data.success) {
                this.renderDramas(data.data);
                this.hasMore = data.pagination.page < data.pagination.pages;
            }
        } catch (error) {
            console.error('Failed to load dramas:', error);
            this.showError('加载失败，请重试');
        } finally {
            this.isLoading = false;
            this.hideLoading();
        }
    }
    
    /**
     * 渲染剧集卡片
     * @param {Array} dramas 
     */
    renderDramas(dramas) {
        const grid = document.getElementById('dramaGrid');
        
        dramas.forEach(drama => {
            const card = this.createDramaCard(drama);
            grid.appendChild(card);
        });
        
        // 更新加载更多触发器
        this.updateLoadMoreTrigger();
    }
    
    /**
     * 创建剧集卡片元素
     * @param {Object} drama 
     * @returns {HTMLElement}
     */
    createDramaCard(drama) {
        const card = document.createElement('div');
        card.className = 'drama-card';
        card.dataset.id = drama.id;
        
        const progressPercent = drama.watchedEpisodes ? 
            (drama.watchedEpisodes / drama.totalEpisodes) * 100 : 0;
        
        card.innerHTML = `
            <div class="drama-thumbnail">
                <div class="drama-thumbnail" style="background: linear-gradient(135deg, #FF385C, #6B46C1); display: flex; align-items: center; justify-content: center;">
    <i class="fas fa-film" style="font-size: 48px; color: white; opacity: 0.8;"></i>
</div>
                <div class="drama-badges">
                    ${drama.isHot ? '<div class="badge hot-badge">HOT</div>' : ''}
                    ${drama.isNew ? '<div class="badge new-badge">NEW</div>' : ''}
                    ${drama.isVip ? '<div class="badge vip-only">VIP</div>' : ''}
                </div>
                <div class="play-overlay">
                    <div class="play-circle">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
            </div>
            <div class="drama-info">
                <h3 class="drama-title">${drama.title}</h3>
                <div class="drama-meta">
                    <div class="drama-episodes">
                        <i class="fas fa-list-ol"></i>
                        <span>${drama.totalEpisodes}集</span>
                    </div>
                    <div class="drama-stats">
                        <i class="fas fa-eye"></i>
                        <span>${this.formatViews(drama.viewCount)}</span>
                    </div>
                </div>
                ${drama.watchedEpisodes ? `
                <div class="progress-container">
                    <div class="progress" style="width: ${progressPercent}%"></div>
                </div>
                <div class="progress-text">
                    <span>已观看 ${drama.watchedEpisodes}/${drama.totalEpisodes}</span>
                    <span>${Math.round(progressPercent)}%</span>
                </div>
                ` : ''}
            </div>
        `;
        
        // 点击跳转到播放器页
        card.addEventListener('click', () => {
            window.router.navigate(`/player/${drama.id}`);
        });
        
        return card;
    }
    
    /**
     * 格式化观看数
     * @param {number} views 
     * @returns {string}
     */
    formatViews(views) {
        if (views >= 1000000) {
            return (views / 1000000).toFixed(1) + 'M';
        }
        if (views >= 1000) {
            return (views / 1000).toFixed(1) + 'K';
        }
        return views.toString();
    }
    
    /**
     * 更新加载更多触发器
     */
    updateLoadMoreTrigger() {
        let trigger = document.getElementById('loadMoreTrigger');
        
        if (!trigger) {
            trigger = document.createElement('div');
            trigger.id = 'loadMoreTrigger';
            trigger.className = 'load-more-trigger';
            document.getElementById('dramaGrid').after(trigger);
        }
        
        if (!this.hasMore) {
            trigger.innerHTML = '<p class="end-message">没有更多了</p>';
        } else {
            trigger.innerHTML = '';
        }
    }
    
    /**
     * 显示加载中
     */
    showLoading() {
        const loading = document.getElementById('dramaLoading');
        if (loading) {
            loading.classList.add('show');
        }
    }
    
    /**
     * 隐藏加载中
     */
    hideLoading() {
        const loading = document.getElementById('dramaLoading');
        if (loading) {
            loading.classList.remove('show');
        }
    }
    
    /**
     * 显示错误信息
     * @param {string} message 
     */
    showError(message) {
        // 复用全局toast组件
        const event = new CustomEvent('showToast', {
            detail: { message, type: 'error' }
        });
        document.dispatchEvent(event);
    }
    
    /**
     * 绑定页面事件
     */
    bindEvents() {
        // 用户头像点击
        document.getElementById('userAvatar')?.addEventListener('click', () => {
            if (window.auth.isLoggedIn()) {
                window.router.navigate('/profile');
            } else {
                window.router.navigate('/login');
            }
        });
        
        // 金币显示点击
        document.getElementById('coinDisplay')?.addEventListener('click', () => {
            window.router.navigate('/payment');
        });
        
        // 每日签到按钮
        document.getElementById('dailyCheckinBtn')?.addEventListener('click', () => {
            if (!window.auth.isLoggedIn()) {
                window.router.navigate('/login', { redirect: 'home' });
                return;
            }
            this.showCheckinModal();
        });
        
        // 底部导航
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const page = item.dataset.page;
                if (page && page !== 'home') {
                    window.router.navigate(`/${page}`);
                }
            });
        });
    }
    
    /**
     * 显示签到模态框
     */
    showCheckinModal() {
        // 导入模态框组件
        import('/src/components/common/modal.js').then(module => {
            const modal = new module.default({
                title: '每日签到',
                content: this.renderCheckinContent(),
                onConfirm: () => this.handleCheckin()
            });
            modal.show();
        });
    }
    
    /**
     * 渲染签到内容
     * @returns {string}
     */
    renderCheckinContent() {
        // 这里可以动态生成签到日历
        return `
            <div class="checkin-calendar">
                <div class="checkin-grid">
                    <div class="checkin-day claimed">1 <span>+10</span></div>
                    <div class="checkin-day claimed">2 <span>+15</span></div>
                    <div class="checkin-day claimed">3 <span>+20</span></div>
                    <div class="checkin-day claimed">4 <span>+25</span></div>
                    <div class="checkin-day today">5 <span>+30</span></div>
                    <div class="checkin-day">6 <span>+40</span></div>
                    <div class="checkin-day">7 <span>+50</span></div>
                </div>
                <p class="checkin-info">连续签到可获得额外奖励</p>
            </div>
        `;
    }
    
    /**
     * 处理签到
     */
    async handleCheckin() {
        try {
            const response = await fetch('/api/user/checkin', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            
            const data = await response.json();
            
            if (data.success) {
                // 更新金币显示
                const coinSpan = document.querySelector('.coin-display span');
                if (coinSpan) {
                    coinSpan.textContent = data.newBalance;
                }
                
                // 显示成功消息
                const event = new CustomEvent('showToast', {
                    detail: { message: `签到成功！获得${data.reward}金币`, type: 'success' }
                });
                document.dispatchEvent(event);
            }
        } catch (error) {
            console.error('Checkin failed:', error);
        }
    }
    
    /**
     * 页面销毁时调用
     */
    destroy() {
        console.log('Home page destroyed');
        // 清理事件监听、定时器等
    }
}