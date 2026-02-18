// frontend/src/components/player/AudioMode.js

class AudioMode {
  constructor(player) {
    this.player = player;
    this.isActive = false;
    this.audioElement = null;
  }
  
  enable() {
    if (this.isActive) return;
    
    // 创建隐藏的视频元素
    const video = this.player.el();
    const audio = new Audio();
    
    // 复制视频源到音频
    const sources = video.querySelectorAll('source');
    sources.forEach(source => {
      const audioSource = document.createElement('source');
      audioSource.src = source.src;
      audioSource.type = source.type;
      audio.appendChild(audioSource);
    });
    
    // 同步播放进度
    audio.currentTime = this.player.currentTime();
    
    // 播放音频
    audio.play();
    
    // 隐藏视频
    video.style.opacity = '0';
    video.style.position = 'absolute';
    
    this.audioElement = audio;
    this.isActive = true;
    
    // 同步播放状态
    this.player.pause();
    this.player.on('play', () => {
      if (this.isActive) {
        this.audioElement.play();
      }
    });
    
    this.player.on('pause', () => {
      if (this.isActive) {
        this.audioElement.pause();
      }
    });
    
    // 后台播放支持
    this.setupBackgroundPlayback();
  }
  
  disable() {
    if (!this.isActive) return;
    
    // 恢复视频显示
    const video = this.player.el();
    video.style.opacity = '';
    video.style.position = '';
    
    // 同步播放进度
    if (this.audioElement) {
      this.player.currentTime(this.audioElement.currentTime);
      this.audioElement.pause();
      this.audioElement = null;
    }
    
    this.isActive = false;
  }
  
  setupBackgroundPlayback() {
    // 监听页面可见性变化
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.isActive) {
        // 页面隐藏时继续播放音频
        if (this.audioElement) {
          this.audioElement.play();
        }
      }
    });
    
    // 使用Media Session API
    if ('mediaSession' in navigator) {
      navigator.mediaSession.setActionHandler('play', () => {
        this.audioElement.play();
      });
      
      navigator.mediaSession.setActionHandler('pause', () => {
        this.audioElement.pause();
      });
      
      navigator.mediaSession.setActionHandler('seekbackward', (details) => {
        this.audioElement.currentTime = Math.max(
          this.audioElement.currentTime - (details.seekOffset || 10),
          0
        );
      });
      
      navigator.mediaSession.setActionHandler('seekforward', (details) => {
        this.audioElement.currentTime = Math.min(
          this.audioElement.currentTime + (details.seekOffset || 10),
          this.audioElement.duration
        );
      });
    }
  }
}

export default AudioMode;