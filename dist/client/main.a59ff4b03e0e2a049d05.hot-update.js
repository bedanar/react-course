webpackHotUpdate("main",{

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nconst actions_1 = __webpack_require__(/*! ../store/ME/actions */ \"./src/store/ME/actions.ts\");\r\nfunction useUserData() {\r\n    const [data, setData] = react_1.useState({});\r\n    const token = react_redux_1.useSelector(state => state.token);\r\n    if (!token)\r\n        return;\r\n    const dispatch = react_redux_1.useDispatch();\r\n    react_1.useEffect(() => {\r\n        dispatch(actions_1.meRequestAC);\r\n        axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n            headers: { Authorization: `bearer ${token}` }\r\n        })\r\n            .then((response) => {\r\n            const userData = response.data;\r\n            const myUserData = { name: userData.name, userIcon: userData.icon_img };\r\n            setData(myUserData);\r\n            dispatch(actions_1.meRequestSuccessAC(myUserData));\r\n        })\r\n            .catch(() => {\r\n            dispatch(actions_1.meRequestFailAC);\r\n        });\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/store/ME/actions.ts":
/*!*********************************!*\
  !*** ./src/store/ME/actions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meRequestSuccessAC = exports.meRequestFailureAC = exports.meRequestAC = exports.ME_REQUEST = void 0;\r\nexports.ME_REQUEST = 'ME_REQUEST';\r\nconst ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\r\nconst ME_REQUEST_FAILURE = 'ME_REQUEST_FAILURE';\r\nconst meRequestAC = (data) => ({\r\n    type: exports.ME_REQUEST,\r\n    data\r\n});\r\nexports.meRequestAC = meRequestAC;\r\nconst meRequestFailureAC = (error) => ({\r\n    type: ME_REQUEST_FAILURE,\r\n    data\r\n});\r\nexports.meRequestFailureAC = meRequestFailureAC;\r\nconst meRequestSuccessAC = (data) => ({\r\n    type: ME_REQUEST_SUCCESS,\r\n    data\r\n});\r\nexports.meRequestSuccessAC = meRequestSuccessAC;\r\n\n\n//# sourceURL=webpack:///./src/store/ME/actions.ts?");

/***/ })

})