// backend/src/services/video.service.js

const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');
const OSS = require('ali-oss');

class VideoService {
  constructor() {
    this.ossClient = new OSS({
      region: process.env.OSS_REGION,
      accessKeyId: process.env.OSS_ACCESS_KEY_ID,
      accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
      bucket: process.env.OSS_BUCKET
    });
  }
  
  // 视频转码
  async transcodeVideo(inputPath, outputDir) {
    const qualities = [
      { name: '360p', size: '640x360', bitrate: '500k' },
      { name: '480p', size: '854x480', bitrate: '1000k' },
      { name: '720p', size: '1280x720', bitrate: '2000k' },
      { name: '1080p', size: '1920x1080', bitrate: '4000k' }
    ];
    
    const outputs = [];
    
    for (const quality of qualities) {
      const outputPath = path.join(outputDir, `${quality.name}.mp4`);
      
      await new Promise((resolve, reject) => {
        ffmpeg(inputPath)
          .size(quality.size)
          .videoBitrate(quality.bitrate)
          .audioBitrate('128k')
          .on('end', resolve)
          .on('error', reject)
          .save(outputPath);
      });
      
      outputs.push({
        quality: quality.name,
        path: outputPath
      });
    }
    
    return outputs;
  }
  
  // 生成HLS流
  async createHLSStream(inputPath, outputDir) {
    const hlsDir = path.join(outputDir, 'hls');
    if (!fs.existsSync(hlsDir)) {
      fs.mkdirSync(hlsDir, { recursive: true });
    }
    
    return new Promise((resolve, reject) => {
      ffmpeg(inputPath)
        .outputOptions([
          '-codec: h264',
          '-hls_time 10',
          '-hls_list_size 0',
          '-hls_segment_filename', `${hlsDir}/segment_%03d.ts`,
          '-f hls'
        ])
        .output(`${hlsDir}/playlist.m3u8`)
        .on('end', () => {
          resolve({
            playlist: `${hlsDir}/playlist.m3u8`,
            segments: fs.readdirSync(hlsDir).filter(f => f.endsWith('.ts'))
          });
        })
        .on('error', reject)
        .run();
    });
  }
  
  // 上传到OSS
  async uploadToOSS(localPath, remotePath) {
    try {
      const result = await this.ossClient.put(remotePath, localPath);
      return result.url;
    } catch (error) {
      console.error('Upload to OSS failed:', error);
      throw error;
    }
  }
  
  // 生成字幕文件
  async generateSubtitles(videoPath, language) {
    // 使用语音识别生成字幕
    // 或者返回已有的字幕文件
  }
  
  // 添加水印
  async addWatermark(inputPath, outputPath, watermarkImage) {
    return new Promise((resolve, reject) => {
      ffmpeg(inputPath)
        .input(watermarkImage)
        .complexFilter([
          {
            filter: 'overlay',
            options: { x: 10, y: 10 }
          }
        ])
        .on('end', resolve)
        .on('error', reject)
        .save(outputPath);
    });
  }
}