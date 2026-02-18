// 播放器主入口，导出所有组件
import VideoPlayer from './VideoPlayer.js';
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

// 导出所有组件
export {
    VideoPlayer,
    PlayerControls,
    QualitySelector,
    SubtitleManager,
    PlaybackRate,
    AudioMode,
    DownloadManager,
    KeyboardShortcuts,
    PictureInPicture,
    ProgressPreview,
    Danmaku
};

// 默认导出主播放器
export default VideoPlayer;