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
//import About from './components/about'


var homePage = new _home2.default('home');

app.addComponent(homePage);

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
    key: "mountComponent",
    value: function mountComponent(name) {
      this.currentComponent = this.componentsByName[name];
      this.updateGlobalView();
    }
  }, {
    key: "updateGlobalView",
    value: function updateGlobalView() {
      var _this = this;

      var mounting = new Promise(function (resolve, reject) {
        _this.appElement.innerHTML = _this.currentComponent.render();
        resolve();
      }).then(function () {
        _this.currentComponent.addReceptor();
      });
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
        this.params = new RegExp(route.url).exec(hash);
        this.app.mountComponent(route.name);
      } else if (hash === "") {
        this.app.mountComponent('home');
      } else {
        return '<h3>404 Not Found</h3>';
      }
    }
  }]);

  return Router;
}();

exports.default = Router;

///^#\/search\/lat=?([-]?[0-9]*\.?[0-9]+).+?lon=?([-]?[0-9]*\.?[0-9]+)/ REGEX PER SEARCH PAGE

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _cell = __webpack_require__(4);

var _cell2 = _interopRequireDefault(_cell);

var _searchingForm = __webpack_require__(5);

var _searchingForm2 = _interopRequireDefault(_searchingForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Cell) {
  _inherits(Home, _Cell);

  function Home(name) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, name));

    _this.listOrganelle = [];
    var form = new _searchingForm2.default('position');
    _this.listOrganelle.push(form);
    return _this;
  }

  _createClass(Home, [{
    key: 'addReceptor',
    value: function addReceptor() {
      _get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), 'active', this).call(this, this.listOrganelle);
    }
  }, {
    key: 'render',
    value: function render() {
      return '\n      <h1 class="title">Mtg Discovery</h1>\n      <h3 class="subtitle">Trovare i pptq non \xE8 mai stato cos\xEC facile</h3>\n      ' + _get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), 'express', this).call(this, this.listOrganelle);
    }
  }]);

  return Home;
}(_cell2.default);

exports.default = Home;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cell = function () {
  function Cell(name) {
    _classCallCheck(this, Cell);

    this.name = name;
  }

  _createClass(Cell, [{
    key: "active",
    value: function active(listOrganelle) {
      Array.prototype.forEach.call(listOrganelle, function (el) {
        el.controller();
      });
    }
  }, {
    key: "express",
    value: function express(listOrganelle) {
      var structure = "";
      Array.prototype.forEach.call(listOrganelle, function (el) {
        structure += el.view();
      });
      return structure;
    }
  }]);

  return Cell;
}();

exports.default = Cell;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _api = __webpack_require__(6);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var searchingForm = function () {
  function searchingForm(name) {
    _classCallCheck(this, searchingForm);

    this.name = name;
    //this.model = this.model.bind(this);
    this._handleKeyUp = this._handleKeyUp.bind(this);
    this.model(name);
  }

  _createClass(searchingForm, [{
    key: "model",
    value: function model(n) {
      var _this = this;

      var id = n,
          autocompleteList = "",
          cache = {},
          inputValue = "";
      Object.defineProperties(this.model, {
        'id': {
          get: function get() {
            return id;
          }
        },
        'autocompleteList': {
          get: function get() {
            console.log('get dalla view');
            return autocompleteList;
          },
          set: function set(val) {
            autocompleteList += val;
            console.log('settata autocompleteList', autocompleteList);
            _this.updateView();
          }
        },
        'cache': {
          get: function get() {
            return cache;
          },
          set: function set(val) {
            cache = val;
          }
        },
        'inputValue': {
          get: function get() {
            return inputValue;
          },
          set: function set(val) {
            inputValue = val;
          }
        }
      });
    }
  }, {
    key: "_handleKeyUp",
    value: function _handleKeyUp(e) {
      var _this2 = this;

      /*QUI INSERIREMO LA CHIAMATA ALL'AUTOCOMPLETE*/
      var input = e.target.value;
      //this.model.inputValue = input;
      /*let results = [];
      let docFrag = document.createDocumentFragment();
      const listAutoCompleteDOM = document.getElementById('comuni');
      while (listAutoCompleteDOM.firstChild) {
          listAutoCompleteDOM.removeChild(listAutoCompleteDOM.firstChild);
      }*/
      if (input.length >= 3) {
        _api2.default.autocomplete(input).then(function (data) {
          var c = 0;
          Array.prototype.forEach.call(data, function (el) {
            var elToHtml = '<option value="' + el.Nome + '" />';
            _this2.model.autocompleteList = elToHtml;
            c += 1;
            /*const value = el.Nome+" ( "+el.Provincia+" )";
            results.push(value);
            const option = document.createElement('option')
            option.value = value
            docFrag.appendChild(option)*/
          });
          //listAutoCompleteDOM.appendChild(docFrag)
          //this.model.inputValue = input;
          //this.model.autoCompleteListCache[input] = results;
        });
      }
    }
  }, {
    key: "_handleClick",
    value: function _handleClick() {
      console.log('ciao');
      /*QUI INSERIREMO LA VALIDAZIONE E LA CHIAMATA A GOOGLE MAPS E IL CAMBIO DI ROUTE*/
    }
  }, {
    key: "controller",
    value: function controller() {
      var self = this;
      var listeners = document.getElementsByClassName(this.model.name);
      Array.prototype.forEach.call(listeners, function (el) {
        var typeEvent = el.dataset.event;
        typeEvent === "keyup" ? el.addEventListener(typeEvent, self._handleKeyUp) : el.addEventListener(typeEvent, self._handleClick);
      });
    }
  }, {
    key: "updateView",
    value: function updateView() {
      console.log('updatiamo la view');
      var notinit = 'not';
      var DOMElement = document.getElementById(this.name);
      DOMElement.innerHTML = this.view(notinit);
    }
  }, {
    key: "view",
    value: function view(i) {
      console.log(i);
      if (i == null) {
        return "\n      <div id=" + this.name + ">\n        <input class=\"searchBox " + this.model.name + "\" data-event=\"keyup\" type=\"text\" list=\"comuni\" value=\"" + this.model.inputValue + "\" />\n        <button\n          data-event=\"click\"\n          class=\"searchBtn " + this.model.name + "\"\n        >Search\n        </button>\n        <datalist id=\"comuni\">\n        " + this.model.autocompleteList + "\n        </datalist>\n      </div>\n    ";
      } else {
        return "\n      <input class=\"searchBox " + this.model.name + "\" data-event=\"keyup\" type=\"text\" list=\"comuni\" value=\"" + this.model.inputValue + "\" />\n      <button\n        data-event=\"click\"\n        class=\"searchBtn " + this.model.name + "\"\n      >Search\n      </button>\n      <datalist id=\"comuni\">\n      </datalist>";
      }
    }
  }]);

  return searchingForm;
}();

exports.default = searchingForm;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _const = __webpack_require__(7);

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_ROOT = exports.API_ROOT = 'http://dinopascale.altervista.org/testApi/';

/***/ })
/******/ ]);