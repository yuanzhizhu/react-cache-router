'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactRouterDom = require('react-router-dom');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

if (window.history && window.history.scrollRestoration && window.history.scrollRestoration === "auto") {
  window.history.scrollRestoration = "manual";
}

var deepCopy = function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
};

var CacheRoute = /*#__PURE__*/function (_Component) {
  _inherits(CacheRoute, _Component);

  function CacheRoute() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CacheRoute);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CacheRoute)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "visible", false);

    _defineProperty(_assertThisInitialized(_this), "matchCount", 0);

    _defineProperty(_assertThisInitialized(_this), "scrollTop", 0);

    _defineProperty(_assertThisInitialized(_this), "$pageElement", null);

    _defineProperty(_assertThisInitialized(_this), "pageRef", React__default.createRef());

    _defineProperty(_assertThisInitialized(_this), "lastProps", {});

    _defineProperty(_assertThisInitialized(_this), "lastState", {});

    _defineProperty(_assertThisInitialized(_this), "shouldComponentUpdate", function () {
      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "getPageVisible", function () {
      return _this.visible;
    });

    _defineProperty(_assertThisInitialized(_this), "$CacheRouteInjectPageElement", function ($instance) {
      _this.$pageElement = $instance;
    });

    _defineProperty(_assertThisInitialized(_this), "getBodyScrollTop", function () {
      var el = document.scrollingElement || document.documentElement;
      return el.scrollTop;
    });

    _defineProperty(_assertThisInitialized(_this), "restoreScrollInfoIfShowPage", function (lastVisible) {
      if (_this.visible && !lastVisible) {
        setTimeout(function () {
          var el = document.scrollingElement || document.documentElement;
          el.scrollTo(0, _this.scrollTop);
          var $pageElement = _this.$pageElement || _this.pageRef.current;
          /**
           * componentDidShow在componentDidUpdate后触发
           * 当触发componentDidShow的时候，滚动条位置已经恢复
           * 第一次进入页面，不会执行componentDidShould
           */

          if (_this.matchCount > 1 && $pageElement && $pageElement.componentDidShow) {
            $pageElement.componentDidShow(_this.lastProps, _this.lastState);
          }
        }, 0);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "storeScrollInfoIfLeavePage", function (lastVisible) {
      if (!_this.visible && lastVisible) {
        _this.scrollTop = _this.getBodyScrollTop();
        var $pageElement = _this.$pageElement || _this.pageRef.current;

        if ($pageElement && $pageElement.componentWillHide) {
          _this.lastProps = deepCopy($pageElement.props);
          _this.lastState = deepCopy($pageElement.state);
          $pageElement.componentWillHide();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var _this$props = _this.props,
          Component = _this$props.component,
          restProps = _objectWithoutProperties(_this$props, ["component"]);

      return React__default.createElement(reactRouterDom.Route, _extends({}, restProps, {
        children: function children(_ref) {
          var match = _ref.match,
              restProps = _objectWithoutProperties(_ref, ["match"]);

          var lastVisible = _this.visible;

          if (match) {
            _this.visible = true;
            _this.matchCount++;
          } else {
            _this.visible = false;
          }

          _this.storeScrollInfoIfLeavePage(lastVisible);

          _this.restoreScrollInfoIfShowPage(lastVisible);

          return _this.matchCount > 0 ? React__default.createElement("div", {
            style: {
              display: _this.visible ? "block" : "none"
            }
          }, React__default.createElement(Component, _extends({}, restProps, {
            getPageVisible: _this.getPageVisible,
            $CacheRouteInjectPageElement: _this.$CacheRouteInjectPageElement,
            ref: _this.pageRef
          }))) : null;
        }
      }));
    });

    return _this;
  }

  return CacheRoute;
}(React.Component);

module.exports = CacheRoute;
