/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --header-background-color: #0078d7;\n    --header-color: #fefefe;\n    --sidebar-background-color: #f4f4f4;\n    --selected-background-color: #eeeeee;\n    --selected-color: #3b69e5;\n    --sidebar-hover-background-color: #fafafa;\n    --main-color: #30343b;\n    --blue-font-color: #0078d7;\n    --header-height: 80px;\n    --footer-height: 0px;\n    --sidebar-width: 300px;\n    --border-grey: #ebebeb;\n    --selected-task-background-color: #f4f6ff\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    text-decoration: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    text-rendering: optimizeLegibility;\n}\n\nhtml {\n    /* footer support */\n    position: relative;\n}\n\nbody {\n    font-family: \"Segoe\",\"Segoe UI\",\"Arial\",\"sans-serif\";\n    font-size: 25px;\n    min-height: 100vh;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n}\n\n.header {\n    background-color: var(--header-background-color);\n    height: 80px;\n    width: 100%;\n    display: flex;\n}\n\n.header .title {\n    font-family: 'Yusei Magic', sans-serif;\n    font-weight: bold;\n    color: var(--header-color);\n    align-self: center;\n    font-size: 50px;\n    padding-left: 10px;\n}\n\n.main {\n    font-family: \"Segoe\",\"Segoe UI\",\"Arial\",\"sans-serif\";\n    display: flex;\n    min-height: calc(100vh - var(--header-height) - var(--footer-height));\n    color: var(--main-color);\n}\n\n.sidebar {\n    position: absolute;\n    display: flex;\n    font-size: 28px;\n    flex-direction: column;\n    background-color: var(--sidebar-background-color);\n    width: var(--sidebar-width);\n    min-height: calc(100vh - var(--header-height) - var(--footer-height));\n    height: calc(100vh - var(--header-height) - var(--footer-height));\n    padding: 10px;\n}\n\n.side-block {\n    display: flex;\n    gap: 5px;\n    padding: 10px;\n    align-items: center;\n    cursor: pointer;\n}\n\n.side-block:hover {\n    background-color: var(--sidebar-hover-background-color);\n}\n\n.side-block.current {\n    background-color: var(--selected-background-color);\n    color: var(--selected-color);\n}\n\n.side-icon {\n    height: 25px;\n    width: 25px;\n}\n\n.container {\n    flex: 1 1 auto;\n    padding: 10px;\n    margin-left: var(--sidebar-width);\n    border: 1px solid #ebebeb;\n    margin-right: 0;\n}\n\n.container.collapse {\n    margin-right: 300px;\n}\n\n.add-button {\n    padding: 10px;\n    display: flex;\n    gap: 10px;\n    cursor: pointer;\n    font-size: 20px;\n    align-items: center;\n    min-height: 80px;\n    border-radius: 8px;\n    background-color: var(--sidebar-background-color);\n}\n\n.add-trigger {\n    color: var(--blue-font-color);\n}\n\n.todo-collapse {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 28px;\n    padding: 0 20px;\n    height: 90px;\n}\n\n.todo-collapse:hover {\n    background-color: var(--sidebar-background-color);\n}\n\n.todo-collapse.selected {\n    background-color: var(--selected-task-background-color);\n}\n\n.todo-importance {\n    width: 20px;\n    height: auto;\n    margin-left: auto;\n}\n\n.edit-panel.opened {\n    position: absolute;\n    right: 0;\n    width: var(--sidebar-width);\n    min-height: calc(100vh - var(--header-height) - var(--footer-height));\n    height: calc(100vh - var(--header-height) - var(--footer-height));    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    background-color: var(--sidebar-background-color);\n    padding: 10px;\n    font-size: 20px;\n}\n\n.edit-panel.closed {\n    width: 0;\n}\n\n.edit-panel .edit-block {\n    background-color: var(--sidebar-background-color);\n    border-radius: 3px;\n    background-color: #fefefe;\n    height: 70px;\n    display: flex;\n    align-items: center;\n    color: #777779;\n    border: 2px solid #ebebeb;\n}\n\n.edit-panel input {\n    /* outline: none; */\n    border: none;\n    height: 100%;\n    width: 100%;\n    font-size: 20px;\n    padding-left: 30px;\n}\n\n.edit-block:hover,\n.edit-panel input:hover{\n    background-color: var(--selected-background-color);\n    color: var(--main-color);\n}\n\n.edit-panel button {\n    height: 40px;\n    font-size: 20px;\n}\n\n.edit-panel .side-control-block {\n    margin-top: auto;\n    display: flex;\n    justify-content: space-between;\n}\n\n.my-day-block {\n    cursor: pointer;\n}\n\n.my-day-block.added{\n    color: rgb(21, 95, 255);\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,kCAAkC;IAClC,uBAAuB;IACvB,mCAAmC;IACnC,oCAAoC;IACpC,yBAAyB;IACzB,yCAAyC;IACzC,qBAAqB;IACrB,0BAA0B;IAC1B,qBAAqB;IACrB,oBAAoB;IACpB,sBAAsB;IACtB,sBAAsB;IACtB;AACJ;;AAEA;;;EAGE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;IACI,UAAU;IACV,SAAS;IACT,qBAAqB;IACrB,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;IACjB,kCAAkC;AACtC;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,oDAAoD;IACpD,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,gDAAgD;IAChD,YAAY;IACZ,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,sCAAsC;IACtC,iBAAiB;IACjB,0BAA0B;IAC1B,kBAAkB;IAClB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,oDAAoD;IACpD,aAAa;IACb,qEAAqE;IACrE,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,sBAAsB;IACtB,iDAAiD;IACjD,2BAA2B;IAC3B,qEAAqE;IACrE,iEAAiE;IACjE,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,uDAAuD;AAC3D;;AAEA;IACI,kDAAkD;IAClD,4BAA4B;AAChC;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,cAAc;IACd,aAAa;IACb,iCAAiC;IACjC,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,SAAS;IACT,eAAe;IACf,eAAe;IACf,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,iDAAiD;AACrD;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,eAAe;IACf,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,iDAAiD;AACrD;;AAEA;IACI,uDAAuD;AAC3D;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,2BAA2B;IAC3B,qEAAqE;IACrE,iEAAiE,KAAK,aAAa;IACnF,sBAAsB;IACtB,SAAS;IACT,iDAAiD;IACjD,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,iDAAiD;IACjD,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,eAAe;IACf,kBAAkB;AACtB;;AAEA;;IAEI,kDAAkD;IAClD,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":[":root {\n    --header-background-color: #0078d7;\n    --header-color: #fefefe;\n    --sidebar-background-color: #f4f4f4;\n    --selected-background-color: #eeeeee;\n    --selected-color: #3b69e5;\n    --sidebar-hover-background-color: #fafafa;\n    --main-color: #30343b;\n    --blue-font-color: #0078d7;\n    --header-height: 80px;\n    --footer-height: 0px;\n    --sidebar-width: 300px;\n    --border-grey: #ebebeb;\n    --selected-task-background-color: #f4f6ff\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    text-decoration: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    text-rendering: optimizeLegibility;\n}\n\nhtml {\n    /* footer support */\n    position: relative;\n}\n\nbody {\n    font-family: \"Segoe\",\"Segoe UI\",\"Arial\",\"sans-serif\";\n    font-size: 25px;\n    min-height: 100vh;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n}\n\n.header {\n    background-color: var(--header-background-color);\n    height: 80px;\n    width: 100%;\n    display: flex;\n}\n\n.header .title {\n    font-family: 'Yusei Magic', sans-serif;\n    font-weight: bold;\n    color: var(--header-color);\n    align-self: center;\n    font-size: 50px;\n    padding-left: 10px;\n}\n\n.main {\n    font-family: \"Segoe\",\"Segoe UI\",\"Arial\",\"sans-serif\";\n    display: flex;\n    min-height: calc(100vh - var(--header-height) - var(--footer-height));\n    color: var(--main-color);\n}\n\n.sidebar {\n    position: absolute;\n    display: flex;\n    font-size: 28px;\n    flex-direction: column;\n    background-color: var(--sidebar-background-color);\n    width: var(--sidebar-width);\n    min-height: calc(100vh - var(--header-height) - var(--footer-height));\n    height: calc(100vh - var(--header-height) - var(--footer-height));\n    padding: 10px;\n}\n\n.side-block {\n    display: flex;\n    gap: 5px;\n    padding: 10px;\n    align-items: center;\n    cursor: pointer;\n}\n\n.side-block:hover {\n    background-color: var(--sidebar-hover-background-color);\n}\n\n.side-block.current {\n    background-color: var(--selected-background-color);\n    color: var(--selected-color);\n}\n\n.side-icon {\n    height: 25px;\n    width: 25px;\n}\n\n.container {\n    flex: 1 1 auto;\n    padding: 10px;\n    margin-left: var(--sidebar-width);\n    border: 1px solid #ebebeb;\n    margin-right: 0;\n}\n\n.container.collapse {\n    margin-right: 300px;\n}\n\n.add-button {\n    padding: 10px;\n    display: flex;\n    gap: 10px;\n    cursor: pointer;\n    font-size: 20px;\n    align-items: center;\n    min-height: 80px;\n    border-radius: 8px;\n    background-color: var(--sidebar-background-color);\n}\n\n.add-trigger {\n    color: var(--blue-font-color);\n}\n\n.todo-collapse {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 28px;\n    padding: 0 20px;\n    height: 90px;\n}\n\n.todo-collapse:hover {\n    background-color: var(--sidebar-background-color);\n}\n\n.todo-collapse.selected {\n    background-color: var(--selected-task-background-color);\n}\n\n.todo-importance {\n    width: 20px;\n    height: auto;\n    margin-left: auto;\n}\n\n.edit-panel.opened {\n    position: absolute;\n    right: 0;\n    width: var(--sidebar-width);\n    min-height: calc(100vh - var(--header-height) - var(--footer-height));\n    height: calc(100vh - var(--header-height) - var(--footer-height));    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    background-color: var(--sidebar-background-color);\n    padding: 10px;\n    font-size: 20px;\n}\n\n.edit-panel.closed {\n    width: 0;\n}\n\n.edit-panel .edit-block {\n    background-color: var(--sidebar-background-color);\n    border-radius: 3px;\n    background-color: #fefefe;\n    height: 70px;\n    display: flex;\n    align-items: center;\n    color: #777779;\n    border: 2px solid #ebebeb;\n}\n\n.edit-panel input {\n    /* outline: none; */\n    border: none;\n    height: 100%;\n    width: 100%;\n    font-size: 20px;\n    padding-left: 30px;\n}\n\n.edit-block:hover,\n.edit-panel input:hover{\n    background-color: var(--selected-background-color);\n    color: var(--main-color);\n}\n\n.edit-panel button {\n    height: 40px;\n    font-size: 20px;\n}\n\n.edit-panel .side-control-block {\n    margin-top: auto;\n    display: flex;\n    justify-content: space-between;\n}\n\n.my-day-block {\n    cursor: pointer;\n}\n\n.my-day-block.added{\n    color: rgb(21, 95, 255);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader)
/* harmony export */ });
const createHeader = () => {
    const header = document.querySelector('.header');
    const title = document.createElement('div');
    title.textContent = 'TooDo LIST';
    title.classList.add('title');

    header.appendChild(title);
}



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContainer": () => (/* binding */ createContainer)
/* harmony export */ });
/* harmony import */ var _img_stared_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/stared.png */ "./src/img/stared.png");
/* harmony import */ var _img_unstar_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/unstar.png */ "./src/img/unstar.png");
/* harmony import */ var _img_sun_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/sun.png */ "./src/img/sun.png");
/* harmony import */ var _img_collapse_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/collapse.png */ "./src/img/collapse.png");
/* harmony import */ var _img_delete_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/delete.png */ "./src/img/delete.png");






let taskIndex = 0;

const taskList = (() => {
    let tasklist = [];
    let taskNum = 0;

    const saveToLocalStorage = () => {
        if (storageAvailable('localStorage')) {
            localStorage.setItem('taskNum', taskNum);
            tasklist.forEach((task, i) => {
                localStorage.setItem(`task${i}`, JSON.stringify(task));
            })
        }
    }

    const fetchFromLocalStorage = () => {
        if(storageAvailable('localStorage')) {
            if(localStorage.length > 0) {
                taskNum = parseInt(localStorage.getItem('taskNum'));
                tasklist = [];
                for(let i = 0; i < taskNum; i++) {
                    tasklist.push(JSON.parse(localStorage.getItem(`task${i}`)));
                }
            }
        }
    }

    const add = (task) => {
        tasklist.push(task);
        taskNum++;
        saveToLocalStorage();
    }
    const getTaskNum = () => {
        return taskNum;
    }
    const remove = (taskIndex) => {
        tasklist.splice(taskIndex, 1);
        taskNum--;
        saveToLocalStorage();
    }
    const getTask = (taskIndex) => {
        return tasklist[taskIndex];
    }
    const setTask = (index, task) => {
        tasklist[index] = task;
        saveToLocalStorage();
    }
    const getAllTask = () => {
        return tasklist;
    }
    return {add, getTaskNum, remove, getTask, setTask, getAllTask, saveToLocalStorage, fetchFromLocalStorage};
})();

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}



// Create the main part of the page.
const createContainer = (filter) => {
    const container = document.querySelector('.container');
    let defaultImportance;
    let defaultMyDay;
    if(filter == '0') {  // All tasks
        defaultImportance = 'false';
        defaultMyDay = 'false';
    }
    else if(filter == '1') { // Important tasks only
        defaultImportance = 'true';
        defaultMyDay = 'false'; 
    }
    else if(filter == '2') { // Myday tasks
        defaultImportance = 'false';
        defaultMyDay = 'true'; 
    }


    // Setup a todo logically, attribute information to it.
    let createTodo = (title, description, dueDate, importance, status, myDay) => {
        return {title, description, dueDate, importance, status, myDay};
    }

    const addButton = (() => {
        const addButton = document.createElement('div');
        const _clear = (block) => {
            block.textContent = '';
        }

        // Expand add panel after clicking.
        const expand = () => {
            addButton.classList.remove('collapse');
            addButton.classList.add('expand');
            _clear(addButton);
            const addStatus = document.createElement('input');
            const addTitle = document.createElement('input');
            const addDueDate = document.createElement('input');
            const addTrigger = document.createElement('div'); // addTrigger is the button that trigger the adding action
    
            addTrigger.classList.add('add-trigger');
            addTrigger.textContent = 'ADD';
            addTrigger.addEventListener('click', () => {
                addTodo(addTitle.value, 'Add a note', addDueDate.value, defaultImportance, addStatus.checked, defaultMyDay);
                render();
                console.log(taskList.getAllTask())
            });
            addStatus.classList.add('round-checkbox', 'add-status');
            addStatus.setAttribute('type', 'checkbox');
            addTitle.classList.add('add-title');
            addDueDate.setAttribute('type', 'date');
    
            addButton.removeEventListener('click', expand);
            addButton.appendChild(addStatus);
            addButton.appendChild(addTitle);
            addButton.appendChild(addDueDate);
            addButton.appendChild(addTrigger);
        }
       
        const create = () => {
            _clear(addButton);
            addButton.classList.add('add-button');
            addButton.classList.add('collapse');
            const icon = document.createElement('div');
            icon.classList.add('add-icon');
            const text = document.createElement('div');
    
            icon.textContent = '+';
            text.textContent = 'Add a task';
            addButton.addEventListener('click', expand);
            addButton.appendChild(icon);
            addButton.appendChild(text);
            container.appendChild(addButton);
        }
        return {expand, create};
    })();

    // Create elements of todo on the page.
    // Do not change easily
    const collapseTodo = (todo) =>  {
        const toggleImportance = (todo) => {
            if(todo.importance == 'true') {
                todo.importance = 'false';
            }
            else if(todo.importance == 'false') {
                todo.importance = 'true';
            }
        }
    
        const displayImportanceImg = (todo) => {
            if(todo.importance == 'true')
                return _img_stared_png__WEBPACK_IMPORTED_MODULE_0__;
            else if(todo.importance == 'false')
                return _img_unstar_png__WEBPACK_IMPORTED_MODULE_1__;
        }
        const display = () => {
            const todoCollapse = document.createElement('div');
            todoCollapse.classList.add('todo-collapse');
            const todoStatus = document.createElement('input');
            const todoTitle = document.createElement('div');
            const todoImportance = document.createElement('img');
            todoStatus.classList.add('todo-status', 'checkbox');
            todoStatus.setAttribute('type', 'checkbox');
            todoStatus.checked = todo.status;

            todoCollapse.setAttribute('data-index', taskIndex);
            taskIndex++;

            todoTitle.classList.add('todo-title');
            todoTitle.textContent = todo.title;
            todoImportance.classList.add('todo-importance');
            todoImportance.src = displayImportanceImg(todo);

            todoStatus.addEventListener('click', (e) => {
                todo.status = todoStatus.checked;
                taskList.saveToLocalStorage();
            })
            todoImportance.addEventListener('click', (e) => {
                toggleImportance(todo);
                todoImportance.src = displayImportanceImg(todo);
                taskList.saveToLocalStorage();
            })     
    
            todoCollapse.appendChild(todoStatus);
            todoCollapse.appendChild(todoTitle);
            todoCollapse.appendChild(todoImportance);
            return todoCollapse;
        }
        return {display};
    }

    const editPanel = (() => {
        const editPanelBlock = document.querySelector('.edit-panel');
        let index = -1;
        const _createEditBlock = () => {
            const block = document.createElement('div');
            block.classList.add('edit-block');
            return block;
        }
        const _clear = () => {
            editPanelBlock.textContent = ''; 
        }

        const display = (currentIndex) => {
            index = currentIndex;
            const currentTask = taskList.getTask(currentIndex);
            const title = document.createElement('input');
            const dueDate = document.createElement('input');
            const description = document.createElement('input');
            const saveButton = document.createElement('button');
            _clear();
            const collapseButton = document.createElement('img');
            collapseButton.src = _img_collapse_png__WEBPACK_IMPORTED_MODULE_3__;
            collapseButton.classList.add('side-collapse-button', 'side-icon');
            collapseButton.addEventListener('click', close);
            const deleteButton = document.createElement('img');
            deleteButton.src = _img_delete_png__WEBPACK_IMPORTED_MODULE_4__;
            deleteButton.classList.add('side-delete-button', 'side-icon');
            deleteButton.addEventListener('click', deleteTask);
            const controlBlock = document.createElement('div');
            controlBlock.classList.add('side-control-block');
            controlBlock.appendChild(collapseButton);
            controlBlock.appendChild(deleteButton);
            const titleBlock = _createEditBlock();
            const myDayBlock = _createEditBlock();
            const dueDateBlock = _createEditBlock();
            const descriptionBlock = _createEditBlock();

            const icon = document.createElement('img');
            const myDayTitle = document.createElement('div');
            title.defaultValue = currentTask.title;
            title.classList.add('edit-panel-title');
            icon.classList.add('side-icon');
            myDayTitle.classList.add('side-my-day-title');
            description.classList.add('side-desc');
            dueDate.classList.add('side-due-date');
            dueDate.type = 'date';
            dueDate.value = currentTask.dueDate;
            saveButton.textContent = 'SAVE';
            myDayBlock.dataset.value = 'false';
            myDayBlock.classList.add('my-day-block');
            if(currentTask.myDay == 'true') {
                myDayBlock.classList.add('added');
            }
            myDayBlock.addEventListener('click', () => {
                if(myDayBlock.dataset.value == 'false') {
                    myDayBlock.classList.toggle('added');
                    myDayBlock.dataset.value = 'true';
                }
                else if(myDayBlock.dataset.value == 'true'){
                    myDayBlock.classList.toggle('added');
                    myDayBlock.dataset.value = 'false';
                }
            })

            icon.src = _img_sun_png__WEBPACK_IMPORTED_MODULE_2__;
            myDayTitle.textContent = 'Add to My Day';
            description.value = currentTask.description;
            saveButton.addEventListener('click', edit);

            titleBlock.appendChild(title);
            myDayBlock.appendChild(icon);
            myDayBlock.appendChild(myDayTitle);
            dueDateBlock.appendChild(dueDate);
            descriptionBlock.appendChild(description);

            editPanelBlock.appendChild(titleBlock);
            editPanelBlock.appendChild(myDayBlock);
            editPanelBlock.appendChild(dueDateBlock);
            editPanelBlock.appendChild(descriptionBlock);
            editPanelBlock.appendChild(saveButton);
            editPanelBlock.appendChild(controlBlock);
            editPanelBlock.classList.add('opened');
            editPanelBlock.classList.remove('closed');
            container.classList.add('collapse');
        }

        const getEditedInfo = () => {
            const info = taskList.getTask(index);
            const myDayBlock = document.querySelector('.my-day-block');
            //refresh info accoring to the present edit panel.
            info.myDay = myDayBlock.dataset.value;
            info.description = document.querySelector('.side-desc').value;
            info.dueDate = document.querySelector('.side-due-date').value;
            info.title = document.querySelector('.edit-panel-title').value;
            return info;
        }

        const edit = () => {
            taskList.setTask(index, getEditedInfo()); 
            taskList.saveToLocalStorage();
            close();
            render();
        }

        const close = () => {
            const editPanel = document.querySelector('.edit-panel');
            editPanel.classList.remove('opened');
            editPanel.classList.add('closed');
            container.classList.toggle('collapse');
        }

        const deleteTask = () => {
            taskList.remove(index);
            close();
            render();
        }

        return {display}
    })();


    // add task
    const addTodo = (title, description, dueDate, importance, status, myDay) => {
        if(title == '' || title === undefined) {
            alert("ERROR: Empty Title!"); //#TODOchange to Add trigger not working and became black.
            return;
        }
        let task = createTodo(title, description, dueDate, importance, status, myDay) // create a task
        taskList.add(task);
    }

    const clickTask = (e) => { // display edit panel on click
            if(!(e.target.className.includes('todo-status') || e.target.getAttribute('class') == 'todo-importance') ){
                editPanel.display(e.currentTarget.dataset.index);
                document.querySelectorAll('.todo-collapse').forEach((task) => {
                    task.classList.remove('selected');
                })
                e.currentTarget.classList.add('selected');
            }
        }
    

    const render = () => {
        taskIndex = 0;
        taskList.fetchFromLocalStorage();
        container.textContent = ''
        // localStorage.clear();
        addButton.create();
        if(filter == '0') {
            taskList.getAllTask().forEach((task) => {
                const todoBlock = collapseTodo(task).display();
                container.appendChild(todoBlock);//display the task on main page
                todoBlock.addEventListener('click', clickTask);
            })
        }
        else if(filter == '1') {
            taskList.getAllTask().forEach((task) => {
                if(task.importance == 'true') {
                    const todoBlock = collapseTodo(task).display();
                    container.appendChild(todoBlock);//display the task on main page
                    todoBlock.addEventListener('click', clickTask);
                }
            })
        }
        else if(filter == '2') {
            taskList.getAllTask().forEach((task) => {
                if(task.myDay == 'true') {
                    const todoBlock = collapseTodo(task).display();
                    container.appendChild(todoBlock);//display the task on main page
                    todoBlock.addEventListener('click', clickTask);
                }
            })
        }
    }

    return {addTodo, addButton, collapseTodo, render};
}



/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSidebar": () => (/* binding */ createSidebar)
/* harmony export */ });
/* harmony import */ var _img_sun_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/sun.png */ "./src/img/sun.png");
/* harmony import */ var _img_unstar_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/unstar.png */ "./src/img/unstar.png");
/* harmony import */ var _img_all_inbox_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/all-inbox.png */ "./src/img/all-inbox.png");




const createSideblock = (name, imgSrc) => {
    const block = document.createElement('div');
    const icon = document.createElement('img');
    const title = document.createElement('div');
    
    title.textContent = name;
    icon.src = imgSrc;
    block.classList.add('side-block');
    icon.classList.add('side-icon');
    title.classList.add('side-title');
    block.appendChild(icon);
    block.appendChild(title);

    return block;
}

const createSidebar = () => {
    const sidebar = document.querySelector('.sidebar');

    const myDayBlock = createSideblock('My Day', _img_sun_png__WEBPACK_IMPORTED_MODULE_0__);
    const importantBlock =createSideblock('Important', _img_unstar_png__WEBPACK_IMPORTED_MODULE_1__);
    const inboxBlock = createSideblock('All Inbox', _img_all_inbox_png__WEBPACK_IMPORTED_MODULE_2__);

    myDayBlock.classList.add('my-day-class');
    importantBlock.classList.add('important-class');
    inboxBlock.classList.add('inbox-class')

    sidebar.appendChild(inboxBlock);
    sidebar.appendChild(myDayBlock);
    sidebar.appendChild(importantBlock);
}



/***/ }),

/***/ "./src/img/all-inbox.png":
/*!*******************************!*\
  !*** ./src/img/all-inbox.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3b6b845bdb0ff7999be.png";

/***/ }),

/***/ "./src/img/collapse.png":
/*!******************************!*\
  !*** ./src/img/collapse.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df76bf84fe3a5bec4c40.png";

/***/ }),

/***/ "./src/img/delete.png":
/*!****************************!*\
  !*** ./src/img/delete.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f18e8ce54855f0182d3a.png";

/***/ }),

/***/ "./src/img/stared.png":
/*!****************************!*\
  !*** ./src/img/stared.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3008e19df259ccaa3a49.png";

/***/ }),

/***/ "./src/img/sun.png":
/*!*************************!*\
  !*** ./src/img/sun.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db59a20ea862ccedc73c.png";

/***/ }),

/***/ "./src/img/unstar.png":
/*!****************************!*\
  !*** ./src/img/unstar.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ab256eaad757afa2715c.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/main.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.js */ "./src/sidebar.js");







const renderPage = (() => {
    (0,_header_js__WEBPACK_IMPORTED_MODULE_2__.createHeader)();
    (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_3__.createSidebar)();
    const allInbox = document.querySelector('.inbox-class');
    const important = document.querySelector('.important-class');
    const myDay = document.querySelector('.my-day-class');
    allInbox.classList.add('current');
    (0,_main__WEBPACK_IMPORTED_MODULE_1__.createContainer)('0').render();
    const clickAllInbox = () => {
        (0,_main__WEBPACK_IMPORTED_MODULE_1__.createContainer)('0').render();
        allInbox.classList.add('current');
        important.classList.remove('current');
        myDay.classList.remove('current');
    }

    const clickImportant = () => {
        ;(0,_main__WEBPACK_IMPORTED_MODULE_1__.createContainer)('1').render();
        allInbox.classList.remove('current');
        important.classList.add('current');
        myDay.classList.remove('current');
    }

    const clickMyDay = () => {
        ;(0,_main__WEBPACK_IMPORTED_MODULE_1__.createContainer)('2').render();
        allInbox.classList.remove('current');
        important.classList.remove('current');
        myDay.classList.add('current');
    }
    allInbox.addEventListener('click', clickAllInbox);
    important.addEventListener('click', clickImportant);
    myDay.addEventListener('click', clickMyDay);
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0taGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICMwMDc4ZDc7XFxuICAgIC0taGVhZGVyLWNvbG9yOiAjZmVmZWZlO1xcbiAgICAtLXNpZGViYXItYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcXG4gICAgLS1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcbiAgICAtLXNlbGVjdGVkLWNvbG9yOiAjM2I2OWU1O1xcbiAgICAtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gICAgLS1tYWluLWNvbG9yOiAjMzAzNDNiO1xcbiAgICAtLWJsdWUtZm9udC1jb2xvcjogIzAwNzhkNztcXG4gICAgLS1oZWFkZXItaGVpZ2h0OiA4MHB4O1xcbiAgICAtLWZvb3Rlci1oZWlnaHQ6IDBweDtcXG4gICAgLS1zaWRlYmFyLXdpZHRoOiAzMDBweDtcXG4gICAgLS1ib3JkZXItZ3JleTogI2ViZWJlYjtcXG4gICAgLS1zZWxlY3RlZC10YXNrLWJhY2tncm91bmQtY29sb3I6ICNmNGY2ZmZcXG59XFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIC8qIGZvb3RlciBzdXBwb3J0ICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2VcXFwiLFxcXCJTZWdvZSBVSVxcXCIsXFxcIkFyaWFsXFxcIixcXFwic2Fucy1zZXJpZlxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhlYWRlciAudGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ1l1c2VpIE1hZ2ljJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2VcXFwiLFxcXCJTZWdvZSBVSVxcXCIsXFxcIkFyaWFsXFxcIixcXFwic2Fucy1zZXJpZlxcXCI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkgLSB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5zaWRlLWJsb2NrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGUtYmxvY2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4uc2lkZS1ibG9jay5jdXJyZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWxlY3RlZC1jb2xvcik7XFxufVxcblxcbi5zaWRlLWljb24ge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5cXG4uY29udGFpbmVyLmNvbGxhcHNlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMDBweDtcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5hZGQtdHJpZ2dlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4udG9kby1jb2xsYXBzZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICAgIGhlaWdodDogOTBweDtcXG59XFxuXFxuLnRvZG8tY29sbGFwc2U6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4udG9kby1jb2xsYXBzZS5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGVkLXRhc2stYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi50b2RvLWltcG9ydGFuY2Uge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmVkaXQtcGFuZWwub3BlbmVkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkgLSB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpOyAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmVkaXQtcGFuZWwuY2xvc2VkIHtcXG4gICAgd2lkdGg6IDA7XFxufVxcblxcbi5lZGl0LXBhbmVsIC5lZGl0LWJsb2NrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjNzc3Nzc5O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZWJlYmViO1xcbn1cXG5cXG4uZWRpdC1wYW5lbCBpbnB1dCB7XFxuICAgIC8qIG91dGxpbmU6IG5vbmU7ICovXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxufVxcblxcbi5lZGl0LWJsb2NrOmhvdmVyLFxcbi5lZGl0LXBhbmVsIGlucHV0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG4uZWRpdC1wYW5lbCBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmVkaXQtcGFuZWwgLnNpZGUtY29udHJvbC1ibG9jayB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm15LWRheS1ibG9jayB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm15LWRheS1ibG9jay5hZGRlZHtcXG4gICAgY29sb3I6IHJnYigyMSwgOTUsIDI1NSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLHVCQUF1QjtJQUN2QixtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6Qix5Q0FBeUM7SUFDekMscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEI7QUFDSjs7QUFFQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9EQUFvRDtJQUNwRCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdEQUFnRDtJQUNoRCxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9EQUFvRDtJQUNwRCxhQUFhO0lBQ2IscUVBQXFFO0lBQ3JFLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixpREFBaUQ7SUFDakQsMkJBQTJCO0lBQzNCLHFFQUFxRTtJQUNyRSxpRUFBaUU7SUFDakUsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdURBQXVEO0FBQzNEOztBQUVBO0lBQ0ksa0RBQWtEO0lBQ2xELDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsU0FBUztJQUNULGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksdURBQXVEO0FBQzNEOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLDJCQUEyQjtJQUMzQixxRUFBcUU7SUFDckUsaUVBQWlFLEtBQUssYUFBYTtJQUNuRixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGlEQUFpRDtJQUNqRCxhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGlEQUFpRDtJQUNqRCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxrREFBa0Q7SUFDbEQsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjMDA3OGQ3O1xcbiAgICAtLWhlYWRlci1jb2xvcjogI2ZlZmVmZTtcXG4gICAgLS1zaWRlYmFyLWJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XFxuICAgIC0tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXG4gICAgLS1zZWxlY3RlZC1jb2xvcjogIzNiNjllNTtcXG4gICAgLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICAgIC0tbWFpbi1jb2xvcjogIzMwMzQzYjtcXG4gICAgLS1ibHVlLWZvbnQtY29sb3I6ICMwMDc4ZDc7XFxuICAgIC0taGVhZGVyLWhlaWdodDogODBweDtcXG4gICAgLS1mb290ZXItaGVpZ2h0OiAwcHg7XFxuICAgIC0tc2lkZWJhci13aWR0aDogMzAwcHg7XFxuICAgIC0tYm9yZGVyLWdyZXk6ICNlYmViZWI7XFxuICAgIC0tc2VsZWN0ZWQtdGFzay1iYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNmZmXFxufVxcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxufVxcblxcbmh0bWwge1xcbiAgICAvKiBmb290ZXIgc3VwcG9ydCAqL1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lXFxcIixcXFwiU2Vnb2UgVUlcXFwiLFxcXCJBcmlhbFxcXCIsXFxcInNhbnMtc2VyaWZcXFwiO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oZWFkZXIgLnRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdZdXNlaSBNYWdpYycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lXFxcIixcXFwiU2Vnb2UgVUlcXFwiLFxcXCJBcmlhbFxcXCIsXFxcInNhbnMtc2VyaWZcXFwiO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkgLSB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkgLSB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uc2lkZS1ibG9jayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlLWJsb2NrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuLnNpZGUtYmxvY2suY3VycmVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc2VsZWN0ZWQtY29sb3IpO1xcbn1cXG5cXG4uc2lkZS1pY29uIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG59XFxuXFxuLmNvbnRhaW5lci5jb2xsYXBzZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMzAwcHg7XFxufVxcblxcbi5hZGQtYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogODBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4uYWRkLXRyaWdnZXIge1xcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS1mb250LWNvbG9yKTtcXG59XFxuXFxuLnRvZG8tY29sbGFwc2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgICBoZWlnaHQ6IDkwcHg7XFxufVxcblxcbi50b2RvLWNvbGxhcHNlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuLnRvZG8tY29sbGFwc2Uuc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3RlZC10YXNrLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4udG9kby1pbXBvcnRhbmNlIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5lZGl0LXBhbmVsLm9wZW5lZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIHZhcigtLWZvb3Rlci1oZWlnaHQpKTsgICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5lZGl0LXBhbmVsLmNsb3NlZCB7XFxuICAgIHdpZHRoOiAwO1xcbn1cXG5cXG4uZWRpdC1wYW5lbCAuZWRpdC1ibG9jayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogIzc3Nzc3OTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ViZWJlYjtcXG59XFxuXFxuLmVkaXQtcGFuZWwgaW5wdXQge1xcbiAgICAvKiBvdXRsaW5lOiBub25lOyAqL1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbn1cXG5cXG4uZWRpdC1ibG9jazpob3ZlcixcXG4uZWRpdC1wYW5lbCBpbnB1dDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxuLmVkaXQtcGFuZWwgYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5lZGl0LXBhbmVsIC5zaWRlLWNvbnRyb2wtYmxvY2sge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5teS1kYXktYmxvY2sge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5teS1kYXktYmxvY2suYWRkZWR7XFxuICAgIGNvbG9yOiByZ2IoMjEsIDk1LCAyNTUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1Rvb0RvIExJU1QnO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xufVxuXG5leHBvcnQge2NyZWF0ZUhlYWRlcn07IiwiaW1wb3J0IFN0YXIgZnJvbSAnLi9pbWcvc3RhcmVkLnBuZyc7XG5pbXBvcnQgVW5zdGFyIGZyb20gJy4vaW1nL3Vuc3Rhci5wbmcnO1xuaW1wb3J0IE15RGF5IGZyb20gJy4vaW1nL3N1bi5wbmcnO1xuaW1wb3J0IENvbGxhcHNlIGZyb20gJy4vaW1nL2NvbGxhcHNlLnBuZyc7XG5pbXBvcnQgRGVsZXRlIGZyb20gJy4vaW1nL2RlbGV0ZS5wbmcnO1xuXG5sZXQgdGFza0luZGV4ID0gMDtcblxuY29uc3QgdGFza0xpc3QgPSAoKCkgPT4ge1xuICAgIGxldCB0YXNrbGlzdCA9IFtdO1xuICAgIGxldCB0YXNrTnVtID0gMDtcblxuICAgIGNvbnN0IHNhdmVUb0xvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza051bScsIHRhc2tOdW0pO1xuICAgICAgICAgICAgdGFza2xpc3QuZm9yRWFjaCgodGFzaywgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0YXNrJHtpfWAsIEpTT04uc3RyaW5naWZ5KHRhc2spKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBmZXRjaEZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgICAgICAgICBpZihsb2NhbFN0b3JhZ2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRhc2tOdW0gPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza051bScpKTtcbiAgICAgICAgICAgICAgICB0YXNrbGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTnVtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza2xpc3QucHVzaChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0YXNrJHtpfWApKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWRkID0gKHRhc2spID0+IHtcbiAgICAgICAgdGFza2xpc3QucHVzaCh0YXNrKTtcbiAgICAgICAgdGFza051bSsrO1xuICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG4gICAgY29uc3QgZ2V0VGFza051bSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRhc2tOdW07XG4gICAgfVxuICAgIGNvbnN0IHJlbW92ZSA9ICh0YXNrSW5kZXgpID0+IHtcbiAgICAgICAgdGFza2xpc3Quc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgICAgIHRhc2tOdW0tLTtcbiAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuICAgIGNvbnN0IGdldFRhc2sgPSAodGFza0luZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiB0YXNrbGlzdFt0YXNrSW5kZXhdO1xuICAgIH1cbiAgICBjb25zdCBzZXRUYXNrID0gKGluZGV4LCB0YXNrKSA9PiB7XG4gICAgICAgIHRhc2tsaXN0W2luZGV4XSA9IHRhc2s7XG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgIH1cbiAgICBjb25zdCBnZXRBbGxUYXNrID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGFza2xpc3Q7XG4gICAgfVxuICAgIHJldHVybiB7YWRkLCBnZXRUYXNrTnVtLCByZW1vdmUsIGdldFRhc2ssIHNldFRhc2ssIGdldEFsbFRhc2ssIHNhdmVUb0xvY2FsU3RvcmFnZSwgZmV0Y2hGcm9tTG9jYWxTdG9yYWdlfTtcbn0pKCk7XG5cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIHZhciBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIHZhciB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxufVxuXG5cblxuLy8gQ3JlYXRlIHRoZSBtYWluIHBhcnQgb2YgdGhlIHBhZ2UuXG5jb25zdCBjcmVhdGVDb250YWluZXIgPSAoZmlsdGVyKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgIGxldCBkZWZhdWx0SW1wb3J0YW5jZTtcbiAgICBsZXQgZGVmYXVsdE15RGF5O1xuICAgIGlmKGZpbHRlciA9PSAnMCcpIHsgIC8vIEFsbCB0YXNrc1xuICAgICAgICBkZWZhdWx0SW1wb3J0YW5jZSA9ICdmYWxzZSc7XG4gICAgICAgIGRlZmF1bHRNeURheSA9ICdmYWxzZSc7XG4gICAgfVxuICAgIGVsc2UgaWYoZmlsdGVyID09ICcxJykgeyAvLyBJbXBvcnRhbnQgdGFza3Mgb25seVxuICAgICAgICBkZWZhdWx0SW1wb3J0YW5jZSA9ICd0cnVlJztcbiAgICAgICAgZGVmYXVsdE15RGF5ID0gJ2ZhbHNlJzsgXG4gICAgfVxuICAgIGVsc2UgaWYoZmlsdGVyID09ICcyJykgeyAvLyBNeWRheSB0YXNrc1xuICAgICAgICBkZWZhdWx0SW1wb3J0YW5jZSA9ICdmYWxzZSc7XG4gICAgICAgIGRlZmF1bHRNeURheSA9ICd0cnVlJzsgXG4gICAgfVxuXG5cbiAgICAvLyBTZXR1cCBhIHRvZG8gbG9naWNhbGx5LCBhdHRyaWJ1dGUgaW5mb3JtYXRpb24gdG8gaXQuXG4gICAgbGV0IGNyZWF0ZVRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBpbXBvcnRhbmNlLCBzdGF0dXMsIG15RGF5KSA9PiB7XG4gICAgICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBpbXBvcnRhbmNlLCBzdGF0dXMsIG15RGF5fTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRCdXR0b24gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgX2NsZWFyID0gKGJsb2NrKSA9PiB7XG4gICAgICAgICAgICBibG9jay50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRXhwYW5kIGFkZCBwYW5lbCBhZnRlciBjbGlja2luZy5cbiAgICAgICAgY29uc3QgZXhwYW5kID0gKCkgPT4ge1xuICAgICAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbGxhcHNlJyk7XG4gICAgICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZXhwYW5kJyk7XG4gICAgICAgICAgICBfY2xlYXIoYWRkQnV0dG9uKTtcbiAgICAgICAgICAgIGNvbnN0IGFkZFN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCBhZGRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCBhZGREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGNvbnN0IGFkZFRyaWdnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gYWRkVHJpZ2dlciBpcyB0aGUgYnV0dG9uIHRoYXQgdHJpZ2dlciB0aGUgYWRkaW5nIGFjdGlvblxuICAgIFxuICAgICAgICAgICAgYWRkVHJpZ2dlci5jbGFzc0xpc3QuYWRkKCdhZGQtdHJpZ2dlcicpO1xuICAgICAgICAgICAgYWRkVHJpZ2dlci50ZXh0Q29udGVudCA9ICdBREQnO1xuICAgICAgICAgICAgYWRkVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBhZGRUb2RvKGFkZFRpdGxlLnZhbHVlLCAnQWRkIGEgbm90ZScsIGFkZER1ZURhdGUudmFsdWUsIGRlZmF1bHRJbXBvcnRhbmNlLCBhZGRTdGF0dXMuY2hlY2tlZCwgZGVmYXVsdE15RGF5KTtcbiAgICAgICAgICAgICAgICByZW5kZXIoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdC5nZXRBbGxUYXNrKCkpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFkZFN0YXR1cy5jbGFzc0xpc3QuYWRkKCdyb3VuZC1jaGVja2JveCcsICdhZGQtc3RhdHVzJyk7XG4gICAgICAgICAgICBhZGRTdGF0dXMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgICAgICBhZGRUaXRsZS5jbGFzc0xpc3QuYWRkKCdhZGQtdGl0bGUnKTtcbiAgICAgICAgICAgIGFkZER1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZCk7XG4gICAgICAgICAgICBhZGRCdXR0b24uYXBwZW5kQ2hpbGQoYWRkU3RhdHVzKTtcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5hcHBlbmRDaGlsZChhZGRUaXRsZSk7XG4gICAgICAgICAgICBhZGRCdXR0b24uYXBwZW5kQ2hpbGQoYWRkRHVlRGF0ZSk7XG4gICAgICAgICAgICBhZGRCdXR0b24uYXBwZW5kQ2hpbGQoYWRkVHJpZ2dlcik7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgX2NsZWFyKGFkZEJ1dHRvbik7XG4gICAgICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLWJ1dHRvbicpO1xuICAgICAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJyk7XG4gICAgICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2FkZC1pY29uJyk7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgICAgICAgICBpY29uLnRleHRDb250ZW50ID0gJysnO1xuICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9ICdBZGQgYSB0YXNrJztcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZCk7XG4gICAgICAgICAgICBhZGRCdXR0b24uYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgICAgICBhZGRCdXR0b24uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge2V4cGFuZCwgY3JlYXRlfTtcbiAgICB9KSgpO1xuXG4gICAgLy8gQ3JlYXRlIGVsZW1lbnRzIG9mIHRvZG8gb24gdGhlIHBhZ2UuXG4gICAgLy8gRG8gbm90IGNoYW5nZSBlYXNpbHlcbiAgICBjb25zdCBjb2xsYXBzZVRvZG8gPSAodG9kbykgPT4gIHtcbiAgICAgICAgY29uc3QgdG9nZ2xlSW1wb3J0YW5jZSA9ICh0b2RvKSA9PiB7XG4gICAgICAgICAgICBpZih0b2RvLmltcG9ydGFuY2UgPT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgdG9kby5pbXBvcnRhbmNlID0gJ2ZhbHNlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYodG9kby5pbXBvcnRhbmNlID09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICB0b2RvLmltcG9ydGFuY2UgPSAndHJ1ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgZGlzcGxheUltcG9ydGFuY2VJbWcgPSAodG9kbykgPT4ge1xuICAgICAgICAgICAgaWYodG9kby5pbXBvcnRhbmNlID09ICd0cnVlJylcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RhcjtcbiAgICAgICAgICAgIGVsc2UgaWYodG9kby5pbXBvcnRhbmNlID09ICdmYWxzZScpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFVuc3RhcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkaXNwbGF5ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9kb0NvbGxhcHNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0b2RvQ29sbGFwc2UuY2xhc3NMaXN0LmFkZCgndG9kby1jb2xsYXBzZScpO1xuICAgICAgICAgICAgY29uc3QgdG9kb1N0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JbXBvcnRhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICB0b2RvU3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tc3RhdHVzJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgICAgICB0b2RvU3RhdHVzLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICAgICAgdG9kb1N0YXR1cy5jaGVja2VkID0gdG9kby5zdGF0dXM7XG5cbiAgICAgICAgICAgIHRvZG9Db2xsYXBzZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCB0YXNrSW5kZXgpO1xuICAgICAgICAgICAgdGFza0luZGV4Kys7XG5cbiAgICAgICAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlJyk7XG4gICAgICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgdG9kb0ltcG9ydGFuY2UuY2xhc3NMaXN0LmFkZCgndG9kby1pbXBvcnRhbmNlJyk7XG4gICAgICAgICAgICB0b2RvSW1wb3J0YW5jZS5zcmMgPSBkaXNwbGF5SW1wb3J0YW5jZUltZyh0b2RvKTtcblxuICAgICAgICAgICAgdG9kb1N0YXR1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9kby5zdGF0dXMgPSB0b2RvU3RhdHVzLmNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgdGFza0xpc3Quc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdG9kb0ltcG9ydGFuY2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRvZ2dsZUltcG9ydGFuY2UodG9kbyk7XG4gICAgICAgICAgICAgICAgdG9kb0ltcG9ydGFuY2Uuc3JjID0gZGlzcGxheUltcG9ydGFuY2VJbWcodG9kbyk7XG4gICAgICAgICAgICAgICAgdGFza0xpc3Quc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgICB9KSAgICAgXG4gICAgXG4gICAgICAgICAgICB0b2RvQ29sbGFwc2UuYXBwZW5kQ2hpbGQodG9kb1N0YXR1cyk7XG4gICAgICAgICAgICB0b2RvQ29sbGFwc2UuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgICAgICAgICAgIHRvZG9Db2xsYXBzZS5hcHBlbmRDaGlsZCh0b2RvSW1wb3J0YW5jZSk7XG4gICAgICAgICAgICByZXR1cm4gdG9kb0NvbGxhcHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7ZGlzcGxheX07XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdFBhbmVsID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgZWRpdFBhbmVsQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wYW5lbCcpO1xuICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgY29uc3QgX2NyZWF0ZUVkaXRCbG9jayA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKCdlZGl0LWJsb2NrJyk7XG4gICAgICAgICAgICByZXR1cm4gYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgX2NsZWFyID0gKCkgPT4ge1xuICAgICAgICAgICAgZWRpdFBhbmVsQmxvY2sudGV4dENvbnRlbnQgPSAnJzsgXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkaXNwbGF5ID0gKGN1cnJlbnRJbmRleCkgPT4ge1xuICAgICAgICAgICAgaW5kZXggPSBjdXJyZW50SW5kZXg7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGFzayA9IHRhc2tMaXN0LmdldFRhc2soY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgX2NsZWFyKCk7XG4gICAgICAgICAgICBjb25zdCBjb2xsYXBzZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgY29sbGFwc2VCdXR0b24uc3JjID0gQ29sbGFwc2U7XG4gICAgICAgICAgICBjb2xsYXBzZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzaWRlLWNvbGxhcHNlLWJ1dHRvbicsICdzaWRlLWljb24nKTtcbiAgICAgICAgICAgIGNvbGxhcHNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2UpO1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uc3JjID0gRGVsZXRlO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NpZGUtZGVsZXRlLWJ1dHRvbicsICdzaWRlLWljb24nKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRhc2spO1xuICAgICAgICAgICAgY29uc3QgY29udHJvbEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb250cm9sQmxvY2suY2xhc3NMaXN0LmFkZCgnc2lkZS1jb250cm9sLWJsb2NrJyk7XG4gICAgICAgICAgICBjb250cm9sQmxvY2suYXBwZW5kQ2hpbGQoY29sbGFwc2VCdXR0b24pO1xuICAgICAgICAgICAgY29udHJvbEJsb2NrLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgICAgICBjb25zdCB0aXRsZUJsb2NrID0gX2NyZWF0ZUVkaXRCbG9jaygpO1xuICAgICAgICAgICAgY29uc3QgbXlEYXlCbG9jayA9IF9jcmVhdGVFZGl0QmxvY2soKTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGVCbG9jayA9IF9jcmVhdGVFZGl0QmxvY2soKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uQmxvY2sgPSBfY3JlYXRlRWRpdEJsb2NrKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGNvbnN0IG15RGF5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRpdGxlLmRlZmF1bHRWYWx1ZSA9IGN1cnJlbnRUYXNrLnRpdGxlO1xuICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnZWRpdC1wYW5lbC10aXRsZScpO1xuICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdzaWRlLWljb24nKTtcbiAgICAgICAgICAgIG15RGF5VGl0bGUuY2xhc3NMaXN0LmFkZCgnc2lkZS1teS1kYXktdGl0bGUnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3NpZGUtZGVzYycpO1xuICAgICAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdzaWRlLWR1ZS1kYXRlJyk7XG4gICAgICAgICAgICBkdWVEYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgICAgICBkdWVEYXRlLnZhbHVlID0gY3VycmVudFRhc2suZHVlRGF0ZTtcbiAgICAgICAgICAgIHNhdmVCdXR0b24udGV4dENvbnRlbnQgPSAnU0FWRSc7XG4gICAgICAgICAgICBteURheUJsb2NrLmRhdGFzZXQudmFsdWUgPSAnZmFsc2UnO1xuICAgICAgICAgICAgbXlEYXlCbG9jay5jbGFzc0xpc3QuYWRkKCdteS1kYXktYmxvY2snKTtcbiAgICAgICAgICAgIGlmKGN1cnJlbnRUYXNrLm15RGF5ID09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgIG15RGF5QmxvY2suY2xhc3NMaXN0LmFkZCgnYWRkZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG15RGF5QmxvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYobXlEYXlCbG9jay5kYXRhc2V0LnZhbHVlID09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICAgICAgbXlEYXlCbG9jay5jbGFzc0xpc3QudG9nZ2xlKCdhZGRlZCcpO1xuICAgICAgICAgICAgICAgICAgICBteURheUJsb2NrLmRhdGFzZXQudmFsdWUgPSAndHJ1ZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYobXlEYXlCbG9jay5kYXRhc2V0LnZhbHVlID09ICd0cnVlJyl7XG4gICAgICAgICAgICAgICAgICAgIG15RGF5QmxvY2suY2xhc3NMaXN0LnRvZ2dsZSgnYWRkZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgbXlEYXlCbG9jay5kYXRhc2V0LnZhbHVlID0gJ2ZhbHNlJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpY29uLnNyYyA9IE15RGF5O1xuICAgICAgICAgICAgbXlEYXlUaXRsZS50ZXh0Q29udGVudCA9ICdBZGQgdG8gTXkgRGF5JztcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gY3VycmVudFRhc2suZGVzY3JpcHRpb247XG4gICAgICAgICAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdCk7XG5cbiAgICAgICAgICAgIHRpdGxlQmxvY2suYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICAgICAgbXlEYXlCbG9jay5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgICAgIG15RGF5QmxvY2suYXBwZW5kQ2hpbGQobXlEYXlUaXRsZSk7XG4gICAgICAgICAgICBkdWVEYXRlQmxvY2suYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkJsb2NrLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICAgICAgZWRpdFBhbmVsQmxvY2suYXBwZW5kQ2hpbGQodGl0bGVCbG9jayk7XG4gICAgICAgICAgICBlZGl0UGFuZWxCbG9jay5hcHBlbmRDaGlsZChteURheUJsb2NrKTtcbiAgICAgICAgICAgIGVkaXRQYW5lbEJsb2NrLmFwcGVuZENoaWxkKGR1ZURhdGVCbG9jayk7XG4gICAgICAgICAgICBlZGl0UGFuZWxCbG9jay5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkJsb2NrKTtcbiAgICAgICAgICAgIGVkaXRQYW5lbEJsb2NrLmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xuICAgICAgICAgICAgZWRpdFBhbmVsQmxvY2suYXBwZW5kQ2hpbGQoY29udHJvbEJsb2NrKTtcbiAgICAgICAgICAgIGVkaXRQYW5lbEJsb2NrLmNsYXNzTGlzdC5hZGQoJ29wZW5lZCcpO1xuICAgICAgICAgICAgZWRpdFBhbmVsQmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2VkJyk7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdldEVkaXRlZEluZm8gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmZvID0gdGFza0xpc3QuZ2V0VGFzayhpbmRleCk7XG4gICAgICAgICAgICBjb25zdCBteURheUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15LWRheS1ibG9jaycpO1xuICAgICAgICAgICAgLy9yZWZyZXNoIGluZm8gYWNjb3JpbmcgdG8gdGhlIHByZXNlbnQgZWRpdCBwYW5lbC5cbiAgICAgICAgICAgIGluZm8ubXlEYXkgPSBteURheUJsb2NrLmRhdGFzZXQudmFsdWU7XG4gICAgICAgICAgICBpbmZvLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtZGVzYycpLnZhbHVlO1xuICAgICAgICAgICAgaW5mby5kdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtZHVlLWRhdGUnKS52YWx1ZTtcbiAgICAgICAgICAgIGluZm8udGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wYW5lbC10aXRsZScpLnZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlZGl0ID0gKCkgPT4ge1xuICAgICAgICAgICAgdGFza0xpc3Quc2V0VGFzayhpbmRleCwgZ2V0RWRpdGVkSW5mbygpKTsgXG4gICAgICAgICAgICB0YXNrTGlzdC5zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgICAgICByZW5kZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWRpdFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcGFuZWwnKTtcbiAgICAgICAgICAgIGVkaXRQYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuZWQnKTtcbiAgICAgICAgICAgIGVkaXRQYW5lbC5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdjb2xsYXBzZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVsZXRlVGFzayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRhc2tMaXN0LnJlbW92ZShpbmRleCk7XG4gICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgICAgcmVuZGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge2Rpc3BsYXl9XG4gICAgfSkoKTtcblxuXG4gICAgLy8gYWRkIHRhc2tcbiAgICBjb25zdCBhZGRUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaW1wb3J0YW5jZSwgc3RhdHVzLCBteURheSkgPT4ge1xuICAgICAgICBpZih0aXRsZSA9PSAnJyB8fCB0aXRsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhbGVydChcIkVSUk9SOiBFbXB0eSBUaXRsZSFcIik7IC8vI1RPRE9jaGFuZ2UgdG8gQWRkIHRyaWdnZXIgbm90IHdvcmtpbmcgYW5kIGJlY2FtZSBibGFjay5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGFzayA9IGNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBpbXBvcnRhbmNlLCBzdGF0dXMsIG15RGF5KSAvLyBjcmVhdGUgYSB0YXNrXG4gICAgICAgIHRhc2tMaXN0LmFkZCh0YXNrKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGlja1Rhc2sgPSAoZSkgPT4geyAvLyBkaXNwbGF5IGVkaXQgcGFuZWwgb24gY2xpY2tcbiAgICAgICAgICAgIGlmKCEoZS50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKCd0b2RvLXN0YXR1cycpIHx8IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PSAndG9kby1pbXBvcnRhbmNlJykgKXtcbiAgICAgICAgICAgICAgICBlZGl0UGFuZWwuZGlzcGxheShlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8tY29sbGFwc2UnKS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG5cbiAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIHRhc2tJbmRleCA9IDA7XG4gICAgICAgIHRhc2tMaXN0LmZldGNoRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICAvLyBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgYWRkQnV0dG9uLmNyZWF0ZSgpO1xuICAgICAgICBpZihmaWx0ZXIgPT0gJzAnKSB7XG4gICAgICAgICAgICB0YXNrTGlzdC5nZXRBbGxUYXNrKCkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9CbG9jayA9IGNvbGxhcHNlVG9kbyh0YXNrKS5kaXNwbGF5KCk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9CbG9jayk7Ly9kaXNwbGF5IHRoZSB0YXNrIG9uIG1haW4gcGFnZVxuICAgICAgICAgICAgICAgIHRvZG9CbG9jay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrVGFzayk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZmlsdGVyID09ICcxJykge1xuICAgICAgICAgICAgdGFza0xpc3QuZ2V0QWxsVGFzaygpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICBpZih0YXNrLmltcG9ydGFuY2UgPT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9CbG9jayA9IGNvbGxhcHNlVG9kbyh0YXNrKS5kaXNwbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQmxvY2spOy8vZGlzcGxheSB0aGUgdGFzayBvbiBtYWluIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgdG9kb0Jsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tUYXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZmlsdGVyID09ICcyJykge1xuICAgICAgICAgICAgdGFza0xpc3QuZ2V0QWxsVGFzaygpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICBpZih0YXNrLm15RGF5ID09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvQmxvY2sgPSBjb2xsYXBzZVRvZG8odGFzaykuZGlzcGxheSgpO1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0Jsb2NrKTsvL2Rpc3BsYXkgdGhlIHRhc2sgb24gbWFpbiBwYWdlXG4gICAgICAgICAgICAgICAgICAgIHRvZG9CbG9jay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrVGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7YWRkVG9kbywgYWRkQnV0dG9uLCBjb2xsYXBzZVRvZG8sIHJlbmRlcn07XG59XG5cbmV4cG9ydCB7Y3JlYXRlQ29udGFpbmVyfTsiLCJpbXBvcnQgc3VuUGljIGZyb20gJy4vaW1nL3N1bi5wbmcnO1xuaW1wb3J0IFN0YXIgZnJvbSAnLi9pbWcvdW5zdGFyLnBuZyc7XG5pbXBvcnQgSW5ib3ggZnJvbSAnLi9pbWcvYWxsLWluYm94LnBuZyc7XG5cbmNvbnN0IGNyZWF0ZVNpZGVibG9jayA9IChuYW1lLCBpbWdTcmMpID0+IHtcbiAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBpY29uLnNyYyA9IGltZ1NyYztcbiAgICBibG9jay5jbGFzc0xpc3QuYWRkKCdzaWRlLWJsb2NrJyk7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdzaWRlLWljb24nKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdzaWRlLXRpdGxlJyk7XG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgYmxvY2suYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgcmV0dXJuIGJsb2NrO1xufVxuXG5jb25zdCBjcmVhdGVTaWRlYmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuXG4gICAgY29uc3QgbXlEYXlCbG9jayA9IGNyZWF0ZVNpZGVibG9jaygnTXkgRGF5Jywgc3VuUGljKTtcbiAgICBjb25zdCBpbXBvcnRhbnRCbG9jayA9Y3JlYXRlU2lkZWJsb2NrKCdJbXBvcnRhbnQnLCBTdGFyKTtcbiAgICBjb25zdCBpbmJveEJsb2NrID0gY3JlYXRlU2lkZWJsb2NrKCdBbGwgSW5ib3gnLCBJbmJveCk7XG5cbiAgICBteURheUJsb2NrLmNsYXNzTGlzdC5hZGQoJ215LWRheS1jbGFzcycpO1xuICAgIGltcG9ydGFudEJsb2NrLmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudC1jbGFzcycpO1xuICAgIGluYm94QmxvY2suY2xhc3NMaXN0LmFkZCgnaW5ib3gtY2xhc3MnKVxuXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChpbmJveEJsb2NrKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG15RGF5QmxvY2spO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoaW1wb3J0YW50QmxvY2spO1xufVxuXG5leHBvcnQge2NyZWF0ZVNpZGViYXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlQ29udGFpbmVyfSBmcm9tICcuL21haW4nO1xuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXIuanMnO1xuaW1wb3J0IHsgY3JlYXRlU2lkZWJhciB9IGZyb20gJy4vc2lkZWJhci5qcyc7XG5cblxuXG5jb25zdCByZW5kZXJQYWdlID0gKCgpID0+IHtcbiAgICBjcmVhdGVIZWFkZXIoKTtcbiAgICBjcmVhdGVTaWRlYmFyKCk7XG4gICAgY29uc3QgYWxsSW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtY2xhc3MnKTtcbiAgICBjb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1wb3J0YW50LWNsYXNzJyk7XG4gICAgY29uc3QgbXlEYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktZGF5LWNsYXNzJyk7XG4gICAgYWxsSW5ib3guY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgIGNyZWF0ZUNvbnRhaW5lcignMCcpLnJlbmRlcigpO1xuICAgIGNvbnN0IGNsaWNrQWxsSW5ib3ggPSAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZUNvbnRhaW5lcignMCcpLnJlbmRlcigpO1xuICAgICAgICBhbGxJbmJveC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgICAgIGltcG9ydGFudC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgICAgIG15RGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGlja0ltcG9ydGFudCA9ICgpID0+IHtcbiAgICAgICAgY3JlYXRlQ29udGFpbmVyKCcxJykucmVuZGVyKCk7XG4gICAgICAgIGFsbEluYm94LmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICAgICAgaW1wb3J0YW50LmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICAgICAgbXlEYXkuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuICAgIH1cblxuICAgIGNvbnN0IGNsaWNrTXlEYXkgPSAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZUNvbnRhaW5lcignMicpLnJlbmRlcigpO1xuICAgICAgICBhbGxJbmJveC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgICAgIGltcG9ydGFudC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgICAgIG15RGF5LmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICB9XG4gICAgYWxsSW5ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0FsbEluYm94KTtcbiAgICBpbXBvcnRhbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0ltcG9ydGFudCk7XG4gICAgbXlEYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja015RGF5KTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=