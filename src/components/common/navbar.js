/**
 * 公共导航栏组件
 * 所有页面共享
 */
// 临时修复：确保 auth 存在
if (!window.auth) {
    window.auth = {
        isLoggedIn: () => false,
        isVIP: () => false,
        logout: () => {}
    };
}
export default class Navbar {
    constructor() {
        this.container = null;
        this.user = null;
        
        this.init();
    }
    
    init() {
        this.render();
        this.loadUserData();
        this.bindEvents();
    }
    
    render() {
        // 创建导航栏HTML
        const navbar = document.createElement('header');
        navbar.className = 'main-header';
        navbar.innerHTML = `
            <div class="container">
                <div class="header-left">
                    <div class="logo" id="homeLink">
                        <i class="fas fa-globe-americas"></i>
                        <span>Global Shorts</span>
                    </div>
                </div>
                
                <div class="header-right">
                    <div class="language-selector" id="languageSelector">
                        <button class="lang-btn">
                            <i class="fas fa-language"></i>
                            <span id="currentLang">EN</span>
                            <i class="fas fa-chevron-down"></i>
                        </button>
                    </div>
                    
                    <div class="user-info" id="userInfo">
                        <div class="coin-display" id="coinDisplay">
                            <i class="fas fa-coins"></i>
                            <span>0</span>
                        </div>
                        
                        <div class="auth-buttons" id="authButtons">
                            <button class="btn btn-secondary" id="loginBtn">
                                <i class="fas fa-sign-in-alt"></i>
                                <span>登录</span>
                            </button>
                            <button class="btn btn-primary" id="registerBtn">
                                <i class="fas fa-user-plus"></i>
                                <span>注册</span>
                            </button>
                        </div>
                        
                        <div class="user-profile" id="userProfile" style="display: none;">
                            <div class="user-avatar" id="userAvatar">
                                <span id="userInitials">U</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // 插入到页面顶部
        document.body.insertBefore(navbar, document.body.firstChild);
        
        this.container = navbar;
    }
    
    async loadUserData() {
        if (!window.auth.isLoggedIn()) {
            this.showLoginButtons();
            return;
        }
        
        try {
            const response = await fetch('/api/user/profile', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            
            const data = await response.json();
            
            if (data.success) {
                this.user = data.data;
                this.showUserProfile();
                this.updateCoinBalance(this.user.coins);
            }
        } catch (error) {
            console.error('Failed to load user data:', error);
        }
    }
    
    showLoginButtons() {
        document.getElementById('authButtons').style.display = 'flex';
        document.getElementById('userProfile').style.display = 'none';
    }
    
    showUserProfile() {
        document.getElementById('authButtons').style.display = 'none';
        document.getElementById('userProfile').style.display = 'block';
        
        const initials = this.user.username.charAt(0).toUpperCase();
        document.getElementById('userInitials').textContent = initials;
    }
    
    updateCoinBalance(coins) {
        document.querySelector('.coin-display span').textContent = coins;
    }
    
    bindEvents() {
        // 首页链接
        document.getElementById('homeLink')?.addEventListener('click', () => {
            window.router.navigate('/');
        });
        
        // 登录按钮
        document.getElementById('loginBtn')?.addEventListener('click', () => {
            window.router.navigate('/login');
        });
        
        // 注册按钮
        document.getElementById('registerBtn')?.addEventListener('click', () => {
            window.router.navigate('/login?tab=register');
        });
        
        // 用户头像
        document.getElementById('userAvatar')?.addEventListener('click', () => {
            window.router.navigate('/profile');
        });
        
        // 金币显示
        document.getElementById('coinDisplay')?.addEventListener('click', () => {
            window.router.navigate('/payment');
        });
        
        // 语言切换
        document.getElementById('languageSelector')?.addEventListener('click', () => {
            this.showLanguageMenu();
        });
    }
    
    showLanguageMenu() {
        // 显示语言选择菜单
        import('./language-menu.js').then(module => {
            const menu = new module.default();
            menu.show();
        });
    }
}