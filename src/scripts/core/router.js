/**
 * Global Shorts 前端路由系统
 * 统一管理所有页面跳转
 */

class Router {
    constructor() {
        this.routes = {
            '/': 'home',
            '/home': 'home',
            '/player': 'player',
            '/profile': 'profile',
            '/payment': 'payment',
            '/login': 'login',
            '/discover': 'discover',
            '/404': 'notfound'
        };
        
        this.currentPage = null;
        this.params = {};
        this.beforeEach = null;
        this.afterEach = null;
        
        this.init();
    }
    
    /**
     * 初始化路由
     */
    init() {
        // 监听popstate事件（浏览器前进/后退）
        window.addEventListener('popstate', (e) => {
            this.handleRoute();
        });
        
        // 拦截所有链接点击
        this.interceptLinks();
        
        // 处理当前URL
        this.handleRoute();
    }
    
    /**
     * 拦截页面内所有链接点击
     */
    interceptLinks() {
        document.addEventListener('click', (e) => {
            // 查找被点击的链接
            const link = e.target.closest('a');
            if (!link) return;
            
            // 获取链接地址
            const href = link.getAttribute('href');
            if (!href) return;
            
            // 跳过外部链接和锚点
            if (href.startsWith('http') || href.startsWith('#')) return;
            
            // 阻止默认跳转
            e.preventDefault();
            
            // 使用路由导航
            this.navigate(href);
        });
    }
    
    /**
     * 处理当前路由
     */
    handleRoute() {
        // 获取当前路径
        let path = window.location.pathname;
        
        // 提取查询参数
        const searchParams = new URLSearchParams(window.location.search);
        this.params = {};
        for (let [key, value] of searchParams) {
            this.params[key] = value;
        }
        
        // 处理根路径
        if (path === '/' || path === '/index.html') {
            path = '/';
        }
        
        // 查找匹配的路由
        const page = this.matchRoute(path);
        
        if (page) {
            this.loadPage(page, path);
        } else {
            this.loadPage('404', path);
        }
    }
    
    /**
     * 匹配路由
     * @param {string} path 
     * @returns {string|null}
     */
    matchRoute(path) {
        // 精确匹配
        if (this.routes[path]) {
            return this.routes[path];
        }
        
        // 动态路由匹配（如 /player/123）
        const pathParts = path.split('/').filter(p => p);
        if (pathParts.length >= 2) {
            const basePath = `/${pathParts[0]}`;
            if (this.routes[basePath]) {
                // 提取动态参数
                this.params.id = pathParts[1];
                return this.routes[basePath];
            }
        }
        
        return null;
    }
    
    /**
     * 加载页面
     * @param {string} page 
     * @param {string} path 
     */
    async loadPage(page, path) {
        try {
            // 执行路由前置钩子
            if (this.beforeEach) {
                const canContinue = await this.beforeEach(page, this.params);
                if (canContinue === false) return;
            }
            
            // 显示加载动画
            this.showLoading();
            
            // 加载页面HTML
            const html = await this.fetchPage(page);
            
            // 更新页面内容
            document.getElementById('app').innerHTML = html;
            
            // 更新页面标题
            this.updateTitle(page);
            
            // 加载页面脚本
            await this.loadPageScript(page);
            
            // 更新当前页面
            this.currentPage = page;
            
            // 隐藏加载动画
            this.hideLoading();
            
            // 执行路由后置钩子
            if (this.afterEach) {
                this.afterEach(page, this.params);
            }
            
            // 更新导航激活状态
            this.updateActiveNav();
            
        } catch (error) {
            console.error('Failed to load page:', error);
            this.showError('页面加载失败');
        }
    }
    
    /**
     * 获取页面HTML
     * @param {string} page 
     * @returns {Promise<string>}
     */
    async fetchPage(page) {
        // 开发环境：直接加载HTML文件
        if (process.env.NODE_ENV === 'development') {
            const response = await fetch(`/src/pages/${page}.html`);
            if (!response.ok) throw new Error('Page not found');
            return response.text();
        }
        
        // 生产环境：从构建后的文件加载
        const response = await fetch(`/pages/${page}.html`);
        if (!response.ok) throw new Error('Page not found');
        return response.text();
    }
    
    /**
     * 加载页面脚本
     * @param {string} page 
     */
    async loadPageScript(page) {
        // 卸载当前页面的脚本
        if (this.currentPage && window[`${this.currentPage}Page`]) {
            const oldPage = window[`${this.currentPage}Page`];
            if (oldPage.destroy && typeof oldPage.destroy === 'function') {
                oldPage.destroy();
            }
            delete window[`${this.currentPage}Page`];
        }
        
        // 加载新页面的脚本
        try {
            // 动态导入页面脚本
            const module = await import(`/src/scripts/pages/${page}.js`);
            
            // 实例化页面对象
            if (module.default) {
                window[`${page}Page`] = new module.default(this.params);
            }
        } catch (error) {
            console.warn(`No script for page: ${page}`);
        }
    }
    
    /**
     * 更新页面标题
     * @param {string} page 
     */
    updateTitle(page) {
        const titles = {
            'home': 'Global Shorts - 首页',
            'player': 'Global Shorts - 播放器',
            'profile': 'Global Shorts - 个人中心',
            'payment': 'Global Shorts - 充值中心',
            'login': 'Global Shorts - 登录',
            'discover': 'Global Shorts - 发现',
            'notfound': 'Global Shorts - 页面未找到'
        };
        
        document.title = titles[page] || 'Global Shorts';
    }
    
    /**
     * 更新导航激活状态
     */
    updateActiveNav() {
        // 移除所有激活状态
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // 根据当前页面激活对应导航项
        const activeNav = document.querySelector(`.nav-item[data-page="${this.currentPage}"]`);
        if (activeNav) {
            activeNav.classList.add('active');
        }
    }
    
    /**
     * 导航到指定路径
     * @param {string} path 
     * @param {Object} params 
     */
    navigate(path, params = {}) {
        // 构建URL
        let url = path;
        
        // 添加查询参数
        if (Object.keys(params).length > 0) {
            const searchParams = new URLSearchParams(params);
            url += `?${searchParams.toString()}`;
        }
        
        // 更新浏览器历史
        history.pushState({}, '', url);
        
        // 处理路由
        this.handleRoute();
    }
    
    /**
     * 替换当前路径（不增加历史记录）
     * @param {string} path 
     * @param {Object} params 
     */
    replace(path, params = {}) {
        let url = path;
        if (Object.keys(params).length > 0) {
            const searchParams = new URLSearchParams(params);
            url += `?${searchParams.toString()}`;
        }
        
        history.replaceState({}, '', url);
        this.handleRoute();
    }
    
    /**
     * 返回上一页
     */
    back() {
        history.back();
    }
    
    /**
     * 前进到下一页
     */
    forward() {
        history.forward();
    }
    
    /**
     * 设置路由前置钩子
     * @param {Function} hook 
     */
    setBeforeEach(hook) {
        this.beforeEach = hook;
    }
    
    /**
     * 设置路由后置钩子
     * @param {Function} hook 
     */
    setAfterEach(hook) {
        this.afterEach = hook;
    }
    
    /**
     * 显示加载动画
     */
    showLoading() {
        let loading = document.getElementById('page-loading');
        if (!loading) {
            loading = document.createElement('div');
            loading.id = 'page-loading';
            loading.className = 'page-loading';
            loading.innerHTML = '<div class="loading-spinner"></div>';
            document.body.appendChild(loading);
        }
        loading.classList.add('show');
    }
    
    /**
     * 隐藏加载动画
     */
    hideLoading() {
        const loading = document.getElementById('page-loading');
        if (loading) {
            loading.classList.remove('show');
        }
    }
    
    /**
     * 显示错误信息
     * @param {string} message 
     */
    showError(message) {
        const error = document.createElement('div');
        error.className = 'error-toast';
        error.textContent = message;
        document.body.appendChild(error);
        
        setTimeout(() => {
            error.remove();
        }, 3000);
    }
    
    /**
     * 获取当前页面
     * @returns {string}
     */
    getCurrentPage() {
        return this.currentPage;
    }
    
    /**
     * 获取路由参数
     * @returns {Object}
     */
    getParams() {
        return { ...this.params };
    }
    
    /**
     * 获取查询参数
     * @returns {Object}
     */
    getQueryParams() {
        const searchParams = new URLSearchParams(window.location.search);
        const params = {};
        for (let [key, value] of searchParams) {
            params[key] = value;
        }
        return params;
    }
}

// 创建单例
const router = new Router();
export default router;