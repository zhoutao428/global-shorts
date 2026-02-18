/**
 * 公共底部导航组件
 */

export default class BottomNav {
    constructor() {
        this.render();
        this.bindEvents();
    }
    
    render() {
        const nav = document.createElement('nav');
        nav.className = 'bottom-nav';
        nav.innerHTML = `
            <a href="#" class="nav-item" data-page="home">
                <i class="fas fa-home"></i>
                <span>首页</span>
            </a>
            <a href="#" class="nav-item" data-page="discover">
                <i class="fas fa-compass"></i>
                <span>发现</span>
            </a>
            <a href="#" class="nav-item" data-page="history">
                <i class="fas fa-history"></i>
                <span>历史</span>
            </a>
            <a href="#" class="nav-item" data-page="profile">
                <i class="fas fa-user"></i>
                <span>我的</span>
            </a>
        `;
        
        document.body.appendChild(nav);
    }
    
    bindEvents() {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const page = item.dataset.page;
                window.router.navigate(`/${page}`);
            });
        });
    }
}