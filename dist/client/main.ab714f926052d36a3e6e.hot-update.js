webpackHotUpdate("main",{

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nconst actions_1 = __webpack_require__(/*! ../store/ME/actions */ \"./src/store/ME/actions.ts\");\r\nfunction useUserData() {\r\n    const [data, setData] = react_1.useState({});\r\n    const token = react_redux_1.useSelector(state => state.token);\r\n    if (!token)\r\n        return;\r\n    const dispatch = react_redux_1.useDispatch();\r\n    react_1.useEffect(() => {\r\n        dispatch(actions_1.meRequestAC);\r\n        axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n            headers: { Authorization: `bearer ${token}` }\r\n        })\r\n            .then((response) => {\r\n            const userData = response.data;\r\n            const myUserData = { name: userData.name, userIcon: userData.icon_img };\r\n            setData(myUserData);\r\n            dispatch(actions_1.meRequestSuccessAC(myUserData));\r\n        })\r\n            .catch((error) => {\r\n            dispatch(actions_1.meRequestFailAC(error));\r\n        });\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/store/ME/actions.ts":
/*!*********************************!*\
  !*** ./src/store/ME/actions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meRequestSuccessAC = exports.meRequestFailureAC = exports.meRequestAC = exports.ME_REQUEST_SUCCESS = exports.ME_REQUEST = void 0;\r\nexports.ME_REQUEST = 'ME_REQUEST';\r\nexports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\r\neconst;\r\nME_REQUEST_FAILURE = 'ME_REQUEST_FAILURE';\r\nconst meRequestAC = (data) => ({\r\n    type: exports.ME_REQUEST,\r\n    data\r\n});\r\nexports.meRequestAC = meRequestAC;\r\nconst meRequestFailureAC = (error) => ({\r\n    type: ME_REQUEST_FAILURE,\r\n    error\r\n});\r\nexports.meRequestFailureAC = meRequestFailureAC;\r\nconst meRequestSuccessAC = (data) => ({\r\n    type: exports.ME_REQUEST_SUCCESS,\r\n    data\r\n});\r\nexports.meRequestSuccessAC = meRequestSuccessAC;\r\n\n\n//# sourceURL=webpack:///./src/store/ME/actions.ts?");

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = exports.setToken = exports.updateComment = void 0;\r\nconst actions_1 = __webpack_require__(/*! ./ME/actions */ \"./src/store/ME/actions.ts\");\r\nconst UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nconst SET_TOKEN = 'SET_TOKEN';\r\nconst initialState = {\r\n    commentState: 'Hello',\r\n    token: ''\r\n};\r\nconst updateComment = (text) => ({\r\n    type: 'UPDATE_COMMENT',\r\n    text\r\n});\r\nexports.updateComment = updateComment;\r\nconst setToken = (token) => ({\r\n    type: 'SET_TOKEN',\r\n    token\r\n});\r\nexports.setToken = setToken;\r\nconst rootReducer = (state = initialState, action) => {\r\n    switch (action.type) {\r\n        case 'UPDATE_COMMENT':\r\n            return Object.assign(Object.assign({}, state), { commentState: action.text });\r\n        case 'SET_TOKEN':\r\n            return Object.assign(Object.assign({}, state), { token: action.token });\r\n        case actions_1.ME_REQUEST:\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.rootReducer = rootReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/store.ts?");

/***/ })

})