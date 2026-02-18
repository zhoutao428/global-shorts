export default class LanguageMenu {
    constructor() {
        this.element = null;
    }
    
    show() {
        console.log('Language menu shown');
        // 这里可以简单实现一个语言选择菜单
        const languages = [
            { code: 'en', name: 'English' },
            { code: 'zh', name: '中文' },
            { code: 'es', name: 'Español' },
            { code: 'ja', name: '日本語' }
        ];
        
        // 创建临时菜单
        const menu = document.createElement('div');
        menu.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #1E1E1E;
            border-radius: 12px;
            padding: 20px;
            z-index: 10000;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        `;
        
        menu.innerHTML = `
            <h3 style="color: white; margin-bottom: 15px;">选择语言</h3>
            ${languages.map(lang => `
                <div style="padding: 10px 20px; color: white; cursor: pointer; border-radius: 6px; margin: 5px 0; background: rgba(255,255,255,0.05);"
                     onclick="window.i18n.init('${lang.code}'); this.closest('div').remove();">
                    ${lang.name}
                </div>
            `).join('')}
        `;
        
        document.body.appendChild(menu);
        
        // 点击外部关闭
        setTimeout(() => {
            document.addEventListener('click', function closeMenu(e) {
                if (!menu.contains(e.target)) {
                    menu.remove();
                    document.removeEventListener('click', closeMenu);
                }
            });
        }, 100);
    }
}