webpackHotUpdate("main",{

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Post = void 0;\r\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nfunction Post() {\r\n    const ref = react_1.useRef(null);\r\n    react_1.useEffect(() => {\r\n        const handleClick = (event) => {\r\n            var _a;\r\n            if (event.target)\r\n                (_a = instanceref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target);\r\n        };\r\n    });\r\n    console.log('click');\r\n}\r\nexports.Post = Post;\r\ndocument.addEventListener('click', handleClick);\r\nreturn () => {\r\n    document.removeEventListener('click', handleClick);\r\n};\r\n[];\r\nconst node = document.querySelector('#modal_root');\r\nif (!node)\r\n    return null;\r\nreturn react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: post_css_1.default.modal, ref: ref },\r\n    react_1.default.createElement(\"h2\", null, \"Title\"),\r\n    react_1.default.createElement(\"div\", { className: post_css_1.default.content },\r\n        react_1.default.createElement(\"p\", null, \"sfidhifhsfisd\"),\r\n        react_1.default.createElement(\"p\", null, \"sslnfdsvbskbvbs\"),\r\n        react_1.default.createElement(\"p\", null, \"sldnsldnvsndn\")))), node);\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/Post/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Post/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Post */ \"./src/shared/Post/Post.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/index.ts?");

/***/ })

})