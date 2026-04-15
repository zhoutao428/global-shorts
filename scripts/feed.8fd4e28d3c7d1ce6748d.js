/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 431
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Global Shorts 视频播放器 (智能适配版)
 * 核心功能：
 * 1. 自动识别横竖屏 (Cover/Contain 切换)
 * 2. 复用 HTML 结构 (不破坏 UI)
 * 3. 仿 TikTok 交互 (点击播放/暂停)
 * 4. 静音自动播放 (AutoPlay Policy)
 */
var VideoPlayer = /*#__PURE__*/function () {
  function VideoPlayer(container) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, VideoPlayer);
    this.container = typeof container === 'string' ? document.getElementById(container) : container;
    if (!this.container) {
      throw new Error('Video player container not found');
    }
    this.options = _objectSpread({
      autoplay: true,
      // 默认尝试自动播放
      muted: false,
      // 默认开启声音（但自动播放时可能会被强制静音）
      loop: true,
      // 短剧通常循环播放
      poster: '',
      sources: []
    }, options);
    this.state = {
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      volume: 1,
      muted: true,
      // 初始设为静音以保证自动播放成功率
      isLandscape: false,
      // 是否为横屏视频
      buffered: 0,
      isLoading: true,
      error: null
    };
    this.components = {};
    this.events = {};
    this.init();
  }
  return _createClass(VideoPlayer, [{
    key: "init",
    value: function init() {
      this.createDOM();
      this.createVideoElement();
      this.loadSources();
      this.setupEventListeners();
    }
  }, {
    key: "createDOM",
    value: function createDOM() {
      // 不清空 HTML，保留 UI
      this.container.classList.add('global-shorts-player');

      // 查找或创建 Video 标签
      var video = this.container.querySelector('video');
      if (!video) {
        video = document.createElement('video');
        video.className = 'player-video';
        video.playsInline = true;
        video.webkitPlaysInline = true;
        video.x5PlaysInline = true; // 微信同层播放兼容

        // 默认样式：先设为铺满，后面 JS 会动态调整 object-fit
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.position = 'absolute';
        video.style.top = '0';
        video.style.left = '0';
        video.style.zIndex = '0'; // 放在最底层，不遮挡 UI

        // 插入到最前面
        if (this.container.firstChild) {
          this.container.insertBefore(video, this.container.firstChild);
        } else {
          this.container.appendChild(video);
        }
      }
      this.dom = {
        video: video
      };
    }
  }, {
    key: "createVideoElement",
    value: function createVideoElement() {
      this.video = this.dom.video;
      if (this.options.poster) this.video.poster = this.options.poster;
      this.video.loop = this.options.loop;
      this.video.preload = 'auto';
    }
  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
      var _this = this;
      // 1. 元数据加载完成：判断横竖屏
      this.video.addEventListener('loadedmetadata', function () {
        _this.state.duration = _this.video.duration;
        _this.state.isLoading = false;
        _this.checkOrientation(); // 智能判断横竖屏
        _this.trigger('loadedmetadata', _this.state);
      });

      // 2. 播放状态更新
      this.video.addEventListener('play', function () {
        _this.state.isPlaying = true;
        _this.trigger('play', _this.state);
      });
      this.video.addEventListener('pause', function () {
        _this.state.isPlaying = false;
        _this.trigger('pause', _this.state);
      });

      // 3. 进度更新
      this.video.addEventListener('timeupdate', function () {
        _this.state.currentTime = _this.video.currentTime;
        _this.trigger('timeupdate', _this.state.currentTime, _this.state.duration);
      });
      this.video.addEventListener('ended', function () {
        return _this.trigger('ended', _this.state);
      });
      this.video.addEventListener('error', function (e) {
        _this.state.error = _this.video.error;
        _this.trigger('error', {
          error: _this.video.error
        });
      });

      // 4. 点击屏幕：切换播放/暂停 (TikTok 体验)
      if (this.container) {
        this.container.addEventListener('click', function (e) {
          // 如果点击的是控制栏按钮、抽屉或者进度条，不要触发暂停
          if (e.target.closest('button') || e.target.closest('.player-overlay') || e.target.closest('.drawer-overlay') || e.target.closest('.progress-bar')) {
            return;
          }
          _this.togglePlay();

          // 如果是静音状态，点击屏幕时恢复声音
          if (_this.video.muted) {
            _this.video.muted = false;
            _this.trigger('volumechange', _this.video.volume);
          }
        });
      }
    }

    /**
     * 智能判断横竖屏
     * 横屏 -> contain (完整显示，上下留黑边)
     * 竖屏 -> cover (裁剪铺满，沉浸式)
     */
  }, {
    key: "checkOrientation",
    value: function checkOrientation() {
      if (!this.video.videoWidth || !this.video.videoHeight) return;
      var videoRatio = this.video.videoWidth / this.video.videoHeight;
      // 查找包含播放器的父容器（通常有 .player-container 类）
      var container = this.video.closest('.player-container') || this.container;
      if (!container) return;
      var isFeed = document.body.classList.contains('feed-body') || !!this.video.closest('.feed-container');
      if (isFeed) {
        this.video.style.objectFit = 'cover';
        return;
      }
      var containerRatio = container.clientWidth / container.clientHeight;
      if (containerRatio > videoRatio) {
        this.video.style.objectFit = 'contain';
      } else {
        this.video.style.objectFit = 'cover';
      }
    }
  }, {
    key: "loadSources",
    value: function loadSources() {
      var _this2 = this;
      if (!this.options.sources || !this.options.sources.length) return;

      // 清理旧源
      while (this.video.firstChild) this.video.removeChild(this.video.firstChild);
      var source = this.options.sources[0];
      // 优先使用 src 属性，兼容性更好
      this.video.src = source.url;
      this.video.load();

      // 自动播放逻辑
      if (this.options.autoplay) {
        // 尝试有声自动播放
        this.video.muted = false;
        var p = this.video.play();
        if (p !== undefined) {
          p.then(function () {
            console.log('✅ 自动播放成功 (有声)');
            _this2.trigger('play', _this2.state);
          })["catch"](function (e) {
            console.warn('ℹ️ 有声自动播放被拦截，降级为静音', e);
            _this2.video.muted = true;
            _this2.video.play();
          });
        }
      }
    }

    // --- 控制方法 ---
  }, {
    key: "togglePlay",
    value: function togglePlay() {
      if (this.video.paused) this.play();else this.pause();
    }
  }, {
    key: "play",
    value: function play() {
      this.video.play()["catch"](function (e) {
        return console.error('Play error:', e);
      });
    }
  }, {
    key: "pause",
    value: function pause() {
      this.video.pause();
    }
  }, {
    key: "seek",
    value: function seek(time) {
      if (isFinite(time)) this.video.currentTime = time;
    }
  }, {
    key: "toggleMute",
    value: function toggleMute() {
      this.video.muted = !this.video.muted;
      this.trigger('volumechange', this.video.muted ? 0 : this.video.volume);
    }
  }, {
    key: "toggleFullscreen",
    value: function toggleFullscreen() {
      var _this3 = this;
      var root = document.getElementById('player'); // 全屏整个容器，这样 UI 也会跟着全屏

      if (!document.fullscreenElement) {
        if (root !== null && root !== void 0 && root.requestFullscreen) {
          root.requestFullscreen().then(function () {
            var _window$screen;
            if (_this3.state.isLandscape && (_window$screen = window.screen) !== null && _window$screen !== void 0 && _window$screen.orientation) {
              try {
                window.screen.orientation.lock('landscape')["catch"](function (e) {
                  console.warn('设备不支持强制横屏或需要 HTTPS 环境:', e);
                });
              } catch (e) {}
            }
          })["catch"](function (err) {
            console.error("\u5168\u5C4F\u5931\u8D25: ".concat(err.message));
          });
        } else if (this.video.webkitEnterFullscreen) {
          this.video.webkitEnterFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen().then(function () {
            var _window$screen2;
            if ((_window$screen2 = window.screen) !== null && _window$screen2 !== void 0 && (_window$screen2 = _window$screen2.orientation) !== null && _window$screen2 !== void 0 && _window$screen2.unlock) {
              window.screen.orientation.unlock();
            }
          });
        }
      }
    }

    // --- 事件订阅系统 ---
  }, {
    key: "on",
    value: function on(event, callback) {
      if (!this.events[event]) this.events[event] = [];
      this.events[event].push(callback);
    }
  }, {
    key: "off",
    value: function off(event, callback) {
      if (this.events[event]) {
        this.events[event] = this.events[event].filter(function (cb) {
          return cb !== callback;
        });
      }
    }
  }, {
    key: "trigger",
    value: function trigger(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      if (this.events[event]) {
        this.events[event].forEach(function (cb) {
          return cb.apply(void 0, args);
        });
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.pause();
      this.events = {};
      this.container.classList.remove('global-shorts-player');
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoPlayer);

/***/ },

/***/ 225
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIError: () => (/* binding */ APIError),
/* harmony export */   adminAPI: () => (/* binding */ adminAPI),
/* harmony export */   api: () => (/* binding */ api),
/* harmony export */   apiUtils: () => (/* binding */ apiUtils),
/* harmony export */   authAPI: () => (/* binding */ authAPI),
/* harmony export */   categoryAPI: () => (/* binding */ categoryAPI),
/* harmony export */   commentsAPI: () => (/* binding */ commentsAPI),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   dramaAPI: () => (/* binding */ dramaAPI),
/* harmony export */   languageAPI: () => (/* binding */ languageAPI),
/* harmony export */   userAPI: () => (/* binding */ userAPI)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// src/scripts/core/api.js

/**
 * 统一API管理模块
 * 所有接口请求都通过这里，方便统一处理错误、添加token等
 */

var API_BASE = '';
var apiUtils = {
  getToken: function getToken() {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
  },
  getAuthHeader: function getAuthHeader() {
    var token = apiUtils.getToken();
    return token ? {
      'Authorization': "Bearer ".concat(token)
    } : {};
  }
};
function request(_x) {
  return _request.apply(this, arguments);
}
function _request() {
  _request = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(endpoint) {
    var options,
      url,
      defaultOptions,
      response,
      errorMsg,
      errorData,
      _args = arguments,
      _t,
      _t2;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
          url = endpoint.startsWith('http') ? endpoint : "".concat(API_BASE).concat(endpoint);
          defaultOptions = {
            headers: _objectSpread(_objectSpread({
              'Content-Type': 'application/json'
            }, apiUtils.getAuthHeader()), options.headers)
          };
          _context.p = 1;
          _context.n = 2;
          return fetch(url, _objectSpread(_objectSpread({}, defaultOptions), options));
        case 2:
          response = _context.v;
          if (response.ok) {
            _context.n = 7;
            break;
          }
          errorMsg = response.statusText;
          _context.p = 3;
          _context.n = 4;
          return response.json();
        case 4:
          errorData = _context.v;
          errorMsg = errorData.error || errorMsg;
          _context.n = 6;
          break;
        case 5:
          _context.p = 5;
          _t = _context.v;
        case 6:
          throw new APIError(errorMsg, response.status);
        case 7:
          _context.n = 8;
          return response.json();
        case 8:
          return _context.a(2, _context.v);
        case 9:
          _context.p = 9;
          _t2 = _context.v;
          if (!(_t2 instanceof APIError)) {
            _context.n = 10;
            break;
          }
          throw _t2;
        case 10:
          throw new APIError(_t2.message || '网络错误');
        case 11:
          return _context.a(2);
      }
    }, _callee, null, [[3, 5], [1, 9]]);
  }));
  return _request.apply(this, arguments);
}
var APIError = /*#__PURE__*/function (_Error) {
  function APIError(message) {
    var _this;
    var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    _classCallCheck(this, APIError);
    _this = _callSuper(this, APIError, [message]);
    _this.name = 'APIError';
    _this.status = status;
    return _this;
  }
  _inherits(APIError, _Error);
  return _createClass(APIError);
}(/*#__PURE__*/_wrapNativeSuper(Error));

// ========== 认证相关 ==========
var authAPI = {
  login: function login(email, password) {
    return request('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
  },
  register: function register(userData) {
    return request('/api/register', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  }
};

// ========== 用户相关（含前台套餐） ==========
var userAPI = {
  getMe: function getMe() {
    return request('/api/user/me');
  },
  getProfile: function getProfile(userId) {
    return request("/api/user/".concat(userId));
  },
  updateProfile: function updateProfile(userId, data) {
    return request("/api/user/".concat(userId), {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },
  getWatchHistory: function getWatchHistory(userId) {
    return request("/api/user/".concat(userId, "/history"));
  },
  getUnlockedDramas: function getUnlockedDramas(userId) {
    return request("/api/user/".concat(userId, "/unlocked-dramas"));
  },
  unlockDrama: function unlockDrama(dramaId) {
    return request('/api/user/unlock-drama', {
      method: 'POST',
      body: JSON.stringify({
        drama_id: dramaId
      })
    });
  },
  getStats: function getStats() {
    return request('/api/user/stats');
  },
  getTransactions: function getTransactions(userId) {
    return request("/api/user/".concat(userId, "/transactions"));
  },
  checkin: function checkin() {
    return request('/api/user/checkin', {
      method: 'POST'
    });
  },
  getUserCheckins: function getUserCheckins() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var query = new URLSearchParams(params).toString();
    return request("/api/user/checkins".concat(query ? '?' + query : ''));
  },
  getUnlockedEpisodes: function getUnlockedEpisodes(userId) {
    return request("/api/user/".concat(userId, "/unlocked-episodes"));
  },
  unlockEpisode: function unlockEpisode(episodeId, dramaId) {
    return request('/api/user/unlock-episode', {
      method: 'POST',
      body: JSON.stringify({
        episode_id: episodeId,
        drama_id: dramaId
      })
    });
  },
  withdraw: function withdraw(data) {
    return request('/api/user/withdraw', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },
  // ===== 新增：前台套餐接口 =====
  getCoinPackages: function getCoinPackages() {
    return request('/api/coin-packages');
  },
  // 获取所有启用的金币套餐
  getVipPlans: function getVipPlans() {
    return request('/api/vip-plans');
  },
  // 获取所有启用的VIP套餐

  // ===== 支付相关（需后端实现）=====
  rechargeCoin: function rechargeCoin(data) {
    return request('/api/user/recharge', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },
  upgradeVip: function upgradeVip(data) {
    return request('/api/user/upgrade-vip', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
};

// ========== 分类 ==========
var categoryAPI = {
  getList: function getList() {
    return request('/api/categories');
  }
};

// ========== 语言/多语言 ==========
var languageAPI = {
  getList: function getList() {
    return request('/api/languages');
  },
  getTranslations: function getTranslations(langCode) {
    return request("/api/translations/".concat(langCode));
  }
};

// ========== 剧集相关 ==========
var dramaAPI = {
  getList: function getList() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var query = new URLSearchParams();

    // 添加所有传入的参数
    Object.entries(params).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      if (value !== '' && value !== null && value !== undefined) {
        query.append(key, value);
      }
    });

    // 只有在没有指定语言时才自动添加
    if (!params.language) {
      var _i18n;
      var userLang = localStorage.getItem('language') || ((_i18n = i18n) === null || _i18n === void 0 ? void 0 : _i18n.currentLang) || 'en-US';
      query.append('language', userLang);
    }
    var queryString = query.toString();
    return request("/api/dramas".concat(queryString ? '?' + queryString : ''));
  },
  getDetail: function getDetail(id) {
    return request("/api/dramas/".concat(id));
  },
  getEpisodes: function getEpisodes(dramaId) {
    return request("/api/episodes?drama_id=".concat(dramaId));
  },
  getEpisode: function getEpisode(id) {
    return request("/api/episode/".concat(id));
  },
  recordPlay: function recordPlay(data) {
    return request('/api/drama/play', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },
  like: function like(dramaId) {
    return request("/api/dramas/".concat(dramaId, "/like"), {
      method: 'POST'
    });
  },
  unlike: function unlike(dramaId) {
    return request("/api/dramas/".concat(dramaId, "/unlike"), {
      method: 'POST'
    });
  },
  getLikeStatus: function getLikeStatus(dramaId) {
    return request("/api/dramas/".concat(dramaId, "/like-status"), {
      method: 'GET'
    });
  },
  favorite: function favorite(dramaId) {
    return request("/api/dramas/".concat(dramaId, "/favorite"), {
      method: 'POST'
    });
  },
  unfavorite: function unfavorite(dramaId) {
    return request("/api/dramas/".concat(dramaId, "/unfavorite"), {
      method: 'POST'
    });
  },
  getFavoriteStatus: function getFavoriteStatus(dramaId) {
    return request("/api/dramas/".concat(dramaId, "/favorite-status"), {
      method: 'GET'
    });
  },
  getFavorites: function getFavorites(userId) {
    return request("/api/user/".concat(userId, "/favorites"));
  },
  share: function share(data) {
    return request('/api/shares', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
};

// ========== 评论系统 ==========
var commentsAPI = {
  getList: function getList(targetId) {
    var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
    return request("/api/comments?targetId=".concat(targetId, "&page=").concat(page, "&limit=").concat(limit));
  },
  getReplies: function getReplies(commentId) {
    var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
    return request("/api/comments?parentId=".concat(commentId, "&limit=").concat(limit));
  },
  create: function create(data) {
    return request('/api/comments', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },
  like: function like(commentId) {
    return request("/api/comments/".concat(commentId, "/like"), {
      method: 'POST'
    });
  },
  unlike: function unlike(commentId) {
    return request("/api/comments/".concat(commentId, "/like"), {
      method: 'DELETE'
    });
  },
  "delete": function _delete(commentId) {
    return request("/api/comments/".concat(commentId), {
      method: 'DELETE'
    });
  }
};

// ========== 后台管理 ==========
var adminAPI = {
  getStats: function getStats() {
    return request('/api/admin/stats');
  },
  getUsers: function getUsers() {
    return request('/api/admin/users');
  },
  deleteUser: function deleteUser(userId) {
    return request("/api/admin/users/".concat(userId), {
      method: 'DELETE'
    });
  },
  setVIP: function setVIP(userId, isVip, expiresAt) {
    return request("/api/admin/users/".concat(userId), {
      method: 'PUT',
      body: JSON.stringify({
        is_vip: isVip,
        vip_expires_at: expiresAt
      })
    });
  },
  getDramas: function getDramas() {
    return request('/api/admin/dramas');
  },
  createDrama: function createDrama(data) {
    return request('/api/admin/dramas', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },
  updateDrama: function updateDrama(id, data) {
    return request("/api/admin/dramas/".concat(id), {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },
  deleteDrama: function deleteDrama(id) {
    return request("/api/admin/dramas/".concat(id), {
      method: 'DELETE'
    });
  },
  getEpisodes: function getEpisodes(dramaId) {
    return request("/api/admin/episodes?drama_id=".concat(dramaId));
  },
  createEpisode: function createEpisode(data) {
    return request('/api/admin/episodes', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },
  updateEpisode: function updateEpisode(id, data) {
    return request("/api/admin/episodes/".concat(id), {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },
  deleteEpisode: function deleteEpisode(id) {
    return request("/api/admin/episodes/".concat(id), {
      method: 'DELETE'
    });
  }
};
var api = {
  auth: authAPI,
  drama: dramaAPI,
  user: userAPI,
  admin: adminAPI,
  category: categoryAPI,
  language: languageAPI,
  comments: commentsAPI,
  utils: apiUtils,
  request: request
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);

/***/ },

/***/ 527
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(225);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// src/scripts/core/auth.js


var Auth = /*#__PURE__*/function () {
  function Auth() {
    _classCallCheck(this, Auth);
    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
    this.user = this.loadUser();

    // 自动初始化
    this.init();
  }

  // 初始化，从存储恢复用户信息
  return _createClass(Auth, [{
    key: "init",
    value: function init() {
      if (this.token) {
        try {
          var savedUser = localStorage.getItem('user') || sessionStorage.getItem('user');
          if (savedUser) {
            this.user = JSON.parse(savedUser);
            console.log('Auth initialized with user:', this.user);
          }
        } catch (e) {
          console.error('Failed to parse user data:', e);
          this.logout();
        }
      }
    }

    // 加载用户信息
  }, {
    key: "loadUser",
    value: function loadUser() {
      try {
        var savedUser = localStorage.getItem('user') || sessionStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
      } catch (e) {
        return null;
      }
    }

    // ========== 原有接口（保持不变） ==========

    // 检查是否已登录
  }, {
    key: "isLoggedIn",
    value: function isLoggedIn() {
      return !!(this.token && this.user);
    }

    // 检查是否是VIP
  }, {
    key: "isVIP",
    value: function isVIP() {
      var _this$user, _this$user2;
      return ((_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.is_vip) || ((_this$user2 = this.user) === null || _this$user2 === void 0 ? void 0 : _this$user2.isVip) || false;
    }

    // 设置token（兼容原有接口）
  }, {
    key: "setToken",
    value: function setToken(token) {
      var remember = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.token = token;
      if (remember) {
        localStorage.setItem('token', token);
      } else {
        sessionStorage.setItem('token', token);
      }
    }

    // 登出
  }, {
    key: "logout",
    value: function logout() {
      console.log('Logging out user:', this.user);

      // 触发登出事件
      window.dispatchEvent(new CustomEvent('auth:logout', {
        detail: {
          user: this.user
        }
      }));
      this.token = null;
      this.user = null;

      // 清除所有存储
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      console.log('User logged out');
    }

    // 设置/更新用户信息（用于个人中心修改资料后）
  }, {
    key: "setUser",
    value: function setUser(userData) {
      this.user = _objectSpread(_objectSpread({}, this.user), userData);

      // 更新存储
      var storage = localStorage.getItem('token') ? localStorage : sessionStorage;
      storage.setItem('user', JSON.stringify(this.user));

      // 触发更新事件
      window.dispatchEvent(new CustomEvent('auth:update', {
        detail: {
          user: this.user
        }
      }));
      console.log('User updated:', this.user);
    }

    // ========== 新增功能（扩展接口） ==========

    // 获取当前用户
  }, {
    key: "getCurrentUser",
    value: function getCurrentUser() {
      return this.user;
    }

    // 获取token
  }, {
    key: "getToken",
    value: function getToken() {
      return this.token;
    }

    // 登录（完整版）
  }, {
    key: "login",
    value: function () {
      var _login = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(email, password) {
        var rememberMe,
          response,
          token,
          _args = arguments,
          _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              rememberMe = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
              console.log('Auth.login called with:', {
                email: email,
                rememberMe: rememberMe
              });
              _context.p = 1;
              _context.n = 2;
              return _api_js__WEBPACK_IMPORTED_MODULE_0__.api.auth.login(email, password);
            case 2:
              response = _context.v;
              // 改这里！去掉大括号

              console.log('Auth.login response:', response);
              if (!response.success) {
                _context.n = 3;
                break;
              }
              this.user = response.user;

              // 如果有 token，优先用后端的；否则生成一个临时 token
              token = response.token || "temp_".concat(Date.now()); // 存 token
              if (rememberMe) {
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(this.user));
              } else {
                sessionStorage.setItem('token', token);
                sessionStorage.setItem('user', JSON.stringify(this.user));
              }

              // 更新内存中的 token
              this.token = token;

              // 触发登录事件 - 添加详细日志
              console.log('Dispatching auth:login event with user:', this.user);
              window.dispatchEvent(new CustomEvent('auth:login', {
                detail: {
                  user: this.user
                }
              }));
              console.log('Login successful:', this.user);
              return _context.a(2, {
                success: true,
                user: this.user,
                token: token
              });
            case 3:
              console.log('Login failed:', response.error);
              return _context.a(2, {
                success: false,
                error: response.error || '登录失败'
              });
            case 4:
              _context.p = 4;
              _t = _context.v;
              console.error('Login error:', _t);
              return _context.a(2, {
                success: false,
                error: _t.message || '登录失败，请重试'
              });
          }
        }, _callee, this, [[1, 4]]);
      }));
      function login(_x, _x2) {
        return _login.apply(this, arguments);
      }
      return login;
    }() // 注册
  }, {
    key: "register",
    value: function () {
      var _register = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(userData) {
        var response, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              console.log('Auth.register called with:', userData);
              _context2.p = 1;
              _context2.n = 2;
              return _api_js__WEBPACK_IMPORTED_MODULE_0__.api.auth.register(userData);
            case 2:
              response = _context2.v;
              console.log('Auth.register response:', response);
              if (!response.success) {
                _context2.n = 3;
                break;
              }
              return _context2.a(2, {
                success: true,
                message: response.message || '注册成功'
              });
            case 3:
              return _context2.a(2, {
                success: false,
                error: response.error || '注册失败'
              });
            case 4:
              _context2.p = 4;
              _t2 = _context2.v;
              console.error('Register error:', _t2);
              return _context2.a(2, {
                success: false,
                error: _t2.message || '注册失败，请重试'
              });
          }
        }, _callee2, null, [[1, 4]]);
      }));
      function register(_x3) {
        return _register.apply(this, arguments);
      }
      return register;
    }() // 更新用户信息
  }, {
    key: "updateUser",
    value: function updateUser(userData) {
      this.user = _objectSpread(_objectSpread({}, this.user), userData);

      // 更新存储
      var userStr = JSON.stringify(this.user);
      if (localStorage.getItem('user')) {
        localStorage.setItem('user', userStr);
      } else if (sessionStorage.getItem('user')) {
        sessionStorage.setItem('user', userStr);
      }

      // 触发更新事件
      window.dispatchEvent(new CustomEvent('auth:update', {
        detail: {
          user: this.user
        }
      }));
      console.log('User updated:', this.user);
    }

    // 获取认证头信息（用于API请求）
  }, {
    key: "getAuthHeader",
    value: function getAuthHeader() {
      return this.token ? {
        'Authorization': "Bearer ".concat(this.token)
      } : {};
    }
  }]);
}(); // 导出单例
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Auth());

/***/ },

/***/ 93
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(225);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var I18n = /*#__PURE__*/function () {
  function I18n() {
    _classCallCheck(this, I18n);
    // 1. 优先使用 localStorage 保存的语言
    var savedLang = localStorage.getItem('language');

    // 2. 如果没有，尝试获取浏览器语言
    if (!savedLang) {
      var browserLang = navigator.language;
      savedLang = this.mapBrowserLang(browserLang);
    }

    // 3. 最终默认英语
    this.currentLang = savedLang || 'en-US';
    this.translations = {};
    this.languages = [];
  }

  // 映射浏览器语言到你的支持语言
  return _createClass(I18n, [{
    key: "mapBrowserLang",
    value: function mapBrowserLang(browserLang) {
      var map = {
        // 简体中文
        'zh': 'zh-CN',
        'zh-CN': 'zh-CN',
        'zh-Hans': 'zh-CN',
        'zh-Hans-CN': 'zh-CN',
        // 繁体中文
        'zh-TW': 'zh-TW',
        'zh-HK': 'zh-TW',
        'zh-MO': 'zh-TW',
        'zh-Hant': 'zh-TW',
        'zh-Hant-TW': 'zh-TW',
        // 英语
        'en': 'en-US',
        'en-US': 'en-US',
        'en-GB': 'en-US',
        'en-AU': 'en-US',
        'en-CA': 'en-US',
        // 西班牙语
        'es': 'es-ES',
        'es-ES': 'es-ES',
        'es-MX': 'es-ES',
        'es-AR': 'es-ES',
        // 法语
        'fr': 'fr-FR',
        'fr-FR': 'fr-FR',
        'fr-CA': 'fr-FR',
        'fr-BE': 'fr-FR',
        // 德语
        'de': 'de-DE',
        'de-DE': 'de-DE',
        'de-AT': 'de-DE',
        'de-CH': 'de-DE',
        // 意大利语
        'it': 'it-IT',
        'it-IT': 'it-IT',
        'it-CH': 'it-IT',
        // 葡萄牙语
        'pt': 'pt-PT',
        'pt-PT': 'pt-PT',
        'pt-BR': 'pt-PT',
        // 俄语
        'ru': 'ru-RU',
        'ru-RU': 'ru-RU',
        'ru-UA': 'ru-RU',
        // 阿拉伯语
        'ar': 'ar-SA',
        'ar-SA': 'ar-SA',
        'ar-AE': 'ar-SA',
        'ar-EG': 'ar-SA',
        // 印地语
        'hi': 'hi-IN',
        'hi-IN': 'hi-IN',
        // 泰语
        'th': 'th-TH',
        'th-TH': 'th-TH',
        // 越南语
        'vi': 'vi-VN',
        'vi-VN': 'vi-VN',
        // 印尼语
        'id': 'id-ID',
        'id-ID': 'id-ID',
        'in': 'id-ID'
      };

      // 精确匹配
      if (map[browserLang]) return map[browserLang];

      // 匹配前缀（如 'zh-HK' 映射到 'zh-TW'）
      var prefix = browserLang.split('-')[0];
      if (map[prefix]) return map[prefix];

      // 都不匹配，返回 null，使用默认英语
      return null;
    }
  }, {
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(lang) {
        var map;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              // 兜底映射：如果传入的是简写，转为完整代码
              map = {
                'zh': 'zh-CN',
                'en': 'en-US',
                'es': 'es-ES',
                'fr': 'fr-FR',
                'de': 'de-DE',
                'it': 'it-IT',
                'pt': 'pt-PT',
                'ru': 'ru-RU',
                'ar': 'ar-SA',
                'hi': 'hi-IN',
                'th': 'th-TH',
                'vi': 'vi-VN',
                'id': 'id-ID'
              };
              if (map[lang]) lang = map[lang];
              this.currentLang = lang || this.currentLang;
              localStorage.setItem('language', this.currentLang);
              _context.n = 1;
              return this.loadLanguages();
            case 1:
              _context.n = 2;
              return this.loadTranslations();
            case 2:
              this.updateDOM();
              this.renderLanguageSwitcher();
            case 3:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function init(_x) {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "loadLanguages",
    value: function () {
      var _loadLanguages = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              console.log('📡 正在从后台获取语言列表...');
              _context2.n = 1;
              return _api_js__WEBPACK_IMPORTED_MODULE_0__.api.language.getList();
            case 1:
              response = _context2.v;
              if (response.success && Array.isArray(response.data)) {
                this.languages = response.data;
                console.log('✅ 语言列表获取成功:', this.languages);
              } else {
                console.warn('⚠️ 语言列表接口返回格式异常，使用空数组');
                this.languages = [];
              }
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t = _context2.v;
              console.error('❌ 加载语言列表失败，网络错误:', _t);
              // 兜底：至少提供一个默认语言选项
              this.languages = [{
                code: 'en-US',
                name: 'English',
                native_name: 'English'
              }];
            case 3:
              return _context2.a(2);
          }
        }, _callee2, this, [[0, 2]]);
      }));
      function loadLanguages() {
        return _loadLanguages.apply(this, arguments);
      }
      return loadLanguages;
    }()
  }, {
    key: "updateElement",
    value: function updateElement(element) {
      var _this = this;
      if (!element) return;
      if (element.hasAttribute && element.hasAttribute('data-i18n')) {
        var key = element.getAttribute('data-i18n');
        if (key && this.translations[key]) {
          element.textContent = this.translations[key];
        }
      }
      if (element.hasAttribute && element.hasAttribute('data-i18n-placeholder')) {
        var _key = element.getAttribute('data-i18n-placeholder');
        if (_key && this.translations[_key]) {
          element.placeholder = this.translations[_key];
        }
      }
      element.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        if (key && _this.translations[key]) {
          el.textContent = _this.translations[key];
        }
      });
      element.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
        var key = el.getAttribute('data-i18n-placeholder');
        if (key && _this.translations[key]) {
          el.placeholder = _this.translations[key];
        }
      });
    }
  }, {
    key: "renderLanguageSwitcher",
    value: function renderLanguageSwitcher() {
      var _this2 = this,
        _document$getElementB;
      var container = document.getElementById('navbarLangSwitcher');
      if (!container) container = document.getElementById('authLangSwitcher');
      if (!container) return;

      // 查找当前语言对象
      var currentLangObj = this.languages.find(function (l) {
        return l.code === _this2.currentLang;
      });
      // 如果找不到，用第一个或默认显示
      if (!currentLangObj && this.languages.length > 0) {
        currentLangObj = this.languages[0];
      }
      if (!currentLangObj) {
        currentLangObj = {
          native_name: 'EN'
        };
      }
      container.innerHTML = "\n            <div class=\"language-switcher\" id=\"languageSwitcher\" \n                 style=\"position: relative !important;\n                        top: auto !important; right: auto !important; \n                        display: flex !important; align-items: center !important; gap: 5px !important; \n                        cursor: pointer !important; padding: 6px 12px !important; \n                        background: rgba(255,255,255,0.1) !important; border-radius: 20px !important; \n                        color: white !important; margin: 0 !important; z-index: 10 !important;\">\n                <i class=\"fas fa-globe\"></i>\n                <span id=\"currentLang\" class=\"hide-on-mobile\">".concat(currentLangObj.native_name, "</span>\n                <i class=\"fas fa-chevron-down\" style=\"font-size: 10px;\"></i>\n            </div>\n        ");
      (_document$getElementB = document.getElementById('languageSwitcher')) === null || _document$getElementB === void 0 || _document$getElementB.addEventListener('click', function () {
        return _this2.showLanguageMenu();
      });
    }
  }, {
    key: "showLanguageMenu",
    value: function showLanguageMenu() {
      var _this3 = this;
      if (this.languages.length === 0) return;
      var existing = document.querySelector('.language-menu');
      if (existing) existing.remove();
      var switcher = document.getElementById('languageSwitcher');
      if (!switcher) return;
      var rect = switcher.getBoundingClientRect();
      var menu = document.createElement('div');
      menu.className = 'language-menu';
      menu.style.position = 'absolute';
      menu.style.zIndex = '2000';
      menu.style.maxHeight = '60vh';
      menu.style.overflowY = 'auto';
      var minWidth = Math.max(rect.width, 120);
      menu.style.minWidth = "".concat(minWidth, "px");
      var padding = 8;
      var top = rect.bottom + window.scrollY + 5;
      var left = rect.left + window.scrollX;
      var vw = window.innerWidth;
      if (left + minWidth + padding > vw) {
        left = Math.max(padding, vw - minWidth - padding);
      }
      menu.style.top = "".concat(top, "px");
      menu.style.left = "".concat(left, "px");
      menu.innerHTML = "\n            <div class=\"language-menu-content\">\n                ".concat(this.languages.map(function (lang) {
        return "\n                    <div class=\"language-option ".concat(lang.code === _this3.currentLang ? 'active' : '', "\" data-lang=\"").concat(lang.code, "\">\n                        ").concat(lang.native_name || lang.name, "\n                    </div>\n                ");
      }).join(''), "\n            </div>\n        ");
      document.body.appendChild(menu);
      menu.querySelectorAll('.language-option').forEach(function (opt) {
        opt.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
          var lang;
          return _regenerator().w(function (_context3) {
            while (1) switch (_context3.n) {
              case 0:
                lang = opt.dataset.lang;
                _context3.n = 1;
                return _this3.setLanguage(lang);
              case 1:
                menu.remove();
              case 2:
                return _context3.a(2);
            }
          }, _callee3);
        })));
      });
      setTimeout(function () {
        document.addEventListener('click', function closeMenu(e) {
          if (!menu.contains(e.target) && !e.target.closest('#languageSwitcher')) {
            menu.remove();
            document.removeEventListener('click', closeMenu);
          }
        });
      });
    }
  }, {
    key: "loadTranslations",
    value: function () {
      var _loadTranslations = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var response, _t2;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              console.log("\uD83D\uDCE1 \u6B63\u5728\u4ECE\u540E\u53F0\u6570\u636E\u5E93\u83B7\u53D6 [".concat(this.currentLang, "] \u7FFB\u8BD1\u5305..."));
              _context4.n = 1;
              return _api_js__WEBPACK_IMPORTED_MODULE_0__.api.language.getTranslations(this.currentLang);
            case 1:
              response = _context4.v;
              if (response.success && response.data) {
                // 处理嵌套结构
                if (response.data[this.currentLang]) {
                  this.translations = response.data[this.currentLang];
                } else {
                  this.translations = response.data;
                }
                console.log("\u2705 [".concat(this.currentLang, "] \u540E\u53F0\u7FFB\u8BD1\u6570\u636E\u52A0\u8F7D\u6210\u529F! (\u5171\u52A0\u8F7D ").concat(Object.keys(this.translations).length, " \u6761)"));
                window.dispatchEvent(new CustomEvent('i18n:translations-loaded', {
                  detail: {
                    lang: this.currentLang
                  }
                }));
              } else {
                console.warn("\u26A0\uFE0F \u540E\u53F0\u8FD4\u56DE\u683C\u5F0F\u5F02\u5E38\u6216\u65E0\u6570\u636E", response);
                this.translations = {};
              }
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t2 = _context4.v;
              console.error("\u274C \u83B7\u53D6 ".concat(this.currentLang, " \u540E\u53F0\u7FFB\u8BD1\u5931\u8D25:"), _t2);
              this.translations = {};
            case 3:
              return _context4.a(2);
          }
        }, _callee4, this, [[0, 2]]);
      }));
      function loadTranslations() {
        return _loadTranslations.apply(this, arguments);
      }
      return loadTranslations;
    }()
  }, {
    key: "setLanguage",
    value: function () {
      var _setLanguage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(lang) {
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              if (lang) {
                _context5.n = 1;
                break;
              }
              return _context5.a(2);
            case 1:
              console.log("\uD83C\uDF10 \u5207\u6362\u8BED\u8A00\u4E3A: ".concat(lang));
              this.currentLang = lang;
              localStorage.setItem('language', lang);
              _context5.n = 2;
              return this.loadTranslations();
            case 2:
              this.updateDOM();
              this.renderLanguageSwitcher();

              // 触发语言切换事件，通知其他组件
              window.dispatchEvent(new CustomEvent('language:changed', {
                detail: {
                  lang: lang
                }
              }));
              console.log("\u2705 \u8BED\u8A00\u5DF2\u5207\u6362\u4E3A: ".concat(lang));
            case 3:
              return _context5.a(2);
          }
        }, _callee5, this);
      }));
      function setLanguage(_x2) {
        return _setLanguage.apply(this, arguments);
      }
      return setLanguage;
    }()
  }, {
    key: "t",
    value: function t(key, params) {
      var value = this.translations[key];

      // 如果没找到，尝试嵌套结构
      if (value === undefined && this.translations[this.currentLang]) {
        value = this.translations[this.currentLang][key];
      }
      if (value === undefined) value = key;
      if (params && _typeof(params) === 'object') {
        Object.keys(params).forEach(function (param) {
          var escapedParam = param.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          value = value.replace(new RegExp("\\{".concat(escapedParam, "\\}"), 'g'), params[param]);
        });
      }
      return value;
    }
  }, {
    key: "updateDOM",
    value: function updateDOM() {
      var _this4 = this;
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        if (!key) return;
        var options = {};
        var optionsAttr = el.getAttribute('data-i18n-options');
        if (optionsAttr) {
          try {
            options = JSON.parse(optionsAttr);
          } catch (e) {
            console.warn('Failed to parse i18n options', optionsAttr);
          }
        }
        el.textContent = _this4.t(key, options);
      });
      document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
        var key = el.getAttribute('data-i18n-placeholder');
        if (key) {
          el.placeholder = _this4.t(key);
        }
      });
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new I18n());

/***/ },

/***/ 593
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* =========================================
   发现页 (Feed) 独立完整样式 - 仿红果/抖音短剧版
   ========================================= */

:root {
    --primary: #FF385C;
    --primary-dark: #E0314F;
    --secondary: #2D2F3B;
    --dark: #121212;
    --light-dark: #1E1E1E;
    --light: #F5F5F5;
    --gray: #888;
    --success: #00C853;
    --warning: #FFAB00;
    --vip-gold: #FFD700;
    --info: #2196F3;
    --bg-card: rgba(255, 255, 255, 0.05);
    --text-secondary: rgba(255, 255, 255, 0.7);

    /* UI 尺寸核心变量 */
    --nav-height: 53px; /* 底部导航栏基础高度 */
    --safe-bottom: env(safe-area-inset-bottom, 0px); /* 底部安全区(小白条) */
    --total-nav-height: calc(var(--nav-height) + var(--safe-bottom)); /* 导航栏总高度 */
    --progress-height: 2px; /* 进度条厚度，红果是极细线 */
    --actionbar-width: 88px; /* 右侧互动栏预留宽度，避免遮挡 */
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #000;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

body.feed-body {
    padding-bottom: 0 !important;
}

.feed-container {
    position: relative;
    width: 100%;
    height: 100vh;
    height: 100dvh;
    overflow: hidden;
    background: #000;
}

/* 全屏底部黑色渐变遮罩，增强文字可读性 */
.feed-container::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 40vh;
    background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%);
    pointer-events: none;
    z-index: 15;
}

.player-container {
    width: 100%;
    height: 100vh;
    height: 100dvh;
    position: relative;
    background: #000;
}

.player-video {
    width: 100% !important;
    height: 100% !important;
    position: absolute !important;
    top: 0;
    left: 0;
    z-index: 0;
    object-fit: cover;
}

/* ==================
   1. 底部导航栏
   ================== */
.bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: var(--total-nav-height);
    background: #15151a; 
    z-index: 100;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding: 6px 0 var(--safe-bottom);
    box-sizing: border-box;
}

body.feed-body .bottom-nav {
    border-top: none;
}
.nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    color: rgba(255,255,255,0.5);
    font-size: 11px;
    text-decoration: none;
    transition: color 0.2s;
    width: 60px;
    padding-bottom: 4px;
    line-height: 1.1;
}

.nav-item i { font-size: 22px; }
.nav-item.active { color: #fff; }

/* ==================
   2. 底部信息栏总容器
   ================== */
.overlay-bottom {
    position: fixed;
    bottom: var(--total-nav-height);
    left: 0;
    right: 0;
    width: 100%;
    padding-bottom: 0;
    z-index: 30;
    pointer-events: none;
}
.overlay-bottom > * {
    pointer-events: auto; 
}

/* 文本信息区 */
.drama-desc {
    padding: 0 calc(12px + var(--actionbar-width)) 0 12px;
    margin-bottom: 8px;
}

.drama-title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 4px;
    color: white;
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.drama-tags {
    font-size: 13px;
    color: rgba(255,255,255,0.9);
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}

/* 选集按钮与工具区 */
.bottom-toolbar {
    padding: 0 calc(12px + var(--actionbar-width)) 0 12px;
    margin-bottom: 0; /* 【关键修改】清空 margin，杜绝产生透明黑缝隙 */
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.episode-selector {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(255,255,255,0.12);
    padding: 6px 12px;
    border-radius: 6px; 
    color: white;
    font-size: 13px;
    backdrop-filter: blur(8px);
    cursor: pointer;
}

/* ==================
   3. 进度条 (强行包裹进导航栏)
   ================== */
.progress-area {
    width: 100%;
    height: 16px;
    display: flex;
    align-items: flex-end;
}

.progress-bar {
    width: 100%;
    height: var(--progress-height);
    background: rgba(255, 255, 255, 0.2);
    position: relative;
}

.progress-fill {
    height: 100%;
    background: var(--primary);
    width: 0%;
    position: absolute;
    top: 0;
    left: 0;
}

/* ==================
   4. 右侧互动栏
   ================== */
.overlay-right {
    position: fixed; 
    right: 8px;
    bottom: calc(var(--total-nav-height) + 40px); 
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    z-index: 60;
}

.action-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: none;
    border: none;
    color: white;
    gap: 2px;
    cursor: pointer;
    transition: transform 0.1s;
}

.action-item i {
    font-size: 32px;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4)); 
}

.action-item:active { transform: scale(0.9); }
.action-item .count {
    font-size: 12px;
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(0,0,0,0.8);
}
.action-item.active i { color: #FF3B5C; }

/* 签到 & 头像 */
.checkin-item i { color: #ffd966; }
.checkin-item.checked i { color: #888; filter: grayscale(0.5); }
.checkin-item.checked { pointer-events: none; }
.avatar-wrap { position: relative; margin-bottom: 10px; }
.user-avatar {
    width: 44px; height: 44px; border-radius: 50%;
    border: 1.5px solid white; object-fit: cover;
    display: flex; align-items: center; justify-content: center;
    background: linear-gradient(45deg, var(--primary), #FF6B8B);
    font-weight: bold; font-size: 18px; color: white;
}

/* ==================
   5. 其他播放器组件 (播放键、抽屉、Loading)
   ================== */
.pc-controls { display: flex; gap: 12px; }
.control-btn { background: none; border: none; color: white; font-size: 18px; cursor: pointer; }

.center-play-btn {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 60px; height: 60px; background: rgba(0,0,0,0.3); border-radius: 50%;
    display: flex; align-items: center; justify-content: center; color: white;
    font-size: 24px; backdrop-filter: blur(4px); pointer-events: none; z-index: 10;
}

/* ---------- 抽屉样式 ---------- */
.drawer-overlay {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.5); z-index: 1000; display: flex;
    align-items: flex-end; opacity: 0; pointer-events: none; transition: opacity 0.3s;
}
.drawer-overlay.active { opacity: 1; pointer-events: auto; }
.drawer-bottom-sheet {
    width: 100%; max-height: 75vh; background: #1f1f1f;
    border-radius: 16px 16px 0 0; transform: translateY(100%);
    transition: transform 0.3s cubic-bezier(0.1, 0.8, 0.2, 1);
    display: flex; flex-direction: column; color: white;
    padding-bottom: env(safe-area-inset-bottom);
}
.drawer-overlay.active .drawer-bottom-sheet { transform: translateY(0); }
.drawer-handle { width: 36px; height: 4px; background: rgba(255,255,255,0.2); border-radius: 2px; margin: 10px auto 0; }
.drawer-header { padding: 16px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); }
.close-drawer { background: none; border: none; color: rgba(255,255,255,0.5); font-size: 20px; cursor: pointer; padding: 5px; }
.drawer-scroll-content { flex: 1; overflow-y: auto; padding: 20px 16px; }

/* 评论抽屉专用 */
.comment-sheet { background: #ffffff; color: #333; }
.comment-sheet .drawer-header { border-bottom: 1px solid #eee; color: #000; }
.comment-sheet .close-drawer { color: #666; }
.comment-title { display: flex; align-items: baseline; gap: 8px; font-size: 16px; font-weight: 600; }
.comment-list { padding: 0 16px 80px; }
.comment-item { display: flex; gap: 12px; padding: 16px 0; border-bottom: 1px solid #f9f9f9; }
.comment-avatar { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; }
.comment-body { flex: 1; }
.comment-user { display: flex; justify-content: space-between; margin-bottom: 4px; }
.comment-user .name { font-size: 14px; color: #666; font-weight: 500; }
.like-btn { display: flex; flex-direction: column; align-items: center; color: #999; font-size: 12px; cursor: pointer; }
.like-btn i { font-size: 16px; margin-bottom: 2px; }
.like-btn.liked { color: #FF3B5C; }
.comment-text { font-size: 15px; color: #333; line-height: 1.5; margin-bottom: 8px; }
.comment-meta { display: flex; gap: 15px; font-size: 12px; color: #999; }
.expand-replies { display: inline-block; font-size: 13px; color: #5B75A6; margin-top: 8px; font-weight: 500; cursor: pointer; }
.comment-input-area {
    position: absolute; bottom: 0; left: 0; width: 100%; padding: 12px 16px; background: #fff;
    border-top: 1px solid #eee; padding-bottom: calc(12px + env(safe-area-inset-bottom)); z-index: 10;
}
.input-box { background: #f5f5f5; border-radius: 20px; display: flex; align-items: center; padding: 8px 16px; }
.input-box input { flex: 1; border: none; background: transparent; outline: none; font-size: 14px; color: #333; }
.send-btn { background: none; border: none; color: #FF3B5C; font-size: 18px; cursor: pointer; padding: 0 8px; }

/* 分享 & 更多设置 */
.share-flex { display: flex; gap: 24px; overflow-x: auto; padding-bottom: 10px; }
.share-item { display: flex; flex-direction: column; align-items: center; gap: 8px; flex-shrink: 0; min-width: 60px; cursor: pointer; }
.share-icon { width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; color: white; }
.share-icon.wa { background: #25D366; } .share-icon.fb { background: #1877F2; }
.share-icon.tw { background: #000000; } .share-icon.tg { background: #0088cc; }
.share-icon.cp { background: #666; }

.setting-row { margin-bottom: 24px; }
.setting-label { font-size: 14px; color: rgba(255,255,255,0.6); margin-bottom: 12px; display: flex; align-items: center; gap: 8px; }
.speed-options { display: flex; background: rgba(255,255,255,0.08); border-radius: 20px; overflow: hidden; }
.speed-options span { flex: 1; text-align: center; padding: 10px 0; font-size: 14px; color: rgba(255,255,255,0.8); cursor: pointer; transition: all 0.2s; }
.speed-options span.active { background: white; color: black; font-weight: bold; border-radius: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.2); }
.setting-item { display: flex; justify-content: space-between; align-items: center; padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 16px; cursor: pointer; }
.setting-left { display: flex; align-items: center; gap: 10px; }
.setting-right { color: rgba(255,255,255,0.5); font-size: 14px; display: flex; align-items: center; gap: 5px; }
.toggle-switch { position: relative; display: inline-block; width: 44px; height: 24px; }
.toggle-switch input { opacity: 0; width: 0; height: 0; }
.slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(255,255,255,0.2); transition: .4s; border-radius: 24px; }
.slider:before { position: absolute; content: ""; height: 18px; width: 18px; left: 3px; bottom: 3px; background-color: white; transition: .4s; border-radius: 50%; }
input:checked + .slider { background-color: #FF3B5C; }
input:checked + .slider:before { transform: translateX(20px); }

/* 加载和错误提示 */
.player-loading { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); display: flex; justify-content: center; align-items: center; z-index: 200; display: none; }
.loading-spinner { width: 40px; height: 40px; border: 3px solid rgba(255,255,255,0.3); border-top-color: #FF385C; border-radius: 50%; animation: spin 1s linear infinite; }
.player-error { position: fixed; bottom: 100px; left: 20px; right: 20px; background: rgba(0,0,0,0.8); color: #ff6b6b; padding: 12px; border-radius: 8px; text-align: center; z-index: 200; display: none; }
.player-toast { position: fixed; bottom: 120px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.8); color: #ffd966; padding: 8px 16px; border-radius: 30px; font-size: 14px; z-index: 1000; animation: fadeOut 2s ease-out forwards; white-space: nowrap; }

@keyframes spin { to { transform: rotate(360deg); } }
@keyframes fadeOut { 0% { opacity: 1; transform: translateX(-50%) translateY(0); } 70% { opacity: 1; } 100% { opacity: 0; transform: translateX(-50%) translateY(-20px); } }

/* 响应式调整 (PC 端/大屏适配) */
@media (min-width: 768px) {
    .feed-container { max-width: 450px; margin: 0 auto; border-radius: 12px; box-shadow: 0 0 20px rgba(0,0,0,0.5); }
    .bottom-nav, .overlay-bottom, .progress-area { max-width: 450px; left: 50%; transform: translateX(-50%); }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 314
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ 601
(module) {



module.exports = function (i) {
  return i[1];
};

/***/ },

/***/ 54
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_feed_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(593);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_feed_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_feed_css__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_feed_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_feed_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_feed_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_feed_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ 72
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ 659
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ 540
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ 56
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ 825
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ 113
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_pages_feed_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _core_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(225);
/* harmony import */ var _core_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93);
/* harmony import */ var _core_auth_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(527);
/* harmony import */ var _components_player_VideoPlayer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(431);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





var FeedOverlay = /*#__PURE__*/function () {
  function FeedOverlay(videoPlayer, feedPage) {
    _classCallCheck(this, FeedOverlay);
    this.player = videoPlayer;
    this.feedPage = feedPage;
    this.currentDrama = null;
    this.checkinCooldown = false;
    this.elements = {
      centerPlayBtn: document.getElementById('centerPlayBtn'),
      progressFill: document.getElementById('progressFill'),
      progressBar: document.getElementById('progressBar'),
      volumeBtn: document.getElementById('volumeBtn'),
      fullscreenBtn: document.getElementById('fullscreenBtn'),
      likeBtn: document.getElementById('btnLike'),
      likeCount: document.querySelector('#btnLike .count'),
      favoriteBtn: document.getElementById('btnFavorite'),
      favoriteCount: document.querySelector('#btnFavorite .count'),
      commentBtn: document.getElementById('btnComment'),
      commentCount: document.querySelector('#btnComment .count'),
      drawerCommentCount: document.getElementById('drawerCommentCount'),
      shareBtn: document.getElementById('btnShare'),
      shareCount: document.querySelector('#btnShare .count'),
      checkinBtn: document.getElementById('checkinBtn'),
      listBtn: document.getElementById('btnList'),
      moreBtn: document.getElementById('moreBtn'),
      speedOptions: document.querySelectorAll('#speedOptions span'),
      shareItems: document.querySelectorAll('.share-item'),
      dramaTitle: document.getElementById('dramaTitle'),
      dramaDescText: document.getElementById('dramaDescText'),
      totalEps: document.getElementById('totalEps'),
      drawerShare: document.getElementById('drawerShare'),
      drawerMore: document.getElementById('drawerMore'),
      drawerComment: document.getElementById('drawerComment'),
      authorAvatar: document.getElementById('authorAvatar')
    };
    this.commentCountState = {
      targetId: null,
      lastFetchAt: 0,
      loading: false
    };
    this.init();
  }
  return _createClass(FeedOverlay, [{
    key: "init",
    value: function init() {
      this.bindPlayerEvents();
      this.bindUIEvents();
      this.updateUserAvatar();
      this.updateCheckinStatus();
      this.loadLikeStatus();
      this.loadFavoriteStatus();
    }
  }, {
    key: "updateUserAvatar",
    value: function updateUserAvatar() {
      var user = _core_auth_js__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentUser();
      if (user && this.elements.authorAvatar) {
        var _user$nickname, _user$email;
        var initial = (((_user$nickname = user.nickname) === null || _user$nickname === void 0 ? void 0 : _user$nickname.charAt(0)) || ((_user$email = user.email) === null || _user$email === void 0 ? void 0 : _user$email.charAt(0)) || 'U').toUpperCase();
        this.elements.authorAvatar.textContent = initial;
      } else if (this.elements.authorAvatar) {
        this.elements.authorAvatar.textContent = 'U';
      }
    }
  }, {
    key: "bindPlayerEvents",
    value: function bindPlayerEvents() {
      var _this = this;
      this.player.on('timeupdate', function (currentTime, duration) {
        if (_this.elements.progressFill && duration > 0) {
          var percent = currentTime / duration * 100;
          _this.elements.progressFill.style.width = "".concat(percent, "%");
        }
      });
      this.player.on('play', function () {
        if (_this.elements.centerPlayBtn) _this.elements.centerPlayBtn.style.display = 'none';
      });
      this.player.on('pause', function () {
        if (_this.elements.centerPlayBtn) _this.elements.centerPlayBtn.style.display = 'flex';
      });
      this.player.on('volumechange', function (volume) {
        var _this$elements$volume;
        var icon = (_this$elements$volume = _this.elements.volumeBtn) === null || _this$elements$volume === void 0 ? void 0 : _this$elements$volume.querySelector('i');
        if (icon) {
          if (volume === 0) icon.className = 'fas fa-volume-off';else if (volume < 0.5) icon.className = 'fas fa-volume-down';else icon.className = 'fas fa-volume-up';
        }
      });
    }
  }, {
    key: "bindUIEvents",
    value: function bindUIEvents() {
      var _this2 = this,
        _this$elements$center,
        _document$querySelect,
        _this$elements$progre,
        _this$elements$volume2,
        _this$elements$fullsc,
        _this$elements$likeBt,
        _this$elements$favori,
        _this$elements$commen,
        _this$elements$shareB,
        _this$elements$checki,
        _this$elements$listBt;
      // 播放/暂停
      var togglePlay = function togglePlay() {
        return _this2.player.togglePlay();
      };
      (_this$elements$center = this.elements.centerPlayBtn) === null || _this$elements$center === void 0 || _this$elements$center.addEventListener('click', togglePlay);
      (_document$querySelect = document.querySelector('.player-container')) === null || _document$querySelect === void 0 || _document$querySelect.addEventListener('click', function (e) {
        if (e.target.closest('button') || e.target.closest('.overlay-right')) return;
        togglePlay();
        if (_this2.player.video.muted) {
          _this2.player.video.muted = false;
        }
      });

      // 进度条
      (_this$elements$progre = this.elements.progressBar) === null || _this$elements$progre === void 0 || _this$elements$progre.addEventListener('click', function (e) {
        var rect = _this2.elements.progressBar.getBoundingClientRect();
        var percent = (e.clientX - rect.left) / rect.width;
        var seekTime = percent * _this2.player.state.duration;
        _this2.player.seek(seekTime);
      });

      // 音量
      (_this$elements$volume2 = this.elements.volumeBtn) === null || _this$elements$volume2 === void 0 || _this$elements$volume2.addEventListener('click', function () {
        return _this2.player.toggleMute();
      });
      (_this$elements$fullsc = this.elements.fullscreenBtn) === null || _this$elements$fullsc === void 0 || _this$elements$fullsc.addEventListener('click', function () {
        return _this2.player.toggleFullscreen();
      });

      // 互动按钮
      (_this$elements$likeBt = this.elements.likeBtn) === null || _this$elements$likeBt === void 0 || _this$elements$likeBt.addEventListener('click', function () {
        return _this2.handleLike();
      });
      (_this$elements$favori = this.elements.favoriteBtn) === null || _this$elements$favori === void 0 || _this$elements$favori.addEventListener('click', function () {
        return _this2.handleFavorite();
      });
      (_this$elements$commen = this.elements.commentBtn) === null || _this$elements$commen === void 0 || _this$elements$commen.addEventListener('click', function () {
        return _this2.openCommentDrawer();
      });
      (_this$elements$shareB = this.elements.shareBtn) === null || _this$elements$shareB === void 0 || _this$elements$shareB.addEventListener('click', function () {
        return _this2.openShareDrawer();
      });
      (_this$elements$checki = this.elements.checkinBtn) === null || _this$elements$checki === void 0 || _this$elements$checki.addEventListener('click', function () {
        return _this2.handleCheckin();
      });
      (_this$elements$listBt = this.elements.listBtn) === null || _this$elements$listBt === void 0 || _this$elements$listBt.addEventListener('click', function () {
        return _this2.goToPlayerPage();
      });

      // 更多设置（如果存在）
      if (this.elements.moreBtn) {
        this.elements.moreBtn.addEventListener('click', function () {
          return _this2.openMoreDrawer();
        });
      }

      // 倍速
      this.elements.speedOptions.forEach(function (span) {
        span.addEventListener('click', function () {
          var speed = parseFloat(span.dataset.speed);
          _this2.player.video.playbackRate = speed;
          _this2.elements.speedOptions.forEach(function (s) {
            return s.classList.remove('active');
          });
          span.classList.add('active');
          _this2.closeAllDrawers();
        });
      });

      // 分享
      this.elements.shareItems.forEach(function (item) {
        item.addEventListener('click', function () {
          var platform = item.dataset.platform;
          _this2.handleSocialShare(platform);
          _this2.closeAllDrawers();
        });
      });

      // 关闭抽屉
      document.querySelectorAll('.close-drawer, .drawer-overlay').forEach(function (el) {
        el.addEventListener('click', function (e) {
          if (e.target === el || e.target.closest('.close-drawer')) {
            _this2.closeAllDrawers();
          }
        });
      });
    }
  }, {
    key: "goToPlayerPage",
    value: function goToPlayerPage() {
      if (this.currentDrama) {
        window.location.href = "/pages/player.html?drama=".concat(this.currentDrama.id);
      }
    }
  }, {
    key: "openCommentDrawer",
    value: function openCommentDrawer() {
      var drawer = document.getElementById('drawerComment');
      if (drawer) drawer.classList.add('active');
      this.loadCommentCount(true);
    }
  }, {
    key: "openShareDrawer",
    value: function openShareDrawer() {
      var drawer = document.getElementById('drawerShare');
      if (drawer) drawer.classList.add('active');
    }
  }, {
    key: "openMoreDrawer",
    value: function openMoreDrawer() {
      var drawer = document.getElementById('drawerMore');
      if (drawer) drawer.classList.add('active');
    }
  }, {
    key: "closeAllDrawers",
    value: function closeAllDrawers() {
      document.querySelectorAll('.drawer-overlay.active').forEach(function (d) {
        return d.classList.remove('active');
      });
    }
  }, {
    key: "updateDramaInfo",
    value: function updateDramaInfo(drama) {
      if (!drama) return;
      this.currentDrama = drama;
      if (this.elements.dramaTitle) this.elements.dramaTitle.textContent = drama.title;
      if (this.elements.dramaDescText) this.elements.dramaDescText.textContent = drama.description || '';
      if (this.elements.totalEps) this.elements.totalEps.textContent = drama.total_episodes || 0;
      // 重新加载点赞/收藏状态
      this.loadLikeStatus();
      this.loadFavoriteStatus();
      this.loadCommentCount();
    }
  }, {
    key: "loadCommentCount",
    value: function () {
      var _loadCommentCount = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _this$feedPage;
        var force,
          targetId,
          now,
          _res$pagination$total,
          _res$pagination,
          res,
          total,
          _args = arguments,
          _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              force = _args.length > 0 && _args[0] !== undefined ? _args[0] : false;
              targetId = (_this$feedPage = this.feedPage) === null || _this$feedPage === void 0 || (_this$feedPage = _this$feedPage.currentDrama) === null || _this$feedPage === void 0 ? void 0 : _this$feedPage.episodeId;
              if (targetId) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              now = Date.now();
              if (!(!force && this.commentCountState.targetId === targetId && now - this.commentCountState.lastFetchAt < 3000)) {
                _context.n = 2;
                break;
              }
              return _context.a(2);
            case 2:
              if (!this.commentCountState.loading) {
                _context.n = 3;
                break;
              }
              return _context.a(2);
            case 3:
              this.commentCountState.loading = true;
              this.commentCountState.targetId = targetId;
              this.commentCountState.lastFetchAt = now;
              _context.p = 4;
              _context.n = 5;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.comments.getList(targetId, 1, 1);
            case 5:
              res = _context.v;
              total = (_res$pagination$total = res === null || res === void 0 || (_res$pagination = res.pagination) === null || _res$pagination === void 0 ? void 0 : _res$pagination.total) !== null && _res$pagination$total !== void 0 ? _res$pagination$total : Array.isArray(res === null || res === void 0 ? void 0 : res.data) ? res.data.length : 0;
              if (this.elements.commentCount) this.elements.commentCount.textContent = total;
              if (this.elements.drawerCommentCount) this.elements.drawerCommentCount.textContent = total;
              _context.n = 7;
              break;
            case 6:
              _context.p = 6;
              _t = _context.v;
            case 7:
              _context.p = 7;
              this.commentCountState.loading = false;
              return _context.f(7);
            case 8:
              return _context.a(2);
          }
        }, _callee, this, [[4, 6, 7, 8]]);
      }));
      function loadCommentCount() {
        return _loadCommentCount.apply(this, arguments);
      }
      return loadCommentCount;
    }()
  }, {
    key: "loadLikeStatus",
    value: function () {
      var _loadLikeStatus = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _this$currentDrama;
        var dramaId, res, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              if (_core_auth_js__WEBPACK_IMPORTED_MODULE_3__["default"].isLoggedIn()) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              dramaId = (_this$currentDrama = this.currentDrama) === null || _this$currentDrama === void 0 ? void 0 : _this$currentDrama.id;
              if (dramaId) {
                _context2.n = 2;
                break;
              }
              return _context2.a(2);
            case 2:
              _context2.p = 2;
              _context2.n = 3;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.drama.getLikeStatus(dramaId);
            case 3:
              res = _context2.v;
              if (res.success && res.data) {
                if (this.elements.likeCount) this.elements.likeCount.textContent = res.data.likes_count;
                if (res.data.liked) this.elements.likeBtn.classList.add('active');else this.elements.likeBtn.classList.remove('active');
              }
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t2 = _context2.v;
            case 5:
              return _context2.a(2);
          }
        }, _callee2, this, [[2, 4]]);
      }));
      function loadLikeStatus() {
        return _loadLikeStatus.apply(this, arguments);
      }
      return loadLikeStatus;
    }()
  }, {
    key: "loadFavoriteStatus",
    value: function () {
      var _loadFavoriteStatus = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _this$currentDrama2;
        var dramaId, res, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              if (_core_auth_js__WEBPACK_IMPORTED_MODULE_3__["default"].isLoggedIn()) {
                _context3.n = 1;
                break;
              }
              return _context3.a(2);
            case 1:
              dramaId = (_this$currentDrama2 = this.currentDrama) === null || _this$currentDrama2 === void 0 ? void 0 : _this$currentDrama2.id;
              if (dramaId) {
                _context3.n = 2;
                break;
              }
              return _context3.a(2);
            case 2:
              _context3.p = 2;
              _context3.n = 3;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.drama.getFavoriteStatus(dramaId);
            case 3:
              res = _context3.v;
              if (res.success && res.data) {
                if (this.elements.favoriteCount) this.elements.favoriteCount.textContent = res.data.favorites_count;
                if (res.data.favorited) this.elements.favoriteBtn.classList.add('active');else this.elements.favoriteBtn.classList.remove('active');
              }
              _context3.n = 5;
              break;
            case 4:
              _context3.p = 4;
              _t3 = _context3.v;
            case 5:
              return _context3.a(2);
          }
        }, _callee3, this, [[2, 4]]);
      }));
      function loadFavoriteStatus() {
        return _loadFavoriteStatus.apply(this, arguments);
      }
      return loadFavoriteStatus;
    }()
  }, {
    key: "updateCheckinStatus",
    value: function () {
      var _updateCheckinStatus = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var today, res, hasChecked, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              if (_core_auth_js__WEBPACK_IMPORTED_MODULE_3__["default"].isLoggedIn()) {
                _context4.n = 1;
                break;
              }
              if (this.elements.checkinBtn) {
                this.elements.checkinBtn.style.opacity = '0.5';
                this.elements.checkinBtn.style.pointerEvents = 'none';
                this.elements.checkinBtn.classList.remove('checked');
              }
              return _context4.a(2);
            case 1:
              _context4.p = 1;
              today = getLocalDateString();
              _context4.n = 2;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.user.getUserCheckins({
                start_date: today,
                end_date: today
              });
            case 2:
              res = _context4.v;
              hasChecked = res.data && res.data.length > 0;
              if (hasChecked) {
                this.elements.checkinBtn.classList.add('checked');
                this.elements.checkinBtn.style.pointerEvents = 'none';
                this.elements.checkinBtn.style.opacity = '0.6';
              } else {
                this.elements.checkinBtn.classList.remove('checked');
                this.elements.checkinBtn.style.pointerEvents = 'auto';
                this.elements.checkinBtn.style.opacity = '1';
              }
              _context4.n = 4;
              break;
            case 3:
              _context4.p = 3;
              _t4 = _context4.v;
            case 4:
              return _context4.a(2);
          }
        }, _callee4, this, [[1, 3]]);
      }));
      function updateCheckinStatus() {
        return _updateCheckinStatus.apply(this, arguments);
      }
      return updateCheckinStatus;
    }()
  }, {
    key: "handleCheckin",
    value: function () {
      var _handleCheckin = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var _this3 = this;
        var res, _t5;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              if (_core_auth_js__WEBPACK_IMPORTED_MODULE_3__["default"].isLoggedIn()) {
                _context5.n = 1;
                break;
              }
              window.location.href = "/pages/login.html?redirect=".concat(encodeURIComponent(window.location.pathname));
              return _context5.a(2);
            case 1:
              if (!this.elements.checkinBtn.classList.contains('checked')) {
                _context5.n = 2;
                break;
              }
              return _context5.a(2);
            case 2:
              if (!this.checkinCooldown) {
                _context5.n = 3;
                break;
              }
              return _context5.a(2);
            case 3:
              this.checkinCooldown = true;
              this.elements.checkinBtn.style.animation = 'none';
              this.elements.checkinBtn.offsetHeight;
              this.elements.checkinBtn.style.animation = 'checkinPop 0.5s ease-out';
              _context5.p = 4;
              _context5.n = 5;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.user.checkin();
            case 5:
              res = _context5.v;
              if (res.success) {
                this.elements.checkinBtn.classList.add('checked');
                this.elements.checkinBtn.style.pointerEvents = 'none';
                this.elements.checkinBtn.style.opacity = '0.6';
                this.showToast("\u7B7E\u5230\u6210\u529F\uFF01\u83B7\u5F97 ".concat(res.reward || 10, " \u91D1\u5E01"));
              } else {
                this.showToast(res.error || '签到失败');
              }
              _context5.n = 7;
              break;
            case 6:
              _context5.p = 6;
              _t5 = _context5.v;
              this.showToast('网络错误，请重试');
            case 7:
              _context5.p = 7;
              setTimeout(function () {
                _this3.checkinCooldown = false;
              }, 1000);
              return _context5.f(7);
            case 8:
              return _context5.a(2);
          }
        }, _callee5, this, [[4, 6, 7, 8]]);
      }));
      function handleCheckin() {
        return _handleCheckin.apply(this, arguments);
      }
      return handleCheckin;
    }()
  }, {
    key: "handleLike",
    value: function () {
      var _handleLike = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var isActive, dramaId, count, _count, _t6;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              if (_core_auth_js__WEBPACK_IMPORTED_MODULE_3__["default"].isLoggedIn()) {
                _context6.n = 1;
                break;
              }
              window.location.href = "/pages/login.html?redirect=".concat(encodeURIComponent(window.location.pathname));
              return _context6.a(2);
            case 1:
              isActive = this.elements.likeBtn.classList.contains('active');
              dramaId = this.currentDrama.id;
              _context6.p = 2;
              if (!isActive) {
                _context6.n = 4;
                break;
              }
              _context6.n = 3;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.drama.unlike(dramaId);
            case 3:
              this.elements.likeBtn.classList.remove('active');
              count = parseInt(this.elements.likeCount.textContent) || 0;
              this.elements.likeCount.textContent = count > 0 ? count - 1 : 0;
              _context6.n = 6;
              break;
            case 4:
              _context6.n = 5;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.drama.like(dramaId);
            case 5:
              this.elements.likeBtn.classList.add('active');
              _count = parseInt(this.elements.likeCount.textContent) || 0;
              this.elements.likeCount.textContent = _count + 1;
              this.animateHeart(this.elements.likeBtn);
            case 6:
              _context6.n = 8;
              break;
            case 7:
              _context6.p = 7;
              _t6 = _context6.v;
            case 8:
              return _context6.a(2);
          }
        }, _callee6, this, [[2, 7]]);
      }));
      function handleLike() {
        return _handleLike.apply(this, arguments);
      }
      return handleLike;
    }()
  }, {
    key: "handleFavorite",
    value: function () {
      var _handleFavorite = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var isActive, dramaId, count, _count2, _t7;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              if (_core_auth_js__WEBPACK_IMPORTED_MODULE_3__["default"].isLoggedIn()) {
                _context7.n = 1;
                break;
              }
              window.location.href = "/pages/login.html?redirect=".concat(encodeURIComponent(window.location.pathname));
              return _context7.a(2);
            case 1:
              isActive = this.elements.favoriteBtn.classList.contains('active');
              dramaId = this.currentDrama.id;
              _context7.p = 2;
              if (!isActive) {
                _context7.n = 4;
                break;
              }
              _context7.n = 3;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.drama.unfavorite(dramaId);
            case 3:
              this.elements.favoriteBtn.classList.remove('active');
              count = parseInt(this.elements.favoriteCount.textContent) || 0;
              this.elements.favoriteCount.textContent = count > 0 ? count - 1 : 0;
              _context7.n = 6;
              break;
            case 4:
              _context7.n = 5;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.drama.favorite(dramaId);
            case 5:
              this.elements.favoriteBtn.classList.add('active');
              _count2 = parseInt(this.elements.favoriteCount.textContent) || 0;
              this.elements.favoriteCount.textContent = _count2 + 1;
              this.animateHeart(this.elements.favoriteBtn);
            case 6:
              _context7.n = 8;
              break;
            case 7:
              _context7.p = 7;
              _t7 = _context7.v;
            case 8:
              return _context7.a(2);
          }
        }, _callee7, this, [[2, 7]]);
      }));
      function handleFavorite() {
        return _handleFavorite.apply(this, arguments);
      }
      return handleFavorite;
    }()
  }, {
    key: "animateHeart",
    value: function animateHeart(btn) {
      var heart = document.createElement('i');
      heart.className = 'fas fa-heart';
      heart.style.position = 'absolute';
      heart.style.color = '#FF3B5C';
      heart.style.fontSize = '40px';
      heart.style.transition = 'all 0.8s ease-out';
      heart.style.transform = 'translateY(0) scale(1)';
      heart.style.opacity = '1';
      heart.style.pointerEvents = 'none';
      btn.appendChild(heart);
      requestAnimationFrame(function () {
        heart.style.transform = "translateY(-100px) scale(1.5) rotate(".concat(Math.random() * 40 - 20, "deg)");
        heart.style.opacity = '0';
      });
      setTimeout(function () {
        return heart.remove();
      }, 800);
    }
  }, {
    key: "handleSocialShare",
    value: function handleSocialShare(platform) {
      var _this$currentDrama3;
      var url = encodeURIComponent(window.location.href);
      var text = encodeURIComponent("Watching ".concat((_this$currentDrama3 = this.currentDrama) === null || _this$currentDrama3 === void 0 ? void 0 : _this$currentDrama3.title, " on Global Shorts!"));
      var shareUrl = '';
      switch (platform) {
        case 'whatsapp':
          shareUrl = "https://api.whatsapp.com/send?text=".concat(text, " ").concat(url);
          break;
        case 'facebook':
          shareUrl = "https://www.facebook.com/sharer/sharer.php?u=".concat(url);
          break;
        case 'twitter':
          shareUrl = "https://twitter.com/intent/tweet?text=".concat(text, "&url=").concat(url);
          break;
        case 'telegram':
          shareUrl = "https://t.me/share/url?url=".concat(url, "&text=").concat(text);
          break;
        case 'copy':
          navigator.clipboard.writeText(window.location.href).then(function () {
            return alert('链接已复制');
          });
          return;
      }
      if (shareUrl) window.open(shareUrl, '_blank');
    }
  }, {
    key: "showToast",
    value: function showToast(msg) {
      var toast = document.createElement('div');
      toast.className = 'player-toast';
      toast.textContent = msg;
      document.body.appendChild(toast);
      setTimeout(function () {
        return toast.remove();
      }, 2000);
    }
  }]);
}();
var FeedPage = /*#__PURE__*/function () {
  function FeedPage() {
    _classCallCheck(this, FeedPage);
    this.dramas = [];
    this.currentIndex = 0;
    this.player = null;
    this.overlay = null;
    this.init();
  }
  return _createClass(FeedPage, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var _t8;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              this.showLoading();
              _context8.p = 1;
              _context8.n = 2;
              return Promise.race([_core_i18n_js__WEBPACK_IMPORTED_MODULE_2__["default"].init(), new Promise(function (_, reject) {
                return setTimeout(function () {
                  return reject(new Error('i18n timeout'));
                }, 3000);
              })]);
            case 2:
              _context8.n = 4;
              break;
            case 3:
              _context8.p = 3;
              _t8 = _context8.v;
            case 4:
              _context8.n = 5;
              return this.loadDramas();
            case 5:
              _context8.n = 6;
              return this.initPlayer();
            case 6:
              this.initSwipe();
              this.hideLoading();
            case 7:
              return _context8.a(2);
          }
        }, _callee8, this, [[1, 3]]);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "loadDramas",
    value: function () {
      var _loadDramas = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var res, _t9;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.p = _context9.n) {
            case 0:
              _context9.p = 0;
              _context9.n = 1;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.drama.getList({
                page: 1,
                limit: 20,
                sort: 'hot'
              });
            case 1:
              res = _context9.v;
              if (!(res.success && res.data.length)) {
                _context9.n = 3;
                break;
              }
              this.dramas = res.data;
              this.currentIndex = 0;
              _context9.n = 2;
              return this.loadFirstEpisodeData(this.dramas[0]);
            case 2:
              _context9.n = 4;
              break;
            case 3:
              this.showError('暂无剧集');
            case 4:
              _context9.n = 6;
              break;
            case 5:
              _context9.p = 5;
              _t9 = _context9.v;
              console.error(_t9);
              this.showError('加载失败');
            case 6:
              return _context9.a(2);
          }
        }, _callee9, this, [[0, 5]]);
      }));
      function loadDramas() {
        return _loadDramas.apply(this, arguments);
      }
      return loadDramas;
    }()
  }, {
    key: "loadFirstEpisodeData",
    value: function () {
      var _loadFirstEpisodeData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(drama) {
        var episodesRes, firstEp, _t0;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.p = _context0.n) {
            case 0:
              _context0.p = 0;
              _context0.n = 1;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.drama.getEpisodes(drama.id);
            case 1:
              episodesRes = _context0.v;
              if (episodesRes.success && episodesRes.data.length) {
                firstEp = episodesRes.data[0];
                this.currentDrama = _objectSpread(_objectSpread({}, drama), {}, {
                  videoUrl: firstEp.video_url,
                  episodeId: firstEp.id,
                  episodeNum: firstEp.episode_number,
                  total_episodes: drama.total_episodes || 0
                });
              } else {
                this.currentDrama = _objectSpread(_objectSpread({}, drama), {}, {
                  videoUrl: '',
                  episodeId: null,
                  episodeNum: 1
                });
              }
              _context0.n = 3;
              break;
            case 2:
              _context0.p = 2;
              _t0 = _context0.v;
              console.warn('获取分集失败', _t0);
              this.currentDrama = _objectSpread(_objectSpread({}, drama), {}, {
                videoUrl: '',
                episodeId: null,
                episodeNum: 1
              });
            case 3:
              return _context0.a(2);
          }
        }, _callee0, this, [[0, 2]]);
      }));
      function loadFirstEpisodeData(_x) {
        return _loadFirstEpisodeData.apply(this, arguments);
      }
      return loadFirstEpisodeData;
    }()
  }, {
    key: "initPlayer",
    value: function () {
      var _initPlayer = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
        var container, drama;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              container = document.getElementById('player');
              if (container) {
                _context1.n = 1;
                break;
              }
              return _context1.a(2);
            case 1:
              drama = this.currentDrama;
              if (drama.videoUrl) {
                _context1.n = 2;
                break;
              }
              console.warn('无视频URL');
              return _context1.a(2);
            case 2:
              this.player = new _components_player_VideoPlayer_js__WEBPACK_IMPORTED_MODULE_4__["default"](container, {
                sources: [{
                  url: drama.videoUrl,
                  quality: 'auto',
                  type: 'video/mp4'
                }],
                autoplay: true,
                muted: false,
                loop: false
              });
              this.overlay = new FeedOverlay(this.player, this);
              this.overlay.updateDramaInfo(drama);
            case 3:
              return _context1.a(2);
          }
        }, _callee1, this);
      }));
      function initPlayer() {
        return _initPlayer.apply(this, arguments);
      }
      return initPlayer;
    }()
  }, {
    key: "switchTo",
    value: function () {
      var _switchTo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(index) {
        var newDrama;
        return _regenerator().w(function (_context10) {
          while (1) switch (_context10.n) {
            case 0:
              if (!(index < 0 || index >= this.dramas.length)) {
                _context10.n = 1;
                break;
              }
              return _context10.a(2);
            case 1:
              if (!(index === this.currentIndex)) {
                _context10.n = 2;
                break;
              }
              return _context10.a(2);
            case 2:
              this.currentIndex = index;
              _context10.n = 3;
              return this.loadFirstEpisodeData(this.dramas[index]);
            case 3:
              newDrama = this.currentDrama;
              if (this.player) {
                this.player.video.src = newDrama.videoUrl;
                this.player.video.load();
                this.player.video.play()["catch"](function (e) {
                  return console.warn(e);
                });
              }
              this.overlay.updateDramaInfo(newDrama);
              _context10.n = 4;
              return this.overlay.loadLikeStatus();
            case 4:
              _context10.n = 5;
              return this.overlay.loadFavoriteStatus();
            case 5:
              this.overlay.updateCheckinStatus();
              this.overlay.updateUserAvatar();
            case 6:
              return _context10.a(2);
          }
        }, _callee10, this);
      }));
      function switchTo(_x2) {
        return _switchTo.apply(this, arguments);
      }
      return switchTo;
    }()
  }, {
    key: "initSwipe",
    value: function initSwipe() {
      var _this4 = this;
      var container = document.getElementById('feedContainer');
      if (!container) return;
      var startY = 0;
      var isDragging = false;
      var minDistance = 50;
      container.addEventListener('touchstart', function (e) {
        startY = e.touches[0].clientY;
        isDragging = true;
      });
      container.addEventListener('touchend', function (e) {
        if (!isDragging) return;
        var endY = e.changedTouches[0].clientY;
        var deltaY = endY - startY;
        if (Math.abs(deltaY) >= minDistance) {
          if (deltaY < 0) {
            _this4.switchTo(_this4.currentIndex + 1);
          } else {
            _this4.switchTo(_this4.currentIndex - 1);
          }
        }
        isDragging = false;
      });
      var mouseStartY = 0;
      var isMouseDown = false;
      container.addEventListener('mousedown', function (e) {
        mouseStartY = e.clientY;
        isMouseDown = true;
        e.preventDefault();
      });
      window.addEventListener('mouseup', function (e) {
        if (!isMouseDown) return;
        var deltaY = e.clientY - mouseStartY;
        if (Math.abs(deltaY) >= minDistance) {
          if (deltaY < 0) _this4.switchTo(_this4.currentIndex + 1);else _this4.switchTo(_this4.currentIndex - 1);
        }
        isMouseDown = false;
      });
    }
  }, {
    key: "showLoading",
    value: function showLoading() {
      var el = document.getElementById('pageLoading');
      if (el) el.style.display = 'flex';
    }
  }, {
    key: "hideLoading",
    value: function hideLoading() {
      var el = document.getElementById('pageLoading');
      if (el) el.style.display = 'none';
    }
  }, {
    key: "showError",
    value: function showError(msg) {
      var el = document.getElementById('errorMessage');
      if (el) {
        el.textContent = msg;
        el.style.display = 'block';
      }
      this.hideLoading();
    }
  }]);
}();
document.addEventListener('DOMContentLoaded', function () {
  window.feedPage = new FeedPage();
});
function getLocalDateString() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  var year = date.getFullYear();
  var month = String(date.getMonth() + 1).padStart(2, '0');
  var day = String(date.getDate()).padStart(2, '0');
  return "".concat(year, "-").concat(month, "-").concat(day);
}
/******/ })()
;