/**
 * 应用入口文件 - 更新版
 */
// 在 app.js 顶部添加
import '@styles/variables.css';
import '@styles/reset.css';
import '@styles/main.css';
import router from './router.js';
import Auth from './auth.js';
import i18n from './i18n.js';
import Navbar from '../../components/common/navbar.js';
import BottomNav from '../../components/common/bottom-nav.js';

class App {
    constructor() {
        this.init();
    }
    
    init() {
        // 先渲染公共组件
        this.renderCommonComponents();
        
        // 设置路由钩子
        this.setupRouterHooks();
        
        // 初始化认证状态
        this.initAuth();
        
        // 初始化多语言
        this.initI18n();
        
        // 挂载全局对象
        this.mountGlobals();
    }
    
    renderCommonComponents() {
        // 渲染导航栏（在所有页面之前）
        this.navbar = new Navbar();
        
        // 渲染底部导航（在所有页面之后）
        this.bottomNav = new BottomNav();
    }
    
    setupRouterHooks() {
        router.setBeforeEach((page, params) => {
            // 需要登录的页面
            const authPages = ['profile', 'payment'];
            
            if (authPages.includes(page)) {
                if (!Auth.isLoggedIn()) {
                    router.navigate('/login', { redirect: page });
                    return false;
                }
            }
            
            return true;
        });
        
        router.setAfterEach((page, params) => {
            // 更新底部导航激活状态
            this.updateActiveNav(page);
        });
    }
    
    updateActiveNav(page) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.page === page) {
                item.classList.add('active');
            }
        });
    }
    
    initAuth() {
        const token = localStorage.getItem('token');
        if (token) {
            Auth.setToken(token);
        }
    }
    
    initI18n() {
        const browserLang = navigator.language.split('-')[0];
        const supportedLangs = ['en', 'zh', 'es', 'ja'];
        const savedLang = localStorage.getItem('language');
        const defaultLang = savedLang || (supportedLangs.includes(browserLang) ? browserLang : 'en');
        
        i18n.init(defaultLang);
    }
    
    mountGlobals() {
        window.app = this;
        window.router = router;
        window.auth = Auth;
        window.i18n = i18n;
    }
}

// 启动应用
new App();