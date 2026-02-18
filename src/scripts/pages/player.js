/**
 * 播放器页页面逻辑
 * 处理视频播放、剧集切换、弹幕等功能
 */

// 导入播放器组件
import VideoPlayer from '../../components/player/VideoPlayer.js';

export default class PlayerPage {
    constructor(params) {
        this.params = params;
        this.dramaId = params.id || this.getQueryParam('drama');
        this.episodeId = parseInt(this.getQueryParam('episode')) || 1;
        
        this.dramaData = null;
        this.episodeData = null;
        this.player = null;
        this.isLoading = false;
        
        this.init();
    }
    
    /**
     * 初始化
     */
    async init() {
        console.log('Player page initialized', { 
            dramaId: this.dramaId, 
            episodeId: this.episodeId 
        });
        
        // 显示加载中
        this.showLoading();
        
        // 加载剧集数据
        await this.loadDramaData();
        
        // 更新页面信息
        this.updatePageInfo();
        
        // 初始化播放器
        this.initPlayer();
        
        // 加载剧集列表
        this.loadEpisodeList();
        
        // 绑定事件
        this.bindEvents();
        
        // 隐藏加载中
        this.hideLoading();
        
        // 记录观看历史
        this.initWatchHistory();
    }
    
    /**
     * 获取URL查询参数
     */
    getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }
    
    /**
     * 加载剧集数据
     */
    async loadDramaData() {
        try {
            // 模拟数据 - 实际应从API获取
            this.dramaData = {
                id: this.dramaId,
                title: '总裁的秘密婚姻',
                coverImage: '/images/drama-cover.jpg',
                episodes: [
                    { 
                        id: 1, 
                        number: 1, 
                        title: '意外的相遇', 
                        duration: 340, 
                        videoUrl: 'https://example.com/video1.mp4',
                        thumbnail: '/images/ep1-thumb.jpg',
                        isVip: false,
                        watched: true
                    },
                    { 
                        id: 2, 
                        number: 2, 
                        title: '契约的开始', 
                        duration: 365, 
                        videoUrl: 'https://example.com/video2.mp4',
                        thumbnail: '/images/ep2-thumb.jpg',
                        isVip: false,
                        watched: false
                    },
                    { 
                        id: 3, 
                        number: 3, 
                        title: '心动的瞬间', 
                        duration: 352, 
                        videoUrl: 'https://example.com/video3.mp4',
                        thumbnail: '/images/ep3-thumb.jpg',
                        isVip: true,
                        watched: false
                    },
                    { 
                        id: 4, 
                        number: 4, 
                        title: '误会与和解', 
                        duration: 378, 
                        videoUrl: 'https://example.com/video4.mp4',
                        thumbnail: '/images/ep4-thumb.jpg',
                        isVip: true,
                        watched: false
                    },
                    { 
                        id: 5, 
                        number: 5, 
                        title: '真心的告白', 
                        duration: 395, 
                        videoUrl: 'https://example.com/video5.mp4',
                        thumbnail: '/images/ep5-thumb.jpg',
                        isVip: true,
                        watched: false
                    }
                ]
            };
            
            // 获取当前剧集
            this.episodeData = this.dramaData.episodes.find(
                e => e.number === this.episodeId
            ) || this.dramaData.episodes[0];
            
        } catch (error) {
            console.error('Failed to load drama data:', error);
            this.showError('剧集加载失败');
        }
    }
    
    /**
     * 更新页面信息
     */
    updatePageInfo() {
        // 更新剧集标题
        document.querySelector('.drama-title').textContent = this.dramaData.title;
        
        // 更新当前剧集信息
        document.querySelector('.current-episode-title').textContent = 
            `第${this.episodeData.number}集 ${this.episodeData.title}`;
        
        // 更新剧集描述
        document.querySelector('.episode-description').textContent = 
            '这里是剧集描述，将会从API获取实际内容。';
    }
    
    /**
     * 初始化播放器
     */
    initPlayer() {
        const container = document.getElementById('player-container');
        if (!container) return;
        
        // 构建视频源
        const sources = this.buildSources();
        
        // 构建字幕
        const subtitles = this.buildSubtitles();
        
        // 初始化播放器
        this.player = new VideoPlayer(container, {
            sources: sources,
            subtitles: subtitles,
            poster: this.episodeData.thumbnail || '/images/poster.jpg',
            autoplay: true,
            enableDanmaku: true,
            enableDownload: true,
            enablePictureInPicture: true,
            defaultPlaybackRate: 1,
            theme: 'dark'
        });
        
        // 监听播放器事件
        this.setupPlayerEvents();
    }
    
    /**
     * 构建视频源
     */
    buildSources() {
        // 模拟多清晰度
        return [
            {
                url: this.episodeData.videoUrl,
                quality: '1080p',
                type: 'video/mp4',
                label: '1080p',
                selected: true
            },
            {
                url: this.episodeData.videoUrl.replace('.mp4', '_720p.mp4'),
                quality: '720p',
                type: 'video/mp4',
                label: '720p'
            },
            {
                url: this.episodeData.videoUrl.replace('.mp4', '_480p.mp4'),
                quality: '480p',
                type: 'video/mp4',
                label: '480p'
            }
        ];
    }
    
    /**
     * 构建字幕
     */
    buildSubtitles() {
        return [
            {
                url: '/subtitles/en.vtt',
                lang: 'en',
                label: 'English',
                default: true
            },
            {
                url: '/subtitles/zh.vtt',
                lang: 'zh',
                label: '中文'
            },
            {
                url: '/subtitles/es.vtt',
                lang: 'es',
                label: 'Español'
            }
        ];
    }
    
    /**
     * 设置播放器事件
     */
    setupPlayerEvents() {
        if (!this.player) return;
        
        // 上一集
        this.player.on('prevEpisode', () => {
            this.switchEpisode(this.episodeId - 1);
        });
        
        // 下一集
        this.player.on('nextEpisode', () => {
            this.switchEpisode(this.episodeId + 1);
        });
        
        // 显示字幕菜单
        this.player.on('showSubtitleMenu', () => {
            this.toggleSubtitleMenu();
        });
        
        // 显示清晰度菜单
        this.player.on('showQualityMenu', () => {
            this.toggleQualityMenu();
        });
        
        // 显示速度菜单
        this.player.on('showSpeedMenu', () => {
            this.toggleSpeedMenu();
        });
        
        // 播放结束
        this.player.on('ended', () => {
            if (this.episodeId < this.dramaData.episodes.length) {
                this.showNextEpisodePrompt();
            }
        });
        
        // 错误处理
        this.player.on('error', (error) => {
            console.error('Player error:', error);
            this.showError('播放出错，请重试');
        });
    }
    
    /**
     * 加载剧集列表
     */
    loadEpisodeList() {
        const container = document.getElementById('episode-list');
        if (!container) return;
        
        container.innerHTML = '';
        
        this.dramaData.episodes.forEach(episode => {
            const item = document.createElement('div');
            item.className = 'episode-item';
            if (episode.number === this.episodeId) {
                item.classList.add('active');
            }
            if (episode.isVip && !this.isVIP()) {
                item.classList.add('locked');
            }
            
            item.innerHTML = `
                <div class="episode-number">${episode.number}</div>
                <div class="episode-info">
                    <div class="episode-title">${episode.title}</div>
                    <div class="episode-duration">${this.formatDuration(episode.duration)}</div>
                </div>
                ${episode.watched ? '<div class="watched-badge">已观看</div>' : ''}
                ${episode.isVip ? '<i class="fas fa-crown vip-icon"></i>' : ''}
            `;
            
            item.addEventListener('click', () => {
                if (episode.isVip && !this.isVIP()) {
                    this.showVIPPrompt();
                } else {
                    this.switchEpisode(episode.number);
                }
            });
            
            container.appendChild(item);
        });
    }
    
    /**
     * 切换剧集
     */
    switchEpisode(episodeNumber) {
        if (episodeNumber === this.episodeId) return;
        
        const episode = this.dramaData.episodes.find(e => e.number === episodeNumber);
        if (!episode) return;
        
        // 更新URL
        const url = new URL(window.location);
        url.searchParams.set('episode', episodeNumber);
        window.history.pushState({}, '', url);
        
        // 重新加载页面
        window.location.reload();
    }
    
    /**
     * 切换字幕菜单
     */
    toggleSubtitleMenu() {
        const menu = document.querySelector('.player-subtitle-menu');
        if (!menu) return;
        
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        } else {
            // 隐藏其他菜单
            document.querySelector('.player-quality-menu')?.classList.remove('show');
            document.querySelector('.player-speed-menu')?.classList.remove('show');
            
            // 构建字幕菜单
            this.buildSubtitleMenu(menu);
            menu.classList.add('show');
        }
    }
    
    /**
     * 构建字幕菜单
     */
    buildSubtitleMenu(menu) {
        menu.innerHTML = '';
        
        // 关闭字幕选项
        const offItem = document.createElement('div');
        offItem.className = 'menu-item';
        offItem.textContent = '关闭字幕';
        offItem.addEventListener('click', () => {
            if (this.player) this.player.setSubtitle(null);
            menu.classList.remove('show');
        });
        menu.appendChild(offItem);
        
        // 字幕选项
        const subtitles = [
            { lang: 'en', label: 'English' },
            { lang: 'zh', label: '中文' },
            { lang: 'es', label: 'Español' }
        ];
        
        subtitles.forEach(sub => {
            const item = document.createElement('div');
            item.className = 'menu-item';
            item.textContent = sub.label;
            item.addEventListener('click', () => {
                if (this.player) this.player.setSubtitle(sub.lang);
                menu.classList.remove('show');
            });
            menu.appendChild(item);
        });
    }
    
    /**
     * 切换清晰度菜单
     */
    toggleQualityMenu() {
        const menu = document.querySelector('.player-quality-menu');
        if (!menu) return;
        
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        } else {
            // 隐藏其他菜单
            document.querySelector('.player-subtitle-menu')?.classList.remove('show');
            document.querySelector('.player-speed-menu')?.classList.remove('show');
            
            // 构建清晰度菜单
            this.buildQualityMenu(menu);
            menu.classList.add('show');
        }
    }
    
    /**
     * 构建清晰度菜单
     */
    buildQualityMenu(menu) {
        menu.innerHTML = '';
        
        const qualities = ['1080p', '720p', '480p', '360p'];
        
        qualities.forEach(quality => {
            const item = document.createElement('div');
            item.className = 'menu-item';
            item.textContent = quality;
            item.addEventListener('click', () => {
                if (this.player) this.player.setQuality(quality);
                menu.classList.remove('show');
            });
            menu.appendChild(item);
        });
    }
    
    /**
     * 切换速度菜单
     */
    toggleSpeedMenu() {
        const menu = document.querySelector('.player-speed-menu');
        if (!menu) return;
        
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        } else {
            // 隐藏其他菜单
            document.querySelector('.player-quality-menu')?.classList.remove('show');
            document.querySelector('.player-subtitle-menu')?.classList.remove('show');
            
            // 构建速度菜单
            this.buildSpeedMenu(menu);
            menu.classList.add('show');
        }
    }
    
    /**
     * 构建速度菜单
     */
    buildSpeedMenu(menu) {
        menu.innerHTML = '';
        
        const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];
        
        speeds.forEach(speed => {
            const item = document.createElement('div');
            item.className = 'menu-item';
            item.textContent = `${speed}x`;
            item.addEventListener('click', () => {
                if (this.player) this.player.setPlaybackRate(speed);
                menu.classList.remove('show');
            });
            menu.appendChild(item);
        });
    }
    
    /**
     * 检查VIP状态
     */
    isVIP() {
        return window.auth && window.auth.isVIP();
    }
    
    /**
     * 显示VIP提示
     */
    showVIPPrompt() {
        if (confirm('该剧集为VIP专属，是否开通VIP会员？')) {
            window.router.navigate('/payment', { vip: true });
        }
    }
    
    /**
     * 显示下一集提示
     */
    showNextEpisodePrompt() {
        const nextEpisode = this.dramaData.episodes[this.episodeId];
        if (!nextEpisode) return;
        
        // 检查下一集是否需要VIP
        if (nextEpisode.isVip && !this.isVIP()) {
            return;
        }
        
        const prompt = document.createElement('div');
        prompt.className = 'next-episode-prompt';
        prompt.innerHTML = `
            <div class="prompt-content">
                <p>即将播放下一集: ${nextEpisode.title}</p>
                <div class="prompt-actions">
                    <button class="btn-secondary" id="cancelNext">取消</button>
                    <button class="btn-primary" id="playNext">播放</button>
                </div>
            </div>
        `;
        
        document.querySelector('.player-container').appendChild(prompt);
        
        document.getElementById('playNext')?.addEventListener('click', () => {
            this.switchEpisode(this.episodeId + 1);
        });
        
        document.getElementById('cancelNext')?.addEventListener('click', () => {
            prompt.remove();
        });
        
        // 5秒后自动消失
        setTimeout(() => {
            if (prompt.parentNode) {
                prompt.remove();
            }
        }, 5000);
    }
    
    /**
     * 初始化观看历史记录
     */
    initWatchHistory() {
        if (!window.auth.isLoggedIn()) return;
        
        let lastRecordTime = 0;
        
        if (this.player) {
            this.player.on('timeupdate', () => {
                const currentTime = this.player.state.currentTime;
                if (currentTime - lastRecordTime >= 30) {
                    lastRecordTime = currentTime;
                    this.saveWatchProgress(currentTime);
                }
            });
        }
    }
    
    /**
     * 保存观看进度
     */
    async saveWatchProgress(progress) {
        try {
            await fetch('/api/watch-history', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    dramaId: this.dramaId,
                    episodeId: this.episodeId,
                    progress: progress,
                    total: this.episodeData.duration
                })
            });
        } catch (error) {
            console.error('Failed to save watch progress:', error);
        }
    }
    
    /**
     * 格式化时长
     */
    formatDuration(seconds) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.floor(seconds % 60);
        
        if (h > 0) {
            return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        } else {
            return `${m}:${s.toString().padStart(2, '0')}`;
        }
    }
    
    /**
     * 绑定页面事件
     */
    bindEvents() {
        // 返回按钮
        document.getElementById('backBtn')?.addEventListener('click', () => {
            window.history.back();
        });
        
        // 分享按钮
        document.getElementById('shareBtn')?.addEventListener('click', () => {
            this.handleShare();
        });
        
        // 下载按钮
        document.getElementById('downloadBtn')?.addEventListener('click', () => {
            this.handleDownload();
        });
        
        // 点赞按钮
        document.getElementById('likeBtn')?.addEventListener('click', () => {
            this.handleLike();
        });
        
        // 收藏按钮
        document.getElementById('favoriteBtn')?.addEventListener('click', () => {
            this.handleFavorite();
        });
        
        // 弹幕发送
        document.getElementById('sendDanmaku')?.addEventListener('click', () => {
            this.sendDanmaku();
        });
        
        document.getElementById('danmakuInput')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendDanmaku();
            }
        });
    }
    
    /**
     * 处理分享
     */
    handleShare() {
        if (navigator.share) {
            navigator.share({
                title: `${this.dramaData.title} 第${this.episodeId}集`,
                url: window.location.href
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(window.location.href)
                .then(() => this.showToast('链接已复制'))
                .catch(console.error);
        }
    }
    
    /**
     * 处理下载
     */
    handleDownload() {
        if (!window.auth.isLoggedIn()) {
            window.router.navigate('/login', { redirect: 'player' });
            return;
        }
        
        if (this.episodeData.isVip && !this.isVIP()) {
            this.showVIPPrompt();
            return;
        }
        
        this.showToast('下载功能开发中');
    }
    
    /**
     * 处理点赞
     */
    handleLike() {
        if (!window.auth.isLoggedIn()) {
            window.router.navigate('/login', { redirect: 'player' });
            return;
        }
        
        const btn = document.getElementById('likeBtn');
        btn.classList.toggle('active');
        
        const count = btn.querySelector('span');
        if (count) {
            let num = parseInt(count.textContent.replace('K', ''));
            if (btn.classList.contains('active')) {
                num++;
                count.textContent = num > 1000 ? (num/1000).toFixed(1) + 'K' : num;
            } else {
                num--;
                count.textContent = num > 1000 ? (num/1000).toFixed(1) + 'K' : num;
            }
        }
    }
    
    /**
     * 处理收藏
     */
    handleFavorite() {
        if (!window.auth.isLoggedIn()) {
            window.router.navigate('/login', { redirect: 'player' });
            return;
        }
        
        const btn = document.getElementById('favoriteBtn');
        btn.classList.toggle('active');
        
        const message = btn.classList.contains('active') ? '已添加到收藏' : '已取消收藏';
        this.showToast(message);
    }
    
    /**
     * 发送弹幕
     */
    sendDanmaku() {
        const input = document.getElementById('danmakuInput');
        const text = input.value.trim();
        
        if (!text) return;
        
        if (this.player && this.player.sendDanmaku) {
            this.player.sendDanmaku(text, {
                color: '#FFFFFF',
                size: 25,
                position: 'scroll'
            });
            input.value = '';
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
     * 显示提示消息
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
        console.log('Player page destroyed');
        
        // 销毁播放器
        if (this.player && this.player.destroy) {
            this.player.destroy();
        }
    }
}