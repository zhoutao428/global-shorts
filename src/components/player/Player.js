/**
 * 播放器页面逻辑
 * 处理剧集数据加载、用户交互等
 */

import VideoPlayer from '../components/player/index.js';
import API from '../core/api.js';
import Auth from '../core/auth.js';

class PlayerPage {
    constructor() {
        this.player = null;
        this.dramaId = null;
        this.episodeId = null;
        this.dramaData = null;
        this.episodeData = null;
        
        this.init();
    }
    
    async init() {
        // 获取URL参数
        this.parseUrlParams();
        
        // 加载剧集数据
        await this.loadDramaData();
        
        // 初始化播放器
        this.initPlayer();
        
        // 加载剧集列表
        this.loadEpisodeList();
        
        // 设置事件监听
        this.setupEventListeners();
        
        // 检查VIP权限
        this.checkVIPAccess();
        
        // 记录观看历史
        this.recordWatchHistory();
    }
    
    parseUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        this.dramaId = urlParams.get('drama') || 'demo_001';
        this.episodeId = urlParams.get('episode') || 1;
    }
    
    async loadDramaData() {
        try {
            // 显示加载状态
            document.querySelector('.page-loading').classList.add('show');
            
            // 获取剧集详情
            const response = await API.get(`/dramas/${this.dramaId}`);
            this.dramaData = response.data;
            
            // 获取当前剧集
            this.episodeData = this.dramaData.episodes.find(
                e => e.id === this.episodeId
            ) || this.dramaData.episodes[0];
            
            // 更新页面标题
            document.querySelector('.episode-title').textContent = 
                `${this.dramaData.title} - Episode ${this.episodeData.episodeNumber}`;
            
            // 更新剧集描述
            document.querySelector('.episode-description').textContent = 
                this.episodeData.description;
            
        } catch (error) {
            console.error('Failed to load drama data:', error);
            this.showError('剧集加载失败');
        } finally {
            document.querySelector('.page-loading').classList.remove('show');
        }
    }
    
    initPlayer() {
        // 构建视频源
        const sources = this.buildSources();
        
        // 构建字幕
        const subtitles = this.buildSubtitles();
        
        // 初始化播放器
        this.player = new VideoPlayer('player-container', {
            sources: sources,
            subtitles: subtitles,
            poster: this.episodeData.thumbnail,
            autoplay: true,
            enableDanmaku: true,
            enableDownload: true,
            enablePictureInPicture: true,
            defaultQuality: 'auto',
            defaultPlaybackRate: 1,
            theme: 'dark'
        });
        
        // 监听播放器事件
        this.setupPlayerEvents();
    }
    
    buildSources() {
        const sources = [];
        
        // 如果有多种清晰度
        if (this.episodeData.videos) {
            this.episodeData.videos.forEach(video => {
                sources.push({
                    url: video.url,
                    quality: video.quality,
                    type: video.type || 'video/mp4'
                });
            });
        } else {
            // 默认单清晰度
            sources.push({
                url: this.episodeData.videoUrl,
                quality: '720p',
                type: 'video/mp4'
            });
        }
        
        return sources;
    }
    
    buildSubtitles() {
        const subtitles = [];
        
        if (this.episodeData.subtitles) {
            this.episodeData.subtitles.forEach(sub => {
                subtitles.push({
                    url: sub.url,
                    lang: sub.language,
                    label: sub.label,
                    default: sub.default || false
                });
            });
        }
        
        return subtitles;
    }
    
    setupPlayerEvents() {
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
            // 自动播放下一个视频
            if (this.episodeId < this.dramaData.episodes.length) {
                this.showNextEpisodePrompt();
            }
            
            // 标记为已观看
            this.markAsWatched();
        });
        
        // 错误处理
        this.player.on('error', (error) => {
            console.error('Player error:', error);
            this.showError('播放出错，请重试');
        });
    }
    
    loadEpisodeList() {
        const container = document.getElementById('episode-list');
        if (!container) return;
        
        container.innerHTML = '';
        
        this.dramaData.episodes.forEach(episode => {
            const episodeItem = document.createElement('div');
            episodeItem.className = 'episode-item';
            if (episode.id === this.episodeId) {
                episodeItem.classList.add('active');
            }
            
            episodeItem.innerHTML = `
                <div class="episode-number">${episode.episodeNumber}</div>
                <div class="episode-info">
                    <div class="episode-title">${episode.title}</div>
                    <div class="episode-duration">${this.formatDuration(episode.duration)}</div>
                </div>
                ${episode.watched ? '<div class="watched-badge">已观看</div>' : ''}
            `;
            
            episodeItem.addEventListener('click', () => {
                this.switchEpisode(episode.id);
            });
            
            container.appendChild(episodeItem);
        });
    }
    
    async switchEpisode(episodeId) {
        if (episodeId === this.episodeId) return;
        
        // 检查VIP权限
        const episode = this.dramaData.episodes.find(e => e.id === episodeId);
        if (episode.isVip && !Auth.isVIP()) {
            this.showVIPPrompt();
            return;
        }
        
        // 更新URL
        const url = new URL(window.location);
        url.searchParams.set('episode', episodeId);
        window.history.pushState({}, '', url);
        
        // 重新加载页面
        window.location.reload();
    }
    
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
    
    buildSubtitleMenu(menu) {
        menu.innerHTML = '';
        
        // 关闭字幕选项
        const offItem = document.createElement('div');
        offItem.className = 'menu-item';
        offItem.textContent = '关闭字幕';
        offItem.addEventListener('click', () => {
            this.player.setSubtitle(null);
            menu.classList.remove('show');
        });
        menu.appendChild(offItem);
        
        // 字幕选项
        this.player.options.subtitles.forEach(sub => {
            const item = document.createElement('div');
            item.className = 'menu-item';
            if (sub.default) {
                item.classList.add('active');
            }
            item.textContent = sub.label;
            item.addEventListener('click', () => {
                this.player.setSubtitle(sub.lang);
                menu.classList.remove('show');
            });
            menu.appendChild(item);
        });
    }
    
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
    
    buildQualityMenu(menu) {
        menu.innerHTML = '';
        
        const qualities = ['auto', '1080p', '720p', '480p', '360p'];
        
        qualities.forEach(quality => {
            const item = document.createElement('div');
            item.className = 'menu-item';
            if (quality === this.player.state.currentQuality) {
                item.classList.add('active');
            }
            item.textContent = quality === 'auto' ? '自动' : quality;
            item.addEventListener('click', () => {
                this.player.setQuality(quality);
                menu.classList.remove('show');
            });
            menu.appendChild(item);
        });
    }
    
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
    
    buildSpeedMenu(menu) {
        menu.innerHTML = '';
        
        const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];
        
        speeds.forEach(speed => {
            const item = document.createElement('div');
            item.className = 'menu-item';
            if (speed === this.player.state.playbackRate) {
                item.classList.add('active');
            }
            item.textContent = `${speed}x`;
            item.addEventListener('click', () => {
                this.player.setPlaybackRate(speed);
                menu.classList.remove('show');
            });
            menu.appendChild(item);
        });
    }
    
    async checkVIPAccess() {
        // 检查当前剧集是否需要VIP
        if (this.episodeData.isVip && !Auth.isVIP()) {
            this.showVIPOverlay();
        }
    }
    
    showVIPOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'vip-overlay';
        overlay.innerHTML = `
            <div class="vip-content">
                <i class="fas fa-crown"></i>
                <h3>VIP专属内容</h3>
                <p>开通VIP会员即可观看本剧集</p>
                <button class="btn-primary" onclick="window.location.href='/payment.html'">
                    开通VIP
                </button>
            </div>
        `;
        
        document.querySelector('.player-container').appendChild(overlay);
    }
    
    showVIPPrompt() {
        if (confirm('该剧集为VIP专属，是否开通VIP会员？')) {
            window.location.href = '/payment.html';
        }
    }
    
    showNextEpisodePrompt() {
        const nextEpisode = this.dramaData.episodes[this.episodeId];
        if (!nextEpisode) return;
        
        const prompt = document.createElement('div');
        prompt.className = 'next-episode-prompt';
        prompt.innerHTML = `
            <div class="prompt-content">
                <p>下一集: ${nextEpisode.title}</p>
                <div class="prompt-actions">
                    <button class="btn-secondary" onclick="this.closest('.next-episode-prompt').remove()">
                        取消
                    </button>
                    <button class="btn-primary" onclick="window.location.href='?drama=${this.dramaId}&episode=${nextEpisode.id}'">
                        播放下一集
                    </button>
                </div>
            </div>
        `;
        
        document.querySelector('.player-container').appendChild(prompt);
        
        // 5秒后自动消失
        setTimeout(() => {
            prompt.remove();
        }, 5000);
    }
    
    async recordWatchHistory() {
        // 每30秒记录一次观看进度
        let lastRecordTime = 0;
        
        this.player.on('timeupdate', () => {
            const currentTime = this.player.state.currentTime;
            if (currentTime - lastRecordTime >= 30) {
                lastRecordTime = currentTime;
                this.saveWatchProgress(currentTime);
            }
        });
    }
    
    async saveWatchProgress(progress) {
        if (!Auth.isLoggedIn()) return;
        
        try {
            await API.post('/watch-history', {
                dramaId: this.dramaId,
                episodeId: this.episodeId,
                progress: progress,
                total: this.player.state.duration
            });
        } catch (error) {
            console.error('Failed to save watch progress:', error);
        }
    }
    
    async markAsWatched() {
        if (!Auth.isLoggedIn()) return;
        
        try {
            await API.post('/watch-history/complete', {
                dramaId: this.dramaId,
                episodeId: this.episodeId
            });
        } catch (error) {
            console.error('Failed to mark as watched:', error);
        }
    }
    
    formatDuration(seconds) {
        if (!seconds) return '00:00';
        
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.floor(seconds % 60);
        
        if (h > 0) {
            return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        } else {
            return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }
    }
    
    showError(message) {
        const errorEl = document.createElement('div');
        errorEl.className = 'error-toast';
        errorEl.textContent = message;
        document.body.appendChild(errorEl);
        
        setTimeout(() => {
            errorEl.remove();
        }, 3000);
    }
    
    setupEventListeners() {
        // 点赞按钮
        document.getElementById('like-btn')?.addEventListener('click', () => {
            this.handleLike();
        });
        
        // 收藏按钮
        document.getElementById('favorite-btn')?.addEventListener('click', () => {
            this.handleFavorite();
        });
        
        // 分享按钮
        document.getElementById('share-btn')?.addEventListener('click', () => {
            this.handleShare();
        });
        
        // 下载按钮
        document.getElementById('download-btn')?.addEventListener('click', () => {
            this.handleDownload();
        });
        
        // 全屏切换监听
        document.addEventListener('fullscreenchange', () => {
            this.player.state.isFullscreen = !!document.fullscreenElement;
        });
    }
    
    async handleLike() {
        if (!Auth.isLoggedIn()) {
            window.location.href = '/login.html';
            return;
        }
        
        try {
            await API.post(`/episodes/${this.episodeId}/like`);
            
            const likeBtn = document.getElementById('like-btn');
            likeBtn.classList.toggle('active');
            
            // 更新计数
            const countSpan = likeBtn.querySelector('span');
            if (countSpan) {
                let count = parseInt(countSpan.textContent);
                if (likeBtn.classList.contains('active')) {
                    count++;
                } else {
                    count--;
                }
                countSpan.textContent = count;
            }
        } catch (error) {
            console.error('Failed to like:', error);
        }
    }
    
    async handleFavorite() {
        if (!Auth.isLoggedIn()) {
            window.location.href = '/login.html';
            return;
        }
        
        try {
            await API.post(`/dramas/${this.dramaId}/favorite`);
            
            const favBtn = document.getElementById('favorite-btn');
            favBtn.classList.toggle('active');
            
            const message = favBtn.classList.contains('active') ? '已添加到收藏' : '已取消收藏';
            this.showToast(message);
        } catch (error) {
            console.error('Failed to favorite:', error);
        }
    }
    
    handleShare() {
        if (navigator.share) {
            navigator.share({
                title: this.episodeData.title,
                text: `我正在看 ${this.dramaData.title} - ${this.episodeData.title}`,
                url: window.location.href
            }).catch(console.error);
        } else {
            // 复制链接到剪贴板
            navigator.clipboard.writeText(window.location.href)
                .then(() => this.showToast('链接已复制'))
                .catch(console.error);
        }
    }
    
    async handleDownload() {
        if (!Auth.isLoggedIn()) {
            window.location.href = '/login.html';
            return;
        }
        
        // 检查下载权限
        if (this.episodeData.isVip && !Auth.isVIP()) {
            this.showVIPPrompt();
            return;
        }
        
        try {
            const response = await API.get(`/episodes/${this.episodeId}/download`);
            
            if (response.data.downloadUrl) {
                // 创建下载链接
                const a = document.createElement('a');
                a.href = response.data.downloadUrl;
                a.download = `${this.dramaData.title}_${this.episodeData.title}.mp4`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                
                this.showToast('下载已开始');
            }
        } catch (error) {
            console.error('Download failed:', error);
            this.showError('下载失败');
        }
    }
    
    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast-message';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 2000);
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    new PlayerPage();
});