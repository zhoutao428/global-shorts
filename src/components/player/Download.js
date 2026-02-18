// frontend/src/components/player/Download.js

class VideoDownload {
  constructor(player) {
    this.player = player;
    this.downloadQueue = [];
    this.isDownloading = false;
  }
  
  async downloadEpisode(episodeId, quality = '720p') {
    // 检查存储空间
    if (!await this.checkStorage()) {
      alert('存储空间不足');
      return;
    }
    
    // 获取下载URL
    const downloadUrl = await this.getDownloadUrl(episodeId, quality);
    
    // 添加到下载队列
    const downloadItem = {
      id: episodeId,
      url: downloadUrl,
      quality: quality,
      progress: 0,
      status: 'pending'
    };
    
    this.downloadQueue.push(downloadItem);
    
    if (!this.isDownloading) {
      this.processDownloadQueue();
    }
    
    return downloadItem;
  }
  
  async processDownloadQueue() {
    if (this.downloadQueue.length === 0) {
      this.isDownloading = false;
      return;
    }
    
    this.isDownloading = true;
    const item = this.downloadQueue[0];
    
    try {
      // 使用IndexedDB存储
      const response = await fetch(item.url);
      const reader = response.body.getReader();
      const contentLength = +response.headers.get('Content-Length');
      
      let receivedLength = 0;
      const chunks = [];
      
      while(true) {
        const {done, value} = await reader.read();
        
        if (done) break;
        
        chunks.push(value);
        receivedLength += value.length;
        
        // 更新进度
        item.progress = (receivedLength / contentLength) * 100;
        item.status = 'downloading';
        
        this.updateDownloadProgress(item);
      }
      
      // 合并chunks
      const blob = new Blob(chunks);
      
      // 存储到IndexedDB
      await this.saveToIndexedDB(item.id, blob);
      
      // 完成下载
      item.status = 'completed';
      this.downloadQueue.shift();
      
      // 继续下一个下载
      this.processDownloadQueue();
      
    } catch (error) {
      console.error('Download failed:', error);
      item.status = 'failed';
      this.downloadQueue.shift();
      this.processDownloadQueue();
    }
  }
  
  async saveToIndexedDB(key, blob) {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('VideoDB', 1);
      
      request.onerror = reject;
      request.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction(['videos'], 'readwrite');
        const store = transaction.objectStore('videos');
        
        store.put({ id: key, blob: blob });
        
        transaction.oncomplete = resolve;
        transaction.onerror = reject;
      };
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        db.createObjectStore('videos', { keyPath: 'id' });
      };
    });
  }
  
  async getOfflineVideo(episodeId) {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('VideoDB', 1);
      
      request.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction(['videos'], 'readonly');
        const store = transaction.objectStore('videos');
        const getRequest = store.get(episodeId);
        
        getRequest.onsuccess = () => {
          if (getRequest.result) {
            const url = URL.createObjectURL(getRequest.result.blob);
            resolve(url);
          } else {
            resolve(null);
          }
        };
        
        getRequest.onerror = reject;
      };
      
      request.onerror = reject;
    });
  }
  
  async checkStorage() {
    if ('storage' in navigator && 'estimate' in navigator.storage) {
      const estimate = await navigator.storage.estimate();
      const available = estimate.quota - estimate.usage;
      
      // 假设每个视频需要500MB
      const minRequired = 500 * 1024 * 1024;
      
      return available > minRequired;
    }
    
    return true;
  }
  
  async getDownloadUrl(episodeId, quality) {
    // 调用API获取下载链接
    const response = await fetch(`/api/episodes/${episodeId}/download?quality=${quality}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    
    const data = await response.json();
    return data.downloadUrl;
  }
  
  updateDownloadProgress(item) {
    // 更新UI显示下载进度
    const event = new CustomEvent('downloadProgress', {
      detail: item
    });
    document.dispatchEvent(event);
  }
}

export default VideoDownload;