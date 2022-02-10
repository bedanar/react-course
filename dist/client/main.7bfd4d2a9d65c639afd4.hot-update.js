webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nconst Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nconst Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nconst Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nconst CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\r\nconst Dropdown_1 = __webpack_require__(/*! ./shared/Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nconst useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\r\nconst context_1 = __webpack_require__(/*! ./shared/Context/context */ \"./src/shared/Context/context.ts\");\r\nconst userContext_1 = __webpack_require__(/*! ./shared/Context/userContext */ \"./src/shared/Context/userContext.tsx\");\r\n// const LIST = [\r\n//     {value: 'some'},\r\n//     {value: 'food'},\r\n//     {value: 'function'}\r\n// ].map(generateId)\r\nfunction AppComponent() {\r\n    const [token] = useToken_1.useToken();\r\n    const [commentVa, setValue] = react_1.useState('');\r\n    // const [isVisible, setIsVisible] = React.useState(false);\r\n    // const [title, setTitle] = React.useState('')\r\n    // const [isVisible] = useIsMounted()\r\n    // const handleItemClick = (id: string) => {\r\n    //     setList(list.filter((item) => item.id !== id))\r\n    // }\r\n    // const handleAdd = () => {\r\n    //     setList(list.concat(generateId({text: generateRandomString()})))\r\n    // }\r\n    // const [list, setList] = useState(LIST)\r\n    return (react_1.default.createElement(context_1.tokenContext.Provider, { value: token },\r\n        react_1.default.createElement(userContext_1.UserContextProvier, null,\r\n            react_1.default.createElement(Layout_1.Layout, null,\r\n                react_1.default.createElement(Header_1.Header, null),\r\n                react_1.default.createElement(Content_1.Content, null,\r\n                    react_1.default.createElement(CardsList_1.CardsList, null),\r\n                    react_1.default.createElement(Dropdown_1.Dropdown, { onOpen: () => console.log('opened'), onClose: () => console.log('closed'), isOpen: false, button: react_1.default.createElement(\"button\", null, \"Test\") },\r\n                        react_1.default.createElement(\"ul\", null,\r\n                            react_1.default.createElement(\"li\", null, \"i\"))))))));\r\n}\r\nexports.App = root_1.hot(() => react_1.default.createElement(AppComponent, null));\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\r\nconst App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nwindow.addEventListener('load', () => {\r\n    react_dom_1.default.hydrate(react_1.default.createElement(App_1.App, null), document.getElementById('root'));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/index.jsx?");

/***/ })

})