/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers/storage.js":
/*!********************************!*\
  !*** ./src/helpers/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\nvar storage = {\n  readItem: function readItem(key, defaultValue) {\n    try {\n      var result = JSON.parse(localStorage.getItem(key));\n      return result ? result : defaultValue;\n    } catch (error) {\n      return null;\n    }\n  },\n  addItem: function addItem(key, value) {\n    localStorage.setItem(key, JSON.stringify(value));\n  },\n  deleteItem: function deleteItem() {},\n  cleat: function cleat() {}\n};\n\n//# sourceURL=webpack://webpack-tutorial/./src/helpers/storage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_refs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/refs */ \"./src/scripts/refs.js\");\n/* harmony import */ var _scripts_generateMarkup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/generateMarkup */ \"./src/scripts/generateMarkup.js\");\n/* harmony import */ var _helpers_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/storage */ \"./src/helpers/storage.js\");\n\n\n\n\nvar handleMount = function handleMount() {\n  var list = _helpers_storage__WEBPACK_IMPORTED_MODULE_2__.storage.readItem('list', []);\n  var markUp = list.reduce(function (acc, text) {\n    return acc + (0,_scripts_generateMarkup__WEBPACK_IMPORTED_MODULE_1__.createLi)(text);\n  }, '');\n  (0,_scripts_generateMarkup__WEBPACK_IMPORTED_MODULE_1__.addLiToList)(markUp);\n};\n\nvar onSubmit = function onSubmit(e) {\n  e.preventDefault();\n  var value = _scripts_refs__WEBPACK_IMPORTED_MODULE_0__.refs.input.value;\n\n  if (value === '') {\n    return;\n  }\n\n  var liItem = (0,_scripts_generateMarkup__WEBPACK_IMPORTED_MODULE_1__.createLi)(value);\n  (0,_scripts_generateMarkup__WEBPACK_IMPORTED_MODULE_1__.addLiToList)(liItem);\n  var result = _helpers_storage__WEBPACK_IMPORTED_MODULE_2__.storage.readItem('list', []);\n  result.push(value);\n  _helpers_storage__WEBPACK_IMPORTED_MODULE_2__.storage.addItem('list', result);\n  _scripts_refs__WEBPACK_IMPORTED_MODULE_0__.refs.input.value = '';\n};\n\n_scripts_refs__WEBPACK_IMPORTED_MODULE_0__.refs.form.addEventListener(\"submit\", onSubmit);\naddEventListener('DOMContentLoaded', handleMount); // storage => ['test']\n// 1) Прочитати сторедж\n// 2) Перетворити в масив з JSON\n// 3) Запушити в масив нові данні\n// 4) Конвертувати новий масив в JSON\n// 5) Записати новий JSON в сторедж\n\n//# sourceURL=webpack://webpack-tutorial/./src/index.js?");

/***/ }),

/***/ "./src/scripts/generateMarkup.js":
/*!***************************************!*\
  !*** ./src/scripts/generateMarkup.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLiToList\": () => (/* binding */ addLiToList),\n/* harmony export */   \"createLi\": () => (/* binding */ createLi)\n/* harmony export */ });\n/* harmony import */ var _refs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refs */ \"./src/scripts/refs.js\");\n\nvar createLi = function createLi(text) {\n  return \"<li data-id='\".concat(text, \"'>\").concat(text, \"</li>\");\n};\nvar addLiToList = function addLiToList(markup) {\n  _refs__WEBPACK_IMPORTED_MODULE_0__.refs.list.insertAdjacentHTML('beforeEnd', markup);\n};\n\n//# sourceURL=webpack://webpack-tutorial/./src/scripts/generateMarkup.js?");

/***/ }),

/***/ "./src/scripts/refs.js":
/*!*****************************!*\
  !*** ./src/scripts/refs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"refs\": () => (/* binding */ refs)\n/* harmony export */ });\nvar refs = {\n  form: document.querySelector(\"#form\"),\n  input: document.querySelector(\"input\"),\n  list: document.querySelector(\".list\")\n};\n\n//# sourceURL=webpack://webpack-tutorial/./src/scripts/refs.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;