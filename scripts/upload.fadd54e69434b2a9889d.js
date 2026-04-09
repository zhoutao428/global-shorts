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

/***/ 674
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
___CSS_LOADER_EXPORT___.push([module.id, `/* upload.css - 发布页面样式 */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: var(--dark, #121212);
    color: var(--light, #F5F5F5);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.upload-container {
    max-width: 600px;
    margin: 0 auto;
    min-height: 100vh;
    background: var(--light-dark, #1E1E1E);
}

/* 顶部导航 */
.upload-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background: var(--light-dark, #1E1E1E);
    border-bottom: 1px solid rgba(255,255,255,0.1);
    position: sticky;
    top: 0;
    z-index: 10;
}

.back-btn {
    background: none;
    border: none;
    color: var(--light, #F5F5F5);
    font-size: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.back-btn:hover {
    background: rgba(255,255,255,0.1);
}

.header-actions {
    display: flex;
    gap: 12px;
}

.draft-btn, .publish-btn {
    padding: 8px 16px;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.2s;
}

.draft-btn {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    color: var(--light);
}

.draft-btn:hover {
    background: rgba(255,255,255,0.2);
}

.publish-btn {
    background: #FF385C;
    border: none;
    color: white;
}

.publish-btn:hover:not(:disabled) {
    background: #E0314F;
    transform: translateY(-2px);
}

.publish-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* 视频预览区 */
.video-preview-area {
    background: #000;
    min-height: 300px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.video-placeholder {
    text-align: center;
    padding: 60px 20px;
    color: var(--gray, #888);
}

.video-placeholder i {
    font-size: 64px;
    margin-bottom: 16px;
    opacity: 0.5;
}

.video-placeholder p {
    font-size: 16px;
    margin-bottom: 8px;
}

.video-tip {
    font-size: 12px;
    opacity: 0.6;
}

.video-preview {
    width: 100%;
    max-height: 400px;
    background: #000;
}

.rechoose-video-btn {
    position: absolute;
    bottom: 16px;
    right: 16px;
    background: rgba(0,0,0,0.6);
    border: none;
    color: white;
    padding: 8px 12px;
    border-radius: 20px;
    font-size: 12px;
    cursor: pointer;
    backdrop-filter: blur(4px);
}

/* 选择视频按钮 */
.select-video-section {
    padding: 20px;
}

.select-video-btn {
    width: 100%;
    padding: 16px;
    background: rgba(255,56,92,0.1);
    border: 1px dashed #FF385C;
    border-radius: 12px;
    color: #FF385C;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s;
}

.select-video-btn:hover {
    background: rgba(255,56,92,0.2);
}

/* 表单区域 */
.form-section {
    padding: 0 16px 30px;
}

.form-item {
    margin-bottom: 24px;
}

.form-label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
}

.form-label i {
    color: #FF385C;
    width: 20px;
}

.required {
    color: #FF385C;
}

.optional {
    color: var(--gray, #888);
    font-weight: normal;
    font-size: 12px;
}

.form-input, .form-textarea {
    width: 100%;
    padding: 14px;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    color: var(--light);
    font-size: 15px;
    transition: all 0.2s;
}

.form-input:focus, .form-textarea:focus {
    outline: none;
    border-color: #FF385C;
    background: rgba(255,56,92,0.05);
}

.input-wrapper {
    position: relative;
}

.input-actions {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    gap: 8px;
}

.ai-btn {
    background: none;
    border: none;
    color: #FF385C;
    font-size: 16px;
    cursor: pointer;
    padding: 4px;
}

.char-count {
    font-size: 12px;
    color: var(--gray);
    text-align: right;
    margin-top: 6px;
}

/* AI 建议弹窗 */
.ai-suggestions {
    margin-top: 12px;
    background: rgba(255,255,255,0.05);
    border-radius: 12px;
    overflow: hidden;
}

.suggestions-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    background: rgba(255,56,92,0.1);
    font-size: 13px;
}

.suggestions-header i {
    color: #FF385C;
}

.close-suggestions {
    background: none;
    border: none;
    color: var(--gray);
    cursor: pointer;
}

.suggestions-list {
    padding: 8px;
}

.suggestion-item {
    padding: 10px 12px;
    background: rgba(255,255,255,0.03);
    border-radius: 8px;
    margin-bottom: 8px;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 14px;
}

.suggestion-item:hover {
    background: rgba(255,56,92,0.1);
}

/* 封面设置 */
.cover-area {
    display: flex;
    gap: 16px;
    align-items: center;
}

.cover-preview {
    width: 100px;
    height: 140px;
    border-radius: 10px;
    background: rgba(255,255,255,0.05);
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
}

.cover-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.2s;
    cursor: pointer;
}

.cover-preview:hover .cover-overlay {
    opacity: 1;
}

.cover-overlay i {
    font-size: 24px;
    margin-bottom: 4px;
}

.cover-overlay span {
    font-size: 11px;
}

.cover-options {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.cover-option-btn {
    padding: 10px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px;
    color: var(--light);
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s;
}

.cover-option-btn:hover {
    background: rgba(255,56,92,0.1);
    border-color: #FF385C;
}

/* 分类选择器 */
.category-selector {
    position: relative;
}

.category-placeholder {
    padding: 14px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.category-placeholder::after {
    content: '\\f078';
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
    font-size: 12px;
    color: var(--gray);
}

.category-options {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--light-dark);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    margin-top: 8px;
    z-index: 10;
    display: none;
}

.category-options.show {
    display: block;
}

.category-option {
    padding: 12px 16px;
    cursor: pointer;
    transition: background 0.2s;
}

.category-option:hover {
    background: rgba(255,56,92,0.1);
}

.category-option.selected {
    color: #FF385C;
    font-weight: 600;
}

/* 标签区域 */
.tags-area {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 12px;
}

.tags-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 12px;
    min-height: 36px;
}

.tag-item {
    background: rgba(255,56,92,0.15);
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 6px;
}

.tag-item i {
    cursor: pointer;
    font-size: 10px;
    opacity: 0.7;
}

.tag-item i:hover {
    opacity: 1;
}

.tag-input-wrapper {
    display: flex;
    gap: 8px;
}

.tag-input {
    flex: 1;
    padding: 10px;
    background: rgba(255,255,255,0.03);
    border: none;
    border-radius: 20px;
    color: var(--light);
    font-size: 14px;
}

.tag-input:focus {
    outline: none;
    background: rgba(255,255,255,0.08);
}

.ai-tag-btn {
    background: none;
    border: none;
    color: #FF385C;
    font-size: 18px;
    cursor: pointer;
    padding: 0 10px;
}

.ai-tag-suggestions {
    margin-top: 12px;
    padding-top: 8px;
    border-top: 1px solid rgba(255,255,255,0.05);
}

/* 可见性选项 */
.visibility-options {
    display: flex;
    gap: 20px;
}

.visibility-option {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
}

.visibility-option input {
    display: none;
}

.visibility-option span {
    font-size: 14px;
    color: var(--gray);
    transition: color 0.2s;
}

.visibility-option input:checked + span {
    color: #FF385C;
}

/* 用户协议 */
.agreement-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}

.agreement-checkbox input {
    width: 18px;
    height: 18px;
    cursor: pointer;
}

.agreement-checkbox a {
    color: #FF385C;
    text-decoration: none;
}

/* 上传进度 */
.upload-progress {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--light-dark);
    padding: 16px;
    border-top: 1px solid rgba(255,255,255,0.1);
}

.progress-bar {
    height: 4px;
    background: rgba(255,255,255,0.1);
    border-radius: 2px;
    overflow: hidden;
    margin-bottom: 8px;
}

.progress-fill {
    height: 100%;
    background: #FF385C;
    width: 0%;
    transition: width 0.3s;
}

.progress-text {
    font-size: 12px;
    color: var(--gray);
    text-align: center;
}

/* 加载遮罩 */
.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.loading-spinner {
    width: 40px;
    height: 40px;
    border: 3px solid rgba(255,56,92,0.3);
    border-top-color: #FF385C;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 16px;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* Toast 提示 */
.toast-message {
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0,0,0,0.9);
    color: white;
    padding: 10px 20px;
    border-radius: 30px;
    font-size: 14px;
    z-index: 1100;
    animation: fadeOut 2s ease-out forwards;
}

@keyframes fadeOut {
    0% { opacity: 1; transform: translateX(-50%) translateY(0); }
    70% { opacity: 1; }
    100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
}

/* 响应式 */
@media (max-width: 480px) {
    .cover-area {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .cover-options {
        width: 100%;
        flex-direction: row;
    }
    
    .cover-option-btn {
        flex: 1;
    }
    
    .visibility-options {
        flex-wrap: wrap;
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

/***/ 601
(module) {



module.exports = function (i) {
  return i[1];
};

/***/ },

/***/ 897
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_upload_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(674);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_upload_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_upload_css__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_upload_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_upload_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_upload_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_upload_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _styles_pages_upload_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(897);
/* harmony import */ var _core_auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(527);
/* harmony import */ var _core_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(225);
/* harmony import */ var _core_i18n_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93);
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
 * 发布页面逻辑
 * 支持视频上传、封面设置、AI辅助、草稿保存
 */




var UploadPage = /*#__PURE__*/function () {
  function UploadPage() {
    _classCallCheck(this, UploadPage);
    // 数据
    this.videoFile = null;
    this.videoUrl = null;
    this.coverFile = null;
    this.coverUrl = null;
    this.currentCategory = null;
    this.tags = [];
    this.isUploading = false;

    // 元素
    this.elements = {};
    this.init();
  }
  return _createClass(UploadPage, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var redirectUrl;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (_core_auth_js__WEBPACK_IMPORTED_MODULE_1__["default"].isLoggedIn()) {
                _context.n = 1;
                break;
              }
              redirectUrl = encodeURIComponent(window.location.pathname);
              window.location.href = "/pages/login.html?redirect=".concat(redirectUrl);
              return _context.a(2);
            case 1:
              _context.n = 2;
              return this.initLanguage();
            case 2:
              this.cacheElements();
              this.bindEvents();
              this.loadCategories();
              this.updatePublishButtonState();
            case 3:
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
    key: "initLanguage",
    value: function () {
      var _initLanguage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return Promise.race([_core_i18n_js__WEBPACK_IMPORTED_MODULE_3__["default"].init(), new Promise(function (_, reject) {
                return setTimeout(function () {
                  return reject(new Error('i18n timeout'));
                }, 3000);
              })]);
            case 1:
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t = _context2.v;
              console.warn('i18n init timeout', _t);
            case 3:
              _core_i18n_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateDOM();
            case 4:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }));
      function initLanguage() {
        return _initLanguage.apply(this, arguments);
      }
      return initLanguage;
    }()
  }, {
    key: "cacheElements",
    value: function cacheElements() {
      var _this = this;
      var ids = ['backBtn', 'saveDraftBtn', 'publishBtn', 'videoInput', 'selectVideoBtn', 'rechooseVideoBtn', 'videoPreview', 'videoPlaceholder', 'formSection', 'coverPreview', 'coverInput', 'autoCoverBtn', 'selectCoverBtn', 'titleInput', 'descInput', 'titleCount', 'descCount', 'aiTitleBtn', 'aiTitleSuggestions', 'titleSuggestionsList', 'categorySelector', 'categoryPlaceholder', 'categoryOptions', 'tagsList', 'tagInput', 'aiTagBtn', 'aiTagSuggestions', 'tagSuggestionsList', 'agreementCheckbox', 'uploadProgress', 'progressFill', 'progressText', 'loadingOverlay'];
      ids.forEach(function (id) {
        _this.elements[id] = document.getElementById(id);
      });
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this$elements$backBt,
        _this2 = this,
        _this$elements$select,
        _this$elements$videoI,
        _this$elements$rechoo,
        _this$elements$select2,
        _this$elements$coverI,
        _this$elements$autoCo,
        _this$elements$aiTitl,
        _this$elements$titleI,
        _this$elements$descIn,
        _this$elements$catego,
        _this$elements$tagInp,
        _this$elements$aiTagB,
        _this$elements$agreem,
        _this$elements$saveDr,
        _this$elements$publis;
      // 返回
      (_this$elements$backBt = this.elements.backBtn) === null || _this$elements$backBt === void 0 || _this$elements$backBt.addEventListener('click', function () {
        if (_this2.hasUnsavedData()) {
          if (confirm('有未保存的内容，确定要离开吗？')) {
            window.history.back();
          }
        } else {
          window.history.back();
        }
      });

      // 选择视频
      (_this$elements$select = this.elements.selectVideoBtn) === null || _this$elements$select === void 0 || _this$elements$select.addEventListener('click', function () {
        _this2.elements.videoInput.click();
      });
      (_this$elements$videoI = this.elements.videoInput) === null || _this$elements$videoI === void 0 || _this$elements$videoI.addEventListener('change', function (e) {
        _this2.handleVideoSelect(e.target.files[0]);
      });

      // 重新选择
      (_this$elements$rechoo = this.elements.rechooseVideoBtn) === null || _this$elements$rechoo === void 0 || _this$elements$rechoo.addEventListener('click', function () {
        _this2.elements.videoInput.click();
      });

      // 封面设置
      (_this$elements$select2 = this.elements.selectCoverBtn) === null || _this$elements$select2 === void 0 || _this$elements$select2.addEventListener('click', function () {
        _this2.elements.coverInput.click();
      });
      (_this$elements$coverI = this.elements.coverInput) === null || _this$elements$coverI === void 0 || _this$elements$coverI.addEventListener('change', function (e) {
        _this2.handleCoverSelect(e.target.files[0]);
      });
      (_this$elements$autoCo = this.elements.autoCoverBtn) === null || _this$elements$autoCo === void 0 || _this$elements$autoCo.addEventListener('click', function () {
        _this2.generateAICover();
      });

      // AI 标题
      (_this$elements$aiTitl = this.elements.aiTitleBtn) === null || _this$elements$aiTitl === void 0 || _this$elements$aiTitl.addEventListener('click', function () {
        _this2.generateAITitles();
      });

      // 标题输入
      (_this$elements$titleI = this.elements.titleInput) === null || _this$elements$titleI === void 0 || _this$elements$titleI.addEventListener('input', function () {
        _this2.updateTitleCount();
        _this2.updatePublishButtonState();
      });

      // 简介输入
      (_this$elements$descIn = this.elements.descInput) === null || _this$elements$descIn === void 0 || _this$elements$descIn.addEventListener('input', function () {
        _this2.updateDescCount();
      });

      // 分类
      (_this$elements$catego = this.elements.categoryPlaceholder) === null || _this$elements$catego === void 0 || _this$elements$catego.addEventListener('click', function () {
        _this2.elements.categoryOptions.classList.toggle('show');
      });

      // 标签
      (_this$elements$tagInp = this.elements.tagInput) === null || _this$elements$tagInp === void 0 || _this$elements$tagInp.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          _this2.addTag(_this2.elements.tagInput.value.trim());
        }
      });
      (_this$elements$aiTagB = this.elements.aiTagBtn) === null || _this$elements$aiTagB === void 0 || _this$elements$aiTagB.addEventListener('click', function () {
        _this2.generateAITags();
      });

      // 协议勾选
      (_this$elements$agreem = this.elements.agreementCheckbox) === null || _this$elements$agreem === void 0 || _this$elements$agreem.addEventListener('change', function () {
        _this2.updatePublishButtonState();
      });

      // 存草稿
      (_this$elements$saveDr = this.elements.saveDraftBtn) === null || _this$elements$saveDr === void 0 || _this$elements$saveDr.addEventListener('click', function () {
        _this2.saveDraft();
      });

      // 发布
      (_this$elements$publis = this.elements.publishBtn) === null || _this$elements$publis === void 0 || _this$elements$publis.addEventListener('click', function () {
        _this2.publishVideo();
      });

      // 点击其他地方关闭分类选项
      document.addEventListener('click', function (e) {
        var _this2$elements$categ;
        if (!((_this2$elements$categ = _this2.elements.categorySelector) !== null && _this2$elements$categ !== void 0 && _this2$elements$categ.contains(e.target))) {
          var _this2$elements$categ2;
          (_this2$elements$categ2 = _this2.elements.categoryOptions) === null || _this2$elements$categ2 === void 0 || _this2$elements$categ2.classList.remove('show');
        }
      });
    }

    // 检查是否有未保存数据
  }, {
    key: "hasUnsavedData",
    value: function hasUnsavedData() {
      var _this$elements$titleI2, _this$elements$descIn2;
      return this.videoFile !== null || ((_this$elements$titleI2 = this.elements.titleInput) === null || _this$elements$titleI2 === void 0 ? void 0 : _this$elements$titleI2.value) || ((_this$elements$descIn2 = this.elements.descInput) === null || _this$elements$descIn2 === void 0 ? void 0 : _this$elements$descIn2.value) || this.tags.length > 0;
    }

    // 处理视频选择
  }, {
    key: "handleVideoSelect",
    value: function handleVideoSelect(file) {
      var _this3 = this;
      if (!file) return;

      // 验证
      if (!file.type.startsWith('video/')) {
        this.showToast('请选择视频文件');
        return;
      }
      if (file.size > 200 * 1024 * 1024) {
        this.showToast('视频大小不能超过200MB');
        return;
      }

      // 检查时长
      var video = document.createElement('video');
      video.preload = 'metadata';
      video.onloadedmetadata = function () {
        URL.revokeObjectURL(video.src);
        var duration = video.duration;
        if (duration < 5) {
          _this3.showToast('视频时长不能少于5秒');
          return;
        }
        if (duration > 60) {
          _this3.showToast('视频时长不能超过60秒');
          return;
        }
        _this3.acceptVideo(file);
      };
      video.src = URL.createObjectURL(file);
    }
  }, {
    key: "acceptVideo",
    value: function acceptVideo(file) {
      this.videoFile = file;
      this.videoUrl = URL.createObjectURL(file);

      // 显示预览
      this.elements.videoPreview.src = this.videoUrl;
      this.elements.videoPreview.style.display = 'block';
      this.elements.videoPlaceholder.style.display = 'none';
      this.elements.rechooseVideoBtn.style.display = 'block';
      this.elements.formSection.style.display = 'block';
      this.elements.selectVideoBtn.style.display = 'none';

      // 自动生成封面（取第0.5秒）
      this.generateAutoCover();
    }

    // 自动生成封面
  }, {
    key: "generateAutoCover",
    value: function generateAutoCover() {
      var _this4 = this;
      var video = document.createElement('video');
      video.src = this.videoUrl;
      video.currentTime = 0.5;
      video.onloadeddata = function () {
        var canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        _this4.coverUrl = canvas.toDataURL('image/jpeg');
        _this4.elements.coverPreview.style.backgroundImage = "url(".concat(_this4.coverUrl, ")");
      };
    }

    // AI 推荐封面
  }, {
    key: "generateAICover",
    value: function generateAICover() {
      var _this5 = this;
      this.showLoading('AI 分析中...');

      // 模拟 AI 分析，选取视频中质量最好的几帧
      setTimeout(function () {
        _this5.hideLoading();
        _this5.showToast('已生成 AI 推荐封面');
        // 实际应调用后端 AI 接口
      }, 1500);
    }

    // 处理封面选择
  }, {
    key: "handleCoverSelect",
    value: function handleCoverSelect(file) {
      if (!file) return;
      if (!file.type.startsWith('image/')) {
        this.showToast('请选择图片文件');
        return;
      }
      this.coverFile = file;
      this.coverUrl = URL.createObjectURL(file);
      this.elements.coverPreview.style.backgroundImage = "url(".concat(this.coverUrl, ")");
    }

    // 更新标题字数
  }, {
    key: "updateTitleCount",
    value: function updateTitleCount() {
      var _this$elements$titleI3;
      var len = ((_this$elements$titleI3 = this.elements.titleInput) === null || _this$elements$titleI3 === void 0 ? void 0 : _this$elements$titleI3.value.length) || 0;
      this.elements.titleCount.textContent = "".concat(len, "/30");
    }

    // 更新简介字数
  }, {
    key: "updateDescCount",
    value: function updateDescCount() {
      var _this$elements$descIn3;
      var len = ((_this$elements$descIn3 = this.elements.descInput) === null || _this$elements$descIn3 === void 0 ? void 0 : _this$elements$descIn3.value.length) || 0;
      this.elements.descCount.textContent = "".concat(len, "/100");
    }

    // AI 生成标题
  }, {
    key: "generateAITitles",
    value: function () {
      var _generateAITitles = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _this6 = this;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              this.showLoading('AI 生成中...');

              // 模拟 AI 生成
              setTimeout(function () {
                _this6.hideLoading();
                var suggestions = ['💕 甜到齁的恋爱日常', '😱 这反转我没想到！', '✨ 错过会后悔的神仙短剧'];
                _this6.showAITitleSuggestions(suggestions);
              }, 1000);
            case 1:
              return _context3.a(2);
          }
        }, _callee3, this);
      }));
      function generateAITitles() {
        return _generateAITitles.apply(this, arguments);
      }
      return generateAITitles;
    }()
  }, {
    key: "showAITitleSuggestions",
    value: function showAITitleSuggestions(suggestions) {
      var _this7 = this;
      var container = this.elements.titleSuggestionsList;
      container.innerHTML = suggestions.map(function (s) {
        return "<div class=\"suggestion-item\">".concat(s, "</div>");
      }).join('');
      container.querySelectorAll('.suggestion-item').forEach(function (item) {
        item.addEventListener('click', function () {
          _this7.elements.titleInput.value = item.textContent;
          _this7.updateTitleCount();
          _this7.elements.aiTitleSuggestions.style.display = 'none';
          _this7.updatePublishButtonState();
        });
      });
      this.elements.aiTitleSuggestions.style.display = 'block';

      // 关闭按钮
      var closeBtn = this.elements.aiTitleSuggestions.querySelector('.close-suggestions');
      if (closeBtn) {
        closeBtn.onclick = function () {
          _this7.elements.aiTitleSuggestions.style.display = 'none';
        };
      }
    }

    // 加载分类
  }, {
    key: "loadCategories",
    value: function () {
      var _loadCategories = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var response, defaultCategories, _t2;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return _core_api_js__WEBPACK_IMPORTED_MODULE_2__.api.category.getList();
            case 1:
              response = _context4.v;
              if (response.success && response.data) {
                this.renderCategories(response.data);
              }
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t2 = _context4.v;
              console.error('加载分类失败', _t2);
              // 使用默认分类
              defaultCategories = [{
                id: 'sweet',
                name: '甜宠'
              }, {
                id: 'ceo',
                name: '霸道总裁'
              }, {
                id: 'sad',
                name: '虐心'
              }, {
                id: 'time',
                name: '穿越'
              }, {
                id: 'mystery',
                name: '悬疑'
              }, {
                id: 'comedy',
                name: '喜剧'
              }];
              this.renderCategories(defaultCategories);
            case 3:
              return _context4.a(2);
          }
        }, _callee4, this, [[0, 2]]);
      }));
      function loadCategories() {
        return _loadCategories.apply(this, arguments);
      }
      return loadCategories;
    }()
  }, {
    key: "renderCategories",
    value: function renderCategories(categories) {
      var _this8 = this;
      var container = this.elements.categoryOptions;
      container.innerHTML = categories.map(function (cat) {
        return "\n            <div class=\"category-option\" data-id=\"".concat(cat.id, "\">").concat(cat.name, "</div>\n        ");
      }).join('');
      container.querySelectorAll('.category-option').forEach(function (opt) {
        opt.addEventListener('click', function () {
          _this8.currentCategory = opt.dataset.id;
          _this8.elements.categoryPlaceholder.textContent = opt.textContent;
          _this8.elements.categoryOptions.classList.remove('show');
          _this8.updatePublishButtonState();

          // 高亮选中
          container.querySelectorAll('.category-option').forEach(function (o) {
            return o.classList.remove('selected');
          });
          opt.classList.add('selected');
        });
      });
    }

    // 添加标签
  }, {
    key: "addTag",
    value: function addTag(tag) {
      if (!tag) return;
      if (this.tags.length >= 5) {
        this.showToast('最多添加5个标签');
        return;
      }
      if (this.tags.includes(tag)) {
        this.showToast('标签已存在');
        return;
      }
      this.tags.push(tag);
      this.renderTags();
      this.elements.tagInput.value = '';
      this.updatePublishButtonState();
    }
  }, {
    key: "removeTag",
    value: function removeTag(index) {
      this.tags.splice(index, 1);
      this.renderTags();
      this.updatePublishButtonState();
    }
  }, {
    key: "renderTags",
    value: function renderTags() {
      var _this9 = this;
      var container = this.elements.tagsList;
      container.innerHTML = this.tags.map(function (tag, i) {
        return "\n            <div class=\"tag-item\">\n                ".concat(escapeHtml(tag), "\n                <i class=\"fas fa-times\" data-index=\"").concat(i, "\"></i>\n            </div>\n        ");
      }).join('');
      container.querySelectorAll('.fa-times').forEach(function (icon) {
        icon.addEventListener('click', function (e) {
          var index = parseInt(e.target.dataset.index);
          _this9.removeTag(index);
        });
      });
    }

    // AI 推荐标签
  }, {
    key: "generateAITags",
    value: function () {
      var _generateAITags = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var _this0 = this;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              this.showLoading('AI 分析中...');
              setTimeout(function () {
                _this0.hideLoading();
                var suggestions = ['甜宠', '霸道总裁', '短剧', '恋爱', '推荐'];
                _this0.showAITagSuggestions(suggestions);
              }, 1000);
            case 1:
              return _context5.a(2);
          }
        }, _callee5, this);
      }));
      function generateAITags() {
        return _generateAITags.apply(this, arguments);
      }
      return generateAITags;
    }()
  }, {
    key: "showAITagSuggestions",
    value: function showAITagSuggestions(suggestions) {
      var _this1 = this;
      var container = this.elements.tagSuggestionsList;
      container.innerHTML = suggestions.map(function (s) {
        return "<div class=\"suggestion-item\">".concat(s, "</div>");
      }).join('');
      container.querySelectorAll('.suggestion-item').forEach(function (item) {
        item.addEventListener('click', function () {
          _this1.addTag(item.textContent);
          _this1.elements.aiTagSuggestions.style.display = 'none';
        });
      });
      this.elements.aiTagSuggestions.style.display = 'block';
    }

    // 更新发布按钮状态
  }, {
    key: "updatePublishButtonState",
    value: function updatePublishButtonState() {
      var _this$elements$titleI4, _this$elements$agreem2;
      var hasVideo = this.videoFile !== null;
      var hasTitle = ((_this$elements$titleI4 = this.elements.titleInput) === null || _this$elements$titleI4 === void 0 ? void 0 : _this$elements$titleI4.value.trim().length) > 0;
      var hasCategory = this.currentCategory !== null;
      var agreed = (_this$elements$agreem2 = this.elements.agreementCheckbox) === null || _this$elements$agreem2 === void 0 ? void 0 : _this$elements$agreem2.checked;
      var isValid = hasVideo && hasTitle && hasCategory && agreed;
      this.elements.publishBtn.disabled = !isValid;
    }

    // 保存草稿
  }, {
    key: "saveDraft",
    value: function () {
      var _saveDraft = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var _this10 = this;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              if (this.videoFile) {
                _context6.n = 1;
                break;
              }
              this.showToast('请先选择视频');
              return _context6.a(2);
            case 1:
              this.showLoading('保存中...');

              // 模拟保存
              setTimeout(function () {
                _this10.hideLoading();
                _this10.showToast('草稿保存成功');
              }, 1000);
            case 2:
              return _context6.a(2);
          }
        }, _callee6, this);
      }));
      function saveDraft() {
        return _saveDraft.apply(this, arguments);
      }
      return saveDraft;
    }() // 发布视频
  }, {
    key: "publishVideo",
    value: function () {
      var _publishVideo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var videoUrl, coverUrl, result, _t3;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              if (!this.isUploading) {
                _context7.n = 1;
                break;
              }
              return _context7.a(2);
            case 1:
              if (this.validateForm()) {
                _context7.n = 2;
                break;
              }
              return _context7.a(2);
            case 2:
              this.isUploading = true;
              this.showUploadProgress(true);
              _context7.p = 3;
              // 1. 上传视频
              this.updateProgress(20, '上传视频中...');
              _context7.n = 4;
              return this.uploadVideo();
            case 4:
              videoUrl = _context7.v;
              // 2. 上传封面
              this.updateProgress(50, '上传封面中...');
              _context7.n = 5;
              return this.uploadCover();
            case 5:
              coverUrl = _context7.v;
              // 3. 提交数据
              this.updateProgress(80, '提交数据中...');
              _context7.n = 6;
              return this.submitVideoData(videoUrl, coverUrl);
            case 6:
              result = _context7.v;
              if (!result.success) {
                _context7.n = 7;
                break;
              }
              this.updateProgress(100, '发布成功！');
              setTimeout(function () {
                window.location.href = '/pages/profile.html?tab=works';
              }, 1000);
              _context7.n = 8;
              break;
            case 7:
              throw new Error(result.error || '发布失败');
            case 8:
              _context7.n = 10;
              break;
            case 9:
              _context7.p = 9;
              _t3 = _context7.v;
              console.error('发布失败', _t3);
              this.showToast(_t3.message || '发布失败，请重试');
              this.showUploadProgress(false);
            case 10:
              _context7.p = 10;
              this.isUploading = false;
              return _context7.f(10);
            case 11:
              return _context7.a(2);
          }
        }, _callee7, this, [[3, 9, 10, 11]]);
      }));
      function publishVideo() {
        return _publishVideo.apply(this, arguments);
      }
      return publishVideo;
    }()
  }, {
    key: "validateForm",
    value: function validateForm() {
      var _this$elements$titleI5, _this$elements$agreem3;
      if (!this.videoFile) {
        this.showToast('请选择视频');
        return false;
      }
      var title = (_this$elements$titleI5 = this.elements.titleInput) === null || _this$elements$titleI5 === void 0 ? void 0 : _this$elements$titleI5.value.trim();
      if (!title) {
        this.showToast('请输入标题');
        return false;
      }
      if (!this.currentCategory) {
        this.showToast('请选择分类');
        return false;
      }
      if (!((_this$elements$agreem3 = this.elements.agreementCheckbox) !== null && _this$elements$agreem3 !== void 0 && _this$elements$agreem3.checked)) {
        this.showToast('请同意用户协议');
        return false;
      }
      return true;
    }
  }, {
    key: "uploadVideo",
    value: function () {
      var _uploadVideo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              return _context8.a(2, new Promise(function (resolve) {
                setTimeout(function () {
                  return resolve('https://example.com/video.mp4');
                }, 1500);
              }));
          }
        }, _callee8);
      }));
      function uploadVideo() {
        return _uploadVideo.apply(this, arguments);
      }
      return uploadVideo;
    }()
  }, {
    key: "uploadCover",
    value: function () {
      var _uploadCover = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var _this11 = this;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              return _context9.a(2, new Promise(function (resolve) {
                setTimeout(function () {
                  return resolve(_this11.coverUrl || '');
                }, 500);
              }));
          }
        }, _callee9);
      }));
      function uploadCover() {
        return _uploadCover.apply(this, arguments);
      }
      return uploadCover;
    }()
  }, {
    key: "submitVideoData",
    value: function () {
      var _submitVideoData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(videoUrl, coverUrl) {
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              return _context0.a(2, new Promise(function (resolve) {
                setTimeout(function () {
                  return resolve({
                    success: true
                  });
                }, 500);
              }));
          }
        }, _callee0);
      }));
      function submitVideoData(_x, _x2) {
        return _submitVideoData.apply(this, arguments);
      }
      return submitVideoData;
    }()
  }, {
    key: "updateProgress",
    value: function updateProgress(percent, text) {
      this.elements.progressFill.style.width = "".concat(percent, "%");
      this.elements.progressText.textContent = text;
    }
  }, {
    key: "showUploadProgress",
    value: function showUploadProgress(show) {
      this.elements.uploadProgress.style.display = show ? 'block' : 'none';
    }
  }, {
    key: "showLoading",
    value: function showLoading() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '处理中...';
      var loadingText = this.elements.loadingOverlay.querySelector('p');
      if (loadingText) loadingText.textContent = text;
      this.elements.loadingOverlay.style.display = 'flex';
    }
  }, {
    key: "hideLoading",
    value: function hideLoading() {
      this.elements.loadingOverlay.style.display = 'none';
    }
  }, {
    key: "showToast",
    value: function showToast(message) {
      var toast = document.createElement('div');
      toast.className = 'toast-message';
      toast.textContent = message;
      document.body.appendChild(toast);
      setTimeout(function () {
        return toast.remove();
      }, 2000);
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

// 启动页面
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    window.uploadPage = new UploadPage();
  });
} else {
  window.uploadPage = new UploadPage();
}
/******/ })()
;