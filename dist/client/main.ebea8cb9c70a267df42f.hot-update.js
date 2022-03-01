webpackHotUpdate("main",{

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst ProfilePhoto_1 = __webpack_require__(/*! ../ProfilePhoto */ \"./src/shared/ProfilePhoto/index.ts\");\r\nconst UserBlock_1 = __webpack_require__(/*! ../UserBlock */ \"./src/shared/UserBlock/index.ts\");\r\nconst header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nconst Notifications_1 = __webpack_require__(/*! ./Notifications */ \"./src/shared/Header/Notifications/index.ts\");\r\nconst SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/index.ts\");\r\n__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module ';;'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\r\n        react_1.default.createElement(ProfilePhoto_1.ProfilePhoto, null),\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\r\n        react_1.default.createElement(Notifications_1.Notifications, null),\r\n        react_1.default.createElement(UserBlock_1.UserBlock, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ })

})