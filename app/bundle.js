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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(1);

var _app2 = _interopRequireDefault(_app);

var _router = __webpack_require__(2);

var _router2 = _interopRequireDefault(_router);

var _api = __webpack_require__(3);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _app2.default('#app');
var api = new _api2.default();

app.addComponent({
  name: 'home',
  model: {
    title: "MtG Discovery",
    subtitle: "Il tool rapido, veloce ed efficace per cercare i pptq più vicini a te"
  },
  view: function view(model) {
    return '\n    <div class=\'home-content\'><div class=\'logo\'></div><h1> ' + model.title + ' </h1><h3> ' + model.subtitle + '</h3></div><input type="text" /><button>Search</button>\n    ';
  },
  controller: function controller(model, view) {}
});

app.addComponent({
  name: 'about',
  model: {
    title: "About",
    subtitles: ["Perchè", "Come", "Chi"]
  },
  view: function view(model) {
    return '<h1>' + model.title + '</h1>';
  },
  controller: function controller(model) {
    api.getPPTQ().then(function (result) {
      console.log(result);
    });
  }
});

var router = new _router2.default(app);
router.addRoute('about', '^#/about$');

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App(selector) {
    _classCallCheck(this, App);

    this.appElement = document.querySelector(selector);
    this.componentsByName = {};
  }

  _createClass(App, [{
    key: "addComponent",
    value: function addComponent(component) {

      this.componentsByName[component.name] = component;
    }
  }, {
    key: "showComponent",
    value: function showComponent(name) {
      this.currentComponent = this.componentsByName[name];

      if (this.currentComponent) {
        this.currentComponent.controller(this.currentComponent.model, this.currentComponent.view);
      }
      this.updateView();
    }
  }, {
    key: "updateView",
    value: function updateView() {
      this.appElement.innerHTML = this.currentComponent.view(this.currentComponent.model);
    }
  }]);

  return App;
}();

exports.default = App;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function () {
  function Router(app) {
    _classCallCheck(this, Router);

    this.app = app;
    this.routes = [];
    this.hashChange = this.hashChange.bind(this);

    window.addEventListener('hashchange', this.hashChange);
    window.addEventListener('DOMContentLoaded', this.hashChange);
  }

  _createClass(Router, [{
    key: 'addRoute',
    value: function addRoute(name, url) {
      this.routes.push({
        name: name,
        url: url
      });
    }
  }, {
    key: 'hashChange',
    value: function hashChange() {
      var hash = window.location.hash;

      var route = this.routes.filter(function (route) {
        return hash.match(new RegExp(route.url));
      })[0];

      if (route) {
        this.app.showComponent(route.name);
      } else if (hash === "") {
        this.app.showComponent('home');
      } else {}
    }
  }]);

  return Router;
}();

exports.default = Router;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var API = function () {
  function API() {
    _classCallCheck(this, API);

    this.API_URL = "http://dinopascale.altervista.org/testApi/search_pptq.php";
  }

  _createClass(API, [{
    key: "getPPTQ",
    value: function getPPTQ() {
      return fetch(this.API_URL).then(function (res) {
        return res.json();
      });
    }
  }]);

  return API;
}();

exports.default = API;

/***/ })
/******/ ]);