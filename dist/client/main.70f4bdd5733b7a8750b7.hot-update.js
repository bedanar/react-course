webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nconst Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nconst Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nconst Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nconst CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\r\nconst Dropdown_1 = __webpack_require__(/*! ./shared/Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\n// const LIST = [\r\n//     {value: 'some'},\r\n//     {value: 'food'},\r\n//     {value: 'function'}\r\n// ].map(generateId)\r\nfunction AppComponent() {\r\n    // const [isVisible, setIsVisible] = React.useState(false);\r\n    // const [title, setTitle] = React.useState('')\r\n    // const [isVisible] = useIsMounted()\r\n    // const handleItemClick = (id: string) => {\r\n    //     setList(list.filter((item) => item.id !== id))\r\n    // }\r\n    // const handleAdd = () => {\r\n    //     setList(list.concat(generateId({text: generateRandomString()})))\r\n    // }\r\n    // const [list, setList] = useState(LIST)\r\n    return (react_1.default.createElement(Layout_1.Layout, null,\r\n        react_1.default.createElement(Header_1.Header, null),\r\n        react_1.default.createElement(Content_1.Content, null,\r\n            react_1.default.createElement(CardsList_1.CardsList, null),\r\n            react_1.default.createElement(Dropdown_1.Dropdown, { isOpen: true, button: react_1.default.createElement(\"button\", null, \"Test\") },\r\n                react_1.default.createElement(\"ul\", null,\r\n                    react_1.default.createElement(\"li\", null, \"i\"))))));\r\n}\r\nexports.App = root_1.hot(() => react_1.default.createElement(AppComponent, null));\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

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