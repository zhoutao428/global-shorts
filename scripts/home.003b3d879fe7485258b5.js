/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 2
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BottomNav)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 公共底部导航组件
 */
var BottomNav = /*#__PURE__*/function () {
  function BottomNav() {
    _classCallCheck(this, BottomNav);
    this.render();
    this.bindEvents();
  }
  return _createClass(BottomNav, [{
    key: "render",
    value: function render() {
      var nav = document.createElement('nav');
      nav.className = 'bottom-nav';
      var currentPath = window.location.pathname;
      var isHome = currentPath === '/' || currentPath === '/index.html' || currentPath.includes('/home');
      var isDiscover = currentPath.includes('/feed');
      // 个人中心
      var isProfile = currentPath.includes('/profile');
      nav.innerHTML = "\n            <a href=\"/pages/home.html\" class=\"nav-item ".concat(isHome ? 'active' : '', "\" data-page=\"home\">\n    <i class=\"fas fa-home\"></i>\n    <span data-i18n=\"nav.home\">\u9996\u9875</span>\n</a>\n<a href=\"/pages/upload.html\" class=\"nav-item\" data-page=\"upload\">\n    <i class=\"fas fa-plus-circle\"></i>\n    <span>\u53D1\u5E03</span>\n</a>\n<a href=\"/pages/feed.html\" class=\"nav-item ").concat(isDiscover ? 'active' : '', "\" data-page=\"discover\">\n    <i class=\"fas fa-compass\"></i>\n    <span data-i18n=\"nav.discover\">\u53D1\u73B0</span>\n</a>\n<a href=\"/pages/profile.html\" class=\"nav-item ").concat(isProfile ? 'active' : '', "\" data-page=\"profile\">\n    <i class=\"fas fa-user\"></i>\n    <span data-i18n=\"nav.profile\">\u6211\u7684</span>\n</a>\n        ");
      document.body.appendChild(nav);
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      return;
    }
  }]);
}();


/***/ },

/***/ 203
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var _scripts_core_auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(527);
/* harmony import */ var _scripts_core_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93);
/* harmony import */ var _scripts_core_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(225);
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
// src/components/common/navbar.js


 // ✅ 新增导入

var Navbar = /*#__PURE__*/function () {
  function Navbar() {
    _classCallCheck(this, Navbar);
    this.container = null;
    this.checkinState = {
      date: null,
      checked: null,
      loading: false
    };
    this._listenersBound = false;
    this._lifecycleBound = false;
    this._lastUserStr = null;
    this.init();
  }
  return _createClass(Navbar, [{
    key: "init",
    value: function init() {
      var existing = document.querySelector('.main-header');
      if (existing) {
        this.container = existing;
        this.updateUI();
        this.setupAuthListeners();
        this.setupLifecycleListeners();
        return;
      }
      this.render();
      this.setupAuthListeners();
      this.setupLifecycleListeners();
    }
  }, {
    key: "render",
    value: function render() {
      var _document$getElementB;
      var navbar = document.createElement('header');
      navbar.className = 'main-header';
      navbar.innerHTML = "\n            <style>\n                .custom-header-layout {\n                    display: flex; justify-content: space-between; align-items: center; width: 100%;\n                }\n                .custom-header-left {\n                    display: flex; align-items: center; gap: 15px; flex-shrink: 0;\n                }\n                .custom-header-right {\n                    display: flex; align-items: center; justify-content: flex-end; flex-grow: 1;\n                }\n                .user-info-bar {\n                    display: flex;\n                    align-items: center;\n                    gap: 20px;\n                    flex-wrap: nowrap;\n                }\n                .user-profile {\n                    display: flex;\n                    align-items: center;\n                    gap: 12px;\n                }\n                .user-details {\n                    display: flex;\n                    flex-direction: column;\n                }\n                .user-name {\n                    font-weight: 700;\n                    font-size: 16px;\n                    color: white;\n                }\n                .user-status {\n                    display: flex;\n                    align-items: center;\n                    gap: 8px;\n                    font-size: 12px;\n                }\n                .vip-member-text {\n                    color: #FFD700;\n                    font-weight: 500;\n                }\n                .vip-badge {\n                    background: linear-gradient(45deg, #FFD700, #FFA500);\n                    color: #000;\n                    padding: 2px 8px;\n                    border-radius: 12px;\n                    font-weight: 700;\n                    font-size: 10px;\n                    display: inline-flex;\n                    align-items: center;\n                    gap: 4px;\n                }\n                .vip-badge.non-vip {\n                    background: #666;\n                    color: white;\n                }\n                .user-stats {\n                    display: flex;\n                    gap: 15px;\n                    flex-shrink: 0;\n                }\n                .coin-display {\n                    display: flex;\n                    align-items: center;\n                    gap: 5px;\n                    background: rgba(0,200,83,0.2);\n                    padding: 6px 15px;\n                    border-radius: 20px;\n                    font-weight: bold;\n                    cursor: pointer;\n                    transition: transform 0.2s;\n                }\n                .coin-display:hover {\n                    transform: scale(1.05);\n                }\n                .coin-display i {\n                    color: gold;\n                    font-size: 16px;\n                }\n                .coin-display span {\n                    color: white;\n                    font-size: 14px;\n                }\n                .daily-checkin {\n                    background: #FF3B5C;\n                    color: white;\n                    border: none;\n                    padding: 6px 15px;\n                    border-radius: 20px;\n                    font-weight: bold;\n                    display: flex;\n                    align-items: center;\n                    gap: 5px;\n                    cursor: pointer;\n                    transition: all 0.3s;\n                }\n                .daily-checkin i {\n                    font-size: 14px;\n                }\n                .daily-checkin span {\n                    font-size: 14px;\n                }\n                .daily-checkin:hover {\n                    box-shadow: 0 5px 15px rgba(255,56,92,0.4);\n                    transform: translateY(-2px);\n                }\n                .daily-checkin.checked {\n                    background: #00C853;\n                    box-shadow: none;\n                }\n                .daily-checkin.checked:hover {\n                    transform: none;\n                }\n                .user-profile-dropdown {\n                    position: relative;\n                    cursor: pointer;\n                }\n                .user-avatar {\n                    width: 40px;\n                    height: 40px;\n                    border-radius: 50%;\n                    background: linear-gradient(45deg, #FF3B5C, #FF6B8B);\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    font-weight: bold;\n                    color: white;\n                    font-size: 18px;\n                }\n                .dropdown-menu {\n                    position: absolute;\n                    top: 120%;\n                    right: 0;\n                    background: #1a1b23;\n                    border-radius: 10px;\n                    width: 150px;\n                    display: none;\n                    flex-direction: column;\n                    box-shadow: 0 5px 15px rgba(0,0,0,0.5);\n                    z-index: 1000;\n                }\n                .dropdown-item {\n                    padding: 12px 15px;\n                    color: #FF3B5C;\n                    cursor: pointer;\n                    display: flex;\n                    align-items: center;\n                    gap: 10px;\n                }\n                .dropdown-item:hover {\n                    background: rgba(255,255,255,0.05);\n                }\n                .language-menu {\n                    position: absolute;\n                    background: rgba(30, 30, 40, 0.9);\n                    backdrop-filter: blur(10px);\n                    border-radius: 8px;\n                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);\n                    min-width: 120px;\n                    z-index: 2000;\n                    overflow: hidden;\n                    border: 1px solid rgba(255, 255, 255, 0.1);\n                }\n                .language-menu-content {\n                    display: flex;\n                    flex-direction: column;\n                    padding: 5px 0;\n                }\n                .language-option {\n                    padding: 10px 15px;\n                    color: white;\n                    font-size: 14px;\n                    cursor: pointer;\n                    transition: background 0.2s;\n                    white-space: nowrap;\n                }\n                .language-option:hover {\n                    background: rgba(255, 255, 255, 0.15);\n                }\n                .language-option.active {\n                    color: var(--primary);\n                    font-weight: bold;\n                    background: rgba(255, 56, 92, 0.2);\n                }\n                @media (max-width: 768px) {\n                    .language-menu {\n                        min-width: 100px;\n                    }\n                    .language-option {\n                        padding: 8px 12px;\n                        font-size: 13px;\n                    }\n                    .custom-header-layout {\n                        flex-direction: column !important;\n                        align-items: stretch !important;\n                        gap: 8px !important;\n                        padding: 5px 0 !important;\n                    }\n                    .custom-header-left {\n                        position: relative;\n                        width: 100%;\n                        height: 40px;\n                    }\n                    .language-switcher {\n                        position: absolute;\n                        left: 0;\n                        top: 50%;\n                        transform: translateY(-50%);\n                        padding: 6px;\n                        border-radius: 50%;\n                        background: rgba(255,255,255,0.1);\n                    }\n                    .language-switcher span {\n                        display: none;\n                    }\n                    .logo {\n                        position: absolute;\n                        left: 50%;\n                        top: 50%;\n                        transform: translate(-50%, -50%);\n                        white-space: nowrap;\n                    }\n                    .logo span {\n                        font-size: 14px;\n                        max-width: 150px;\n                        overflow: hidden;\n                        text-overflow: ellipsis;\n                    }\n                    .logo i {\n                        font-size: 24px;\n                    }\n                    .custom-header-right {\n                        width: 100%;\n                        display: flex;\n                        justify-content: center;\n                        padding: 0 10px;\n                    }\n                    .user-info-bar {\n                        display: flex;\n                        align-items: center;\n                        gap: 12px;\n                        flex-wrap: nowrap;\n                        width: auto;\n                    }\n                    .user-profile {\n                        display: flex;\n                        align-items: center;\n                        gap: 8px;\n                    }\n                    .user-details {\n                        display: flex;\n                        flex-direction: column;\n                    }\n                    .user-name {\n                        font-size: 14px;\n                    }\n                    .user-status {\n                        font-size: 10px;\n                        gap: 5px;\n                    }\n                    .vip-member-text {\n                        font-size: 10px;\n                    }\n                    .vip-badge {\n                        font-size: 9px;\n                        padding: 1px 6px;\n                    }\n                    .user-stats {\n                        display: flex;\n                        align-items: center;\n                        gap: 8px;\n                    }\n                    .coin-display {\n                        padding: 4px 8px;\n                        background: rgba(0,200,83,0.2);\n                        border-radius: 20px;\n                        display: flex;\n                        align-items: center;\n                        gap: 3px;\n                    }\n                    .coin-display i {\n                        font-size: 14px;\n                        color: gold;\n                    }\n                    .coin-display span {\n                        font-size: 12px;\n                        color: white;\n                    }\n                    .daily-checkin {\n                        background: #FF3B5C;\n                        border-radius: 50%;\n                        width: 32px;\n                        height: 32px;\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        padding: 0;\n                    }\n                    .daily-checkin i {\n                        font-size: 14px;\n                    }\n                    .daily-checkin span {\n                        display: none;\n                    }\n                    .user-avatar {\n                        width: 32px;\n                        height: 32px;\n                        font-size: 16px;\n                    }\n                }\n            </style>\n\n            <div class=\"container custom-header-layout\">\n                <div class=\"custom-header-left\">\n                    <div class=\"logo\" id=\"homeLink\" style=\"cursor: pointer; display: flex; align-items: center; gap: 8px;\">\n                        <i class=\"fas fa-globe-americas\"></i>\n                        <span>Global Shorts</span>\n                    </div>\n                    <div id=\"navbarLangSwitcher\"></div>\n                </div>\n                <div class=\"custom-header-right\" id=\"authButtons\"></div>\n            </div>\n        ";
      document.body.insertBefore(navbar, document.body.firstChild);
      this.container = navbar;
      (_document$getElementB = document.getElementById('homeLink')) === null || _document$getElementB === void 0 || _document$getElementB.addEventListener('click', function () {
        window.location.href = '/';
      });
      this.updateUI();
    }
  }, {
    key: "updateUI",
    value: function updateUI() {
      var authButtons = document.getElementById('authButtons');
      if (!authButtons) return;
      var isLoggedIn = _scripts_core_auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].isLoggedIn();
      var user = _scripts_core_auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentUser();
      if (isLoggedIn && user) {
        var _user$nickname, _user$email;
        var statusHtml;
        if (user.is_vip) {
          statusHtml = "\n                    <div class=\"user-status\">\n                        <span class=\"vip-member-text\">VIP Member</span>\n                        <span class=\"vip-badge\">\n                            <i class=\"fas fa-crown\"></i> VIP\n                        </span>\n                    </div>\n                ";
        } else {
          statusHtml = "\n                    <div class=\"user-status\">\n                        <span class=\"vip-member-text\">GO Member</span>\n                        <span class=\"vip-badge non-vip\">\n                            <i class=\"fas fa-crown\"></i> GO\n                        </span>\n                    </div>\n                ";
        }
        authButtons.innerHTML = "\n                <div class=\"user-info-bar\">\n                    <div class=\"user-profile\">\n                        <div class=\"user-profile-dropdown\" id=\"userProfileDropdown\">\n                            <div class=\"user-avatar\">\n                                ".concat(((_user$nickname = user.nickname) === null || _user$nickname === void 0 ? void 0 : _user$nickname.charAt(0)) || ((_user$email = user.email) === null || _user$email === void 0 ? void 0 : _user$email.charAt(0)) || 'U', "\n                            </div>\n                            <div class=\"dropdown-menu\" id=\"avatarMenu\">\n                                <div style=\"padding: 10px; border-bottom: 1px solid #333; font-size: 12px; color: #888;\">").concat(user.nickname || 'User', "</div>\n                                <div class=\"dropdown-item\" id=\"logoutBtn\">\n                                    <i class=\"fas fa-sign-out-alt\"></i> <span data-i18n=\"common.logout\">\u9000\u51FA</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"user-details\">\n                            <div class=\"user-name\">").concat(user.nickname || '用户', "</div>\n                            ").concat(statusHtml, "\n                        </div>\n                    </div>\n                    <div class=\"user-stats\">\n                        <div class=\"coin-display\" onclick=\"window.location.href='/pages/payment.html'\">\n                            <i class=\"fas fa-coins\"></i>\n                            <span>").concat(user.coins || 0, "</span>\n                        </div>\n                        <button class=\"daily-checkin\" id=\"dailyCheckinBtn\">\n                            <i class=\"fas fa-calendar-check\"></i>\n                            <span data-i18n=\"home.checkin\">\u7B7E\u5230</span>\n                        </button>\n                    </div>\n                </div>\n            ");
        this.bindLoggedInEvents();
        this.refreshDailyCheckinStatus();
      } else {
        authButtons.innerHTML = "\n                <button onclick=\"window.location.href='/pages/login.html'\" style=\"background: #333; color: white; border: none; padding: 8px 20px; border-radius: 20px; cursor: pointer; font-weight: bold; white-space: nowrap;\">\n                    <i class=\"fas fa-sign-in-alt\"></i> <span data-i18n=\"common.login\">\u767B\u5F55</span>\n                </button>\n            ";
      }

      // ✅ 使用导入的 i18n，不再依赖 window.i18n
      if (_scripts_core_i18n_js__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        if (typeof _scripts_core_i18n_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateDOM === 'function') _scripts_core_i18n_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateDOM();
        if (typeof _scripts_core_i18n_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderLanguageSwitcher === 'function') {
          try {
            _scripts_core_i18n_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderLanguageSwitcher();
          } catch (e) {
            console.warn('Failed to render language switcher:', e);
          }
        }
      }
    }
  }, {
    key: "refreshDailyCheckinStatus",
    value: function () {
      var _refreshDailyCheckinStatus = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var btn, today, res, checked, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              btn = document.getElementById('dailyCheckinBtn');
              if (btn) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              if (_scripts_core_auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].isLoggedIn()) {
                _context.n = 2;
                break;
              }
              btn.classList.remove('checked');
              return _context.a(2);
            case 2:
              today = getLocalDateString();
              if (!(this.checkinState.loading && this.checkinState.date === today)) {
                _context.n = 3;
                break;
              }
              return _context.a(2);
            case 3:
              if (!(this.checkinState.date === today && typeof this.checkinState.checked === 'boolean')) {
                _context.n = 4;
                break;
              }
              btn.classList.toggle('checked', this.checkinState.checked);
              return _context.a(2);
            case 4:
              this.checkinState.loading = true;
              this.checkinState.date = today;
              _context.p = 5;
              _context.n = 6;
              return _scripts_core_api_js__WEBPACK_IMPORTED_MODULE_2__.api.user.getUserCheckins({
                start_date: today,
                end_date: today
              });
            case 6:
              res = _context.v;
              checked = !!(res && res.success && Array.isArray(res.data) && res.data.length > 0);
              this.checkinState.checked = checked;
              btn.classList.toggle('checked', checked);
              _context.n = 8;
              break;
            case 7:
              _context.p = 7;
              _t = _context.v;
              this.checkinState.checked = null;
              btn.classList.remove('checked');
            case 8:
              _context.p = 8;
              this.checkinState.loading = false;
              return _context.f(8);
            case 9:
              return _context.a(2);
          }
        }, _callee, this, [[5, 7, 8, 9]]);
      }));
      function refreshDailyCheckinStatus() {
        return _refreshDailyCheckinStatus.apply(this, arguments);
      }
      return refreshDailyCheckinStatus;
    }()
  }, {
    key: "bindLoggedInEvents",
    value: function bindLoggedInEvents() {
      var _document$getElementB2;
      var dropdown = document.getElementById('userProfileDropdown');
      var menu = document.getElementById('avatarMenu');
      if (dropdown && menu) {
        dropdown.addEventListener('click', function (e) {
          e.stopPropagation();
          menu.style.display = menu.style.display === 'none' || !menu.style.display ? 'flex' : 'none';
        });
        document.addEventListener('click', function (e) {
          if (!dropdown.contains(e.target)) menu.style.display = 'none';
        });
      }
      (_document$getElementB2 = document.getElementById('logoutBtn')) === null || _document$getElementB2 === void 0 || _document$getElementB2.addEventListener('click', function () {
        if (confirm((_scripts_core_i18n_js__WEBPACK_IMPORTED_MODULE_1__["default"] === null || _scripts_core_i18n_js__WEBPACK_IMPORTED_MODULE_1__["default"] === void 0 ? void 0 : _scripts_core_i18n_js__WEBPACK_IMPORTED_MODULE_1__["default"].t('common.confirmLogout')) || '确定要退出登录吗？')) {
          _scripts_core_auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].logout();
        }
      });
    }
  }, {
    key: "setupAuthListeners",
    value: function setupAuthListeners() {
      var _this = this;
      if (this._listenersBound) return;
      this._listenersBound = true;
      window.addEventListener('auth:login', function () {
        console.log('Navbar: auth:login received');
        _this.updateUI();
      });
      window.addEventListener('auth:logout', function () {
        console.log('Navbar: auth:logout received');
        _this.updateUI();
      });
      window.addEventListener('auth:update', function (e) {
        console.log('Navbar: auth:update received', e.detail);
        _this.updateUI();
      });
    }
  }, {
    key: "setupLifecycleListeners",
    value: function setupLifecycleListeners() {
      var _this2 = this;
      if (this._lifecycleBound) return;
      this._lifecycleBound = true;
      var sync = function sync() {
        var changed = _this2.syncUserFromStorage();
        if (!changed) _this2.updateUI();
      };
      window.addEventListener('pageshow', sync);
      window.addEventListener('focus', sync);
      document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'visible') sync();
      });
      window.addEventListener('storage', function (e) {
        if (e.key === 'user') sync();
      });
    }
  }, {
    key: "syncUserFromStorage",
    value: function syncUserFromStorage() {
      if (!_scripts_core_auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].isLoggedIn()) return;
      var storedUserStr = localStorage.getItem('user') || sessionStorage.getItem('user');
      if (!storedUserStr || storedUserStr === this._lastUserStr) return;
      this._lastUserStr = storedUserStr;
      try {
        var storedUser = JSON.parse(storedUserStr);
        if (storedUser && _typeof(storedUser) === 'object') {
          _scripts_core_auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].setUser(storedUser);
          return true;
        }
      } catch (e) {}
      return false;
    }
  }]);
}();

function getLocalDateString() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  var year = date.getFullYear();
  var month = String(date.getMonth() + 1).padStart(2, '0');
  var day = String(date.getDate()).padStart(2, '0');
  return "".concat(year, "-").concat(month, "-").concat(day);
}

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
/******/ 			// no module.id needed
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
/* harmony import */ var _core_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(225);
/* harmony import */ var _core_auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(527);
/* harmony import */ var _core_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93);
/* harmony import */ var _components_common_navbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(203);
/* harmony import */ var _components_common_bottom_nav_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
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
 * 首页页面逻辑
 * 处理剧集展示、分类筛选、搜索、签到等功能
 * 重构版本：修复分页、XSS、签到数据硬编码等问题
 */





var HomePage = /*#__PURE__*/function () {
  function HomePage() {
    var _this = this;
    _classCallCheck(this, HomePage);
    var urlParams = new URLSearchParams(window.location.search);
    this.currentCategory = urlParams.get('category') || 'all';
    this.searchQuery = urlParams.get('q') || '';
    this.page = 1;
    this.isLoading = false;
    this.hasMore = true;
    this.categories = [];

    // 签到相关（不再保留兜底数据）
    this.checkinData = [];

    // 绑定方法
    this.init = this.init.bind(this);
    //this.waitForI18n = this.waitForI18n.bind(this);
    this.ensureCheckinModal = this.ensureCheckinModal.bind(this);
    this.openCheckinModal = this.openCheckinModal.bind(this);
    this.closeCheckinModal = this.closeCheckinModal.bind(this);
    this.loadCheckinStatus = this.loadCheckinStatus.bind(this);
    this.renderCheckinGrid = this.renderCheckinGrid.bind(this);
    this.claimReward = this.claimReward.bind(this);
    this.initCategoryTabs = this.initCategoryTabs.bind(this);
    this.renderCategories = this.renderCategories.bind(this);
    this.onCategoryClick = this.onCategoryClick.bind(this);
    this.initSearch = this.initSearch.bind(this);
    this.initInfiniteScroll = this.initInfiniteScroll.bind(this);
    this.loadDramas = this.loadDramas.bind(this);
    this.renderDramas = this.renderDramas.bind(this);
    this.createDramaCard = this.createDramaCard.bind(this);
    this.formatViews = this.formatViews.bind(this);
    this.updateLoadMoreTrigger = this.updateLoadMoreTrigger.bind(this);
    this.showLoading = this.showLoading.bind(this);
    this.hideLoading = this.hideLoading.bind(this);
    this.bindEvents = this.bindEvents.bind(this);
    this.showToast = this.showToast.bind(this); // 简单错误提示
    this.initColorMode = this.initColorMode.bind(this); // 添加色彩模式绑定

    // 语言切换时仅重新渲染当前已有数据（不重新请求）
    window.addEventListener('language:changed', function () {
      // 重新渲染分类（因为分类名称需要翻译）
      if (_this.categories.length) {
        _this.renderCategories(_this.categories);
      }
      // 重新渲染签到网格（如果打开）
      var modal = document.getElementById('checkinModal');
      if (modal && modal.classList.contains('active') && _this.checkinData.length) {
        _this.renderCheckinGrid();
      }
      // 重新加载剧集数据（因为剧集标题可能需要翻译）
      _this.page = 1;
      _this.hasMore = true;
      document.getElementById('dramaGrid').innerHTML = '';
      _this.loadDramas();
      // 更新整个页面
      _core_i18n_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateDOM();
    });
    this.init();
  }
  return _createClass(HomePage, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _t, _t2;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              console.log('🏠 Home page initialized');
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
              console.log('✅ 步骤1: i18n 初始化完成');

              // 2. 创建导航栏
              try {
                if (!window.navbar) {
                  window.navbar = new _components_common_navbar_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
                  console.log('✅ 步骤2: Navbar 创建成功');
                }
              } catch (e) {
                console.error('❌ 步骤2: Navbar 创建失败', e);
                // 继续执行，不要中断
              }
              if (!document.querySelector('.bottom-nav')) {
                new _components_common_bottom_nav_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
              }
              console.log('✅ 步骤2完成: 导航栏创建');

              // 3. 先更新翻译
              _core_i18n_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateDOM();
              console.log('✅ 步骤3: 首次翻译更新');

              // 4. 加载分类
              console.log('步骤4: 开始加载分类...');
              _context.n = 6;
              return this.initCategoryTabs();
            case 6:
              console.log('✅ 步骤4: 分类加载完成', this.categories.length);

              // 5. 搜索和滚动
              this.initSearch();
              this.initInfiniteScroll();
              console.log('✅ 步骤5: 搜索和滚动初始化完成');

              // 6. 加载剧集
              console.log('步骤6: 开始加载剧集...');
              _context.n = 7;
              return this.loadDramas();
            case 7:
              console.log('✅ 步骤6: 剧集加载完成');

              // 7. 最后更新翻译
              _core_i18n_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateDOM();
              console.log('✅ 步骤7: 最终翻译更新');
              this.bindEvents();
              this.ensureCheckinModal();

              // ✅ 添加色彩模式初始化
              this.initColorMode();
              this.hideLoading();
              _context.n = 9;
              break;
            case 8:
              _context.p = 8;
              _t2 = _context.v;
              console.error('❌ Home initialization failed at step:', _t2);
              console.error('错误堆栈:', _t2.stack);
              this.showError(_t2.message);
              this.hideLoading();
            case 9:
              return _context.a(2);
          }
        }, _callee, this, [[2, 4], [1, 8]]);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }() // ---------- 色彩模式（浅色/深色背景）----------
  }, {
    key: "initColorMode",
    value: function initColorMode() {
      var toggleBtn = document.getElementById('colorModeToggle');
      if (!toggleBtn) return;

      // 读取保存的模式
      var savedMode = localStorage.getItem('colorMode');
      if (savedMode === 'light') {
        document.body.classList.add('light-mode');
        toggleBtn.classList.add('light-active');
        // 更新按钮文字和图标
        var span = toggleBtn.querySelector('span');
        var icon = toggleBtn.querySelector('i');
        if (span) span.textContent = '深色模式';
        if (icon) icon.className = 'fas fa-moon';
      } else {
        // 默认深色模式
        toggleBtn.classList.remove('light-active');
        var _span = toggleBtn.querySelector('span');
        var _icon = toggleBtn.querySelector('i');
        if (_span) _span.textContent = '浅色模式';
        if (_icon) _icon.className = 'fas fa-sun';
      }
      toggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('light-mode');
        var isLight = document.body.classList.contains('light-mode');
        if (isLight) {
          localStorage.setItem('colorMode', 'light');
          toggleBtn.classList.add('light-active');
          var _span2 = toggleBtn.querySelector('span');
          var _icon2 = toggleBtn.querySelector('i');
          if (_span2) _span2.textContent = '深色模式';
          if (_icon2) _icon2.className = 'fas fa-moon';
        } else {
          localStorage.setItem('colorMode', 'dark');
          toggleBtn.classList.remove('light-active');
          var _span3 = toggleBtn.querySelector('span');
          var _icon3 = toggleBtn.querySelector('i');
          if (_span3) _span3.textContent = '浅色模式';
          if (_icon3) _icon3.className = 'fas fa-sun';
        }
      });
    }
    // ---------- 签到相关 ----------
  }, {
    key: "ensureCheckinModal",
    value: function ensureCheckinModal() {
      var _this2 = this;
      if (document.getElementById('checkinModal')) return;

      // 完全无标题，仅有关闭按钮
      var modalHTML = "\n            <div class=\"modal-overlay\" id=\"checkinModal\">\n                <div class=\"checkin-modal\">\n                    <div class=\"modal-header\">\n                        <button class=\"close-modal\" id=\"closeCheckinModal\">\n                            <i class=\"fas fa-times\"></i>\n                        </button>\n                    </div>\n                    <div class=\"checkin-grid\" id=\"checkinGrid\">\n                        <!-- \u5185\u5BB9\u52A8\u6001\u6E32\u67D3 -->\n                    </div>\n                    <button class=\"claim-btn\" id=\"claimRewardBtn\" disabled>\n                        <i class=\"fas fa-gift\"></i>\n                        <span data-i18n=\"checkin.claim\">\u9886\u53D6\u4ECA\u65E5\u5956\u52B1</span>\n                    </button>\n                </div>\n            </div>\n        ";
      document.body.insertAdjacentHTML('beforeend', modalHTML);

      // 使用事件委托处理关闭事件
      var modal = document.getElementById('checkinModal');
      modal.addEventListener('click', function (e) {
        if (e.target === modal) _this2.closeCheckinModal();
      });
      var closeBtn = document.getElementById('closeCheckinModal');
      closeBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        _this2.closeCheckinModal();
      });

      // 领取按钮事件
      var claimBtn = document.getElementById('claimRewardBtn');
      claimBtn.addEventListener('click', function () {
        return _this2.claimReward();
      });
    }
  }, {
    key: "openCheckinModal",
    value: function openCheckinModal() {
      this.ensureCheckinModal();
      var modal = document.getElementById('checkinModal');
      if (!modal) return;
      modal.classList.add('active');
      this.loadCheckinStatus(); // 每次打开都重新加载
    }
  }, {
    key: "closeCheckinModal",
    value: function closeCheckinModal() {
      var modal = document.getElementById('checkinModal');
      if (modal) modal.classList.remove('active');
    }
  }, {
    key: "loadCheckinStatus",
    value: function () {
      var _loadCheckinStatus = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var grid, claimBtn, _window$i18n, today, dayOfWeek, monday, sunday, formatDate, startDate, endDate, response, checkins, dayKeys, _t3;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              grid = document.getElementById('checkinGrid');
              claimBtn = document.getElementById('claimRewardBtn'); // 显示加载中
              if (grid) {
                grid.innerHTML = '<div class="loading-spinner" style="margin:20px auto;"></div>';
              }
              if (claimBtn) {
                claimBtn.disabled = true;
                claimBtn.innerHTML = "<i class=\"fas fa-spinner fa-spin\"></i><span data-i18n=\"checkin.claim\">".concat(((_window$i18n = window.i18n) === null || _window$i18n === void 0 ? void 0 : _window$i18n.t('checkin.claim')) || '领取今日奖励', "</span>");
              }
              _context2.p = 1;
              today = new Date();
              dayOfWeek = today.getDay();
              monday = new Date(today);
              monday.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
              sunday = new Date(monday);
              sunday.setDate(monday.getDate() + 6);
              formatDate = function formatDate(date) {
                var year = date.getFullYear();
                var month = String(date.getMonth() + 1).padStart(2, '0');
                var day = String(date.getDate()).padStart(2, '0');
                return "".concat(year, "-").concat(month, "-").concat(day);
              };
              startDate = formatDate(monday);
              endDate = formatDate(sunday);
              _context2.n = 2;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_0__.api.user.getUserCheckins({
                start_date: startDate,
                end_date: endDate
              });
            case 2:
              response = _context2.v;
              if (response.success) {
                _context2.n = 3;
                break;
              }
              throw new Error(response.error || '获取签到记录失败');
            case 3:
              checkins = response.data || [];
              dayKeys = ['days.monday', 'days.tuesday', 'days.wednesday', 'days.thursday', 'days.friday', 'days.saturday', 'days.sunday']; // 构建周一至周日的数据（完全依赖后端返回的奖励金额）
              this.checkinData = dayKeys.map(function (dayKey, index) {
                var _window$i18n2;
                var currentDate = new Date(monday);
                currentDate.setDate(monday.getDate() + index);
                var dateStr = formatDate(currentDate);
                var record = checkins.find(function (c) {
                  return c.checkin_date === dateStr;
                });
                var dayName = ((_window$i18n2 = window.i18n) === null || _window$i18n2 === void 0 ? void 0 : _window$i18n2.t(dayKey)) || dayKey;
                return {
                  day: dayName,
                  reward: record ? record.reward_coins : 0,
                  // 后端必须提供 reward_coins
                  claimed: !!record,
                  isToday: dateStr === formatDate(today)
                };
              });
              this.renderCheckinGrid();
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t3 = _context2.v;
              console.error('加载签到记录失败:', _t3);
              if (grid) {
                grid.innerHTML = "<div class=\"error-message\" style=\"text-align:center; padding:20px; color:#ff6b6b;\">\n                    <i class=\"fas fa-exclamation-circle\"></i>\n                    <p>".concat(_t3.message || '网络错误，请稍后重试', "</p>\n                </div>");
              }
              // 禁用领取按钮
              if (claimBtn) {
                claimBtn.disabled = true;
                claimBtn.innerHTML = "<i class=\"fas fa-exclamation-triangle\"></i><span>\u52A0\u8F7D\u5931\u8D25</span>";
              }
            case 5:
              return _context2.a(2);
          }
        }, _callee2, this, [[1, 4]]);
      }));
      function loadCheckinStatus() {
        return _loadCheckinStatus.apply(this, arguments);
      }
      return loadCheckinStatus;
    }()
  }, {
    key: "renderCheckinGrid",
    value: function renderCheckinGrid() {
      var grid = document.getElementById('checkinGrid');
      if (!grid) return;

      // 若没有数据则显示错误（理论上不会执行到这里）
      if (!this.checkinData.length) {
        grid.innerHTML = '<div class="error-message">暂无签到数据</div>';
        return;
      }
      grid.innerHTML = this.checkinData.map(function (day) {
        return "\n            <div class=\"checkin-day ".concat(day.claimed ? 'claimed' : '', " ").concat(day.isToday && !day.claimed ? 'today' : '', "\">\n                <div class=\"day-name\">").concat(day.day, "</div>\n                <div class=\"day-reward\">\n                    <i class=\"fas fa-coins\"></i>\n                    <span>").concat(day.reward, "</span>\n                </div>\n            </div>\n        ");
      }).join('');
      var claimBtn = document.getElementById('claimRewardBtn');
      if (claimBtn) {
        var todayItem = this.checkinData.find(function (d) {
          return d.isToday;
        });
        if (todayItem && todayItem.claimed) {
          claimBtn.classList.add('claimed');
          claimBtn.disabled = true;
          claimBtn.innerHTML = "<i class=\"fas fa-check\"></i><span data-i18n=\"checkin.claim\">".concat(window.i18n.t('checkin.claim'), "</span>");
        } else {
          claimBtn.classList.remove('claimed');
          claimBtn.disabled = false;
          claimBtn.innerHTML = "<i class=\"fas fa-gift\"></i><span data-i18n=\"checkin.claim\">".concat(window.i18n.t('checkin.claim'), "</span>");
        }
      }

      // 更新翻译
      if (window.i18n) window.i18n.updateDOM();
    }
  }, {
    key: "claimReward",
    value: function () {
      var _claimReward = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _this3 = this;
        var claimBtn, response, user, _t4;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              claimBtn = document.getElementById('claimRewardBtn');
              if (!claimBtn.disabled) {
                _context3.n = 1;
                break;
              }
              return _context3.a(2);
            case 1:
              _context3.p = 1;
              _context3.n = 2;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_0__.api.user.checkin();
            case 2:
              response = _context3.v;
              if (response.success) {
                _context3.n = 3;
                break;
              }
              throw new Error(response.error || '签到失败');
            case 3:
              _context3.n = 4;
              return this.loadCheckinStatus();
            case 4:
              // 更新用户金币
              user = _core_auth_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentUser();
              if (user && response.coins !== undefined) {
                user.coins = response.coins;
                _core_auth_js__WEBPACK_IMPORTED_MODULE_1__["default"].setUser(user);
              }
              this.showToast('签到成功！');
              setTimeout(function () {
                return _this3.closeCheckinModal();
              }, 1500);
              _context3.n = 6;
              break;
            case 5:
              _context3.p = 5;
              _t4 = _context3.v;
              console.error('签到请求失败', _t4);
              this.showToast(_t4.message || '网络错误，请检查连接');
            case 6:
              return _context3.a(2);
          }
        }, _callee3, this, [[1, 5]]);
      }));
      function claimReward() {
        return _claimReward.apply(this, arguments);
      }
      return claimReward;
    }() // 简单提示（可用全局 toast 组件替换）
  }, {
    key: "showToast",
    value: function showToast(message) {
      alert(message); // 临时用 alert，实际项目可替换为优雅的 toast
    }

    // ---------- 分类 ----------
  }, {
    key: "initCategoryTabs",
    value: function () {
      var _initCategoryTabs = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var response, categories, activeCategories, _t5;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_0__.api.category.getList();
            case 1:
              response = _context4.v;
              categories = [];
              if (response && response.success && Array.isArray(response.data)) {
                categories = response.data;
              } else if (Array.isArray(response)) {
                categories = response;
              }

              // 过滤掉未激活的分类
              activeCategories = categories.filter(function (cat) {
                return cat.is_active !== false;
              });
              if (activeCategories.length > 0) {
                this.categories = activeCategories;
                this.renderCategories(activeCategories);
              } else {
                // 无分类时只显示“全部”
                this.categories = [];
                this.renderCategories([]);
              }
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t5 = _context4.v;
              console.error('❌ 加载分类失败:', _t5);
              this.showToast('分类加载失败，请刷新页面');
              this.renderCategories([]); // 至少显示“全部”
            case 3:
              return _context4.a(2);
          }
        }, _callee4, this, [[0, 2]]);
      }));
      function initCategoryTabs() {
        return _initCategoryTabs.apply(this, arguments);
      }
      return initCategoryTabs;
    }()
  }, {
    key: "renderCategories",
    value: function renderCategories(categories) {
      var _this4 = this;
      var container = document.querySelector('.category-list');
      if (!container) return;
      container.innerHTML = ''; // 清空

      // 创建“全部”选项卡
      var allTab = document.createElement('div');
      allTab.className = "category-item ".concat(this.currentCategory === 'all' ? 'active' : '');
      allTab.dataset.category = 'all';
      allTab.innerHTML = "<i class=\"fas fa-fire\"></i><span data-i18n=\"category.all\">\u5168\u90E8</span>";
      allTab.addEventListener('click', function (e) {
        return _this4.onCategoryClick('all', e);
      });
      container.appendChild(allTab);

      // 渲染每个分类
      categories.forEach(function (cat) {
        var tab = document.createElement('div');
        tab.className = "category-item ".concat(_this4.currentCategory === cat.id ? 'active' : '');
        tab.dataset.category = cat.id;

        // 处理图标
        var iconClass = 'fa-tag';
        if (cat.icon) {
          iconClass = cat.icon.startsWith('fa-') ? cat.icon : "fa-".concat(cat.icon);
        }
        var translationKey = "category.".concat(cat.id);
        // 关键修改：使用 data-i18n 属性，而不是直接 i18n.t()
        tab.innerHTML = "<i class=\"fas ".concat(iconClass, "\"></i><span data-i18n=\"").concat(translationKey, "\">").concat(cat.name || '未知', "</span>");
        tab.addEventListener('click', function (e) {
          return _this4.onCategoryClick(cat.id, e);
        });
        container.appendChild(tab);
      });

      // 让 i18n 翻译这些新元素
      if (window.i18n) window.i18n.updateDOM();
    }
  }, {
    key: "onCategoryClick",
    value: function onCategoryClick(categoryId, event) {
      // 移除其他激活状态
      document.querySelectorAll('.category-item').forEach(function (t) {
        return t.classList.remove('active');
      });
      event.currentTarget.classList.add('active');
      this.currentCategory = categoryId;
      this.page = 1;
      this.hasMore = true;
      document.getElementById('dramaGrid').innerHTML = '';
      this.loadDramas();
    }

    // ---------- 搜索 ----------
  }, {
    key: "initSearch",
    value: function initSearch() {
      var _this5 = this;
      var searchInput = document.getElementById('searchInput');
      var searchBtn = document.getElementById('searchBtn');
      if (!searchInput || !searchBtn) return;
      if (this.searchQuery) {
        searchInput.value = this.searchQuery;
      }
      var performSearch = function performSearch() {
        var query = searchInput.value.trim();
        if (query === _this5.searchQuery) return;
        _this5.searchQuery = query;
        _this5.page = 1;
        _this5.hasMore = true;
        document.getElementById('dramaGrid').innerHTML = '';
        _this5.loadDramas();
        var url = new URL(window.location);
        if (query) url.searchParams.set('q', query);else url.searchParams["delete"]('q');
        window.history.pushState({}, '', url);
      };
      searchBtn.addEventListener('click', performSearch);
      searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') performSearch();
      });
    }

    // ---------- 剧集加载（分页修复）----------
  }, {
    key: "initInfiniteScroll",
    value: function initInfiniteScroll() {
      var _this6 = this;
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !_this6.isLoading && _this6.hasMore) {
            _this6.page++;
            _this6.loadDramas();
          }
        });
      }, {
        threshold: 0.1
      });
      var trigger = document.getElementById('loadMoreTrigger');
      if (trigger) observer.observe(trigger);
    }
  }, {
    key: "loadDramas",
    value: function () {
      var _loadDramas = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var currentLang, params, response, dramas, total, totalPages, grid, _grid, _t6;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              if (!(this.isLoading || !this.hasMore)) {
                _context5.n = 1;
                break;
              }
              return _context5.a(2);
            case 1:
              this.isLoading = true;
              this.showLoading();
              _context5.p = 2;
              currentLang = _core_i18n_js__WEBPACK_IMPORTED_MODULE_2__["default"].currentLang || localStorage.getItem('language') || 'en-US';
              params = {
                page: this.page,
                limit: 20,
                category: this.currentCategory !== 'all' ? this.currentCategory : '',
                search: this.searchQuery,
                language: currentLang
              };
              _context5.n = 3;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_0__.api.drama.getList(params);
            case 3:
              response = _context5.v;
              if (!(!response || !response.success)) {
                _context5.n = 4;
                break;
              }
              throw new Error(response && response.error || '加载失败');
            case 4:
              // 假设后端返回分页数据结构：{ data: [], total: 100, page: 1, totalPages: 5 }
              // 或直接返回 { data: [], hasMore: true }
              dramas = response.data || [];
              total = response.total; // 可能没有
              totalPages = response.totalPages; // 可能没有
              // 计算是否有更多数据
              if (total !== undefined) {
                this.hasMore = this.page < totalPages;
              } else if (response.hasMore !== undefined) {
                this.hasMore = response.hasMore;
              } else {
                // 降级：如果返回数组长度小于 limit，则认为没有更多
                this.hasMore = dramas.length === 20;
              }
              if (dramas.length > 0) {
                this.renderDramas(dramas);
              } else if (this.page === 1) {
                // 首次加载无数据
                grid = document.getElementById('dramaGrid');
                grid.innerHTML = '<div class="no-data" style="grid-column: 1/-1; text-align: center; padding: 40px; color: #888;">暂无相关剧集</div>';
              }
              _context5.n = 6;
              break;
            case 5:
              _context5.p = 5;
              _t6 = _context5.v;
              console.error('❌ Failed to load dramas:', _t6);
              if (this.page === 1) {
                _grid = document.getElementById('dramaGrid');
                _grid.innerHTML = '<div class="error" style="grid-column: 1/-1; text-align: center; padding: 40px; color: #FF3B5C;">网络错误，请刷新重试</div>';
              } else {
                // 后续页加载失败可提示用户
                this.showToast('加载更多失败，请重试');
              }
            case 6:
              _context5.p = 6;
              this.isLoading = false;
              this.hideLoading();
              this.updateLoadMoreTrigger();
              return _context5.f(6);
            case 7:
              return _context5.a(2);
          }
        }, _callee5, this, [[2, 5, 6, 7]]);
      }));
      function loadDramas() {
        return _loadDramas.apply(this, arguments);
      }
      return loadDramas;
    }()
  }, {
    key: "renderDramas",
    value: function renderDramas(dramas) {
      var _this7 = this;
      var grid = document.getElementById('dramaGrid');
      if (!grid) return;

      // 使用 DocumentFragment 减少重绘
      var fragment = document.createDocumentFragment();
      dramas.forEach(function (drama) {
        var card = _this7.createDramaCard(drama);
        fragment.appendChild(card);
      });
      grid.appendChild(fragment);
    }

    /**
     * 使用 DOM 方法构建卡片，避免 innerHTML 注入风险
     */
  }, {
    key: "createDramaCard",
    value: function createDramaCard(drama) {
      var card = document.createElement('div');
      card.className = 'drama-card';

      // 数据提取（设置默认值，避免 undefined）
      var title = drama.title || '未知剧集';
      var viewCount = drama.views_count || drama.view_count || drama.views || 0;
      var totalEps = drama.total_episodes || drama.episodes || '?';
      var watchedEpisodes = drama.watchedEpisodes || 0; // 若后端返回
      var progressPercent = watchedEpisodes ? watchedEpisodes / (totalEps || 1) * 100 : 0;
      var coverUrl = drama.cover_url || '';
      var isHot = drama.isHot || false;
      var isNew = drama.isNew || false;
      var isVip = drama.isVip || drama.is_vip || false;

      // --- 缩略图容器 ---
      var thumbnailDiv = document.createElement('div');
      thumbnailDiv.className = 'drama-thumbnail';
      if (coverUrl) {
        var img = document.createElement('img');
        img.src = coverUrl;
        img.alt = title;
        img.style.cssText = 'width:100%;height:100%;object-fit:cover;';
        img.onerror = function () {
          // 图片加载失败时替换为默认图标
          this.outerHTML = "<div class=\"drama-thumbnail\" style=\"background: linear-gradient(135deg, #FF385C, #6B46C1); width:100%; height:100%; display: flex; align-items: center; justify-content: center;\">\n                    <i class=\"fas fa-film\" style=\"font-size: 48px; color: white; opacity: 0.8;\"></i>\n                </div>";
        };
        thumbnailDiv.appendChild(img);
      } else {
        thumbnailDiv.innerHTML = "<div class=\"drama-thumbnail\" style=\"background: linear-gradient(135deg, #FF385C, #6B46C1); width:100%; height:100%; display: flex; align-items: center; justify-content: center;\">\n                <i class=\"fas fa-film\" style=\"font-size: 48px; color: white; opacity: 0.8;\"></i>\n            </div>";
      }

      // 徽章容器
      var badgesDiv = document.createElement('div');
      badgesDiv.className = 'drama-badges';
      if (isHot) badgesDiv.innerHTML += '<div class="badge hot-badge">HOT</div>';
      if (isNew) badgesDiv.innerHTML += '<div class="badge new-badge">NEW</div>';
      if (isVip) badgesDiv.innerHTML += '<div class="badge vip-only">VIP</div>';
      thumbnailDiv.appendChild(badgesDiv);

      // 播放悬浮层
      var overlayDiv = document.createElement('div');
      overlayDiv.className = 'play-overlay';
      overlayDiv.innerHTML = '<div class="play-circle"><i class="fas fa-play"></i></div>';
      thumbnailDiv.appendChild(overlayDiv);
      card.appendChild(thumbnailDiv);

      // --- 剧集信息 ---
      var infoDiv = document.createElement('div');
      infoDiv.className = 'drama-info';
      var titleEl = document.createElement('h3');
      titleEl.className = 'drama-title';
      titleEl.textContent = title; // 安全赋值
      infoDiv.appendChild(titleEl);
      var metaDiv = document.createElement('div');
      metaDiv.className = 'drama-meta';

      // 集数
      var episodesDiv = document.createElement('div');
      episodesDiv.className = 'drama-episodes';
      episodesDiv.innerHTML = "<i class=\"fas fa-list-ol\"></i><span>".concat(totalEps, " <span data-i18n=\"player.episodes\">\u96C6</span></span>");
      metaDiv.appendChild(episodesDiv);

      // 播放量
      var statsDiv = document.createElement('div');
      statsDiv.className = 'drama-stats';
      statsDiv.innerHTML = "<i class=\"fas fa-eye\"></i><span>".concat(this.formatViews(viewCount), "</span>");
      metaDiv.appendChild(statsDiv);
      infoDiv.appendChild(metaDiv);

      // 进度条（如果有）
      if (watchedEpisodes > 0) {
        var progressContainer = document.createElement('div');
        progressContainer.className = 'progress-container';
        var progress = document.createElement('div');
        progress.className = 'progress';
        progress.style.width = "".concat(progressPercent, "%");
        progressContainer.appendChild(progress);
        infoDiv.appendChild(progressContainer);
        var progressText = document.createElement('div');
        progressText.className = 'progress-text';
        progressText.innerHTML = "<span>Watched ".concat(watchedEpisodes, "/").concat(totalEps, "</span><span>").concat(Math.round(progressPercent), "%</span>");
        infoDiv.appendChild(progressText);
      }
      card.appendChild(infoDiv);

      // 点击跳转
      card.addEventListener('click', function () {
        window.location.href = "/pages/player.html?drama=".concat(drama.id);
      });
      return card;
    }
  }, {
    key: "formatViews",
    value: function formatViews(views) {
      if (!views) return '0';
      var num = Number(views);
      if (isNaN(num)) return '0';
      if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
      if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
      return num.toString();
    }

    // ---------- 辅助 UI ----------
  }, {
    key: "updateLoadMoreTrigger",
    value: function updateLoadMoreTrigger() {
      var trigger = document.getElementById('loadMoreTrigger');
      if (trigger) {
        trigger.innerHTML = this.hasMore ? '' : '<p class="end-message" data-i18n="home.noMore">没有更多了</p>';
      }
    }
  }, {
    key: "showLoading",
    value: function showLoading() {
      var loading = document.getElementById('dramaLoading');
      if (loading) loading.classList.add('show');
    }
  }, {
    key: "hideLoading",
    value: function hideLoading() {
      var loading = document.getElementById('dramaLoading');
      if (loading) loading.classList.remove('show');
    }
  }, {
    key: "showError",
    value: function showError(message) {
      var errorEl = document.getElementById('errorMessage');
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.style.display = 'block';
      } else {
        // 降级显示
        this.showToast(message);
      }
      this.hideLoading();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _document$getElementB,
        _this8 = this;
      (_document$getElementB = document.getElementById('coinDisplay')) === null || _document$getElementB === void 0 || _document$getElementB.addEventListener('click', function () {
        window.location.href = '/pages/payment.html';
      });

      // 使用事件委托监听签到按钮
      document.addEventListener('click', function (e) {
        var checkinBtn = e.target.closest('#dailyCheckinBtn');
        if (checkinBtn) {
          e.preventDefault();
          _this8.openCheckinModal();
        }
      });
    }
  }]);
}(); // 启动
var bootstrapHomePage = function bootstrapHomePage() {
  if (document.getElementById('dramaGrid') && !window.homePage) {
    window.homePage = new HomePage();
  }
};
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrapHomePage);
} else {
  bootstrapHomePage();
}
/******/ })()
;