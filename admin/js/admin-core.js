// admin-core.js
(function() {
    // ---------- 多语言文本 ----------
    const translations = {
        zh: { /* 保持不变 */ },
        en: { /* 保持不变 */ }
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
        document.getElementById('currentLanguage').textContent = lang === 'zh' ? '中文' : 'English';
    }

    // ---------- 侧边栏展开/收起（只保留移动端汉堡菜单）----------
    function initSidebar() {
        const menuToggle = document.getElementById('menuToggle');
        const sidebar = document.getElementById('adminSidebar');
        if (menuToggle) {
            menuToggle.addEventListener('click', () => {
                sidebar.classList.toggle('active');
            });
        }
        
        // 🗑️ 已删除：子菜单展开/收起的 JS 代码（现在由纯CSS控制）
    }

    // ---------- 模态框通用 ----------
    function openModal(modalId) {
        document.getElementById(modalId)?.classList.add('active');
    }
    function closeModal(modalId) {
        document.getElementById(modalId)?.classList.remove('active');
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

            // 防止点击下拉菜单本身时关闭
            dropdown.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        // 退出登录
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

    // ---------- 页面跳转（处理 /admin/ 路径）----------
    function initPageNavigation() {
        // 处理所有带 data-page 属性的菜单项（如果有的话）
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

    // 暴露全局工具
    window.adminCore = {
        switchLanguage,
        openModal,
        closeModal,
        currentLang: () => currentLang
    };

    // DOM 加载完成后初始化
    document.addEventListener('DOMContentLoaded', () => {
        initSidebar();              // 移动端汉堡菜单
        initUserMenu();             // 用户下拉菜单
        initLanguageSwitcher();     // 语言切换
        initPageNavigation();       // 页面跳转（可选）
        
        // 获取并显示用户信息（如果有）
        const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
        if (userInfo.name) {
            const nameEls = document.querySelectorAll('#adminName, #profileName');
            nameEls.forEach(el => {
                if (el) el.textContent = userInfo.name;
            });
            
            const avatarEls = document.querySelectorAll('.user-avatar, #profileAvatar');
            avatarEls.forEach(el => {
                if (el) el.textContent = userInfo.name.charAt(0).toUpperCase();
            });
        }
        if (userInfo.role) {
            const roleEls = document.querySelectorAll('#adminRole, #profileRole');
            roleEls.forEach(el => {
                if (el) el.textContent = userInfo.role;
            });
        }
    });
})();