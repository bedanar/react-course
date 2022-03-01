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

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nfunction useUserData() {\r\n    if (!token)\r\n        return;\r\n    const [data, setData] = react_1.useState({});\r\n    const token = react_redux_1.useSelector(state => state.token);\r\n    const dispatch = react_redux_1.useDispatch();\r\n    react_1.useEffect(() => {\r\n        dispatch({ type: 'ME_REQUEST' });\r\n        axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n            headers: { Authorization: `bearer ${token}` }\r\n        })\r\n            .then((response) => {\r\n            const userData = response.data;\r\n            setData({ name: userData.name, userIcon: userData.icon_img });\r\n            dispatch({ type: 'ME_REQUEST_SUCCESS' });\r\n        })\r\n            .catch(() => {\r\n            dispatch({ type: 'ME_REQUEST_FAILURE' });\r\n        });\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/CommentForm/commentform.css\"));\r\nfunction CommentForm({ value, onChange, onSubmit }) {\r\n    return (react_1.default.createElement(\"form\", { action: \"\", className: commentform_css_1.default.form, onSubmit: onSubmit },\r\n        react_1.default.createElement(\"textarea\", { name: \"\", id: \"\", className: commentform_css_1.default.input, value: value, onChange: onChange }),\r\n        react_1.default.createElement(\"button\", { className: commentform_css_1.default.submitBtn, type: \"submit\" }, \"Comment\")));\r\n}\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

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

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (5:6)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n| exports.rootReducer = exports.setToken = exports.updateComment = void 0;\\n| const UPDATE_COMMENT = 'UPDATE_COMMENT';\\n> const ;\\n| const initialState = {\\n|     commentState: 'Hello',\");\n\n//# sourceURL=webpack:///./src/store/store.ts?");

/***/ })

})