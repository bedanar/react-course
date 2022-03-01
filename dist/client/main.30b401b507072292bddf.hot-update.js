webpackHotUpdate("main",{

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nfunction useUserData() {\r\n    const [data, setData] = react_1.useState({});\r\n    const token = react_redux_1.useSelector(state => state.token);\r\n    if (!token)\r\n        return;\r\n    const dispatch = react_redux_1.useDispatch();\r\n    react_1.useEffect(() => {\r\n        dispatch({ type: 'ME_REQUEST' });\r\n        axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n            headers: { Authorization: `bearer ${token}` }\r\n        })\r\n            .then((response) => {\r\n            const userData = response.data;\r\n            setData({ name: userData.name, userIcon: userData.icon_img });\r\n            dispatch({ type: 'ME_REQUEST_SUCCESS' });\r\n        })\r\n            .catch(() => {\r\n            dispatch({ type: 'ME_REQUEST_FAILURE' });\r\n        });\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

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

/***/ })

})