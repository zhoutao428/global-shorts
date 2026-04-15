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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var _core_auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(527);
/* harmony import */ var _core_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(225);
/* harmony import */ var _core_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
/**
 * 个人中心页面逻辑
 * 处理用户资料、观看历史、收藏、设置等功能
 */




var ProfilePage = /*#__PURE__*/function () {
  function ProfilePage(params) {
    _classCallCheck(this, ProfilePage);
    this.params = params;
    this.userData = null;
    this.init();
  }
  return _createClass(ProfilePage, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _this = this;
        var _t, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              this.showLoading();
              _context2.p = 1;
              _context2.p = 2;
              _context2.n = 3;
              return Promise.race([_core_i18n_js__WEBPACK_IMPORTED_MODULE_2__["default"].init(), new Promise(function (_, reject) {
                return setTimeout(function () {
                  return reject(new Error('i18n 初始化超时'));
                }, 3000);
              })]);
            case 3:
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t = _context2.v;
              console.warn('i18n 初始化超时，继续执行', _t);
            case 5:
              if (_core_auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].isLoggedIn()) {
                _context2.n = 6;
                break;
              }
              window.location.href = '/pages/login.html?redirect=' + encodeURIComponent(window.location.pathname);
              return _context2.a(2);
            case 6:
              _context2.n = 7;
              return this.loadUserData();
            case 7:
              _context2.n = 8;
              return Promise.all([this.loadHistoryData(), this.loadFavoritesData(), this.loadTransactions()]);
            case 8:
              this.bindEvents();
              window.addEventListener('language:changed', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
                return _regenerator().w(function (_context) {
                  while (1) switch (_context.n) {
                    case 0:
                      _context.n = 1;
                      return Promise.all([_this.loadHistoryData(), _this.loadFavoritesData(), _this.loadTransactions()]);
                    case 1:
                      _this.updateUserInfo();
                      _core_i18n_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateDOM();
                    case 2:
                      return _context.a(2);
                  }
                }, _callee);
              })));
              this.hideLoading();
              _context2.n = 10;
              break;
            case 9:
              _context2.p = 9;
              _t2 = _context2.v;
              console.error('Profile initialization failed:', _t2);
              this.showError(_t2.message);
              this.hideLoading();
            case 10:
              return _context2.a(2);
          }
        }, _callee2, this, [[2, 4], [1, 9]]);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "loadUserData",
    value: function () {
      var _loadUserData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _userData$email, cachedUser, profileRes, userData, isVip, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              cachedUser = _core_auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentUser();
              if (cachedUser) {
                _context3.n = 1;
                break;
              }
              throw new Error('用户未登录');
            case 1:
              _context3.n = 2;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.user.getProfile(cachedUser.id);
            case 2:
              profileRes = _context3.v;
              userData = {};
              if (profileRes.success && profileRes.data) {
                userData = profileRes.data;
                _core_auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].setUser(_objectSpread(_objectSpread({}, cachedUser), userData));
              } else {
                userData = cachedUser;
              }
              isVip = isTruthyVipFlag(userData.is_vip) || isTruthyVipFlag(userData.isVip);
              this.userData = {
                id: userData.id,
                username: userData.nickname || userData.username || ((_userData$email = userData.email) === null || _userData$email === void 0 ? void 0 : _userData$email.split('@')[0]) || '用户',
                email: userData.email || '',
                fullName: userData.nickname || userData.full_name || '',
                avatar: userData.avatar_url || userData.avatar || '/images/default-avatar.jpg',
                coins: userData.coins || 0,
                isVip: isVip,
                vipExpiresAt: userData.vip_expires_at || userData.vipExpiresAt || null,
                createdAt: userData.created_at || new Date().toISOString().split('T')[0],
                country: userData.country || '',
                language: userData.language || 'en'
              };
              _context3.n = 3;
              return this.loadUserStats();
            case 3:
              this.updateUserInfo();
              _context3.n = 5;
              break;
            case 4:
              _context3.p = 4;
              _t3 = _context3.v;
              console.error('Failed to load user data:', _t3);
              this.showError('加载用户数据失败');
            case 5:
              return _context3.a(2);
          }
        }, _callee3, this, [[0, 4]]);
      }));
      function loadUserData() {
        return _loadUserData.apply(this, arguments);
      }
      return loadUserData;
    }()
  }, {
    key: "loadUserStats",
    value: function () {
      var _loadUserStats = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var statsRes, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.user.getStats();
            case 1:
              statsRes = _context4.v;
              if (statsRes.success) {
                this.userData.watchHours = statsRes.data.watchHours;
                this.userData.dramasWatched = statsRes.data.dramasWatched;
                this.userData.episodesWatched = statsRes.data.episodesWatched;
              } else {
                this.userData.watchHours = 0;
                this.userData.dramasWatched = 0;
                this.userData.episodesWatched = 0;
              }
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t4 = _context4.v;
              console.error('Failed to load user stats:', _t4);
              this.userData.watchHours = 0;
              this.userData.dramasWatched = 0;
              this.userData.episodesWatched = 0;
            case 3:
              return _context4.a(2);
          }
        }, _callee4, this, [[0, 2]]);
      }));
      function loadUserStats() {
        return _loadUserStats.apply(this, arguments);
      }
      return loadUserStats;
    }()
  }, {
    key: "updateUserInfo",
    value: function updateUserInfo() {
      var _this$userData$coins;
      var avatarEl = document.querySelector('.profile-avatar');
      if (avatarEl) {
        var initials = (this.userData.fullName || this.userData.username).charAt(0).toUpperCase();
        avatarEl.textContent = initials;
      }
      var profileName = document.querySelector('.profile-name');
      if (profileName) {
        profileName.innerHTML = "\n                ".concat(this.userData.fullName || this.userData.username, "\n                ").concat(this.userData.isVip ? '<span class="vip-badge"><i class="fas fa-crown"></i> VIP</span>' : '', "\n            ");
      }
      var profileEmail = document.querySelector('.profile-email');
      if (profileEmail) {
        profileEmail.innerHTML = "<i class=\"fas fa-envelope\"></i> ".concat(this.userData.email);
      }
      var watchHoursEl = document.getElementById('watchHours');
      if (watchHoursEl) watchHoursEl.textContent = this.userData.watchHours || 0;
      var dramaCountEl = document.getElementById('dramaCount');
      if (dramaCountEl) dramaCountEl.textContent = this.userData.dramasWatched || 0;
      var episodeCountEl = document.getElementById('episodeCount');
      if (episodeCountEl) episodeCountEl.textContent = this.userData.episodesWatched || 0;
      this.updateVipStatus();
      var coinAmount = document.querySelector('.coin-amount span');
      if (coinAmount) coinAmount.textContent = ((_this$userData$coins = this.userData.coins) === null || _this$userData$coins === void 0 ? void 0 : _this$userData$coins.toLocaleString()) || '0';
      if (window.navbar && typeof window.navbar.updateUser === 'function') {
        window.navbar.updateUser(this.userData);
      }
    }
  }, {
    key: "updateVipStatus",
    value: function updateVipStatus() {
      var vipContainer = document.querySelector('.vip-status-container');
      if (!vipContainer) return;
      if (this.userData.isVip) {
        var expireText = '';
        if (this.userData.vipExpiresAt) {
          var expires = new Date(this.userData.vipExpiresAt);
          var today = new Date();
          var daysLeft = Math.ceil((expires - today) / (1000 * 60 * 60 * 24));
          var year = expires.getFullYear();
          var month = expires.getMonth() + 1;
          var day = expires.getDate();
          var dateStr = "".concat(year, "/").concat(month, "/").concat(day);
          var validUntilText = _core_i18n_js__WEBPACK_IMPORTED_MODULE_2__["default"].t('profile.validUntil', {
            date: dateStr
          });
          var daysLeftText = _core_i18n_js__WEBPACK_IMPORTED_MODULE_2__["default"].t('profile.daysLeft', {
            days: daysLeft
          });
          expireText = "".concat(validUntilText, " \xB7 ").concat(daysLeftText);
        } else {
          expireText = "".concat(_core_i18n_js__WEBPACK_IMPORTED_MODULE_2__["default"].t('profile.permanentValid'), " \xB7 ").concat(_core_i18n_js__WEBPACK_IMPORTED_MODULE_2__["default"].t('profile.enjoyVipBenefits'));
        }
        vipContainer.innerHTML = "\n        <div class=\"vip-info\">\n            <div class=\"vip-icon\">\n                <i class=\"fas fa-crown\"></i>\n            </div>\n            <div class=\"vip-details\">\n                <h3>".concat(_core_i18n_js__WEBPACK_IMPORTED_MODULE_2__["default"].t('profile.vipMember'), "</h3>\n                <p>").concat(expireText, "</p>\n            </div>\n        </div>\n        <button class=\"btn btn-primary\" id=\"manageVipBtn\">\n            <i class=\"fas fa-cog\"></i> ").concat(_core_i18n_js__WEBPACK_IMPORTED_MODULE_2__["default"].t('profile.manageVip'), "\n        </button>\n    ");
      } else {
        vipContainer.innerHTML = "\n            <div class=\"vip-info\">\n                <div class=\"vip-icon\">\n                    <i class=\"fas fa-crown\" style=\"opacity: 0.3;\"></i>\n                </div>\n                <div class=\"vip-details\">\n                    <h3>".concat(_core_i18n_js__WEBPACK_IMPORTED_MODULE_2__["default"].t('profile.notVip'), "</h3>\n                    <p>").concat(_core_i18n_js__WEBPACK_IMPORTED_MODULE_2__["default"].t('profile.vipBenefits'), "</p>\n                </div>\n            </div>\n            <button class=\"btn btn-primary\" id=\"upgradeVipBtn\">\n                <i class=\"fas fa-gem\"></i> ").concat(_core_i18n_js__WEBPACK_IMPORTED_MODULE_2__["default"].t('profile.upgradeNow'), "\n            </button>\n        ");
      }
      var manageBtn = document.getElementById('manageVipBtn');
      if (manageBtn) {
        manageBtn.onclick = function () {
          window.location.href = '/pages/payment.html?tab=vip';
        };
      }
      var upgradeBtn = document.getElementById('upgradeVipBtn');
      if (upgradeBtn) {
        upgradeBtn.onclick = function () {
          window.location.href = '/pages/payment.html?tab=vip';
        };
      }
    }
  }, {
    key: "loadHistoryData",
    value: function () {
      var _loadHistoryData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var _this2 = this;
        var container, response, dramaMap, _iterator, _step, item, dramaId, _dramaDetail, _dramaDetail2, dramaDetail, detailRes, drama, historyList, _t5, _t6, _t7;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              container = document.getElementById('historyList');
              if (container) {
                _context5.n = 1;
                break;
              }
              return _context5.a(2);
            case 1:
              _context5.p = 1;
              container.innerHTML = '<div class="loading-spinner"></div>';
              _context5.n = 2;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.user.getWatchHistory(this.userData.id);
            case 2:
              response = _context5.v;
              if (!(!response.success || !response.data || !response.data.length)) {
                _context5.n = 3;
                break;
              }
              container.innerHTML = '<div class="empty-state">暂无观看历史</div>';
              return _context5.a(2);
            case 3:
              // 按剧集聚合
              dramaMap = new Map();
              _iterator = _createForOfIteratorHelper(response.data);
              _context5.p = 4;
              _iterator.s();
            case 5:
              if ((_step = _iterator.n()).done) {
                _context5.n = 13;
                break;
              }
              item = _step.value;
              dramaId = item.dramaId;
              if (dramaId) {
                _context5.n = 6;
                break;
              }
              return _context5.a(3, 12);
            case 6:
              if (dramaMap.has(dramaId)) {
                _context5.n = 11;
                break;
              }
              // 获取剧集详情（总集数、封面）
              dramaDetail = null;
              _context5.p = 7;
              _context5.n = 8;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.drama.getDetail(dramaId);
            case 8:
              detailRes = _context5.v;
              if (detailRes.success) dramaDetail = detailRes.data;
              _context5.n = 10;
              break;
            case 9:
              _context5.p = 9;
              _t5 = _context5.v;
              console.warn("\u83B7\u53D6\u5267\u96C6\u8BE6\u60C5\u5931\u8D25 (".concat(dramaId, ")"), _t5);
            case 10:
              dramaMap.set(dramaId, {
                id: dramaId,
                title: item.dramaTitle || '未知剧集',
                cover: ((_dramaDetail = dramaDetail) === null || _dramaDetail === void 0 ? void 0 : _dramaDetail.cover_url) || item.coverUrl || '',
                total_episodes: ((_dramaDetail2 = dramaDetail) === null || _dramaDetail2 === void 0 ? void 0 : _dramaDetail2.total_episodes) || 0,
                watchedEpisodes: new Set(),
                latestWatchedAt: item.watchedAt
              });
            case 11:
              drama = dramaMap.get(dramaId);
              drama.watchedEpisodes.add(item.episodeId);
              if (new Date(item.watchedAt) > new Date(drama.latestWatchedAt)) {
                drama.latestWatchedAt = item.watchedAt;
              }
            case 12:
              _context5.n = 5;
              break;
            case 13:
              _context5.n = 15;
              break;
            case 14:
              _context5.p = 14;
              _t6 = _context5.v;
              _iterator.e(_t6);
            case 15:
              _context5.p = 15;
              _iterator.f();
              return _context5.f(15);
            case 16:
              historyList = Array.from(dramaMap.values()).map(function (drama) {
                return _objectSpread(_objectSpread({}, drama), {}, {
                  watchedCount: drama.watchedEpisodes.size,
                  progressPercent: drama.total_episodes ? drama.watchedEpisodes.size / drama.total_episodes * 100 : 0
                });
              }).sort(function (a, b) {
                return new Date(b.latestWatchedAt) - new Date(a.latestWatchedAt);
              });
              container.innerHTML = '';
              historyList.forEach(function (item) {
                var historyItem = _this2.createHistoryItem(item);
                container.appendChild(historyItem);
              });
              _context5.n = 18;
              break;
            case 17:
              _context5.p = 17;
              _t7 = _context5.v;
              console.error('加载历史记录失败:', _t7);
              container.innerHTML = '<div class="empty-state error">加载失败，请重试</div>';
            case 18:
              return _context5.a(2);
          }
        }, _callee5, this, [[7, 9], [4, 14, 15, 16], [1, 17]]);
      }));
      function loadHistoryData() {
        return _loadHistoryData.apply(this, arguments);
      }
      return loadHistoryData;
    }()
  }, {
    key: "createHistoryItem",
    value: function createHistoryItem(item) {
      var div = document.createElement('div');
      div.className = 'history-item';
      var thumbnail = item.cover || '/images/default-thumb.jpg';
      var title = item.title || '未知剧集';
      var watchedCount = item.watchedCount;
      var total = item.total_episodes > 0 ? item.total_episodes : '?';
      var progressPercent = Math.min(100, item.progressPercent);
      var watchedAt = item.latestWatchedAt ? new Date(item.latestWatchedAt).toLocaleDateString() : '';
      div.innerHTML = "\n        <div class=\"history-thumb\">\n            <img src=\"".concat(thumbnail, "\" alt=\"").concat(title, "\" style=\"width:100%; height:100%; object-fit:cover;\" onerror=\"this.src='/images/default-thumb.jpg'\">\n        </div>\n        <div class=\"history-info\">\n            <div class=\"history-title\">").concat(escapeHtml(title), "</div>\n            <div class=\"history-meta\">\n                <span>Watched ").concat(watchedCount, "/").concat(total, "</span>\n                <span>").concat(watchedAt, "</span>\n            </div>\n            <div class=\"history-progress\">\n                <div class=\"history-progress-bar\" style=\"width: ").concat(progressPercent, "%\"></div>\n            </div>\n        </div>\n    ");
      div.addEventListener('click', function () {
        window.location.href = "/pages/player.html?drama=".concat(item.id);
      });
      return div;
    }
  }, {
    key: "loadFavoritesData",
    value: function () {
      var _loadFavoritesData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var _this3 = this;
        var container, response, _t8;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              container = document.getElementById('favoritesGrid');
              if (container) {
                _context6.n = 1;
                break;
              }
              return _context6.a(2);
            case 1:
              _context6.p = 1;
              container.innerHTML = '<div class="loading-spinner"></div>';
              _context6.n = 2;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.drama.getFavorites(this.userData.id);
            case 2:
              response = _context6.v;
              if (response.success && response.data && response.data.length > 0) {
                container.innerHTML = '';
                response.data.forEach(function (item) {
                  var favItem = _this3.createFavoriteItem(item);
                  container.appendChild(favItem);
                });
              } else {
                container.innerHTML = '<div class="empty-state">暂无收藏</div>';
              }
              _context6.n = 4;
              break;
            case 3:
              _context6.p = 3;
              _t8 = _context6.v;
              console.error('Failed to load favorites:', _t8);
              container.innerHTML = '<div class="empty-state error">加载失败，请重试</div>';
            case 4:
              return _context6.a(2);
          }
        }, _callee6, this, [[1, 3]]);
      }));
      function loadFavoritesData() {
        return _loadFavoritesData.apply(this, arguments);
      }
      return loadFavoritesData;
    }()
  }, {
    key: "createFavoriteItem",
    value: function createFavoriteItem(item) {
      var div = document.createElement('div');
      div.className = 'favorite-item';
      var thumbnail = item.coverUrl || '/images/default-thumb.jpg';
      var title = item.title || '';
      var episodes = item.totalEpisodes || 0;
      var isVip = item.isVip || false;
      var dramaId = item.dramaId;
      div.innerHTML = "\n            <div class=\"favorite-thumb\">\n                <img src=\"".concat(thumbnail, "\" alt=\"").concat(title, "\" style=\"width:100%; height:100%; object-fit:cover;\" onerror=\"this.src='/images/default-thumb.jpg'\">\n                ").concat(isVip ? '<div class="vip-badge" style="position: absolute; top: 10px; left: 10px; font-size: 10px; padding: 3px 8px; background: var(--vip-gold); color:#000; border-radius: 12px;">VIP</div>' : '', "\n            </div>\n            <div class=\"favorite-info\">\n                <div class=\"favorite-title\">").concat(escapeHtml(title), "</div>\n                <div class=\"favorite-meta\">").concat(episodes, "\u96C6</div>\n            </div>\n        ");
      div.addEventListener('click', function () {
        window.location.href = "/pages/player.html?drama=".concat(dramaId);
      });
      return div;
    }
  }, {
    key: "loadTransactions",
    value: function () {
      var _loadTransactions = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var _this4 = this;
        var container, response, _t9;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              container = document.getElementById('transactionsList');
              if (container) {
                _context7.n = 1;
                break;
              }
              return _context7.a(2);
            case 1:
              _context7.p = 1;
              _context7.n = 2;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.user.getTransactions(this.userData.id);
            case 2:
              response = _context7.v;
              if (response.success && response.data && response.data.length > 0) {
                container.innerHTML = '';
                response.data.forEach(function (item) {
                  var transItem = _this4.createTransactionItem(item);
                  container.appendChild(transItem);
                });
              } else {
                container.innerHTML = '';
              }
              _context7.n = 4;
              break;
            case 3:
              _context7.p = 3;
              _t9 = _context7.v;
              console.error('Failed to load transactions:', _t9);
            case 4:
              return _context7.a(2);
          }
        }, _callee7, this, [[1, 3]]);
      }));
      function loadTransactions() {
        return _loadTransactions.apply(this, arguments);
      }
      return loadTransactions;
    }()
  }, {
    key: "createTransactionItem",
    value: function createTransactionItem(item) {
      var div = document.createElement('div');
      var type = item.type || (item.amount > 0 ? 'earned' : 'spent');
      div.className = "transaction-item transaction-".concat(type);
      var icon = type === 'earned' ? 'plus' : 'minus';
      var amountSign = type === 'earned' ? '+' : '';
      var amount = Math.abs(item.amount);
      var title = item.title || (type === 'earned' ? '获得金币' : '消费金币');
      var description = item.description || '';
      var date = item.createdAt ? new Date(item.createdAt).toLocaleDateString() : '';
      div.innerHTML = "\n            <div class=\"transaction-info\">\n                <div class=\"transaction-icon\">\n                    <i class=\"fas fa-".concat(icon, "\"></i>\n                </div>\n                <div class=\"transaction-details\">\n                    <h4>").concat(title, "</h4>\n                    <p>").concat(description, " \xB7 ").concat(date, "</p>\n                </div>\n            </div>\n            <div class=\"transaction-amount\">\n                ").concat(amountSign).concat(amount, "\n            </div>\n        ");
      return div;
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _document$getElementB,
        _this5 = this,
        _document$getElementB2,
        _document$getElementB3,
        _document$getElementB4,
        _document$getElementB5,
        _document$getElementB6,
        _document$getElementB7,
        _document$getElementB8,
        _document$getElementB9,
        _document$getElementB0,
        _document$getElementB1,
        _document$getElementB10,
        _document$getElementB11,
        _document$getElementB12;
      (_document$getElementB = document.getElementById('editProfileBtn')) === null || _document$getElementB === void 0 || _document$getElementB.addEventListener('click', function () {
        _this5.showEditProfileModal();
      });
      (_document$getElementB2 = document.getElementById('settingsBtn')) === null || _document$getElementB2 === void 0 || _document$getElementB2.addEventListener('click', function () {
        _this5.scrollToSettings();
      });
      (_document$getElementB3 = document.getElementById('viewAllHistory')) === null || _document$getElementB3 === void 0 || _document$getElementB3.addEventListener('click', function () {});
      (_document$getElementB4 = document.getElementById('viewAllFavorites')) === null || _document$getElementB4 === void 0 || _document$getElementB4.addEventListener('click', function () {});
      (_document$getElementB5 = document.getElementById('viewAllTransactions')) === null || _document$getElementB5 === void 0 || _document$getElementB5.addEventListener('click', function () {
        window.location.href = '/pages/payment.html?tab=history';
      });
      (_document$getElementB6 = document.getElementById('earnCoinsBtn')) === null || _document$getElementB6 === void 0 || _document$getElementB6.addEventListener('click', function () {
        _this5.showEarnCoinsModal();
      });
      (_document$getElementB7 = document.getElementById('buyCoinsBtn')) === null || _document$getElementB7 === void 0 || _document$getElementB7.addEventListener('click', function () {
        window.location.href = '/pages/payment.html';
      });
      (_document$getElementB8 = document.getElementById('withdrawCoinsBtn')) === null || _document$getElementB8 === void 0 || _document$getElementB8.addEventListener('click', function () {
        _this5.showWithdrawModal();
      });
      document.querySelectorAll('.setting-item').forEach(function (item) {
        item.addEventListener('click', function (e) {
          var settingId = item.id;
          _this5.handleSettingClick(settingId, e);
        });
      });
      (_document$getElementB9 = document.getElementById('saveProfileBtn')) === null || _document$getElementB9 === void 0 || _document$getElementB9.addEventListener('click', function () {
        _this5.saveProfile();
      });
      document.querySelectorAll('.close-modal').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          var modal = e.target.closest('.modal-overlay');
          if (modal) modal.classList.remove('active');
        });
      });
      document.querySelectorAll('.modal-overlay').forEach(function (overlay) {
        overlay.addEventListener('click', function (e) {
          if (e.target === overlay) {
            overlay.classList.remove('active');
          }
        });
      });
      (_document$getElementB0 = document.getElementById('notificationToggle')) === null || _document$getElementB0 === void 0 || _document$getElementB0.addEventListener('change', function (e) {
        _this5.saveNotificationSetting(e.target.checked);
      });
      (_document$getElementB1 = document.getElementById('languageSettings')) === null || _document$getElementB1 === void 0 || _document$getElementB1.addEventListener('click', function () {
        _this5.showLanguageModal();
      });
      (_document$getElementB10 = document.getElementById('cancelLanguageBtn')) === null || _document$getElementB10 === void 0 || _document$getElementB10.addEventListener('click', function () {
        document.getElementById('languageModal').classList.remove('active');
      });
      (_document$getElementB11 = document.getElementById('saveLanguageBtn')) === null || _document$getElementB11 === void 0 || _document$getElementB11.addEventListener('click', function () {
        _this5.saveLanguage();
      });
      (_document$getElementB12 = document.getElementById('logoutBtn')) === null || _document$getElementB12 === void 0 || _document$getElementB12.addEventListener('click', function () {
        _this5.handleLogout();
      });
    }
  }, {
    key: "handleSettingClick",
    value: function handleSettingClick(settingId, event) {
      if (event.target.closest('.switch')) return;
      switch (settingId) {
        case 'notificationSettings':
          break;
        case 'languageSettings':
          this.showLanguageModal();
          break;
        case 'playbackSettings':
          this.showPlaybackSettings();
          break;
        case 'privacySettings':
          this.showPrivacySettings();
          break;
        case 'helpSettings':
          this.showHelp();
          break;
        case 'logoutBtn':
          this.handleLogout();
          break;
        default:
          console.log('Setting clicked:', settingId);
      }
    }
  }, {
    key: "showEditProfileModal",
    value: function showEditProfileModal() {
      var _this6 = this;
      var modal = document.getElementById('editProfileModal');
      if (!modal) return;
      var displayNameInput = document.getElementById('editDisplayName');
      var emailInput = document.getElementById('editEmail');
      if (displayNameInput) displayNameInput.value = this.userData.fullName || '';
      if (emailInput) emailInput.value = this.userData.email || '';
      modal.classList.add('active');
      var saveBtn = document.getElementById('saveProfileBtn');
      if (saveBtn) {
        var newSaveBtn = saveBtn.cloneNode(true);
        saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
        newSaveBtn.addEventListener('click', function () {
          return _this6.saveProfile();
        });
      }
    }
  }, {
    key: "saveProfile",
    value: function () {
      var _saveProfile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var displayName, email, response, _t0;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              displayName = document.getElementById('editDisplayName').value.trim();
              email = document.getElementById('editEmail').value.trim();
              if (!(!displayName || !email)) {
                _context8.n = 1;
                break;
              }
              this.showError('请填写所有字段');
              return _context8.a(2);
            case 1:
              this.showLoading();
              _context8.p = 2;
              _context8.n = 3;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.user.updateProfile(this.userData.id, {
                nickname: displayName,
                email: email
              });
            case 3:
              response = _context8.v;
              if (response && response.success) {
                this.userData.fullName = displayName;
                this.userData.email = email;
                this.updateUserInfo();
                document.getElementById('editProfileModal').classList.remove('active');
                alert('资料更新成功');
              } else {
                this.showError((response === null || response === void 0 ? void 0 : response.error) || '更新失败');
              }
              _context8.n = 5;
              break;
            case 4:
              _context8.p = 4;
              _t0 = _context8.v;
              console.error('Failed to update profile:', _t0);
              this.showError('网络错误，请重试');
            case 5:
              _context8.p = 5;
              this.hideLoading();
              return _context8.f(5);
            case 6:
              return _context8.a(2);
          }
        }, _callee8, this, [[2, 4, 5, 6]]);
      }));
      function saveProfile() {
        return _saveProfile.apply(this, arguments);
      }
      return saveProfile;
    }()
  }, {
    key: "showLanguageModal",
    value: function () {
      var _showLanguageModal = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var modal;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              modal = document.getElementById('languageModal');
              if (modal) {
                _context9.n = 1;
                break;
              }
              return _context9.a(2);
            case 1:
              _context9.n = 2;
              return this.loadLanguages();
            case 2:
              modal.classList.add('active');
            case 3:
              return _context9.a(2);
          }
        }, _callee9, this);
      }));
      function showLanguageModal() {
        return _showLanguageModal.apply(this, arguments);
      }
      return showLanguageModal;
    }()
  }, {
    key: "loadLanguages",
    value: function () {
      var _loadLanguages = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
        var _this7 = this;
        var container, response, languages, currentLang, currentLangObj, currentLanguageEl, saveBtn, cancelBtn, modalFooter, _t1;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.p = _context1.n) {
            case 0:
              container = document.getElementById('languageOptions');
              if (container) {
                _context1.n = 1;
                break;
              }
              return _context1.a(2);
            case 1:
              _context1.p = 1;
              _context1.n = 2;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.language.getList();
            case 2:
              response = _context1.v;
              languages = response.data || [];
              if (languages.length === 0) {
                languages = [{
                  code: 'en',
                  name: 'English',
                  nativeName: 'English'
                }, {
                  code: 'zh-CN',
                  name: '中文',
                  nativeName: '中文'
                }];
              }
              currentLang = _core_i18n_js__WEBPACK_IMPORTED_MODULE_2__["default"].currentLang || this.userData.language || 'en'; // 更新设置列表中的当前语言显示
              currentLangObj = languages.find(function (l) {
                return l.code === currentLang;
              });
              currentLanguageEl = document.getElementById('currentLanguage');
              if (currentLanguageEl && currentLangObj) {
                currentLanguageEl.textContent = currentLangObj.nativeName || currentLangObj.name;
              }
              container.innerHTML = languages.map(function (lang) {
                return "\n                <label class=\"language-option ".concat(lang.code === currentLang ? 'active' : '', "\">\n                    <input type=\"radio\" name=\"language\" value=\"").concat(lang.code, "\" ").concat(lang.code === currentLang ? 'checked' : '', ">\n                    <span>").concat(lang.nativeName || lang.name, "</span>\n                </label>\n            ");
              }).join('');
              container.querySelectorAll('.language-option').forEach(function (opt) {
                opt.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
                  var input;
                  return _regenerator().w(function (_context0) {
                    while (1) switch (_context0.n) {
                      case 0:
                        container.querySelectorAll('.language-option').forEach(function (o) {
                          return o.classList.remove('active');
                        });
                        opt.classList.add('active');
                        input = opt.querySelector('input');
                        if (!input) {
                          _context0.n = 1;
                          break;
                        }
                        input.checked = true;
                        _context0.n = 1;
                        return _this7.saveLanguage();
                      case 1:
                        return _context0.a(2);
                    }
                  }, _callee0);
                })));
              });
              saveBtn = document.getElementById('saveLanguageBtn');
              if (saveBtn) {
                saveBtn.style.display = 'none';
              }
              cancelBtn = document.getElementById('cancelLanguageBtn');
              if (cancelBtn) {
                cancelBtn.style.display = 'none';
              }
              modalFooter = document.querySelector('#languageModal .modal-footer');
              if (modalFooter) {
                modalFooter.style.display = 'none';
              }
              _context1.n = 4;
              break;
            case 3:
              _context1.p = 3;
              _t1 = _context1.v;
              console.error('Failed to load languages:', _t1);
            case 4:
              return _context1.a(2);
          }
        }, _callee1, this, [[1, 3]]);
      }));
      function loadLanguages() {
        return _loadLanguages.apply(this, arguments);
      }
      return loadLanguages;
    }()
  }, {
    key: "saveLanguage",
    value: function () {
      var _saveLanguage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
        var _document$querySelect;
        var selectedLang, response, currentLanguageEl, activeOption, _t10;
        return _regenerator().w(function (_context10) {
          while (1) switch (_context10.p = _context10.n) {
            case 0:
              selectedLang = (_document$querySelect = document.querySelector('input[name="language"]:checked')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.value;
              if (selectedLang) {
                _context10.n = 1;
                break;
              }
              return _context10.a(2);
            case 1:
              _context10.p = 1;
              this.showLoading();
              _context10.n = 2;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.user.updateProfile(this.userData.id, {
                language: selectedLang
              });
            case 2:
              response = _context10.v;
              if (!(response && response.success)) {
                _context10.n = 5;
                break;
              }
              _context10.n = 3;
              return _core_i18n_js__WEBPACK_IMPORTED_MODULE_2__["default"].setLanguage(selectedLang);
            case 3:
              this.userData.language = selectedLang;
              _context10.n = 4;
              return Promise.all([this.loadHistoryData(), this.loadFavoritesData(), this.loadTransactions()]);
            case 4:
              this.updateUserInfo();
              _core_i18n_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateDOM();

              // 更新设置列表中的当前语言显示
              currentLanguageEl = document.getElementById('currentLanguage');
              if (currentLanguageEl) {
                activeOption = document.querySelector('.language-option.active span');
                if (activeOption) {
                  currentLanguageEl.textContent = activeOption.textContent;
                }
              }
              document.getElementById('languageModal').classList.remove('active');
              _context10.n = 6;
              break;
            case 5:
              this.showError((response === null || response === void 0 ? void 0 : response.error) || '保存失败');
            case 6:
              _context10.n = 8;
              break;
            case 7:
              _context10.p = 7;
              _t10 = _context10.v;
              console.error('Failed to save language:', _t10);
              this.showError('网络错误，请重试');
            case 8:
              _context10.p = 8;
              this.hideLoading();
              return _context10.f(8);
            case 9:
              return _context10.a(2);
          }
        }, _callee10, this, [[1, 7, 8, 9]]);
      }));
      function saveLanguage() {
        return _saveLanguage.apply(this, arguments);
      }
      return saveLanguage;
    }()
  }, {
    key: "showEarnCoinsModal",
    value: function showEarnCoinsModal() {
      var _this8 = this;
      var modal = document.createElement('div');
      modal.className = 'modal-overlay active';
      modal.id = 'earnCoinsModal';
      modal.innerHTML = "\n            <div class=\"modal\">\n                <div class=\"modal-header\">\n                    <h3 class=\"modal-title\">\u8D5A\u53D6\u91D1\u5E01</h3>\n                    <button class=\"close-modal\"><i class=\"fas fa-times\"></i></button>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"earn-options\">\n                        <div class=\"earn-option\">\n                            <i class=\"fas fa-calendar-check\"></i>\n                            <div>\n                                <h4>\u6BCF\u65E5\u7B7E\u5230</h4>\n                                <p>\u6BCF\u5929\u7B7E\u5230\u83B7\u5F9710-50\u91D1\u5E01</p>\n                                <button class=\"btn btn-primary btn-sm\" id=\"dailyCheckinBtn\">\u7ACB\u5373\u7B7E\u5230</button>\n                            </div>\n                        </div>\n                        <div class=\"earn-option\">\n                            <i class=\"fas fa-users\"></i>\n                            <div>\n                                <h4>\u9080\u8BF7\u597D\u53CB</h4>\n                                <p>\u6BCF\u9080\u8BF7\u4E00\u4F4D\u597D\u53CB\u83B7\u5F97100\u91D1\u5E01</p>\n                                <button class=\"btn btn-primary btn-sm\" id=\"inviteBtn\">\u9080\u8BF7\u597D\u53CB</button>\n                            </div>\n                        </div>\n                        <div class=\"earn-option\">\n                            <i class=\"fas fa-ad\"></i>\n                            <div>\n                                <h4>\u89C2\u770B\u5E7F\u544A</h4>\n                                <p>\u89C2\u770B\u5E7F\u544A\u83B7\u5F975-20\u91D1\u5E01</p>\n                                <button class=\"btn btn-primary btn-sm\" id=\"watchAdBtn\">\u89C2\u770B\u5E7F\u544A</button>\n                            </div>\n                        </div>\n                        <div class=\"earn-option\">\n                            <i class=\"fas fa-share-alt\"></i>\n                            <div>\n                                <h4>\u5206\u4EAB\u5185\u5BB9</h4>\n                                <p>\u5206\u4EAB\u5267\u96C6\u7ED9\u597D\u53CB\u83B7\u5F9730\u91D1\u5E01</p>\n                                <button class=\"btn btn-primary btn-sm\" id=\"shareContentBtn\">\u7ACB\u5373\u5206\u4EAB</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ";
      document.body.appendChild(modal);
      var closeBtn = modal.querySelector('.close-modal');
      closeBtn.addEventListener('click', function () {
        return modal.remove();
      });
      modal.addEventListener('click', function (e) {
        if (e.target === modal) modal.remove();
      });
      var checkinBtn = modal.querySelector('#dailyCheckinBtn');
      if (checkinBtn) {
        checkinBtn.addEventListener('click', function () {
          return _this8.handleCheckin();
        });
      }
    }
  }, {
    key: "handleCheckin",
    value: function () {
      var _handleCheckin = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
        var response, _document$getElementB13, reward, coinAmount, _t11;
        return _regenerator().w(function (_context11) {
          while (1) switch (_context11.p = _context11.n) {
            case 0:
              _context11.p = 0;
              _context11.n = 1;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.user.checkin();
            case 1:
              response = _context11.v;
              if (response && response.success) {
                reward = response.reward || 0;
                this.userData.coins += reward;
                coinAmount = document.querySelector('.coin-amount span');
                if (coinAmount) coinAmount.textContent = this.userData.coins.toLocaleString();
                alert("\u7B7E\u5230\u6210\u529F\uFF01\u83B7\u5F97 ".concat(reward, " \u91D1\u5E01"));
                (_document$getElementB13 = document.getElementById('earnCoinsModal')) === null || _document$getElementB13 === void 0 || _document$getElementB13.remove();
              } else {
                this.showError((response === null || response === void 0 ? void 0 : response.error) || '签到失败');
              }
              _context11.n = 3;
              break;
            case 2:
              _context11.p = 2;
              _t11 = _context11.v;
              console.error('Checkin failed:', _t11);
              this.showError('网络错误，请重试');
            case 3:
              return _context11.a(2);
          }
        }, _callee11, this, [[0, 2]]);
      }));
      function handleCheckin() {
        return _handleCheckin.apply(this, arguments);
      }
      return handleCheckin;
    }()
  }, {
    key: "showWithdrawModal",
    value: function showWithdrawModal() {
      var _this9 = this;
      if (this.userData.coins < 1000) {
        this.showError('金币不足1000，无法提现');
        return;
      }
      var modal = document.createElement('div');
      modal.className = 'modal-overlay active';
      modal.id = 'withdrawModal';
      modal.innerHTML = "\n            <div class=\"modal\">\n                <div class=\"modal-header\">\n                    <h3 class=\"modal-title\">\u63D0\u73B0\u91D1\u5E01</h3>\n                    <button class=\"close-modal\"><i class=\"fas fa-times\"></i></button>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"withdraw-info\">\n                        <p>\u53EF\u7528\u91D1\u5E01: <strong>".concat(this.userData.coins, "</strong></p>\n                        <p>1000\u91D1\u5E01 = 1.00 \u7F8E\u5143</p>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"form-label\">\u63D0\u73B0\u91D1\u989D</label>\n                        <select class=\"form-control\" id=\"withdrawAmount\">\n                            <option value=\"1000\">1000 \u91D1\u5E01 ($1.00)</option>\n                            <option value=\"5000\" ").concat(this.userData.coins < 5000 ? 'disabled' : '', ">5000 \u91D1\u5E01 ($5.00)</option>\n                            <option value=\"10000\" ").concat(this.userData.coins < 10000 ? 'disabled' : '', ">10000 \u91D1\u5E01 ($10.00)</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"form-label\">\u63D0\u73B0\u65B9\u5F0F</label>\n                        <select class=\"form-control\" id=\"withdrawMethod\">\n                            <option value=\"paypal\">PayPal</option>\n                            <option value=\"alipay\">\u652F\u4ED8\u5B9D</option>\n                            <option value=\"wechat\">\u5FAE\u4FE1\u652F\u4ED8</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"form-label\">\u8D26\u6237\u4FE1\u606F</label>\n                        <input type=\"text\" class=\"form-control\" id=\"withdrawAccount\" placeholder=\"\u8BF7\u8F93\u5165\u6536\u6B3E\u8D26\u53F7\">\n                    </div>\n                    <button class=\"btn btn-primary\" id=\"submitWithdrawBtn\">\u63D0\u4EA4\u63D0\u73B0\u7533\u8BF7</button>\n                </div>\n            </div>\n        ");
      document.body.appendChild(modal);
      var closeBtn = modal.querySelector('.close-modal');
      closeBtn.addEventListener('click', function () {
        return modal.remove();
      });
      modal.addEventListener('click', function (e) {
        if (e.target === modal) modal.remove();
      });
      var submitBtn = modal.querySelector('#submitWithdrawBtn');
      submitBtn.addEventListener('click', function () {
        return _this9.handleWithdraw();
      });
    }
  }, {
    key: "handleWithdraw",
    value: function () {
      var _handleWithdraw = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12() {
        var _document$getElementB14, _document$getElementB15, _document$getElementB16;
        var amount, method, account, response, _document$getElementB17, coinAmount, _t12;
        return _regenerator().w(function (_context12) {
          while (1) switch (_context12.p = _context12.n) {
            case 0:
              amount = parseInt((_document$getElementB14 = document.getElementById('withdrawAmount')) === null || _document$getElementB14 === void 0 ? void 0 : _document$getElementB14.value);
              method = (_document$getElementB15 = document.getElementById('withdrawMethod')) === null || _document$getElementB15 === void 0 ? void 0 : _document$getElementB15.value;
              account = (_document$getElementB16 = document.getElementById('withdrawAccount')) === null || _document$getElementB16 === void 0 ? void 0 : _document$getElementB16.value;
              if (!(!amount || !method || !account)) {
                _context12.n = 1;
                break;
              }
              this.showError('请填写完整信息');
              return _context12.a(2);
            case 1:
              if (!(amount > this.userData.coins)) {
                _context12.n = 2;
                break;
              }
              this.showError('金币不足');
              return _context12.a(2);
            case 2:
              this.showLoading();
              _context12.p = 3;
              _context12.n = 4;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.user.withdraw({
                amount: amount,
                method: method,
                account: account
              });
            case 4:
              response = _context12.v;
              if (response && response.success) {
                this.userData.coins -= amount;
                coinAmount = document.querySelector('.coin-amount span');
                if (coinAmount) coinAmount.textContent = this.userData.coins.toLocaleString();
                alert('提现申请已提交');
                (_document$getElementB17 = document.getElementById('withdrawModal')) === null || _document$getElementB17 === void 0 || _document$getElementB17.remove();
              } else {
                this.showError((response === null || response === void 0 ? void 0 : response.error) || '提现失败');
              }
              _context12.n = 6;
              break;
            case 5:
              _context12.p = 5;
              _t12 = _context12.v;
              console.error('Withdraw failed:', _t12);
              this.showError('网络错误，请重试');
            case 6:
              _context12.p = 6;
              this.hideLoading();
              return _context12.f(6);
            case 7:
              return _context12.a(2);
          }
        }, _callee12, this, [[3, 5, 6, 7]]);
      }));
      function handleWithdraw() {
        return _handleWithdraw.apply(this, arguments);
      }
      return handleWithdraw;
    }()
  }, {
    key: "showPlaybackSettings",
    value: function showPlaybackSettings() {
      alert('功能开发中');
    }
  }, {
    key: "showPrivacySettings",
    value: function showPrivacySettings() {
      alert('功能开发中');
    }
  }, {
    key: "showHelp",
    value: function showHelp() {
      window.open('https://help.globalshorts.com', '_blank');
    }
  }, {
    key: "saveNotificationSetting",
    value: function () {
      var _saveNotificationSetting = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(enabled) {
        var _t13;
        return _regenerator().w(function (_context13) {
          while (1) switch (_context13.p = _context13.n) {
            case 0:
              _context13.p = 0;
              _context13.n = 1;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_1__.api.user.updateProfile(this.userData.id, {
                notifications: enabled
              });
            case 1:
              console.log('Notification setting saved:', enabled);
              _context13.n = 3;
              break;
            case 2:
              _context13.p = 2;
              _t13 = _context13.v;
              console.error('Failed to save notification setting:', _t13);
            case 3:
              return _context13.a(2);
          }
        }, _callee13, this, [[0, 2]]);
      }));
      function saveNotificationSetting(_x) {
        return _saveNotificationSetting.apply(this, arguments);
      }
      return saveNotificationSetting;
    }()
  }, {
    key: "handleLogout",
    value: function handleLogout() {
      if (confirm('确定要退出登录吗？')) {
        _core_auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].logout();
        window.location.href = '/';
      }
    }
  }, {
    key: "scrollToSettings",
    value: function scrollToSettings() {
      var _document$querySelect2;
      var section = (_document$querySelect2 = document.querySelector('.settings-list')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.closest('.profile-section');
      if (!section) return;
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, {
    key: "showToast",
    value: function showToast(message) {
      var event = new CustomEvent('showToast', {
        detail: {
          message: message,
          type: 'success'
        }
      });
      document.dispatchEvent(event);
    }
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
  }, {
    key: "showLoading",
    value: function showLoading() {
      var loading = document.getElementById('pageLoading');
      if (loading) loading.classList.add('show');
    }
  }, {
    key: "hideLoading",
    value: function hideLoading() {
      var loading = document.getElementById('pageLoading');
      if (loading) loading.classList.remove('show');
    }
  }]);
}();

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>]/g, function (m) {
    if (m === '&') return '&amp;';
    if (m === '<') return '&lt;';
    if (m === '>') return '&gt;';
    return m;
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    window.profilePage = new ProfilePage();
  });
} else {
  window.profilePage = new ProfilePage();
}
function isTruthyVipFlag(value) {
  return value === true || value === 1 || value === '1';
}
/******/ })()
;