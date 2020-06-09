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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_GeneratorParticle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/GeneratorParticle */ "./modules/GeneratorParticle.js");


class SnowFlakesApp {
  constructor() {
    this.renderCycle = null;
    this.renderFramerate = 60;
    this.canvas = document.querySelector('.canvas');
    this.ctx = this.canvas.getContext('2d');
    this.generatorParticle = new _modules_GeneratorParticle__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx);
  }

  render() {
    this.renderCycle = setInterval(() => {
      this.ctx.fillStyle = '#eee';
      this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      this.generatorParticle.generation();
    }, this.renderFramerate);
  }

  renderStop() {
    clearInterval(this.renderCycle);
  }

  init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.render();
  }

}

let snowFlakes = new SnowFlakesApp();
snowFlakes.init();

/***/ }),

/***/ "./modules/GeneratorParticle.js":
/*!**************************************!*\
  !*** ./modules/GeneratorParticle.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Particle */ "./modules/Particle.js");


class GeneratorParticle {
  constructor(ctx) {
    this.particleList = [];
    this.ctx = ctx;
    this.s = 10;
    this.toggleRock = false;
  }

  generation() {
    if (this.particleList.length < 100) {
      this.particleList.push(new _Particle__WEBPACK_IMPORTED_MODULE_0__["default"](this.randomNumber(0, document.documentElement.clientWidth), this.randomNumber(0, window.innerHeight / 3), 'black'));
    }

    this.particleList.map(item => {
      this.ctx.fillStyle = item.color;
      this.ctx.fillRect(item.x, item.y, item.width, item.height);
      item.y += this.randomNumber(5, 10);
      if (item.y >= window.innerHeight) item.y = 0;

      if (item.x < item.maxXpos && !this.toggleRock) {
        item.x += 3;
        if (item.x + 3 === item.maxXpos) this.toggleRock = !this.toggleRock;
      } else if (item.x > item.maxXpos && this.toggleRock) {
        item.x -= 3;
        if (item.x === item.minXpos) this.toggleRock = !this.toggleRock;
      }
    });
  }

  randomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GeneratorParticle);

/***/ }),

/***/ "./modules/Particle.js":
/*!*****************************!*\
  !*** ./modules/Particle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.width = 15;
    this.height = 15;
    this.maxXpos = this.x + 10;
    this.minXpos = this.x;
    this.color = color;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Particle);

/***/ })

/******/ });
//# sourceMappingURL=app.js.map