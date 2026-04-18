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
/* harmony export */   "default": () => (/* binding */ PaymentPage)
/* harmony export */ });
/* harmony import */ var _styles_pages_payment_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(886);
/* harmony import */ var _core_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(225);
/* harmony import */ var _core_auth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(527);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
window.auth = _core_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"];




var PaymentPage = /*#__PURE__*/function () {
  function PaymentPage(params) {
    _classCallCheck(this, PaymentPage);
    if (params) {
      this.params = params;
    } else {
      var urlParams = new URLSearchParams(window.location.search);
      this.params = {
        tab: urlParams.get('tab') || 'coins'
      };
    }
    this.activeTab = this.params.tab || 'coins';
    this.selectedPackage = null;
    this.selectedPaymentMethod = null;
    this.promoCode = null;
    this.discount = 0;

    // Stripe 配置
    this.stripeEnabled = false;
    this.stripePublishableKey = '';

    // 可用的支付方式列表（从后台加载）
    this.availableGateways = [];

    // 支付方式配置映射（从后台获取）
    this.gatewayConfigs = {};

    // 触摸滑动状态
    this.touchStartX = 0;
    this.touchEndX = 0;

    // 绑定方法
    this.updatePaymentFormFields = this.updatePaymentFormFields.bind(this);
    this.init();
  }
  return _createClass(PaymentPage, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              console.log('Payment page initialized', this.params);
              this.showLoading();
              this.initTabs();
              this.initSwipeBack();
              _context.n = 1;
              return Promise.all([this.loadCoinPackages(), this.loadVipPlans(), this.loadPaymentGateways(), _core_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"].isLoggedIn() ? this.loadTransactionHistory() : Promise.resolve()]);
            case 1:
              this.bindEvents();
              this.hideLoading();
              if (this.activeTab !== 'coins') {
                this.switchTab(this.activeTab);
              }
              this.updateCoinBalance();
              setTimeout(function () {
                var _window$i18n;
                return (_window$i18n = window.i18n) === null || _window$i18n === void 0 ? void 0 : _window$i18n.updateDOM();
              }, 100);
            case 2:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "initSwipeBack",
    value: function initSwipeBack() {
      var _this = this;
      var mainContent = document.querySelector('.payment-main');
      if (!mainContent) return;
      mainContent.addEventListener('touchstart', function (e) {
        _this.touchStartX = e.touches[0].clientX;
      }, {
        passive: true
      });
      mainContent.addEventListener('touchend', function (e) {
        _this.touchEndX = e.changedTouches[0].clientX;
        var swipeDistance = _this.touchEndX - _this.touchStartX;
        if (swipeDistance > 80 && _this.touchStartX < 50) {
          _this.goBack();
        }
      }, {
        passive: true
      });
    }
  }, {
    key: "goBack",
    value: function goBack() {
      if (document.referrer && document.referrer !== '') {
        window.history.back();
      } else {
        window.location.href = '/';
      }
    }
  }, {
    key: "initTabs",
    value: function initTabs() {
      var _this2 = this;
      document.querySelectorAll('.payment-tab').forEach(function (tab) {
        tab.addEventListener('click', function () {
          return _this2.switchTab(tab.dataset.tab);
        });
      });
    }
  }, {
    key: "switchTab",
    value: function switchTab(tabName) {
      this.activeTab = tabName;
      document.querySelectorAll('.payment-tab').forEach(function (tab) {
        tab.classList.toggle('active', tab.dataset.tab === tabName);
      });
      document.querySelectorAll('.tab-content').forEach(function (content) {
        content.classList.toggle('active', content.id === "".concat(tabName, "Tab"));
      });
      var url = new URL(window.location);
      url.searchParams.set('tab', tabName);
      window.history.replaceState({}, '', url);
      setTimeout(function () {
        var _window$i18n2;
        return (_window$i18n2 = window.i18n) === null || _window$i18n2 === void 0 ? void 0 : _window$i18n2.updateDOM();
      }, 50);
    }
  }, {
    key: "updateCoinBalance",
    value: function updateCoinBalance() {
      var user = _core_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentUser();
      var balanceSpan = document.getElementById('userCoinBalance');
      if (balanceSpan) {
        var _user$coins;
        balanceSpan.textContent = (user === null || user === void 0 || (_user$coins = user.coins) === null || _user$coins === void 0 ? void 0 : _user$coins.toLocaleString()) || '0';
      }
    }
  }, {
    key: "loadPaymentGateways",
    value: function () {
      var _loadPaymentGateways = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _this3 = this;
        var token, res, data, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              token = _core_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"].getToken();
              if (token) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              _context2.n = 2;
              return fetch('/api/payment/gateways', {
                headers: {
                  'Authorization': "Bearer ".concat(token)
                }
              });
            case 2:
              res = _context2.v;
              _context2.n = 3;
              return res.json();
            case 3:
              data = _context2.v;
              if (data.success && Array.isArray(data.data)) {
                this.availableGateways = data.data;
                this.availableGateways.forEach(function (gateway) {
                  _this3.gatewayConfigs[gateway.type] = gateway;
                  if (gateway.type === 'stripe' && gateway.is_active) {
                    _this3.stripeEnabled = true;
                    _this3.stripePublishableKey = gateway.merchant_id || '';
                  }
                });
                this.renderPaymentMethods();
              }
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t = _context2.v;
              console.error('加载支付方式失败:', _t);
              this.renderPaymentMethods();
            case 5:
              return _context2.a(2);
          }
        }, _callee2, this, [[0, 4]]);
      }));
      function loadPaymentGateways() {
        return _loadPaymentGateways.apply(this, arguments);
      }
      return loadPaymentGateways;
    }()
  }, {
    key: "renderPaymentMethods",
    value: function renderPaymentMethods() {
      var _this4 = this;
      var container = document.querySelector('.methods-grid');
      if (!container) return;
      var styleMap = {
        'stripe': {
          icon: 'fa-credit-card',
          bgClass: 'stripe',
          name: 'Stripe',
          desc: '信用卡/借记卡支付'
        },
        'paypal': {
          icon: 'fa-paypal',
          bgClass: 'paypal',
          name: 'PayPal',
          desc: '快速安全支付'
        },
        'alipay': {
          icon: 'fa-alipay',
          bgClass: 'alipay',
          name: '支付宝',
          desc: '支付宝扫码支付'
        },
        'wechat': {
          icon: 'fa-weixin',
          bgClass: 'wechat',
          name: '微信支付',
          desc: '微信支付'
        },
        'card': {
          icon: 'fa-credit-card',
          bgClass: 'card',
          name: '信用卡',
          desc: 'Visa, MasterCard'
        },
        'googlepay': {
          icon: 'fa-google-pay',
          bgClass: 'googlepay',
          name: 'Google Pay',
          desc: '一键支付'
        },
        'applepay': {
          icon: 'fa-apple-pay',
          bgClass: 'applepay',
          name: 'Apple Pay',
          desc: 'iPhone用户专属'
        },
        'crypto': {
          icon: 'fa-bitcoin',
          bgClass: 'crypto',
          name: '加密货币',
          desc: 'BTC, ETH, USDT'
        },
        'bank': {
          icon: 'fa-university',
          bgClass: 'bank',
          name: '银行转账',
          desc: '网银转账'
        }
      };
      var gateways = this.availableGateways;
      if (!gateways || gateways.length === 0) {
        console.warn('使用默认支付方式');
        gateways = [{
          type: 'card',
          name: '信用卡/借记卡',
          is_active: true,
          is_default: true,
          sort_order: 1
        }, {
          type: 'paypal',
          name: 'PayPal',
          is_active: true,
          is_default: false,
          sort_order: 2
        }];
      }
      var activeGateways = gateways.filter(function (g) {
        return g.is_active !== false;
      }).sort(function (a, b) {
        return (a.sort_order || 99) - (b.sort_order || 99);
      });
      if (activeGateways.length === 0) {
        container.innerHTML = '<div class="empty-state">暂无可用支付方式</div>';
        return;
      }
      var defaultGateway = activeGateways.find(function (g) {
        return g.is_default;
      }) || activeGateways[0];
      this.selectedPaymentMethod = defaultGateway.type;
      container.innerHTML = activeGateways.map(function (gateway) {
        var style = styleMap[gateway.type] || {
          icon: 'fa-credit-card',
          bgClass: 'default',
          name: gateway.name || gateway.type,
          desc: gateway.description || ''
        };
        var isActive = gateway.type === _this4.selectedPaymentMethod;
        var displayName = gateway.display_name || gateway.name || style.name;
        var displayDesc = gateway.description || style.desc;
        return "\n                <div class=\"method-card ".concat(style.bgClass, " ").concat(isActive ? 'active' : '', "\" data-method=\"").concat(gateway.type, "\">\n                    <div class=\"method-icon\">\n                        <i class=\"fas ").concat(style.icon, "\"></i>\n                    </div>\n                    <div class=\"method-name\">").concat(displayName, "</div>\n                    <div class=\"method-desc\">").concat(displayDesc, "</div>\n                </div>\n            ");
      }).join('');
      this.bindPaymentMethodEvents();
      setTimeout(function () {
        return _this4.updatePaymentFormFields();
      }, 50);
      if (window.i18n) window.i18n.updateDOM();
    }
  }, {
    key: "bindPaymentMethodEvents",
    value: function bindPaymentMethodEvents() {
      var _this5 = this;
      document.querySelectorAll('.method-card').forEach(function (card) {
        card.addEventListener('click', function () {
          document.querySelectorAll('.method-card').forEach(function (c) {
            return c.classList.remove('active');
          });
          card.classList.add('active');
          _this5.selectedPaymentMethod = card.dataset.method;
          _this5.updatePaymentFormFields();
        });
      });
    }
  }, {
    key: "updatePaymentFormFields",
    value: function updatePaymentFormFields() {
      var _this6 = this;
      var method = this.selectedPaymentMethod;
      var cardFields = ['cardNumber', 'expiry', 'cvv', 'cardName'];
      var emailField = 'email';
      var paymentFormSection = document.getElementById('paymentFormSection');
      var payNowBtn = document.getElementById('payNowBtn');
      console.log('updatePaymentFormFields called, method:', method);
      var gatewayConfig = this.gatewayConfigs[method] || {};
      var needsForm = this.needsPaymentForm(method);
      var needsQrCode = this.needsQrCode(method);
      if (!needsForm && !needsQrCode) {
        if (paymentFormSection) paymentFormSection.style.display = 'none';
        if (payNowBtn) payNowBtn.disabled = !this.selectedPackage;
        return;
      }
      if (paymentFormSection) paymentFormSection.style.display = 'block';
      [].concat(cardFields, [emailField]).forEach(function (id) {
        _this6.hideFormGroup(id);
        _this6.setRequired(id, false);
      });
      if (method === 'card') {
        cardFields.forEach(function (id) {
          _this6.showFormGroup(id);
          _this6.setRequired(id, true);
        });
        this.showFormGroup(emailField);
        this.setRequired(emailField, true);
        var emailInput = document.getElementById(emailField);
        if (emailInput) emailInput.readOnly = false;
      } else if (method === 'stripe') {
        if (gatewayConfig.redirect_type === 'checkout') {
          if (paymentFormSection) paymentFormSection.style.display = 'none';
        } else {
          this.showFormGroup(emailField);
          this.setRequired(emailField, true);
          var user = _core_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentUser();
          var _emailInput = document.getElementById(emailField);
          if (user !== null && user !== void 0 && user.email && _emailInput) {
            _emailInput.value = user.email;
            _emailInput.readOnly = true;
          }
        }
      } else if (method === 'alipay' || method === 'wechat') {
        this.showQrCodeContainer(method);
      }
      this.updatePayButtonState();
    }
  }, {
    key: "needsPaymentForm",
    value: function needsPaymentForm(method) {
      return ['card'].includes(method);
    }
  }, {
    key: "needsQrCode",
    value: function needsQrCode(method) {
      return ['alipay', 'wechat'].includes(method);
    }
  }, {
    key: "isRedirectPayment",
    value: function isRedirectPayment(method) {
      var _this$gatewayConfigs$;
      return ['paypal', 'googlepay', 'applepay'].includes(method) || method === 'stripe' && ((_this$gatewayConfigs$ = this.gatewayConfigs[method]) === null || _this$gatewayConfigs$ === void 0 ? void 0 : _this$gatewayConfigs$.redirect_type) === 'checkout';
    }
  }, {
    key: "showQrCodeContainer",
    value: function showQrCodeContainer(method) {
      var qrContainer = document.getElementById('qrcodeContainer');
      if (!qrContainer) {
        var formSection = document.getElementById('paymentFormSection');
        qrContainer = document.createElement('div');
        qrContainer.id = 'qrcodeContainer';
        qrContainer.className = 'qrcode-container';
        qrContainer.innerHTML = "\n                <div class=\"qrcode-placeholder\">\n                    <i class=\"fas fa-qrcode\"></i>\n                    <p>\u9009\u62E9\u5957\u9910\u540E\u5C06\u751F\u6210".concat(method === 'alipay' ? '支付宝' : '微信', "\u652F\u4ED8\u4E8C\u7EF4\u7801</p>\n                </div>\n            ");
        formSection.appendChild(qrContainer);
      }
      qrContainer.style.display = 'block';
    }
  }, {
    key: "hideFormGroup",
    value: function hideFormGroup(id) {
      var input = document.getElementById(id);
      if (!input) return;
      var formGroup = input.closest('.form-group');
      if (formGroup) formGroup.style.display = 'none';
    }
  }, {
    key: "showFormGroup",
    value: function showFormGroup(id) {
      var input = document.getElementById(id);
      if (!input) return;
      var formGroup = input.closest('.form-group');
      if (formGroup) formGroup.style.display = 'block';
    }
  }, {
    key: "setRequired",
    value: function setRequired(id, required) {
      var input = document.getElementById(id);
      if (!input) return;
      if (required) {
        input.setAttribute('required', '');
      } else {
        input.removeAttribute('required');
      }
    }
  }, {
    key: "updatePayButtonState",
    value: function updatePayButtonState() {
      var payBtn = document.getElementById('payNowBtn');
      if (!payBtn) return;
      var method = this.selectedPaymentMethod;
      if (this.isRedirectPayment(method)) {
        payBtn.disabled = !this.selectedPackage;
        payBtn.innerHTML = "<i class=\"fas fa-external-link-alt\"></i> \u524D\u5F80\u652F\u4ED8";
      } else if (this.needsQrCode(method)) {
        payBtn.disabled = !this.selectedPackage;
        payBtn.innerHTML = "<i class=\"fas fa-qrcode\"></i> \u751F\u6210\u4E8C\u7EF4\u7801";
      } else {
        payBtn.disabled = !this.selectedPackage;
        payBtn.innerHTML = "<i class=\"fas fa-lock\"></i> \u7ACB\u5373\u652F\u4ED8";
      }
    }
  }, {
    key: "loadCoinPackages",
    value: function () {
      var _loadCoinPackages = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var res, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__["default"].user.getCoinPackages();
            case 1:
              res = _context3.v;
              if (res.success && Array.isArray(res.data)) {
                this.coinPackages = res.data.map(function (pkg) {
                  return {
                    id: pkg.id,
                    name: pkg.name,
                    coins: pkg.base_coins || pkg.coins || 0,
                    bonus: pkg.bonus_coins || pkg.bonus || 0,
                    price: pkg.price_usd || pkg.price || 0,
                    originalPrice: pkg.original_price || pkg.price_usd || pkg.price || 0,
                    popular: pkg.is_popular === 1 || pkg.popular || false,
                    is_best_value: pkg.is_best_value || false
                  };
                });
              } else {
                this.coinPackages = [];
              }
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t2 = _context3.v;
              console.error('加载金币套餐失败:', _t2);
              this.coinPackages = [];
            case 3:
              this.renderCoinPackages();
            case 4:
              return _context3.a(2);
          }
        }, _callee3, this, [[0, 2]]);
      }));
      function loadCoinPackages() {
        return _loadCoinPackages.apply(this, arguments);
      }
      return loadCoinPackages;
    }()
  }, {
    key: "renderCoinPackages",
    value: function renderCoinPackages() {
      var container = document.getElementById('coinPackages');
      if (!container) return;
      if (!this.coinPackages || this.coinPackages.length === 0) {
        container.innerHTML = '<div class="empty-state">暂无金币套餐</div>';
        if (window.i18n) window.i18n.updateDOM();
        return;
      }
      container.innerHTML = this.coinPackages.map(function (pkg) {
        var coins = pkg.coins || 0;
        var bonus = pkg.bonus || 0;
        var price = typeof pkg.price === 'number' ? pkg.price : 0;
        var originalPrice = typeof pkg.originalPrice === 'number' ? pkg.originalPrice : price;
        var popular = pkg.popular || false;
        var isBestValue = pkg.is_best_value || false;
        return "\n                <div class=\"package-card ".concat(popular ? 'popular' : '', " ").concat(isBestValue ? 'best-value' : '', "\">\n                    ").concat(popular ? '<div class="popular-badge" data-i18n="payment.mostPopular">最受欢迎</div>' : '', "\n                    ").concat(isBestValue ? '<div class="best-value-badge" data-i18n="payment.bestValue">最超值</div>' : '', "\n                    <div class=\"package-icon\"><i class=\"fas fa-coins\"></i></div>\n                    <div class=\"package-amount\">").concat(coins.toLocaleString(), " <span data-i18n=\"payment.coins\">\u91D1\u5E01</span></div>\n                    ").concat(bonus ? "<div class=\"package-bonus\" data-i18n=\"payment.bonus\" data-i18n-options='".concat(JSON.stringify({
          bonus: bonus
        }), "'>+ ").concat(bonus, " \u989D\u5916\u8D60\u9001</div>") : '', "\n                    <div class=\"package-price\">\n                        ").concat(originalPrice > price ? "<span class=\"original-price\">$".concat(originalPrice.toFixed(2), "</span>") : '', "\n                        <span class=\"current-price\">$").concat(price.toFixed(2), "</span>\n                    </div>\n                    <button class=\"buy-btn\" data-package='").concat(JSON.stringify(pkg), "' data-i18n=\"payment.buyNow\">\u7ACB\u5373\u8D2D\u4E70</button>\n                </div>\n            ");
      }).join('');
      if (window.i18n) window.i18n.updateDOM();
    }
  }, {
    key: "loadVipPlans",
    value: function () {
      var _loadVipPlans = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var res, _t3;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__["default"].user.getVipPlans();
            case 1:
              res = _context4.v;
              if (res.success && Array.isArray(res.data)) {
                this.vipPlans = res.data.map(function (plan) {
                  return {
                    id: plan.id,
                    name: plan.name,
                    duration: plan.duration || plan.duration_days || 0,
                    price: plan.price_usd || plan.price || 0,
                    originalPrice: plan.original_price || plan.price_usd || plan.price || 0,
                    popular: plan.is_popular === 1 || false
                  };
                });
              } else {
                this.vipPlans = [];
              }
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t3 = _context4.v;
              console.error('加载VIP套餐失败:', _t3);
              this.vipPlans = [];
            case 3:
              this.renderVipPlans();
            case 4:
              return _context4.a(2);
          }
        }, _callee4, this, [[0, 2]]);
      }));
      function loadVipPlans() {
        return _loadVipPlans.apply(this, arguments);
      }
      return loadVipPlans;
    }()
  }, {
    key: "renderVipPlans",
    value: function renderVipPlans() {
      var container = document.getElementById('vipPackages');
      if (!container) return;
      if (!this.vipPlans || this.vipPlans.length === 0) {
        container.innerHTML = '<div class="empty-state">暂无VIP套餐</div>';
        if (window.i18n) window.i18n.updateDOM();
        return;
      }
      container.innerHTML = this.vipPlans.map(function (plan) {
        var price = typeof plan.price === 'number' ? plan.price : 0;
        var originalPrice = typeof plan.originalPrice === 'number' ? plan.originalPrice : price;
        var popular = plan.popular || false;
        var featuresHtml = '';
        featuresHtml += "<li><i class=\"fas fa-check\"></i> <span data-i18n=\"vip.feature.noAds\">\u65E0\u5E7F\u544A\u89C2\u770B</span></li>";
        featuresHtml += "<li><i class=\"fas fa-check\"></i> <span data-i18n=\"vip.feature.exclusive\">\u72EC\u5BB6\u5185\u5BB9</span></li>";
        featuresHtml += "<li><i class=\"fas fa-check\"></i> <span data-i18n=\"vip.feature.hdQuality\">\u9AD8\u6E05\u753B\u8D28</span></li>";
        if (plan.duration >= 90) {
          featuresHtml += "<li><i class=\"fas fa-check\"></i> <span data-i18n=\"vip.feature.extraCoins\">\u6BCF\u6708\u8D60\u9001\u91D1\u5E01</span></li>";
        }
        if (plan.duration >= 365) {
          featuresHtml += "<li><i class=\"fas fa-check\"></i> <span data-i18n=\"vip.feature.badge\">\u4E13\u5C5E\u5FBD\u7AE0</span></li>";
          featuresHtml += "<li><i class=\"fas fa-check\"></i> <span data-i18n=\"vip.feature.birthdayGift\">\u751F\u65E5\u53CC\u500D\u91D1\u5E01</span></li>";
        }
        return "\n                <div class=\"vip-card ".concat(popular ? 'popular' : '', "\" data-plan-id=\"").concat(plan.id, "\">\n                    ").concat(popular ? '<div class="popular-badge" data-i18n="payment.mostPopular">最受欢迎</div>' : '', "\n                    <div class=\"vip-icon\"><i class=\"fas fa-crown\"></i></div>\n                    <h3 class=\"vip-name\">").concat(plan.name, "</h3>\n                    <div class=\"vip-duration\">").concat(plan.duration, " <span data-i18n=\"payment.days\">\u5929</span></div>\n                    <div class=\"vip-price\">\n                        ").concat(originalPrice > price ? "<span class=\"original-price\">$".concat(originalPrice.toFixed(2), "</span>") : '', "\n                        <span class=\"current-price\">$").concat(price.toFixed(2), "</span>\n                    </div>\n                    <ul class=\"vip-features\">").concat(featuresHtml, "</ul>\n                    <button class=\"buy-vip-btn\" data-plan='").concat(JSON.stringify(plan), "' data-i18n=\"payment.buyNow\">\u7ACB\u5373\u5F00\u901A</button>\n                </div>\n            ");
      }).join('');
      if (window.i18n) window.i18n.updateDOM();
    }
  }, {
    key: "loadTransactionHistory",
    value: function () {
      var _loadTransactionHistory = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var user, res, _t4;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              if (_core_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"].isLoggedIn()) {
                _context5.n = 1;
                break;
              }
              this.transactions = [];
              this.renderTransactionHistory();
              return _context5.a(2);
            case 1:
              user = _core_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentUser();
              if (user) {
                _context5.n = 2;
                break;
              }
              return _context5.a(2);
            case 2:
              _context5.p = 2;
              _context5.n = 3;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__["default"].user.getTransactions(user.id);
            case 3:
              res = _context5.v;
              if (res.success && Array.isArray(res.data)) {
                this.transactions = res.data;
              } else {
                this.transactions = [];
              }
              _context5.n = 5;
              break;
            case 4:
              _context5.p = 4;
              _t4 = _context5.v;
              console.error('加载交易记录失败:', _t4);
              this.transactions = [];
            case 5:
              this.renderTransactionHistory();
            case 6:
              return _context5.a(2);
          }
        }, _callee5, this, [[2, 4]]);
      }));
      function loadTransactionHistory() {
        return _loadTransactionHistory.apply(this, arguments);
      }
      return loadTransactionHistory;
    }()
  }, {
    key: "renderTransactionHistory",
    value: function renderTransactionHistory() {
      var container = document.getElementById('transactionHistory');
      if (!container) return;
      if (!_core_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"].isLoggedIn()) {
        var _document$getElementB;
        container.innerHTML = "\n                <div class=\"empty-state\">\n                    <i class=\"fas fa-receipt\"></i>\n                    <h4 data-i18n=\"payment.needLogin\">\u8BF7\u5148\u767B\u5F55</h4>\n                    <p data-i18n=\"payment.needLoginDesc\">\u767B\u5F55\u540E\u67E5\u770B\u60A8\u7684\u4EA4\u6613\u8BB0\u5F55</p>\n                    <button class=\"btn btn-primary\" id=\"loginFromHistoryBtn\" data-i18n=\"common.login\">\u7ACB\u5373\u767B\u5F55</button>\n                </div>\n            ";
        (_document$getElementB = document.getElementById('loginFromHistoryBtn')) === null || _document$getElementB === void 0 || _document$getElementB.addEventListener('click', function () {
          window.location.href = '/pages/login.html?redirect=/pages/payment.html?tab=history';
        });
        if (window.i18n) window.i18n.updateDOM();
        return;
      }
      if (!this.transactions || this.transactions.length === 0) {
        container.innerHTML = "\n                <div class=\"empty-state\">\n                    <i class=\"fas fa-receipt\"></i>\n                    <h4 data-i18n=\"payment.noTransactions\">\u6682\u65E0\u4EA4\u6613\u8BB0\u5F55</h4>\n                    <p data-i18n=\"payment.noTransactionsDesc\">\u5B8C\u6210\u9996\u6B21\u8D2D\u4E70\u540E\u8BB0\u5F55\u5C06\u663E\u793A\u5728\u8FD9\u91CC</p>\n                </div>\n            ";
        if (window.i18n) window.i18n.updateDOM();
        return;
      }
      container.innerHTML = this.transactions.map(function (t) {
        return "\n            <div class=\"history-item\">\n                <div class=\"history-info\">\n                    <div class=\"history-icon ".concat(t.status || 'success', "\">\n                        <i class=\"fas fa-").concat(t.status === 'success' ? 'check-circle' : 'clock', "\"></i>\n                    </div>\n                    <div class=\"history-details\">\n                        <h4>").concat(t.description || t.item || '-', "</h4>\n                        <p>").concat(new Date(t.created_at || t.createdAt).toLocaleString(), "</p>\n                    </div>\n                </div>\n                <div class=\"history-amount\">$").concat(parseFloat(t.amount).toFixed(2), "</div>\n            </div>\n        ");
      }).join('');
      if (window.i18n) window.i18n.updateDOM();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this7 = this,
        _document$getElementB2,
        _document$getElementB3,
        _document$getElementB4,
        _document$getElementB5;
      var backBtn = document.getElementById('backBtn');
      if (backBtn) {
        backBtn.addEventListener('click', function () {
          return _this7.goBack();
        });
      }
      document.addEventListener('click', function (e) {
        var buyBtn = e.target.closest('.buy-btn');
        if (buyBtn) {
          var pkg = JSON.parse(buyBtn.dataset["package"]);
          _this7.selectPackage(pkg, 'coins');
        }
        var vipBtn = e.target.closest('.buy-vip-btn');
        if (vipBtn) {
          var plan = JSON.parse(vipBtn.dataset.plan);
          _this7.selectPackage(plan, 'vip');
        }
      });
      (_document$getElementB2 = document.getElementById('paymentForm')) === null || _document$getElementB2 === void 0 || _document$getElementB2.addEventListener('submit', function (e) {
        e.preventDefault();
        _this7.processPayment();
      });
      (_document$getElementB3 = document.getElementById('payNowBtn')) === null || _document$getElementB3 === void 0 || _document$getElementB3.addEventListener('click', function (e) {
        e.preventDefault();
        _this7.processPayment();
      });
      (_document$getElementB4 = document.getElementById('applyPromoBtn')) === null || _document$getElementB4 === void 0 || _document$getElementB4.addEventListener('click', function () {
        return _this7.applyPromoCode();
      });
      (_document$getElementB5 = document.getElementById('promoCode')) === null || _document$getElementB5 === void 0 || _document$getElementB5.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') _this7.applyPromoCode();
      });
      var cardNumberInput = document.getElementById('cardNumber');
      if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function (e) {
          var _value$match;
          var value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
          value = ((_value$match = value.match(/.{1,4}/g)) === null || _value$match === void 0 ? void 0 : _value$match.join(' ')) || value;
          e.target.value = value;
        });
      }
      var expiryInput = document.getElementById('expiry');
      if (expiryInput) {
        expiryInput.addEventListener('input', function (e) {
          var value = e.target.value.replace(/\D/g, '');
          if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4);
          }
          e.target.value = value;
        });
      }
      var cvvInput = document.getElementById('cvv');
      if (cvvInput) {
        cvvInput.addEventListener('input', function (e) {
          e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
        });
      }
    }
  }, {
    key: "selectPackage",
    value: function selectPackage(pkg, type) {
      var _document$getElementB6;
      if (!_core_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"].isLoggedIn()) {
        window.location.href = "/pages/login.html?redirect=".concat(encodeURIComponent(window.location.pathname + window.location.search));
        return;
      }
      this.selectedPackage = _objectSpread(_objectSpread({}, pkg), {}, {
        type: type
      });
      this.updatePayButton("\u652F\u4ED8 $".concat(pkg.price.toFixed(2)));
      (_document$getElementB6 = document.getElementById('paymentFormSection')) === null || _document$getElementB6 === void 0 || _document$getElementB6.scrollIntoView({
        behavior: 'smooth'
      });
      document.querySelectorAll('.package-card, .vip-card').forEach(function (c) {
        return c.style.borderColor = '';
      });
      var selector = type === 'coins' ? '.package-card' : '.vip-card';
      var activeCard = Array.from(document.querySelectorAll(selector)).find(function (card) {
        var _card$querySelector, _card$querySelector2;
        return ((_card$querySelector = card.querySelector('button')) === null || _card$querySelector === void 0 || (_card$querySelector = _card$querySelector.dataset["package"]) === null || _card$querySelector === void 0 ? void 0 : _card$querySelector.includes(pkg.id)) || ((_card$querySelector2 = card.querySelector('button')) === null || _card$querySelector2 === void 0 || (_card$querySelector2 = _card$querySelector2.dataset.plan) === null || _card$querySelector2 === void 0 ? void 0 : _card$querySelector2.includes(pkg.id));
      });
      if (activeCard) activeCard.style.borderColor = 'var(--primary)';
    }
  }, {
    key: "updatePayButton",
    value: function updatePayButton(text) {
      var payBtn = document.getElementById('payNowBtn');
      if (payBtn) {
        payBtn.innerHTML = "<i class=\"fas fa-lock\"></i> ".concat(text);
        payBtn.disabled = false;
      }
    }
  }, {
    key: "applyPromoCode",
    value: function () {
      var _applyPromoCode = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var input, code, token, res, data, finalPrice, _t5;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              input = document.getElementById('promoCode');
              code = input.value.trim().toUpperCase();
              if (code) {
                _context6.n = 1;
                break;
              }
              this.showError('请输入优惠码');
              return _context6.a(2);
            case 1:
              _context6.p = 1;
              token = _core_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"].getToken();
              _context6.n = 2;
              return fetch('/api/payment/promo/validate', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer ".concat(token)
                },
                body: JSON.stringify({
                  code: code
                })
              });
            case 2:
              res = _context6.v;
              _context6.n = 3;
              return res.json();
            case 3:
              data = _context6.v;
              if (!data.success) {
                _context6.n = 4;
                break;
              }
              this.promoCode = code;
              this.discount = data.data.discount_percent || 0;
              input.style.borderColor = 'var(--success)';
              this.showToast("\u4F18\u60E0\u7801\u5E94\u7528\u6210\u529F\uFF01\u83B7\u5F97".concat(this.discount, "%\u6298\u6263"));
              if (this.selectedPackage) {
                finalPrice = this.selectedPackage.price * (1 - this.discount / 100);
                this.updatePayButton("\u652F\u4ED8 $".concat(finalPrice.toFixed(2)));
              }
              _context6.n = 5;
              break;
            case 4:
              throw new Error(data.error || '无效的优惠码');
            case 5:
              _context6.n = 7;
              break;
            case 6:
              _context6.p = 6;
              _t5 = _context6.v;
              input.style.borderColor = 'var(--error)';
              this.showError(_t5.message || '无效的优惠码');
            case 7:
              return _context6.a(2);
          }
        }, _callee6, this, [[1, 6]]);
      }));
      function applyPromoCode() {
        return _applyPromoCode.apply(this, arguments);
      }
      return applyPromoCode;
    }()
  }, {
    key: "processPayment",
    value: function () {
      var _processPayment = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var payBtn, originalText, token, orderRes, orderData, _orderData$data, orderId, paymentParams, gateway, paymentSuccess, userRes, _t6;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              console.log('=== processPayment 开始 ===');
              console.log('selectedPackage:', this.selectedPackage);
              console.log('selectedPaymentMethod:', this.selectedPaymentMethod);
              if (this.selectedPackage) {
                _context7.n = 1;
                break;
              }
              this.showError('请先选择套餐');
              return _context7.a(2);
            case 1:
              if (_core_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"].isLoggedIn()) {
                _context7.n = 2;
                break;
              }
              window.location.href = "/pages/login.html?redirect=".concat(encodeURIComponent(window.location.pathname + window.location.search));
              return _context7.a(2);
            case 2:
              if (this.selectedPaymentMethod) {
                _context7.n = 3;
                break;
              }
              this.showError('请选择支付方式');
              return _context7.a(2);
            case 3:
              if (!(this.selectedPaymentMethod === 'stripe' && !this.stripeEnabled)) {
                _context7.n = 4;
                break;
              }
              this.showError('Stripe 支付暂不可用');
              return _context7.a(2);
            case 4:
              payBtn = document.getElementById('payNowBtn');
              originalText = payBtn.innerHTML;
              payBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 处理中...';
              payBtn.disabled = true;
              _context7.p = 5;
              token = _core_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"].getToken();
              console.log('📤 发送订单请求...');
              _context7.n = 6;
              return fetch('/api/payment/order', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer ".concat(token)
                },
                body: JSON.stringify({
                  packageId: this.selectedPackage.id,
                  type: this.selectedPackage.type,
                  paymentMethod: this.selectedPaymentMethod,
                  promoCode: this.promoCode
                })
              });
            case 6:
              orderRes = _context7.v;
              _context7.n = 7;
              return orderRes.json();
            case 7:
              orderData = _context7.v;
              console.log('📥 订单响应:', orderData);
              if (orderData.success) {
                _context7.n = 8;
                break;
              }
              throw new Error(orderData.error || '创建订单失败');
            case 8:
              _orderData$data = orderData.data, orderId = _orderData$data.orderId, paymentParams = _orderData$data.paymentParams, gateway = _orderData$data.gateway;
              console.log('💳 支付参数:', {
                orderId: orderId,
                gateway: gateway,
                hasUrl: !!(paymentParams !== null && paymentParams !== void 0 && paymentParams.url)
              });
              if (!(gateway === 'stripe')) {
                _context7.n = 11;
                break;
              }
              if (!(paymentParams !== null && paymentParams !== void 0 && paymentParams.url)) {
                _context7.n = 9;
                break;
              }
              console.log('🚀 跳转到 Stripe Checkout:', paymentParams.url);
              window.location.href = paymentParams.url;
              _context7.n = 10;
              break;
            case 9:
              throw new Error('Stripe 支付链接获取失败');
            case 10:
              _context7.n = 21;
              break;
            case 11:
              if (!(gateway === 'alipay' || gateway === 'wechat')) {
                _context7.n = 14;
                break;
              }
              if (!(paymentParams !== null && paymentParams !== void 0 && paymentParams.qrCodeUrl)) {
                _context7.n = 12;
                break;
              }
              this.displayQrCode(paymentParams.qrCodeUrl, orderId);
              payBtn.innerHTML = originalText;
              payBtn.disabled = false;
              _context7.n = 13;
              break;
            case 12:
              throw new Error('二维码获取失败');
            case 13:
              _context7.n = 21;
              break;
            case 14:
              _context7.n = 15;
              return this.processMockPayment(orderId);
            case 15:
              _context7.n = 16;
              return this.pollOrderStatus(orderId);
            case 16:
              paymentSuccess = _context7.v;
              if (!paymentSuccess) {
                _context7.n = 19;
                break;
              }
              _context7.n = 17;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__["default"].user.getMe();
            case 17:
              userRes = _context7.v;
              if (userRes.success) {
                _core_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"].setUser(userRes.data);
              }
              this.updateCoinBalance();
              this.showToast('支付成功！');
              this.resetPaymentForm();
              _context7.n = 18;
              return this.loadTransactionHistory();
            case 18:
              this.switchTab('history');
              _context7.n = 20;
              break;
            case 19:
              this.showError('支付未完成，请重试');
            case 20:
              payBtn.innerHTML = originalText;
              payBtn.disabled = false;
            case 21:
              _context7.n = 23;
              break;
            case 22:
              _context7.p = 22;
              _t6 = _context7.v;
              console.error('❌ 支付失败:', _t6);
              this.showError(_t6.message || '支付失败，请重试');
              payBtn.innerHTML = originalText;
              payBtn.disabled = false;
            case 23:
              return _context7.a(2);
          }
        }, _callee7, this, [[5, 22]]);
      }));
      function processPayment() {
        return _processPayment.apply(this, arguments);
      }
      return processPayment;
    }()
  }, {
    key: "processMockPayment",
    value: function () {
      var _processMockPayment = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(orderId) {
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              return _context8.a(2, new Promise(function (resolve) {
                setTimeout(function () {
                  console.log('模拟支付完成:', orderId);
                  resolve(true);
                }, 2000);
              }));
          }
        }, _callee8);
      }));
      function processMockPayment(_x) {
        return _processMockPayment.apply(this, arguments);
      }
      return processMockPayment;
    }()
  }, {
    key: "displayQrCode",
    value: function displayQrCode(qrCodeUrl, orderId) {
      var qrContainer = document.getElementById('qrcodeContainer');
      if (!qrContainer) {
        this.showQrCodeContainer(this.selectedPaymentMethod);
        qrContainer = document.getElementById('qrcodeContainer');
      }
      qrContainer.innerHTML = "\n            <div class=\"qrcode-wrapper\">\n                <img src=\"".concat(qrCodeUrl, "\" alt=\"\u652F\u4ED8\u4E8C\u7EF4\u7801\" class=\"qrcode-image\">\n                <p class=\"qrcode-tip\">\u8BF7\u4F7F\u7528").concat(this.getGatewayName(), "\u626B\u63CF\u4E8C\u7EF4\u7801\u652F\u4ED8</p>\n                <p class=\"qrcode-order\">\u8BA2\u5355\u53F7: ").concat(orderId, "</p>\n                <button class=\"qrcode-cancel-btn\" onclick=\"window.paymentPage.cancelQrCode()\">\u53D6\u6D88\u652F\u4ED8</button>\n            </div>\n        ");
      qrContainer.style.display = 'block';
      this.startQrCodePolling(orderId);
    }
  }, {
    key: "getGatewayName",
    value: function getGatewayName() {
      var names = {
        'alipay': '支付宝',
        'wechat': '微信',
        'paypal': 'PayPal'
      };
      return names[this.selectedPaymentMethod] || this.selectedPaymentMethod;
    }
  }, {
    key: "startQrCodePolling",
    value: function startQrCodePolling(orderId) {
      var _this8 = this;
      this.qrCodePollingInterval = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var success;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              _context9.n = 1;
              return _this8.checkOrderStatus(orderId);
            case 1:
              success = _context9.v;
              if (!success) {
                _context9.n = 3;
                break;
              }
              clearInterval(_this8.qrCodePollingInterval);
              _this8.hideQrCode();
              _this8.showToast('支付成功！');
              _this8.resetPaymentForm();
              _context9.n = 2;
              return _this8.loadTransactionHistory();
            case 2:
              _this8.switchTab('history');
            case 3:
              return _context9.a(2);
          }
        }, _callee9);
      })), 2000);
      setTimeout(function () {
        if (_this8.qrCodePollingInterval) {
          clearInterval(_this8.qrCodePollingInterval);
          _this8.hideQrCode();
          _this8.showError('支付超时，请重试');
        }
      }, 300000);
    }
  }, {
    key: "checkOrderStatus",
    value: function () {
      var _checkOrderStatus = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(orderId) {
        var token, res, data, _t7;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.p = _context0.n) {
            case 0:
              _context0.p = 0;
              token = _core_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"].getToken();
              _context0.n = 1;
              return fetch("/api/payment/status?orderId=".concat(orderId), {
                headers: {
                  'Authorization': "Bearer ".concat(token)
                }
              });
            case 1:
              res = _context0.v;
              _context0.n = 2;
              return res.json();
            case 2:
              data = _context0.v;
              return _context0.a(2, data.success && data.data.status === 'success');
            case 3:
              _context0.p = 3;
              _t7 = _context0.v;
              return _context0.a(2, false);
          }
        }, _callee0, null, [[0, 3]]);
      }));
      function checkOrderStatus(_x2) {
        return _checkOrderStatus.apply(this, arguments);
      }
      return checkOrderStatus;
    }()
  }, {
    key: "cancelQrCode",
    value: function cancelQrCode() {
      if (this.qrCodePollingInterval) {
        clearInterval(this.qrCodePollingInterval);
      }
      this.hideQrCode();
      this.showToast('已取消支付');
    }
  }, {
    key: "hideQrCode",
    value: function hideQrCode() {
      var qrContainer = document.getElementById('qrcodeContainer');
      if (qrContainer) {
        qrContainer.style.display = 'none';
      }
    }
  }, {
    key: "pollOrderStatus",
    value: function () {
      var _pollOrderStatus = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(orderId) {
        var maxAttempts,
          interval,
          i,
          success,
          _args1 = arguments;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              maxAttempts = _args1.length > 1 && _args1[1] !== undefined ? _args1[1] : 30;
              interval = _args1.length > 2 && _args1[2] !== undefined ? _args1[2] : 2000;
              i = 0;
            case 1:
              if (!(i < maxAttempts)) {
                _context1.n = 5;
                break;
              }
              _context1.n = 2;
              return new Promise(function (resolve) {
                return setTimeout(resolve, interval);
              });
            case 2:
              _context1.n = 3;
              return this.checkOrderStatus(orderId);
            case 3:
              success = _context1.v;
              if (!success) {
                _context1.n = 4;
                break;
              }
              return _context1.a(2, true);
            case 4:
              i++;
              _context1.n = 1;
              break;
            case 5:
              return _context1.a(2, false);
          }
        }, _callee1, this);
      }));
      function pollOrderStatus(_x3) {
        return _pollOrderStatus.apply(this, arguments);
      }
      return pollOrderStatus;
    }()
  }, {
    key: "resetPaymentForm",
    value: function resetPaymentForm() {
      var _document$getElementB7,
        _this9 = this;
      (_document$getElementB7 = document.getElementById('paymentForm')) === null || _document$getElementB7 === void 0 || _document$getElementB7.reset();
      this.selectedPackage = null;
      this.discount = 0;
      this.promoCode = null;
      var promoInput = document.getElementById('promoCode');
      if (promoInput) {
        promoInput.value = '';
        promoInput.style.borderColor = '';
      }
      document.querySelectorAll('.package-card, .vip-card').forEach(function (c) {
        return c.style.borderColor = '';
      });
      this.hideQrCode();
      if (this.qrCodePollingInterval) {
        clearInterval(this.qrCodePollingInterval);
      }
      var payBtn = document.getElementById('payNowBtn');
      if (payBtn) {
        payBtn.disabled = true;
        payBtn.innerHTML = '<i class="fas fa-lock"></i> 立即支付';
      }
      setTimeout(function () {
        return _this9.updatePaymentFormFields();
      }, 50);
    }
  }, {
    key: "showLoading",
    value: function showLoading() {
      var _document$getElementB8;
      (_document$getElementB8 = document.getElementById('pageLoading')) === null || _document$getElementB8 === void 0 || _document$getElementB8.classList.add('show');
    }
  }, {
    key: "hideLoading",
    value: function hideLoading() {
      var _document$getElementB9;
      (_document$getElementB9 = document.getElementById('pageLoading')) === null || _document$getElementB9 === void 0 || _document$getElementB9.classList.remove('show');
    }
  }, {
    key: "showToast",
    value: function showToast(message) {
      document.dispatchEvent(new CustomEvent('showToast', {
        detail: {
          message: message,
          type: 'success'
        }
      }));
    }
  }, {
    key: "showError",
    value: function showError(message) {
      document.dispatchEvent(new CustomEvent('showToast', {
        detail: {
          message: message,
          type: 'error'
        }
      }));
    }
  }]);
}(); // 初始化

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    window.paymentPage = new PaymentPage();
  });
} else {
  window.paymentPage = new PaymentPage();
}
/******/ })()
;