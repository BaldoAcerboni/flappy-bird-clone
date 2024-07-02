/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 24px;
}
body {
  overflow: hidden;
}

main {
  width: 100vw;
  height: 100vh;
  background: rgb(21, 175, 246);
  overflow: hidden;
}

.shade {
  background: rgb(4, 126, 182);

  animation: darken 1s ease-in-out;
}

@keyframes darken {
  from {
    background: rgb(21, 175, 246);
  }
  to {
    background: rgb(4, 126, 182);
  }
}

.sunny {
  background: rgb(21, 175, 246);
  animation: brighten 1s ease-in-out;
}

@keyframes brighten {
  from {
    background: rgb(4, 126, 182);
  }
  to {
    background: rgb(21, 175, 246);
  }
}

#sun {
  position: fixed;
  right: 15%;
  top: 10%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(#eeff00, #fbde00);
  box-shadow: 0 0 10px 10px #f1ff2f;
}

#mountains {
  position: fixed;
  min-width: 110%;
  max-height: 70%;
  left: -10%;
  bottom: 0;
}

#bird {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 20%;
  left: 20%;
  z-index: 1;
}

#new-game-btn {
  min-width: 20%;
  padding: 1rem;
  cursor: pointer;
}

#new-game-btn-cont {
  width: 80%;
  height: 80%;
  position: absolute;
  top: 10%;
  left: 10%;
  background: rgba(50, 50, 50, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

#info {
  position: absolute;
  bottom: 1rem;
  font-size: 1.5rem;
  color: aliceblue;
}

#credits {
  position: absolute;
  bottom: 0;
  font-size: 0.7rem;
  color: white;
  background: rgba(28, 28, 28, 0.5);
}

#credits > a {
  font-size: 0.7rem;
}

#title {
  position: absolute;
  top: 0;
  font-size: 3rem;
  color: rgb(252, 169, 2);
}

.tob {
  position: absolute;
  top: 0;
  width: 50px;
  background-color: rgb(255, 145, 0);
}

.bob {
  position: absolute;
  bottom: 0;
  width: 50px;
  background-color: rgb(255, 145, 0);
}

#score {
  position: fixed;
  top: 0;
  left: 0;
  margin: 5 5;
  font-size: 1.5rem;
  color: aliceblue;
  background: rgba(50, 50, 50, 0.5);
  z-index: 3;
}

#final-score {
  font-size: 1.5rem;
  color: aliceblue;
}

#top-scores {
  position: absolute;
  left: 0;
  top: 3.5rem;
  background: #9f9f9f;
  border-radius: 0.3rem;
  padding: 0.2rem;
  max-width: 25%;
  list-style: rank;
}

#top-scores > li {
  text-align: right;
  margin-left: 1.5rem;
}

@counter-style rank {
  system: numeric;
  symbols: "" "1" "2" "3" "4" "5" "6" "7" "8" "9" "10";
  suffix: ")";
}

#name-modal {
  position: absolute;
  top: 10%;
  background: #121111;
  border-radius: 5%;
  padding: 2rem;
}

#name-modal > h2 {
  color: white;
}

#submit-name {
  margin: 1rem auto 0 auto;
}

.cloud {
  position: absolute;
  top: 5%;
  width: 200px;
  height: 150px;
}

.cloud.high {
  top: 5%;
}

.cloud.low {
  top: 25%;
}

.pause-btn {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

#play-btn {
  width: 150px;
  height: 150px;
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT;wEACsE;EACtE,eAAe;AACjB;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,4BAA4B;;EAE5B,gCAAgC;AAClC;;AAEA;EACE;IACE,6BAA6B;EAC/B;EACA;IACE,4BAA4B;EAC9B;AACF;;AAEA;EACE,6BAA6B;EAC7B,kCAAkC;AACpC;;AAEA;EACE;IACE,4BAA4B;EAC9B;EACA;IACE,6BAA6B;EAC/B;AACF;;AAEA;EACE,eAAe;EACf,UAAU;EACV,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,6CAA6C;EAC7C,iCAAiC;AACnC;;AAEA;EACE,eAAe;EACf,eAAe;EACf,eAAe;EACf,UAAU;EACV,SAAS;AACX;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,iCAAiC;EACjC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,iBAAiB;EACjB,YAAY;EACZ,iCAAiC;AACnC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,WAAW;EACX,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,kCAAkC;AACpC;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,iBAAiB;EACjB,gBAAgB;EAChB,iCAAiC;EACjC,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,OAAO;EACP,WAAW;EACX,mBAAmB;EACnB,qBAAqB;EACrB,eAAe;EACf,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,oDAAoD;EACpD,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,OAAO;EACP,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;AACjB","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: 24px;\n}\nbody {\n  overflow: hidden;\n}\n\nmain {\n  width: 100vw;\n  height: 100vh;\n  background: rgb(21, 175, 246);\n  overflow: hidden;\n}\n\n.shade {\n  background: rgb(4, 126, 182);\n\n  animation: darken 1s ease-in-out;\n}\n\n@keyframes darken {\n  from {\n    background: rgb(21, 175, 246);\n  }\n  to {\n    background: rgb(4, 126, 182);\n  }\n}\n\n.sunny {\n  background: rgb(21, 175, 246);\n  animation: brighten 1s ease-in-out;\n}\n\n@keyframes brighten {\n  from {\n    background: rgb(4, 126, 182);\n  }\n  to {\n    background: rgb(21, 175, 246);\n  }\n}\n\n#sun {\n  position: fixed;\n  right: 15%;\n  top: 10%;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: radial-gradient(#eeff00, #fbde00);\n  box-shadow: 0 0 10px 10px #f1ff2f;\n}\n\n#mountains {\n  position: fixed;\n  min-width: 110%;\n  max-height: 70%;\n  left: -10%;\n  bottom: 0;\n}\n\n#bird {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  top: 20%;\n  left: 20%;\n  z-index: 1;\n}\n\n#new-game-btn {\n  min-width: 20%;\n  padding: 1rem;\n  cursor: pointer;\n}\n\n#new-game-btn-cont {\n  width: 80%;\n  height: 80%;\n  position: absolute;\n  top: 10%;\n  left: 10%;\n  background: rgba(50, 50, 50, 0.5);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n#info {\n  position: absolute;\n  bottom: 1rem;\n  font-size: 1.5rem;\n  color: aliceblue;\n}\n\n#credits {\n  position: absolute;\n  bottom: 0;\n  font-size: 0.7rem;\n  color: white;\n  background: rgba(28, 28, 28, 0.5);\n}\n\n#credits > a {\n  font-size: 0.7rem;\n}\n\n#title {\n  position: absolute;\n  top: 0;\n  font-size: 3rem;\n  color: rgb(252, 169, 2);\n}\n\n.tob {\n  position: absolute;\n  top: 0;\n  width: 50px;\n  background-color: rgb(255, 145, 0);\n}\n\n.bob {\n  position: absolute;\n  bottom: 0;\n  width: 50px;\n  background-color: rgb(255, 145, 0);\n}\n\n#score {\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: 5 5;\n  font-size: 1.5rem;\n  color: aliceblue;\n  background: rgba(50, 50, 50, 0.5);\n  z-index: 3;\n}\n\n#final-score {\n  font-size: 1.5rem;\n  color: aliceblue;\n}\n\n#top-scores {\n  position: absolute;\n  left: 0;\n  top: 3.5rem;\n  background: #9f9f9f;\n  border-radius: 0.3rem;\n  padding: 0.2rem;\n  max-width: 25%;\n  list-style: rank;\n}\n\n#top-scores > li {\n  text-align: right;\n  margin-left: 1.5rem;\n}\n\n@counter-style rank {\n  system: numeric;\n  symbols: \"\" \"1\" \"2\" \"3\" \"4\" \"5\" \"6\" \"7\" \"8\" \"9\" \"10\";\n  suffix: \")\";\n}\n\n#name-modal {\n  position: absolute;\n  top: 10%;\n  background: #121111;\n  border-radius: 5%;\n  padding: 2rem;\n}\n\n#name-modal > h2 {\n  color: white;\n}\n\n#submit-name {\n  margin: 1rem auto 0 auto;\n}\n\n.cloud {\n  position: absolute;\n  top: 5%;\n  width: 200px;\n  height: 150px;\n}\n\n.cloud.high {\n  top: 5%;\n}\n\n.cloud.low {\n  top: 25%;\n}\n\n.pause-btn {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n}\n\n#play-btn {\n  width: 150px;\n  height: 150px;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bird: () => (/* binding */ Bird),
/* harmony export */   Cloud: () => (/* binding */ Cloud),
/* harmony export */   CloudList: () => (/* binding */ CloudList),
/* harmony export */   ObsList: () => (/* binding */ ObsList),
/* harmony export */   Obstacle: () => (/* binding */ Obstacle),
/* harmony export */   Record: () => (/* binding */ Record),
/* harmony export */   Score: () => (/* binding */ Score),
/* harmony export */   cloudId: () => (/* binding */ cloudId),
/* harmony export */   obsId: () => (/* binding */ obsId)
/* harmony export */ });
/* harmony import */ var _img_cloud1_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/cloud1.svg */ "./src/img/cloud1.svg");
/* harmony import */ var _img_cloud2_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/cloud2.svg */ "./src/img/cloud2.svg");
/* harmony import */ var _img_cloud3_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/cloud3.svg */ "./src/img/cloud3.svg");
/* harmony import */ var _img_cloud4_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/cloud4.svg */ "./src/img/cloud4.svg");
/* harmony import */ var _img_cloud5_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/cloud5.svg */ "./src/img/cloud5.svg");
/* harmony import */ var _img_cloud6_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/cloud6.svg */ "./src/img/cloud6.svg");







class Bird {
  constructor() {
    this.node;
    this.speed = 0;
    this.acc = 0.2;
    this.x;
  }

  //GETTERS

  getPosY() {
    return Number(
      window.getComputedStyle(this.node).getPropertyValue("top").slice(0, -2)
    );
  }
  getPosX() {
    return this.x;
  }
  getSpeed() {
    return this.speed;
  }
  getNode() {
    return this.node;
  }

  //SETTERS

  setNode() {
    this.node = document.getElementById("bird");
  }
  setPosY(pos) {
    this.node.style.top = `${pos}px`;
  }
  setPosX() {
    //give numerical value to x pos based on client's window size(from the right)
    this.x = Number(
      window
        .getComputedStyle(this.getNode())
        .getPropertyValue("right")
        .slice(0, -2)
    );
  }
  setFallSpeed() {
    this.speed += this.acc;
  }
  resetFallSpeed() {
    this.speed = 0;
  }
  flap() {
    if (this.speed >= 6) {
      this.speed = 0;
    } else if (this.speed >= 0) {
      this.speed -= 6;
    } else {
      this.speed = -6;
    }
  }
}

class Obstacle {
  constructor() {
    this.topObsClass = "tob";
    this.bottomObsClass = "bob";
    this.topObsId;
    this.bottomObsId;
    this.topObsNode;
    this.bottomObsNode;
    this.topObsPos;
    this.bottomObsPos;
    this.obsSpeed = 1;
    this.x = 0;
    this.obsMoveId;
    this.cleared = false;
  }

  getObsId() {
    return [this.topObsId, this.bottomObsId];
  }
  getObsNode() {
    return [this.topObsNode, this.bottomObsNode];
  }
  getX() {
    return this.x;
  }
  getSpeed() {
    return this.obsSpeed;
  }
  getMoveId() {
    return this.obsMoveId;
  }
  getCleared() {
    return this.cleared;
  }

  setObsId() {
    this.topObsId = "t" + obsId;
    this.bottomObsId = "b" + obsId;

    obsId++;
  }
  setObsNode() {
    this.topObsNode = document.getElementById(this.topObsId);
    this.bottomObsNode = document.getElementById(this.bottomObsId);
  }
  //discrepancy between topObsPos(window.innerHeight * x) &
  //bottomObsPos(window.innerHeight * (1-x)) is due to the fact that topObsPos
  //needs the bottom property while bottomObsPos needs top property
  setObsHeight(rng) {
    if (rng === 0) {
      this.topObsPos = window.innerHeight * 0.75;
      this.bottomObsPos = window.innerHeight * 0.25 + 200;
    } else if (rng === 1) {
      this.topObsPos = window.innerHeight * 0.6;
      this.bottomObsPos = window.innerHeight * 0.4 + 200;
    } else if (rng === 2) {
      this.topObsPos = window.innerHeight * 0.45;
      this.bottomObsPos = window.innerHeight * 0.55 + 200;
    } else {
      this.topObsPos = window.innerHeight * 0.3;
      this.bottomObsPos = window.innerHeight * 0.7 + 200;
    }
    return [this.topObsPos, this.bottomObsPos];
  }
  setMoveId(id) {
    this.obsMoveId = id;
  }
  setX() {
    this.x += this.obsSpeed;
  }
  moveX(x) {
    this.topObsNode.style.right = `${x}px`;
    this.bottomObsNode.style.right = `${x}px`;
  }
  setCleared() {
    this.cleared = true;
  }
}

class ObsList {
  constructor() {
    this.arr = [];
    this.difficulty = 0;
  }

  //not very useful me thinks
  // getObs(a) {
  //   for (let i = 0; i < this.arr.length; i++) {
  //     if (this.arr[i] === a) {
  //       return this.arr[i];
  //     }
  //   }
  // }
  getDifficulty() {
    return this.difficulty;
  }

  addNewObs(a) {
    this.arr.push(a);
  }
  removeFirstObs() {
    this.arr.shift();
  }
  removeAllObs() {
    this.arr.splice(0, this.arr.length);
  }
  clearAllIntervals() {
    for (let i = 0; i < this.arr.length; i++) {
      clearInterval(this.arr[i].getMoveId());
    }
  }
  increaseDifficulty() {
    this.difficulty++;
  }
  resetDifficulty() {
    this.difficulty = 0;
  }
}

class Score {
  constructor(val, pla) {
    this.value = val || 0;
    this.node;
    this.player = pla;
  }
  getValue() {
    return this.value;
  }
  getNode() {
    return this.node;
  }
  getPlayer() {
    return this.player;
  }

  increaseValue() {
    this.value++;
  }
  resetValue() {
    this.value = 0;
  }
  setNode() {
    this.node = document.getElementById("score");
  }
  updateScore() {
    this.getNode().innerText = `SCORE: ${this.value}`;
  }
  setPlayer(p) {
    this.player = p;
  }
}

class Record {
  constructor(arr) {
    this.arr = arr || [];
  }
  getRecords() {
    return this.arr;
  }

  addScore(s) {
    if (s.value === 0) {
      return;
    } else if (this.arr.length < 10) {
      this.arr.push(s);
    } else if (s.value > this.arr[this.arr.length - 1].value) {
      this.arr.pop();
      this.arr.push(s);
    }
  }
  sortScores() {
    if (this.arr.length > 1) {
      this.arr.sort((a, b) => {
        return b.value - a.value;
      });
    }
  }
  isBestScore(s) {
    if (s > this.arr[0].value) {
      return true;
    }
    return false;
  }
  isTop10(s) {
    if (
      (this.arr.length < 10 || s.value > this.arr[this.arr.length - 1].value) &&
      s.value > 0
    ) {
      return true;
    }
    return false;
  }
}

class Cloud {
  constructor(p) {
    this.p = p;
    this.posY;
    this.posX;
    this.node;
    this.id;
    this.speed = 1;
    this.class = "cloud";
    this.moveId;
    this.shadow = false;
  }

  getNode() {
    return this.node;
  }
  getPosY() {
    return this.posY;
  }
  getPosX() {
    return this.posX;
  }
  getId() {
    return this.id;
  }
  getClass() {
    return this.node.className;
  }
  getMoveId() {
    return this.moveId;
  }
  getShadow() {
    return this.shadow;
  }

  setNode() {
    this.node = document.getElementById(this.id);
  }
  setId() {
    this.id = `c${cloudId}`;
  }
  setInitialX(x) {
    if (x) {
      this.posX = x;
    } else {
      this.posX = -200;
    }
  }
  setX() {
    this.posX += this.speed;
  }
  moveX() {
    this.node.style.right = `${this.posX}px`;
  }
  setPosY() {
    if (this.p) {
      this.node.className = "cloud low";
    } else {
      this.node.className = "cloud high";
    }
  }
  setImgSrc() {
    let cloudNr = cloudId % 6;
    switch (cloudNr) {
      case 0:
        this.node.src = _img_cloud1_svg__WEBPACK_IMPORTED_MODULE_0__;
        break;
      case 1:
        this.node.src = _img_cloud2_svg__WEBPACK_IMPORTED_MODULE_1__;
        break;
      case 2:
        this.node.src = _img_cloud3_svg__WEBPACK_IMPORTED_MODULE_2__;
        break;
      case 3:
        this.node.src = _img_cloud4_svg__WEBPACK_IMPORTED_MODULE_3__;
        break;
      case 4:
        this.node.src = _img_cloud5_svg__WEBPACK_IMPORTED_MODULE_4__;
        break;
      case 5:
        this.node.src = _img_cloud6_svg__WEBPACK_IMPORTED_MODULE_5__;
        break;
    }
    //increase cloudId here because if increased in setId() it would mess it up
    //since it is necessary to call it before this method
    cloudId++;
  }
  setMoveId(id) {
    this.moveId = id;
  }
  setShadow() {
    this.shadow = !this.shadow;
  }
}

class CloudList {
  constructor() {
    this.arr = [];
    this.lastY;
  }

  getLastY() {
    return this.lastY;
  }

  setLastY() {
    if (this.lastY === undefined) {
      this.lastY = Math.floor(Math.random() * 2);
    } else {
      this.lastY = !this.lastY;
    }
  }
  addNewCloud(c) {
    this.arr.push(c);
  }
  removeFirstCloud() {
    this.arr.shift();
  }
  removeAllClouds() {
    this.arr = [];
    cloudId = 0;
  }
  clearAllIntervals() {
    for (let i = 0; i < this.arr.length; i++) {
      clearInterval(this.arr[i].getMoveId());
    }
  }
}

let obsId = 0;
let cloudId = 0;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bestScores: () => (/* binding */ bestScores),
/* harmony export */   bird: () => (/* binding */ bird),
/* harmony export */   cloudArr: () => (/* binding */ cloudArr),
/* harmony export */   obsArr: () => (/* binding */ obsArr)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _renderFuncs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderFuncs */ "./src/renderFuncs.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");





const bird = new _classes__WEBPACK_IMPORTED_MODULE_1__.Bird();
const obsArr = new _classes__WEBPACK_IMPORTED_MODULE_1__.ObsList();
const cloudArr = new _classes__WEBPACK_IMPORTED_MODULE_1__.CloudList();

const bestScores = (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.checkLocalStorage)();

(0,_renderFuncs__WEBPACK_IMPORTED_MODULE_2__.renderBackground)();

(0,_renderFuncs__WEBPACK_IMPORTED_MODULE_2__.renderNewGameModal)();

//TO DO:
//gitHub upload(webpack)


/***/ }),

/***/ "./src/intervals.js":
/*!**************************!*\
  !*** ./src/intervals.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   accID: () => (/* binding */ accID),
/* harmony export */   accelerate: () => (/* binding */ accelerate),
/* harmony export */   birdGlide: () => (/* binding */ birdGlide),
/* harmony export */   glideID: () => (/* binding */ glideID),
/* harmony export */   globalObsSpawnId: () => (/* binding */ globalObsSpawnId),
/* harmony export */   moveCloud: () => (/* binding */ moveCloud),
/* harmony export */   moveCloudInt: () => (/* binding */ moveCloudInt),
/* harmony export */   moveObs: () => (/* binding */ moveObs),
/* harmony export */   newObstacle: () => (/* binding */ newObstacle),
/* harmony export */   nullifyObsGenTime: () => (/* binding */ nullifyObsGenTime),
/* harmony export */   obsGenTime: () => (/* binding */ obsGenTime),
/* harmony export */   renderNewObstacle: () => (/* binding */ renderNewObstacle)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _renderFuncs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderFuncs */ "./src/renderFuncs.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes */ "./src/classes.js");




let windowWidth;
let sunPosRight;

let accID;
let glideID;
let globalObsSpawnId;
let obsGenTime;

function nullifyObsGenTime() {
  globalObsSpawnId = null;
}

function birdGlide() {
  //bird.setPosX() is outside interval to calculate it only once instead of every 16 ms
  //since it is needed for gameOverConditions function and the x pos is fixed if
  //client window stays the same
  _index__WEBPACK_IMPORTED_MODULE_0__.bird.setPosX();
  _index__WEBPACK_IMPORTED_MODULE_0__.bird.resetFallSpeed();

  glideID = setInterval(() => {
    let newY = _index__WEBPACK_IMPORTED_MODULE_0__.bird.getPosY() + _index__WEBPACK_IMPORTED_MODULE_0__.bird.getSpeed();

    _index__WEBPACK_IMPORTED_MODULE_0__.bird.setPosY(newY);
    _index__WEBPACK_IMPORTED_MODULE_0__.bird.getNode().style.transform = `rotate(${_index__WEBPACK_IMPORTED_MODULE_0__.bird.getSpeed() * 10}deg)`;

    (0,_renderFuncs__WEBPACK_IMPORTED_MODULE_1__.gameOverConditions)();
  }, 16);
  (0,_renderFuncs__WEBPACK_IMPORTED_MODULE_1__.flapEL)();
}

function accelerate() {
  accID = setInterval(() => {
    _index__WEBPACK_IMPORTED_MODULE_0__.bird.setFallSpeed();

    if (_index__WEBPACK_IMPORTED_MODULE_0__.bird.getSpeed() >= 7) {
      clearInterval(accID);
    }
  }, 20);
}

function renderNewObstacle() {
  globalObsSpawnId = setInterval(newObstacle, 2000);
}

function newObstacle() {
  //first [if] condition checks for paused game
  if (!globalObsSpawnId) {
    switch (_index__WEBPACK_IMPORTED_MODULE_0__.obsArr.getDifficulty()) {
      case 0:
        globalObsSpawnId = setInterval(newObstacle, 2000);
        break;
      case 1:
        globalObsSpawnId = setInterval(newObstacle, 1500);
        break;
      case 2:
        globalObsSpawnId = setInterval(newObstacle, 1000);
        break;
    }
  } else if (_renderFuncs__WEBPACK_IMPORTED_MODULE_1__.tempScore.value >= 49 && _index__WEBPACK_IMPORTED_MODULE_0__.obsArr.getDifficulty() === 1) {
    clearInterval(globalObsSpawnId);
    _index__WEBPACK_IMPORTED_MODULE_0__.obsArr.increaseDifficulty();
    globalObsSpawnId = setInterval(newObstacle, 1000);
  } else if (_renderFuncs__WEBPACK_IMPORTED_MODULE_1__.tempScore.value >= 9 && _index__WEBPACK_IMPORTED_MODULE_0__.obsArr.getDifficulty() === 0) {
    clearInterval(globalObsSpawnId);
    _index__WEBPACK_IMPORTED_MODULE_0__.obsArr.increaseDifficulty();
    globalObsSpawnId = setInterval(newObstacle, 1500);
  }
  let obs = new _classes__WEBPACK_IMPORTED_MODULE_2__.Obstacle();
  const background = document.getElementById("background");
  let topNode = document.createElement("div");
  let bottomNode = document.createElement("div");
  let topId;
  let bottomId;
  let topHeight;
  let bottomHeight;

  let rng = (0,_renderFuncs__WEBPACK_IMPORTED_MODULE_1__.calculateObsRng)();

  obs.setObsId();
  [topId, bottomId] = obs.getObsId();
  topNode.id = topId;
  bottomNode.id = bottomId;
  topNode.className = "tob";
  bottomNode.className = "bob";

  background.appendChild(topNode);
  background.appendChild(bottomNode);

  [topHeight, bottomHeight] = obs.setObsHeight(rng);
  topNode.style.right = 0;
  bottomNode.style.right = 0;
  topNode.style.bottom = `${topHeight}px`;
  bottomNode.style.top = `${bottomHeight}px`;

  obs.setObsNode();
  _index__WEBPACK_IMPORTED_MODULE_0__.obsArr.addNewObs(obs);
  moveObs(obs);
  obsGenTime = new Date();
}

function moveObs(obs) {
  obs.setMoveId(
    setInterval(() => {
      if (obs.getX() > window.innerWidth) {
        clearInterval(obs.getMoveId());
        obs.getObsNode()[0].remove();
        obs.getObsNode()[1].remove();
        _index__WEBPACK_IMPORTED_MODULE_0__.obsArr.removeFirstObs();
      }
      obs.setX();
      obs.moveX(obs.getX());
    }),
    17
  );
}

function moveCloudInt(cloud) {
  const sun = document.getElementById("sun");
  windowWidth = window.innerWidth;
  sunPosRight = Number(
    window.getComputedStyle(sun).getPropertyValue("right").slice(0, -2)
  );
  cloud.setMoveId(setInterval(moveCloud, 17, cloud));
}

function moveCloud(cloud) {
  const background = document.getElementById("background");

  if (cloud.getPosX() > windowWidth + 200) {
    clearInterval(cloud.getMoveId());
    cloud.getNode().remove();
    _index__WEBPACK_IMPORTED_MODULE_0__.cloudArr.removeFirstCloud();

    let newCloud = (0,_renderFuncs__WEBPACK_IMPORTED_MODULE_1__.renderNewCloud)();

    moveCloudInt(newCloud);
  } else if (
    cloud.getPosX() > sunPosRight - 200 &&
    cloud.getPosX() < sunPosRight + 50 &&
    !cloud.getShadow() &&
    cloud.getClass() === "cloud high"
  ) {
    background.className = "shade";
    cloud.setShadow();
  } else if (
    (cloud.getPosX() < sunPosRight - 200 ||
      cloud.getPosX() > sunPosRight + 50) &&
    cloud.getShadow() &&
    cloud.getClass() === "cloud high"
  ) {
    background.className = "sunny";
    cloud.setShadow();
  }
  cloud.setX();
  cloud.moveX();
}


/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkLocalStorage: () => (/* binding */ checkLocalStorage),
/* harmony export */   updateLocalStorage: () => (/* binding */ updateLocalStorage)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ "./src/classes.js");



function checkLocalStorage() {
  if (localStorage.getItem("bestScores")) {
    const bestScores = setArrAsClassInstance(
      JSON.parse(localStorage.getItem("bestScores"))
    );
    return bestScores;
  } else {
    const bestScores = new _classes__WEBPACK_IMPORTED_MODULE_1__.Record();
    return bestScores;
  }
}

function setArrAsClassInstance(obj) {
  let arrInstance;
  let temp = [];
  for (let i = 0; i < obj.arr.length; i++) {
    let scoreInstance = setScoreAsClassInstance(obj.arr[i]);
    temp.push(scoreInstance);
  }
  arrInstance = new _classes__WEBPACK_IMPORTED_MODULE_1__.Record(temp);
  return arrInstance;
}

function setScoreAsClassInstance(score) {
  let instance = new _classes__WEBPACK_IMPORTED_MODULE_1__.Score(score.value, score.player);
  return instance;
}

function updateLocalStorage() {
  localStorage.setItem("bestScores", JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_0__.bestScores));
}


/***/ }),

/***/ "./src/renderFuncs.js":
/*!****************************!*\
  !*** ./src/renderFuncs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateObsRng: () => (/* binding */ calculateObsRng),
/* harmony export */   deleteNewGameModal: () => (/* binding */ deleteNewGameModal),
/* harmony export */   flapEL: () => (/* binding */ flapEL),
/* harmony export */   gameOverConditions: () => (/* binding */ gameOverConditions),
/* harmony export */   gameOverScreenRender: () => (/* binding */ gameOverScreenRender),
/* harmony export */   lastObsRng: () => (/* binding */ lastObsRng),
/* harmony export */   pauseTime: () => (/* binding */ pauseTime),
/* harmony export */   renderBackground: () => (/* binding */ renderBackground),
/* harmony export */   renderNewCloud: () => (/* binding */ renderNewCloud),
/* harmony export */   renderNewGame: () => (/* binding */ renderNewGame),
/* harmony export */   renderNewGameModal: () => (/* binding */ renderNewGameModal),
/* harmony export */   tempScore: () => (/* binding */ tempScore)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _intervals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intervals */ "./src/intervals.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _img_pause_circle_40dp_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/pause_circle_40dp.svg */ "./src/img/pause_circle_40dp.svg");
/* harmony import */ var _img_play_circle_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/play_circle.svg */ "./src/img/play_circle.svg");
/* harmony import */ var _img_mountains_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/mountains.svg */ "./src/img/mountains.svg");
/* harmony import */ var _img_bird_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/bird.svg */ "./src/img/bird.svg");









let lastObsRng;
let tempScore;
let pauseTime;

function renderBackground() {
  const background = document.createElement("main");
  const sun = document.createElement("div");
  const mountainsImg = new Image();

  background.id = "background";
  sun.id = "sun";
  mountainsImg.id = "mountains";

  mountainsImg.src = _img_mountains_svg__WEBPACK_IMPORTED_MODULE_6__;

  background.appendChild(sun);
  background.appendChild(mountainsImg);

  document.body.appendChild(background);
}

function renderNewGameModal() {
  const background = document.getElementById("background");
  const ngBtn = document.createElement("button");
  const ngDiv = document.createElement("div");
  const infoPara = document.createElement("p");
  const title = document.createElement("p");
  const credits = document.createElement("p");

  ngBtn.id = "new-game-btn";
  ngDiv.id = "new-game-btn-cont";
  infoPara.id = "info";
  title.id = "title";
  credits.id = "credits";

  ngBtn.textContent = "NEW GAME";
  infoPara.textContent = `PRESS SPACE TO FLAP`;
  title.textContent = "FLAPPY BIRD";
  credits.innerHTML = `Cloud images by 
    <a href="https://www.freepik.com/free-vector/pack-flat-clouds_1000962.htm#fromView=search&page=1&position=10&uuid=7ad03838-dc45-4ca4-a7e6-6e0662ee7f14">
    Freepik.com</a>`;

  ngDiv.appendChild(ngBtn);
  ngDiv.appendChild(infoPara);
  ngDiv.appendChild(title);
  ngDiv.appendChild(credits);
  background.appendChild(ngDiv);

  ngBtn.addEventListener("click", deleteNewGameModal);
  ngBtn.addEventListener("click", renderNewGame);
  ngBtn.addEventListener("click", _intervals__WEBPACK_IMPORTED_MODULE_2__.renderNewObstacle);

  generateScoreNodes();
}

function generateScoreNodes() {
  const ngDiv = document.getElementById("new-game-btn-cont");
  const topScores = document.createElement("ol");
  const tsTitle = document.createElement("h2");

  topScores.id = "top-scores";
  tsTitle.id = "scores-title";

  tsTitle.textContent = "TOP 10 best scores";

  topScores.appendChild(tsTitle);

  ngDiv.appendChild(topScores);

  if (tempScore) {
    const finalScore = document.createElement("p");
    const ngDiv = document.getElementById("new-game-btn-cont");
    finalScore.id = "final-score";

    finalScore.textContent = `FINAL SCORE: ${tempScore.getValue()}`;

    ngDiv.appendChild(finalScore);

    tempScore.getNode().remove();

    editPlayerName();
  } else {
    renderTop10();
  }
}

function editPlayerName() {
  const ngDiv = document.getElementById("new-game-btn-cont");

  if (_index__WEBPACK_IMPORTED_MODULE_1__.bestScores.isTop10(tempScore)) {
    const nameModal = document.createElement("div");
    const title = document.createElement("h2");
    const textInput = document.createElement("input");
    const btn = document.createElement("button");

    _index__WEBPACK_IMPORTED_MODULE_1__.bestScores.addScore(tempScore);
    _index__WEBPACK_IMPORTED_MODULE_1__.bestScores.sortScores();

    nameModal.id = "name-modal";
    textInput.id = "name-input";
    btn.id = "submit-name";

    title.textContent = "Please input player name";
    btn.textContent = "CONFIRM";

    btn.style.display = "block";

    textInput.maxLength = "3";
    textInput.minLength = "3";

    nameModal.appendChild(title);
    nameModal.appendChild(textInput);
    nameModal.appendChild(btn);

    ngDiv.appendChild(nameModal);

    btn.addEventListener("click", createName);
  } else {
    renderTop10();
  }

  function createName(e) {
    const name = document.getElementById("name-input");

    if (name.value.length === 3) {
      tempScore.setPlayer(name.value);

      renderTop10();

      e.target.parentNode.remove();

      (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.updateLocalStorage)();
    } else return;
  }
}

function renderTop10() {
  const topScores = document.getElementById("top-scores");

  for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_1__.bestScores.arr.length; i++) {
    let score = document.createElement("li");

    score.className = "top10";

    score.textContent = `${_index__WEBPACK_IMPORTED_MODULE_1__.bestScores.arr[i].getPlayer()}:
    ${_index__WEBPACK_IMPORTED_MODULE_1__.bestScores.arr[i].getValue()}`;

    topScores.appendChild(score);
  }
}

function renderNewGame() {
  const background = document.getElementById("background");
  let birdNode = new Image();
  let scoreNode = document.createElement("p");
  const pauseBtn = new Image();

  birdNode.id = "bird";
  scoreNode.id = "score";
  pauseBtn.id = "pause";
  pauseBtn.className = "pause-btn";

  birdNode.src = _img_bird_svg__WEBPACK_IMPORTED_MODULE_7__;
  pauseBtn.src = _img_pause_circle_40dp_svg__WEBPACK_IMPORTED_MODULE_4__;

  background.appendChild(birdNode);
  background.appendChild(scoreNode);
  background.appendChild(pauseBtn);

  _index__WEBPACK_IMPORTED_MODULE_1__.bird.setNode();
  _index__WEBPACK_IMPORTED_MODULE_1__.bird.setPosY("");

  tempScore = new _classes__WEBPACK_IMPORTED_MODULE_0__.Score();
  tempScore.setNode();
  tempScore.updateScore();

  (0,_intervals__WEBPACK_IMPORTED_MODULE_2__.birdGlide)();
  (0,_intervals__WEBPACK_IMPORTED_MODULE_2__.accelerate)();
  pauseBtn.addEventListener("click", pause);
}

function deleteNewGameModal(e) {
  e.target.parentNode.remove();

  const cloud1 = renderNewCloud(window.innerWidth * 0.75);
  const cloud2 = renderNewCloud(window.innerWidth * 0.5);
  const cloud3 = renderNewCloud(window.innerWidth * 0.25);

  (0,_intervals__WEBPACK_IMPORTED_MODULE_2__.moveCloudInt)(cloud1);
  (0,_intervals__WEBPACK_IMPORTED_MODULE_2__.moveCloudInt)(cloud2);
  (0,_intervals__WEBPACK_IMPORTED_MODULE_2__.moveCloudInt)(cloud3);
}

function gameOverConditions() {
  const background = document.getElementById("background");
  if (_index__WEBPACK_IMPORTED_MODULE_1__.bird.getPosY() + 52 >= background.scrollHeight) {
    gameOverScreenRender();
  } else {
    for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_1__.obsArr.arr.length; i++) {
      let topNodeBSide =
        window.innerHeight -
        Number(_index__WEBPACK_IMPORTED_MODULE_1__.obsArr.arr[i].getObsNode()[0].style.bottom.slice(0, -2));
      let bottomNodeTSide = Number(
        _index__WEBPACK_IMPORTED_MODULE_1__.obsArr.arr[i].getObsNode()[1].style.top.slice(0, -2)
      );

      if (
        _index__WEBPACK_IMPORTED_MODULE_1__.bird.getPosX() < _index__WEBPACK_IMPORTED_MODULE_1__.obsArr.arr[i].getX() && //works
        _index__WEBPACK_IMPORTED_MODULE_1__.bird.getPosX() + 50 > _index__WEBPACK_IMPORTED_MODULE_1__.obsArr.arr[i].getX() && //works
        (_index__WEBPACK_IMPORTED_MODULE_1__.bird.getPosY() < topNodeBSide || //works
          _index__WEBPACK_IMPORTED_MODULE_1__.bird.getPosY() + 50 > bottomNodeTSide) //works
      ) {
        gameOverScreenRender();
      } else if (
        _index__WEBPACK_IMPORTED_MODULE_1__.bird.getPosX() + 50 < _index__WEBPACK_IMPORTED_MODULE_1__.obsArr.arr[i].getX() &&
        !_index__WEBPACK_IMPORTED_MODULE_1__.obsArr.arr[i].getCleared()
      ) {
        _index__WEBPACK_IMPORTED_MODULE_1__.obsArr.arr[i].setCleared();
        tempScore.increaseValue();
        tempScore.updateScore();
      }
    }
  }
}

function gameOverScreenRender() {
  const background = document.getElementById("background");
  const pauseBtn = document.getElementById("pause");

  pauseBtn.removeEventListener("click", pause);
  window.removeEventListener("keydown", flap);

  pauseBtn.remove();

  background.className = "";

  clearInterval(_intervals__WEBPACK_IMPORTED_MODULE_2__.accID);
  clearInterval(_intervals__WEBPACK_IMPORTED_MODULE_2__.glideID);
  _index__WEBPACK_IMPORTED_MODULE_1__.obsArr.resetDifficulty();

  _index__WEBPACK_IMPORTED_MODULE_1__.bird.resetFallSpeed();

  _index__WEBPACK_IMPORTED_MODULE_1__.bird.getNode().remove();

  for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_1__.obsArr.arr.length; i++) {
    _index__WEBPACK_IMPORTED_MODULE_1__.obsArr.arr[i].getObsNode()[0].remove();
    _index__WEBPACK_IMPORTED_MODULE_1__.obsArr.arr[i].getObsNode()[1].remove();
  }
  for (let j = 0; j < _index__WEBPACK_IMPORTED_MODULE_1__.cloudArr.arr.length; j++) {
    _index__WEBPACK_IMPORTED_MODULE_1__.cloudArr.arr[j].getNode().remove();
  }
  clearInterval(_intervals__WEBPACK_IMPORTED_MODULE_2__.globalObsSpawnId);

  _index__WEBPACK_IMPORTED_MODULE_1__.obsArr.clearAllIntervals();
  _index__WEBPACK_IMPORTED_MODULE_1__.obsArr.removeAllObs();

  _index__WEBPACK_IMPORTED_MODULE_1__.cloudArr.clearAllIntervals();
  _index__WEBPACK_IMPORTED_MODULE_1__.cloudArr.removeAllClouds();

  renderNewGameModal();
}

function calculateObsRng() {
  let rng;

  if (lastObsRng === undefined) {
    rng = Math.floor(Math.random() * 4); // 0 to 3
  } else {
    switch (lastObsRng) {
      case 0:
        rng = Math.floor(Math.random() * 2); // 0 || 1
        break;
      case 1:
        rng = Math.floor(Math.random() * 3); // 0 || 1 || 2
        break;
      case 2:
        rng = Math.floor(Math.random() * 3) + 1; // 1 || 2 || 3
        break;
      case 3:
        rng = Math.floor(Math.random() * 2) + 2; // 2 || 3
        break;
    }
  }
  lastObsRng = rng;
  return rng;
}

function renderNewCloud(pos) {
  _index__WEBPACK_IMPORTED_MODULE_1__.cloudArr.setLastY();

  const background = document.getElementById("background");
  const cloudPos = _index__WEBPACK_IMPORTED_MODULE_1__.cloudArr.getLastY();
  const cloud = new _classes__WEBPACK_IMPORTED_MODULE_0__.Cloud(cloudPos);
  const cloudImg = new Image();

  cloud.setId();
  cloudImg.id = cloud.getId();

  background.appendChild(cloudImg);
  cloud.setNode(cloud.getId());

  cloud.setPosY();
  cloud.setImgSrc();

  _index__WEBPACK_IMPORTED_MODULE_1__.cloudArr.addNewCloud(cloud);

  cloud.setInitialX(pos);
  cloud.getNode().style.right = cloud.getPosX() + "px";

  return cloud;
}

function pause() {
  const background = document.getElementById("background");
  const pauseModal = document.createElement("div");
  const unpauseBtn = new Image();
  const pauseBtn = document.getElementById("pause");

  pauseModal.id = "new-game-btn-cont";
  unpauseBtn.id = "play-btn";

  unpauseBtn.src = _img_play_circle_svg__WEBPACK_IMPORTED_MODULE_5__;

  pauseTime = new Date();

  clearInterval(_intervals__WEBPACK_IMPORTED_MODULE_2__.accID);
  clearInterval(_intervals__WEBPACK_IMPORTED_MODULE_2__.glideID);
  clearInterval(_intervals__WEBPACK_IMPORTED_MODULE_2__.globalObsSpawnId);
  _index__WEBPACK_IMPORTED_MODULE_1__.obsArr.clearAllIntervals();
  _index__WEBPACK_IMPORTED_MODULE_1__.cloudArr.clearAllIntervals();

  //this id is nulled because of first condition in newObstacle()
  // globalObsSpawnId = null;
  (0,_intervals__WEBPACK_IMPORTED_MODULE_2__.nullifyObsGenTime)();

  pauseModal.appendChild(unpauseBtn);
  background.appendChild(pauseModal);

  window.removeEventListener("keydown", flap);
  pauseBtn.removeEventListener("click", pause);

  unpauseBtn.addEventListener("click", unpause);
  //i think i am forgetting something else but do not know what
}

function unpause(e) {
  const deltaTime = pauseTime - _intervals__WEBPACK_IMPORTED_MODULE_2__.obsGenTime;
  const pauseBtn = document.getElementById("pause");

  e.target.parentNode.remove();

  (0,_intervals__WEBPACK_IMPORTED_MODULE_2__.birdGlide)();
  (0,_intervals__WEBPACK_IMPORTED_MODULE_2__.accelerate)();

  for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_1__.obsArr.arr.length; i++) {
    (0,_intervals__WEBPACK_IMPORTED_MODULE_2__.moveObs)(_index__WEBPACK_IMPORTED_MODULE_1__.obsArr.arr[i]);
  }

  for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_1__.cloudArr.arr.length; i++) {
    (0,_intervals__WEBPACK_IMPORTED_MODULE_2__.moveCloudInt)(_index__WEBPACK_IMPORTED_MODULE_1__.cloudArr.arr[i]);
  }

  if (_index__WEBPACK_IMPORTED_MODULE_1__.obsArr.getDifficulty() === 2) {
    setTimeout(_intervals__WEBPACK_IMPORTED_MODULE_2__.newObstacle, 1000 - deltaTime);
  } else if (_index__WEBPACK_IMPORTED_MODULE_1__.obsArr.getDifficulty() === 1) {
    setTimeout(_intervals__WEBPACK_IMPORTED_MODULE_2__.newObstacle, 1500 - deltaTime);
  } else {
    setTimeout(_intervals__WEBPACK_IMPORTED_MODULE_2__.newObstacle, 2000 - deltaTime);
  }

  flapEL();
  pauseBtn.addEventListener("click", pause);
}

//NEW MODULE FOR EVENT LISTENERS???

function flapEL() {
  window.addEventListener("keydown", flap);
}

function flap(e) {
  if (e.key === " ") {
    _index__WEBPACK_IMPORTED_MODULE_1__.bird.flap();
    clearInterval(_intervals__WEBPACK_IMPORTED_MODULE_2__.accID);
    (0,_intervals__WEBPACK_IMPORTED_MODULE_2__.accelerate)();
  }
}


/***/ }),

/***/ "./src/img/bird.svg":
/*!**************************!*\
  !*** ./src/img/bird.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e34dc38fb4fe4d5b5885.svg";

/***/ }),

/***/ "./src/img/cloud1.svg":
/*!****************************!*\
  !*** ./src/img/cloud1.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ef168b950f81cd3144e.svg";

/***/ }),

/***/ "./src/img/cloud2.svg":
/*!****************************!*\
  !*** ./src/img/cloud2.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c5141681d724aab9634.svg";

/***/ }),

/***/ "./src/img/cloud3.svg":
/*!****************************!*\
  !*** ./src/img/cloud3.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df78bf423c58a772329f.svg";

/***/ }),

/***/ "./src/img/cloud4.svg":
/*!****************************!*\
  !*** ./src/img/cloud4.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8bd341d5a6b5f8152db6.svg";

/***/ }),

/***/ "./src/img/cloud5.svg":
/*!****************************!*\
  !*** ./src/img/cloud5.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7836844034bfa3de92c9.svg";

/***/ }),

/***/ "./src/img/cloud6.svg":
/*!****************************!*\
  !*** ./src/img/cloud6.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4de33477441ec5ddd52.svg";

/***/ }),

/***/ "./src/img/mountains.svg":
/*!*******************************!*\
  !*** ./src/img/mountains.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c952e759112a9b67f82.svg";

/***/ }),

/***/ "./src/img/pause_circle_40dp.svg":
/*!***************************************!*\
  !*** ./src/img/pause_circle_40dp.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57b970d7ef2ddde8b648.svg";

/***/ }),

/***/ "./src/img/play_circle.svg":
/*!*********************************!*\
  !*** ./src/img/play_circle.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef033a3f8bce8ded0ebf.svg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksV0FBVyxLQUFLLE9BQU8sV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FB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UywwQ0FBTTtBQUNuQixlQUFlLG1EQUFXO0FBQzFCLElBQUk7QUFDSixlQUFlLG1EQUFXO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksd0NBQUk7QUFDUixrQkFBa0IsNkNBQUs7QUFDdkIsSUFBSSxzREFBVTtBQUNkO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeFpBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZsYXBweS1iaXJkLWNsb25lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9mbGFwcHktYmlyZC1jbG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZmxhcHB5LWJpcmQtY2xvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9mbGFwcHktYmlyZC1jbG9uZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9mbGFwcHktYmlyZC1jbG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mbGFwcHktYmlyZC1jbG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZmxhcHB5LWJpcmQtY2xvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZmxhcHB5LWJpcmQtY2xvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZmxhcHB5LWJpcmQtY2xvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9mbGFwcHktYmlyZC1jbG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2ZsYXBweS1iaXJkLWNsb25lLy4vc3JjL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vZmxhcHB5LWJpcmQtY2xvbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxhcHB5LWJpcmQtY2xvbmUvLi9zcmMvaW50ZXJ2YWxzLmpzIiwid2VicGFjazovL2ZsYXBweS1iaXJkLWNsb25lLy4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9mbGFwcHktYmlyZC1jbG9uZS8uL3NyYy9yZW5kZXJGdW5jcy5qcyIsIndlYnBhY2s6Ly9mbGFwcHktYmlyZC1jbG9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mbGFwcHktYmlyZC1jbG9uZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mbGFwcHktYmlyZC1jbG9uZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmxhcHB5LWJpcmQtY2xvbmUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9mbGFwcHktYmlyZC1jbG9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZsYXBweS1iaXJkLWNsb25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmxhcHB5LWJpcmQtY2xvbmUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZmxhcHB5LWJpcmQtY2xvbmUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2ZsYXBweS1iaXJkLWNsb25lL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZmxhcHB5LWJpcmQtY2xvbmUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2ZsYXBweS1iaXJkLWNsb25lL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90byxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbmJvZHkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5tYWluIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjEsIDE3NSwgMjQ2KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNoYWRlIHtcbiAgYmFja2dyb3VuZDogcmdiKDQsIDEyNiwgMTgyKTtcblxuICBhbmltYXRpb246IGRhcmtlbiAxcyBlYXNlLWluLW91dDtcbn1cblxuQGtleWZyYW1lcyBkYXJrZW4ge1xuICBmcm9tIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjEsIDE3NSwgMjQ2KTtcbiAgfVxuICB0byB7XG4gICAgYmFja2dyb3VuZDogcmdiKDQsIDEyNiwgMTgyKTtcbiAgfVxufVxuXG4uc3Vubnkge1xuICBiYWNrZ3JvdW5kOiByZ2IoMjEsIDE3NSwgMjQ2KTtcbiAgYW5pbWF0aW9uOiBicmlnaHRlbiAxcyBlYXNlLWluLW91dDtcbn1cblxuQGtleWZyYW1lcyBicmlnaHRlbiB7XG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQ6IHJnYig0LCAxMjYsIDE4Mik7XG4gIH1cbiAgdG8ge1xuICAgIGJhY2tncm91bmQ6IHJnYigyMSwgMTc1LCAyNDYpO1xuICB9XG59XG5cbiNzdW4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAxNSU7XG4gIHRvcDogMTAlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCNlZWZmMDAsICNmYmRlMDApO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAxMHB4ICNmMWZmMmY7XG59XG5cbiNtb3VudGFpbnMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1pbi13aWR0aDogMTEwJTtcbiAgbWF4LWhlaWdodDogNzAlO1xuICBsZWZ0OiAtMTAlO1xuICBib3R0b206IDA7XG59XG5cbiNiaXJkIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwJTtcbiAgbGVmdDogMjAlO1xuICB6LWluZGV4OiAxO1xufVxuXG4jbmV3LWdhbWUtYnRuIHtcbiAgbWluLXdpZHRoOiAyMCU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI25ldy1nYW1lLWJ0bi1jb250IHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IDEwJTtcbiAgYmFja2dyb3VuZDogcmdiYSg1MCwgNTAsIDUwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4jaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxcmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbn1cblxuI2NyZWRpdHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjgsIDI4LCAwLjUpO1xufVxuXG4jY3JlZGl0cyA+IGEge1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cblxuI3RpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6IHJnYigyNTIsIDE2OSwgMik7XG59XG5cbi50b2Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE0NSwgMCk7XG59XG5cbi5ib2Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE0NSwgMCk7XG59XG5cbiNzY29yZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IDUgNTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiBhbGljZWJsdWU7XG4gIGJhY2tncm91bmQ6IHJnYmEoNTAsIDUwLCA1MCwgMC41KTtcbiAgei1pbmRleDogMztcbn1cblxuI2ZpbmFsLXNjb3JlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiBhbGljZWJsdWU7XG59XG5cbiN0b3Atc2NvcmVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDMuNXJlbTtcbiAgYmFja2dyb3VuZDogIzlmOWY5ZjtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIG1heC13aWR0aDogMjUlO1xuICBsaXN0LXN0eWxlOiByYW5rO1xufVxuXG4jdG9wLXNjb3JlcyA+IGxpIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG59XG5cbkBjb3VudGVyLXN0eWxlIHJhbmsge1xuICBzeXN0ZW06IG51bWVyaWM7XG4gIHN5bWJvbHM6IFwiXCIgXCIxXCIgXCIyXCIgXCIzXCIgXCI0XCIgXCI1XCIgXCI2XCIgXCI3XCIgXCI4XCIgXCI5XCIgXCIxMFwiO1xuICBzdWZmaXg6IFwiKVwiO1xufVxuXG4jbmFtZS1tb2RhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMCU7XG4gIGJhY2tncm91bmQ6ICMxMjExMTE7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4jbmFtZS1tb2RhbCA+IGgyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jc3VibWl0LW5hbWUge1xuICBtYXJnaW46IDFyZW0gYXV0byAwIGF1dG87XG59XG5cbi5jbG91ZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1JTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4uY2xvdWQuaGlnaCB7XG4gIHRvcDogNSU7XG59XG5cbi5jbG91ZC5sb3cge1xuICB0b3A6IDI1JTtcbn1cblxuLnBhdXNlLWJ0biB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jcGxheS1idG4ge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1Q7d0VBQ3NFO0VBQ3RFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDRCQUE0Qjs7RUFFNUIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0U7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtBQUNGOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDZDQUE2QztFQUM3QyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGlDQUFpQztFQUNqQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0RBQW9EO0VBQ3BELFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sXFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5ib2R5IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbm1haW4ge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHJnYigyMSwgMTc1LCAyNDYpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnNoYWRlIHtcXG4gIGJhY2tncm91bmQ6IHJnYig0LCAxMjYsIDE4Mik7XFxuXFxuICBhbmltYXRpb246IGRhcmtlbiAxcyBlYXNlLWluLW91dDtcXG59XFxuXFxuQGtleWZyYW1lcyBkYXJrZW4ge1xcbiAgZnJvbSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMSwgMTc1LCAyNDYpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNCwgMTI2LCAxODIpO1xcbiAgfVxcbn1cXG5cXG4uc3Vubnkge1xcbiAgYmFja2dyb3VuZDogcmdiKDIxLCAxNzUsIDI0Nik7XFxuICBhbmltYXRpb246IGJyaWdodGVuIDFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJyaWdodGVuIHtcXG4gIGZyb20ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNCwgMTI2LCAxODIpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjEsIDE3NSwgMjQ2KTtcXG4gIH1cXG59XFxuXFxuI3N1biB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMTUlO1xcbiAgdG9wOiAxMCU7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCNlZWZmMDAsICNmYmRlMDApO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMTBweCAjZjFmZjJmO1xcbn1cXG5cXG4jbW91bnRhaW5zIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG1pbi13aWR0aDogMTEwJTtcXG4gIG1heC1oZWlnaHQ6IDcwJTtcXG4gIGxlZnQ6IC0xMCU7XFxuICBib3R0b206IDA7XFxufVxcblxcbiNiaXJkIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMCU7XFxuICBsZWZ0OiAyMCU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jbmV3LWdhbWUtYnRuIHtcXG4gIG1pbi13aWR0aDogMjAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI25ldy1nYW1lLWJ0bi1jb250IHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAlO1xcbiAgbGVmdDogMTAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSg1MCwgNTAsIDUwLCAwLjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiNpbmZvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG59XFxuXFxuI2NyZWRpdHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI4LCAyOCwgMjgsIDAuNSk7XFxufVxcblxcbiNjcmVkaXRzID4gYSB7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG59XFxuXFxuI3RpdGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGNvbG9yOiByZ2IoMjUyLCAxNjksIDIpO1xcbn1cXG5cXG4udG9iIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTQ1LCAwKTtcXG59XFxuXFxuLmJvYiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE0NSwgMCk7XFxufVxcblxcbiNzY29yZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiA1IDU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDUwLCA1MCwgNTAsIDAuNSk7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4jZmluYWwtc2NvcmUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbn1cXG5cXG4jdG9wLXNjb3JlcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAzLjVyZW07XFxuICBiYWNrZ3JvdW5kOiAjOWY5ZjlmO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgbWF4LXdpZHRoOiAyNSU7XFxuICBsaXN0LXN0eWxlOiByYW5rO1xcbn1cXG5cXG4jdG9wLXNjb3JlcyA+IGxpIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG59XFxuXFxuQGNvdW50ZXItc3R5bGUgcmFuayB7XFxuICBzeXN0ZW06IG51bWVyaWM7XFxuICBzeW1ib2xzOiBcXFwiXFxcIiBcXFwiMVxcXCIgXFxcIjJcXFwiIFxcXCIzXFxcIiBcXFwiNFxcXCIgXFxcIjVcXFwiIFxcXCI2XFxcIiBcXFwiN1xcXCIgXFxcIjhcXFwiIFxcXCI5XFxcIiBcXFwiMTBcXFwiO1xcbiAgc3VmZml4OiBcXFwiKVxcXCI7XFxufVxcblxcbiNuYW1lLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAlO1xcbiAgYmFja2dyb3VuZDogIzEyMTExMTtcXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuI25hbWUtbW9kYWwgPiBoMiB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNzdWJtaXQtbmFtZSB7XFxuICBtYXJnaW46IDFyZW0gYXV0byAwIGF1dG87XFxufVxcblxcbi5jbG91ZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUlO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuLmNsb3VkLmhpZ2gge1xcbiAgdG9wOiA1JTtcXG59XFxuXFxuLmNsb3VkLmxvdyB7XFxuICB0b3A6IDI1JTtcXG59XFxuXFxuLnBhdXNlLWJ0biB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcGxheS1idG4ge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY2xvdWQxIGZyb20gXCIuL2ltZy9jbG91ZDEuc3ZnXCI7XG5pbXBvcnQgY2xvdWQyIGZyb20gXCIuL2ltZy9jbG91ZDIuc3ZnXCI7XG5pbXBvcnQgY2xvdWQzIGZyb20gXCIuL2ltZy9jbG91ZDMuc3ZnXCI7XG5pbXBvcnQgY2xvdWQ0IGZyb20gXCIuL2ltZy9jbG91ZDQuc3ZnXCI7XG5pbXBvcnQgY2xvdWQ1IGZyb20gXCIuL2ltZy9jbG91ZDUuc3ZnXCI7XG5pbXBvcnQgY2xvdWQ2IGZyb20gXCIuL2ltZy9jbG91ZDYuc3ZnXCI7XG5cbmV4cG9ydCBjbGFzcyBCaXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ub2RlO1xuICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgIHRoaXMuYWNjID0gMC4yO1xuICAgIHRoaXMueDtcbiAgfVxuXG4gIC8vR0VUVEVSU1xuXG4gIGdldFBvc1koKSB7XG4gICAgcmV0dXJuIE51bWJlcihcbiAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMubm9kZSkuZ2V0UHJvcGVydHlWYWx1ZShcInRvcFwiKS5zbGljZSgwLCAtMilcbiAgICApO1xuICB9XG4gIGdldFBvc1goKSB7XG4gICAgcmV0dXJuIHRoaXMueDtcbiAgfVxuICBnZXRTcGVlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zcGVlZDtcbiAgfVxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICAvL1NFVFRFUlNcblxuICBzZXROb2RlKCkge1xuICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmlyZFwiKTtcbiAgfVxuICBzZXRQb3NZKHBvcykge1xuICAgIHRoaXMubm9kZS5zdHlsZS50b3AgPSBgJHtwb3N9cHhgO1xuICB9XG4gIHNldFBvc1goKSB7XG4gICAgLy9naXZlIG51bWVyaWNhbCB2YWx1ZSB0byB4IHBvcyBiYXNlZCBvbiBjbGllbnQncyB3aW5kb3cgc2l6ZShmcm9tIHRoZSByaWdodClcbiAgICB0aGlzLnggPSBOdW1iZXIoXG4gICAgICB3aW5kb3dcbiAgICAgICAgLmdldENvbXB1dGVkU3R5bGUodGhpcy5nZXROb2RlKCkpXG4gICAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKFwicmlnaHRcIilcbiAgICAgICAgLnNsaWNlKDAsIC0yKVxuICAgICk7XG4gIH1cbiAgc2V0RmFsbFNwZWVkKCkge1xuICAgIHRoaXMuc3BlZWQgKz0gdGhpcy5hY2M7XG4gIH1cbiAgcmVzZXRGYWxsU3BlZWQoKSB7XG4gICAgdGhpcy5zcGVlZCA9IDA7XG4gIH1cbiAgZmxhcCgpIHtcbiAgICBpZiAodGhpcy5zcGVlZCA+PSA2KSB7XG4gICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3BlZWQgPj0gMCkge1xuICAgICAgdGhpcy5zcGVlZCAtPSA2O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNwZWVkID0gLTY7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPYnN0YWNsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudG9wT2JzQ2xhc3MgPSBcInRvYlwiO1xuICAgIHRoaXMuYm90dG9tT2JzQ2xhc3MgPSBcImJvYlwiO1xuICAgIHRoaXMudG9wT2JzSWQ7XG4gICAgdGhpcy5ib3R0b21PYnNJZDtcbiAgICB0aGlzLnRvcE9ic05vZGU7XG4gICAgdGhpcy5ib3R0b21PYnNOb2RlO1xuICAgIHRoaXMudG9wT2JzUG9zO1xuICAgIHRoaXMuYm90dG9tT2JzUG9zO1xuICAgIHRoaXMub2JzU3BlZWQgPSAxO1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy5vYnNNb3ZlSWQ7XG4gICAgdGhpcy5jbGVhcmVkID0gZmFsc2U7XG4gIH1cblxuICBnZXRPYnNJZCgpIHtcbiAgICByZXR1cm4gW3RoaXMudG9wT2JzSWQsIHRoaXMuYm90dG9tT2JzSWRdO1xuICB9XG4gIGdldE9ic05vZGUoKSB7XG4gICAgcmV0dXJuIFt0aGlzLnRvcE9ic05vZGUsIHRoaXMuYm90dG9tT2JzTm9kZV07XG4gIH1cbiAgZ2V0WCgpIHtcbiAgICByZXR1cm4gdGhpcy54O1xuICB9XG4gIGdldFNwZWVkKCkge1xuICAgIHJldHVybiB0aGlzLm9ic1NwZWVkO1xuICB9XG4gIGdldE1vdmVJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vYnNNb3ZlSWQ7XG4gIH1cbiAgZ2V0Q2xlYXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jbGVhcmVkO1xuICB9XG5cbiAgc2V0T2JzSWQoKSB7XG4gICAgdGhpcy50b3BPYnNJZCA9IFwidFwiICsgb2JzSWQ7XG4gICAgdGhpcy5ib3R0b21PYnNJZCA9IFwiYlwiICsgb2JzSWQ7XG5cbiAgICBvYnNJZCsrO1xuICB9XG4gIHNldE9ic05vZGUoKSB7XG4gICAgdGhpcy50b3BPYnNOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy50b3BPYnNJZCk7XG4gICAgdGhpcy5ib3R0b21PYnNOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5ib3R0b21PYnNJZCk7XG4gIH1cbiAgLy9kaXNjcmVwYW5jeSBiZXR3ZWVuIHRvcE9ic1Bvcyh3aW5kb3cuaW5uZXJIZWlnaHQgKiB4KSAmXG4gIC8vYm90dG9tT2JzUG9zKHdpbmRvdy5pbm5lckhlaWdodCAqICgxLXgpKSBpcyBkdWUgdG8gdGhlIGZhY3QgdGhhdCB0b3BPYnNQb3NcbiAgLy9uZWVkcyB0aGUgYm90dG9tIHByb3BlcnR5IHdoaWxlIGJvdHRvbU9ic1BvcyBuZWVkcyB0b3AgcHJvcGVydHlcbiAgc2V0T2JzSGVpZ2h0KHJuZykge1xuICAgIGlmIChybmcgPT09IDApIHtcbiAgICAgIHRoaXMudG9wT2JzUG9zID0gd2luZG93LmlubmVySGVpZ2h0ICogMC43NTtcbiAgICAgIHRoaXMuYm90dG9tT2JzUG9zID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4yNSArIDIwMDtcbiAgICB9IGVsc2UgaWYgKHJuZyA9PT0gMSkge1xuICAgICAgdGhpcy50b3BPYnNQb3MgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjY7XG4gICAgICB0aGlzLmJvdHRvbU9ic1BvcyA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuNCArIDIwMDtcbiAgICB9IGVsc2UgaWYgKHJuZyA9PT0gMikge1xuICAgICAgdGhpcy50b3BPYnNQb3MgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjQ1O1xuICAgICAgdGhpcy5ib3R0b21PYnNQb3MgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjU1ICsgMjAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvcE9ic1BvcyA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMztcbiAgICAgIHRoaXMuYm90dG9tT2JzUG9zID0gd2luZG93LmlubmVySGVpZ2h0ICogMC43ICsgMjAwO1xuICAgIH1cbiAgICByZXR1cm4gW3RoaXMudG9wT2JzUG9zLCB0aGlzLmJvdHRvbU9ic1Bvc107XG4gIH1cbiAgc2V0TW92ZUlkKGlkKSB7XG4gICAgdGhpcy5vYnNNb3ZlSWQgPSBpZDtcbiAgfVxuICBzZXRYKCkge1xuICAgIHRoaXMueCArPSB0aGlzLm9ic1NwZWVkO1xuICB9XG4gIG1vdmVYKHgpIHtcbiAgICB0aGlzLnRvcE9ic05vZGUuc3R5bGUucmlnaHQgPSBgJHt4fXB4YDtcbiAgICB0aGlzLmJvdHRvbU9ic05vZGUuc3R5bGUucmlnaHQgPSBgJHt4fXB4YDtcbiAgfVxuICBzZXRDbGVhcmVkKCkge1xuICAgIHRoaXMuY2xlYXJlZCA9IHRydWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9ic0xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFyciA9IFtdO1xuICAgIHRoaXMuZGlmZmljdWx0eSA9IDA7XG4gIH1cblxuICAvL25vdCB2ZXJ5IHVzZWZ1bCBtZSB0aGlua3NcbiAgLy8gZ2V0T2JzKGEpIHtcbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyLmxlbmd0aDsgaSsrKSB7XG4gIC8vICAgICBpZiAodGhpcy5hcnJbaV0gPT09IGEpIHtcbiAgLy8gICAgICAgcmV0dXJuIHRoaXMuYXJyW2ldO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxuICBnZXREaWZmaWN1bHR5KCkge1xuICAgIHJldHVybiB0aGlzLmRpZmZpY3VsdHk7XG4gIH1cblxuICBhZGROZXdPYnMoYSkge1xuICAgIHRoaXMuYXJyLnB1c2goYSk7XG4gIH1cbiAgcmVtb3ZlRmlyc3RPYnMoKSB7XG4gICAgdGhpcy5hcnIuc2hpZnQoKTtcbiAgfVxuICByZW1vdmVBbGxPYnMoKSB7XG4gICAgdGhpcy5hcnIuc3BsaWNlKDAsIHRoaXMuYXJyLmxlbmd0aCk7XG4gIH1cbiAgY2xlYXJBbGxJbnRlcnZhbHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyci5sZW5ndGg7IGkrKykge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmFycltpXS5nZXRNb3ZlSWQoKSk7XG4gICAgfVxuICB9XG4gIGluY3JlYXNlRGlmZmljdWx0eSgpIHtcbiAgICB0aGlzLmRpZmZpY3VsdHkrKztcbiAgfVxuICByZXNldERpZmZpY3VsdHkoKSB7XG4gICAgdGhpcy5kaWZmaWN1bHR5ID0gMDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2NvcmUge1xuICBjb25zdHJ1Y3Rvcih2YWwsIHBsYSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWwgfHwgMDtcbiAgICB0aGlzLm5vZGU7XG4gICAgdGhpcy5wbGF5ZXIgPSBwbGE7XG4gIH1cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG4gIGdldFBsYXllcigpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXI7XG4gIH1cblxuICBpbmNyZWFzZVZhbHVlKCkge1xuICAgIHRoaXMudmFsdWUrKztcbiAgfVxuICByZXNldFZhbHVlKCkge1xuICAgIHRoaXMudmFsdWUgPSAwO1xuICB9XG4gIHNldE5vZGUoKSB7XG4gICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZVwiKTtcbiAgfVxuICB1cGRhdGVTY29yZSgpIHtcbiAgICB0aGlzLmdldE5vZGUoKS5pbm5lclRleHQgPSBgU0NPUkU6ICR7dGhpcy52YWx1ZX1gO1xuICB9XG4gIHNldFBsYXllcihwKSB7XG4gICAgdGhpcy5wbGF5ZXIgPSBwO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWNvcmQge1xuICBjb25zdHJ1Y3RvcihhcnIpIHtcbiAgICB0aGlzLmFyciA9IGFyciB8fCBbXTtcbiAgfVxuICBnZXRSZWNvcmRzKCkge1xuICAgIHJldHVybiB0aGlzLmFycjtcbiAgfVxuXG4gIGFkZFNjb3JlKHMpIHtcbiAgICBpZiAocy52YWx1ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hcnIubGVuZ3RoIDwgMTApIHtcbiAgICAgIHRoaXMuYXJyLnB1c2gocyk7XG4gICAgfSBlbHNlIGlmIChzLnZhbHVlID4gdGhpcy5hcnJbdGhpcy5hcnIubGVuZ3RoIC0gMV0udmFsdWUpIHtcbiAgICAgIHRoaXMuYXJyLnBvcCgpO1xuICAgICAgdGhpcy5hcnIucHVzaChzKTtcbiAgICB9XG4gIH1cbiAgc29ydFNjb3JlcygpIHtcbiAgICBpZiAodGhpcy5hcnIubGVuZ3RoID4gMSkge1xuICAgICAgdGhpcy5hcnIuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICByZXR1cm4gYi52YWx1ZSAtIGEudmFsdWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgaXNCZXN0U2NvcmUocykge1xuICAgIGlmIChzID4gdGhpcy5hcnJbMF0udmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaXNUb3AxMChzKSB7XG4gICAgaWYgKFxuICAgICAgKHRoaXMuYXJyLmxlbmd0aCA8IDEwIHx8IHMudmFsdWUgPiB0aGlzLmFyclt0aGlzLmFyci5sZW5ndGggLSAxXS52YWx1ZSkgJiZcbiAgICAgIHMudmFsdWUgPiAwXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZCB7XG4gIGNvbnN0cnVjdG9yKHApIHtcbiAgICB0aGlzLnAgPSBwO1xuICAgIHRoaXMucG9zWTtcbiAgICB0aGlzLnBvc1g7XG4gICAgdGhpcy5ub2RlO1xuICAgIHRoaXMuaWQ7XG4gICAgdGhpcy5zcGVlZCA9IDE7XG4gICAgdGhpcy5jbGFzcyA9IFwiY2xvdWRcIjtcbiAgICB0aGlzLm1vdmVJZDtcbiAgICB0aGlzLnNoYWRvdyA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG4gIGdldFBvc1koKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zWTtcbiAgfVxuICBnZXRQb3NYKCkge1xuICAgIHJldHVybiB0aGlzLnBvc1g7XG4gIH1cbiAgZ2V0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWQ7XG4gIH1cbiAgZ2V0Q2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZS5jbGFzc05hbWU7XG4gIH1cbiAgZ2V0TW92ZUlkKCkge1xuICAgIHJldHVybiB0aGlzLm1vdmVJZDtcbiAgfVxuICBnZXRTaGFkb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93O1xuICB9XG5cbiAgc2V0Tm9kZSgpIHtcbiAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgfVxuICBzZXRJZCgpIHtcbiAgICB0aGlzLmlkID0gYGMke2Nsb3VkSWR9YDtcbiAgfVxuICBzZXRJbml0aWFsWCh4KSB7XG4gICAgaWYgKHgpIHtcbiAgICAgIHRoaXMucG9zWCA9IHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9zWCA9IC0yMDA7XG4gICAgfVxuICB9XG4gIHNldFgoKSB7XG4gICAgdGhpcy5wb3NYICs9IHRoaXMuc3BlZWQ7XG4gIH1cbiAgbW92ZVgoKSB7XG4gICAgdGhpcy5ub2RlLnN0eWxlLnJpZ2h0ID0gYCR7dGhpcy5wb3NYfXB4YDtcbiAgfVxuICBzZXRQb3NZKCkge1xuICAgIGlmICh0aGlzLnApIHtcbiAgICAgIHRoaXMubm9kZS5jbGFzc05hbWUgPSBcImNsb3VkIGxvd1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5vZGUuY2xhc3NOYW1lID0gXCJjbG91ZCBoaWdoXCI7XG4gICAgfVxuICB9XG4gIHNldEltZ1NyYygpIHtcbiAgICBsZXQgY2xvdWROciA9IGNsb3VkSWQgJSA2O1xuICAgIHN3aXRjaCAoY2xvdWROcikge1xuICAgICAgY2FzZSAwOlxuICAgICAgICB0aGlzLm5vZGUuc3JjID0gY2xvdWQxO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy5ub2RlLnNyYyA9IGNsb3VkMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHRoaXMubm9kZS5zcmMgPSBjbG91ZDM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICB0aGlzLm5vZGUuc3JjID0gY2xvdWQ0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgdGhpcy5ub2RlLnNyYyA9IGNsb3VkNTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIHRoaXMubm9kZS5zcmMgPSBjbG91ZDY7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvL2luY3JlYXNlIGNsb3VkSWQgaGVyZSBiZWNhdXNlIGlmIGluY3JlYXNlZCBpbiBzZXRJZCgpIGl0IHdvdWxkIG1lc3MgaXQgdXBcbiAgICAvL3NpbmNlIGl0IGlzIG5lY2Vzc2FyeSB0byBjYWxsIGl0IGJlZm9yZSB0aGlzIG1ldGhvZFxuICAgIGNsb3VkSWQrKztcbiAgfVxuICBzZXRNb3ZlSWQoaWQpIHtcbiAgICB0aGlzLm1vdmVJZCA9IGlkO1xuICB9XG4gIHNldFNoYWRvdygpIHtcbiAgICB0aGlzLnNoYWRvdyA9ICF0aGlzLnNoYWRvdztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRMaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcnIgPSBbXTtcbiAgICB0aGlzLmxhc3RZO1xuICB9XG5cbiAgZ2V0TGFzdFkoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFzdFk7XG4gIH1cblxuICBzZXRMYXN0WSgpIHtcbiAgICBpZiAodGhpcy5sYXN0WSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmxhc3RZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGFzdFkgPSAhdGhpcy5sYXN0WTtcbiAgICB9XG4gIH1cbiAgYWRkTmV3Q2xvdWQoYykge1xuICAgIHRoaXMuYXJyLnB1c2goYyk7XG4gIH1cbiAgcmVtb3ZlRmlyc3RDbG91ZCgpIHtcbiAgICB0aGlzLmFyci5zaGlmdCgpO1xuICB9XG4gIHJlbW92ZUFsbENsb3VkcygpIHtcbiAgICB0aGlzLmFyciA9IFtdO1xuICAgIGNsb3VkSWQgPSAwO1xuICB9XG4gIGNsZWFyQWxsSW50ZXJ2YWxzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hcnJbaV0uZ2V0TW92ZUlkKCkpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgbGV0IG9ic0lkID0gMDtcbmV4cG9ydCBsZXQgY2xvdWRJZCA9IDA7XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgQmlyZCwgT2JzTGlzdCwgQ2xvdWRMaXN0IH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0IHsgcmVuZGVyTmV3R2FtZU1vZGFsLCByZW5kZXJCYWNrZ3JvdW5kIH0gZnJvbSBcIi4vcmVuZGVyRnVuY3NcIjtcbmltcG9ydCB7IGNoZWNrTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBiaXJkID0gbmV3IEJpcmQoKTtcbmV4cG9ydCBjb25zdCBvYnNBcnIgPSBuZXcgT2JzTGlzdCgpO1xuZXhwb3J0IGNvbnN0IGNsb3VkQXJyID0gbmV3IENsb3VkTGlzdCgpO1xuXG5leHBvcnQgY29uc3QgYmVzdFNjb3JlcyA9IGNoZWNrTG9jYWxTdG9yYWdlKCk7XG5cbnJlbmRlckJhY2tncm91bmQoKTtcblxucmVuZGVyTmV3R2FtZU1vZGFsKCk7XG5cbi8vVE8gRE86XG4vL2dpdEh1YiB1cGxvYWQod2VicGFjaylcbiIsImltcG9ydCB7IGJpcmQsIG9ic0FyciwgLypzY29yZSwqLyBjbG91ZEFyciB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQge1xuICBnYW1lT3ZlckNvbmRpdGlvbnMsXG4gIHBhdXNlVGltZSxcbiAgY2FsY3VsYXRlT2JzUm5nLFxuICBmbGFwRUwsXG4gIHJlbmRlck5ld0Nsb3VkLFxuICB0ZW1wU2NvcmUsXG59IGZyb20gXCIuL3JlbmRlckZ1bmNzXCI7XG5pbXBvcnQgeyBPYnN0YWNsZSB9IGZyb20gXCIuL2NsYXNzZXNcIjtcblxubGV0IHdpbmRvd1dpZHRoO1xubGV0IHN1blBvc1JpZ2h0O1xuXG5leHBvcnQgbGV0IGFjY0lEO1xuZXhwb3J0IGxldCBnbGlkZUlEO1xuZXhwb3J0IGxldCBnbG9iYWxPYnNTcGF3bklkO1xuZXhwb3J0IGxldCBvYnNHZW5UaW1lO1xuXG5leHBvcnQgZnVuY3Rpb24gbnVsbGlmeU9ic0dlblRpbWUoKSB7XG4gIGdsb2JhbE9ic1NwYXduSWQgPSBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmlyZEdsaWRlKCkge1xuICAvL2JpcmQuc2V0UG9zWCgpIGlzIG91dHNpZGUgaW50ZXJ2YWwgdG8gY2FsY3VsYXRlIGl0IG9ubHkgb25jZSBpbnN0ZWFkIG9mIGV2ZXJ5IDE2IG1zXG4gIC8vc2luY2UgaXQgaXMgbmVlZGVkIGZvciBnYW1lT3ZlckNvbmRpdGlvbnMgZnVuY3Rpb24gYW5kIHRoZSB4IHBvcyBpcyBmaXhlZCBpZlxuICAvL2NsaWVudCB3aW5kb3cgc3RheXMgdGhlIHNhbWVcbiAgYmlyZC5zZXRQb3NYKCk7XG4gIGJpcmQucmVzZXRGYWxsU3BlZWQoKTtcblxuICBnbGlkZUlEID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGxldCBuZXdZID0gYmlyZC5nZXRQb3NZKCkgKyBiaXJkLmdldFNwZWVkKCk7XG5cbiAgICBiaXJkLnNldFBvc1kobmV3WSk7XG4gICAgYmlyZC5nZXROb2RlKCkuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke2JpcmQuZ2V0U3BlZWQoKSAqIDEwfWRlZylgO1xuXG4gICAgZ2FtZU92ZXJDb25kaXRpb25zKCk7XG4gIH0sIDE2KTtcbiAgZmxhcEVMKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY2NlbGVyYXRlKCkge1xuICBhY2NJRCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBiaXJkLnNldEZhbGxTcGVlZCgpO1xuXG4gICAgaWYgKGJpcmQuZ2V0U3BlZWQoKSA+PSA3KSB7XG4gICAgICBjbGVhckludGVydmFsKGFjY0lEKTtcbiAgICB9XG4gIH0sIDIwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlck5ld09ic3RhY2xlKCkge1xuICBnbG9iYWxPYnNTcGF3bklkID0gc2V0SW50ZXJ2YWwobmV3T2JzdGFjbGUsIDIwMDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3T2JzdGFjbGUoKSB7XG4gIC8vZmlyc3QgW2lmXSBjb25kaXRpb24gY2hlY2tzIGZvciBwYXVzZWQgZ2FtZVxuICBpZiAoIWdsb2JhbE9ic1NwYXduSWQpIHtcbiAgICBzd2l0Y2ggKG9ic0Fyci5nZXREaWZmaWN1bHR5KCkpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgZ2xvYmFsT2JzU3Bhd25JZCA9IHNldEludGVydmFsKG5ld09ic3RhY2xlLCAyMDAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGdsb2JhbE9ic1NwYXduSWQgPSBzZXRJbnRlcnZhbChuZXdPYnN0YWNsZSwgMTUwMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBnbG9iYWxPYnNTcGF3bklkID0gc2V0SW50ZXJ2YWwobmV3T2JzdGFjbGUsIDEwMDApO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0gZWxzZSBpZiAodGVtcFNjb3JlLnZhbHVlID49IDQ5ICYmIG9ic0Fyci5nZXREaWZmaWN1bHR5KCkgPT09IDEpIHtcbiAgICBjbGVhckludGVydmFsKGdsb2JhbE9ic1NwYXduSWQpO1xuICAgIG9ic0Fyci5pbmNyZWFzZURpZmZpY3VsdHkoKTtcbiAgICBnbG9iYWxPYnNTcGF3bklkID0gc2V0SW50ZXJ2YWwobmV3T2JzdGFjbGUsIDEwMDApO1xuICB9IGVsc2UgaWYgKHRlbXBTY29yZS52YWx1ZSA+PSA5ICYmIG9ic0Fyci5nZXREaWZmaWN1bHR5KCkgPT09IDApIHtcbiAgICBjbGVhckludGVydmFsKGdsb2JhbE9ic1NwYXduSWQpO1xuICAgIG9ic0Fyci5pbmNyZWFzZURpZmZpY3VsdHkoKTtcbiAgICBnbG9iYWxPYnNTcGF3bklkID0gc2V0SW50ZXJ2YWwobmV3T2JzdGFjbGUsIDE1MDApO1xuICB9XG4gIGxldCBvYnMgPSBuZXcgT2JzdGFjbGUoKTtcbiAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZFwiKTtcbiAgbGV0IHRvcE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgYm90dG9tTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0b3BJZDtcbiAgbGV0IGJvdHRvbUlkO1xuICBsZXQgdG9wSGVpZ2h0O1xuICBsZXQgYm90dG9tSGVpZ2h0O1xuXG4gIGxldCBybmcgPSBjYWxjdWxhdGVPYnNSbmcoKTtcblxuICBvYnMuc2V0T2JzSWQoKTtcbiAgW3RvcElkLCBib3R0b21JZF0gPSBvYnMuZ2V0T2JzSWQoKTtcbiAgdG9wTm9kZS5pZCA9IHRvcElkO1xuICBib3R0b21Ob2RlLmlkID0gYm90dG9tSWQ7XG4gIHRvcE5vZGUuY2xhc3NOYW1lID0gXCJ0b2JcIjtcbiAgYm90dG9tTm9kZS5jbGFzc05hbWUgPSBcImJvYlwiO1xuXG4gIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQodG9wTm9kZSk7XG4gIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQoYm90dG9tTm9kZSk7XG5cbiAgW3RvcEhlaWdodCwgYm90dG9tSGVpZ2h0XSA9IG9icy5zZXRPYnNIZWlnaHQocm5nKTtcbiAgdG9wTm9kZS5zdHlsZS5yaWdodCA9IDA7XG4gIGJvdHRvbU5vZGUuc3R5bGUucmlnaHQgPSAwO1xuICB0b3BOb2RlLnN0eWxlLmJvdHRvbSA9IGAke3RvcEhlaWdodH1weGA7XG4gIGJvdHRvbU5vZGUuc3R5bGUudG9wID0gYCR7Ym90dG9tSGVpZ2h0fXB4YDtcblxuICBvYnMuc2V0T2JzTm9kZSgpO1xuICBvYnNBcnIuYWRkTmV3T2JzKG9icyk7XG4gIG1vdmVPYnMob2JzKTtcbiAgb2JzR2VuVGltZSA9IG5ldyBEYXRlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3ZlT2JzKG9icykge1xuICBvYnMuc2V0TW92ZUlkKFxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChvYnMuZ2V0WCgpID4gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChvYnMuZ2V0TW92ZUlkKCkpO1xuICAgICAgICBvYnMuZ2V0T2JzTm9kZSgpWzBdLnJlbW92ZSgpO1xuICAgICAgICBvYnMuZ2V0T2JzTm9kZSgpWzFdLnJlbW92ZSgpO1xuICAgICAgICBvYnNBcnIucmVtb3ZlRmlyc3RPYnMoKTtcbiAgICAgIH1cbiAgICAgIG9icy5zZXRYKCk7XG4gICAgICBvYnMubW92ZVgob2JzLmdldFgoKSk7XG4gICAgfSksXG4gICAgMTdcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVDbG91ZEludChjbG91ZCkge1xuICBjb25zdCBzdW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1blwiKTtcbiAgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgc3VuUG9zUmlnaHQgPSBOdW1iZXIoXG4gICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoc3VuKS5nZXRQcm9wZXJ0eVZhbHVlKFwicmlnaHRcIikuc2xpY2UoMCwgLTIpXG4gICk7XG4gIGNsb3VkLnNldE1vdmVJZChzZXRJbnRlcnZhbChtb3ZlQ2xvdWQsIDE3LCBjbG91ZCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW92ZUNsb3VkKGNsb3VkKSB7XG4gIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRcIik7XG5cbiAgaWYgKGNsb3VkLmdldFBvc1goKSA+IHdpbmRvd1dpZHRoICsgMjAwKSB7XG4gICAgY2xlYXJJbnRlcnZhbChjbG91ZC5nZXRNb3ZlSWQoKSk7XG4gICAgY2xvdWQuZ2V0Tm9kZSgpLnJlbW92ZSgpO1xuICAgIGNsb3VkQXJyLnJlbW92ZUZpcnN0Q2xvdWQoKTtcblxuICAgIGxldCBuZXdDbG91ZCA9IHJlbmRlck5ld0Nsb3VkKCk7XG5cbiAgICBtb3ZlQ2xvdWRJbnQobmV3Q2xvdWQpO1xuICB9IGVsc2UgaWYgKFxuICAgIGNsb3VkLmdldFBvc1goKSA+IHN1blBvc1JpZ2h0IC0gMjAwICYmXG4gICAgY2xvdWQuZ2V0UG9zWCgpIDwgc3VuUG9zUmlnaHQgKyA1MCAmJlxuICAgICFjbG91ZC5nZXRTaGFkb3coKSAmJlxuICAgIGNsb3VkLmdldENsYXNzKCkgPT09IFwiY2xvdWQgaGlnaFwiXG4gICkge1xuICAgIGJhY2tncm91bmQuY2xhc3NOYW1lID0gXCJzaGFkZVwiO1xuICAgIGNsb3VkLnNldFNoYWRvdygpO1xuICB9IGVsc2UgaWYgKFxuICAgIChjbG91ZC5nZXRQb3NYKCkgPCBzdW5Qb3NSaWdodCAtIDIwMCB8fFxuICAgICAgY2xvdWQuZ2V0UG9zWCgpID4gc3VuUG9zUmlnaHQgKyA1MCkgJiZcbiAgICBjbG91ZC5nZXRTaGFkb3coKSAmJlxuICAgIGNsb3VkLmdldENsYXNzKCkgPT09IFwiY2xvdWQgaGlnaFwiXG4gICkge1xuICAgIGJhY2tncm91bmQuY2xhc3NOYW1lID0gXCJzdW5ueVwiO1xuICAgIGNsb3VkLnNldFNoYWRvdygpO1xuICB9XG4gIGNsb3VkLnNldFgoKTtcbiAgY2xvdWQubW92ZVgoKTtcbn1cbiIsImltcG9ydCB7IGJlc3RTY29yZXMgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgUmVjb3JkLCBTY29yZSB9IGZyb20gXCIuL2NsYXNzZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTG9jYWxTdG9yYWdlKCkge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJiZXN0U2NvcmVzXCIpKSB7XG4gICAgY29uc3QgYmVzdFNjb3JlcyA9IHNldEFyckFzQ2xhc3NJbnN0YW5jZShcbiAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJiZXN0U2NvcmVzXCIpKVxuICAgICk7XG4gICAgcmV0dXJuIGJlc3RTY29yZXM7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYmVzdFNjb3JlcyA9IG5ldyBSZWNvcmQoKTtcbiAgICByZXR1cm4gYmVzdFNjb3JlcztcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRBcnJBc0NsYXNzSW5zdGFuY2Uob2JqKSB7XG4gIGxldCBhcnJJbnN0YW5jZTtcbiAgbGV0IHRlbXAgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmouYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHNjb3JlSW5zdGFuY2UgPSBzZXRTY29yZUFzQ2xhc3NJbnN0YW5jZShvYmouYXJyW2ldKTtcbiAgICB0ZW1wLnB1c2goc2NvcmVJbnN0YW5jZSk7XG4gIH1cbiAgYXJySW5zdGFuY2UgPSBuZXcgUmVjb3JkKHRlbXApO1xuICByZXR1cm4gYXJySW5zdGFuY2U7XG59XG5cbmZ1bmN0aW9uIHNldFNjb3JlQXNDbGFzc0luc3RhbmNlKHNjb3JlKSB7XG4gIGxldCBpbnN0YW5jZSA9IG5ldyBTY29yZShzY29yZS52YWx1ZSwgc2NvcmUucGxheWVyKTtcbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJlc3RTY29yZXNcIiwgSlNPTi5zdHJpbmdpZnkoYmVzdFNjb3JlcykpO1xufVxuIiwiaW1wb3J0IHsgQ2xvdWQsIFNjb3JlIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0IHsgYmlyZCwgb2JzQXJyLCBjbG91ZEFyciwgYmVzdFNjb3JlcyB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQge1xuICBiaXJkR2xpZGUsXG4gIGFjY2VsZXJhdGUsXG4gIHJlbmRlck5ld09ic3RhY2xlLFxuICBuZXdPYnN0YWNsZSxcbiAgbW92ZU9icyxcbiAgbW92ZUNsb3VkLFxuICBtb3ZlQ2xvdWRJbnQsXG4gIGFjY0lELFxuICBnbGlkZUlELFxuICBnbG9iYWxPYnNTcGF3bklkLFxuICBvYnNHZW5UaW1lLFxuICBudWxsaWZ5T2JzR2VuVGltZSxcbn0gZnJvbSBcIi4vaW50ZXJ2YWxzXCI7XG5pbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCBwYXVzZUltZyBmcm9tIFwiLi9pbWcvcGF1c2VfY2lyY2xlXzQwZHAuc3ZnXCI7XG5pbXBvcnQgcGxheUltZyBmcm9tIFwiLi9pbWcvcGxheV9jaXJjbGUuc3ZnXCI7XG5pbXBvcnQgbW91bnRhaW5zU3ZnIGZyb20gXCIuL2ltZy9tb3VudGFpbnMuc3ZnXCI7XG5pbXBvcnQgYmlyZFN2ZyBmcm9tIFwiLi9pbWcvYmlyZC5zdmdcIjtcblxuZXhwb3J0IGxldCBsYXN0T2JzUm5nO1xuZXhwb3J0IGxldCB0ZW1wU2NvcmU7XG5leHBvcnQgbGV0IHBhdXNlVGltZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJhY2tncm91bmQoKSB7XG4gIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29uc3Qgc3VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbW91bnRhaW5zSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgYmFja2dyb3VuZC5pZCA9IFwiYmFja2dyb3VuZFwiO1xuICBzdW4uaWQgPSBcInN1blwiO1xuICBtb3VudGFpbnNJbWcuaWQgPSBcIm1vdW50YWluc1wiO1xuXG4gIG1vdW50YWluc0ltZy5zcmMgPSBtb3VudGFpbnNTdmc7XG5cbiAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZChzdW4pO1xuICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKG1vdW50YWluc0ltZyk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlck5ld0dhbWVNb2RhbCgpIHtcbiAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZFwiKTtcbiAgY29uc3QgbmdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBuZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluZm9QYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGNyZWRpdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBuZ0J0bi5pZCA9IFwibmV3LWdhbWUtYnRuXCI7XG4gIG5nRGl2LmlkID0gXCJuZXctZ2FtZS1idG4tY29udFwiO1xuICBpbmZvUGFyYS5pZCA9IFwiaW5mb1wiO1xuICB0aXRsZS5pZCA9IFwidGl0bGVcIjtcbiAgY3JlZGl0cy5pZCA9IFwiY3JlZGl0c1wiO1xuXG4gIG5nQnRuLnRleHRDb250ZW50ID0gXCJORVcgR0FNRVwiO1xuICBpbmZvUGFyYS50ZXh0Q29udGVudCA9IGBQUkVTUyBTUEFDRSBUTyBGTEFQYDtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkZMQVBQWSBCSVJEXCI7XG4gIGNyZWRpdHMuaW5uZXJIVE1MID0gYENsb3VkIGltYWdlcyBieSBcbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZnJlZXBpay5jb20vZnJlZS12ZWN0b3IvcGFjay1mbGF0LWNsb3Vkc18xMDAwOTYyLmh0bSNmcm9tVmlldz1zZWFyY2gmcGFnZT0xJnBvc2l0aW9uPTEwJnV1aWQ9N2FkMDM4MzgtZGM0NS00Y2E0LWE3ZTYtNmUwNjYyZWU3ZjE0XCI+XG4gICAgRnJlZXBpay5jb208L2E+YDtcblxuICBuZ0Rpdi5hcHBlbmRDaGlsZChuZ0J0bik7XG4gIG5nRGl2LmFwcGVuZENoaWxkKGluZm9QYXJhKTtcbiAgbmdEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBuZ0Rpdi5hcHBlbmRDaGlsZChjcmVkaXRzKTtcbiAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZChuZ0Rpdik7XG5cbiAgbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZU5ld0dhbWVNb2RhbCk7XG4gIG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJOZXdHYW1lKTtcbiAgbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlck5ld09ic3RhY2xlKTtcblxuICBnZW5lcmF0ZVNjb3JlTm9kZXMoKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVTY29yZU5vZGVzKCkge1xuICBjb25zdCBuZ0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LWdhbWUtYnRuLWNvbnRcIik7XG4gIGNvbnN0IHRvcFNjb3JlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvbFwiKTtcbiAgY29uc3QgdHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcblxuICB0b3BTY29yZXMuaWQgPSBcInRvcC1zY29yZXNcIjtcbiAgdHNUaXRsZS5pZCA9IFwic2NvcmVzLXRpdGxlXCI7XG5cbiAgdHNUaXRsZS50ZXh0Q29udGVudCA9IFwiVE9QIDEwIGJlc3Qgc2NvcmVzXCI7XG5cbiAgdG9wU2NvcmVzLmFwcGVuZENoaWxkKHRzVGl0bGUpO1xuXG4gIG5nRGl2LmFwcGVuZENoaWxkKHRvcFNjb3Jlcyk7XG5cbiAgaWYgKHRlbXBTY29yZSkge1xuICAgIGNvbnN0IGZpbmFsU2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBuZ0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LWdhbWUtYnRuLWNvbnRcIik7XG4gICAgZmluYWxTY29yZS5pZCA9IFwiZmluYWwtc2NvcmVcIjtcblxuICAgIGZpbmFsU2NvcmUudGV4dENvbnRlbnQgPSBgRklOQUwgU0NPUkU6ICR7dGVtcFNjb3JlLmdldFZhbHVlKCl9YDtcblxuICAgIG5nRGl2LmFwcGVuZENoaWxkKGZpbmFsU2NvcmUpO1xuXG4gICAgdGVtcFNjb3JlLmdldE5vZGUoKS5yZW1vdmUoKTtcblxuICAgIGVkaXRQbGF5ZXJOYW1lKCk7XG4gIH0gZWxzZSB7XG4gICAgcmVuZGVyVG9wMTAoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlZGl0UGxheWVyTmFtZSgpIHtcbiAgY29uc3QgbmdEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1nYW1lLWJ0bi1jb250XCIpO1xuXG4gIGlmIChiZXN0U2NvcmVzLmlzVG9wMTAodGVtcFNjb3JlKSkge1xuICAgIGNvbnN0IG5hbWVNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBiZXN0U2NvcmVzLmFkZFNjb3JlKHRlbXBTY29yZSk7XG4gICAgYmVzdFNjb3Jlcy5zb3J0U2NvcmVzKCk7XG5cbiAgICBuYW1lTW9kYWwuaWQgPSBcIm5hbWUtbW9kYWxcIjtcbiAgICB0ZXh0SW5wdXQuaWQgPSBcIm5hbWUtaW5wdXRcIjtcbiAgICBidG4uaWQgPSBcInN1Ym1pdC1uYW1lXCI7XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGlucHV0IHBsYXllciBuYW1lXCI7XG4gICAgYnRuLnRleHRDb250ZW50ID0gXCJDT05GSVJNXCI7XG5cbiAgICBidG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgIHRleHRJbnB1dC5tYXhMZW5ndGggPSBcIjNcIjtcbiAgICB0ZXh0SW5wdXQubWluTGVuZ3RoID0gXCIzXCI7XG5cbiAgICBuYW1lTW9kYWwuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIG5hbWVNb2RhbC5hcHBlbmRDaGlsZCh0ZXh0SW5wdXQpO1xuICAgIG5hbWVNb2RhbC5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgbmdEaXYuYXBwZW5kQ2hpbGQobmFtZU1vZGFsKTtcblxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVuZGVyVG9wMTAoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5hbWUoZSkge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWUtaW5wdXRcIik7XG5cbiAgICBpZiAobmFtZS52YWx1ZS5sZW5ndGggPT09IDMpIHtcbiAgICAgIHRlbXBTY29yZS5zZXRQbGF5ZXIobmFtZS52YWx1ZSk7XG5cbiAgICAgIHJlbmRlclRvcDEwKCk7XG5cbiAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKCk7XG5cbiAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgIH0gZWxzZSByZXR1cm47XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9wMTAoKSB7XG4gIGNvbnN0IHRvcFNjb3JlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9wLXNjb3Jlc1wiKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJlc3RTY29yZXMuYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgc2NvcmUuY2xhc3NOYW1lID0gXCJ0b3AxMFwiO1xuXG4gICAgc2NvcmUudGV4dENvbnRlbnQgPSBgJHtiZXN0U2NvcmVzLmFycltpXS5nZXRQbGF5ZXIoKX06XG4gICAgJHtiZXN0U2NvcmVzLmFycltpXS5nZXRWYWx1ZSgpfWA7XG5cbiAgICB0b3BTY29yZXMuYXBwZW5kQ2hpbGQoc2NvcmUpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJOZXdHYW1lKCkge1xuICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kXCIpO1xuICBsZXQgYmlyZE5vZGUgPSBuZXcgSW1hZ2UoKTtcbiAgbGV0IHNjb3JlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBwYXVzZUJ0biA9IG5ldyBJbWFnZSgpO1xuXG4gIGJpcmROb2RlLmlkID0gXCJiaXJkXCI7XG4gIHNjb3JlTm9kZS5pZCA9IFwic2NvcmVcIjtcbiAgcGF1c2VCdG4uaWQgPSBcInBhdXNlXCI7XG4gIHBhdXNlQnRuLmNsYXNzTmFtZSA9IFwicGF1c2UtYnRuXCI7XG5cbiAgYmlyZE5vZGUuc3JjID0gYmlyZFN2ZztcbiAgcGF1c2VCdG4uc3JjID0gcGF1c2VJbWc7XG5cbiAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZChiaXJkTm9kZSk7XG4gIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQoc2NvcmVOb2RlKTtcbiAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZChwYXVzZUJ0bik7XG5cbiAgYmlyZC5zZXROb2RlKCk7XG4gIGJpcmQuc2V0UG9zWShcIlwiKTtcblxuICB0ZW1wU2NvcmUgPSBuZXcgU2NvcmUoKTtcbiAgdGVtcFNjb3JlLnNldE5vZGUoKTtcbiAgdGVtcFNjb3JlLnVwZGF0ZVNjb3JlKCk7XG5cbiAgYmlyZEdsaWRlKCk7XG4gIGFjY2VsZXJhdGUoKTtcbiAgcGF1c2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBhdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZU5ld0dhbWVNb2RhbChlKSB7XG4gIGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKCk7XG5cbiAgY29uc3QgY2xvdWQxID0gcmVuZGVyTmV3Q2xvdWQod2luZG93LmlubmVyV2lkdGggKiAwLjc1KTtcbiAgY29uc3QgY2xvdWQyID0gcmVuZGVyTmV3Q2xvdWQod2luZG93LmlubmVyV2lkdGggKiAwLjUpO1xuICBjb25zdCBjbG91ZDMgPSByZW5kZXJOZXdDbG91ZCh3aW5kb3cuaW5uZXJXaWR0aCAqIDAuMjUpO1xuXG4gIG1vdmVDbG91ZEludChjbG91ZDEpO1xuICBtb3ZlQ2xvdWRJbnQoY2xvdWQyKTtcbiAgbW92ZUNsb3VkSW50KGNsb3VkMyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1lT3ZlckNvbmRpdGlvbnMoKSB7XG4gIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRcIik7XG4gIGlmIChiaXJkLmdldFBvc1koKSArIDUyID49IGJhY2tncm91bmQuc2Nyb2xsSGVpZ2h0KSB7XG4gICAgZ2FtZU92ZXJTY3JlZW5SZW5kZXIoKTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9ic0Fyci5hcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB0b3BOb2RlQlNpZGUgPVxuICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgLVxuICAgICAgICBOdW1iZXIob2JzQXJyLmFycltpXS5nZXRPYnNOb2RlKClbMF0uc3R5bGUuYm90dG9tLnNsaWNlKDAsIC0yKSk7XG4gICAgICBsZXQgYm90dG9tTm9kZVRTaWRlID0gTnVtYmVyKFxuICAgICAgICBvYnNBcnIuYXJyW2ldLmdldE9ic05vZGUoKVsxXS5zdHlsZS50b3Auc2xpY2UoMCwgLTIpXG4gICAgICApO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGJpcmQuZ2V0UG9zWCgpIDwgb2JzQXJyLmFycltpXS5nZXRYKCkgJiYgLy93b3Jrc1xuICAgICAgICBiaXJkLmdldFBvc1goKSArIDUwID4gb2JzQXJyLmFycltpXS5nZXRYKCkgJiYgLy93b3Jrc1xuICAgICAgICAoYmlyZC5nZXRQb3NZKCkgPCB0b3BOb2RlQlNpZGUgfHwgLy93b3Jrc1xuICAgICAgICAgIGJpcmQuZ2V0UG9zWSgpICsgNTAgPiBib3R0b21Ob2RlVFNpZGUpIC8vd29ya3NcbiAgICAgICkge1xuICAgICAgICBnYW1lT3ZlclNjcmVlblJlbmRlcigpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgYmlyZC5nZXRQb3NYKCkgKyA1MCA8IG9ic0Fyci5hcnJbaV0uZ2V0WCgpICYmXG4gICAgICAgICFvYnNBcnIuYXJyW2ldLmdldENsZWFyZWQoKVxuICAgICAgKSB7XG4gICAgICAgIG9ic0Fyci5hcnJbaV0uc2V0Q2xlYXJlZCgpO1xuICAgICAgICB0ZW1wU2NvcmUuaW5jcmVhc2VWYWx1ZSgpO1xuICAgICAgICB0ZW1wU2NvcmUudXBkYXRlU2NvcmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVPdmVyU2NyZWVuUmVuZGVyKCkge1xuICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kXCIpO1xuICBjb25zdCBwYXVzZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF1c2VcIik7XG5cbiAgcGF1c2VCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBhdXNlKTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZsYXApO1xuXG4gIHBhdXNlQnRuLnJlbW92ZSgpO1xuXG4gIGJhY2tncm91bmQuY2xhc3NOYW1lID0gXCJcIjtcblxuICBjbGVhckludGVydmFsKGFjY0lEKTtcbiAgY2xlYXJJbnRlcnZhbChnbGlkZUlEKTtcbiAgb2JzQXJyLnJlc2V0RGlmZmljdWx0eSgpO1xuXG4gIGJpcmQucmVzZXRGYWxsU3BlZWQoKTtcblxuICBiaXJkLmdldE5vZGUoKS5yZW1vdmUoKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9ic0Fyci5hcnIubGVuZ3RoOyBpKyspIHtcbiAgICBvYnNBcnIuYXJyW2ldLmdldE9ic05vZGUoKVswXS5yZW1vdmUoKTtcbiAgICBvYnNBcnIuYXJyW2ldLmdldE9ic05vZGUoKVsxXS5yZW1vdmUoKTtcbiAgfVxuICBmb3IgKGxldCBqID0gMDsgaiA8IGNsb3VkQXJyLmFyci5sZW5ndGg7IGorKykge1xuICAgIGNsb3VkQXJyLmFycltqXS5nZXROb2RlKCkucmVtb3ZlKCk7XG4gIH1cbiAgY2xlYXJJbnRlcnZhbChnbG9iYWxPYnNTcGF3bklkKTtcblxuICBvYnNBcnIuY2xlYXJBbGxJbnRlcnZhbHMoKTtcbiAgb2JzQXJyLnJlbW92ZUFsbE9icygpO1xuXG4gIGNsb3VkQXJyLmNsZWFyQWxsSW50ZXJ2YWxzKCk7XG4gIGNsb3VkQXJyLnJlbW92ZUFsbENsb3VkcygpO1xuXG4gIHJlbmRlck5ld0dhbWVNb2RhbCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlT2JzUm5nKCkge1xuICBsZXQgcm5nO1xuXG4gIGlmIChsYXN0T2JzUm5nID09PSB1bmRlZmluZWQpIHtcbiAgICBybmcgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTsgLy8gMCB0byAzXG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChsYXN0T2JzUm5nKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJuZyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpOyAvLyAwIHx8IDFcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJuZyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpOyAvLyAwIHx8IDEgfHwgMlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcm5nID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMykgKyAxOyAvLyAxIHx8IDIgfHwgM1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcm5nID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgKyAyOyAvLyAyIHx8IDNcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGxhc3RPYnNSbmcgPSBybmc7XG4gIHJldHVybiBybmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJOZXdDbG91ZChwb3MpIHtcbiAgY2xvdWRBcnIuc2V0TGFzdFkoKTtcblxuICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kXCIpO1xuICBjb25zdCBjbG91ZFBvcyA9IGNsb3VkQXJyLmdldExhc3RZKCk7XG4gIGNvbnN0IGNsb3VkID0gbmV3IENsb3VkKGNsb3VkUG9zKTtcbiAgY29uc3QgY2xvdWRJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICBjbG91ZC5zZXRJZCgpO1xuICBjbG91ZEltZy5pZCA9IGNsb3VkLmdldElkKCk7XG5cbiAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZChjbG91ZEltZyk7XG4gIGNsb3VkLnNldE5vZGUoY2xvdWQuZ2V0SWQoKSk7XG5cbiAgY2xvdWQuc2V0UG9zWSgpO1xuICBjbG91ZC5zZXRJbWdTcmMoKTtcblxuICBjbG91ZEFyci5hZGROZXdDbG91ZChjbG91ZCk7XG5cbiAgY2xvdWQuc2V0SW5pdGlhbFgocG9zKTtcbiAgY2xvdWQuZ2V0Tm9kZSgpLnN0eWxlLnJpZ2h0ID0gY2xvdWQuZ2V0UG9zWCgpICsgXCJweFwiO1xuXG4gIHJldHVybiBjbG91ZDtcbn1cblxuZnVuY3Rpb24gcGF1c2UoKSB7XG4gIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRcIik7XG4gIGNvbnN0IHBhdXNlTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB1bnBhdXNlQnRuID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IHBhdXNlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXVzZVwiKTtcblxuICBwYXVzZU1vZGFsLmlkID0gXCJuZXctZ2FtZS1idG4tY29udFwiO1xuICB1bnBhdXNlQnRuLmlkID0gXCJwbGF5LWJ0blwiO1xuXG4gIHVucGF1c2VCdG4uc3JjID0gcGxheUltZztcblxuICBwYXVzZVRpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gIGNsZWFySW50ZXJ2YWwoYWNjSUQpO1xuICBjbGVhckludGVydmFsKGdsaWRlSUQpO1xuICBjbGVhckludGVydmFsKGdsb2JhbE9ic1NwYXduSWQpO1xuICBvYnNBcnIuY2xlYXJBbGxJbnRlcnZhbHMoKTtcbiAgY2xvdWRBcnIuY2xlYXJBbGxJbnRlcnZhbHMoKTtcblxuICAvL3RoaXMgaWQgaXMgbnVsbGVkIGJlY2F1c2Ugb2YgZmlyc3QgY29uZGl0aW9uIGluIG5ld09ic3RhY2xlKClcbiAgLy8gZ2xvYmFsT2JzU3Bhd25JZCA9IG51bGw7XG4gIG51bGxpZnlPYnNHZW5UaW1lKCk7XG5cbiAgcGF1c2VNb2RhbC5hcHBlbmRDaGlsZCh1bnBhdXNlQnRuKTtcbiAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZChwYXVzZU1vZGFsKTtcblxuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZmxhcCk7XG4gIHBhdXNlQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwYXVzZSk7XG5cbiAgdW5wYXVzZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdW5wYXVzZSk7XG4gIC8vaSB0aGluayBpIGFtIGZvcmdldHRpbmcgc29tZXRoaW5nIGVsc2UgYnV0IGRvIG5vdCBrbm93IHdoYXRcbn1cblxuZnVuY3Rpb24gdW5wYXVzZShlKSB7XG4gIGNvbnN0IGRlbHRhVGltZSA9IHBhdXNlVGltZSAtIG9ic0dlblRpbWU7XG4gIGNvbnN0IHBhdXNlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXVzZVwiKTtcblxuICBlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuXG4gIGJpcmRHbGlkZSgpO1xuICBhY2NlbGVyYXRlKCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYnNBcnIuYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgbW92ZU9icyhvYnNBcnIuYXJyW2ldKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2xvdWRBcnIuYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgbW92ZUNsb3VkSW50KGNsb3VkQXJyLmFycltpXSk7XG4gIH1cblxuICBpZiAob2JzQXJyLmdldERpZmZpY3VsdHkoKSA9PT0gMikge1xuICAgIHNldFRpbWVvdXQobmV3T2JzdGFjbGUsIDEwMDAgLSBkZWx0YVRpbWUpO1xuICB9IGVsc2UgaWYgKG9ic0Fyci5nZXREaWZmaWN1bHR5KCkgPT09IDEpIHtcbiAgICBzZXRUaW1lb3V0KG5ld09ic3RhY2xlLCAxNTAwIC0gZGVsdGFUaW1lKTtcbiAgfSBlbHNlIHtcbiAgICBzZXRUaW1lb3V0KG5ld09ic3RhY2xlLCAyMDAwIC0gZGVsdGFUaW1lKTtcbiAgfVxuXG4gIGZsYXBFTCgpO1xuICBwYXVzZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGF1c2UpO1xufVxuXG4vL05FVyBNT0RVTEUgRk9SIEVWRU5UIExJU1RFTkVSUz8/P1xuXG5leHBvcnQgZnVuY3Rpb24gZmxhcEVMKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZmxhcCk7XG59XG5cbmZ1bmN0aW9uIGZsYXAoZSkge1xuICBpZiAoZS5rZXkgPT09IFwiIFwiKSB7XG4gICAgYmlyZC5mbGFwKCk7XG4gICAgY2xlYXJJbnRlcnZhbChhY2NJRCk7XG4gICAgYWNjZWxlcmF0ZSgpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=