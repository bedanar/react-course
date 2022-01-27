/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/normalize.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\r\\n\\r\\n/* Document\\r\\n   ========================================================================== */\\r\\n\\r\\n/**\\r\\n * 1. Correct the line height in all browsers.\\r\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\r\\n */\\r\\n\\r\\n html {\\r\\n    line-height: 1.15; /* 1 */\\r\\n    -webkit-text-size-adjust: 100%; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /* Sections\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * Remove the margin in all browsers.\\r\\n   */\\r\\n  \\r\\n  body {\\r\\n    margin: 0;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Render the `main` element consistently in IE.\\r\\n   */\\r\\n  \\r\\n  main {\\r\\n    display: block;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Correct the font size and margin on `h1` elements within `section` and\\r\\n   * `article` contexts in Chrome, Firefox, and Safari.\\r\\n   */\\r\\n  \\r\\n  h1 {\\r\\n    font-size: 2em;\\r\\n    margin: 0.67em 0;\\r\\n  }\\r\\n  \\r\\n  /* Grouping content\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * 1. Add the correct box sizing in Firefox.\\r\\n   * 2. Show the overflow in Edge and IE.\\r\\n   */\\r\\n  \\r\\n  hr {\\r\\n    box-sizing: content-box; /* 1 */\\r\\n    height: 0; /* 1 */\\r\\n    overflow: visible; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * 1. Correct the inheritance and scaling of font size in all browsers.\\r\\n   * 2. Correct the odd `em` font sizing in all browsers.\\r\\n   */\\r\\n  \\r\\n  pre {\\r\\n    font-family: monospace, monospace; /* 1 */\\r\\n    font-size: 1em; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /* Text-level semantics\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * Remove the gray background on active links in IE 10.\\r\\n   */\\r\\n  \\r\\n  a {\\r\\n    background-color: transparent;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * 1. Remove the bottom border in Chrome 57-\\r\\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\r\\n   */\\r\\n  \\r\\n  abbr[title] {\\r\\n    border-bottom: none; /* 1 */\\r\\n    text-decoration: underline; /* 2 */\\r\\n    text-decoration: underline dotted; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Add the correct font weight in Chrome, Edge, and Safari.\\r\\n   */\\r\\n  \\r\\n  b,\\r\\n  strong {\\r\\n    font-weight: bolder;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * 1. Correct the inheritance and scaling of font size in all browsers.\\r\\n   * 2. Correct the odd `em` font sizing in all browsers.\\r\\n   */\\r\\n  \\r\\n  code,\\r\\n  kbd,\\r\\n  samp {\\r\\n    font-family: monospace, monospace; /* 1 */\\r\\n    font-size: 1em; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Add the correct font size in all browsers.\\r\\n   */\\r\\n  \\r\\n  small {\\r\\n    font-size: 80%;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Prevent `sub` and `sup` elements from affecting the line height in\\r\\n   * all browsers.\\r\\n   */\\r\\n  \\r\\n  sub,\\r\\n  sup {\\r\\n    font-size: 75%;\\r\\n    line-height: 0;\\r\\n    position: relative;\\r\\n    vertical-align: baseline;\\r\\n  }\\r\\n  \\r\\n  sub {\\r\\n    bottom: -0.25em;\\r\\n  }\\r\\n  \\r\\n  sup {\\r\\n    top: -0.5em;\\r\\n  }\\r\\n  \\r\\n  /* Embedded content\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * Remove the border on images inside links in IE 10.\\r\\n   */\\r\\n  \\r\\n  img {\\r\\n    border-style: none;\\r\\n  }\\r\\n  \\r\\n  /* Forms\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * 1. Change the font styles in all browsers.\\r\\n   * 2. Remove the margin in Firefox and Safari.\\r\\n   */\\r\\n  \\r\\n  button,\\r\\n  input,\\r\\n  optgroup,\\r\\n  select,\\r\\n  textarea {\\r\\n    font-family: inherit; /* 1 */\\r\\n    font-size: 100%; /* 1 */\\r\\n    line-height: 1.15; /* 1 */\\r\\n    margin: 0; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Show the overflow in IE.\\r\\n   * 1. Show the overflow in Edge.\\r\\n   */\\r\\n  \\r\\n  button,\\r\\n  input { /* 1 */\\r\\n    overflow: visible;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\\r\\n   * 1. Remove the inheritance of text transform in Firefox.\\r\\n   */\\r\\n  \\r\\n  button,\\r\\n  select { /* 1 */\\r\\n    text-transform: none;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Correct the inability to style clickable types in iOS and Safari.\\r\\n   */\\r\\n  \\r\\n  button,\\r\\n  [type=\\\"button\\\"],\\r\\n  [type=\\\"reset\\\"],\\r\\n  [type=\\\"submit\\\"] {\\r\\n    -webkit-appearance: button;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Remove the inner border and padding in Firefox.\\r\\n   */\\r\\n  \\r\\n  button::-moz-focus-inner,\\r\\n  [type=\\\"button\\\"]::-moz-focus-inner,\\r\\n  [type=\\\"reset\\\"]::-moz-focus-inner,\\r\\n  [type=\\\"submit\\\"]::-moz-focus-inner {\\r\\n    border-style: none;\\r\\n    padding: 0;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Restore the focus styles unset by the previous rule.\\r\\n   */\\r\\n  \\r\\n  button:-moz-focusring,\\r\\n  [type=\\\"button\\\"]:-moz-focusring,\\r\\n  [type=\\\"reset\\\"]:-moz-focusring,\\r\\n  [type=\\\"submit\\\"]:-moz-focusring {\\r\\n    outline: 1px dotted ButtonText;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Correct the padding in Firefox.\\r\\n   */\\r\\n  \\r\\n  fieldset {\\r\\n    padding: 0.35em 0.75em 0.625em;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * 1. Correct the text wrapping in Edge and IE.\\r\\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\\r\\n   * 3. Remove the padding so developers are not caught out when they zero out\\r\\n   *    `fieldset` elements in all browsers.\\r\\n   */\\r\\n  \\r\\n  legend {\\r\\n    box-sizing: border-box; /* 1 */\\r\\n    color: inherit; /* 2 */\\r\\n    display: table; /* 1 */\\r\\n    max-width: 100%; /* 1 */\\r\\n    padding: 0; /* 3 */\\r\\n    white-space: normal; /* 1 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\r\\n   */\\r\\n  \\r\\n  progress {\\r\\n    vertical-align: baseline;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Remove the default vertical scrollbar in IE 10+.\\r\\n   */\\r\\n  \\r\\n  textarea {\\r\\n    overflow: auto;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * 1. Add the correct box sizing in IE 10.\\r\\n   * 2. Remove the padding in IE 10.\\r\\n   */\\r\\n  \\r\\n  [type=\\\"checkbox\\\"],\\r\\n  [type=\\\"radio\\\"] {\\r\\n    box-sizing: border-box; /* 1 */\\r\\n    padding: 0; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Correct the cursor style of increment and decrement buttons in Chrome.\\r\\n   */\\r\\n  \\r\\n  [type=\\\"number\\\"]::-webkit-inner-spin-button,\\r\\n  [type=\\\"number\\\"]::-webkit-outer-spin-button {\\r\\n    height: auto;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * 1. Correct the odd appearance in Chrome and Safari.\\r\\n   * 2. Correct the outline style in Safari.\\r\\n   */\\r\\n  \\r\\n  [type=\\\"search\\\"] {\\r\\n    -webkit-appearance: textfield; /* 1 */\\r\\n    outline-offset: -2px; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Remove the inner padding in Chrome and Safari on macOS.\\r\\n   */\\r\\n  \\r\\n  [type=\\\"search\\\"]::-webkit-search-decoration {\\r\\n    -webkit-appearance: none;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * 1. Correct the inability to style clickable types in iOS and Safari.\\r\\n   * 2. Change font properties to `inherit` in Safari.\\r\\n   */\\r\\n  \\r\\n  ::-webkit-file-upload-button {\\r\\n    -webkit-appearance: button; /* 1 */\\r\\n    font: inherit; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /* Interactive\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /*\\r\\n   * Add the correct display in Edge, IE 10+, and Firefox.\\r\\n   */\\r\\n  \\r\\n  details {\\r\\n    display: block;\\r\\n  }\\r\\n  \\r\\n  /*\\r\\n   * Add the correct display in all browsers.\\r\\n   */\\r\\n  \\r\\n  summary {\\r\\n    display: list-item;\\r\\n  }\\r\\n  \\r\\n  /* Misc\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * Add the correct display in IE 10+.\\r\\n   */\\r\\n  \\r\\n  template {\\r\\n    display: none;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Add the correct display in IE 10.\\r\\n   */\\r\\n  \\r\\n  [hidden] {\\r\\n    display: none;\\r\\n  }\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/normalize.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nconst Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nconst Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nconst Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nconst CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\r\nconst Dropdown_1 = __webpack_require__(/*! ./shared/Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\n// const LIST = [\r\n//     {value: 'some'},\r\n//     {value: 'food'},\r\n//     {value: 'function'}\r\n// ].map(generateId)\r\nfunction AppComponent() {\r\n    // const [isVisible, setIsVisible] = React.useState(false);\r\n    // const [title, setTitle] = React.useState('')\r\n    // const [isVisible] = useIsMounted()\r\n    // const handleItemClick = (id: string) => {\r\n    //     setList(list.filter((item) => item.id !== id))\r\n    // }\r\n    // const handleAdd = () => {\r\n    //     setList(list.concat(generateId({text: generateRandomString()})))\r\n    // }\r\n    // const [list, setList] = useState(LIST)\r\n    return (react_1.default.createElement(Layout_1.Layout, null,\r\n        react_1.default.createElement(Header_1.Header, null),\r\n        react_1.default.createElement(Content_1.Content, null,\r\n            react_1.default.createElement(CardsList_1.CardsList, null),\r\n            react_1.default.createElement(Dropdown_1.Dropdown, { onOpen: () => console.log('opened'), onClose: () => console.log('closed'), isOpen: false, button: react_1.default.createElement(\"button\", null, \"Test\") },\r\n                react_1.default.createElement(\"ul\", null,\r\n                    react_1.default.createElement(\"li\", null, \"i\"))))));\r\n}\r\nexports.App = root_1.hot(() => react_1.default.createElement(AppComponent, null));\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./normalize.css */ \"./node_modules/css-loader/dist/cjs.js!./src/normalize.css\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\n// Module\nexports.push([module.i, \":root{\\r\\n    --white-color: #fff;\\r\\n    --orange-color: #CC6633;\\r\\n    --gray-color-200: #F4F4F4;\\r\\n}\\r\\n\\r\\nbody{\\r\\n    max-width: 1400px;\\r\\n    padding: 0 0;\\r\\n    margin: 0 auto;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nconst indexTemplate = (content) => `\r\n    <!DOCTYPE html>\r\n    <html lang=\"en\">\r\n    <head>\r\n        <meta charset=\"UTF-8\">\r\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n        <title>Reddit</title>\r\n    <script  src=\"/static/client.js\" type= 'application/javascript'></script></head>\r\n    <body>\r\n        <div id=\"root\">${content}</div>\r\n    </body>\r\n    </html>`;\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nconst App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nconst indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nconst app = express_1.default();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('/', (req, res) => {\r\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));\r\n});\r\napp.listen(8080, () => {\r\n    console.log('Server started on http://localhost:8080');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\r\nfunction Card() {\r\n    return (react_1.default.createElement(\"li\", { className: card_css_1.default.card },\r\n        react_1.default.createElement(\"div\", { className: card_css_1.default.textContent },\r\n            react_1.default.createElement(\"div\", { className: card_css_1.default.metaData },\r\n                react_1.default.createElement(\"div\", { className: card_css_1.default.userlink },\r\n                    react_1.default.createElement(\"img\", { src: \"\\n            data:image/jpeg;base64,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\\n            \", alt: \"\", className: card_css_1.default.avatar }),\r\n                    react_1.default.createElement(\"a\", { href: \"#user-link\" })),\r\n                react_1.default.createElement(\"span\", { className: card_css_1.default.createdAt }, \"4 hours ago\")),\r\n            react_1.default.createElement(\"h2\", { className: card_css_1.default.title },\r\n                react_1.default.createElement(\"a\", { href: \"#user-link\", className: card_css_1.default.postlink }, \"Nafisa Valieva\"))),\r\n        react_1.default.createElement(\"div\", { className: card_css_1.default.preview },\r\n            react_1.default.createElement(\"img\", { src: \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRUYGRgYGBgaGBgaGBgYGBgaGBgaGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xABBEAACAQIDBAYIAwUIAwEAAAABAgADEQQhMQUSQVEGMmFxgZEiQlKSobHB0RMU4VNigrLwFSMzQ3KiwtIHJUQk/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACcRAAICAQMEAQUBAQAAAAAAAAABAhEDEjFRBBMhQWEUMnGRoYEi/9oADAMBAAIRAxEAPwDSWpJUeUVeTI8+hPDLgMcoJAjydHEQ0V8RXRGVXZVZ8kBNixyyHPUecNqU57pK4OKwg5PfzdPtOpvJjK20auKST5KTU4P4ZlspFuyiKKX4cVpcKQGSAFYiMVkzJAYQGQ2jwzGiAG8UcxoAK8UaK8AFEY14rxAMRGj3igAwERWFFeMCIrBKyxaAyxUBXIgGWGEjKyaGRRR2WCYwFDWR3gNXUaso8RFYqLV4pS/Op7ae8v3ihaDSzRBhK0iEMS7IosK8lV5VUyQGOwowduAPjMMpzHon/ff6TqQ85PaDXx1HsVfm06hWmUN3+TaX2r8EwaEHkN429NDMn34t6Q70YtAdkrERiBKr4pBq6jxEjfaCDO5PcrH6RWgplpqcjZJXO0OSN/tH1gfn2JICDLm32ENSHTLJWCZUq4p7E3QWHsk/WC7OfXPgFH0i1BRbJjiZbj0hd2tY+sRxHK3bAd6Q6zL/ABNf5mTrHpNR3A1IHeRIziU9tfAg/KZqYqku8bqM8rDsHKJtr0gbbxPcpi1rkeh8Mv8A5pOFz3Kx+NovzXJHPgB8yJlptdANG48BxN+cBttrwQ+JAi7keR9uXBax21mQoopm7tbNgMsgTlfnLRrP7C++f+s5jae0d96bbttw31vfMHl2S2+3H4IvxMjuq35LeJ0qRuCq/wC4PBj9RBp1XZQSyi4ByTn3mYZ2xU5L5H7yD+1KgAAbQAdUcId6PyHZl8HRlWPrt4BP+shrIbdd9VGoGrAcB2zn32nU9v4L9pC+0XOtQ8PWtpnE88RrDL4OmbDjm/vv94DYVeV+8k/Mzl22i3GqffP3kLY4can+/wDWS88eB9mXJ02IwyAdResnqj21hbqDgo8hOROLXiw84Jxae0JP1C4K7L5Ow/FX2l8xGnH/AJ1Pa+BjQ+oQdhnpKrJFEqtix6qscyL2sMsuOfwka7QYi+6q66ktx8J1a0cmhmjuw/w5hHaYt6VW3Ythx7M5X/tSmBnvObnUX4m2bGJ5YopY5A42ov59DcEBRcjPg3Lvm8cel7AMfC3ztynE18b/APo/EUAWtkTlbdtnJqvSDMnfRcgMs9L9/OYrMo3+TeWJyquDrX2g2VkGZtm3YToB2c4L4p7H0lHcv3JnD1tv39dz3Aj7Sq+2QfVc95kvqYjXTs7o4oWG/V4D1gPgtpW/O0hfebezOt2+c4dtrtwQDvJMjbadQ6EDuH3kPqUWun+Tt22ogYEA6EaAcR9pHV2vcEBDmNSZw7YyodXPhYfKRtUc6u3vGQ+pkWsETt6u2H4BB33P1ld9skf5iC+vVnGFe2KwkvPIawxR1T7cB1q+X6CQPtpDq7n3pzuUIESXlkyu3FG0dsJyY+A+8hfaqn1D5gTK3o+/2SXOXI9KNJtsHgnx/SRHark33V+Mo70bei1PkelF47Uqfujw/WRHaNT2h5CVC8lw+HZzlkOZi1SY6SLmGxDtvFmJsMtMtZUbEP7bect08MyBrm9x8gZl7x5ym2krFFK2Tmo59dveMA35nzMjv2xX7ZFlUGVi3YF+2K/bAA92Nuwb9sbKIArRWg3jXgMOKBFADon6QtoHcjPIZaylU2uTovmbzMa41FvCW8PsvEVLblCq4OhVHIPiBaaPJNkKEUO20ah4gdw+8ifFOdXbzt8ptUOg+Ob/AOdlHN2VfgWv8Jp0P/G2KPXakn8TMfgLfGCjOXphcUc4x/uc88h/NKAI0AnYYTo1v4g4Nn6twXVfZAfIHym3V/8AH1CmjuXqMURmFyoF1BIyA7Jo8Un5ROuKPN3Rl1W0DfmoybzgGeo9F9j0DhqbtRp7xBu24tzusVBOWtgJMcOp7jc6R42CTpn3ZydMFVbq06h7kY/IT3lcEg6qqvcAPlHOGHAzZdKvb/hm874PEKXR/FNph6niu7/NaW6XRDGN/k7v+p0HyM9j/K9sjegRLXSw9tkPNLhHlSdBsUdfw172J+Sy0nQGtxqoPBj9p6QacbclrpsZDzzPPV6ANxxC+CH/ALSdegietXbwQD5kzuSkBqcpYMfBLzT5ONHQajxq1D7o/wCMkXoXhhqXP8QHyE6t6BkZomV2YcITyz5ObXolhh6jHvZvvJV6NYYf5QPezn6zdNI8pG1M8o+3Fel+idcuWcL0m2fTRkRKaKCN4kD0jna1zwmdRS03+k6f3q/6B/MZjFbTjyJKTo64NuKsLDWaogIuC6g30NyMp2g2TQ/Y0/cX7TjsCp/EQ2Ng63NtMxrO4FS+hm2Gq8mOa7VEP9m0f2Se4v2jjZ9MaU09xftJd+Lfm/gwtgDCIPUT3V+0L8FfYX3RCDxt6OkLyRPRX2R5CAaQ9keQk7PIi8VAQmmOQ8oDKOQ8pK7yF2gMGw5RQN6KAzhMLibWBsw4hhcT23o5j0fD0xSZCFRFKK19whR6NtRbtngSMRL+DxNiCCQw0sbHwM87FkrwzvlG9j6FFQ8VMMOvEHynmOxumLqAlZieT8f4hx7xOsobaLAFWDA6EEEec61UtjFzcdzE2KVba9YnS9T4KBO021RT8tWIYZUqh1/cM872Hi//AGFV+Zq/Fp1e2doXw9YW1puPNSJOltWmX3Irw0eT0U/vB4/Key9GMGxwlI81J82aeO0h6fn8p7d0U2jSXC0VYkEIAfMzFSlFXFWaxUJfcFUwzDhK7KROjTGUT648T+kjrpSYGzLoeIjXUtfcmD6eMvtZz++Y4N5q0NklkU3vdVJNxmSBHGw3PITRdTjfsyfTyXH7MoUlOrWgNhV9r4TRr7Idc8rd8qvhXAudOwiUs0ZbMTxSS2KjYfkZEyGTI9765Mw91iPpHvNVIxcSowtrOexXS2gjlPSZr2sAT4ZDXsm7tupuUKjDgjfEW+s8k2QC2KonniaQ8TUWZZMrjSRcMSdtndv0tpL1kdf9Suv/AAjJ0ywp1e3gx+gnpWI2nTT/ABKiJkes6jS3M9sysT0iwmf96r9iKX/lBi7svZknF7L+nmO2dp0KzhkrIAFA9I7puCTy7ZnXHqNTduADoT4AkT0DaXSbDslTcw9V7K3pDDmykKesSPRt2zx3DYN3A3ULD0sxbWwt4A2PjMMsv9vg6sLv4rk3K2JrLkwseW8v3g0tpVEN2uOXLzGUko1CEUVqZLBawLFbkl6QFK55q4JJJ0OXa9VsO1ju2t+W3lG/Zx+GfzFrnKzgWz43EjQt0zfuPZo0MJt83AOc6XB10cXU58RxnDbU2clM/iUH36J4+shPquNbcm8NdZMBtIqQQZUM0oSqXlGc8EciteGd4VEBrStgdpLUADEBvgf1ll6c7ozUlaOCcHB0yNjI2aE6GRMpjskjaRNJWSRssLGiO0UfciisZ5raIIeEO0fdnknpFnDYojJr9/3mrhNotTO9TdRfrISNxu8cD2iYbEjI8POOzjQi80jNolxTOp2Rj0Ws1R2CBt7W5ALG9sps47bdN0dFqI28tgATnfhnOHxT2Qd4+UiwlT0xNe9JPSZPEn/0a9M2e/fPQNjYtfwkAIyUC1xfynnNNvSlOu/pt3mNZdHmhuOpUezJX5EQq1c7jZjqt8jPG6eOdeq7juY/eXKO38QoIFViCCCDnrlxj+pi90R25LZnruH2g6Im65A3Re3IIT9JeXalUj/ENu+eUUOlOIIC2QgCwO6Rw3db8jNXDbbrKvpBMz2+jeUtEvNfwpua9noh2s9wC1++x08JCu0GdVLAHIHlw7J59iOkFdMxSByOdywz45ZzNbpbiR6IKrYWyTl3yX24vb+DU8jW56Vgq4IJ3F69Tnbrt2yy1RfYXwvl8Z5KvSXEgWD8SeqNWJJ+JMY9JMT+0PkInkj8gtXwd/0pcflatsvQ/wCQnjqVbHLL0gb903MRtqs6lHclWFiOYMyRSAbeBN734fIiZzmpNUVFVdna9FOkTJuKcLRcq29+JuKjnIj03C3brdb90TvMb0wZVsmHVyACVFXd19m6WI4cO6eOUdp1UFlcDt3FJPeeMJts1ywbfFwbj0B4g55gy9UGvN2Rplfqjqsf0ncUsWv5e34yO7sXt+H+Ju0rD0fTILryvOT2ZtRigS/VAst+AVVJHfui/hLD7QxD03UlCtRd1vRztvBsrtkbqJiVMK65X4dg9be585nklbtGuKNbI6dMWMybcrfeFVVaiMihFYlTvbov6K7qrvahbcpyiYlhkbzUweK7ZKkzVpME1HpNum6t8COfaIDdffAXM3yAA8AMhNxHSou44BHxHaDwkdDZaobq28OF9R94qfoNXIsKSvC1/PvnRYDHBlO+wBBtmQCcpkJTAlbF4ilTs1RC18gQL2421H9Cb4npZz5lrR0zYpPbX3hIXxie2nvCcwdrYT9mfd/WRLtHC3JNM2Jyy0FhlrzvN3lXKOftPhnTtjU9tPeEibGJ7ae8Jg/nsIfUPkfvB/NYT2fg33h3Vyg7Xwzd/Np7ae8Ipy9WtRud1cuHWih3PwV2kYsa8eKecdYrxiY8eAFzGdTxHylSgbMJbxXV8ZUWmToJc35JWxp0id7WVHb0j3mTYbDP4czw8ZOqImfXY+C37tTLcXJCIKWGLZ6DmdB48Jbw2FUndUb54nqoPvJUw7PYubLy0HgOE0aVNVFgLDlKjjQmwsNh1W1yCfl3CWHQbtyQbm1uztkOcKoPRA/rnN9iCLD4zcbcfS/onXwvLNfD031Av8Zn4miHXtAykeCxPqObWyBPDsMm68MGvaDr7IHqNM2tgnXhfum6UMRXnb4yZQiwTaOaYEa5QSZ0NTCg8vp5SjW2dy+H2MyeN+i1IzCYDPLFXCMP1yP2lSojLqCO+ZtNDNTC5oBzv85E+EJ9fzELCdRe76ycLNVFNKwUmtjIqYdlF8jGSpLuK6p7jKWES91PeJEo6di4yvcu0MUZq4PEmY6pbWW6B5RRspm2xuLiZW20vTP7pB+h+BMs0a0kxCh1K8wR5y7tEVRxsUNlsSDqMvKCR3zIY140Pcyvcd3GMVtABrxRbp5RQAK0cCJVJ0kqYYnWCTYEUkSgx4S/h8J2Wk5dFGWZ+EtQ9slshWiTquX72kNFRL8eXLykT1y2kkw2FLG5/rumm78Ej7zvkNP60lrD4ULmdZOlMLpDWaKPIrEFuZMD2wbwllCHZoTnheMuohOePbGAFPWx0vnKGMobpv5/eXd+xjVACvneTJWg9kOBxXqMe48uwy+yTEq0yhsfAy9gcZb0HOXA/QyU/TCS9ot2jESUjug+EolMiZAdZA+CU6Ej4jylu0a0Q7Mt8Ew0F+0ZfCQVA2g17RpNq3bBemDqLxUOzAGHcA7wOepsT5GQlwhyW3f2zfOGt1WI+Ur1sMT1lDDs+0mUfA0zNIvmOXzjJVtJzTC5C/ceErYgcZjTTNrtWXUrgyx+JlMVHmhhnvlHYIzdoKA5Nsmz+/xBlbfm3tLCXTetmufhxmFccJLEI98UQWEUPGIAYoVuyKFAalPDnuHb9pLvoumZ+EqPid7lAQEza0tjOuSatiie3sGkBELa+Uko0L/UzRw9ID7xqLkDdEVDCjj5fcy2MoxblEs0SrYkQkogZR7iMAxJMpGoELKMAlMTLlEgjNb+jACNxDFvOA5HbGDQADEICpHHUGZy5ZTVddDKeMS1mHHIyJIaLGBxdvRfTgeXYZpETnQZfwOLtZG09U8uzuhGRMo+0aRWCTDMiYiUSgWgXjs0YtEWOIrRg3YYhU5gwAZ6YOovMTFUSjWPVPVPPs75u7/YZBiF31K7uvdkeBiklJFRlRgsloVKpaC4IJB4SJ3tnOY1NcYobtjynN1AAx3dL5Qq2IJy4SGJuwLNKrlawvJN8HrDylNTLlKkzC6kHmOIgm2SwIof4b+zFHQWWEQCWqVG+uUVKnaW0m8YmTYaJYQmaAXjXlgSCFAWFGA4McDODCWAEgjNGBjxgENIxjAZRXgMYwbR7wTEIkQ5WgHkdIKCx1Md84t0N0tjOqeixGfzuOFjEDeXatIsMsiNORlBWOnLUTPYZp4DHAeg+nA8uwzTZeInNy/s/H7voOcuB5dh7Jal6ZMo+0X2WAZPUPKQMsdCTHigRy0BjNlxkbV1AJuMgSbEHSc9tqqzVCpOS2sOGYBvMyZSy06otRsuPjN67NqST56faVXcmBGmLdmg8aKKIBxJsNU3W7OMhiEE6A3PT7fMR5jriWGQJy7YppqRGlnQrYQ7yG8MGdBkHHWCIUBhXhXgXigBIDCBkawrwsA7x1MAmPeOwDvBJjEwSYMArxjGvGJiAImPAvaEpgASnO0q42h648ZO0lU3EUkCZkgxzCxFPdbXI6SOQUaGAx27ZXOXA8uwzUc3znOGW8Hjd2yt1eHZ39ktS5JcfZpMIJkhgMIxIwOkNHNXGnVPfqPrMSdpXoqylWFwf6vOWx+Aamc81OjfQ8jMMkfNmsZeinFHjTIsUUUUAHijRQAeKKKAHRiEsiUyQGdhzkgMcGRgwhAAo4glo4gMkvG3o0G8AD3o6mRwlgBIWjXkatlHvAArxjGjExAE0e8jvHBhYEt4KvYxlMZowDxNPfFsuYmQHsbHUa9nhNLUjP45eUixuGHXH8WvnM2UisGiiHx+EYmAFzBY0rZG6vA8v0mmWnPMJcwOM3fQbq8DyjUuRNGoZXxVEOjLzGXYeBlmw8DAYSmhJnF1EIJBFiDYiBNjb2HswcaHI940+HymPOWUadGydoUUUUQxRRRQAUUUUAOgWHFFOv0c4YjiKKACWGsUUYPcRjCPFEMUcfSKKCAFdBCMUUAEYxiigAowiii9gJYUUUYMEa+MsPoe6KKSwRkr1Yy8YooimMY50iikjNfBdRe+TNFFNY7EGbtj/Cb+H+YTm4ophl3NY7DRRRTIoUUUUAHiiijA/9k=\", alt: \"\", className: card_css_1.default.previewImg })),\r\n        react_1.default.createElement(\"div\", { className: card_css_1.default.menu },\r\n            react_1.default.createElement(\"button\", { className: card_css_1.default.menuButton },\r\n                react_1.default.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n                    react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n                    react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" })))),\r\n        react_1.default.createElement(\"div\", { className: card_css_1.default.controls },\r\n            react_1.default.createElement(\"div\", { className: card_css_1.default.karmaCounter },\r\n                react_1.default.createElement(\"button\", { className: card_css_1.default.up },\r\n                    react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                        react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" }))),\r\n                react_1.default.createElement(\"span\", { className: card_css_1.default.karmaValue }, \"234\"),\r\n                react_1.default.createElement(\"button\", { className: card_css_1.default.down },\r\n                    react_1.default.createElement(\"svg\", { className: card_css_1.default.down, width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                        react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" })))),\r\n            react_1.default.createElement(\"button\", { className: card_css_1.default.commentsButton },\r\n                react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })),\r\n                react_1.default.createElement(\"span\", { className: card_css_1.default.commentsNumber }, \"13\")))));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/card.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".card__card--7bN6-{\\r\\n    background-color: var(--white-color);\\r\\n    border-radius: 7px;\\r\\n}\\r\\n.card__textContent--3Ki_7{\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n}\\r\\n.card__avatar--3eg0i{\\r\\n    width: 20px;\\r\\n    height: 20px;\\r\\n    border-radius: 50%;\\r\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"card\": \"card__card--7bN6-\",\n\t\"textContent\": \"card__textContent--3Ki_7\",\n\t\"avatar\": \"card__avatar--3eg0i\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/index.ts":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/Card.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\r\nconst Card_1 = __webpack_require__(/*! ../CardsList/Card */ \"./src/shared/CardsList/Card/index.ts\");\r\nfunction CardsList() {\r\n    return (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList },\r\n        react_1.default.createElement(Card_1.Card, null)));\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/cardslist.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".cardslist__cardlist--JrEPM{\\r\\n    background-color: var(--gray-color-200);\\r\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"cardlist\": \"cardslist__cardlist--JrEPM\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardslist.css?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/CardsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction Content({ children }) {\r\n    return (react_1.default.createElement(\"div\", null, children));\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/Dropdown/dropdown.css\"));\r\nconst NOOP = () => { };\r\nfunction Dropdown({ button, children, isOpen, onClose = NOOP, onOpen = NOOP }) {\r\n    const [isDropdownOpen, setIsDropdownOpen] = react_1.useState(false);\r\n    react_1.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);\r\n    react_1.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);\r\n    const handleOpen = () => {\r\n        if (isOpen === undefined) {\r\n            setIsDropdownOpen(!isDropdownOpen);\r\n        }\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.container },\r\n        react_1.default.createElement(\"div\", { onClick: () => setIsDropdownOpen(!isDropdownOpen) }, button),\r\n        isDropdownOpen &&\r\n            react_1.default.createElement(\"div\", { className: dropdown_css_1.default.listContainer },\r\n                react_1.default.createElement(\"div\", { className: dropdown_css_1.default.list, onClick: () => setIsDropdownOpen(false) }, children))));\r\n}\r\nexports.Dropdown = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.css":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".dropdown__container--a5Jzh{\\r\\n    width: 100%;\\r\\n    flex: 1 1 0%;\\r\\n}\\r\\n.dropdown__listContainer--YYYB3{\\r\\n    position: relative;\\r\\n}\\r\\n.dropdown__list--23slg{\\r\\n    position: absolute;\\r\\n    left: 0;\\r\\n    top: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"container\": \"dropdown__container--a5Jzh\",\n\t\"listContainer\": \"dropdown__listContainer--YYYB3\",\n\t\"list\": \"dropdown__list--23slg\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst ProfilePhoto_1 = __webpack_require__(/*! ../ProfilePhoto */ \"./src/shared/ProfilePhoto/index.ts\");\r\nconst header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nconst Notifications_1 = __webpack_require__(/*! ./Notifications */ \"./src/shared/Header/Notifications/index.ts\");\r\nconst SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/index.ts\");\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\r\n        react_1.default.createElement(ProfilePhoto_1.ProfilePhoto, null),\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\r\n        react_1.default.createElement(Notifications_1.Notifications, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/Notifications/Notifications.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/Header/Notifications/Notifications.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Notifications = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst notifications_css_1 = __importDefault(__webpack_require__(/*! ./notifications.css */ \"./src/shared/Header/Notifications/notifications.css\"));\r\nfunction Notifications() {\r\n    return (react_1.default.createElement(\"div\", { className: notifications_css_1.default.notifications },\r\n        react_1.default.createElement(\"span\", { className: notifications_css_1.default.notifications__number }, \"4\"),\r\n        react_1.default.createElement(\"button\", { className: notifications_css_1.default.notifications__openBtn },\r\n            react_1.default.createElement(\"svg\", { width: \"13\", height: \"11\", viewBox: \"0 0 13 11\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M11.7235 0.276367H1.51072C0.808598 0.276367 0.240514 0.850834 0.240514 1.55296L0.234131 9.21252C0.234131 9.91465 0.808598 10.4891 1.51072 10.4891H11.7235C12.4256 10.4891 13.0001 9.91465 13.0001 9.21252V1.55296C13.0001 0.850834 12.4256 0.276367 11.7235 0.276367ZM11.7235 2.82955L6.6171 6.02104L1.51072 2.82955V1.55296L6.6171 4.74444L11.7235 1.55296V2.82955Z\", fill: \"#D9D9D9\" })))));\r\n}\r\nexports.Notifications = Notifications;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Notifications/Notifications.tsx?");

/***/ }),

/***/ "./src/shared/Header/Notifications/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/Header/Notifications/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Notifications */ \"./src/shared/Header/Notifications/Notifications.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Notifications/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Notifications/notifications.css":
/*!***********************************************************!*\
  !*** ./src/shared/Header/Notifications/notifications.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".notifications__notifications--9mrH0{\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n}\\r\\n.notifications__notifications__number--3gCNN{\\r\\n    background: var(--orange-color);\\r\\n    padding: 2px 5px;\\r\\n    border-radius: 50%;\\r\\n    color: var(--white-color);\\r\\n    font-weight: 500;\\r\\n    font-size: 9px;\\r\\n    line-height: 11px;\\r\\n}\\r\\n.notifications__notifications__openBtn--C4oAX{\\r\\n    background: transparent;\\r\\n    border: transparent;\\r\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"notifications\": \"notifications__notifications--9mrH0\",\n\t\"notifications__number\": \"notifications__notifications__number--3gCNN\",\n\t\"notifications__openBtn\": \"notifications__notifications__openBtn--C4oAX\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/Header/Notifications/notifications.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\r\nfunction SearchBlock() {\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.search },\r\n        react_1.default.createElement(\"button\", { className: searchblock_css_1.default.search__btn },\r\n            react_1.default.createElement(\"svg\", { width: \"11\", height: \"11\", viewBox: \"0 0 11 11\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M7.86164 6.91824H7.36478L7.18868 6.74843C7.80503 6.03145 8.1761 5.10063 8.1761 4.08805C8.1761 1.83019 6.34591 0 4.08805 0C1.83019 0 0 1.83019 0 4.08805C0 6.34591 1.83019 8.1761 4.08805 8.1761C5.10063 8.1761 6.03145 7.80503 6.74843 7.18868L6.91824 7.36478V7.86164L10.0629 11L11 10.0629L7.86164 6.91824ZM4.08805 6.91824C2.52201 6.91824 1.25786 5.65409 1.25786 4.08805C1.25786 2.52201 2.52201 1.25786 4.08805 1.25786C5.65409 1.25786 6.91824 2.52201 6.91824 4.08805C6.91824 5.65409 5.65409 6.91824 4.08805 6.91824Z\", fill: \"#C4C4C4\" }))),\r\n        react_1.default.createElement(\"input\", { type: \"search\", className: searchblock_css_1.default.search__input, placeholder: '\\u041F\\u043E\\u0438\\u0441\\u043A' })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".searchblock__search--1qP76{\\r\\n    position: relative;\\r\\n}\\r\\n.searchblock__search__input--1OXsn{\\r\\n    background: #F4F4F4;\\r\\n    border-radius: 30px;\\r\\n    font-size: 12px;\\r\\n    line-height: 14px;\\r\\n    color: #C4C4C4;\\r\\n    padding: 10px 0 10px 36px;\\r\\n    border: transparent;\\r\\n    /* width: 50%; */\\r\\n}\\r\\n.searchblock__search__btn--1A2rL{\\r\\n    background: transparent;\\r\\n    border: none;\\r\\n    position: absolute;\\r\\n    top: 7px;\\r\\n    left: 8px;\\r\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"search\": \"searchblock__search--1qP76\",\n\t\"search__input\": \"searchblock__search__input--1OXsn\",\n\t\"search__btn\": \"searchblock__search__btn--1A2rL\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".header__header--bAgyG{\\r\\n    padding: 14px 20px;\\r\\n    background: white;\\r\\n    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\\r\\n    border-radius: 0px 0px 7px 7px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"header\": \"header__header--bAgyG\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst layout_module_css_1 = __importDefault(__webpack_require__(/*! ./layout.module.css */ \"./src/shared/Layout/layout.module.css\"));\r\nfunction Layout({ children }) {\r\n    return (react_1.default.createElement(\"div\", { className: layout_module_css_1.default.layout }, children));\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.module.css":
/*!*********************************************!*\
  !*** ./src/shared/Layout/layout.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.module.css?");

/***/ }),

/***/ "./src/shared/ProfilePhoto/ProfilePhoto.tsx":
/*!**************************************************!*\
  !*** ./src/shared/ProfilePhoto/ProfilePhoto.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ProfilePhoto = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst profilephoto_css_1 = __importDefault(__webpack_require__(/*! ./profilephoto.css */ \"./src/shared/ProfilePhoto/profilephoto.css\"));\r\nfunction ProfilePhoto() {\r\n    return (react_1.default.createElement(\"img\", { className: profilephoto_css_1.default.image, src: \"data:image/jpeg;base64,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\", alt: \"\" }));\r\n}\r\nexports.ProfilePhoto = ProfilePhoto;\r\n\n\n//# sourceURL=webpack:///./src/shared/ProfilePhoto/ProfilePhoto.tsx?");

/***/ }),

/***/ "./src/shared/ProfilePhoto/index.ts":
/*!******************************************!*\
  !*** ./src/shared/ProfilePhoto/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ProfilePhoto */ \"./src/shared/ProfilePhoto/ProfilePhoto.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/ProfilePhoto/index.ts?");

/***/ }),

/***/ "./src/shared/ProfilePhoto/profilephoto.css":
/*!**************************************************!*\
  !*** ./src/shared/ProfilePhoto/profilephoto.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".profilephoto__image--3Vd2r{\\r\\n    width: 30px;\\r\\n    height: 30px;\\r\\n    border-radius: 50%;\\r\\n    margin-right: 14px;\\r\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"image\": \"profilephoto__image--3Vd2r\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/ProfilePhoto/profilephoto.css?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ })

/******/ });