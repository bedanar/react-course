webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nconst Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nconst Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nconst Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nconst CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\r\nconst Dropdown_1 = __webpack_require__(/*! ./shared/Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nconst useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\r\nconst context_1 = __webpack_require__(/*! ./shared/Context/context */ \"./src/shared/Context/context.ts\");\r\nconst userContext_1 = __webpack_require__(/*! ./shared/Context/userContext */ \"./src/shared/Context/userContext.tsx\");\r\nconst commentContext_1 = __webpack_require__(/*! ./shared/Context/commentContext */ \"./src/shared/Context/commentContext.ts\");\r\nconst redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nconst redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\r\nconst store_1 = __webpack_require__(/*! ./store/store */ \"./src/store/store.ts\");\r\nconst redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\"));\r\nconst timeout = () => (dispatch, getState) => {\r\n    dispatch({ type: 'ACTION_START' });\r\n};\r\nconst store = redux_1.createStore(store_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));\r\nfunction AppComponent() {\r\n    const [token] = useToken_1.useToken();\r\n    const [commentValue, setCommentValue] = react_1.useState('');\r\n    const CommentProvider = commentContext_1.commentContext.Provider;\r\n    const TokenProvider = context_1.tokenContext.Provider;\r\n    react_1.useEffect(() => {\r\n        const token = localStorage.getItem('token') || window.__token__;\r\n        store.dispatch(store_1.setToken(token));\r\n        if (token) {\r\n            localStorage.setItem('token', token);\r\n        }\r\n    });\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n        react_1.default.createElement(CommentProvider, { value: {\r\n                value: commentValue,\r\n                onChange: setCommentValue\r\n            } },\r\n            react_1.default.createElement(userContext_1.UserContextProvier, null,\r\n                react_1.default.createElement(Layout_1.Layout, null,\r\n                    react_1.default.createElement(Header_1.Header, null),\r\n                    react_1.default.createElement(Content_1.Content, null,\r\n                        react_1.default.createElement(CardsList_1.CardsList, null),\r\n                        react_1.default.createElement(Dropdown_1.Dropdown, { onOpen: () => console.log('opened'), onClose: () => console.log('closed'), isOpen: false, button: react_1.default.createElement(\"button\", null, \"Test\") },\r\n                            react_1.default.createElement(\"ul\", null,\r\n                                react_1.default.createElement(\"li\", null, \"i\")))))))));\r\n}\r\nexports.App = root_1.hot(() => react_1.default.createElement(AppComponent, null));\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\r\nconst App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nwindow.addEventListener('load', () => {\r\n    react_dom_1.default.hydrate(react_1.default.createElement(App_1.App, null), document.getElementById('root'));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/index.jsx?");

/***/ }),

/***/ "./src/shared/CommentForm/CommentFormContainer/CommentFormContainer.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/CommentForm/CommentFormContainer/CommentFormContainer.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentFormContainer = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nconst store_1 = __webpack_require__(/*! ../../../store/store */ \"./src/store/store.ts\");\r\nconst CommentForm_1 = __webpack_require__(/*! ../CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\");\r\nfunction CommentFormContainer() {\r\n    const value = react_redux_1.useSelector(state => state.commentState);\r\n    const dispatch = react_redux_1.useDispatch();\r\n    const handleChange = (event) => {\r\n        dispatch(store_1.updateComment(event.target.value));\r\n    };\r\n    const handleSubmit = (event) => {\r\n        event.preventDefault();\r\n    };\r\n    return (react_1.default.createElement(CommentForm_1.CommentForm, { value: value, onChange: handleChange, onSubmit: handleSubmit }));\r\n}\r\nexports.CommentFormContainer = CommentFormContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentFormContainer/CommentFormContainer.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/CommentFormContainer/index.ts":
/*!**************************************************************!*\
  !*** ./src/shared/CommentForm/CommentFormContainer/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst CommentFormContainer_1 = __webpack_require__(/*! ./CommentFormContainer */ \"./src/shared/CommentForm/CommentFormContainer/CommentFormContainer.tsx\");\r\nexports.default = CommentFormContainer_1.CommentFormContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentFormContainer/index.ts?");

/***/ }),

/***/ "./src/shared/Context/userContext.tsx":
/*!********************************************!*\
  !*** ./src/shared/Context/userContext.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserContextProvier = exports.userContext = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst useUserData_1 = __webpack_require__(/*! ../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nexports.userContext = react_1.createContext({});\r\nfunction UserContextProvier({ children }) {\r\n    const [data] = useUserData_1.useUserData();\r\n    return (react_1.default.createElement(exports.userContext.Provider, { value: data }, children));\r\n}\r\nexports.UserContextProvier = UserContextProvier;\r\n\n\n//# sourceURL=webpack:///./src/shared/Context/userContext.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\r\nconst UserBlock_1 = __webpack_require__(/*! ../../UserBlock */ \"./src/shared/UserBlock/index.ts\");\r\nconst userContext_1 = __webpack_require__(/*! ../../Context/userContext */ \"./src/shared/Context/userContext.tsx\");\r\nfunction SearchBlock() {\r\n    const { userIcon, name } = react_1.useContext(userContext_1.userContext);\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.search },\r\n        react_1.default.createElement(\"button\", { className: searchblock_css_1.default.search__btn },\r\n            react_1.default.createElement(\"svg\", { width: \"11\", height: \"11\", viewBox: \"0 0 11 11\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M7.86164 6.91824H7.36478L7.18868 6.74843C7.80503 6.03145 8.1761 5.10063 8.1761 4.08805C8.1761 1.83019 6.34591 0 4.08805 0C1.83019 0 0 1.83019 0 4.08805C0 6.34591 1.83019 8.1761 4.08805 8.1761C5.10063 8.1761 6.03145 7.80503 6.74843 7.18868L6.91824 7.36478V7.86164L10.0629 11L11 10.0629L7.86164 6.91824ZM4.08805 6.91824C2.52201 6.91824 1.25786 5.65409 1.25786 4.08805C1.25786 2.52201 2.52201 1.25786 4.08805 1.25786C5.65409 1.25786 6.91824 2.52201 6.91824 4.08805C6.91824 5.65409 5.65409 6.91824 4.08805 6.91824Z\", fill: \"#C4C4C4\" }))),\r\n        react_1.default.createElement(\"input\", { type: \"search\", className: searchblock_css_1.default.search__input, placeholder: '\\u041F\\u043E\\u0438\\u0441\\u043A' }),\r\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: userIcon, username: name })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/store.ts":
false

})