/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 569
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DrawerManager)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// src/scripts/components/player/DrawerManager.js
var DrawerManager = /*#__PURE__*/function () {
  function DrawerManager() {
    _classCallCheck(this, DrawerManager);
  }
  return _createClass(DrawerManager, null, [{
    key: "init",
    value: function init() {
      this.drawers = {
        episode: document.getElementById('drawerEpisode'),
        comment: document.getElementById('drawerComment'),
        share: document.getElementById('drawerShare'),
        more: document.getElementById('drawerMore'),
        qualitySub: document.getElementById('drawerQualitySub'),
        speedSub: document.getElementById('drawerSpeedSub')
      };
      this.bindCloseEvents();
      this.bindEpisodeClick(); // 新增：绑定剧集点击
    }
  }, {
    key: "bindCloseEvents",
    value: function bindCloseEvents() {
      var _this = this;
      document.querySelectorAll('.close-drawer').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          _this.closeAll();
        });
      });
      Object.values(this.drawers).forEach(function (drawer) {
        drawer === null || drawer === void 0 || drawer.addEventListener('click', function (e) {
          if (e.target === drawer) {
            _this.closeAll();
          }
        });
      });
    }

    /**
     * 绑定选集抽屉中剧集项的点击事件
     */
  }, {
    key: "bindEpisodeClick",
    value: function bindEpisodeClick() {
      var _this2 = this;
      var episodeGrid = document.getElementById('episodeDrawerList');
      if (!episodeGrid) return;
      episodeGrid.addEventListener('click', function (e) {
        var target = e.target.closest('.episode-grid-item');
        if (!target) return;

        // 获取剧集编号（假设内容为纯数字，如 "1"）
        var episodeNum = target.textContent.trim();
        var playerPage = window.playerPage; // 由 player.js 设置

        if (!playerPage || !playerPage.dramaData) {
          console.warn('playerPage 未就绪');
          return;
        }

        // 查找对应的剧集对象
        var episode = playerPage.dramaData.episodes.find(function (ep) {
          return ep.num == episodeNum;
        });
        if (!episode) {
          console.warn('未找到剧集', episodeNum);
          return;
        }

        // 阻止默认行为（例如链接跳转）
        e.preventDefault();
        if (!episode.canPlay) {
          // 显示解锁弹窗
          playerPage.showUnlockModal(episode, episode.unlockType);
        } else {
          // 可以播放，切换剧集
          playerPage.switchEpisode(episode.num);
          _this2.closeAll(); // 可选：关闭抽屉
        }
      });
    }
  }, {
    key: "open",
    value: function open(name) {
      this.closeAll();
      if (this.drawers[name]) {
        this.drawers[name].classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }
  }, {
    key: "closeAll",
    value: function closeAll() {
      Object.values(this.drawers).forEach(function (d) {
        return d === null || d === void 0 ? void 0 : d.classList.remove('active');
      });
      document.body.style.overflow = '';
    }
  }]);
}();
_defineProperty(DrawerManager, "drawers", {});


/***/ },

/***/ 390
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayerOverlay)
/* harmony export */ });
/* harmony import */ var _scripts_core_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(225);
/* harmony import */ var _scripts_core_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93);
/* harmony import */ var _scripts_core_auth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(527);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// src/scripts/components/player/PlayerOverlay.js



var PlayerOverlay = /*#__PURE__*/function () {
  function PlayerOverlay(videoPlayer, dramaData) {
    _classCallCheck(this, PlayerOverlay);
    this.player = videoPlayer;
    this.dramaData = dramaData;
    this.currentEpisode = dramaData.currentEpisode;
    this.isVisible = true;
    this.hideTimer = null;
    this.isSharing = false;

    // 绑定 DOM 结构（先定义 elements）
    this.elements = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      container: document.querySelector('.player-overlay'),
      centerPlayBtn: document.getElementById('centerPlayBtn'),
      playPause: document.getElementById('playPause'),
      progressFill: document.getElementById('progressFill'),
      progressBar: document.getElementById('progressBar'),
      currentTime: document.getElementById('currentTime'),
      totalTime: document.getElementById('totalTime'),
      volumeBtn: document.getElementById('volumeBtn'),
      fullscreenBtn: document.getElementById('fullscreenBtn'),
      // 点赞相关
      likeBtn: document.getElementById('btnLike'),
      likeCount: document.querySelector('#btnLike .count'),
      // 收藏相关
      favoriteBtn: document.getElementById('btnFavorite'),
      favoriteCount: document.querySelector('#btnFavorite .count'),
      // 评论相关
      commentBtn: document.getElementById('btnComment'),
      commentCount: document.querySelector('#btnComment .count'),
      drawerCommentCount: document.getElementById('drawerCommentCount'),
      // 分享相关
      shareBtn: document.getElementById('btnShare'),
      shareCount: document.querySelector('#btnShare .count'),
      // 签到按钮
      checkinBtn: document.getElementById('checkinBtn')
    }, "shareBtn", document.getElementById('btnShare')), "listBtn", document.getElementById('btnList')), "moreBtn", document.getElementById('moreBtn')), "backBtn", document.getElementById('backBtn')), "episodeGrid", document.getElementById('episodeDrawerList')), "speedOptions", document.querySelectorAll('#speedOptions span')), "shareItems", document.querySelectorAll('.share-item'));
    this.init();
  }

  // ========== 登录检查方法 ==========
  return _createClass(PlayerOverlay, [{
    key: "checkLoginAndRedirect",
    value: function checkLoginAndRedirect() {
      if (!_scripts_core_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"].isLoggedIn()) {
        var redirectUrl = encodeURIComponent(window.location.pathname + window.location.search);
        window.location.href = "/pages/login.html?redirect=".concat(redirectUrl);
        return false;
      }
      return true;
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;
      this.bindPlayerEvents();
      this.bindUIEvents();
      this.updateDramaInfo();
      this.renderEpisodeGrid();
      this.updateI18n();
      this.loadLikeStatus();
      this.loadFavoriteStatus();
      this.loadCommentCount();
      this.updateHotSearchWord();
      this.updateCheckinStatus();
      window.addEventListener('language:changed', function () {
        _this.updateHotSearchWord();
      });
    }
  }, {
    key: "updateHotSearchWord",
    value: function updateHotSearchWord() {
      var hotWordEl = document.getElementById('hotSearchWord');
      if (hotWordEl && this.currentEpisode) {
        hotWordEl.removeAttribute('data-i18n');
        var episodeNum = this.currentEpisode.num || 1;
        var episodeTitle = this.currentEpisode.title || '';
        hotWordEl.textContent = _scripts_core_i18n_js__WEBPACK_IMPORTED_MODULE_1__["default"].t('player.episode_format', {
          num: episodeNum,
          title: episodeTitle
        });
      }
    }
  }, {
    key: "updateCommentCount",
    value: function updateCommentCount(count) {
      if (this.elements.commentCount) {
        this.elements.commentCount.textContent = count;
      }
      if (this.elements.drawerCommentCount) {
        this.elements.drawerCommentCount.textContent = count;
      }
    }
  }, {
    key: "loadCommentCount",
    value: function () {
      var _loadCommentCount = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _this$currentEpisode;
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
              targetId = (_this$currentEpisode = this.currentEpisode) === null || _this$currentEpisode === void 0 ? void 0 : _this$currentEpisode.id;
              if (targetId) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              if (!this._commentCountState) {
                this._commentCountState = {
                  targetId: null,
                  lastFetchAt: 0,
                  loading: false
                };
              }
              now = Date.now();
              if (!(!force && this._commentCountState.targetId === targetId && now - this._commentCountState.lastFetchAt < 3000)) {
                _context.n = 2;
                break;
              }
              return _context.a(2);
            case 2:
              if (!this._commentCountState.loading) {
                _context.n = 3;
                break;
              }
              return _context.a(2);
            case 3:
              this._commentCountState.loading = true;
              this._commentCountState.targetId = targetId;
              this._commentCountState.lastFetchAt = now;
              _context.p = 4;
              _context.n = 5;
              return _scripts_core_api_js__WEBPACK_IMPORTED_MODULE_0__.api.comments.getList(targetId, 1, 1);
            case 5:
              res = _context.v;
              total = (_res$pagination$total = res === null || res === void 0 || (_res$pagination = res.pagination) === null || _res$pagination === void 0 ? void 0 : _res$pagination.total) !== null && _res$pagination$total !== void 0 ? _res$pagination$total : Array.isArray(res === null || res === void 0 ? void 0 : res.data) ? res.data.length : 0;
              this.updateCommentCount(total);
              _context.n = 7;
              break;
            case 6:
              _context.p = 6;
              _t = _context.v;
            case 7:
              _context.p = 7;
              this._commentCountState.loading = false;
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
    key: "bindPlayerEvents",
    value: function bindPlayerEvents() {
      var _this2 = this;
      if (!this.player) return;
      this.player.on('timeupdate', function (currentTime, duration) {
        _this2.updateProgress(currentTime, duration);
      });
      this.player.on('play', function () {
        var _this2$elements$playP;
        var icon = (_this2$elements$playP = _this2.elements.playPause) === null || _this2$elements$playP === void 0 ? void 0 : _this2$elements$playP.querySelector('i');
        if (icon) icon.className = 'fas fa-pause';
        if (_this2.elements.centerPlayBtn) {
          _this2.elements.centerPlayBtn.style.display = 'none';
        }
      });
      this.player.on('pause', function () {
        var _this2$elements$playP2;
        var icon = (_this2$elements$playP2 = _this2.elements.playPause) === null || _this2$elements$playP2 === void 0 ? void 0 : _this2$elements$playP2.querySelector('i');
        if (icon) icon.className = 'fas fa-play';
        if (_this2.elements.centerPlayBtn) {
          _this2.elements.centerPlayBtn.style.display = 'flex';
        }
      });
      this.player.on('volumechange', function (volume) {
        var _this2$elements$volum;
        var icon = (_this2$elements$volum = _this2.elements.volumeBtn) === null || _this2$elements$volum === void 0 ? void 0 : _this2$elements$volum.querySelector('i');
        if (!icon) return;
        if (volume === 0) icon.className = 'fas fa-volume-off';else if (volume < 0.5) icon.className = 'fas fa-volume-down';else icon.className = 'fas fa-volume-up';
      });
    }
  }, {
    key: "bindUIEvents",
    value: function bindUIEvents() {
      var _this3 = this,
        _this$elements$playPa,
        _this$elements$center,
        _this$elements$checki,
        _this$elements$progre,
        _this$elements$volume,
        _this$elements$fullsc,
        _this$elements$backBt,
        _this$elements$likeBt,
        _this$elements$favori,
        _this$elements$listBt,
        _this$elements$moreBt,
        _this$elements$shareB,
        _this$elements$commen;
      var togglePlayHandler = function togglePlayHandler(e) {
        e.stopPropagation();
        if (_this3.player) _this3.player.togglePlay();
      };
      (_this$elements$playPa = this.elements.playPause) === null || _this$elements$playPa === void 0 || _this$elements$playPa.addEventListener('click', togglePlayHandler);
      (_this$elements$center = this.elements.centerPlayBtn) === null || _this$elements$center === void 0 || _this$elements$center.addEventListener('click', togglePlayHandler);
      (_this$elements$checki = this.elements.checkinBtn) === null || _this$elements$checki === void 0 || _this$elements$checki.addEventListener('click', function () {
        return _this3.handleCheckin();
      });
      (_this$elements$progre = this.elements.progressBar) === null || _this$elements$progre === void 0 || _this$elements$progre.addEventListener('click', function (e) {
        e.stopPropagation();
        if (!_this3.player || !_this3.player.state || !_this3.player.state.duration) return;
        var rect = _this3.elements.progressBar.getBoundingClientRect();
        var percent = (e.clientX - rect.left) / rect.width;
        var seekTime = percent * _this3.player.state.duration;
        if (!isNaN(seekTime) && isFinite(seekTime)) {
          _this3.player.seek(seekTime);
        }
      });
      (_this$elements$volume = this.elements.volumeBtn) === null || _this$elements$volume === void 0 || _this$elements$volume.addEventListener('click', function (e) {
        var _this3$player;
        e.stopPropagation();
        (_this3$player = _this3.player) === null || _this3$player === void 0 || _this3$player.toggleMute();
      });
      (_this$elements$fullsc = this.elements.fullscreenBtn) === null || _this$elements$fullsc === void 0 || _this$elements$fullsc.addEventListener('click', function (e) {
        var _this3$player2;
        e.stopPropagation();
        (_this3$player2 = _this3.player) === null || _this3$player2 === void 0 || _this3$player2.toggleFullscreen();
      });
      (_this$elements$backBt = this.elements.backBtn) === null || _this$elements$backBt === void 0 || _this$elements$backBt.addEventListener('click', function (e) {
        e.stopPropagation();
        window.history.back();
      });

      // ========== 点赞按钮 ==========
      (_this$elements$likeBt = this.elements.likeBtn) === null || _this$elements$likeBt === void 0 || _this$elements$likeBt.addEventListener('click', /*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(e) {
          var btn, isActive, dramaId, countSpan, count, _countSpan, _count, _t2;
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.p = _context2.n) {
              case 0:
                e.stopPropagation();
                if (_this3.checkLoginAndRedirect()) {
                  _context2.n = 1;
                  break;
                }
                return _context2.a(2);
              case 1:
                btn = e.currentTarget;
                isActive = btn.classList.contains('active');
                dramaId = window.currentDramaId;
                _context2.p = 2;
                if (!isActive) {
                  _context2.n = 4;
                  break;
                }
                _context2.n = 3;
                return _scripts_core_api_js__WEBPACK_IMPORTED_MODULE_0__.api.drama.unlike(dramaId);
              case 3:
                btn.classList.remove('active');
                countSpan = _this3.elements.likeCount;
                count = parseInt(countSpan.textContent) || 0;
                countSpan.textContent = count > 0 ? count - 1 : 0;
                _context2.n = 6;
                break;
              case 4:
                _context2.n = 5;
                return _scripts_core_api_js__WEBPACK_IMPORTED_MODULE_0__.api.drama.like(dramaId);
              case 5:
                btn.classList.add('active');
                _countSpan = _this3.elements.likeCount;
                _count = parseInt(_countSpan.textContent) || 0;
                _countSpan.textContent = _count + 1;
                _this3.animateHeart(btn);
              case 6:
                _context2.n = 8;
                break;
              case 7:
                _context2.p = 7;
                _t2 = _context2.v;
                console.error('点赞操作失败', _t2);
              case 8:
                return _context2.a(2);
            }
          }, _callee2, null, [[2, 7]]);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());

      // ========== 收藏按钮 ==========
      (_this$elements$favori = this.elements.favoriteBtn) === null || _this$elements$favori === void 0 || _this$elements$favori.addEventListener('click', /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(e) {
          var btn, isActive, dramaId, countSpan, count, _countSpan2, _count2, _t3;
          return _regenerator().w(function (_context3) {
            while (1) switch (_context3.p = _context3.n) {
              case 0:
                e.stopPropagation();
                if (_this3.checkLoginAndRedirect()) {
                  _context3.n = 1;
                  break;
                }
                return _context3.a(2);
              case 1:
                btn = e.currentTarget;
                isActive = btn.classList.contains('active');
                dramaId = window.currentDramaId;
                _context3.p = 2;
                if (!isActive) {
                  _context3.n = 4;
                  break;
                }
                _context3.n = 3;
                return _scripts_core_api_js__WEBPACK_IMPORTED_MODULE_0__.api.drama.unfavorite(dramaId);
              case 3:
                btn.classList.remove('active');
                countSpan = _this3.elements.favoriteCount;
                count = parseInt(countSpan.textContent) || 0;
                countSpan.textContent = count > 0 ? count - 1 : 0;
                _context3.n = 6;
                break;
              case 4:
                _context3.n = 5;
                return _scripts_core_api_js__WEBPACK_IMPORTED_MODULE_0__.api.drama.favorite(dramaId);
              case 5:
                btn.classList.add('active');
                _countSpan2 = _this3.elements.favoriteCount;
                _count2 = parseInt(_countSpan2.textContent) || 0;
                _countSpan2.textContent = _count2 + 1;
                _this3.animateHeart(btn);
              case 6:
                _context3.n = 8;
                break;
              case 7:
                _context3.p = 7;
                _t3 = _context3.v;
                console.error('收藏操作失败', _t3);
                alert('操作失败，请重试');
              case 8:
                return _context3.a(2);
            }
          }, _callee3, null, [[2, 7]]);
        }));
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
      var openDrawer = function openDrawer(id) {
        var drawer = document.getElementById(id);
        if (drawer) drawer.classList.add('active');
      };
      var closeAllDrawers = function closeAllDrawers() {
        document.querySelectorAll('.drawer-overlay.active').forEach(function (d) {
          d.classList.remove('active');
        });
      };
      document.querySelectorAll('.drawer-overlay, .close-drawer').forEach(function (el) {
        el.addEventListener('click', function (e) {
          if (e.target.classList.contains('drawer-overlay') || e.target.closest('.close-drawer')) {
            e.stopPropagation();
            closeAllDrawers();
          }
        });
      });
      (_this$elements$listBt = this.elements.listBtn) === null || _this$elements$listBt === void 0 || _this$elements$listBt.addEventListener('click', function (e) {
        e.stopPropagation();
        openDrawer('drawerEpisode');
      });
      (_this$elements$moreBt = this.elements.moreBtn) === null || _this$elements$moreBt === void 0 || _this$elements$moreBt.addEventListener('click', function (e) {
        e.stopPropagation();
        openDrawer('drawerMore');
      });
      (_this$elements$shareB = this.elements.shareBtn) === null || _this$elements$shareB === void 0 || _this$elements$shareB.addEventListener('click', function (e) {
        e.stopPropagation();
        openDrawer('drawerShare');
      });
      (_this$elements$commen = this.elements.commentBtn) === null || _this$elements$commen === void 0 || _this$elements$commen.addEventListener('click', function (e) {
        e.stopPropagation();
        openDrawer('drawerComment');
      });
      this.elements.speedOptions.forEach(function (span) {
        span.addEventListener('click', function (e) {
          e.stopPropagation();
          _this3.elements.speedOptions.forEach(function (s) {
            return s.classList.remove('active');
          });
          e.target.classList.add('active');
          var speed = parseFloat(e.target.dataset.speed);
          var videoEl = document.querySelector('video.player-video');
          if (videoEl) {
            videoEl.playbackRate = speed;
          } else if (_this3.player && _this3.player.video) {
            _this3.player.video.playbackRate = speed;
          }
          setTimeout(function () {
            closeAllDrawers();
          }, 400);
        });
      });
      this.elements.shareItems.forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.stopPropagation();
          var platform = e.currentTarget.dataset.platform;
          _this3.handleSocialShare(platform);
          closeAllDrawers();
        });
      });
    }
  }, {
    key: "updateProgress",
    value: function updateProgress(current, total) {
      if (this.elements.progressFill && total > 0) {
        var percent = current / total * 100;
        this.elements.progressFill.style.width = "".concat(percent, "%");
      }
      if (this.elements.currentTime && this.elements.totalTime && total > 0) {
        this.elements.currentTime.textContent = this.formatTime(current);
        this.elements.totalTime.textContent = this.formatTime(total);
      }
    }
  }, {
    key: "formatTime",
    value: function formatTime(seconds) {
      if (isNaN(seconds) || seconds < 0) return '00:00';
      var mins = Math.floor(seconds / 60);
      var secs = Math.floor(seconds % 60);
      return "".concat(mins.toString().padStart(2, '0'), ":").concat(secs.toString().padStart(2, '0'));
    }
  }, {
    key: "renderEpisodeGrid",
    value: function renderEpisodeGrid() {
      var _this$dramaData,
        _this4 = this;
      var container = this.elements.episodeGrid;
      if (!container || !((_this$dramaData = this.dramaData) !== null && _this$dramaData !== void 0 && _this$dramaData.episodes)) return;
      container.innerHTML = '';
      this.dramaData.episodes.forEach(function (ep) {
        var _this4$currentEpisode, _this4$currentEpisode2;
        var item = document.createElement('div');
        item.className = 'episode-grid-item';
        var currentNum = ((_this4$currentEpisode = _this4.currentEpisode) === null || _this4$currentEpisode === void 0 ? void 0 : _this4$currentEpisode.num) || ((_this4$currentEpisode2 = _this4.currentEpisode) === null || _this4$currentEpisode2 === void 0 ? void 0 : _this4$currentEpisode2.number);
        var epNum = ep.num || ep.number;
        if (epNum === currentNum) {
          item.classList.add('active');
        }
        if (ep.locked || ep.isVip) {
          item.innerHTML = "".concat(epNum, " <i class=\"fas fa-lock\" style=\"font-size:10px;margin-left:4px;\"></i>");
        } else {
          item.textContent = epNum;
        }
        item.addEventListener('click', function (e) {
          var _document$getElementB;
          e.stopPropagation();
          _this4.switchEpisode(ep);
          (_document$getElementB = document.getElementById('drawerEpisode')) === null || _document$getElementB === void 0 || _document$getElementB.classList.remove('active');
        });
        container.appendChild(item);
      });
    }
  }, {
    key: "switchEpisode",
    value: function switchEpisode(episode) {
      if (!episode) return;
      if (!episode.canPlay) {
        if (window.playerPage) {
          window.playerPage.showUnlockModal(episode, episode.unlockType);
        } else {
          console.warn('playerPage not found');
        }
        return;
      }
      this.currentEpisode = episode;
      if (window.playerPage) {
        window.playerPage.dramaData.currentEpisode = episode;
      }
      if (this.player && this.player.video) {
        this.player.video.src = episode.videoUrl;
        this.player.video.load();
        this.player.video.play()["catch"](function () {});
      }
      var url = new URL(window.location);
      url.searchParams.set('episode', episode.num || episode.number);
      window.history.pushState({}, '', url);
      this.updateDramaInfo();
      this.renderEpisodeGrid();
      this.updateHotSearchWord();
    }
  }, {
    key: "updateDramaInfo",
    value: function updateDramaInfo() {
      var _this$currentEpisode2,
        _this$currentEpisode3,
        _this5 = this,
        _this$dramaData$episo;
      if (!this.dramaData) return;
      var currentNum = ((_this$currentEpisode2 = this.currentEpisode) === null || _this$currentEpisode2 === void 0 ? void 0 : _this$currentEpisode2.num) || ((_this$currentEpisode3 = this.currentEpisode) === null || _this$currentEpisode3 === void 0 ? void 0 : _this$currentEpisode3.number) || 1;
      document.querySelectorAll('.current-episode-title').forEach(function (el) {
        var _this5$currentEpisode;
        el.textContent = "\u7B2C".concat(currentNum, "\u96C6 ").concat(((_this5$currentEpisode = _this5.currentEpisode) === null || _this5$currentEpisode === void 0 ? void 0 : _this5$currentEpisode.title) || '');
      });
      var episodeNumEl = document.getElementById('currentEpisodeNum');
      if (episodeNumEl) {
        episodeNumEl.textContent = currentNum;
      }
      document.querySelectorAll('.drama-title').forEach(function (el) {
        el.textContent = _this5.dramaData.title;
      });
      var descEl = document.getElementById('dramaDescText');
      if (descEl) descEl.textContent = this.dramaData.description || '精彩剧情正在上演...';
      var total = this.dramaData.totalEpisodes || ((_this$dramaData$episo = this.dramaData.episodes) === null || _this$dramaData$episo === void 0 ? void 0 : _this$dramaData$episo.length) || 0;
      var totalEl = document.getElementById('totalEps');
      var drawerTotalEl = document.getElementById('drawerTotalEps');
      if (totalEl) totalEl.textContent = total;
      if (drawerTotalEl) drawerTotalEl.textContent = total;
      var coverEl = document.getElementById('drawerCover');
      if (coverEl && this.dramaData.coverImage) {
        coverEl.src = this.dramaData.coverImage;
      }
      this.loadCommentCount();
    }
  }, {
    key: "updateShareCount",
    value: function updateShareCount() {
      var btn = this.elements.shareBtn;
      if (!btn) return;
      var span = btn.querySelector('span');
      if (span && this.dramaData) {
        span.textContent = this.dramaData.shares_count || 0;
      }
    }
  }, {
    key: "handleSocialShare",
    value: function () {
      var _handleSocialShare = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(platform) {
        var _this$dramaData2, _this$currentEpisode4;
        var url, text, shareUrl, _this$dramaData3, _t4, _t5;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              url = encodeURIComponent(window.location.href);
              text = encodeURIComponent("Watching ".concat(((_this$dramaData2 = this.dramaData) === null || _this$dramaData2 === void 0 ? void 0 : _this$dramaData2.title) || 'this Drama', " - Ep.").concat(((_this$currentEpisode4 = this.currentEpisode) === null || _this$currentEpisode4 === void 0 ? void 0 : _this$currentEpisode4.num) || 1, " on Global Shorts!"));
              shareUrl = '';
              _t4 = platform;
              _context4.n = _t4 === 'whatsapp' ? 1 : _t4 === 'facebook' ? 2 : _t4 === 'twitter' ? 3 : _t4 === 'telegram' ? 4 : _t4 === 'copy' ? 5 : 7;
              break;
            case 1:
              shareUrl = "https://api.whatsapp.com/send?text=".concat(text, " ").concat(url);
              return _context4.a(3, 13);
            case 2:
              shareUrl = "https://www.facebook.com/sharer/sharer.php?u=".concat(url);
              return _context4.a(3, 13);
            case 3:
              shareUrl = "https://twitter.com/intent/tweet?text=".concat(text, "&url=").concat(url);
              return _context4.a(3, 13);
            case 4:
              shareUrl = "https://t.me/share/url?url=".concat(url, "&text=").concat(text);
              return _context4.a(3, 13);
            case 5:
              this.copyToClipboard(window.location.href);
              _context4.n = 6;
              return this.recordShare();
            case 6:
              return _context4.a(2);
            case 7:
              if (!navigator.share) {
                _context4.n = 12;
                break;
              }
              _context4.p = 8;
              _context4.n = 9;
              return navigator.share({
                title: (_this$dramaData3 = this.dramaData) === null || _this$dramaData3 === void 0 ? void 0 : _this$dramaData3.title,
                text: decodeURIComponent(text),
                url: window.location.href
              });
            case 9:
              _context4.n = 10;
              return this.recordShare();
            case 10:
              _context4.n = 12;
              break;
            case 11:
              _context4.p = 11;
              _t5 = _context4.v;
              console.log('Share canceled', _t5);
            case 12:
              return _context4.a(2);
            case 13:
              if (!shareUrl) {
                _context4.n = 14;
                break;
              }
              window.open(shareUrl, '_blank', 'width=600,height=400');
              _context4.n = 14;
              return this.recordShare();
            case 14:
              return _context4.a(2);
          }
        }, _callee4, this, [[8, 11]]);
      }));
      function handleSocialShare(_x3) {
        return _handleSocialShare.apply(this, arguments);
      }
      return handleSocialShare;
    }() // ✅ 新增方法：记录分享到后端
  }, {
    key: "recordShare",
    value: function () {
      var _recordShare = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var _this$dramaData4, _this$currentEpisode5, response, countSpan, _t6;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              if (_scripts_core_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"].isLoggedIn()) {
                _context5.n = 1;
                break;
              }
              return _context5.a(2);
            case 1:
              _context5.p = 1;
              _context5.n = 2;
              return _scripts_core_api_js__WEBPACK_IMPORTED_MODULE_0__.api.drama.share({
                drama_id: (_this$dramaData4 = this.dramaData) === null || _this$dramaData4 === void 0 ? void 0 : _this$dramaData4.id,
                // ✅ 后端期望 drama_id
                episode_id: (_this$currentEpisode5 = this.currentEpisode) === null || _this$currentEpisode5 === void 0 ? void 0 : _this$currentEpisode5.id,
                // ✅ 后端期望 episode_id
                platform: 'link' // ✅ 后端期望 platform
              });
            case 2:
              response = _context5.v;
              if (response.success) {
                this.dramaData.shares_count = response.shares_count;
                countSpan = this.elements.shareCount;
                if (countSpan) {
                  countSpan.textContent = this.dramaData.shares_count;
                }
              }
              _context5.n = 4;
              break;
            case 3:
              _context5.p = 3;
              _t6 = _context5.v;
              console.warn('记录分享失败:', _t6);
            case 4:
              return _context5.a(2);
          }
        }, _callee5, this, [[1, 3]]);
      }));
      function recordShare() {
        return _recordShare.apply(this, arguments);
      }
      return recordShare;
    }()
  }, {
    key: "copyToClipboard",
    value: function copyToClipboard(text) {
      var _this6 = this;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function () {
          _this6.showToast('链接已复制到剪贴板');
        })["catch"](function () {
          _this6.fallbackCopy(text);
        });
      } else {
        this.fallbackCopy(text);
      }
    }
  }, {
    key: "fallbackCopy",
    value: function fallbackCopy(text) {
      var input = document.createElement('input');
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      this.showToast('链接已复制到剪贴板');
    }
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
    key: "updateCheckinStatus",
    value: function () {
      var _updateCheckinStatus = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var checkinBtn, today, response, hasChecked, _t7;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              checkinBtn = this.elements.checkinBtn;
              if (checkinBtn) {
                _context6.n = 1;
                break;
              }
              return _context6.a(2);
            case 1:
              if (_scripts_core_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"].isLoggedIn()) {
                _context6.n = 2;
                break;
              }
              checkinBtn.style.opacity = '0.5';
              checkinBtn.style.pointerEvents = 'none';
              checkinBtn.classList.remove('checked');
              return _context6.a(2);
            case 2:
              _context6.p = 2;
              today = new Date().toISOString().split('T')[0];
              _context6.n = 3;
              return _scripts_core_api_js__WEBPACK_IMPORTED_MODULE_0__.api.user.getUserCheckins({
                start_date: today,
                end_date: today
              });
            case 3:
              response = _context6.v;
              hasChecked = response.data && response.data.length > 0;
              if (hasChecked) {
                checkinBtn.classList.add('checked');
                checkinBtn.style.pointerEvents = 'none';
                checkinBtn.style.opacity = '0.6';
              } else {
                checkinBtn.classList.remove('checked');
                checkinBtn.style.pointerEvents = 'auto';
                checkinBtn.style.opacity = '1';
              }
              _context6.n = 5;
              break;
            case 4:
              _context6.p = 4;
              _t7 = _context6.v;
              console.error('获取签到状态失败', _t7);
            case 5:
              return _context6.a(2);
          }
        }, _callee6, this, [[2, 4]]);
      }));
      function updateCheckinStatus() {
        return _updateCheckinStatus.apply(this, arguments);
      }
      return updateCheckinStatus;
    }()
  }, {
    key: "handleCheckin",
    value: function () {
      var _handleCheckin = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var _this7 = this;
        var checkinBtn, redirectUrl, response, user, _t8;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              checkinBtn = this.elements.checkinBtn;
              if (!checkinBtn.classList.contains('checked')) {
                _context7.n = 1;
                break;
              }
              return _context7.a(2);
            case 1:
              if (_scripts_core_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"].isLoggedIn()) {
                _context7.n = 2;
                break;
              }
              redirectUrl = encodeURIComponent(window.location.pathname + window.location.search);
              window.location.href = "/pages/login.html?redirect=".concat(redirectUrl);
              return _context7.a(2);
            case 2:
              if (!this.checkinCooldown) {
                _context7.n = 3;
                break;
              }
              return _context7.a(2);
            case 3:
              this.checkinCooldown = true;

              // 添加动画
              checkinBtn.style.animation = 'none';
              checkinBtn.offsetHeight;
              checkinBtn.style.animation = 'checkinPop 0.5s ease-out';
              _context7.p = 4;
              _context7.n = 5;
              return _scripts_core_api_js__WEBPACK_IMPORTED_MODULE_0__.api.user.checkin();
            case 5:
              response = _context7.v;
              if (response.success) {
                checkinBtn.classList.add('checked');
                checkinBtn.style.pointerEvents = 'none';
                checkinBtn.style.opacity = '0.6';

                // 更新用户金币
                user = _scripts_core_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentUser();
                if (user && response.coins !== undefined) {
                  user.coins = response.coins;
                  _scripts_core_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"].setUser(user);
                }
                this.showToast("\u7B7E\u5230\u6210\u529F\uFF01\u83B7\u5F97 ".concat(response.reward || 10, " \u91D1\u5E01"));
              } else {
                this.showToast(response.error || '签到失败');
              }
              _context7.n = 7;
              break;
            case 6:
              _context7.p = 6;
              _t8 = _context7.v;
              console.error('签到失败', _t8);
              this.showToast('网络错误，请重试');
            case 7:
              _context7.p = 7;
              setTimeout(function () {
                _this7.checkinCooldown = false;
              }, 1000);
              return _context7.f(7);
            case 8:
              return _context7.a(2);
          }
        }, _callee7, this, [[4, 6, 7, 8]]);
      }));
      function handleCheckin() {
        return _handleCheckin.apply(this, arguments);
      }
      return handleCheckin;
    }()
  }, {
    key: "showToast",
    value: function showToast(message) {
      var toast = document.createElement('div');
      toast.className = 'player-toast';
      toast.textContent = message;
      toast.style.cssText = "\n        position: fixed;\n        bottom: 100px;\n        left: 50%;\n        transform: translateX(-50%);\n        background: rgba(0,0,0,0.7);\n        color: white;\n        padding: 10px 20px;\n        border-radius: 20px;\n        z-index: 10000;\n    ";
      document.body.appendChild(toast);
      setTimeout(function () {
        return toast.remove();
      }, 2000);
    }
  }, {
    key: "loadFavoriteStatus",
    value: function () {
      var _loadFavoriteStatus = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var dramaId, response, countSpan, btn, _t9;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              dramaId = window.currentDramaId;
              if (dramaId) {
                _context8.n = 1;
                break;
              }
              return _context8.a(2);
            case 1:
              if (_scripts_core_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"].isLoggedIn()) {
                _context8.n = 2;
                break;
              }
              return _context8.a(2);
            case 2:
              _context8.p = 2;
              _context8.n = 3;
              return _scripts_core_api_js__WEBPACK_IMPORTED_MODULE_0__.api.drama.getFavoriteStatus(dramaId);
            case 3:
              response = _context8.v;
              if (response.success && response.data) {
                countSpan = this.elements.favoriteCount;
                if (countSpan) countSpan.textContent = response.data.favorites_count;
                btn = this.elements.favoriteBtn;
                if (btn) {
                  if (response.data.favorited) btn.classList.add('active');else btn.classList.remove('active');
                }
              }
              _context8.n = 5;
              break;
            case 4:
              _context8.p = 4;
              _t9 = _context8.v;
              console.error('获取收藏状态失败', _t9);
            case 5:
              return _context8.a(2);
          }
        }, _callee8, this, [[2, 4]]);
      }));
      function loadFavoriteStatus() {
        return _loadFavoriteStatus.apply(this, arguments);
      }
      return loadFavoriteStatus;
    }()
  }, {
    key: "loadLikeStatus",
    value: function () {
      var _loadLikeStatus = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var _this8 = this;
        var response, countSpan, btn, _t0;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.p = _context9.n) {
            case 0:
              if (window.currentDramaId) {
                _context9.n = 1;
                break;
              }
              setTimeout(function () {
                return _this8.loadLikeStatus();
              }, 100);
              return _context9.a(2);
            case 1:
              if (_scripts_core_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"].isLoggedIn()) {
                _context9.n = 2;
                break;
              }
              return _context9.a(2);
            case 2:
              _context9.p = 2;
              _context9.n = 3;
              return _scripts_core_api_js__WEBPACK_IMPORTED_MODULE_0__.api.drama.getLikeStatus(window.currentDramaId);
            case 3:
              response = _context9.v;
              if (response.success && response.data) {
                countSpan = this.elements.likeCount;
                if (countSpan) countSpan.textContent = response.data.likes_count;
                btn = this.elements.likeBtn;
                if (btn) {
                  if (response.data.liked) btn.classList.add('active');else btn.classList.remove('active');
                }
              }
              _context9.n = 5;
              break;
            case 4:
              _context9.p = 4;
              _t0 = _context9.v;
              console.error('loadLikeStatus error', _t0);
            case 5:
              return _context9.a(2);
          }
        }, _callee9, this, [[2, 4]]);
      }));
      function loadLikeStatus() {
        return _loadLikeStatus.apply(this, arguments);
      }
      return loadLikeStatus;
    }()
  }, {
    key: "updateI18n",
    value: function updateI18n() {
      if (_scripts_core_i18n_js__WEBPACK_IMPORTED_MODULE_1__["default"] && typeof _scripts_core_i18n_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateDOM === 'function') {
        _scripts_core_i18n_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateDOM();
      }
    }
  }]);
}();


/***/ },

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

/***/ 454
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
___CSS_LOADER_EXPORT___.push([module.id, `/* src/styles/pages/player.css */

/* =========================================
   📱 TikTok 风格播放器核心样式
   ========================================= */

/* ---------- 全局重置 ---------- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, sans-serif;
}

/* ---------- 播放页专用：锁定滚动并占满视口 ---------- */
html.player-page,
body.player-page {
    overflow: hidden !important;
    position: fixed !important;
    width: 100%;
    height: 100vh;                /* 使用 vh 确保填满视口 */
    background: #000;
    touch-action: none;           /* 禁止默认触摸行为（如双指缩放） */
}

/* 播放器容器：占满整个视口，作为所有元素的相对定位容器 */
.player-container {
    width: 100%;
    height: 100vh;
    position: relative;
    background: #000;
}

/* ---------- 视频底层 ---------- */
.player-video {
    width: 100% !important;
    height: 100% !important;
    position: absolute !important;
    top: 0;
    left: 0;
    z-index: 0;
    object-fit: cover;            /* 默认铺满，由 JS 动态控制 */
}

/* ---------- 交互悬浮层 ---------- */
.player-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;   /* 顶部与底部内容分开 */
    background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 15%, transparent 70%, rgba(0,0,0,0.7) 100%);
    pointer-events: none;             /* 默认所有子元素不接收鼠标事件 */
    z-index: 20;
}
.player-overlay > * {
    pointer-events: auto;             /* 子元素恢复事件接收，确保按钮可点击 */
}

/* ---------- 顶部区域 ---------- */
.overlay-top {
    padding: 40px 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
}
.top-left {
    display: flex;
    align-items: center;
    gap: 10px;
}
.top-title {
    font-size: 16px;
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(0,0,0,0.8);
}
.icon-btn, .back-btn {
    background: none;
    border: none;
    color: white;
    font-size: 22px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 0 1px 2px rgba(0,0,0,0.8);
    cursor: pointer;
}

/* ---------- 右侧操作栏（点赞、评论、分享等） ---------- */
.overlay-right {
    position: absolute;
    right: 12px;
    bottom: 120px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    z-index: 30;
}
.action-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: none;
    border: none;
    color: white;
    gap: 4px;
    cursor: pointer;
}
.action-item i {
    font-size: 32px;
    text-shadow: 0 1px 4px rgba(0,0,0,0.8);
    transition: transform 0.2s;
}
.action-item:active i {
    transform: scale(0.9);        /* 点击缩放效果 */
}
.action-item span {
    font-size: 12px;
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(0,0,0,0.8);
}
.action-item.active i {
    color: #FF3B5C;               /* 激活状态颜色（如已点赞） */
}

/* ---------- 作者头像与关注按钮 ---------- */
.avatar-wrap {
    position: relative;
    margin-bottom: 10px;
}
.author-avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 2px solid white;
    object-fit: cover;
}
.follow-btn {
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 18px;
    height: 18px;
    background: #FF3B5C;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    cursor: pointer;
    border: 1px solid white;
}

/* ---------- 底部信息区域 ---------- */
.overlay-bottom {
    padding: 0 16px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: calc(100% - 60px);     /* 留出右侧操作栏的空间 */
}
.drama-desc {
    color: white;
    margin-bottom: 5px;
}
.drama-desc h3 {
    font-size: 18px;
    margin-bottom: 6px;
    text-shadow: 0 1px 2px rgba(0,0,0,0.8);
}
.drama-tags {
    font-size: 14px;
    text-shadow: 0 1px 2px rgba(0,0,0,0.8);
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;         /* 限制最多两行 */
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.badge {
    background: #2ecc71;
    color: white;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 10px;
    margin-right: 6px;
    vertical-align: middle;
}

/* ---------- 选集与PC控制栏 ---------- */
.bottom-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}
.episode-selector {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,255,255,0.15);
    padding: 8px 16px;
    border-radius: 20px;
    color: white;
    font-size: 13px;
    backdrop-filter: blur(4px);   /* 毛玻璃效果 */
    cursor: pointer;
}
.episode-selector .arrow {
    opacity: 0.7;
    font-size: 10px;
}
.pc-controls {
    display: flex;
    gap: 15px;
}
.control-btn {
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
}

/* ---------- 底部进度条 ---------- */
.progress-area {
    width: 100vw;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 20px;                 /* 增大点击区域 */
    display: flex;
    align-items: flex-end;
    z-index: 50;
    cursor: pointer;
}
.progress-bar {
    width: 100%;
    height: 3px;                   /* 正常状态细条 */
    background: rgba(255, 255, 255, 0.4);
    transition: height 0.2s;
    position: relative;
}
.progress-area:active .progress-bar {
    height: 6px;                   /* 触摸时变粗，便于操作 */
}
.progress-fill {
    height: 100%;
    background: #FF3B5C;
    position: absolute;
    top: 0;
    left: 0;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
}
/* 拖拽圆点 */
.progress-fill::after {
    content: '';
    position: absolute;
    right: -4px;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 50%;
    opacity: 0.8;
    transition: all 0.2s;
}
.progress-area:active .progress-fill::after {
    width: 12px;
    height: 12px;
    opacity: 1;
}

/* ---------- 中央播放/暂停键（暂停时显示） ---------- */
.center-play-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    background: rgba(0,0,0,0.4);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 24px;
    backdrop-filter: blur(4px);
    pointer-events: none;          /* 不可点击，仅作为视觉提示 */
    z-index: 10;
}

/* 小屏幕隐藏 PC 专属控制按钮 */
@media (max-width: 768px) {
    .desktop-only {
        display: none !important;
    }
}

/* =========================================
   🗄️ 抽屉基础样式 (选集、评论等共用)
   ========================================= */

/* 抽屉遮罩层 */
.drawer-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 1000;
    display: flex;
    align-items: flex-end;          /* 让抽屉从底部滑出 */
    opacity: 0;
    pointer-events: none;           /* 默认隐藏不可点击 */
    transition: opacity 0.3s;
}
.drawer-overlay.active {
    opacity: 1;
    pointer-events: auto;           /* 激活时接收事件 */
}

/* 抽屉底部面板 */
.drawer-bottom-sheet {
    width: 100%;
    max-height: 75vh;
    background: #1f1f1f;
    border-radius: 16px 16px 0 0;
    transform: translateY(100%);     /* 默认隐藏到屏幕外下方 */
    transition: transform 0.3s cubic-bezier(0.1, 0.8, 0.2, 1);
    display: flex;
    flex-direction: column;
    color: white;
    padding-bottom: env(safe-area-inset-bottom); /* 适配 iPhone 底部安全区 */
}
.drawer-overlay.active .drawer-bottom-sheet {
    transform: translateY(0);        /* 滑入屏幕 */
}

/* 抽屉顶部手势条（类似 iOS 指示条） */
.drawer-handle {
    width: 36px;
    height: 4px;
    background: rgba(255,255,255,0.2);
    border-radius: 2px;
    margin: 10px auto 0;
}

/* 抽屉头部 */
.drawer-header {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255,255,255,0.05);
}

/* 可滚动的内容区域 */
.drawer-scroll-content {
    flex: 1;
    overflow-y: auto;
    padding: 20px 16px;
    -webkit-overflow-scrolling: touch; /* iOS 平滑滚动 */
}

/* 关闭按钮 */
.close-drawer {
    background: none;
    border: none;
    color: rgba(255,255,255,0.5);
    font-size: 20px;
    cursor: pointer;
    padding: 5px;
}

/* --- 选集抽屉 --- */
.drama-brief {
    display: flex;
    gap: 12px;
    align-items: center;
}
.drawer-cover {
    width: 40px;
    height: 54px;
    border-radius: 4px;
    object-fit: cover;
}
.drama-brief h3 {
    font-size: 16px;
    margin: 0 0 4px;
}
.drama-brief p {
    font-size: 12px;
    color: #888;
    margin: 0;
}
.episode-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;
}
.episode-grid-item {
    aspect-ratio: 1;
    background: rgba(255,255,255,0.08);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
}
.episode-grid-item.active {
    color: #FF3B5C;
    background: rgba(255,59,92,0.15);
}

/* --- 分享抽屉 --- */
.drawer-header h3 {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
}
.share-flex {
    display: flex;
    gap: 24px;
    overflow-x: auto;
    padding-bottom: 10px;
    scrollbar-width: none;
}
.share-flex::-webkit-scrollbar {
    display: none;
}
.share-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    min-width: 60px;
    cursor: pointer;
}
.share-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: white;
}
.share-icon.wa { background: #25D366; }
.share-icon.fb { background: #1877F2; }
.share-icon.tw { background: #000000; }
.share-icon.tg { background: #0088cc; }
.share-icon.cp { background: #666; }

/* --- 🌟 更多设置菜单 (倍速/清晰度) --- */
.setting-row {
    margin-bottom: 24px;
}
.setting-label {
    font-size: 14px;
    color: rgba(255,255,255,0.6);
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
}
.speed-options {
    display: flex;
    background: rgba(255,255,255,0.08);
    border-radius: 20px;
    overflow: hidden;
}
.speed-options span {
    flex: 1;
    text-align: center;
    padding: 10px 0;
    font-size: 14px;
    color: rgba(255,255,255,0.8);
    cursor: pointer;
    transition: all 0.2s;
}
/* 倍速选中状态：仿抖音白底黑字 */
.speed-options span.active {
    background: white;
    color: black;
    font-weight: bold;
    border-radius: 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}
.setting-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    font-size: 16px;
    cursor: pointer;
}
.setting-left {
    display: flex;
    align-items: center;
    gap: 10px;
}
.setting-right {
    color: rgba(255,255,255,0.5);
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 5px;
}

/* 弹幕开关 Toggle */
.toggle-switch {
    position: relative;
    display: inline-block;
    width: 44px;
    height: 24px;
}
.toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
}
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255,255,255,0.2);
    transition: .4s;
    border-radius: 24px;
}
.slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
}
input:checked + .slider {
    background-color: #FF3B5C;
}
input:checked + .slider:before {
    transform: translateX(20px);
}

/* --- 🌟 评论抽屉 --- */
.comment-sheet {
    background: #ffffff;
    color: #333;
}
.comment-sheet .drawer-header {
    border-bottom: 1px solid #eee;
    color: #000;
}
.comment-sheet .drawer-handle {
    background: #ccc;
}
.comment-sheet .close-drawer {
    color: #666;
}
.comment-title {
    display: flex;
    align-items: baseline;
    gap: 8px;
    font-size: 16px;
    font-weight: 600;
}
.comment-title span {
    font-size: 12px;
    font-weight: normal;
    color: #666;
}

.search-bar-fake {
    padding: 12px 16px;
    font-size: 13px;
    color: #666;
    border-bottom: 1px solid #f5f5f5;
    display: flex;
    align-items: center;
}
.search-bar-fake .hot-word {
    color: #5B75A6;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 5px;
    font-weight: 500;
}

.comment-list {
    padding: 0 16px 80px;
}
.comment-item {
    display: flex;
    gap: 12px;
    padding: 16px 0;
    border-bottom: 1px solid #f9f9f9;
}
.comment-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
}
.comment-body {
    flex: 1;
}
.comment-user {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
}
.comment-user .name {
    font-size: 14px;
    color: #666;
    font-weight: 500;
}
.like-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #999;
    font-size: 12px;
    cursor: pointer;
}
.like-btn i {
    font-size: 16px;
    margin-bottom: 2px;
}
.like-btn.liked {
    color: #FF3B5C;
}
.comment-text {
    font-size: 15px;
    color: #333;
    line-height: 1.5;
    margin-bottom: 8px;
}
.comment-meta {
    display: flex;
    gap: 15px;
    font-size: 12px;
    color: #999;
}
.expand-replies {
    display: inline-block;
    font-size: 13px;
    color: #5B75A6;
    margin-top: 8px;
    font-weight: 500;
    cursor: pointer;
}

.comment-input-area {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 12px 16px;
    background: #fff;
    border-top: 1px solid #eee;
    padding-bottom: calc(12px + env(safe-area-inset-bottom));
    z-index: 10;
}
.input-box {
    background: #f5f5f5;
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 8px 16px;
}
.input-box input {
    flex: 1;
    border: none;
    background: transparent;
    outline: none;
    font-size: 14px;
    color: #333;
}
.input-box .icon-emoji {
    font-size: 20px;
    color: #666;
    margin-left: 10px;
    cursor: pointer;
}
/* 沉浸式底部导航 - 自动隐藏 */
.bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 8px 0 16px;
    z-index: 100;
    transition: transform 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
    transform: translateY(0);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.bottom-nav.hide {
    transform: translateY(100%);
}

.bottom-nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 12px;
    transition: color 0.2s;
}

.bottom-nav-item.active {
    color: #FF385C;
}

.bottom-nav-item i {
    font-size: 22px;
}
/* 签到按钮样式 */
.checkin-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    color: white;
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
    cursor: pointer;
    transition: transform 0.2s;
}

.checkin-item i {
    font-size: 28px;
    color: #ffd966;
}

.checkin-item .count {
    font-size: 12px;
    font-weight: 500;
}

.checkin-item.checked i {
    color: #888;
    filter: grayscale(0.5);
}

.checkin-item:active {
    transform: scale(0.9);
}

/* 签到动画 */
@keyframes checkinPop {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); color: #ffaa00; }
    100% { transform: scale(1); }
}

.checkin-item:active i {
    animation: checkinPop 0.3s ease-out;
}

/* Toast 提示 */
.player-toast {
    position: fixed;
    bottom: 120px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0,0,0,0.8);
    color: #ffd966;
    padding: 8px 16px;
    border-radius: 30px;
    font-size: 14px;
    z-index: 1000;
    animation: fadeOut 2s ease-out forwards;
    white-space: nowrap;
}

@keyframes fadeOut {
    0% { opacity: 1; transform: translateX(-50%) translateY(0); }
    70% { opacity: 1; }
    100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
}
/* 播放器容器需要适配底部导航高度 */
.player-container {
    height: 100vh;
}`, ""]);
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

/***/ 957
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_player_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(454);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_player_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_player_css__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_player_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_player_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_player_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_player_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (player)
/* harmony export */ });
/* harmony import */ var _styles_pages_player_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(957);
/* harmony import */ var _core_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(225);
/* harmony import */ var _core_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93);
/* harmony import */ var _core_auth_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(527);
/* harmony import */ var _components_player_VideoPlayer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(431);
/* harmony import */ var _components_player_PlayerOverlay_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(390);
/* harmony import */ var _components_player_DrawerManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(569);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }








var PlayerPage = /*#__PURE__*/function () {
  function PlayerPage() {
    _classCallCheck(this, PlayerPage);
    var searchParams = new URLSearchParams(window.location.search);
    this.dramaId = searchParams.get('drama') || searchParams.get('id');
    this.episodeId = parseInt(searchParams.get('episode')) || 1;
    this.expandReplies = this.expandReplies.bind(this);
    console.log('🎬 Player initialized with:', {
      dramaId: this.dramaId,
      episodeId: this.episodeId,
      url: window.location.href
    });
    if (!this.dramaId) {
      console.error('❌ 剧集ID不存在，无法加载');
      alert('剧集ID不存在，请检查URL');
      return;
    }
    this.dramaData = null;
    this.unlockedDramasSet = new Set();
    this.unlockedEpisodesSet = new Set();
    this.player = null;
    this.overlay = null;
    this.moreMenu = null;
    this.drawerManager = _components_player_DrawerManager_js__WEBPACK_IMPORTED_MODULE_6__["default"];
    this.comments = [];
    this.commentPage = 1;
    this.hasMoreComments = true;
    this.replyToCommentId = null;
    this.pendingUnlockEpisode = null;
    this.recordedEpisodeId = null;
    this.init = this.init.bind(this);
    this.loadDramaData = this.loadDramaData.bind(this);
    this.showUnlockModal = this.showUnlockModal.bind(this);
    this.handleUnlock = this.handleUnlock.bind(this);
    this.updateUserAvatar = this.updateUserAvatar.bind(this);
    this.switchEpisode = this.switchEpisode.bind(this);
    this.setHotSearchWord = this.setHotSearchWord.bind(this);
    this.loadComments = this.loadComments.bind(this);
    this.loadReplies = this.loadReplies.bind(this);
    this.renderComments = this.renderComments.bind(this);
    this.attachCommentEvents = this.attachCommentEvents.bind(this);
    this.sendComment = this.sendComment.bind(this);
    this.toggleCommentLike = this.toggleCommentLike.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.replyToComment = this.replyToComment.bind(this);
    this.initCommentEvents = this.initCommentEvents.bind(this);
    this.playNextEpisode = this.playNextEpisode.bind(this);
    this._boundAdjustForVideo = null;
  }
  // 在 PlayerPage 类中添加
  return _createClass(PlayerPage, [{
    key: "checkLoginAndRedirect",
    value: function checkLoginAndRedirect() {
      if (!_core_auth_js__WEBPACK_IMPORTED_MODULE_3__["default"].isLoggedIn()) {
        // 保存当前页面路径，登录后返回
        var redirectUrl = encodeURIComponent(window.location.pathname + window.location.search);
        window.location.href = "/pages/login.html?redirect=".concat(redirectUrl);
        return false;
      }
      return true;
    }
  }, {
    key: "updateUserAvatar",
    value: function updateUserAvatar() {
      var avatarEl = document.getElementById('authorAvatar');
      if (!avatarEl) return;
      var user = _core_auth_js__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentUser();
      if (user) {
        var _user$nickname, _user$email;
        var initial = (((_user$nickname = user.nickname) === null || _user$nickname === void 0 ? void 0 : _user$nickname.charAt(0)) || ((_user$email = user.email) === null || _user$email === void 0 ? void 0 : _user$email.charAt(0)) || 'U').toUpperCase();
        avatarEl.textContent = initial;
      } else {
        avatarEl.textContent = 'U';
      }
    }
  }, {
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _t, _t2;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              this.showLoading();
              _context.p = 1;
              _context.p = 2;
              _context.n = 3;
              return Promise.race([_core_i18n_js__WEBPACK_IMPORTED_MODULE_2__["default"].init(), new Promise(function (_, reject) {
                return setTimeout(function () {
                  return reject(new Error('i18n 初始化超时'));
                }, 3000);
              })]);
            case 3:
              _context.n = 5;
              break;
            case 4:
              _context.p = 4;
              _t = _context.v;
              console.warn('i18n 初始化超时，继续执行', _t);
            case 5:
              if (!_core_auth_js__WEBPACK_IMPORTED_MODULE_3__["default"].isLoggedIn()) {
                _context.n = 6;
                break;
              }
              _context.n = 6;
              return this.loadUnlockedDramas();
            case 6:
              _context.n = 7;
              return this.loadDramaData();
            case 7:
              window.currentDramaId = this.dramaId;
              this.updateUserAvatar();
              if (this.dramaData.currentEpisode.canPlay) {
                _context.n = 8;
                break;
              }
              this.showUnlockModal(this.dramaData.currentEpisode, this.dramaData.currentEpisode.unlockType);
              return _context.a(2);
            case 8:
              this.setHotSearchWord();
              console.log('✅ 真实数据加载成功，准备初始化播放器:', this.dramaData);
              window.addEventListener('auth:login', this.updateUserAvatar);
              window.addEventListener('auth:logout', this.updateUserAvatar);
              this.initPlayer();
              this.initDrawers();
              this.initMoreMenu();
              this.initSwipe();
              this.initCommentEvents();
              this.initAutoHideNav();

              // 刷新选集抽屉（由 overlay 负责）
              this.overlay.renderEpisodeGrid();
              _core_i18n_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateDOM();
              this.hideLoading();
              document.documentElement.style.overflow = 'hidden';
              _context.n = 10;
              break;
            case 9:
              _context.p = 9;
              _t2 = _context.v;
              console.error('Player initialization failed:', _t2);
              this.showError(_t2.message);
            case 10:
              return _context.a(2);
          }
        }, _callee, this, [[2, 4], [1, 9]]);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "initAutoHideNav",
    value: function initAutoHideNav() {
      var bottomNav = document.querySelector('.bottom-nav');
      if (!bottomNav) return;
      var hideTimer;
      var isNavVisible = true;
      var showNav = function showNav() {
        if (!isNavVisible) {
          bottomNav.classList.remove('hide');
          isNavVisible = true;
        }
        clearTimeout(hideTimer);
        hideTimer = setTimeout(function () {
          bottomNav.classList.add('hide');
          isNavVisible = false;
        }, 3000);
      };
      var hideNav = function hideNav() {
        clearTimeout(hideTimer);
        bottomNav.classList.add('hide');
        isNavVisible = false;
      };
      document.addEventListener('click', function (e) {
        if (e.target.closest('button') || e.target.closest('.drawer-overlay') || e.target.closest('input')) {
          return;
        }
        showNav();
      });
      var touchStartY = 0;
      document.addEventListener('touchstart', function (e) {
        touchStartY = e.touches[0].clientY;
      });
      document.addEventListener('touchend', function (e) {
        var touchEndY = e.changedTouches[0].clientY;
        var deltaY = touchEndY - touchStartY;
        if (deltaY < -30) {
          hideNav();
        } else if (deltaY > 30) {
          showNav();
        }
      });
      showNav();
    }
  }, {
    key: "initCommentEvents",
    value: function initCommentEvents() {
      var _this = this;
      var sendBtn = document.getElementById('sendCommentBtn');
      var commentInput = document.getElementById('commentInput');
      if (sendBtn && commentInput) {
        sendBtn.addEventListener('click', this.sendComment);
        commentInput.addEventListener('keypress', function (e) {
          if (e.key === 'Enter') {
            e.preventDefault();
            _this.sendComment();
          }
        });
      }
      var commentDrawer = document.getElementById('drawerComment');
      if (commentDrawer) {
        var self = this;
        var observer = new MutationObserver(function (mutations) {
          mutations.forEach(function (mutation) {
            if (mutation.target.classList.contains('active')) {
              self.loadComments();
            }
          });
        });
        observer.observe(commentDrawer, {
          attributes: true,
          attributeFilter: ['class']
        });
      }
    }
  }, {
    key: "setHotSearchWord",
    value: function setHotSearchWord() {
      var _this$dramaData;
      var hotWordEl = document.getElementById('hotSearchWord');
      if (!hotWordEl || !((_this$dramaData = this.dramaData) !== null && _this$dramaData !== void 0 && _this$dramaData.currentEpisode)) return;
      var episodeNum = this.dramaData.currentEpisode.num || 1;
      var episodeTitle = this.dramaData.currentEpisode.title || '';
      var translatedText = _core_i18n_js__WEBPACK_IMPORTED_MODULE_2__["default"].t('player.episode_format', {
        num: episodeNum,
        title: episodeTitle
      });
      hotWordEl.textContent = translatedText;
      hotWordEl.setAttribute('data-i18n', 'player.episode_format');
      hotWordEl.setAttribute('data-i18n-options', JSON.stringify({
        num: episodeNum,
        title: episodeTitle
      }));
    }
  }, {
    key: "loadComments",
    value: function () {
      var _loadComments = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _this$dramaData2;
        var page,
          targetId,
          response,
          _response$pagination,
          _response$pagination2,
          total,
          _args2 = arguments,
          _t3;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              page = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 1;
              targetId = (_this$dramaData2 = this.dramaData) === null || _this$dramaData2 === void 0 || (_this$dramaData2 = _this$dramaData2.currentEpisode) === null || _this$dramaData2 === void 0 ? void 0 : _this$dramaData2.id;
              if (targetId) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              _context2.p = 1;
              _context2.n = 2;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.comments.getList(targetId, page);
            case 2:
              response = _context2.v;
              if (response.success) {
                this.comments = response.data;
                this.commentPage = page;
                this.hasMoreComments = ((_response$pagination = response.pagination) === null || _response$pagination === void 0 ? void 0 : _response$pagination.pages) > page;
                this.renderComments();
                total = ((_response$pagination2 = response.pagination) === null || _response$pagination2 === void 0 ? void 0 : _response$pagination2.total) || this.comments.length;
                if (this.overlay && this.overlay.updateCommentCount) {
                  this.overlay.updateCommentCount(total);
                }
              }
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t3 = _context2.v;
              console.error('加载评论失败', _t3);
            case 4:
              return _context2.a(2);
          }
        }, _callee2, this, [[1, 3]]);
      }));
      function loadComments() {
        return _loadComments.apply(this, arguments);
      }
      return loadComments;
    }()
  }, {
    key: "loadReplies",
    value: function () {
      var _loadReplies = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(commentId) {
        var response, comment, _t4;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.comments.getReplies(commentId);
            case 1:
              response = _context3.v;
              if (response.success) {
                comment = this.comments.find(function (c) {
                  return c.id === commentId;
                });
                if (comment) {
                  comment.replies = response.data;
                  comment.repliesLoaded = true;
                  this.renderComments();
                }
              }
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t4 = _context3.v;
              console.error('加载回复失败', _t4);
            case 3:
              return _context3.a(2);
          }
        }, _callee3, this, [[0, 2]]);
      }));
      function loadReplies(_x) {
        return _loadReplies.apply(this, arguments);
      }
      return loadReplies;
    }()
  }, {
    key: "renderComments",
    value: function renderComments() {
      var _this2 = this;
      var commentList = document.getElementById('commentList');
      if (!commentList) return;
      if (this.comments.length === 0) {
        commentList.innerHTML = '<div class="empty-comments">暂无评论，来说两句吧~</div>';
        return;
      }
      var currentUser = _core_auth_js__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentUser();
      var _renderComment = function renderComment(comment) {
        var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        if (depth > 3) return '';
        var isOwner = (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id) === comment.user_id;
        var avatarUrl = comment.avatar_url || comment.user_avatar || '/images/default-avatar.png';
        return "\n                <div class=\"comment-item\" data-comment-id=\"".concat(comment.id, "\" style=\"margin-left: ").concat(depth * 20, "px\">\n                    <img src=\"").concat(avatarUrl, "\" class=\"comment-avatar\" alt=\"avatar\">\n                    <div class=\"comment-body\">\n                        <div class=\"comment-user\">\n                            <span class=\"name\">").concat(comment.user_name || '用户', "</span>\n                            <button class=\"like-btn ").concat(comment.is_liked ? 'liked' : '', "\" data-comment-id=\"").concat(comment.id, "\">\n                                <i class=\"fas fa-heart\"></i>\n                                <span>").concat(comment.likes_count || 0, "</span>\n                            </button>\n                        </div>\n                        <div class=\"comment-text\">").concat(comment.content, "</div>\n                        <div class=\"comment-meta\">\n                            <span>").concat(_this2.formatTime(comment.created_at), "</span>\n                            <span class=\"reply-btn\" data-reply-id=\"").concat(comment.id, "\" data-i18n=\"player.reply\">\u56DE\u590D</span>\n                            ").concat(isOwner ? "<span class=\"delete-btn\" data-delete-id=\"".concat(comment.id, "\" data-i18n=\"player.delete\">\u5220\u9664</span>") : '', "\n                        </div>\n                        ").concat(comment.reply_count > 0 && !comment.repliesLoaded ? "<div class=\"comment-replies\">\n                                <span class=\"expand-replies\" data-expand-id=\"".concat(comment.id, "\">\n                                    ").concat(_core_i18n_js__WEBPACK_IMPORTED_MODULE_2__["default"].t('player.expandReplies', {
          count: comment.reply_count
        }), "\n                                </span>\n                            </div>") : '', "\n                        ").concat(comment.repliesLoaded && comment.replies && comment.replies.length > 0 ? "<div class=\"replies-list\">\n                                ".concat(comment.replies.map(function (reply) {
          return _renderComment(reply, depth + 1);
        }).join(''), "\n                            </div>") : '', "\n                    </div>\n                </div>\n            ");
      };
      commentList.innerHTML = this.comments.map(function (comment) {
        return _renderComment(comment, 0);
      }).join('');
      this.attachCommentEvents();
      if (window.i18n) window.i18n.updateDOM();
    }
  }, {
    key: "attachCommentEvents",
    value: function attachCommentEvents() {
      var _this3 = this;
      document.querySelectorAll('.like-btn').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          _this3.toggleCommentLike(btn.dataset.commentId);
        });
      });
      document.querySelectorAll('.reply-btn').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          _this3.replyToComment(btn.dataset.replyId);
        });
      });
      document.querySelectorAll('.delete-btn').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          if (confirm('确定删除这条评论吗？')) {
            _this3.deleteComment(btn.dataset.deleteId);
          }
        });
      });
      document.querySelectorAll('.expand-replies').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          _this3.expandReplies(btn.dataset.expandId);
        });
      });
    }
  }, {
    key: "expandReplies",
    value: function () {
      var _expandReplies = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(commentId) {
        var comment;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              comment = this.comments.find(function (c) {
                return c.id === commentId;
              });
              if (comment) {
                _context4.n = 1;
                break;
              }
              return _context4.a(2);
            case 1:
              if (!comment.repliesLoaded) {
                _context4.n = 2;
                break;
              }
              comment.repliesVisible = !comment.repliesVisible;
              this.renderComments();
              return _context4.a(2);
            case 2:
              _context4.n = 3;
              return this.loadReplies(commentId);
            case 3:
              comment.repliesVisible = true;
              this.renderComments();
            case 4:
              return _context4.a(2);
          }
        }, _callee4, this);
      }));
      function expandReplies(_x2) {
        return _expandReplies.apply(this, arguments);
      }
      return expandReplies;
    }()
  }, {
    key: "sendComment",
    value: function () {
      var _sendComment = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var _this$dramaData3;
        var input, content, targetId, response, parentComment, commentCountEl, _t5;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              if (this.checkLoginAndRedirect()) {
                _context5.n = 1;
                break;
              }
              return _context5.a(2);
            case 1:
              input = document.getElementById('commentInput');
              content = input.value.trim();
              if (content) {
                _context5.n = 2;
                break;
              }
              return _context5.a(2);
            case 2:
              targetId = (_this$dramaData3 = this.dramaData) === null || _this$dramaData3 === void 0 || (_this$dramaData3 = _this$dramaData3.currentEpisode) === null || _this$dramaData3 === void 0 ? void 0 : _this$dramaData3.id;
              if (targetId) {
                _context5.n = 3;
                break;
              }
              return _context5.a(2);
            case 3:
              _context5.p = 3;
              _context5.n = 4;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.comments.create({
                targetId: targetId,
                content: content,
                parentId: this.replyToCommentId
              });
            case 4:
              response = _context5.v;
              if (response.success) {
                input.value = '';
                this.replyToCommentId = null;
                input.placeholder = _core_i18n_js__WEBPACK_IMPORTED_MODULE_2__["default"].t('player.commentPlaceholder') || '说点什么...';
                if (response.data.parent_id) {
                  parentComment = this.comments.find(function (c) {
                    return c.id === response.data.parent_id;
                  });
                  if (parentComment) {
                    if (!parentComment.replies) parentComment.replies = [];
                    parentComment.replies.unshift(response.data);
                    parentComment.reply_count = (parentComment.reply_count || 0) + 1;
                    parentComment.repliesLoaded = true;
                    this.renderComments();
                  }
                } else {
                  this.comments.unshift(response.data);
                  this.renderComments();
                  commentCountEl = document.getElementById('commentCount');
                  if (commentCountEl) {
                    commentCountEl.textContent = parseInt(commentCountEl.textContent || 0) + 1;
                  }
                }
              }
              _context5.n = 6;
              break;
            case 5:
              _context5.p = 5;
              _t5 = _context5.v;
              console.error('发送评论失败:', _t5);
            case 6:
              return _context5.a(2);
          }
        }, _callee5, this, [[3, 5]]);
      }));
      function sendComment() {
        return _sendComment.apply(this, arguments);
      }
      return sendComment;
    }()
  }, {
    key: "toggleCommentLike",
    value: function () {
      var _toggleCommentLike = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(commentId) {
        var _findComment, comment, response, _t6;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              if (this.checkLoginAndRedirect()) {
                _context6.n = 1;
                break;
              }
              return _context6.a(2);
            case 1:
              _findComment = function findComment(list, id) {
                var _iterator = _createForOfIteratorHelper(list),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var c = _step.value;
                    if (c.id === id) return c;
                    if (c.replies) {
                      var found = _findComment(c.replies, id);
                      if (found) return found;
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                return null;
              };
              comment = _findComment(this.comments, commentId);
              if (comment) {
                _context6.n = 2;
                break;
              }
              return _context6.a(2);
            case 2:
              _context6.p = 2;
              if (!comment.is_liked) {
                _context6.n = 4;
                break;
              }
              _context6.n = 3;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.comments.unlike(commentId);
            case 3:
              response = _context6.v;
              _context6.n = 6;
              break;
            case 4:
              _context6.n = 5;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.comments.like(commentId);
            case 5:
              response = _context6.v;
            case 6:
              if (response.success) {
                comment.is_liked = !comment.is_liked;
                comment.likes_count = response.likes_count;
                this.renderComments();
              }
              _context6.n = 8;
              break;
            case 7:
              _context6.p = 7;
              _t6 = _context6.v;
              console.error('点赞失败', _t6);
            case 8:
              return _context6.a(2);
          }
        }, _callee6, this, [[2, 7]]);
      }));
      function toggleCommentLike(_x3) {
        return _toggleCommentLike.apply(this, arguments);
      }
      return toggleCommentLike;
    }()
  }, {
    key: "deleteComment",
    value: function () {
      var _deleteComment = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(commentId) {
        var response, _removeFromList, commentCountEl, _t7;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              if (this.checkLoginAndRedirect()) {
                _context7.n = 1;
                break;
              }
              return _context7.a(2);
            case 1:
              _context7.p = 1;
              _context7.n = 2;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.comments["delete"](commentId);
            case 2:
              response = _context7.v;
              if (response.success) {
                _removeFromList = function removeFromList(list, id) {
                  var index = list.findIndex(function (c) {
                    return c.id === id;
                  });
                  if (index !== -1) {
                    list.splice(index, 1);
                    return true;
                  }
                  var _iterator2 = _createForOfIteratorHelper(list),
                    _step2;
                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var c = _step2.value;
                      if (c.replies && _removeFromList(c.replies, id)) return true;
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                  return false;
                };
                _removeFromList(this.comments, commentId);
                this.renderComments();
                commentCountEl = document.getElementById('commentCount');
                if (commentCountEl) {
                  commentCountEl.textContent = parseInt(commentCountEl.textContent || 0) - 1;
                }
              }
              _context7.n = 4;
              break;
            case 3:
              _context7.p = 3;
              _t7 = _context7.v;
              console.error('删除失败', _t7);
            case 4:
              return _context7.a(2);
          }
        }, _callee7, this, [[1, 3]]);
      }));
      function deleteComment(_x4) {
        return _deleteComment.apply(this, arguments);
      }
      return deleteComment;
    }()
  }, {
    key: "replyToComment",
    value: function replyToComment(commentId) {
      this.replyToCommentId = commentId;
      var input = document.getElementById('commentInput');
      var comment = this.comments.find(function (c) {
        return c.id === commentId;
      });
      if (input) {
        input.focus();
        input.placeholder = "\u56DE\u590D @".concat((comment === null || comment === void 0 ? void 0 : comment.user_name) || '用户', "...");
      }
    }
  }, {
    key: "formatTime",
    value: function formatTime(timestamp) {
      var date = new Date(timestamp);
      var now = new Date();
      var diff = (now - date) / 1000 / 60;
      if (diff < 1) return '刚刚';
      if (diff < 60) return "".concat(Math.floor(diff), "\u5206\u949F\u524D");
      if (diff < 1440) return "".concat(Math.floor(diff / 60), "\u5C0F\u65F6\u524D");
      if (diff < 10080) return "".concat(Math.floor(diff / 1440), "\u5929\u524D");
      return "".concat(date.getMonth() + 1, "\u6708").concat(date.getDate(), "\u65E5");
    }
  }, {
    key: "loadUnlockedDramas",
    value: function () {
      var _loadUnlockedDramas = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var user, dramaResponse, episodeResponse, _t8;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              if (_core_auth_js__WEBPACK_IMPORTED_MODULE_3__["default"].isLoggedIn()) {
                _context8.n = 1;
                break;
              }
              return _context8.a(2);
            case 1:
              _context8.p = 1;
              user = _core_auth_js__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentUser();
              if (user !== null && user !== void 0 && user.id) {
                _context8.n = 2;
                break;
              }
              return _context8.a(2);
            case 2:
              _context8.n = 3;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.user.getUnlockedDramas(user.id);
            case 3:
              dramaResponse = _context8.v;
              if (dramaResponse.success && Array.isArray(dramaResponse.data)) {
                this.unlockedDramasSet = new Set(dramaResponse.data.map(function (item) {
                  return item.drama_id;
                }));
              }
              _context8.n = 4;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.user.getUnlockedEpisodes(user.id);
            case 4:
              episodeResponse = _context8.v;
              if (episodeResponse.success && Array.isArray(episodeResponse.data)) {
                this.unlockedEpisodesSet = new Set(episodeResponse.data.map(function (item) {
                  return item.episode_id;
                }));
              }
              console.log('✅ 已解锁剧集:', this.unlockedDramasSet);
              console.log('✅ 已解锁单集:', this.unlockedEpisodesSet);
              _context8.n = 6;
              break;
            case 5:
              _context8.p = 5;
              _t8 = _context8.v;
              console.warn('获取解锁记录失败', _t8);
            case 6:
              return _context8.a(2);
          }
        }, _callee8, this, [[1, 5]]);
      }));
      function loadUnlockedDramas() {
        return _loadUnlockedDramas.apply(this, arguments);
      }
      return loadUnlockedDramas;
    }()
  }, {
    key: "loadDramaData",
    value: function () {
      var _loadDramaData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var _this4 = this;
        var _yield$Promise$all, _yield$Promise$all2, dramaRes, episodesRes, dramaInfo, episodeList, isLoggedIn, isVIP, isDramaUnlocked, dramaAccessType, episodes, _t9;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.p = _context9.n) {
            case 0:
              _context9.p = 0;
              _context9.n = 1;
              return Promise.all([_core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.drama.getDetail(this.dramaId), _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.drama.getEpisodes(this.dramaId)]);
            case 1:
              _yield$Promise$all = _context9.v;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              dramaRes = _yield$Promise$all2[0];
              episodesRes = _yield$Promise$all2[1];
              if (!(!dramaRes.success || !dramaRes.data)) {
                _context9.n = 2;
                break;
              }
              throw new Error(dramaRes.error || '无法获取剧集详情');
            case 2:
              dramaInfo = dramaRes.data;
              episodeList = episodesRes.success && Array.isArray(episodesRes.data) ? episodesRes.data : [];
              episodeList.sort(function (a, b) {
                return a.episode_number - b.episode_number;
              });
              isLoggedIn = _core_auth_js__WEBPACK_IMPORTED_MODULE_3__["default"].isLoggedIn();
              isVIP = _core_auth_js__WEBPACK_IMPORTED_MODULE_3__["default"].isVIP();
              isDramaUnlocked = this.unlockedDramasSet.has(dramaInfo.id);
              dramaAccessType = dramaInfo.access_type || 'free';
              episodes = episodeList.map(function (ep) {
                var locked = true;
                var canPlay = false;
                var needUnlock = false;
                var unlockType = null;
                if (ep.price === 0) {
                  locked = false;
                  canPlay = true;
                } else {
                  var isEpisodeUnlocked = _this4.unlockedEpisodesSet.has(ep.id);
                  if (isLoggedIn && (isVIP || isEpisodeUnlocked)) {
                    locked = false;
                    canPlay = true;
                  } else {
                    locked = true;
                    canPlay = false;
                    needUnlock = true;
                    unlockType = 'coin';
                  }
                }
                return {
                  id: ep.id,
                  num: ep.episode_number,
                  number: ep.episode_number,
                  title: ep.title,
                  duration: ep.duration,
                  videoUrl: ep.video_url,
                  price: ep.price,
                  locked: locked,
                  canPlay: canPlay,
                  needUnlock: needUnlock,
                  unlockType: unlockType,
                  isFree: ep.is_free
                };
              });
              this.dramaData = {
                id: dramaInfo.id,
                title: dramaInfo.title,
                coverImage: dramaInfo.cover_url,
                description: dramaInfo.description,
                totalEpisodes: dramaInfo.total_episodes || episodes.length,
                shares_count: dramaInfo.shares_count || 0,
                episodes: episodes,
                accessType: dramaAccessType,
                coinCost: dramaInfo.coin_cost || 0,
                isDramaUnlocked: isDramaUnlocked
              };
              this.dramaData.currentEpisode = episodes.find(function (e) {
                return e.num === _this4.episodeId;
              }) || episodes[0];
              if (this.dramaData.currentEpisode) {
                _context9.n = 3;
                break;
              }
              throw new Error('该剧集暂无视频资源');
            case 3:
              if (this.dramaData.currentEpisode.canPlay) {
                _context9.n = 4;
                break;
              }
              this.showUnlockModal(this.dramaData.currentEpisode, this.dramaData.currentEpisode.unlockType);
              return _context9.a(2);
            case 4:
              this.setHotSearchWord();
              _context9.n = 6;
              break;
            case 5:
              _context9.p = 5;
              _t9 = _context9.v;
              throw _t9;
            case 6:
              return _context9.a(2);
          }
        }, _callee9, this, [[0, 5]]);
      }));
      function loadDramaData() {
        return _loadDramaData.apply(this, arguments);
      }
      return loadDramaData;
    }()
  }, {
    key: "showUnlockModal",
    value: function showUnlockModal(episode) {
      var _this5 = this;
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'coin';
      // 未登录检查
      if (!_core_auth_js__WEBPACK_IMPORTED_MODULE_3__["default"].isLoggedIn()) {
        var redirectUrl = encodeURIComponent(window.location.pathname + window.location.search);
        window.location.href = "/pages/login.html?redirect=".concat(redirectUrl);
        return;
      }
      this.hideLoading();
      var user = _core_auth_js__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentUser();
      var userCoins = (user === null || user === void 0 ? void 0 : user.coins) || 0;
      var price = episode.price;
      var hasEnough = userCoins >= price;
      this.pendingUnlockEpisode = episode;
      var modal = document.getElementById('unlockModal');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'unlockModal';
        modal.className = 'modal-overlay';
        document.body.appendChild(modal);
      }
      modal.innerHTML = "\n        <div class=\"unlock-modal\">\n            <div class=\"modal-header\">\n                <h3 class=\"modal-title\">\u89E3\u9501\u7B2C".concat(episode.num, "\u96C6</h3>\n                <button class=\"modal-close\" id=\"closeUnlockModal\"><i class=\"fas fa-times\"></i></button>\n            </div>\n            <div class=\"modal-body\">\n                <p>\u89E3\u9501\u4EF7\u683C: ").concat(price, " \u91D1\u5E01</p>\n                <p>\u5F53\u524D\u4F59\u989D: ").concat(userCoins, " \u91D1\u5E01</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-secondary\" id=\"cancelUnlockBtn\">\u53D6\u6D88</button>\n                ").concat(hasEnough ? '<button class="btn btn-primary" id="confirmUnlockBtn">立即解锁</button>' : '<button class="btn btn-primary" id="goRechargeBtn">去充值</button>', "\n            </div>\n        </div>\n    ");
      modal.classList.add('active');
      document.getElementById('closeUnlockModal').addEventListener('click', function () {
        return modal.classList.remove('active');
      });
      document.getElementById('cancelUnlockBtn').addEventListener('click', function () {
        return modal.classList.remove('active');
      });
      if (hasEnough) {
        var confirmBtn = document.getElementById('confirmUnlockBtn');
        confirmBtn.onclick = function () {
          return _this5.handleUnlock(_this5.pendingUnlockEpisode);
        };
      } else {
        document.getElementById('goRechargeBtn').addEventListener('click', function () {
          modal.classList.remove('active');
          window.location.href = '/pages/payment.html';
        });
      }
    }
  }, {
    key: "handleUnlock",
    value: function () {
      var _handleUnlock = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(episode) {
        var redirectUrl, episodeId, dramaId, response, user, modal, _t0;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.p = _context0.n) {
            case 0:
              if (_core_auth_js__WEBPACK_IMPORTED_MODULE_3__["default"].isLoggedIn()) {
                _context0.n = 1;
                break;
              }
              redirectUrl = encodeURIComponent(window.location.pathname + window.location.search);
              window.location.href = "/pages/login.html?redirect=".concat(redirectUrl);
              return _context0.a(2);
            case 1:
              _context0.p = 1;
              episodeId = episode.id;
              dramaId = this.dramaId;
              _context0.n = 2;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.user.unlockEpisode(episodeId, dramaId);
            case 2:
              response = _context0.v;
              if (response.success) {
                user = _core_auth_js__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentUser();
                if (user && response.coins_remaining !== undefined) {
                  user.coins = response.coins_remaining;
                  _core_auth_js__WEBPACK_IMPORTED_MODULE_3__["default"].setUser(user);
                }
                this.unlockedEpisodesSet.add(episodeId);
                episode.locked = false;
                episode.canPlay = true;
                episode.needUnlock = false;
                modal = document.getElementById('unlockModal');
                if (modal) modal.classList.remove('active');
                this.overlay.renderEpisodeGrid();
                this.overlay.switchEpisode(episode);
                console.log("\u2705 \u7B2C".concat(episode.num, "\u96C6\u89E3\u9501\u6210\u529F\uFF0C\u5F00\u59CB\u64AD\u653E"));
              } else {
                alert('解锁失败：' + (response.error || '未知错误'));
              }
              _context0.n = 4;
              break;
            case 3:
              _context0.p = 3;
              _t0 = _context0.v;
              console.error('解锁请求失败:', _t0);
              alert('网络错误，请检查连接或稍后重试');
            case 4:
              return _context0.a(2);
          }
        }, _callee0, this, [[1, 3]]);
      }));
      function handleUnlock(_x5) {
        return _handleUnlock.apply(this, arguments);
      }
      return handleUnlock;
    }()
  }, {
    key: "recordCurrentEpisode",
    value: function recordCurrentEpisode() {
      var _this$dramaData4;
      if (!_core_auth_js__WEBPACK_IMPORTED_MODULE_3__["default"].isLoggedIn()) return;
      var episodeId = (_this$dramaData4 = this.dramaData) === null || _this$dramaData4 === void 0 || (_this$dramaData4 = _this$dramaData4.currentEpisode) === null || _this$dramaData4 === void 0 ? void 0 : _this$dramaData4.id;
      var dramaId = this.dramaId;
      if (!episodeId) return;

      // 强制转换为字符串，防止对象类型导致 D1 错误
      episodeId = String(episodeId);
      dramaId = String(dramaId);
      if (this.recordedEpisodeId === episodeId) return;
      _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.drama.recordPlay({
        drama_id: dramaId,
        episode_id: episodeId
      })["catch"](function (err) {
        console.warn('记录观看历史失败:', err);
      });
      this.recordedEpisodeId = episodeId;
    }
  }, {
    key: "initPlayer",
    value: function initPlayer() {
      var _this6 = this;
      var container = document.getElementById('player');
      this.player = new _components_player_VideoPlayer_js__WEBPACK_IMPORTED_MODULE_4__["default"](container, {
        sources: [{
          url: this.dramaData.currentEpisode.videoUrl,
          quality: '1080p',
          type: 'video/mp4'
        }],
        autoplay: true,
        muted: false,
        loop: false
      });

      // 监听播放事件，记录观看
      this.player.on('play', function () {
        _this6.recordCurrentEpisode();
      });
      this.player.on('ended', function () {
        _this6.playNextEpisode();
      });
      this.overlay = new _components_player_PlayerOverlay_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.player, this.dramaData);
    }
  }, {
    key: "initSwipe",
    value: function initSwipe() {
      var _this7 = this;
      var container = document.getElementById('player');
      if (!container) return;
      var startY = 0;
      var isDragging = false;
      var minDistance = 50; // 最小滑动距离（像素）

      var onTouchStart = function onTouchStart(e) {
        startY = e.touches[0].clientY;
        isDragging = true;
      };
      var onTouchMove = function onTouchMove(e) {
        // 可以阻止默认滚动行为，但小心影响页面滚动
        // e.preventDefault();
      };
      var onTouchEnd = function onTouchEnd(e) {
        if (!isDragging) return;
        isDragging = false;
        var endY = e.changedTouches[0].clientY;
        var deltaY = endY - startY;
        if (Math.abs(deltaY) >= minDistance) {
          if (deltaY < 0) {
            _this7.switchEpisode('next'); // 向上滑动 -> 下一集
          } else {
            _this7.switchEpisode('prev'); // 向下滑动 -> 上一集
          }
        }
      };
      container.addEventListener('touchstart', onTouchStart);
      container.addEventListener('touchmove', onTouchMove);
      container.addEventListener('touchend', onTouchEnd);

      // 可选：添加鼠标拖拽支持（用于 PC 调试）
      var mouseStartY = 0;
      var isMouseDown = false;
      container.addEventListener('mousedown', function (e) {
        mouseStartY = e.clientY;
        isMouseDown = true;
        e.preventDefault(); // 防止拖拽时选中文本
      });
      window.addEventListener('mousemove', function (e) {
        if (!isMouseDown) return;
        // 可以增加视觉反馈，但不必须
      });
      window.addEventListener('mouseup', function (e) {
        if (!isMouseDown) return;
        isMouseDown = false;
        var deltaY = e.clientY - mouseStartY;
        if (Math.abs(deltaY) >= minDistance) {
          if (deltaY < 0) {
            _this7.switchEpisode('next');
          } else {
            _this7.switchEpisode('prev');
          }
        }
      });
    }
  }, {
    key: "playNextEpisode",
    value: function playNextEpisode() {
      var currentNum = this.dramaData.currentEpisode.num;
      var nextNum = currentNum + 1;
      var nextEpisode = this.dramaData.episodes.find(function (ep) {
        return ep.num === nextNum;
      });
      if (!nextEpisode) {
        console.log('已经是最后一集');
        return;
      }
      // 重置记录标记
      this.recordedEpisodeId = null;
      this.overlay.switchEpisode(nextEpisode);
    }
  }, {
    key: "initDrawers",
    value: function initDrawers() {}
  }, {
    key: "initMoreMenu",
    value: function initMoreMenu() {}
  }, {
    key: "switchEpisode",
    value: function switchEpisode(direction) {
      var currentNum = this.dramaData.currentEpisode.num;
      var nextNum = direction === 'next' ? currentNum + 1 : currentNum - 1;
      var nextEpisode = this.dramaData.episodes.find(function (ep) {
        return ep.num === nextNum;
      });
      if (!nextEpisode) return;

      // 重置记录标记，新剧集可以正常记录
      this.recordedEpisodeId = null;
      this.overlay.switchEpisode(nextEpisode);
    }
  }, {
    key: "showLoading",
    value: function showLoading() {
      var loadingEl = document.getElementById('pageLoading');
      if (loadingEl) loadingEl.style.display = 'flex';
    }
  }, {
    key: "hideLoading",
    value: function hideLoading() {
      var loadingEl = document.getElementById('pageLoading');
      if (loadingEl) loadingEl.style.display = 'none';
    }
  }, {
    key: "showError",
    value: function showError(message) {
      var errorEl = document.getElementById('errorMessage');
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.style.display = 'block';
      }
      this.hideLoading();
    }
  }]);
}();
document.addEventListener('DOMContentLoaded', function () {
  var page = new PlayerPage();
  page.init();
  window.playerPage = page;
});
/* harmony default export */ const player = (PlayerPage);
/******/ })()
;