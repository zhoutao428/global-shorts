/**
 * 发现页页面逻辑
 * 处理内容发现、分类浏览、热门推荐等功能
 */

export default class DiscoverPage {
    constructor(params) {
        this.params = params;
        this.currentTab = 'recommended'; // recommended, latest, popular
        this.currentCategory = 'all';
        this.page = 1;
        this.isLoading = false;
        this.hasMore = true;
        
        this.init();
    }
    
    init() {
        console.log('Discover page initialized', this.params);
        
        // 初始化选项卡
        this.initTabs();
        
        // 初始化分类筛选
        this.initCategories();
        
        // 初始化无限滚动
        this.initInfiniteScroll();
        
        // 加载内容
        this.loadContent();
        
        // 绑定事件
        this.bindEvents();
    }
    
    /**
     * 初始化选项卡
     */
    initTabs() {
        const tabs = document.querySelectorAll('.discover-tab');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabName = tab.dataset.tab;
                
                // 更新激活状态
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // 切换选项卡
                this.currentTab = tabName;
                this.page = 1;
                this.hasMore = true;
                
                // 清空并重新加载
                document.getElementById('contentGrid').innerHTML = '';
                this.loadContent();
            });
        });
    }
    
    /**
     * 初始化分类筛选
     */
    initCategories() {
        const categories = document.querySelectorAll('.category-chip');
        
        categories.forEach(category => {
            category.addEventListener('click', () => {
                const catName = category.dataset.category;
                
                // 更新激活状态
                categories.forEach(c => c.classList.remove('active'));
                category.classList.add('active');
                
                // 切换分类
                this.currentCategory = catName;
                this.page = 1;
                this.hasMore = true;
                
                // 清空并重新加载
                document.getElementById('contentGrid').innerHTML = '';
                this.loadContent();
            });
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
                    this.loadContent();
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
     * 加载内容
     */
    async loadContent() {
        if (this.isLoading || !this.hasMore) return;
        
        this.isLoading = true;
        this.showLoading();
        
        try {
            // 构建请求参数
            const params = new URLSearchParams({
                page: this.page,
                limit: 20,
                tab: this.currentTab,
                category: this.currentCategory !== 'all' ? this.currentCategory : ''
            });
            
            // 调用API
            const response = await fetch(`/api/discover?${params}`);
            const data = await response.json();
            
            if (data.success) {
                this.renderContent(data.data);
                this.hasMore = data.pagination.page < data.pagination.pages;
            }
        } catch (error) {
            console.error('Failed to load content:', error);
            this.showError('加载失败，请重试');
        } finally {
            this.isLoading = false;
            this.hideLoading();
        }
    }
    
    /**
     * 渲染内容
     * @param {Array} items 
     */
    renderContent(items) {
        const grid = document.getElementById('contentGrid');
        
        items.forEach(item => {
            const card = this.createContentCard(item);
            grid.appendChild(card);
        });
        
        // 更新加载更多触发器
        this.updateLoadMoreTrigger();
    }
    
    /**
     * 创建内容卡片
     * @param {Object} item 
     * @returns {HTMLElement}
     */
    createContentCard(item) {
        const card = document.createElement('div');
        card.className = 'content-card';
        card.dataset.id = item.id;
        
        card.innerHTML = `
            <div class="card-thumbnail">
                <img src="${item.coverImage || '/images/placeholder.jpg'}" alt="${item.title}">
                <div class="card-badges">
                    ${item.isHot ? '<div class="badge hot">HOT</div>' : ''}
                    ${item.isNew ? '<div class="badge new">NEW</div>' : ''}
                    ${item.rating ? `<div class="badge rating">⭐ ${item.rating}</div>` : ''}
                </div>
                <div class="card-overlay">
                    <button class="play-btn" onclick="event.stopPropagation()">
                        <i class="fas fa-play"></i>
                    </button>
                </div>
            </div>
            <div class="card-info">
                <h3 class="card-title">${item.title}</h3>
                <div class="card-meta">
                    <span class="category">${this.getCategoryName(item.category)}</span>
                    <span class="views">👁 ${this.formatViews(item.viewCount)}</span>
                </div>
                <p class="card-description">${item.description || ''}</p>
                <div class="card-tags">
                    ${item.tags ? item.tags.map(tag => 
                        `<span class="tag">#${tag}</span>`
                    ).join('') : ''}
                </div>
            </div>
        `;
        
        // 点击跳转到播放器
        card.addEventListener('click', () => {
            window.router.navigate(`/player/${item.id}`);
        });
        
        // 播放按钮点击
        const playBtn = card.querySelector('.play-btn');
        playBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            window.router.navigate(`/player/${item.id}`);
        });
        
        return card;
    }
    
    /**
     * 获取分类名称
     * @param {string} category 
     * @returns {string}
     */
    getCategoryName(category) {
        const categories = {
            'romance': '爱情',
            'ceo': '总裁',
            'fantasy': '玄幻',
            'suspense': '悬疑',
            'comedy': '喜剧',
            'action': '动作',
            'historical': '古装'
        };
        return categories[category] || category;
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
            document.getElementById('contentGrid').after(trigger);
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
        const loading = document.getElementById('contentLoading');
        if (loading) {
            loading.classList.add('show');
        }
    }
    
    /**
     * 隐藏加载中
     */
    hideLoading() {
        const loading = document.getElementById('contentLoading');
        if (loading) {
            loading.classList.remove('show');
        }
    }
    
    /**
     * 显示错误信息
     * @param {string} message 
     */
    showError(message) {
        const event = new CustomEvent('showToast', {
            detail: { message, type: 'error' }
        });
        document.dispatchEvent(event);
    }
    
    /**
     * 绑定页面事件
     */
    bindEvents() {
        // 搜索框
        const searchInput = document.getElementById('discoverSearch');
        const searchBtn = document.getElementById('searchBtn');
        
        if (searchInput && searchBtn) {
            const performSearch = () => {
                const query = searchInput.value.trim();
                if (query) {
                    window.router.navigate('/search', { q: query });
                }
            };
            
            searchBtn.addEventListener('click', performSearch);
            
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });
        }
        
        // 热门标签点击
        document.querySelectorAll('.trending-tag').forEach(tag => {
            tag.addEventListener('click', () => {
                const searchTerm = tag.textContent.replace('#', '');
                window.router.navigate('/search', { q: searchTerm });
            });
        });
    }
    
    /**
     * 页面销毁时调用
     */
    destroy() {
        console.log('Discover page destroyed');
        // 清理事件监听、定时器等
    }
}