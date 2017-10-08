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

var _home = __webpack_require__(3);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _app2.default('#app');
var router = new _router2.default(app);

var home = new _home2.default('home');

app.addComponent(home);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var APP = function () {
  function APP(selector) {
    _classCallCheck(this, APP);

    this.appElement = document.querySelector(selector);
    this.componentsByName = {};
  }

  _createClass(APP, [{
    key: "addComponent",
    value: function addComponent(component) {
      this.componentsByName[component.name] = component;
      //component.model = this.proxify(component.model);
    }
  }, {
    key: "showComponent",
    value: function showComponent(name) {
      this.currentComponent = this.componentsByName[name];

      if (this.currentComponent) {
        //this.currentComponent.controller(this.currentComponent.model);
      }
      this.updateView();
    }
  }, {
    key: "updateView",
    value: function updateView() {
      var _this = this;

      new Promise(function (resolve, reject) {
        console.log(_this.currentComponent.name);
        _this.appElement.innerHTML = _this.currentComponent.render();
        resolve();
      }).then(function () {
        _this.currentComponent.MVC();
        //this.currentComponent.view(this.currentComponent.model, this.currentComponent.controller);
      });
    }

    /*proxify(model) {
      const self = this;
      return new Proxy(model, {
        set(target,property,value) {
         //console.log(target);
         console.log('Changing', property, 'from', target[property], 'to', value);
          target[property] = value;
          self.updateView();
          return true;
        }
      })
    }*/

  }]);

  return APP;
}();
//UPDATE VIEW SARA PRIMA CANCELLARE CHILD E POI METTERLI


exports.default = APP;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ROUTER = function () {
  function ROUTER(app) {
    _classCallCheck(this, ROUTER);

    this.app = app;
    this.routes = [];
    this.hashChange = this.hashChange.bind(this);

    window.addEventListener('hashchange', this.hashChange);
    window.addEventListener('DOMContentLoaded', this.hashChange);
  }

  _createClass(ROUTER, [{
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
        this.params = new RegExp(route.url).exec(hash);
        this.app.showComponent(route.name);
      } else if (hash === "") {
        this.app.showComponent('home');
      } else {
        this.app.showComponent();
      }
    }
  }]);

  return ROUTER;
}();

exports.default = ROUTER;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _model = __webpack_require__(4);

var _model2 = _interopRequireDefault(_model);

var _view = __webpack_require__(6);

var _view2 = _interopRequireDefault(_view);

var _controller = __webpack_require__(7);

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeComponent = function () {
  function HomeComponent(name) {
    _classCallCheck(this, HomeComponent);

    this.name = name;
    this.model = "";
    this.view = "";
    this.controller = "";
  }

  _createClass(HomeComponent, [{
    key: 'MVC',
    value: function MVC() {
      this.model = new _model2.default();
      this.view = new _view2.default(this.model);
      this.controller = new _controller2.default(this.model, this.view);
    }
  }, {
    key: 'render',
    value: function render() {
      return '\n      <h1>Mtg Discovery</h1>\n      <h3>The best of the best</h3>\n      <input id="sFld" list="comuni" type="text">\n      <button id="sBtn">Search</button>\n      <datalist id="comuni">\n      </datalist>';
    }
  }]);

  return HomeComponent;
}();

exports.default = HomeComponent;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _subject = __webpack_require__(5);

var _subject2 = _interopRequireDefault(_subject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function modelHome() {
  var subject = (0, _subject2.default)();
  var autocompleteList = [];
  var cache = {};
  return {
    getList: function getList() {
      return autocompleteList;
    },
    getCache: function getCache() {
      return cache;
    },
    add: function add(index, data) {
      Object.assign(cache, _defineProperty({}, index, data));
      Array.prototype.forEach.call(data, function (el) {
        autocompleteList.push(el);
      });
      subject.notifyObservers();
    },
    remove: function remove() {
      autocompleteList.length = 0;
      subject.notifyObservers();
    },
    isCached: function isCached(input) {
      if (input in cache) {
        return true;
      } else {
        return false;
      }
    },
    getFromCache: function getFromCache(input) {
      var a = cache[input];
      Array.prototype.forEach.call(a, function (el) {
        autocompleteList.push(el);
      });
      subject.notifyObservers();
    },
    register: function register() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      subject.removeAll();
      args.forEach(function (el) {
        subject.add(el);
      });
    }
  };
}

exports.default = modelHome;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function Subject() {
  var observers = [];
  return {
    add: function add(item) {
      observers.push(item);
    },
    removeAll: function removeAll() {
      observers.length = 0;
    },
    notifyObservers: function notifyObservers() {
      observers.forEach(function (el) {
        el.notify();
      });
    }
  };
}

exports.default = Subject;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function viewHome(model) {
  var DOM = {
    input: document.getElementById('sFld'),
    datalist: document.getElementById('comuni')
  };
  function updateDatalist() {
    var optionList = model.getList();
    return '\n      ' + optionList.map(function (el) {
      return '<option value="' + el.Nome + '">';
    }).join('') + '\n    ';
  }
  return {
    getDOM: function getDOM() {
      return DOM;
    },
    notify: function notify() {
      var html = updateDatalist();
      DOM.datalist.innerHTML = html;
    }
  };
}

exports.default = viewHome;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = __webpack_require__(8);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function controllerHome(model, view) {
  var DOM = view.getDOM();
  model.register(view);
  //defineEventHandlers
  function handleKeyup(ev) {
    var input = ev.target.value;
    if (input.length <= 2) {
      model.remove();
    }
    if (input.length > 2) {
      model.remove();
      var chached = model.isCached(input);
      if (!chached) {
        console.log('cache ', model.getCache());
        _api2.default.autocomplete(input).then(function (data) {
          console.log('data ', data.length);
          data.length ? model.add(input, data) : false;
        });
      } else {
        model.getFromCache(input);
      }
    }
  }
  //addEventHandlers
  DOM.input.addEventListener('keyup', handleKeyup);
}

exports.default = controllerHome;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _const = __webpack_require__(9);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var API = function () {
  function API() {
    _classCallCheck(this, API);
  }

  _createClass(API, null, [{
    key: 'getPPTQ',
    value: function getPPTQ() {
      var API_SEARCH_PPTQ = _const.API_ROOT + 'search_pptq.php';
      return fetch(API_SEARCH_PPTQ).then(function (res) {
        return res.json();
      });
    }
  }, {
    key: 'autocomplete',
    value: function autocomplete(str) {
      var API_AUTOCOMPLETE = _const.API_ROOT + 'autocomplete.php';
      var i = str;
      return fetch(API_AUTOCOMPLETE + '?i=' + i).then(function (res) {
        return res.json();
      });
    }
  }]);

  return API;
}();

exports.default = API;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_ROOT = exports.API_ROOT = 'http://dinopascale.altervista.org/testApi/';

/***/ })
/******/ ]);