webpackHotUpdate("main",{

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nconst actions_1 = __webpack_require__(/*! ../store/ME/actions */ \"./src/store/ME/actions.ts\");\r\nfunction useUserData() {\r\n    const [data, setData] = react_1.useState({});\r\n    const token = react_redux_1.useSelector(state => state.token);\r\n    if (!token)\r\n        return;\r\n    const dispatch = react_redux_1.useDispatch();\r\n    react_1.useEffect(() => {\r\n        dispatch(actions_1.meRequestAC);\r\n        axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n            headers: { Authorization: `bearer ${token}` }\r\n        })\r\n            .then((response) => {\r\n            const userData = response.data;\r\n            setData({ name: userData.name, userIcon: userData.icon_img });\r\n            dispatch({ type: 'ME_REQUEST_SUCCESS' });\r\n        })\r\n            .catch(() => {\r\n            dispatch({ type: 'ME_REQUEST_FAILURE' });\r\n        });\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/store/ME/actions.ts":
/*!*********************************!*\
  !*** ./src/store/ME/actions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Identifier 'meRequestAC' has already been declared (11:6)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n| });\\n| exports.meRequestAC = meRequestAC;\\n> const meRequestAC = () => ({\\n|     type: exports.ME_REQUEST\\n| });\");\n\n//# sourceURL=webpack:///./src/store/ME/actions.ts?");

/***/ })

})