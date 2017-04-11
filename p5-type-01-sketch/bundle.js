/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _draw = __webpack_require__(1);

var _draw2 = _interopRequireDefault(_draw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sketch = function sketch(p) {
	var img;
	var imgPix = new Set();
	var canvas;
	var gui;
	var typeWidth;
	var typeHeight;
	var introControls = {
		background: '#7022ff',
		fill1: '#FFF422',
		circSize: 20,
		circSpacing: 7
	};

	p.preload = function () {
		img = p.loadImage("assets/hello.png");
	};

	p.setup = function () {
		canvas = p.createCanvas(1024, 768);
		canvas.position(0, 0);
		img.loadPixels();
		console.log(img.pixels);
		for (var j = 0; j < img.height; j++) {
			for (var i = 0; i < img.width; i++) {
				var c = img.get(i, j);
				imgPix.add({ x: i, y: j, r: c[0], g: c[1], b: c[2], a: c[3] });
			}
		}
	};

	p.draw = function () {
		typeWidth = introControls.circSpacing * img.width;
		typeHeight = introControls.circSpacing * img.height;
		p.background(introControls.background);
		//p.image(img, 0, 0);
		p.translate(canvas.width / 2 - typeWidth / 2, canvas.height / 2 - typeHeight / 2);
		p.fill(introControls.fill1);
		if (introControls.circSize > 35) {
			p.noStroke();
		} else {
			p.stroke(0);
		}
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = imgPix[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var pixel = _step.value;

				var alpha = pixel.a;
				if (alpha > 0) {
					var size = introControls.circSize;
					var spacing = introControls.circSpacing;
					p.ellipse(pixel.x * spacing, pixel.y * spacing, alpha / size, alpha / size);
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	};

	window.onload = function () {
		gui = new dat.GUI();
		gui.addColor(introControls, 'background');
		gui.addColor(introControls, 'fill1');
		gui.add(introControls, 'circSize', 5, 60);
		gui.add(introControls, 'circSpacing', 5, 20);
	};
};
new p5(sketch);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
(function webpackMissingModule() { throw new Error("Cannot find module \"compile\""); }());


/***/ })
/******/ ]);