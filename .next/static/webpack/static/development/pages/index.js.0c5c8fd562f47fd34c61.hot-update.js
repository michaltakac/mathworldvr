webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/next/node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/next/node_modules/prop-types/index.js":
false,

/***/ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/object-assign/index.js":
false,

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _src_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/lib */ "./src/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aframe_physics_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aframe-physics-system */ "./node_modules/aframe-physics-system/index.js");
/* harmony import */ var aframe_physics_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aframe_physics_system__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Projects\\mathworldvr\\pages\\index.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Libraries used by MathworldVR (Three.js, out custom A-Frame components, etc.)




var VRScene =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VRScene, _React$Component);

  function VRScene() {
    _classCallCheck(this, VRScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(VRScene).apply(this, arguments));
  }

  _createClass(VRScene, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // A-frame Components by community
      __webpack_require__(/*! aframe */ "./node_modules/aframe/dist/aframe-master.js");

      __webpack_require__(/*! aframe-teleport-controls */ "./node_modules/aframe-teleport-controls/index.js");

      __webpack_require__(/*! super-hands */ "./node_modules/super-hands/index.js"); // Initialize aframe-physics-system


      aframe_physics_system__WEBPACK_IMPORTED_MODULE_2___default.a.registerAll();
    }
  }, {
    key: "render",
    value: function render() {
      // Using a-scene because aframe-react's Scene component
      // is rendered last (it's how React works), thus physics
      // is not applied before components are rendered, so they fall...
      // https://github.com/facebook/react/issues/5737#issuecomment-167352763
      // TODO: use React.Suspense
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a-scene", {
        physics: "gravity: 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, this.props.children);
    }
  }]);

  return VRScene;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (VRScene);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.0c5c8fd562f47fd34c61.hot-update.js.map