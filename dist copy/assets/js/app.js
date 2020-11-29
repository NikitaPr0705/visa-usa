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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function(){\n    // Добавить плавную прокрутку до всех ссылок\n    $(\"a\").on('click', function(event) {\n\n        // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию\n        if (this.hash !== \"\") {\n            // Запретить поведение щелчка якоря по умолчанию\n            event.preventDefault();\n\n            // Хранить хэш\n            var hash = this.hash;\n\n            // Использование метода animate() jQuery для добавления плавной прокрутки страницы\n            // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области\n            $('html, body').animate({\n                scrollTop: $(hash).offset().top\n            }, 800, function(){\n\n                // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)\n                window.location.hash = hash;\n            });\n        } // Конец, если\n    });\n});\n\n\n\n\n// if(document.URL.includes('index.html')) {\n//     window.onscroll = function() {myFunction()};\n// } else if(document.URL.includes('ind-services.html')) {\n//     window.onscroll = function() {myFunctionInd()};\n// } else if(document.URL.includes('ent-services.html')) {\n//     window.onscroll = function() {myFunctionEnt()};\n// }\n\nlet fsPage = document.querySelector('.first-page-section');\n\n\nif(fsPage.classList.contains('index-page-section')) {\n    window.onscroll = function() {myFunction()};\n} else if(fsPage.classList.contains('fs-ind-page')) {\n    window.onscroll = function() {myFunctionInd()};\n} else if(fsPage.classList.contains('fs-ent-page')) {\n    window.onscroll = function() {myFunctionEnt()};\n}\n\n\nlet line1 = document.getElementById('line1');\nlet line2 = document.getElementById('line2');\nlet line3 = document.getElementById('line3');\nlet line4 = document.getElementById('line4');\n\n\nlet line1Ind = document.getElementById('line1-ind');\nlet line2Ind =  document.getElementById('line2-ind');\nlet line3Ind = document.getElementById('line3-ind');\nlet line4Ind = document.getElementById('line4-ind');\n\n\nlet line1Ent = document.getElementById('line1-ent');\nlet line2Ent =  document.getElementById('line2-ent');\nlet line3Ent = document.getElementById('line3-ent');\nlet line4Ent = document.getElementById('line4-ent');\n\n\n\n\nfunction myFunction() {\n    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;\n    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;\n    let scrolled = (winScroll / height) * 100;\n    scrolled = scrolled.toFixed(1);\n    // console.log((scrolled))\n\n    line2.classList.remove('filled-marked');\n    line3.classList.remove('filled-marked');\n    line4.classList.remove('filled-marked');\n\n\n    if(scrolled < 28) {\n\n        line1.style.width = '50px';\n        line1.style.backgroundColor = '#DC0000';\n        line2.style.backgroundColor = 'white';\n        line2.style.width = '30px';\n        line3.style.backgroundColor = 'white';\n        line3.style.width = '30px';\n        line4.style.backgroundColor = 'white';\n        line4.style.width = '30px';\n    } else\n        if(scrolled > 28 && scrolled < 60) {\n\n\n            line1.style.width = '30px';\n            line1.style.backgroundColor = '#00297C';\n\n            line2.style.width = '50px';\n            line2.style.backgroundColor = '#DC0000';\n\n            line3.style.width = '30px';\n            line3.style.backgroundColor = '#00297C';\n\n            line4.style.width = '30px';\n            line4.style.backgroundColor = '#00297C';\n\n\n\n    } else if(scrolled > 60 && scrolled < 82) {\n\n            line1.style.width = '30px';\n            line1.style.backgroundColor = 'white';\n\n            line2.style.width = '30px';\n            line2.style.backgroundColor = 'white';\n\n            line3.style.width = '50px';\n            line3.style.backgroundColor = '#DC0000';\n\n            line4.style.width = '30px';\n            line4.style.backgroundColor = 'white';\n\n    } else if(scrolled > 82) {\n            line1.style.width = '30px';\n            line1.style.backgroundColor = '#00297C';\n\n            line2.style.width = '30px';\n            line2.style.backgroundColor = '#00297C';\n\n            line3.style.width = '30px';\n            line3.style.backgroundColor = '#00297C';\n\n            line4.style.width = '50px';\n            line4.style.backgroundColor = '#DC0000';\n    }\n\n\n}\n\n\n\nfunction myFunctionInd() {\n\n    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;\n    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;\n    let scrolled = (winScroll / height) * 100;\n    scrolled = scrolled.toFixed(1);\n    // console.log((scrolled))\n\n    line2Ind.classList.remove('filled-marked');\n    line3Ind.classList.remove('filled-marked');\n    line4Ind.classList.remove('filled-marked');\n\n\n    if(scrolled < 20) {\n\n        line1Ind.style.width = '50px';\n        line1Ind.style.backgroundColor = '#DC0000';\n\n        line2Ind.style.width = '30px';\n        line2Ind.style.backgroundColor = '#00297C';\n\n        line3Ind.style.width = '30px';\n        line3Ind.style.backgroundColor = '#00297C';\n\n        line4Ind.style.width = '30px';\n        line4Ind.style.backgroundColor = '#00297C';\n    } else\n    if(scrolled > 20 && scrolled < 73) {\n\n\n        line1Ind.style.width = '30px';\n        line1Ind.style.backgroundColor = '#00297C';\n\n        line2Ind.style.width = '50px';\n        line2Ind.style.backgroundColor = '#DC0000';\n\n        line3Ind.style.width = '30px';\n        line3Ind.style.backgroundColor = '#00297C';\n\n        line4Ind.style.width = '30px';\n        line4Ind.style.backgroundColor = '#00297C';\n\n\n\n    } else if(scrolled > 73 && scrolled < 90) {\n\n        line1Ind.style.width = '30px';\n        line1Ind.style.backgroundColor = 'white';\n\n        line2Ind.style.width = '30px';\n        line2Ind.style.backgroundColor = 'white';\n\n        line3Ind.style.width = '50px';\n        line3Ind.style.backgroundColor = '#DC0000';\n\n        line4Ind.style.width = '30px';\n        line4Ind.style.backgroundColor = 'white';\n\n    } else if(scrolled > 90) {\n        line1Ind.style.width = '30px';\n        line1Ind.style.backgroundColor = '#00297C';\n\n        line2Ind.style.width = '30px';\n        line2Ind.style.backgroundColor = '#00297C';\n\n        line3Ind.style.width = '30px';\n        line3Ind.style.backgroundColor = '#00297C';\n\n        line4Ind.style.width = '50px';\n        line4Ind.style.backgroundColor = '#DC0000';\n    }\n}\n\n\n\n\nfunction myFunctionEnt() {\n\n    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;\n    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;\n    let scrolled = (winScroll / height) * 100;\n    scrolled = scrolled.toFixed(1);\n    // console.log((scrolled))\n\n    line2Ent.classList.remove('filled-marked');\n    line3Ent.classList.remove('filled-marked');\n    line4Ent.classList.remove('filled-marked');\n\n\n\n    if(scrolled < 30) {\n\n\n        line1Ent.style.width = '50px';\n        line1Ent.style.backgroundColor = '#DC0000';\n\n        line2Ent.style.width = '30px';\n        line2Ent.style.backgroundColor = '#00297C';\n\n        line3Ent.style.width = '30px';\n        line3Ent.style.backgroundColor = '#00297C';\n\n        line4Ent.style.width = '30px';\n        line4Ent.style.backgroundColor = '#00297C';\n\n\n\n    } else if(scrolled > 30 && scrolled < 82) {\n\n        line1Ent.style.width = '30px';\n        line1Ent.style.backgroundColor = 'white';\n\n        line2Ent.style.width = '30px';\n        line2Ent.style.backgroundColor = 'white';\n\n        line3Ent.style.width = '50px';\n        line3Ent.style.backgroundColor = '#DC0000';\n\n        line4Ent.style.width = '30px';\n        line4Ent.style.backgroundColor = 'white';\n\n    } else if(scrolled > 82) {\n        line1Ent.style.width = '30px';\n        line1Ent.style.backgroundColor = '#00297C';\n\n        line2Ent.style.width = '30px';\n        line2Ent.style.backgroundColor = '#00297C';\n\n        line3Ent.style.width = '30px';\n        line3Ent.style.backgroundColor = '#00297C';\n\n        line4Ent.style.width = '50px';\n        line4Ent.style.backgroundColor = '#DC0000';\n    }\n}\n\n\n\n\n\n\ndocument.querySelector('.burger').addEventListener('click', function(){\n    document.querySelector('.burger span').classList.toggle('active');\n    document.querySelector('.nav-mobile').classList.toggle(\"animate\");\n})\n\n\nlet touchstartX = 0;\nlet touchstartY = 0;\nlet touchendX = 0;\nlet touchendY = 0;\n\nconst navMobile = document.getElementById('nav-mobile');\n\n\n\nnavMobile.addEventListener('touchstart', function(event) {\n\n    touchstartX = event.changedTouches[0].screenX;\n    touchstartY = event.changedTouches[0].screenY;\n\n\n}, false);\n\nnavMobile.addEventListener('touchmove', function(event) {\n    event.preventDefault()\n    touchstartX = event.changedTouches[0].screenX;\n    touchstartY = event.changedTouches[0].screenY;\n\n\n}, false);\n\nnavMobile.addEventListener('touchend', function(event) {\n    touchendX = event.changedTouches[0].screenX;\n    touchendY = event.changedTouches[0].screenY;\n\n    handleGesture(event);\n}, false);\n\nfunction handleGesture(event) {\n    if (touchendX <= touchstartX) {\n        console.log('Swiped left');\n    }\n\n    if (touchendX >= touchstartX) {\n        console.log('Swiped right');\n    }\n\n    if (touchendY <= touchstartY) {\n        console.log('Swiped up');\n        document.querySelector('.burger span').classList.remove('active');\n        document.querySelector('.nav-mobile').classList.remove(\"animate\");\n    }\n\n    if (touchendY >= touchstartY) {\n        console.log('Swiped down');\n    }\n\n    if (touchendY === touchstartY) {\n        if(event.preventDefault) {\n            console.log('Default prevented')\n        }\n        console.log('Tap');\n    }\n}\n\n\n\nlet acc = document.getElementsByClassName(\"accordion\");\nlet i;\n\nfor (i = 0; i < acc.length; i++) {\n    acc[i].addEventListener(\"click\", function() {\n        this.classList.toggle(\"active\");\n        let panel = this.nextElementSibling;\n        if (panel.style.maxHeight){\n            panel.style.maxHeight = null;\n        } else {\n            panel.style.maxHeight = panel.scrollHeight + \"px\";\n        }\n    });\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });