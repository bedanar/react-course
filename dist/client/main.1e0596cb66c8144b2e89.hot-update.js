webpackHotUpdate("main",{

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst ProfilePhoto_1 = __webpack_require__(/*! ../ProfilePhoto */ \"./src/shared/ProfilePhoto/index.ts\");\r\nconst UserBlock_1 = __webpack_require__(/*! ../UserBlock */ \"./src/shared/UserBlock/index.ts\");\r\nconst header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nconst Notifications_1 = __webpack_require__(/*! ./Notifications */ \"./src/shared/Header/Notifications/index.ts\");\r\nconst SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/index.ts\");\r\n__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './main.global.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\r\n        react_1.default.createElement(ProfilePhoto_1.ProfilePhoto, null),\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\r\n        react_1.default.createElement(Notifications_1.Notifications, null),\r\n        react_1.default.createElement(UserBlock_1.UserBlock, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ })

})