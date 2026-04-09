/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DiscoverPage)
/* harmony export */ });
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
/**
 * 发现页页面逻辑
 * 处理内容发现、分类浏览、热门推荐等功能
 */
var DiscoverPage = /*#__PURE__*/function () {
  function DiscoverPage(params) {
    _classCallCheck(this, DiscoverPage);
    this.params = params;
    this.currentTab = 'recommended'; // recommended, latest, popular
    this.currentCategory = 'all';
    this.page = 1;
    this.isLoading = false;
    this.hasMore = true;
    this.init();
  }
  return _createClass(DiscoverPage, [{
    key: "init",
    value: function init() {
      console.log('Discover page initialized', this.params);

      // 初始化选项卡
      this.initTabs();

      // 初始化分类筛选
      this.initCategories();

      // 初始化无限滚动
      this.initInfiniteScroll();

      // 加载内容
      this.loadContent();

      // 绑定事件
      this.bindEvents();
    }

    /**
     * 初始化选项卡
     */
  }, {
    key: "initTabs",
    value: function initTabs() {
      var _this = this;
      var tabs = document.querySelectorAll('.discover-tab');
      tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          var tabName = tab.dataset.tab;

          // 更新激活状态
          tabs.forEach(function (t) {
            return t.classList.remove('active');
          });
          tab.classList.add('active');

          // 切换选项卡
          _this.currentTab = tabName;
          _this.page = 1;
          _this.hasMore = true;

          // 清空并重新加载
          document.getElementById('contentGrid').innerHTML = '';
          _this.loadContent();
        });
      });
    }

    /**
     * 初始化分类筛选
     */
  }, {
    key: "initCategories",
    value: function initCategories() {
      var _this2 = this;
      var categories = document.querySelectorAll('.category-chip');
      categories.forEach(function (category) {
        category.addEventListener('click', function () {
          var catName = category.dataset.category;

          // 更新激活状态
          categories.forEach(function (c) {
            return c.classList.remove('active');
          });
          category.classList.add('active');

          // 切换分类
          _this2.currentCategory = catName;
          _this2.page = 1;
          _this2.hasMore = true;

          // 清空并重新加载
          document.getElementById('contentGrid').innerHTML = '';
          _this2.loadContent();
        });
      });
    }

    /**
     * 初始化无限滚动
     */
  }, {
    key: "initInfiniteScroll",
    value: function initInfiniteScroll() {
      var _this3 = this;
      var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !_this3.isLoading && _this3.hasMore) {
            _this3.page++;
            _this3.loadContent();
          }
        });
      }, options);

      // 观察加载更多触发器
      var trigger = document.getElementById('loadMoreTrigger');
      if (trigger) {
        observer.observe(trigger);
      }
    }

    /**
     * 加载内容
     */
  }, {
    key: "loadContent",
    value: (function () {
      var _loadContent = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var params, response, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              if (!(this.isLoading || !this.hasMore)) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              this.isLoading = true;
              this.showLoading();
              _context.p = 2;
              // 构建请求参数
              params = new URLSearchParams({
                page: this.page,
                limit: 20,
                tab: this.currentTab,
                category: this.currentCategory !== 'all' ? this.currentCategory : ''
              }); // 调用API
              _context.n = 3;
              return fetch("/api/discover?".concat(params));
            case 3:
              response = _context.v;
              _context.n = 4;
              return response.json();
            case 4:
              data = _context.v;
              if (data.success) {
                this.renderContent(data.data);
                this.hasMore = data.pagination.page < data.pagination.pages;
              }
              _context.n = 6;
              break;
            case 5:
              _context.p = 5;
              _t = _context.v;
              console.error('Failed to load content:', _t);
              this.showError('加载失败，请重试');
            case 6:
              _context.p = 6;
              this.isLoading = false;
              this.hideLoading();
              return _context.f(6);
            case 7:
              return _context.a(2);
          }
        }, _callee, this, [[2, 5, 6, 7]]);
      }));
      function loadContent() {
        return _loadContent.apply(this, arguments);
      }
      return loadContent;
    }()
    /**
     * 渲染内容
     * @param {Array} items 
     */
    )
  }, {
    key: "renderContent",
    value: function renderContent(items) {
      var _this4 = this;
      var grid = document.getElementById('contentGrid');
      items.forEach(function (item) {
        var card = _this4.createContentCard(item);
        grid.appendChild(card);
      });

      // 更新加载更多触发器
      this.updateLoadMoreTrigger();
    }

    /**
     * 创建内容卡片
     * @param {Object} item 
     * @returns {HTMLElement}
     */
  }, {
    key: "createContentCard",
    value: function createContentCard(item) {
      var card = document.createElement('div');
      card.className = 'content-card';
      card.dataset.id = item.id;
      card.innerHTML = "\n            <div class=\"card-thumbnail\">\n                <img src=\"".concat(item.coverImage || '/images/placeholder.jpg', "\" alt=\"").concat(item.title, "\">\n                <div class=\"card-badges\">\n                    ").concat(item.isHot ? '<div class="badge hot">HOT</div>' : '', "\n                    ").concat(item.isNew ? '<div class="badge new">NEW</div>' : '', "\n                    ").concat(item.rating ? "<div class=\"badge rating\">\u2B50 ".concat(item.rating, "</div>") : '', "\n                </div>\n                <div class=\"card-overlay\">\n                    <button class=\"play-btn\" onclick=\"event.stopPropagation()\">\n                        <i class=\"fas fa-play\"></i>\n                    </button>\n                </div>\n            </div>\n            <div class=\"card-info\">\n                <h3 class=\"card-title\">").concat(item.title, "</h3>\n                <div class=\"card-meta\">\n                    <span class=\"category\">").concat(this.getCategoryName(item.category), "</span>\n                    <span class=\"views\">\uD83D\uDC41 ").concat(this.formatViews(item.viewCount), "</span>\n                </div>\n                <p class=\"card-description\">").concat(item.description || '', "</p>\n                <div class=\"card-tags\">\n                    ").concat(item.tags ? item.tags.map(function (tag) {
        return "<span class=\"tag\">#".concat(tag, "</span>");
      }).join('') : '', "\n                </div>\n            </div>\n        ");

      // 点击跳转到播放器
      card.addEventListener('click', function () {
        window.location.href = "/pages/player.html?drama=".concat(drama.id);
      });

      // 播放按钮点击
      var playBtn = card.querySelector('.play-btn');
      playBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        window.location.href = "/pages/player.html?drama=".concat(drama.id);
      });
      return card;
    }

    /**
     * 获取分类名称
     * @param {string} category 
     * @returns {string}
     */
  }, {
    key: "getCategoryName",
    value: function getCategoryName(category) {
      var categories = {
        'romance': '爱情',
        'ceo': '总裁',
        'fantasy': '玄幻',
        'suspense': '悬疑',
        'comedy': '喜剧',
        'action': '动作',
        'historical': '古装'
      };
      return categories[category] || category;
    }

    /**
     * 格式化观看数
     * @param {number} views 
     * @returns {string}
     */
  }, {
    key: "formatViews",
    value: function formatViews(views) {
      if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + 'M';
      }
      if (views >= 1000) {
        return (views / 1000).toFixed(1) + 'K';
      }
      return views.toString();
    }

    /**
     * 更新加载更多触发器
     */
  }, {
    key: "updateLoadMoreTrigger",
    value: function updateLoadMoreTrigger() {
      var trigger = document.getElementById('loadMoreTrigger');
      if (!trigger) {
        trigger = document.createElement('div');
        trigger.id = 'loadMoreTrigger';
        trigger.className = 'load-more-trigger';
        document.getElementById('contentGrid').after(trigger);
      }
      if (!this.hasMore) {
        trigger.innerHTML = '<p class="end-message">没有更多了</p>';
      } else {
        trigger.innerHTML = '';
      }
    }

    /**
     * 显示加载中
     */
  }, {
    key: "showLoading",
    value: function showLoading() {
      var loading = document.getElementById('contentLoading');
      if (loading) {
        loading.classList.add('show');
      }
    }

    /**
     * 隐藏加载中
     */
  }, {
    key: "hideLoading",
    value: function hideLoading() {
      var loading = document.getElementById('contentLoading');
      if (loading) {
        loading.classList.remove('show');
      }
    }

    /**
     * 显示错误信息
     * @param {string} message 
     */
  }, {
    key: "showError",
    value: function showError(message) {
      var event = new CustomEvent('showToast', {
        detail: {
          message: message,
          type: 'error'
        }
      });
      document.dispatchEvent(event);
    }

    /**
     * 绑定页面事件
     */
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      // 搜索框
      var searchInput = document.getElementById('discoverSearch');
      var searchBtn = document.getElementById('searchBtn');
      if (searchInput && searchBtn) {
        var performSearch = function performSearch() {
          var query = searchInput.value.trim();
          if (query) {
            // 需要用 encodeURIComponent 处理中文或特殊字符
            window.location.href = "/pages/search.html?q=".concat(encodeURIComponent(query));
          }
        };
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function (e) {
          if (e.key === 'Enter') {
            performSearch();
          }
        });
      }

      // 热门标签点击
      document.querySelectorAll('.trending-tag').forEach(function (tag) {
        tag.addEventListener('click', function () {
          var searchTerm = tag.textContent.replace('#', '');
          window.location.href = "/pages/search.html?q=".concat(encodeURIComponent(searchTerm));
        });
      });
    }

    /**
     * 页面销毁时调用
     */
  }, {
    key: "destroy",
    value: function destroy() {
      console.log('Discover page destroyed');
      // 清理事件监听、定时器等
    }
  }]);
}();

/******/ })()
;