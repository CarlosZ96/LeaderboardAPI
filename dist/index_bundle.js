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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _scores_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scores.js */ \"./src/scores.js\");\n\r\n\r\n\r\n\r\nconst SubmitButton = document.querySelector('.AddScores');\r\nconst RefreshButton = document.querySelector('.Rbutton');\r\n\r\nlet GameId = null;\r\n\r\nconst Display = (scores) => {\r\n  const ScoreList = document.querySelector('.ScoreList');\r\n  ScoreList.innerHTML = '';\r\n  scores.forEach((score) => {\r\n    const ScoreLi = document.createElement('li');\r\n    ScoreLi.classList.add('ScoreI');\r\n    ScoreLi.textContent = `${score.user} : ${score.score}`;\r\n    ScoreList.appendChild(ScoreLi);\r\n  });\r\n};\r\n\r\nRefreshButton.addEventListener('click', async () => {\r\n  if (GameId) {\r\n    const scores = await (0,_scores_js__WEBPACK_IMPORTED_MODULE_1__.Scoresg)(GameId);\r\n    Display(scores);\r\n  }\r\n});\r\n\r\nSubmitButton.addEventListener('submit', async (event) => {\r\n  event.preventDefault();\r\n  const NameInput = document.getElementById('NameInput');\r\n  const ScoreInput = document.getElementById('ScoreInput');\r\n  if (GameId) {\r\n    await (0,_scores_js__WEBPACK_IMPORTED_MODULE_1__.AddScore)(GameId, NameInput.value, ScoreInput.value);\r\n    SubmitButton.reset();\r\n  }\r\n});\r\n\r\n(async () => {\r\n  const GameName = 'Morltal Kombat';\r\n  GameId = await (0,_scores_js__WEBPACK_IMPORTED_MODULE_1__.NewGame)(GameName);\r\n})();\n\n//# sourceURL=webpack://tasks/./src/index.js?");

/***/ }),

/***/ "./src/scores.js":
/*!***********************!*\
  !*** ./src/scores.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddScore: () => (/* binding */ AddScore),\n/* harmony export */   NewGame: () => (/* binding */ NewGame),\n/* harmony export */   Scoresg: () => (/* binding */ Scoresg)\n/* harmony export */ });\nconst BaseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';\r\n\r\nconst NewGame = async (name) => {\r\n  const response = await fetch(`${BaseUrl}/games/`, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      name,\r\n    }),\r\n  });\r\n  const data = await response.json();\r\n  return data.result;\r\n};\r\n\r\nconst Scoresg = async (GameId) => {\r\n  const response = await fetch(`${BaseUrl}/games/${GameId}/scores/`);\r\n  const data = await response.json();\r\n  return data.result;\r\n};\r\n\r\nconst AddScore = async (GameId, user, score) => {\r\n  await fetch(`${BaseUrl}/games/${GameId}/scores/`, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      user,\r\n      score,\r\n    }),\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://tasks/./src/scores.js?");

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