/**
 * 播放器控制栏组件
 * 适配项目UI风格，使用相同的CSS变量
 */

class PlayerControls {
    constructor(player) {
        this.player = player;
        this.container = player.dom.controls;
        
        this.init();
    }
    
    init() {
        this.createControls();
        this.setupEventListeners();
        this.updateTimeDisplay();
    }
    
    createControls() {
        // 控制栏HTML - 使用项目图标
        this.container.innerHTML = `
            <div class="controls-left">
                <button class="control-btn play-pause">
                    <i class="fas fa-play"></i>
                    <i class="fas fa-pause"></i>
                </button>
                
                <button class="control-btn prev">
                    <i class="fas fa-step-backward"></i>
                </button>
                
                <button class="control-btn next">
                    <i class="fas fa-step-forward"></i>
                </button>
                
                <div class="volume-control">
                    <button class="control-btn volume">
                        <i class="fas fa-volume-up"></i>
                        <i class="fas fa-volume-mute"></i>
                    </button>
                    <div class="volume-slider">
                        <div class="volume-progress"></div>
                        <input type="range" class="volume-range" min="0" max="1" step="0.01" value="1">
                    </div>
                </div>
                
                <div class="time-display">
                    <span class="current-time">00:00</span>
                    <span class="time-separator">/</span>
                    <span class="duration">00:00</span>
                </div>
            </div>
            
            <div class="progress-bar-container">
                <div class="progress-bar">
                    <div class="buffered-progress"></div>
                    <div class="play-progress"></div>
                    <div class="progress-handle"></div>
                    <input type="range" class="progress-range" min="0" max="100" step="0.1" value="0">
                </div>
            </div>
            
            <div class="controls-right">
                <button class="control-btn subtitle" title="字幕">
                    <i class="fas fa-closed-captioning"></i>
                </button>
                
                <button class="control-btn quality" title="清晰度">
                    <i class="fas fa-hd"></i>
                </button>
                
                <button class="control-btn speed" title="播放速度">
                    <i class="fas fa-running"></i>
                    <span class="speed-text">1x</span>
                </button>
                
                <button class="control-btn audio-mode" title="听剧模式">
                    <i class="fas fa-headphones"></i>
                </button>
                
                <button class="control-btn download" title="下载">
                    <i class="fas fa-download"></i>
                </button>
                
                <button class="control-btn pip" title="画中画">
                    <i class="fas fa-clone"></i>
                </button>
                
                <button class="control-btn fullscreen">
                    <i class="fas fa-expand"></i>
                    <i class="fas fa-compress"></i>
                </button>
            </div>
        `;
        
        // 保存DOM引用
        this.dom = {
            playPause: this.container.querySelector('.play-pause'),
            prev: this.container.querySelector('.prev'),
            next: this.container.querySelector('.next'),
            volume: this.container.querySelector('.volume'),
            volumeRange: this.container.querySelector('.volume-range'),
            volumeProgress: this.container.querySelector('.volume-progress'),
            currentTime: this.container.querySelector('.current-time'),
            duration: this.container.querySelector('.duration'),
            progressRange: this.container.querySelector('.progress-range'),
            playProgress: this.container.querySelector('.play-progress'),
            bufferedProgress: this.container.querySelector('.buffered-progress'),
            subtitle: this.container.querySelector('.subtitle'),
            quality: this.container.querySelector('.quality'),
            speed: this.container.querySelector('.speed'),
            speedText: this.container.querySelector('.speed-text'),
            audioMode: this.container.querySelector('.audio-mode'),
            download: this.container.querySelector('.download'),
            pip: this.container.querySelector('.pip'),
            fullscreen: this.container.querySelector('.fullscreen')
        };
    }
    
    setupEventListeners() {
        // 播放/暂停
        this.dom.playPause.addEventListener('click', () => this.player.togglePlay());
        
        // 上一集
        this.dom.prev.addEventListener('click', () => {
            this.player.trigger('prevEpisode');
        });
        
        // 下一集
        this.dom.next.addEventListener('click', () => {
            this.player.trigger('nextEpisode');
        });
        
        // 音量控制
        this.dom.volume.addEventListener('click', () => this.player.toggleMute());
        
        this.dom.volumeRange.addEventListener('input', (e) => {
            const volume = parseFloat(e.target.value);
            this.player.setVolume(volume);
            this.updateVolumeDisplay(volume);
        });
        
        // 进度条控制
        this.dom.progressRange.addEventListener('input', (e) => {
            const percent = parseFloat(e.target.value);
            const time = (percent / 100) * this.player.state.duration;
            this.player.seek(time);
            this.updateProgressDisplay(percent);
        });
        
        // 字幕按钮
        this.dom.subtitle.addEventListener('click', () => {
            this.player.trigger('showSubtitleMenu');
        });
        
        // 清晰度按钮
        this.dom.quality.addEventListener('click', () => {
            this.player.trigger('showQualityMenu');
        });
        
        // 播放速度按钮
        this.dom.speed.addEventListener('click', () => {
            this.player.trigger('showSpeedMenu');
        });
        
        // 听剧模式
        this.dom.audioMode.addEventListener('click', () => {
            if (this.player.state.isAudioMode) {
                this.player.disableAudioMode();
            } else {
                this.player.enableAudioMode();
            }
        });
        
        // 下载
        this.dom.download.addEventListener('click', () => this.player.download());
        
        // 画中画
        this.dom.pip.addEventListener('click', () => this.player.togglePictureInPicture());
        
        // 全屏
        this.dom.fullscreen.addEventListener('click', () => this.player.toggleFullscreen());
        
        // 监听播放器事件
        this.player.on('play', () => this.updatePlayState(true));
        this.player.on('pause', () => this.updatePlayState(false));
        this.player.on('timeupdate', () => this.updateTime());
        this.player.on('progress', () => this.updateBuffered());
        this.player.on('volumechange', () => this.updateVolume());
        this.player.on('ratechange', () => this.updatePlaybackRate());
        this.player.on('qualitychange', (quality) => this.updateQuality(quality));
    }
    
    updatePlayState(isPlaying) {
        if (isPlaying) {
            this.dom.playPause.classList.add('playing');
        } else {
            this.dom.playPause.classList.remove('playing');
        }
    }
    
    updateTime() {
        const currentTime = this.player.state.currentTime;
        const duration = this.player.state.duration;
        
        this.dom.currentTime.textContent = this.formatTime(currentTime);
        this.dom.duration.textContent = this.formatTime(duration);
        
        if (duration > 0) {
            const percent = (currentTime / duration) * 100;
            this.updateProgressDisplay(percent);
        }
    }
    
    updateBuffered() {
        const buffered = this.player.state.buffered;
        const duration = this.player.state.duration;
        
        if (duration > 0) {
            const percent = (buffered / duration) * 100;
            this.dom.bufferedProgress.style.width = `${percent}%`;
        }
    }
    
    updateProgressDisplay(percent) {
        this.dom.playProgress.style.width = `${percent}%`;
        this.dom.progressRange.value = percent;
    }
    
    updateVolume() {
        const volume = this.player.state.volume;
        const muted = this.player.state.muted;
        
        this.dom.volumeRange.value = muted ? 0 : volume;
        this.updateVolumeDisplay(muted ? 0 : volume);
        
        // 更新音量图标
        if (muted || volume === 0) {
            this.dom.volume.classList.add('muted');
        } else {
            this.dom.volume.classList.remove('muted');
        }
    }
    
    updateVolumeDisplay(volume) {
        this.dom.volumeProgress.style.width = `${volume * 100}%`;
    }
    
    updatePlaybackRate() {
        const rate = this.player.state.playbackRate;
        this.dom.speedText.textContent = `${rate}x`;
    }
    
    updateQuality(quality) {
        // 更新清晰度显示
        if (quality === '1080p') {
            this.dom.quality.classList.add('hd');
        } else {
            this.dom.quality.classList.remove('hd');
        }
    }
    
    formatTime(seconds) {
        if (isNaN(seconds)) return '00:00';
        
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.floor(seconds % 60);
        
        if (h > 0) {
            return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        } else {
            return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }
    }
    
    destroy() {
        // 清理事件监听
        // 组件销毁时会由播放器统一处理
    }
}

export default PlayerControls;