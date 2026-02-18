/**
 * Global Shorts 视频播放器
 * 适配项目架构，与现有代码兼容
 * @author Global Shorts Team
 */

import PlayerControls from './PlayerControls.js';
import QualitySelector from './QualitySelector.js';
import SubtitleManager from './SubtitleManager.js';
import PlaybackRate from './PlaybackRate.js';
import AudioMode from './AudioMode.js';
import DownloadManager from './DownloadManager.js';
import KeyboardShortcuts from './KeyboardShortcuts.js';
import PictureInPicture from './PictureInPicture.js';
import ProgressPreview from './ProgressPreview.js';
import Danmaku from './Danmaku.js';

class VideoPlayer {
    /**
     * 构造函数
     * @param {string|HTMLElement} container - 容器ID或元素
     * @param {Object} options - 配置选项
     */
    constructor(container, options = {}) {
        // 获取容器元素
        this.container = typeof container === 'string' 
            ? document.getElementById(container) 
            : container;
        
        if (!this.container) {
            throw new Error('Video player container not found');
        }
        
        // 默认配置 - 与项目CSS变量保持一致
        this.options = {
            autoplay: false,
            controls: true,
            muted: false,
            loop: false,
            poster: '',
            sources: [],
            subtitles: [],
            playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 2],
            defaultPlaybackRate: 1,
            defaultQuality: 'auto',
            defaultSubtitle: null,
            enableDanmaku: false,
            enableDownload: true,
            enablePictureInPicture: true,
            enableKeyboard: true,
            enableProgressPreview: true,
            theme: 'dark', // 与项目主题一致
            ...options
        };
        
        // 状态管理
        this.state = {
            isPlaying: false,
            currentTime: 0,
            duration: 0,
            volume: 1,
            muted: this.options.muted,
            playbackRate: this.options.defaultPlaybackRate,
            currentQuality: this.options.defaultQuality,
            currentSubtitle: this.options.defaultSubtitle,
            buffered: 0,
            isFullscreen: false,
            isPiP: false,
            isAudioMode: false,
            isLoading: true,
            error: null
        };
        
        // 组件实例
        this.components = {};
        
        // 事件监听器
        this.events = {};
        
        // 初始化
        this.init();
    }
    
    /**
     * 初始化播放器
     */
    init() {
        // 创建DOM结构
        this.createDOM();
        
        // 创建视频元素
        this.createVideoElement();
        
        // 加载视频源
        this.loadSources();
        
        // 初始化组件
        this.initComponents();
        
        // 设置事件监听
        this.setupEventListeners();
        
        // 应用初始设置
        this.applyInitialSettings();
    }
    
    /**
     * 创建DOM结构
     */
    createDOM() {
        // 清空容器
        this.container.innerHTML = '';
        
        // 添加播放器类
        this.container.classList.add('global-shorts-player');
        this.container.classList.add(`theme-${this.options.theme}`);
        
        // 创建播放器HTML结构
        this.container.innerHTML = `
            <div class="player-container">
                <div class="player-video-wrapper">
                    <video class="player-video" playsinline webkit-playsinline x5-playsinline></video>
                    
                    <!-- 弹幕容器 -->
                    <div class="player-danmaku"></div>
                    
                    <!-- 加载动画 -->
                    <div class="player-loading">
                        <div class="loading-spinner"></div>
                    </div>
                    
                    <!-- 错误提示 -->
                    <div class="player-error">
                        <i class="fas fa-exclamation-circle"></i>
                        <p></p>
                    </div>
                    
                    <!-- 大播放按钮 -->
                    <div class="player-big-play-btn">
                        <i class="fas fa-play"></i>
                    </div>
                    
                    <!-- 控制栏容器 -->
                    <div class="player-controls"></div>
                    
                    <!-- 进度预览容器 -->
                    <div class="player-preview"></div>
                </div>
                
                <!-- 清晰度菜单 -->
                <div class="player-quality-menu"></div>
                
                <!-- 字幕菜单 -->
                <div class="player-subtitle-menu"></div>
                
                <!-- 播放速度菜单 -->
                <div class="player-speed-menu"></div>
            </div>
        `;
        
        // 保存DOM引用
        this.dom = {
            wrapper: this.container.querySelector('.player-video-wrapper'),
            videoWrapper: this.container.querySelector('.player-video-wrapper'),
            video: this.container.querySelector('.player-video'),
            danmaku: this.container.querySelector('.player-danmaku'),
            loading: this.container.querySelector('.player-loading'),
            error: this.container.querySelector('.player-error'),
            errorMsg: this.container.querySelector('.player-error p'),
            bigPlayBtn: this.container.querySelector('.player-big-play-btn'),
            controls: this.container.querySelector('.player-controls'),
            preview: this.container.querySelector('.player-preview'),
            qualityMenu: this.container.querySelector('.player-quality-menu'),
            subtitleMenu: this.container.querySelector('.player-subtitle-menu'),
            speedMenu: this.container.querySelector('.player-speed-menu')
        };
    }
    
    /**
     * 创建视频元素
     */
    createVideoElement() {
        this.video = this.dom.video;
        
        // 设置属性
        if (this.options.poster) {
            this.video.poster = this.options.poster;
        }
        
        this.video.muted = this.options.muted;
        this.video.loop = this.options.loop;
        this.video.preload = 'auto';
        
        // 监听视频事件
        this.video.addEventListener('loadstart', () => this.handleEvent('loadstart'));
        this.video.addEventListener('loadedmetadata', () => this.handleEvent('loadedmetadata'));
        this.video.addEventListener('loadeddata', () => this.handleEvent('loadeddata'));
        this.video.addEventListener('canplay', () => this.handleEvent('canplay'));
        this.video.addEventListener('canplaythrough', () => this.handleEvent('canplaythrough'));
        this.video.addEventListener('play', () => this.handleEvent('play'));
        this.video.addEventListener('playing', () => this.handleEvent('playing'));
        this.video.addEventListener('pause', () => this.handleEvent('pause'));
        this.video.addEventListener('ended', () => this.handleEvent('ended'));
        this.video.addEventListener('waiting', () => this.handleEvent('waiting'));
        this.video.addEventListener('stalled', () => this.handleEvent('stalled'));
        this.video.addEventListener('seeking', () => this.handleEvent('seeking'));
        this.video.addEventListener('seeked', () => this.handleEvent('seeked'));
        this.video.addEventListener('timeupdate', () => this.handleEvent('timeupdate'));
        this.video.addEventListener('volumechange', () => this.handleEvent('volumechange'));
        this.video.addEventListener('ratechange', () => this.handleEvent('ratechange'));
        this.video.addEventListener('durationchange', () => this.handleEvent('durationchange'));
        this.video.addEventListener('progress', () => this.handleEvent('progress'));
        this.video.addEventListener('error', (e) => this.handleError(e));
    }
    
    /**
     * 初始化组件
     */
    initComponents() {
        // 控制栏组件
        this.components.controls = new PlayerControls(this);
        
        // 清晰度选择组件
        if (this.options.sources.length > 0) {
            this.components.qualitySelector = new QualitySelector(this);
        }
        
        // 字幕管理组件
        if (this.options.subtitles.length > 0) {
            this.components.subtitleManager = new SubtitleManager(this);
        }
        
        // 播放速度组件
        this.components.playbackRate = new PlaybackRate(this);
        
        // 听剧模式组件
        this.components.audioMode = new AudioMode(this);
        
        // 下载管理组件
        if (this.options.enableDownload) {
            this.components.downloadManager = new DownloadManager(this);
        }
        
        // 键盘快捷键组件
        if (this.options.enableKeyboard) {
            this.components.keyboardShortcuts = new KeyboardShortcuts(this);
        }
        
        // 画中画组件
        if (this.options.enablePictureInPicture && document.pictureInPictureEnabled) {
            this.components.pictureInPicture = new PictureInPicture(this);
        }
        
        // 进度预览组件
        if (this.options.enableProgressPreview) {
            this.components.progressPreview = new ProgressPreview(this);
        }
        
        // 弹幕组件
        if (this.options.enableDanmaku) {
            this.components.danmaku = new Danmaku(this, this.dom.danmaku);
        }
    }
    
    /**
     * 设置事件监听
     */
    setupEventListeners() {
        // 大播放按钮点击
        this.dom.bigPlayBtn.addEventListener('click', () => this.togglePlay());
        
        // 点击视频切换播放状态
        this.dom.videoWrapper.addEventListener('click', (e) => {
            // 排除点击控制栏的情况
            if (!e.target.closest('.player-controls') && !e.target.closest('.player-quality-menu')) {
                this.togglePlay();
            }
        });
        
        // 鼠标移动显示控制栏
        let controlsTimeout;
        this.dom.wrapper.addEventListener('mousemove', () => {
            this.showControls();
            
            clearTimeout(controlsTimeout);
            controlsTimeout = setTimeout(() => {
                if (this.state.isPlaying && !this.state.isAudioMode) {
                    this.hideControls();
                }
            }, 3000);
        });
        
        this.dom.wrapper.addEventListener('mouseleave', () => {
            if (this.state.isPlaying && !this.state.isAudioMode) {
                this.hideControls();
            }
        });
    }
    
    /**
     * 应用初始设置
     */
    applyInitialSettings() {
        // 设置播放速度
        this.setPlaybackRate(this.options.defaultPlaybackRate);
        
        // 设置默认字幕
        if (this.options.defaultSubtitle) {
            this.setSubtitle(this.options.defaultSubtitle);
        }
    }
    
    /**
     * 加载视频源
     */
    loadSources() {
        if (this.options.sources.length === 0) return;
        
        // 清除现有源
        while (this.video.firstChild) {
            this.video.removeChild(this.video.firstChild);
        }
        
        // 添加源
        this.options.sources.forEach(source => {
            const sourceEl = document.createElement('source');
            sourceEl.src = source.url;
            sourceEl.type = source.type || 'video/mp4';
            if (source.quality) {
                sourceEl.setAttribute('data-quality', source.quality);
            }
            this.video.appendChild(sourceEl);
        });
        
        // 重新加载视频
        this.video.load();
    }
    
    /**
     * 处理事件
     */
    handleEvent(eventName) {
        switch (eventName) {
            case 'loadedmetadata':
                this.state.duration = this.video.duration;
                this.state.isLoading = false;
                break;
                
            case 'timeupdate':
                this.state.currentTime = this.video.currentTime;
                break;
                
            case 'progress':
                if (this.video.buffered.length > 0) {
                    this.state.buffered = this.video.buffered.end(this.video.buffered.length - 1);
                }
                break;
                
            case 'waiting':
                this.showLoading();
                break;
                
            case 'canplay':
            case 'playing':
                this.hideLoading();
                break;
                
            case 'play':
                this.state.isPlaying = true;
                this.dom.bigPlayBtn.classList.add('hidden');
                this.container.classList.add('playing');
                break;
                
            case 'pause':
                this.state.isPlaying = false;
                this.dom.bigPlayBtn.classList.remove('hidden');
                this.container.classList.remove('playing');
                break;
                
            case 'volumechange':
                this.state.volume = this.video.volume;
                this.state.muted = this.video.muted;
                break;
                
            case 'ratechange':
                this.state.playbackRate = this.video.playbackRate;
                break;
        }
        
        // 触发自定义事件
        this.trigger(eventName, this.state);
    }
    
    /**
     * 处理错误
     */
    handleError(e) {
        const error = this.video.error;
        this.state.error = error;
        this.state.isLoading = false;
        
        // 显示错误信息
        this.dom.error.classList.add('show');
        
        let errorMessage = '视频加载失败';
        if (error) {
            switch (error.code) {
                case 1:
                    errorMessage = '视频加载被中止';
                    break;
                case 2:
                    errorMessage = '网络错误导致视频下载失败';
                    break;
                case 3:
                    errorMessage = '视频解码失败';
                    break;
                case 4:
                    errorMessage = '视频格式不支持';
                    break;
            }
        }
        
        this.dom.errorMsg.textContent = errorMessage;
        
        // 触发错误事件
        this.trigger('error', { error, message: errorMessage });
    }
    
    /**
     * 显示加载动画
     */
    showLoading() {
        this.dom.loading.classList.add('show');
    }
    
    /**
     * 隐藏加载动画
     */
    hideLoading() {
        this.dom.loading.classList.remove('show');
    }
    
    /**
     * 显示控制栏
     */
    showControls() {
        this.dom.controls.classList.add('show');
        this.dom.wrapper.style.cursor = 'default';
    }
    
    /**
     * 隐藏控制栏
     */
    hideControls() {
        this.dom.controls.classList.remove('show');
        this.dom.wrapper.style.cursor = 'none';
    }
    
    /**
     * 播放
     */
    play() {
        const promise = this.video.play();
        if (promise !== undefined) {
            promise.catch(error => {
                console.error('Play failed:', error);
                this.handleError({ target: { error } });
            });
        }
    }
    
    /**
     * 暂停
     */
    pause() {
        this.video.pause();
    }
    
    /**
     * 切换播放/暂停
     */
    togglePlay() {
        if (this.video.paused) {
            this.play();
        } else {
            this.pause();
        }
    }
    
    /**
     * 跳转到指定时间
     * @param {number} time - 时间（秒）
     */
    seek(time) {
        this.video.currentTime = Math.max(0, Math.min(time, this.state.duration));
    }
    
    /**
     * 设置音量
     * @param {number} volume - 音量（0-1）
     */
    setVolume(volume) {
        this.video.volume = Math.max(0, Math.min(1, volume));
    }
    
    /**
     * 切换静音
     */
    toggleMute() {
        this.video.muted = !this.video.muted;
    }
    
    /**
     * 设置播放速度
     * @param {number} rate - 播放速度
     */
    setPlaybackRate(rate) {
        this.video.playbackRate = rate;
    }
    
    /**
     * 切换全屏
     */
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            this.dom.wrapper.requestFullscreen();
            this.state.isFullscreen = true;
        } else {
            document.exitFullscreen();
            this.state.isFullscreen = false;
        }
    }
    
    /**
     * 切换画中画
     */
    async togglePictureInPicture() {
        try {
            if (document.pictureInPictureElement) {
                await document.exitPictureInPicture();
                this.state.isPiP = false;
            } else {
                await this.video.requestPictureInPicture();
                this.state.isPiP = true;
            }
        } catch (error) {
            console.error('Picture-in-Picture failed:', error);
        }
    }
    
    /**
     * 设置清晰度
     * @param {string} quality - 清晰度
     */
    setQuality(quality) {
        const source = this.options.sources.find(s => s.quality === quality);
        if (source) {
            this.state.currentQuality = quality;
            this.video.src = source.url;
            this.video.load();
            
            // 保持播放状态
            if (this.state.isPlaying) {
                this.video.play();
            }
            
            this.trigger('qualitychange', quality);
        }
    }
    
    /**
     * 设置字幕
     * @param {string} language - 字幕语言
     */
    setSubtitle(language) {
        if (this.components.subtitleManager) {
            this.components.subtitleManager.setSubtitle(language);
        }
    }
    
    /**
     * 开启听剧模式
     */
    enableAudioMode() {
        if (this.components.audioMode) {
            this.components.audioMode.enable();
        }
    }
    
    /**
     * 关闭听剧模式
     */
    disableAudioMode() {
        if (this.components.audioMode) {
            this.components.audioMode.disable();
        }
    }
    
    /**
     * 下载当前视频
     */
    download() {
        if (this.components.downloadManager) {
            this.components.downloadManager.download();
        }
    }
    
    /**
     * 发送弹幕
     * @param {string} text - 弹幕内容
     * @param {Object} options - 弹幕选项
     */
    sendDanmaku(text, options = {}) {
        if (this.components.danmaku) {
            this.components.danmaku.send(text, options);
        }
    }
    
    /**
     * 添加事件监听
     * @param {string} event - 事件名称
     * @param {Function} callback - 回调函数
     */
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    
    /**
     * 移除事件监听
     * @param {string} event - 事件名称
     * @param {Function} callback - 回调函数
     */
    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    }
    
    /**
     * 触发事件
     * @param {string} event - 事件名称
     * @param {*} data - 事件数据
     */
    trigger(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
    
    /**
     * 销毁播放器
     */
    destroy() {
        // 暂停视频
        this.pause();
        
        // 销毁组件
        Object.values(this.components).forEach(component => {
            if (component && typeof component.destroy === 'function') {
                component.destroy();
            }
        });
        
        // 移除事件监听
        this.events = {};
        
        // 清空容器
        this.container.innerHTML = '';
        
        // 移除类
        this.container.classList.remove('global-shorts-player', `theme-${this.options.theme}`);
    }
}

export default VideoPlayer;