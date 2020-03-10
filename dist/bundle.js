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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Code_module/code.css":
/*!******************************!*\
  !*** ./Code_module/code.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./Code_module/code.css?");

/***/ }),

/***/ "./Code_module/code.js":
/*!*****************************!*\
  !*** ./Code_module/code.js ***!
  \*****************************/
/*! exports provided: codeCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"codeCheck\", function() { return codeCheck; });\n/* harmony import */ var _code_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code.css */ \"./Code_module/code.css\");\n/* harmony import */ var _code_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_code_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction codeCheck() {\n  var checkBtn = document.getElementById('btn');\n  var clearBtn = document.getElementById('btn-clear');\n  var userCode = document.querySelector('.input-code');\n\n  function showError(a) {\n    userCode.classList.add(\"error\");\n    alert(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(a));\n  }\n\n  checkBtn.onclick = function () {\n    'use strict';\n\n    if (userCode.value === '') {\n      alert(\"\\u0412\\u044B \\u043D\\u0438\\u0447\\u0435\\u0433\\u043E \\u043D\\u0435 \\u0432\\u0432\\u0435\\u043B\\u0438\");\n      return;\n    }\n\n    ;\n\n    try {\n      eval(userCode.value);\n      alert(\"\\u0412\\u0430\\u0448 \\u043A\\u043E\\u0434 \\u043F\\u0440\\u0430\\u0432\\u0438\\u043B\\u044C\\u043D\\u044B\\u0439!\");\n    } catch (ex) {\n      showError(ex);\n    }\n  };\n\n  clearBtn.onclick = function () {\n    userCode.value = '';\n    userCode.classList.remove(\"error\");\n  };\n}\n\n\n\n//# sourceURL=webpack:///./Code_module/code.js?");

/***/ }),

/***/ "./Now_Date_module/Now_Date.css":
/*!**************************************!*\
  !*** ./Now_Date_module/Now_Date.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./Now_Date_module/Now_Date.css?");

/***/ }),

/***/ "./Now_Date_module/Now_Date.js":
/*!*************************************!*\
  !*** ./Now_Date_module/Now_Date.js ***!
  \*************************************/
/*! exports provided: nowDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nowDate\", function() { return nowDate; });\n/* harmony import */ var _Now_Date_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Now_Date.css */ \"./Now_Date_module/Now_Date.css\");\n/* harmony import */ var _Now_Date_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Now_Date_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction nowDate(tag) {\n  var parent = document.querySelector(tag);\n  var dateText = document.createElement('p');\n  dateText.classList.add('date__text');\n  parent.append(dateText);\n  var d = new Date();\n  var nowDay = d.getDate();\n\n  var nowMonth = function nowMonth() {\n    var allMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];\n    var x = d.getMonth();\n    return allMonth[x];\n  };\n\n  var nowYear = d.getFullYear();\n\n  var nowWeekday = function nowWeekday() {\n    var allWeekday = ['воскресение', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];\n    var y = d.getDay();\n    return allWeekday[y];\n  };\n\n  function declOfNum(number, titles) {\n    var cases = [2, 0, 1, 1, 1, 2];\n    return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];\n  }\n\n  var nowHours = function nowHours() {\n    var h = d.getHours();\n    return h + ' ' + declOfNum(h, ['час', 'часа', 'часов']);\n  };\n\n  var nowMinutes = function nowMinutes() {\n    var m = d.getMinutes();\n    return m + ' ' + declOfNum(m, ['минута', 'минуты', 'минут']);\n  };\n\n  var nowSeconds = function nowSeconds() {\n    var s = d.getSeconds();\n    return s + ' ' + declOfNum(s, ['секунда', 'секунды', 'секунд']);\n  };\n\n  function nowFullDate() {\n    dateText.textContent = 'Сегодня ' + nowDay + ' ' + nowMonth() + ' ' + nowYear + ' года, ' + nowWeekday() + ', ' + nowHours() + ' ' + nowMinutes() + ' ' + nowSeconds();\n    return d = new Date();\n  }\n\n  setInterval(nowFullDate, 1000);\n}\n\n\n\n//# sourceURL=webpack:///./Now_Date_module/Now_Date.js?");

/***/ }),

/***/ "./TextEdit_module/text_edit.css":
/*!***************************************!*\
  !*** ./TextEdit_module/text_edit.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./TextEdit_module/text_edit.css?");

/***/ }),

/***/ "./TextEdit_module/text_edit.js":
/*!**************************************!*\
  !*** ./TextEdit_module/text_edit.js ***!
  \**************************************/
/*! exports provided: textEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"textEditor\", function() { return textEditor; });\n/* harmony import */ var _text_edit_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text_edit.css */ \"./TextEdit_module/text_edit.css\");\n/* harmony import */ var _text_edit_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_text_edit_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction textEditor() {\n  var textBlock = document.querySelector('.text-editor__text');\n  var btnEdit = document.querySelector('.btn-1');\n  var btnSave = document.querySelector('.btn-2');\n  var btnCancel = document.querySelector('.btn-3');\n  var btnGo = document.querySelector('.btn-4');\n  var select = document.querySelector('.select');\n  var option = select.innerHTML;\n  var text = textBlock.innerHTML;\n  var data = localStorage.getItem('myText') ? JSON.parse(localStorage.getItem('myText')) : [];\n  var options;\n  getOfLocal();\n  getOptionLocal();\n\n  function saveToLocal() {\n    if (data.length === 5) {\n      data.splice(0, 1);\n    }\n\n    text = textBlock.innerHTML;\n    var date = nowDate();\n    data.push([date, text]);\n    localStorage.setItem('myText', JSON.stringify(data));\n    addToSelect(date);\n    saveOptionLocal();\n  }\n\n  function getOfLocal() {\n    var data = JSON.parse(localStorage.getItem('myText'));\n\n    if (data) {\n      text = data[data.length - 1][1];\n    }\n\n    textBlock.innerHTML = text;\n  }\n\n  function saveOptionLocal() {\n    options = select.innerHTML;\n    localStorage.setItem('myOptions', JSON.stringify(options));\n  }\n\n  function getOptionLocal() {\n    var options = JSON.parse(localStorage.getItem('myOptions'));\n\n    if (options) {\n      select.insertAdjacentHTML(\"afterbegin\", options);\n    }\n\n    options = select.innerHTML;\n  }\n\n  function getOfLocalSelect(date) {\n    var data = JSON.parse(localStorage.getItem('myText'));\n    var selectValue = data.find(function (item) {\n      return item[0] === date;\n    });\n    text = selectValue[1];\n    textBlock.innerHTML = selectValue[1];\n  }\n\n  function addToSelect(param) {\n    if (select.querySelectorAll('option').length === 5) {\n      select.querySelector('option').remove();\n    }\n\n    var newOption = document.createElement('option');\n    newOption.classList.add('select__item');\n    newOption.setAttribute('value', param);\n    newOption.innerHTML = \"\".concat(param);\n    select.append(newOption);\n  }\n\n  function nowDate() {\n    var d = new Date();\n    return \"\".concat(d.getDate(), \".\").concat(d.getMonth() + 1, \".\").concat(d.getFullYear(), \"-\").concat(d.getHours(), \":\").concat(d.getMinutes(), \":\").concat(d.getSeconds());\n  }\n\n  btnEdit.addEventListener('click', function () {\n    textBlock.setAttribute('contenteditable', 'true');\n    btnEdit.setAttribute('disabled', '');\n    btnSave.removeAttribute('disabled');\n    btnCancel.removeAttribute('disabled');\n  });\n  btnSave.addEventListener('click', function () {\n    saveToLocal();\n    saveOptionLocal();\n    textBlock.setAttribute('contenteditable', 'false');\n    btnEdit.removeAttribute('disabled');\n    btnSave.setAttribute('disabled', '');\n    btnCancel.setAttribute('disabled', '');\n  });\n  btnCancel.addEventListener('click', function () {\n    getOfLocal();\n    textBlock.setAttribute('contenteditable', 'false');\n    btnEdit.removeAttribute('disabled');\n    btnSave.setAttribute('disabled', '');\n    btnCancel.setAttribute('disabled', '');\n  });\n  btnGo.addEventListener('click', function () {\n    var keyLocal = select.value;\n    getOfLocalSelect(keyLocal);\n  });\n}\n\n\n\n//# sourceURL=webpack:///./TextEdit_module/text_edit.js?");

/***/ }),

/***/ "./Todo_module/todo.css":
/*!******************************!*\
  !*** ./Todo_module/todo.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./Todo_module/todo.css?");

/***/ }),

/***/ "./Todo_module/todo.js":
/*!*****************************!*\
  !*** ./Todo_module/todo.js ***!
  \*****************************/
/*! exports provided: todoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoList\", function() { return todoList; });\n/* harmony import */ var _todo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.css */ \"./Todo_module/todo.css\");\n/* harmony import */ var _todo_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_todo_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction todoList() {\n  var btnAdd = document.querySelector('.add-todo');\n  var list = document.querySelector('ol');\n  var newTodo = document.querySelector('.new-todo');\n  var nowTodo = document.querySelector('li');\n\n  function clearTodo(ev) {\n    if (ev.target.tagName === 'LI') {\n      ev.target.classList.toggle('del-todo');\n    }\n  }\n\n  function addTodo(text) {\n    var nextTodo = document.createElement('li');\n    nextTodo.classList.add('list_item');\n    nextTodo.innerHTML = \"\".concat(text);\n    list.append(nextTodo);\n  }\n\n  btnAdd.addEventListener('click', function () {\n    var text = newTodo.value;\n\n    if (text === '') {\n      alert('Вы ничего не ввели');\n      return;\n    }\n\n    addTodo(text);\n    newTodo.value = '';\n  });\n  list.addEventListener('click', clearTodo);\n}\n\n\n\n//# sourceURL=webpack:///./Todo_module/todo.js?");

/***/ }),

/***/ "./YandexTrans_module/trans.css":
/*!**************************************!*\
  !*** ./YandexTrans_module/trans.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./YandexTrans_module/trans.css?");

/***/ }),

/***/ "./YandexTrans_module/trans.js":
/*!*************************************!*\
  !*** ./YandexTrans_module/trans.js ***!
  \*************************************/
/*! exports provided: yanTrans */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"yanTrans\", function() { return yanTrans; });\n/* harmony import */ var _trans_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trans.css */ \"./YandexTrans_module/trans.css\");\n/* harmony import */ var _trans_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_trans_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction yanTrans() {\n  var apiKey = '?key=' + 'trnsl.1.1.20200302T172549Z.ee7b04aaac291f3d.4e8f2ea31c3d2b9ec9952c914a6245124b334535';\n  var userText = document.querySelector('.form__input');\n  var firstLang = document.querySelector('#firstLang');\n  var secondLang = document.querySelector('#secondLang');\n  var result = document.querySelector('.result');\n  var btn = document.querySelector('.form__send');\n  btn.addEventListener('click', function (ev) {\n    ev.preventDefault();\n    var url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';\n    var text = \"&text=\".concat(userText.value);\n    var lang = \"&lang=\".concat(firstLang.value, \"-\").concat(secondLang.value);\n    url += apiKey;\n    url += text;\n    url += lang;\n    fetch(url).then(function (response) {\n      if (response.status !== 200 && response.status !== 422) {\n        throw new Error('Произошла ошибка при получении ответа от сервера:\\n\\n' + response.statusText);\n      } else if (response.status === 422) {\n        throw new Error('К сожалению, перевод для данного слова не найден');\n      } else {\n        return response.json();\n      }\n    }).then(function (data) {\n      result.innerHTML = data.text[0];\n    })[\"catch\"](function (error) {\n      result.innerHTML = error;\n    })[\"finally\"](function () {\n      userText.innerHTML = '';\n    });\n  });\n}\n\n\n\n//# sourceURL=webpack:///./YandexTrans_module/trans.js?");

/***/ }),

/***/ "./css/index.css":
/*!***********************!*\
  !*** ./css/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./css/index.css?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ \"./css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Now_Date_module_Now_Date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Now_Date_module/Now_Date */ \"./Now_Date_module/Now_Date.js\");\n/* harmony import */ var _Code_module_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Code_module/code */ \"./Code_module/code.js\");\n/* harmony import */ var _Todo_module_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Todo_module/todo */ \"./Todo_module/todo.js\");\n/* harmony import */ var _TextEdit_module_text_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TextEdit_module/text_edit */ \"./TextEdit_module/text_edit.js\");\n/* harmony import */ var _YandexTrans_module_trans__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../YandexTrans_module/trans */ \"./YandexTrans_module/trans.js\");\n\n\n\n\n\n\nObject(_Now_Date_module_Now_Date__WEBPACK_IMPORTED_MODULE_1__[\"nowDate\"])('.date');\nObject(_Code_module_code__WEBPACK_IMPORTED_MODULE_2__[\"codeCheck\"])();\nObject(_Todo_module_todo__WEBPACK_IMPORTED_MODULE_3__[\"todoList\"])();\nObject(_TextEdit_module_text_edit__WEBPACK_IMPORTED_MODULE_4__[\"textEditor\"])();\nObject(_YandexTrans_module_trans__WEBPACK_IMPORTED_MODULE_5__[\"yanTrans\"])();\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ })

/******/ });