// admin-core.js
(function() {
    // ---------- API 基础路径配置 ----------
    window.API_BASE = '/api/admin';
    window.UPLOAD_BASE = '/upload';
    
    // ---------- 全局工具函数 ----------
    
    // 统一处理 API 请求（自动添加 token）
    window.apiRequest = async function(endpoint, options = {}) {
        const token = localStorage.getItem('token');
        const defaultHeaders = {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer ${token}` })
        };
        
        const response = await fetch(`${window.API_BASE}${endpoint}`, {
            ...options,
            headers: { ...defaultHeaders, ...options.headers }
        });
        
        // 401 未授权，跳转登录页
        if (response.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('userInfo');
            window.location.href = '/login.html';
            throw new Error('Unauthorized');
        }
        
        return response;
    };
    
    // 显示提示消息（可选的 toast 通知）
    window.showToast = function(message, type = 'info') {
        // 简单实现，可根据需要扩展
        alert(message);
    };
    
    // ---------- 多语言文本 ----------
    const translations = {
        zh: {
            'dashboard': '仪表盘',
            'users': '用户管理',
            'dramas': '剧集管理',
            'episodes': '分集管理',
            'categories': '分类管理',
            'vipPlans': 'VIP套餐',
            'coinPackages': '金币套餐',
            'adPositions': '广告位',
            'languages': '语言管理',
            'translations': '翻译管理',
            'settings': '系统设置',
            'statistics': '数据统计',
            'revenue': '收入统计',
            'logs': '系统日志',
            'profile': '个人资料',
            'logout': '退出登录',
            'welcome': '欢迎回来',
            'loading': '加载中...',
            'save': '保存',
            'cancel': '取消',
            'confirm': '确认',
            'delete': '删除',
            'edit': '编辑',
            'add': '添加',
            'search': '搜索',
            'filter': '筛选',
            'refresh': '刷新',
            'export': '导出',
            'import': '导入',
            'success': '操作成功',
            'failed': '操作失败',
            'networkError': '网络错误',
            'unauthorized': '未授权，请重新登录'
        },
        en: {
            'dashboard': 'Dashboard',
            'users': 'Users',
            'dramas': 'Dramas',
            'episodes': 'Episodes',
            'categories': 'Categories',
            'vipPlans': 'VIP Plans',
            'coinPackages': 'Coin Packages',
            'adPositions': 'Ad Positions',
            'languages': 'Languages',
            'translations': 'Translations',
            'settings': 'Settings',
            'statistics': 'Statistics',
            'revenue': 'Revenue',
            'logs': 'Logs',
            'profile': 'Profile',
            'logout': 'Logout',
            'welcome': 'Welcome Back',
            'loading': 'Loading...',
            'save': 'Save',
            'cancel': 'Cancel',
            'confirm': 'Confirm',
            'delete': 'Delete',
            'edit': 'Edit',
            'add': 'Add',
            'search': 'Search',
            'filter': 'Filter',
            'refresh': 'Refresh',
            'export': 'Export',
            'import': 'Import',
            'success': 'Success',
            'failed': 'Failed',
            'networkError': 'Network Error',
            'unauthorized': 'Unauthorized, please login again'
        }
    };
    
    let currentLang = 'zh';

    function switchLanguage(lang) {
        if (lang === currentLang) return;
        currentLang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
        const langSpan = document.getElementById('currentLanguage');
        if (langSpan) {
            langSpan.textContent = lang === 'zh' ? '中文' : 'English';
        }
    }

    // ---------- 侧边栏展开/收起 ----------
    function initSidebar() {
        const menuToggle = document.getElementById('menuToggle');
        const sidebar = document.getElementById('adminSidebar');
        if (menuToggle && sidebar) {
            menuToggle.addEventListener('click', () => {
                sidebar.classList.toggle('active');
            });
        }
    }

    // ---------- 模态框通用 ----------
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.add('active');
    }
    
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.remove('active');
    }

    // 点击外部关闭模态框
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            e.target.classList.remove('active');
        }
    });

    // ---------- 用户下拉菜单 ----------
    function initUserMenu() {
        const trigger = document.getElementById('userMenuTrigger');
        const dropdown = document.getElementById('userDropdown');
        
        if (trigger && dropdown) {
            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
            });

            document.addEventListener('click', () => {
                dropdown.style.display = 'none';
            });

            dropdown.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem('token');
                localStorage.removeItem('userInfo');
                window.location.href = '/login.html';
            });
        }
    }

    // ---------- 语言切换事件 ----------
    function initLanguageSwitcher() {
        const switcher = document.getElementById('languageSwitcher');
        if (switcher) {
            switcher.addEventListener('click', () => {
                openModal('languageModal');
            });
        }

        const closeBtn = document.getElementById('closeLanguageModal');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                closeModal('languageModal');
            });
        }

        document.querySelectorAll('.language-option').forEach(opt => {
            opt.addEventListener('click', () => {
                const lang = opt.getAttribute('data-lang');
                if (lang) switchLanguage(lang);
                closeModal('languageModal');
            });
        });
    }

    // ---------- 页面跳转 ----------
    function initPageNavigation() {
        document.querySelectorAll('.menu-item[data-page], .submenu-item[data-page]').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = item.dataset.page;
                if (pageId) {
                    window.location.href = `/admin/${pageId}.html`;
                }
            });
        });
    }

    // 加载用户信息到界面
    function loadUserInfo() {
        const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
        if (userInfo.name) {
            const nameEls = document.querySelectorAll('#adminName, #profileName');
            nameEls.forEach(el => {
                if (el) el.textContent = userInfo.name;
            });
            
            const avatarEls = document.querySelectorAll('.user-avatar');
            avatarEls.forEach(el => {
                if (el && !el.querySelector('img')) {
                    el.textContent = userInfo.name.charAt(0).toUpperCase();
                }
            });
            
            const avatarText = document.getElementById('avatarText');
            if (avatarText) {
                avatarText.textContent = userInfo.name.charAt(0).toUpperCase();
            }
        }
        if (userInfo.role) {
            const roleEls = document.querySelectorAll('#adminRole, #profileRole');
            roleEls.forEach(el => {
                if (el) el.textContent = userInfo.role;
            });
        }
        if (userInfo.avatar) {
            const avatarImage = document.getElementById('avatarImage');
            const avatarText = document.getElementById('avatarText');
            const userAvatar = document.getElementById('userAvatar');
            
            if (avatarImage) {
                avatarText.style.display = 'none';
                avatarImage.style.display = 'block';
                avatarImage.src = userInfo.avatar;
            }
            if (userAvatar) {
                userAvatar.style.background = 'transparent';
                userAvatar.innerHTML = `<img src="${userInfo.avatar}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">`;
            }
        }
    }

    // 暴露全局工具
    window.adminCore = {
        switchLanguage,
        openModal,
        closeModal,
        currentLang: () => currentLang,
        API_BASE: window.API_BASE,
        UPLOAD_BASE: window.UPLOAD_BASE,
        apiRequest: window.apiRequest,
        showToast: window.showToast
    };

    // DOM 加载完成后初始化
    document.addEventListener('DOMContentLoaded', () => {
        initSidebar();
        initUserMenu();
        initLanguageSwitcher();
        initPageNavigation();
        loadUserInfo();
    });
})();