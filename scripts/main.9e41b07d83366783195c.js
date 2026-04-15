/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ 249
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
___CSS_LOADER_EXPORT___.push([module.id, `/* ==========================================================================
   Global Shorts - 核心全局样式 (变量、重置、公共组件)
   ========================================================================== */

/* ----------------------------------
   1. CSS 变量
   ---------------------------------- */
:root {
    --primary: #FF385C;
    --primary-dark: #E0314F;
    --primary-light: #FF6B8B;
    --secondary: #2D2F3B;
    --bg-dark: #121212;
    --bg-card: #1E1E1E;
    --bg-overlay: rgba(0, 0, 0, 0.7);
    --text-main: #FFFFFF;
    --text-secondary: #888888;
    --success: #00C853;
    --warning: #FFAB00;
    --error: #f5222d;
    --vip-gold: #FFD700;
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 16px;
    --radius-pill: 50px;
    --z-header: 100;
    --z-bottom-nav: 100;
    --z-dropdown: 1000;
    --z-modal: 2000;
    --z-toast: 3000;
}

/* ----------------------------------
   2. 基础重置
   ---------------------------------- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    width: 100%;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    background-color: var(--bg-dark);
    color: var(--text-main);
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
}

a {
    color: inherit;
    text-decoration: none;
}

ul, ol {
    list-style: none;
}

img, video {
    max-width: 100%;
    height: auto;
    display: block;
}

button, input, select {
    font-family: inherit;
    border: none;
    outline: none;
    background: none;
}

button {
    cursor: pointer;
}

/* ----------------------------------
   3. 通用组件
   ---------------------------------- */
.btn {
    padding: 10px 24px;
    border-radius: var(--radius-pill);
    font-weight: 600;
    font-size: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s ease;
}

.btn-primary {
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    color: #fff;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 56, 92, 0.4);
}

.btn-text {
    color: var(--text-main);
    padding: 8px 16px;
}

.btn-text:hover {
    color: var(--primary);
}

.loading-spinner {
    width: 40px;
    height: 40px;
    border: 3px solid rgba(255, 56, 92, 0.2);
    border-top-color: var(--primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* ----------------------------------
   4. 顶部导航栏 (main-header)
   ---------------------------------- */
.main-header {
    background: linear-gradient(135deg, var(--bg-card), var(--secondary));
    padding: 20px 0;
    position: sticky;
    top: 0;
    z-index: var(--z-header);
    box-shadow: 0 2px 10px rgba(0,0,0,0.5);
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* 左侧 Logo + 语言 */
.header-left {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-shrink: 0;
}

.logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 22px;
    font-weight: bold;
    color: var(--primary);
    cursor: pointer;
}

.language-switcher {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 6px 12px;
    background: rgba(255,255,255,0.1);
    border-radius: 20px;
    color: white;
    font-size: 13px;
    cursor: pointer;
    transition: background 0.2s;
    border: 1px solid rgba(255,255,255,0.1);
}

.language-switcher:hover {
    background: rgba(255,255,255,0.15);
}

/* 右侧用户信息栏 */
.header-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.user-info-bar {
    display: flex;
    align-items: center;
    gap: 15px;
}

.user-stats {
    display: flex;
    align-items: center;
    gap: 10px;
}

.coin-display {
    display: flex;
    align-items: center;
    gap: 5px;
    background: rgba(0,200,83,0.2);
    padding: 6px 12px;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s;
}

.coin-display:hover {
    transform: scale(1.05);
}

.coin-display i {
    color: var(--warning);
}

.daily-checkin {
    background: var(--primary);
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    transition: all 0.3s;
}

.daily-checkin:hover {
    box-shadow: 0 5px 15px rgba(255,56,92,0.4);
    transform: translateY(-2px);
}

.daily-checkin.checked {
    background: var(--success);
}

.user-profile-dropdown {
    position: relative;
    cursor: pointer;
}

.user-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(45deg, var(--primary), var(--primary-light));
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.dropdown-menu {
    position: absolute;
    top: 120%;
    right: 0;
    background: var(--bg-card);
    border-radius: 10px;
    width: 160px;
    display: none;
    flex-direction: column;
    box-shadow: 0 5px 15px rgba(0,0,0,0.5);
    z-index: var(--z-dropdown);
    border: 1px solid rgba(255,255,255,0.05);
}

.dropdown-menu.show {
    display: flex;
}

.dropdown-header {
    padding: 10px;
    border-bottom: 1px solid #333;
    font-size: 12px;
    color: #888;
}

.dropdown-item {
    padding: 12px 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: var(--text-secondary);
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
}

.dropdown-item:hover {
    background: rgba(255,255,255,0.05);
    color: white;
}

.dropdown-item.text-danger {
    color: var(--primary);
}

/* 语言下拉（全局） */
.language-menu {
    position: absolute;
    background: rgba(30, 30, 40, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
    min-width: 120px;
    z-index: var(--z-dropdown);
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.language-menu-content {
    display: flex;
    flex-direction: column;
    padding: 6px 0;
}

.language-option {
    padding: 10px 14px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
}

.language-option:hover {
    background: rgba(255, 255, 255, 0.12);
}

.language-option.active {
    color: var(--primary);
    font-weight: 700;
    background: rgba(255, 56, 92, 0.2);
}

/* 未登录时的登录按钮 */
.login-btn {
    background: #333;
    color: white;
    border: none;
    padding: 8px 20px;
    border-radius: 20px;
    font-weight: bold;
    white-space: nowrap;
    cursor: pointer;
}

/* ----------------------------------
   5. 底部导航栏
   ---------------------------------- */
.bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: var(--bg-card);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: space-around;
    padding: 15px 0 calc(15px + env(safe-area-inset-bottom));
    border-top: 1px solid rgba(255,255,255,0.05);
    z-index: var(--z-bottom-nav);
}

.bottom-nav a.nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    color: var(--text-secondary);
    transition: color 0.3s;
    text-decoration: none;
}

.bottom-nav a.nav-item i {
    font-size: 22px;
}

.bottom-nav a.nav-item span {
    font-size: 12px;
    font-weight: 600;
}

.bottom-nav a.nav-item.active {
    color: var(--primary);
}

/* ----------------------------------
   6. 模态框 (签到、解锁等)
   ---------------------------------- */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: var(--z-modal);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
}

.modal-overlay.active {
    opacity: 1;
    visibility: visible;
}

/* 签到模态框专用样式 (防溢出) */
.checkin-modal {
    background: var(--bg-card);
    border-radius: 25px;
    padding: 30px 20px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    transform: translateY(30px);
    transition: transform 0.5s;
}

.modal-overlay.active .checkin-modal {
    transform: translateY(0);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.modal-title {
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 10px;
}

.close-modal {
    background: transparent;
    border: none;
    color: var(--text-secondary);
    font-size: 24px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.close-modal:hover {
    background: rgba(255, 255, 255, 0.1);
}

/* 签到网格 - 7列等宽，内容防溢出 */
.checkin-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 8px;
    margin-bottom: 25px;
}

.checkin-day {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 10px 2px;
    border-radius: 12px;
    background: var(--secondary);
    min-width: 0;
    text-align: center;
}

.day-name {
    font-size: 12px;
    color: var(--text-secondary);
    width: 100%;
    overflow-wrap: break-word;
    word-break: break-word;
    line-height: 1.3;
    max-width: 100%;
}

.day-reward {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    font-weight: 700;
    font-size: 13px;
    width: 100%;
    overflow-wrap: break-word;
    word-break: break-word;
}

.day-reward i {
    font-size: 12px;
    flex-shrink: 0;
}

.day-reward span {
    overflow-wrap: break-word;
    word-break: break-word;
}

.checkin-day.claimed {
    background: var(--success);
}

.checkin-day.today {
    background: var(--primary);
    animation: pulse 2s infinite;
}

.checkin-day.claimed .day-name,
.checkin-day.today .day-name,
.checkin-day.claimed .day-reward,
.checkin-day.today .day-reward {
    color: white;
}

.claim-btn {
    width: 100%;
    background: var(--primary);
    color: white;
    border: none;
    padding: 14px 10px;
    border-radius: 15px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s;
    white-space: normal;
    word-break: break-word;
    line-height: 1.4;
    min-height: 50px;
}

.claim-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(255, 56, 92, 0.4);
}

.claim-btn.claimed {
    background: var(--success);
}

@media (max-width: 400px) {
    .checkin-modal {
        padding: 20px 12px;
    }

    .checkin-grid {
        gap: 4px;
    }

    .checkin-day {
        padding: 8px 1px;
        gap: 3px;
    }

    .day-name {
        font-size: 10px;
    }

    .day-reward {
        font-size: 11px;
    }

    .day-reward i {
        font-size: 10px;
    }

    .claim-btn {
        font-size: 14px;
        padding: 12px 8px;
    }
}

.checkin-day,
.day-name,
.day-reward {
    max-width: 100%;
    box-sizing: border-box;
}

/* 解锁弹窗样式 */
.unlock-modal {
    background: var(--bg-card);
    border-radius: 24px;
    width: 90%;
    max-width: 400px;
    padding: 24px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
}

.unlock-modal .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    padding-bottom: 16px;
}

.unlock-modal .modal-title {
    font-size: 20px;
    font-weight: 700;
    color: white;
    display: flex;
    align-items: center;
    gap: 8px;
}

.unlock-modal .modal-title i {
    color: var(--primary);
    font-size: 22px;
}

.unlock-modal .modal-close {
    background: transparent;
    border: none;
    color: var(--text-secondary);
    font-size: 22px;
    cursor: pointer;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
}

.unlock-modal .modal-close:hover {
    background: rgba(255,255,255,0.1);
}

.unlock-modal .modal-body {
    margin-bottom: 24px;
}

.unlock-modal .drama-info {
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(255,255,255,0.05);
    border-radius: 16px;
    padding: 16px;
    margin-bottom: 20px;
}

.unlock-modal .drama-cover {
    width: 60px;
    height: 80px;
    border-radius: 8px;
    background: linear-gradient(135deg, #2D2F3B, #121212);
    object-fit: cover;
}

.unlock-modal .drama-details {
    flex: 1;
}

.unlock-modal .drama-title {
    font-size: 18px;
    font-weight: 700;
    color: white;
    margin-bottom: 4px;
}

.unlock-modal .drama-episode {
    font-size: 14px;
    color: var(--text-secondary);
}

.unlock-modal .price-tag {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255,56,92,0.1);
    border-radius: 12px;
    padding: 12px 16px;
    margin-bottom: 16px;
}

.unlock-modal .price-label {
    font-size: 16px;
    color: var(--text-secondary);
}

.unlock-modal .price-value {
    font-size: 20px;
    font-weight: 700;
    color: var(--warning);
    display: flex;
    align-items: center;
    gap: 4px;
}

.unlock-modal .coin-balance {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(0,200,83,0.05);
    border-radius: 12px;
    padding: 12px 16px;
}

.unlock-modal .balance-label {
    font-size: 14px;
    color: var(--text-secondary);
}

.unlock-modal .balance-value {
    font-size: 18px;
    font-weight: 700;
    color: var(--success);
    display: flex;
    align-items: center;
    gap: 4px;
}

.unlock-modal .modal-footer {
    display: flex;
    gap: 12px;
}

.unlock-modal .btn {
    flex: 1;
    padding: 14px 0;
    border-radius: 30px;
    font-weight: 700;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s;
}

.unlock-modal .btn-secondary {
    background: rgba(255,255,255,0.1);
    color: white;
    border: 1px solid rgba(255,255,255,0.2);
}

.unlock-modal .btn-secondary:hover {
    background: rgba(255,255,255,0.15);
}

.unlock-modal .btn-primary {
    background: var(--primary);
    color: white;
}

.unlock-modal .btn-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255,56,92,0.4);
}

.unlock-modal .btn-primary:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* ----------------------------------
   7. 动画
   ---------------------------------- */
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ----------------------------------
   8. 响应式调整 (仅影响公共组件)
   ---------------------------------- */
@media (max-width: 768px) {
    .header-container {
        flex-direction: column;
        gap: 10px;
        padding: 5px 15px;
    }

    .header-left {
        width: 100%;
        justify-content: space-between;
    }

    .logo span {
        display: inline-block;
        font-size: 14px;
        max-width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .logo i {
        font-size: 26px;
    }

    .language-switcher span {
        display: none;
    }

    .language-switcher {
        padding: 8px;
        border-radius: 50%;
    }

    .header-right {
        width: 100%;
        justify-content: flex-end;
    }

    .user-info-bar {
        gap: 8px;
    }

    .user-stats {
        gap: 5px;
    }

    .coin-display,
    .daily-checkin {
        height: 32px;
        padding: 0 8px;
    }

    .coin-display span {
        font-size: 12px;
    }

    .daily-checkin span {
        display: none;
    }

    .daily-checkin {
        padding: 0;
        width: 32px;
        border-radius: 50%;
        justify-content: center;
    }

    .user-avatar {
        width: 32px;
        height: 32px;
        font-size: 14px;
    }
}

/* 全局滚动修复 */
html:not(.player-page),
body:not(.player-page) {
    overflow: auto !important;
    overflow-y: auto !important;
    -webkit-overflow-scrolling: touch;
}

body.player-page {
    padding-bottom: 0 !important;
}

body {
    padding-bottom: 70px;
}

/* ========== 浅色背景模式（只变背景，保留图片色彩） ========== */
body.light-mode {
    background-color: #f5f5f5 !important;
    color: #333 !important;
}

/* 头部导航浅色模式 */
body.light-mode .main-header {
    background: linear-gradient(135deg, #ffffff, #f8f8f8) !important;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

body.light-mode .logo span {
    color: #FF385C !important;
}

/* 语言切换器 - 深色背景，白色文字，确保可见 */
body.light-mode .language-switcher {
    background: #f0f0f0 !important;
    color: #333 !important;             
    border-color: #d0d0d0 !important; 
}

body.light-mode .language-switcher i,
body.light-mode .language-switcher span {
    color: #333 !important;              
}

body.light-mode .language-switcher:hover {
    background: #e5e5e5 !important; 
}

/* 语言下拉菜单 */
body.light-mode .language-menu {
    background: white !important;
    border: 1px solid #e0e0e0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

body.light-mode .language-option {
    color: #333 !important;
}

body.light-mode .language-option:hover {
    background: #f0f0f0 !important;
}

body.light-mode .language-option.active {
    color: var(--primary) !important;
    background: rgba(255, 56, 92, 0.1) !important;
}

/* 用户信息栏浅色模式 */
body.light-mode .coin-display {
    background: rgba(0, 200, 83, 0.12) !important;
    color: #333 !important;
}

body.light-mode .coin-display span {
    color: #333 !important;
}

body.light-mode .user-avatar {
    background: linear-gradient(45deg, var(--primary), var(--primary-light));
    color: white;
}

/* 下拉菜单 - 用户名显示 */
body.light-mode .dropdown-menu {
    background: white !important;
    border: 1px solid #e0e0e0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

body.light-mode .dropdown-header {
    border-bottom-color: #e0e0e0 !important;
    color: #666 !important;
}

body.light-mode .dropdown-header strong {
    color: #333 !important;
}
body.light-mode .user-profile-dropdown .username {
    color: #333 !important;
}

/* 如果用户名显示在头像旁边 */
body.light-mode .user-info-bar .username {
    color: #333 !important;
}
body.light-mode .dropdown-item {
    color: #666 !important;
}

body.light-mode .dropdown-item:hover {
    background: #f5f5f5 !important;
    color: #333 !important;
}

body.light-mode .dropdown-item.text-danger {
    color: var(--primary) !important;
}

/* 登录按钮 */
body.light-mode .login-btn {
    background: #e0e0e0 !important;
    color: #333 !important;
}

body.light-mode .login-btn:hover {
    background: #d0d0d0 !important;
}

/* 底部导航浅色模式 */
body.light-mode .bottom-nav {
    background: white !important;
    backdrop-filter: none !important;
    border-top: 1px solid #e0e0e0;
}

body.light-mode .bottom-nav a.nav-item {
    color: #999 !important;
}

body.light-mode .bottom-nav a.nav-item.active {
    color: var(--primary) !important;
}

/* 模态框浅色模式 */
body.light-mode .modal-overlay {
    background: rgba(0, 0, 0, 0.6);
}

body.light-mode .checkin-modal {
    background: white !important;
}

body.light-mode .modal-title {
    color: #333 !important;
}

body.light-mode .close-modal {
    color: #666 !important;
}

body.light-mode .close-modal:hover {
    background: #f0f0f0 !important;
}

body.light-mode .checkin-day {
    background: #f0f0f0 !important;
}

body.light-mode .day-name {
    color: #666 !important;
}

body.light-mode .day-reward {
    color: #333 !important;
}

body.light-mode .checkin-day.claimed {
    background: var(--success) !important;
}

body.light-mode .checkin-day.today {
    background: var(--primary) !important;
}

body.light-mode .checkin-day.claimed .day-name,
body.light-mode .checkin-day.today .day-name,
body.light-mode .checkin-day.claimed .day-reward,
body.light-mode .checkin-day.today .day-reward {
    color: white !important;
}

body.light-mode .claim-btn {
    background: var(--primary);
    color: white;
}

body.light-mode .claim-btn.claimed {
    background: var(--success);
}

/* 解锁弹窗浅色模式 */
body.light-mode .unlock-modal {
    background: white !important;
}

body.light-mode .unlock-modal .modal-header {
    border-bottom-color: #e0e0e0 !important;
}

body.light-mode .unlock-modal .modal-title {
    color: #333 !important;
}

body.light-mode .unlock-modal .drama-info {
    background: #f9f9f9 !important;
}

body.light-mode .unlock-modal .drama-title {
    color: #333 !important;
}

body.light-mode .unlock-modal .drama-episode {
    color: #666 !important;
}

body.light-mode .unlock-modal .price-tag {
    background: rgba(255, 56, 92, 0.08) !important;
}

body.light-mode .unlock-modal .price-label {
    color: #666 !important;
}

body.light-mode .unlock-modal .coin-balance {
    background: rgba(0, 200, 83, 0.05) !important;
}

body.light-mode .unlock-modal .balance-label {
    color: #666 !important;
}

body.light-mode .unlock-modal .btn-secondary {
    background: #f0f0f0 !important;
    color: #333 !important;
    border: 1px solid #e0e0e0 !important;
}

body.light-mode .unlock-modal .btn-secondary:hover {
    background: #e8e8e8 !important;
}

/* 确保所有文字在浅色模式下可见 */
body.light-mode .text-secondary,
body.light-mode .drama-stats,
body.light-mode .drama-episodes {
    color: #666 !important;
}

body.light-mode .end-message {
    color: #999 !important;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 20
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
___CSS_LOADER_EXPORT___.push([module.id, `/* 发现页面样式 */
.discover-tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
}

.category-filter {
    display: flex;
    gap: 12px;
    overflow-x: auto;
    padding-bottom: 15px;
}

.content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 732
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
   首页 (Home) 专属样式 - 简化版 (全平台自适应优化)
   ========================================= */

/* ---------- 全局变量 ---------- */
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
}

/* ---------- 隐藏头部用户信息（只留网站名和语言切换器） ---------- */
.header-right {
    display: none !important;
}

/* ---------- 分类导航 ---------- */
.category-nav {
    margin: 20px 0 15px;
    padding: 0 40px;
}

@media (max-width: 992px) {
    .category-nav {
        padding: 0 20px;
    }
}
@media (max-width: 768px) {
    .category-nav {
        padding: 0 16px;
        margin: 15px 0 10px;
    }
}

.category-list {
    display: flex;
    gap: 15px;
    overflow-x: auto;
    padding-bottom: 10px;
    scrollbar-width: thin;
    scrollbar-color: var(--primary) var(--secondary);
    -webkit-overflow-scrolling: touch;
}

.category-list::-webkit-scrollbar {
    height: 6px;
}
.category-list::-webkit-scrollbar-track {
    background: var(--secondary);
    border-radius: 3px;
}
.category-list::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 3px;
}

.category-item {
    background: var(--bg-card);
    padding: 10px 22px;
    border-radius: 30px;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    flex-shrink: 0;
}

.category-item:hover {
    background: rgba(255, 56, 92, 0.2);
    transform: translateY(-3px);
}

.category-item.active {
    background: var(--primary);
    color: white;
    box-shadow: 0 4px 12px rgba(255, 56, 92, 0.4);
}

/* ---------- 搜索栏 ---------- */
.search-container {
    margin: 20px 0 30px;
    width: 100%;
    max-width: 600px;
    padding: 0 40px;
}

@media (max-width: 992px) {
    .search-container {
        padding: 0 20px;
    }
}
@media (max-width: 768px) {
    .search-container {
        padding: 0 16px;
        margin: 12px 0 20px;
    }
}

.search-bar {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 30px;
    padding: 5px 5px 5px 20px;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

.search-icon {
    color: var(--text-secondary);
    margin-right: 10px;
    font-size: 16px;
}

.search-input {
    flex-grow: 1;
    background: transparent;
    border: none;
    color: white;
    font-size: 15px;
    outline: none;
    width: 100%;
    min-width: 0;
}

.search-input::placeholder {
    color: rgba(255, 255, 255, 0.3);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.search-btn {
    background: var(--primary);
    color: white;
    border: none;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-shrink: 0;
    transition: background 0.2s;
}

.search-btn:hover {
    background: var(--primary-dark);
}

/* ---------- 剧集网格 (核心修改区域) ---------- */
.drama-grid-container {
    margin-bottom: 40px;
    padding: 0 40px;
}

@media (max-width: 992px) {
    .drama-grid-container {
        padding: 0 20px;
    }
}
@media (max-width: 768px) {
    .drama-grid-container {
        padding: 0 16px;
    }
}

.section-title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.section-title i {
    color: var(--primary);
}

/* 网格：全平台响应式控制列数，确保铺满且比例正常 */
.drama-grid {
    display: grid;
    width: 100%;
    gap: 25px;
    /* 默认 PC 超宽屏：5 列等分 */
    grid-template-columns: repeat(5, 1fr);
}

/* 适配 PC 常见屏幕 / 笔记本 (<= 1400px)：4 列 */
@media (max-width: 1400px) {
    .drama-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

/* 适配平板大屏 (<= 1024px)：3 列 */
@media (max-width: 1024px) {
    .drama-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
}

/* 适配手机端 (<= 768px)：强制双排 2 列 */
@media (max-width: 768px) {
    .drama-grid {
        grid-template-columns: repeat(2, 1fr); 
        gap: 15px;
    }
}

/* 卡片样式 */
.drama-card {
    position: relative;
    background: transparent;
    border-radius: 20px;
    overflow: hidden;
    width: 100%;
    transition: transform 0.3s, box-shadow 0.3s;
}

.drama-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
}

/* 缩略图：固定宽高比 3:4 */
.drama-thumbnail {
    position: relative;
    width: 100%;
    aspect-ratio: 3 / 4;
    background: var(--light-dark);
    overflow: hidden;
}

.drama-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 保证图片等比拉伸填满，不变形 */
    display: block;
    transition: transform 0.3s;
}

.drama-card:hover .drama-thumbnail img {
    transform: scale(1.05);
}

/* 徽章容器 */
.drama-badges {
    position: absolute;
    top: 15px;
    left: 15px;
    display: flex;
    gap: 8px;
    z-index: 2;
    flex-wrap: wrap;
    max-width: calc(100% - 30px);
}

.badge {
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 11px;
    font-weight: 700;
    white-space: nowrap;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
}

.hot-badge {
    background: var(--primary);
    color: white;
}

.new-badge {
    background: var(--success);
    color: white;
}

.vip-only {
    background: var(--vip-gold);
    color: #000;
}

/* 播放蒙层 */
.play-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 3;
}

.drama-card:hover .play-overlay {
    opacity: 1;
}

.play-circle {
    width: 60px;
    height: 60px;
    background: var(--primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    box-shadow: 0 5px 15px rgba(255, 56, 92, 0.5);
}

/* 剧集信息区域 */
.drama-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.drama-title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-word;
}

.drama-meta {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: var(--text-secondary);
    margin-bottom: 15px;
    gap: 10px;
    flex-wrap: wrap;
}

.drama-episodes,
.drama-stats {
    display: flex;
    align-items: center;
    gap: 5px;
    white-space: nowrap;
}

.drama-episodes span,
.drama-stats span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100px;
}

/* 进度条 */
.progress-container {
    height: 6px;
    background: var(--secondary);
    border-radius: 3px;
    overflow: hidden;
    margin-bottom: 10px;
}

.progress {
    height: 100%;
    background: var(--primary);
    border-radius: 3px;
}

.progress-text {
    font-size: 12px;
    color: var(--text-secondary);
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
}

/* 加载和空状态 */
.drama-loading {
    text-align: center;
    padding: 40px;
    display: none;
}

.drama-loading.show {
    display: block;
}

.load-more-trigger {
    text-align: center;
    padding: 20px;
}

.end-message {
    color: var(--text-secondary);
    font-size: 13px;
}

/* 切换按钮样式 */
.color-mode-btn {
    position: fixed;
    bottom: 80px;
    right: 16px;
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    border-radius: 40px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
}

.color-mode-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.color-mode-btn:active {
    transform: scale(0.98);
}

.color-mode-btn i {
    font-size: 16px;
}

/* 浅色模式下的按钮样式 */
.color-mode-btn.light-active {
    background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
}

/* ========== 浅色背景模式（只改变背景色，不影响图片和文字颜色） ========== */
body.light-mode {
    background-color: #f5f5f5;
}

body.light-mode .category-nav,
body.light-mode .drama-grid-container {
    background-color: #f5f5f5;
}

body.light-mode .category-item {
    background: rgba(0, 0, 0, 0.08);
    color: #333;
}

body.light-mode .category-item.active {
    background: var(--primary);
    color: white;
}

body.light-mode .search-bar {
    background: white;
    border: 1px solid #e0e0e0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

body.light-mode .search-input {
    color: #333;
}

body.light-mode .search-input::placeholder {
    color: #aaa;
}

body.light-mode .section-title {
    color: #333;
}

/* 卡片在浅色模式下的样式 - 信息栏纯白色不透明 */
body.light-mode .drama-info {
    background: rgba(255, 255, 255, 0.85) !important;     
    backdrop-filter: blur(8px) !important; 
    border-top: 1px solid rgba(255, 255, 255, 0.3);
}

body.light-mode .drama-title {
    color: #333 !important;
}

body.light-mode .drama-meta {
    color: #666 !important;
}

body.light-mode .drama-episodes,
body.light-mode .drama-stats {
    color: #666 !important;
}

body.light-mode .progress-container {
    background: #e0e0e0;
}

body.light-mode .progress-text {
    color: #666;
}
/* 移动端适配 */
@media (max-width: 768px) {
    .color-mode-btn {
        bottom: 70px;
        right: 12px;
        padding: 10px 14px;
        font-size: 12px;
    }
    
    .color-mode-btn span {
        display: inline;
    }
}

@media (max-width: 480px) {
    .color-mode-btn span {
        display: none;
    }
    
    .color-mode-btn {
        padding: 12px;
        border-radius: 50%;
    }
    
    .color-mode-btn i {
        margin: 0;
    }
}

/* 手机端详细适配 (精细版) */
@media (max-width: 768px) {
    /* 隐藏标题保持不变 */
    .category-nav .section-title,
    .drama-grid-container .section-title {
        display: none;
    }

    /* 导航和搜索栏优化保持不变 */
    .category-nav { margin: 10px 0 15px; }
    .category-list { gap: 8px; }
    .category-item { padding: 6px 16px; font-size: 13px; }
    .search-bar { padding: 3px 3px 3px 16px; height: 44px; }
    .search-icon { font-size: 14px; }
    .search-input { font-size: 14px; }
    .search-btn { width: 38px; height: 38px; }

    /* 核心压缩区域 (drama-info) */
    .drama-info {
        padding: 8px 10px;
    }

    .drama-title {
        font-size: 14px !important;
        margin-bottom: 3px !important;
        line-height: 1.2 !important;
        -webkit-line-clamp: 2;
    }

    .drama-meta {
        font-size: 11px !important;
        margin-bottom: 4px !important;
        flex-direction: row !important;
        justify-content: space-between !important;
        align-items: center !important;
        gap: 8px !important;
    }

    .progress-container {
        height: 3px !important;
        margin-bottom: 3px !important;
    }

    .progress-text {
        font-size: 10px !important;
    }

    .play-circle {
        width: 44px;
        height: 44px;
        font-size: 20px;
    }
}

/* 手机小屏（≤480px）进一步微调 */
@media (max-width: 480px) {
    .drama-title {
        font-size: 13px !important;
    }

    .drama-episodes span,
    .drama-stats span {
        max-width: 70px;
    }

    .badge {
        font-size: 10px;
        padding: 3px 6px;
    }
}

/* 极端小屏（≤360px） */
@media (max-width: 360px) {
    .drama-info {
        padding: 6px 8px;
    }

    .drama-title {
        font-size: 12px !important;
    }

    .drama-meta {
        font-size: 10px !important;
    }
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 378
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(889), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(399), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* src/styles/pages/login.css */

/* ========== 登录页样式 ========== */

/* 页面容器 */
.login-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--dark);
    background-image: 
        radial-gradient(circle at 20% 80%, rgba(255, 56, 92, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(33, 150, 243, 0.1) 0%, transparent 50%);
    padding: 20px;
}

/* 主容器 */
.auth-container {
    display: flex;
    width: 100%;
    max-width: 1200px;
    min-height: 700px;
    background: var(--light-dark);
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

/* ========== 左侧品牌区域 ========== */
.auth-brand {
    flex: 1;
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    padding: 60px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.auth-brand::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) repeat;
}

.brand-logo {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 40px;
    z-index: 1;
}

.brand-logo i {
    font-size: 40px;
}

.brand-slogan {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.3;
    z-index: 1;
}

.brand-features {
    list-style: none;
    margin-top: 40px;
    z-index: 1;
}

.brand-features li {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
    font-size: 16px;
}

.brand-features li i {
    color: var(--light);
    font-size: 20px;
    width: 30px;
    height: 30px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* ========== 右侧表单区域 ========== */
.auth-form-container {
    flex: 1;
    padding: 60px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    animation: fadeIn 0.5s ease-out;
}

/* 语言切换 */
.language-switcher {
    position: absolute;
    top: 30px;
    right: 30px;
}

.lang-btn {
    background: rgba(255, 255, 255, 0.1);
    color: var(--light);
    border: none;
    padding: 10px 15px;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    transition: background 0.3s;
}

.lang-btn:hover {
    background: rgba(255, 255, 255, 0.2);
}

/* 头部 */
.auth-header {
    margin-bottom: 40px;
}

.auth-title {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 10px;
    color: var(--light);
}

.auth-subtitle {
    color: var(--gray);
    font-size: 16px;
}

/* 进度指示器 */
.progress-steps {
    display: flex;
    gap: 10px;
    margin: 20px 0 30px;
}

.step {
    flex: 1;
    height: 4px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
    transition: all 0.3s;
}

.step.active {
    background: var(--primary);
}

.step.completed {
    background: var(--success);
}

/* ========== 社交登录 ========== */
.social-auth {
    margin-bottom: 30px;
}

.social-buttons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    margin-bottom: 20px;
}

.social-btn {
    padding: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    color: var(--light);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
}

.social-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
}

.social-btn.google {
    border-color: rgba(66, 133, 244, 0.3);
}

.social-btn.google:hover {
    background: rgba(66, 133, 244, 0.1);
}

.social-btn.facebook {
    border-color: rgba(24, 119, 242, 0.3);
}

.social-btn.facebook:hover {
    background: rgba(24, 119, 242, 0.1);
}

.social-btn.apple {
    border-color: rgba(255, 255, 255, 0.3);
}

.social-btn.apple:hover {
    background: rgba(255, 255, 255, 0.1);
}

.divider {
    display: flex;
    align-items: center;
    margin: 25px 0;
    color: var(--gray);
    font-size: 14px;
}

.divider::before,
.divider::after {
    content: "";
    flex: 1;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
}

.divider span {
    padding: 0 15px;
}

/* ========== 表单样式 ========== */
.auth-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form-label {
    font-weight: 600;
    font-size: 14px;
    color: var(--light);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.form-label a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 500;
    font-size: 13px;
}

.form-label a:hover {
    text-decoration: underline;
}

.form-input {
    padding: 16px 20px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: var(--light);
    font-size: 16px;
    transition: all 0.3s;
    width: 100%;
}

.form-input:focus {
    outline: none;
    border-color: var(--primary);
    background: rgba(255, 56, 92, 0.05);
    box-shadow: 0 0 0 3px rgba(255, 56, 92, 0.1);
}

.form-input.error {
    border-color: var(--error);
    background: rgba(245, 34, 45, 0.05);
}

.form-input::placeholder {
    color: var(--gray);
    opacity: 0.5;
}

select.form-input {
    appearance: none;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 20px;
    padding-right: 45px;
}

/* 错误消息 */
.error-message {
    color: var(--error);
    font-size: 13px;
    margin-top: 5px;
    display: none;
}

.error-message.show {
    display: block;
}

/* 密码输入框 */
.password-input {
    position: relative;
}

.toggle-password {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: var(--gray);
    cursor: pointer;
    font-size: 18px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.toggle-password:hover {
    color: var(--light);
}

/* 表单选项 */
.form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
}

.remember-me {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 14px;
    color: var(--gray);
    user-select: none;
}

.checkbox {
    width: 18px;
    height: 18px;
    border-radius: 4px;
    border: 2px solid var(--gray);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
}

.checkbox.checked {
    background: var(--primary);
    border-color: var(--primary);
}

.checkbox.checked i {
    color: white;
    font-size: 12px;
    display: block;
}

.checkbox i {
    display: none;
}

.security-badge {
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--gray);
    font-size: 13px;
}

.security-badge i {
    color: var(--success);
}

/* 主按钮 */
.auth-btn {
    padding: 18px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
}

.auth-btn:hover:not(:disabled) {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 56, 92, 0.3);
}

.auth-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.auth-btn i {
    font-size: 18px;
}

/* 按钮组 */
.form-buttons {
    display: flex;
    gap: 15px;
    margin-top: 10px;
}

.form-buttons .auth-btn {
    flex: 1;
    margin-top: 0;
}

.form-buttons .auth-btn:first-child {
    background: var(--secondary);
}

.form-buttons .auth-btn:first-child:hover:not(:disabled) {
    background: var(--secondary-dark, #1a1c26);
}

/* 偏好选择卡片 */
.preference-card {
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid transparent;
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: all 0.3s;
    color: var(--light);
}

.preference-card:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
}

.preference-card i {
    font-size: 24px;
    color: var(--primary);
}

.preference-card span {
    font-size: 14px;
    font-weight: 600;
}

.preference-card.selected {
    background: rgba(255, 56, 92, 0.1);
    border-color: var(--primary);
}

/* 验证码样式 */
.verification-container {
    margin-top: 20px;
}

.verification-code {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-bottom: 20px;
}

.code-input {
    width: 60px;
    height: 70px;
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: var(--light);
}

.code-input:focus {
    border-color: var(--primary);
    outline: none;
}

.resend-code {
    text-align: center;
    margin: 20px 0;
    color: var(--gray);
    font-size: 14px;
}

.resend-code a {
    color: var(--primary);
    text-decoration: none;
}

.resend-code a:hover {
    text-decoration: underline;
}

.resend-code a.disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
}

#countdownTimer {
    margin-top: 5px;
    font-size: 13px;
}

/* 帮助文本 */
.form-group small {
    color: var(--gray);
    font-size: 13px;
    margin-top: 5px;
    display: block;
}

/* 底部链接 */
.auth-footer {
    text-align: center;
    margin-top: 30px;
    padding-top: 25px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--gray);
    font-size: 14px;
}

.auth-footer a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
}

.auth-footer a:hover {
    text-decoration: underline;
}

/* 动画 */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ========== 响应式设计 ========== */
@media (max-width: 992px) {
    .auth-container {
        flex-direction: column;
        max-width: 500px;
    }
    
    .auth-brand {
        padding: 40px 30px;
    }
    
    .brand-slogan {
        font-size: 24px;
    }
    
    .auth-form-container {
        padding: 40px 30px;
    }
}

@media (max-width: 768px) {
    .social-buttons {
        grid-template-columns: 1fr;
    }
    
    .auth-title {
        font-size: 28px;
    }
    
    .form-options {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }
    
    .verification-code {
        gap: 5px;
    }
    
    .code-input {
        width: 45px;
        height: 55px;
        font-size: 24px;
    }
}

@media (max-width: 576px) {
    .language-switcher {
        position: static;
        margin-bottom: 20px;
    }
    
    .lang-btn {
        justify-content: center;
        width: 100%;
    }
    
    .auth-form-container {
        padding: 30px 20px;
    }
    
    .preference-card {
        padding: 15px;
    }
    
    .preference-card i {
        font-size: 20px;
    }
    
    .preference-card span {
        font-size: 12px;
    }
}

/* 打印样式 */
@media print {
    .auth-container {
        box-shadow: none;
    }
    
    .social-auth,
    .auth-form,
    .auth-footer {
        display: none !important;
    }
}
/* =========================================
   登录页专项修复样式
   ========================================= */

/* 强制让整个页面居中，防止缩到左上角 */
body:has(.auth-container) {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #0f0f13; /* 深色背景 */
    margin: 0;
    padding: 0;
}

.auth-container {
    display: flex;
    width: 100%;
    max-width: 1000px;
    height: auto;
    min-height: 600px;
    background: #1a1b23;
    border-radius: 20px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
    overflow: hidden;
    margin: 20px;
}

/* 适配手机端，变成竖向排列 */
@media (max-width: 768px) {
    .auth-container {
        flex-direction: column;
        border-radius: 0;
        margin: 0;
        min-height: 100vh;
    }
    
    .auth-brand {
        padding: 40px 20px !important;
        flex: none !important;
    }
}

/* --- 💥 修复复选框不可见的问题 --- */
.remember-me {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    user-select: none;
}

.checkbox {
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    background: transparent;
}

/* 默认状态下隐藏勾号 */
.checkbox i {
    opacity: 0;
    color: white;
    font-size: 12px;
    transform: scale(0.5);
    transition: all 0.2s;
}

/* 选中状态：变红并显示勾号 (参考你发的要求) */
.checkbox.checked {
    background-color: #FF3B5C;
    border-color: #FF3B5C;
}

.checkbox.checked i {
    opacity: 1;
    transform: scale(1);
}

.remember-me span {
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
}

.remember-me a {
    color: #FF3B5C;
    text-decoration: none;
    font-weight: 500;
}
.remember-me a:hover {
    text-decoration: underline;
}

/* 修复按钮次级样式 */
.btn-secondary {
    background: transparent;
    border: 1px solid rgba(255,255,255,0.2);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 59
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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --primary: #FF385C;
    --secondary: #2D2F3B;
    --dark: #121212;
    --light-dark: #1E1E1E;
    --light: #F5F5F5;
    --gray: #888;
    --success: #00C853;
    --warning: #FFAB00;
    --vip-gold: #FFD700;
    --info: #2196F3;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', system-ui, sans-serif;
}

body {
    background-color: var(--dark);
    color: var(--light);
    line-height: 1.6;
}

/* 页面加载动画 */
.page-loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--dark);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
}

.page-loading.show {
    opacity: 1;
    visibility: visible;
}

.page-loading .loading-spinner {
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255,56,92,0.3);
    border-top-color: var(--primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 15px;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* ========== 页面头部 - 毛玻璃渐变效果 ========== */
.payment-header {
    background: linear-gradient(135deg, rgba(30, 30, 40, 0.85), rgba(20, 20, 30, 0.9));
    backdrop-filter: blur(20px);
    padding: 20px 0;
    margin-bottom: 20px;
    border-radius: 0 0 30px 30px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 40px;
}

.header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    padding: 0 16px;
}

.back-btn {
    background: transparent;
    border: none;
    color: var(--light);
    font-size: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s;
}

.back-btn:hover {
    background: rgba(255,255,255,0.1);
}

.payment-title {
    font-size: 20px;
    font-weight: 700;
    background: linear-gradient(135deg, #fff, rgba(255,255,255,0.8));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

/* 金币余额样式 - 无背景框 */
.coin-balance {
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    background: transparent;
    padding: 0;
}

.coin-balance i {
    color: #FFAB00;
    font-size: 18px;
}

.coin-balance span {
    color: var(--light);
    font-size: 16px;
}

.coin-balance:hover {
    opacity: 0.8;
}

.payment-subtitle {
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    text-align: center;
    padding: 0 16px;
}

/* 主内容区域 */
.payment-main {
    padding: 0 16px 80px 16px;
}

/* ========== 选项卡样式 ========== */
.payment-tabs {
    display: flex;
    gap: 12px;
    margin-bottom: 30px;
    padding-bottom: 0;
    justify-content: center;
    flex-wrap: wrap;
}

.payment-tab {
    background: rgba(255, 255, 255, 0.08);
    border: none;
    color: var(--gray);
    padding: 10px 24px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s;
    border-radius: 40px;
    backdrop-filter: blur(10px);
}

.payment-tab i {
    font-size: 16px;
}

.payment-tab:hover {
    background: rgba(255, 255, 255, 0.15);
    color: var(--light);
    transform: translateY(-2px);
}

.payment-tab.active {
    background: var(--primary);
    color: white;
    box-shadow: 0 4px 15px rgba(255, 56, 92, 0.3);
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* 章节标题 */
.section-title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--light);
}

.section-title i {
    color: var(--primary);
    font-size: 24px;
}

/* ========== 套餐网格 ========== */
.packages-section,
.vip-section {
    margin-bottom: 40px;
}

/* PC端默认3列 */
.packages-grid,
.vip-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    margin-bottom: 30px;
}

/* 平板端2列 */
@media (max-width: 992px) and (min-width: 769px) {
    .packages-grid,
    .vip-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    
    .methods-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* 手机端保持2列 */
@media (max-width: 768px) {
    .container {
        padding: 0 16px;
    }
    
    .payment-header {
        padding: 15px 0;
    }
    
    .header-content {
        padding: 0 12px;
    }
    
    .payment-title {
        font-size: 18px;
    }
    
    .coin-balance {
        font-size: 14px;
    }
    
    .coin-balance i {
        font-size: 14px;
    }
    
    .coin-balance span {
        font-size: 14px;
    }
    
    .payment-subtitle {
        font-size: 12px;
    }
    
    .payment-tabs {
        gap: 8px;
        margin-bottom: 20px;
    }
    
    .payment-tab {
        padding: 6px 16px;
        font-size: 12px;
        gap: 6px;
    }
    
    .section-title {
        font-size: 18px;
    }
    
    .section-title i {
        font-size: 18px;
    }
    
    /* 手机端改为2列 */
    .packages-grid,
    .vip-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }
    
    .methods-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }
    
    .form-row {
        grid-template-columns: 1fr;
        gap: 12px;
    }
    
    .promo-input-group {
        flex-direction: column;
        gap: 10px;
    }
    
    .apply-promo-btn {
        width: 100%;
    }
    
    .benefits-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }
    
    /* 手机端卡片内边距调整 */
    .package-card,
    .vip-card {
        padding: 16px 12px;
    }
    
    .package-icon {
        width: 48px;
        height: 48px;
        font-size: 24px;
        margin-bottom: 10px;
    }
    
    .package-amount {
        font-size: 18px;
    }
    
    .current-price {
        font-size: 18px;
    }
    
    .buy-btn,
    .buy-vip-btn {
        font-size: 12px;
        padding: 8px;
    }
}

/* 极小屏保持2列，但进一步缩小 */
@media (max-width: 480px) {
    .packages-grid,
    .vip-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }
    
    .package-card,
    .vip-card {
        padding: 12px 8px;
    }
    
    .package-amount {
        font-size: 16px;
    }
    
    .current-price {
        font-size: 16px;
    }
    
    .benefits-grid {
        grid-template-columns: 1fr;
    }
}

/* 卡片样式 */
.package-card,
.vip-card {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 24px 20px;
    text-align: center;
    transition: all 0.3s;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
}

.package-card:hover,
.vip-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    background: rgba(255, 56, 92, 0.1);
    box-shadow: 0 12px 30px rgba(255, 56, 92, 0.2);
}

.package-card.popular,
.vip-card.popular {
    border-color: #FFD700;
    background: rgba(255, 215, 0, 0.1);
}

.package-card.best-value {
    border-color: #52c41a;
    background: rgba(82, 196, 26, 0.1);
}

.popular-badge,
.best-value-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    padding: 4px 12px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 11px;
    z-index: 2;
    white-space: nowrap;
}

.popular-badge {
    background: linear-gradient(135deg, #FFD700, #FFA500);
    color: #000;
}

.best-value-badge {
    background: linear-gradient(135deg, #52c41a, #389e0d);
    color: white;
}

.package-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgba(255, 56, 92, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    font-size: 28px;
    color: var(--primary);
}

.package-amount {
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 6px;
    color: #FFAB00;
}

.package-bonus {
    color: var(--success);
    font-weight: 500;
    font-size: 12px;
    margin-bottom: 10px;
}

.package-price {
    margin-bottom: 12px;
}

.original-price {
    color: var(--gray);
    text-decoration: line-through;
    font-size: 13px;
    margin-right: 8px;
}

.current-price {
    font-size: 22px;
    font-weight: 700;
    color: var(--primary);
}

.package-discount {
    background: var(--success);
    color: white;
    padding: 3px 10px;
    border-radius: 15px;
    font-size: 11px;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 15px;
}

.buy-btn {
    width: 100%;
    padding: 10px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 30px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
}

.buy-btn:hover {
    background: #E0314F;
    transform: translateY(-2px);
}

/* VIP卡片 */
.vip-card {
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 165, 0, 0.1));
}

.vip-card.popular {
    border: 2px solid var(--primary);
    background: linear-gradient(135deg, rgba(255, 56, 92, 0.15), rgba(255, 56, 92, 0.05));
}

.vip-icon {
    font-size: 48px;
    color: #FFD700;
    margin-bottom: 12px;
}

.vip-name {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 6px;
    color: var(--light);
}

.vip-duration {
    color: var(--gray);
    font-size: 12px;
    margin-bottom: 12px;
}

.vip-price {
    margin-bottom: 12px;
}

.vip-discount {
    background: var(--success);
    color: white;
    padding: 3px 10px;
    border-radius: 15px;
    font-size: 11px;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 15px;
}

.vip-features {
    list-style: none;
    padding: 0;
    margin: 0 0 15px 0;
    text-align: left;
}

.vip-features li {
    padding: 5px 0;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
}

.vip-features i {
    color: var(--success);
    font-size: 12px;
    width: 16px;
}

.buy-vip-btn {
    width: 100%;
    padding: 10px;
    background: #FFD700;
    color: #000;
    border: none;
    border-radius: 30px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
}

.buy-vip-btn:hover {
    background: #FFA500;
    transform: translateY(-2px);
}

/* VIP特权 */
.vip-benefits {
    margin-top: 40px;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 260px));
    gap: 20px;
    justify-content: center;
}

.benefit-item {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 20px;
    text-align: center;
    transition: all 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.benefit-item:hover {
    transform: translateY(-3px);
    border-color: var(--primary);
    background: rgba(255, 56, 92, 0.1);
}

.benefit-item i {
    font-size: 32px;
    color: var(--primary);
    margin-bottom: 12px;
}

.benefit-item h4 {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--light);
}

.benefit-item p {
    color: var(--gray);
    font-size: 12px;
    line-height: 1.5;
}

/* 交易记录 */
.history-section {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 24px;
    margin-bottom: 30px;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.transaction-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.history-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.3s;
}

.history-item:hover {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
}

.history-info {
    display: flex;
    align-items: center;
    gap: 12px;
}

.history-icon {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.history-icon.success { background: rgba(0, 200, 83, 0.15); color: var(--success); }
.history-icon.pending { background: rgba(255, 171, 0, 0.15); color: var(--warning); }
.history-icon.failed { background: rgba(245, 34, 45, 0.15); color: var(--error); }

.history-details h4 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
    color: var(--light);
}

.history-details p {
    font-size: 11px;
    color: var(--gray);
}

.history-amount {
    font-weight: 700;
    font-size: 14px;
}

.history-amount.success { color: var(--success); }

/* 空状态 */
.empty-state {
    text-align: center;
    padding: 40px 20px;
    color: var(--gray);
}

.empty-state i {
    font-size: 48px;
    margin-bottom: 15px;
    opacity: 0.5;
}

.empty-state h4 {
    font-size: 16px;
    margin-bottom: 8px;
    color: var(--light);
}

.empty-state p {
    font-size: 13px;
    margin-bottom: 15px;
}

/* 支付方式 */
.payment-methods-section {
    margin-bottom: 30px;
}

.methods-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.method-card {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 16px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.method-card:hover {
    transform: translateY(-3px);
    border-color: var(--primary);
    background: rgba(255, 56, 92, 0.1);
}

.method-card.active {
    border-color: var(--primary);
    background: rgba(255, 56, 92, 0.15);
    box-shadow: 0 4px 15px rgba(255, 56, 92, 0.2);
}

.method-icon {
    font-size: 36px;
    margin-bottom: 10px;
}

.method-card[data-method="card"] .method-icon { color: var(--primary); }
.method-card[data-method="paypal"] .method-icon { color: #003087; }
.method-card[data-method="googlepay"] .method-icon { color: #4285F4; }
.method-card[data-method="applepay"] .method-icon { color: #fff; }

.method-name {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 4px;
    color: var(--light);
}

.method-desc {
    color: var(--gray);
    font-size: 11px;
}

/* 支付表单 */
.payment-form-section {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 24px;
    margin-bottom: 30px;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.form-group {
    margin-bottom: 18px;
}

.form-label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.9);
}

.form-control {
    width: 100%;
    padding: 12px 15px;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    color: var(--light);
    font-size: 14px;
    transition: all 0.3s;
}

.form-control:focus {
    outline: none;
    border-color: var(--primary);
    background: rgba(255, 56, 92, 0.05);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
}

.security-badge {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--success);
    margin-bottom: 20px;
    padding: 12px;
    background: rgba(0, 200, 83, 0.08);
    border-radius: 12px;
    font-size: 12px;
}

.security-badge i {
    font-size: 16px;
}

.pay-now-btn {
    width: 100%;
    padding: 14px;
    background: var(--success);
    color: white;
    border: none;
    border-radius: 40px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.pay-now-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 200, 83, 0.3);
}

.pay-now-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* 优惠码 */
.promo-section {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 30px;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.promo-input-group {
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
}

.promo-input {
    flex: 1;
    padding: 12px 15px;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    color: var(--light);
    font-size: 14px;
    text-transform: uppercase;
}

.promo-input:focus {
    outline: none;
    border-color: var(--primary);
}

.apply-promo-btn {
    padding: 12px 24px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 30px;
    font-weight: 600;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.3s;
    white-space: nowrap;
}

.apply-promo-btn:hover {
    background: #E0314F;
    transform: translateY(-2px);
}

.promo-tips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.promo-tip {
    padding: 4px 10px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    font-size: 10px;
    color: var(--gray);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ 898
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(403), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* src/styles/pages/profile.css */

/* Profile Header */
.profile-header {
    background: linear-gradient(135deg, var(--light-dark), var(--secondary));
    padding: 30px 0;
    position: relative;
    overflow: hidden;
}

.profile-header::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) repeat;
}

/* 强制保持 PC 端的左右两端对齐布局 */
.profile-container {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.profile-main-info {
    display: flex;
    align-items: center;
    gap: 25px;
}

.profile-avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(45deg, var(--primary), #FF6B8B);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    font-weight: 700;
    border: 5px solid rgba(255, 255, 255, 0.2);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    flex-shrink: 0; /* 防止头像被挤压 */
}

.profile-avatar:hover::after {
    content: "Change";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
}

.profile-details {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.profile-name {
    font-size: 28px;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 15px;
}

.profile-email {
    color: var(--gray);
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.profile-email i {
    color: var(--info);
}

.profile-stats {
    display: flex;
    gap: 30px;
    margin-top: 10px;
}

.stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.stat-value {
    font-size: 24px;
    font-weight: 800;
    color: var(--primary);
}

.stat-label {
    font-size: 14px;
    color: var(--gray);
}

.profile-actions {
    display: flex;
    gap: 15px;
    margin-top: 20px;
}

.btn {
    padding: 12px 25px;
    border-radius: 25px;
    border: none;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    white-space: nowrap; /* 确保按钮文字不换行 */
}

.btn-primary {
    background: var(--primary);
    color: white;
}

.btn-secondary {
    background: transparent;
    color: var(--light);
    border: 1px solid var(--gray);
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 56, 92, 0.3);
}

/* VIP Status */
.vip-status-container {
    background: linear-gradient(135deg, #FFD700, #FFA500);
    border-radius: 20px;
    padding: 25px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000;
}

.vip-info {
    display: flex;
    align-items: center;
    gap: 20px;
}

.vip-icon {
    font-size: 48px;
}

.vip-details h3 {
    font-size: 22px;
    font-weight: 800;
    margin-bottom: 5px;
}

.vip-details p {
    opacity: 0.8;
    font-size: 15px;
}

/* Main Content - 强制保持双栏布局 */
.profile-main {
    padding: 30px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

.full-width {
    grid-column: 1 / -1;
}

/* Profile Sections */
.profile-section {
    background: var(--light-dark);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}

.section-header {
    padding: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.section-title {
    font-size: 20px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 10px;
}

.section-action {
    color: var(--primary);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
}

.section-content {
    padding: 20px;
}

/* Watch History */
.history-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.history-item {
    display: flex;
    gap: 15px;
    padding: 15px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.05);
    cursor: pointer;
    transition: all 0.3s;
    min-height: 100px;
    height: auto;
}

.history-item:hover {
    background: rgba(255, 56, 92, 0.1);
    transform: translateX(5px);
}

.history-thumb {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    background: linear-gradient(45deg, #2D2F3B, #121212);
    flex-shrink: 0;
    overflow: hidden;
}

.history-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.history-info {
    flex: 1;
    min-width: 0; 
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.history-title {
    font-weight: 700;
    font-size: 15px;
    margin-bottom: 6px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.4;
}

.history-meta {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: var(--gray);
    margin-bottom: 8px;
}

.history-progress {
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    overflow: hidden;
}

.history-progress-bar {
    height: 100%;
    background: #FF385C;
    border-radius: 3px;
    transition: width 0.3s ease;
}

/* Favorites */
.favorites-grid {
    display: grid;
    /* 保持桌面端的列宽 */
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
}

.favorite-item {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s;
}

.favorite-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.favorite-thumb {
    height: 120px;
    background: linear-gradient(45deg, #2D2F3B, #121212);
    position: relative;
    overflow: hidden;
}

.favorite-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.favorite-info {
    padding: 12px;
}

.favorite-title {
    font-weight: 700;
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 5px;
}

.favorite-meta {
    font-size: 12px;
    color: var(--gray);
}

/* Coin System */
.coin-balance-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 30px 20px;
}

.coin-balance {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.coin-amount {
    font-size: 48px;
    font-weight: 800;
    color: var(--warning);
    display: flex;
    align-items: center;
    gap: 15px;
}

.coin-value {
    font-size: 20px;
    color: var(--gray);
}

.coin-actions {
    display: flex;
    gap: 15px;
    width: 100%;
    justify-content: center;
}

.coin-btn {
    flex: 1;
    max-width: 200px;
    padding: 15px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.05);
    border: none;
    color: var(--light);
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.coin-btn:hover {
    background: rgba(255, 56, 92, 0.2);
    transform: translateY(-3px);
}

.coin-btn i {
    font-size: 24px;
}

.coin-btn:nth-child(1) i {
    color: var(--success);
}

.coin-btn:nth-child(2) i {
    color: var(--info);
}

.coin-btn:nth-child(3) i {
    color: var(--warning);
}

/* Transactions */
.transactions-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.transaction-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.05);
}

.transaction-info {
    display: flex;
    align-items: center;
    gap: 15px;
}

.transaction-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}

.transaction-earned .transaction-icon {
    background: rgba(0, 200, 83, 0.2);
    color: var(--success);
}

.transaction-spent .transaction-icon {
    background: rgba(255, 56, 92, 0.2);
    color: var(--primary);
}

.transaction-details h4 {
    font-weight: 700;
    margin-bottom: 5px;
}

.transaction-details p {
    font-size: 13px;
    color: var(--gray);
}

.transaction-amount {
    font-weight: 800;
    font-size: 18px;
}

.transaction-earned .transaction-amount {
    color: var(--success);
}

.transaction-spent .transaction-amount {
    color: var(--primary);
}

/* Settings */
.settings-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.setting-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 15px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.05);
    cursor: pointer;
    transition: all 0.3s;
}

.setting-item:hover {
    background: rgba(255, 56, 92, 0.1);
}

.setting-info {
    display: flex;
    align-items: center;
    gap: 15px;
}

.setting-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: rgba(255, 56, 92, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
    font-size: 18px;
}

.setting-details h4 {
    font-weight: 700;
    margin-bottom: 5px;
}

.setting-details p {
    font-size: 13px;
    color: var(--gray);
}

.setting-action {
    color: var(--gray);
}

.switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
}

.switch input {
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
    background-color: var(--secondary);
    transition: .4s;
    border-radius: 34px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
}

input:checked + .slider {
    background-color: var(--primary);
}

input:checked + .slider:before {
    transform: translateX(26px);
}

/* Language Selection */
.language-section {
    padding: 20px;
}

.language-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.language-option {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.05);
    cursor: pointer;
    transition: all 0.3s;
}

.language-option:hover {
    background: rgba(255, 56, 92, 0.1);
}

.language-option.active {
    background: rgba(255, 56, 92, 0.2);
    border-left: 4px solid var(--primary);
}

.language-flag {
    width: 40px;
    height: 30px;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}

.language-name {
    flex: 1;
    font-weight: 600;
}

/* Empty States */
.empty-state {
    text-align: center;
    padding: 40px 20px;
    color: var(--gray);
}

.empty-state i {
    font-size: 50px;
    margin-bottom: 20px;
    opacity: 0.5;
}

.empty-state h4 {
    font-size: 18px;
    margin-bottom: 10px;
    color: var(--light);
}

/* Animation */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.profile-section {
    animation: fadeIn 0.5s ease-out forwards;
}

.profile-section:nth-child(2) { animation-delay: 0.1s; }
.profile-section:nth-child(3) { animation-delay: 0.2s; }
.profile-section:nth-child(4) { animation-delay: 0.3s; }
.profile-section:nth-child(5) { animation-delay: 0.4s; }

/* Modal Styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
}

.modal-overlay.active {
    opacity: 1;
    visibility: visible;
}

.modal {
    background: var(--light-dark);
    border-radius: 25px;
    padding: 30px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    transform: translateY(30px);
    transition: transform 0.5s;
}

.modal-overlay.active .modal {
    transform: translateY(0);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
}

.modal-title {
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 10px;
}

.close-modal {
    background: transparent;
    border: none;
    color: var(--gray);
    font-size: 24px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.close-modal:hover {
    background: rgba(255, 255, 255, 0.1);
}
/* ========== 强制横排与双排移动端定制 ========== */
@media (max-width: 768px) {
    /* 1. 头部信息：强制横排，缩小头像与文字，允许截断 */
    .profile-container {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        width: 100%;
        padding: 0 15px;
    }

    .profile-main-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        flex: 1;
        min-width: 0;
    }
    
    .profile-avatar {
        width: 60px;
        height: 60px;
        font-size: 24px;
        border-width: 3px;
        flex-shrink: 0;
    }
    
    /* 关键：min-width: 0 允许 flex 子项内部文本产生省略号 */
    .profile-details {
        flex: 1;
        min-width: 0; 
        gap: 4px;
    }
    
    .profile-name {
        font-size: 18px;
        gap: 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: flex;
        align-items: center;
    }
    
    .profile-name .vip-badge {
        font-size: 10px;
        padding: 2px 6px;
        margin-left: 5px;
        flex-shrink: 0;
    }
    
    .profile-email {
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .profile-stats {
        gap: 15px;
        margin-top: 5px;
    }
    
    .stat-value { font-size: 16px; }
    .stat-label { font-size: 10px; }
    
    .profile-actions {
        flex-direction: column;
        gap: 6px;
        margin-top: 0;
        flex-shrink: 0;
    }
    
    .btn {
        padding: 5px 10px;
        font-size: 11px;
        gap: 3px;
        border-radius: 20px;
        width: 100%;
        justify-content: center;
    }

    /* 2. VIP 状态：强制横排，微缩尺寸 */
    .vip-status-container {
        flex-direction: row;
        padding: 12px 10px;
        gap: 8px;
        text-align: left;
    }
    
    .vip-info { 
        display: flex; 
        align-items: center; 
        gap: 8px; 
        flex: 1; 
        min-width: 0; 
    }
    
    .vip-icon { font-size: 24px; flex-shrink: 0; }
    
    .vip-details {
        flex: 1;
        min-width: 0;
    }

    .vip-details h3 { font-size: 14px; margin-bottom: 2px; }
    .vip-details p { 
        font-size: 10px; 
        white-space: nowrap; 
        overflow: hidden; 
        text-overflow: ellipsis; 
    }

    /* 缩小 VIP 容器内的按钮 */
    .vip-status-container .btn {
        padding: 6px 12px;
        font-size: 11px;
        flex-shrink: 0;
        width: auto;
        justify-content: center;
    }

    /* 3. 主内容区：强制保持双栏布局 */
    .profile-main {
        grid-template-columns: 1fr 1fr; /* 强制分两列 */
        gap: 12px;
        padding: 15px 0;
    }

    .profile-section {
        margin-bottom: 0;
    }
    
    .section-header { padding: 10px; }
    .section-title { font-size: 12px; gap: 6px; }
    .section-title i { font-size: 11px; }
    .section-action { font-size: 10px; gap: 3px; }
    .section-content { padding: 10px; }

    /* 4. 历史记录 (处于半宽容器中)：单行截断，缩略图变小 */
    .history-item {
        padding: 8px;
        gap: 10px;
        min-height: 60px;
    }
    
    .history-thumb {
        width: 45px;
        height: 45px;
        border-radius: 6px;
    }
    
    .history-title {
        font-size: 12px;
        -webkit-line-clamp: 1; /* 强制只显示一行 */
        margin-bottom: 4px;
    }
    
    .history-meta { font-size: 10px; }

    /* 5. 收藏卡片：网格缩小 */
    .favorites-grid {
        grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
        gap: 8px;
    }
    
    .favorite-thumb { height: 75px; }
    .favorite-title { font-size: 11px; -webkit-line-clamp: 1; }
    .favorite-meta { font-size: 10px; }

    /* 6. Coin 系统：强制横排，均分不挤压 */
    .coin-balance-container { padding: 15px 10px; }
    .coin-amount { font-size: 32px; gap: 8px; }
    .coin-value { font-size: 14px; }
    
    .coin-actions {
        flex-direction: row;
        gap: 8px;
        flex-wrap: nowrap; /* 严禁换行 */
    }
    
    .coin-btn {
        flex: 1;
        padding: 10px 4px;
        font-size: 11px;
        gap: 5px;
    }
    
    .coin-btn i { font-size: 18px; }

    /* 7. 消费记录 (处于半宽容器中)：紧凑布局 */
    .transaction-item {
        padding: 10px 8px;
        gap: 8px;
    }
    
    .transaction-icon {
        width: 32px;
        height: 32px;
        font-size: 14px;
    }
    
    .transaction-info { gap: 8px; min-width: 0; }
    
    .transaction-details h4 {
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .transaction-details p { font-size: 10px; }
    .transaction-amount { font-size: 13px; flex-shrink: 0; }

    /* 8. 设置面板 (处于半宽容器中)：隐藏次要描述文本以节省空间 */
    .setting-item {
        padding: 10px 8px;
        gap: 8px;
    }
    
    .setting-info { gap: 8px; min-width: 0; flex: 1; }
    
    .setting-icon {
        width: 32px;
        height: 32px;
        font-size: 14px;
        flex-shrink: 0;
    }
    
    .setting-details {
        min-width: 0;
        flex: 1;
    }

    .setting-details h4 {
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .setting-action {
        flex-shrink: 0;
        max-width: 50%;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .setting-action span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 11px;
    }
    
    /* 手机端隐藏设置的详情描述，只保留标题和开关 */
    .setting-details p { display: none; } 
    
    /* 缩小开关按钮 */
    .switch { width: 36px; height: 18px; flex-shrink: 0; }
    .slider:before { height: 12px; width: 12px; left: 3px; bottom: 3px; }
    input:checked + .slider:before { transform: translateX(18px); }

    /* 9. 语言选择弹窗 */
    .language-options {
        max-height: 300px;
        overflow-y: auto;
        padding-right: 5px;
    }

    /* 优化滚动条样式 */
    .language-options::-webkit-scrollbar {
        width: 6px;
    }
    .language-options::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 3px;
    }
    .language-options::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.3);
    }
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

/***/ 417
(module) {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ },

/***/ 601
(module) {



module.exports = function (i) {
  return i[1];
};

/***/ },

/***/ 810
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(249);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ 799
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_discover_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_discover_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_discover_css__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_discover_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_discover_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_discover_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_discover_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ 535
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(732);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ 623
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(378);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ 886
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_payment_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_payment_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_payment_css__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_payment_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_payment_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_payment_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_payment_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ 475
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_profile_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(898);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_profile_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_profile_css__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_profile_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_profile_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_profile_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_profile_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ },

/***/ 399
(module) {

module.exports = "data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27white%27%3e%3cpath d=%27M7 10l5 5 5-5z%27/%3e%3c/svg%3e";

/***/ },

/***/ 403
(module) {

module.exports = "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"white\" opacity=\"0.03\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z\"/></svg>";

/***/ },

/***/ 889
(module) {

module.exports = "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"white\" opacity=\"0.05\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z\"/></svg>";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony export */   "default": () => (app)
/* harmony export */ });
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(810);
/* harmony import */ var _styles_pages_home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(535);
/* harmony import */ var _styles_pages_player_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(957);
/* harmony import */ var _styles_pages_profile_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(475);
/* harmony import */ var _styles_pages_payment_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(886);
/* harmony import */ var _styles_pages_login_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(623);
/* harmony import */ var _styles_pages_discover_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(799);
/* harmony import */ var _auth_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(527);
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(93);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(225);
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
console.log('🔥🔥🔥 NEW APP JS LOADED - 2024-03-01 v6 (Pure Core)');










var App = /*#__PURE__*/function () {
  function App() {
    var _this = this;
    _classCallCheck(this, App);
    this.initialized = false;

    // 🚀 尽早设置页面类（在 DOM 解析前执行）
    this.setBodyClassByPage();
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        return _this.init();
      });
    } else {
      this.init();
    }
  }
  return _createClass(App, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (!this.initialized) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              this.initialized = true;
              console.log('🚀 Core App initializing...');

              // 再次确保类已设置（应对可能的动态路由变化）
              this.setBodyClassByPage();

              // 1. 修复非播放页的滚动锁死
              this.fixBodyScroll();

              // 2. 执行安全拦截
              if (this.checkAuthAndPageState()) {
                _context.n = 2;
                break;
              }
              return _context.a(2);
            case 2:
              // 3. 初始化全局状态和事件
              this.initAuth();
              _context.n = 3;
              return this.initI18n();
            case 3:
              this.mountGlobals();
              console.log('✅ Core App initialized, auth status:', _auth_js__WEBPACK_IMPORTED_MODULE_7__["default"].isLoggedIn());
            case 4:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
    /**
     * 根据当前页面路径为 body 添加或移除类名
     * 用于控制播放页的底部内边距
     */
  }, {
    key: "setBodyClassByPage",
    value: function setBodyClassByPage() {
      var path = window.location.pathname;
      if (path.includes('player')) {
        document.body.classList.add('player-page');
        document.documentElement.classList.add('player-page'); // 新增
      } else {
        document.body.classList.remove('player-page');
        document.documentElement.classList.remove('player-page'); // 新增
      }
    }
  }, {
    key: "fixBodyScroll",
    value: function fixBodyScroll() {
      if (!window.location.pathname.includes('player.html')) {
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
      }
    }
  }, {
    key: "checkAuthAndPageState",
    value: function checkAuthAndPageState() {
      var path = window.location.pathname;
      var protectedPages = ['profile', 'payment', 'history'];
      var isProtectedPage = protectedPages.some(function (page) {
        return path.includes(page + '.html');
      });

      // 未登录拦截
      if (isProtectedPage && !_auth_js__WEBPACK_IMPORTED_MODULE_7__["default"].isLoggedIn()) {
        window.location.replace("/pages/login.html?redirect=".concat(encodeURIComponent(path)));
        return false;
      }

      // 已登录防重复登录
      if (path.includes('login.html') && _auth_js__WEBPACK_IMPORTED_MODULE_7__["default"].isLoggedIn()) {
        window.location.replace('/');
        return false;
      }

      // 更新页面标题
      var title = 'Global Shorts - 首页';
      if (path.includes('discover')) title = '发现 - Global Shorts';
      if (path.includes('player')) title = '沉浸播放器 - Global Shorts';
      if (path.includes('profile')) title = '个人中心 - Global Shorts';
      if (path.includes('payment')) title = '充值 - Global Shorts';
      if (path.includes('login')) title = '登录/注册 - Global Shorts';
      document.title = title;
      return true;
    }
  }, {
    key: "initAuth",
    value: function initAuth() {
      window.addEventListener('auth:logout', function () {
        localStorage.removeItem('token');
        sessionStorage.clear();
        window.location.replace('/');
      });
    }
  }, {
    key: "initI18n",
    value: function () {
      var _initI18n = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _this2 = this;
        var browserLang, savedLang, defaultLang, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              // 不要截断，直接用完整浏览器语言
              browserLang = navigator.language; // 如 'zh-CN', 'en-US'
              savedLang = localStorage.getItem('language');
              defaultLang = savedLang || browserLang;
              if (!(_i18n_js__WEBPACK_IMPORTED_MODULE_8__["default"] && typeof _i18n_js__WEBPACK_IMPORTED_MODULE_8__["default"].init === 'function')) {
                _context2.n = 4;
                break;
              }
              _context2.p = 1;
              _context2.n = 2;
              return _i18n_js__WEBPACK_IMPORTED_MODULE_8__["default"].init(defaultLang);
            case 2:
              window.addEventListener('language:changed', function () {
                return _this2.updatePageContent();
              });
              console.log('✅ i18n 初始化成功，语言:', defaultLang);
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t = _context2.v;
              console.warn('I18n error:', _t);
            case 4:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 3]]);
      }));
      function initI18n() {
        return _initI18n.apply(this, arguments);
      }
      return initI18n;
    }()
  }, {
    key: "updatePageContent",
    value: function updatePageContent() {
      if (!_i18n_js__WEBPACK_IMPORTED_MODULE_8__["default"] || typeof _i18n_js__WEBPACK_IMPORTED_MODULE_8__["default"].t !== 'function') return;
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        if (key) el.textContent = _i18n_js__WEBPACK_IMPORTED_MODULE_8__["default"].t(key);
      });
    }
  }, {
    key: "mountGlobals",
    value: function mountGlobals() {
      window.app = this;
      window.auth = _auth_js__WEBPACK_IMPORTED_MODULE_7__["default"];
      window.i18n = _i18n_js__WEBPACK_IMPORTED_MODULE_8__["default"];
      window.api = _api_js__WEBPACK_IMPORTED_MODULE_9__.api;
    }
  }]);
}();
if (!window.app) new App();
/* harmony default export */ const app = (window.app);
/******/ })()
;