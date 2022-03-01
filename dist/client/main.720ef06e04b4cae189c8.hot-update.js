webpackHotUpdate("main",{

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = exports.setToken = exports.updateComment = void 0;\r\nconst actions_1 = __webpack_require__(/*! ./ME/actions */ \"./src/store/ME/actions.ts\");\r\nconst UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nconst SET_TOKEN = 'SET_TOKEN';\r\nconst initialState = {\r\n    commentState: 'Hello',\r\n    token: ''\r\n};\r\nconst updateComment = (text) => ({\r\n    type: 'UPDATE_COMMENT',\r\n    text\r\n});\r\nexports.updateComment = updateComment;\r\nconst setToken = (token) => ({\r\n    type: 'SET_TOKEN',\r\n    token\r\n});\r\nexports.setToken = setToken;\r\nconst rootReducer = (state = initialState, action) => {\r\n    switch (action.type) {\r\n        case 'UPDATE_COMMENT':\r\n            return Object.assign(Object.assign({}, state), { commentState: action.text });\r\n        case 'SET_TOKEN':\r\n            return Object.assign(Object.assign({}, state), { token: action.token });\r\n        case actions_1.ME_REQUEST:\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n        case actions_1.ME_REQUEST_FAILURE:\r\n            return Object.assign(Object.assign({}, state), { me: meReducer(state.me, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.rootReducer = rootReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/store.ts?");

/***/ })

})