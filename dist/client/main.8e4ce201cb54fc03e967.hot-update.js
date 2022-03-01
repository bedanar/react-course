webpackHotUpdate("main",{

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = exports.setToken = exports.updateComment = void 0;\r\nconst UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nconst SET_TOKEN = 'SET_TOKEN';\r\nconst initialState = {\r\n    commentState: 'Hello',\r\n    token: ''\r\n};\r\nconst updateComment = (text) => ({\r\n    type: 'UPDATE_COMMENT',\r\n    text\r\n});\r\nexports.updateComment = updateComment;\r\nconst setToken = (token) => ({\r\n    type: 'SET_TOKEN',\r\n    token\r\n});\r\nexports.setToken = setToken;\r\nconst rootReducer = (state = initialState, action) => {\r\n    switch (action.type) {\r\n        case 'UPDATE_COMMENT':\r\n            return Object.assign(Object.assign({}, state), { commentState: action.text });\r\n        case 'SET_TOKEN':\r\n            return Object.assign(Object.assign({}, state), { token: action.token });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.rootReducer = rootReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/store.ts?");

/***/ })

})