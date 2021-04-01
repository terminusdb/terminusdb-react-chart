"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ChartComponent = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ChartElements = _interopRequireDefault(require("./chartComponents/ChartElements"));

var _CustomTooltip = require("./chartComponents/CustomTooltip");

var _recharts = require("recharts");

var _reactSizeme = require("react-sizeme");

var _CustomLegendElement = _interopRequireDefault(require("./chartComponents/CustomLegendElement"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ChartComponent = function ChartComponent(props) {
  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      visibilityObj = _useState2[0],
      changeVisibility = _useState2[1];

  var chartConf = props.config || {};
  var chartRules = chartConf.rules || [];
  var chartEleConf = chartConf.chart || {};

  function setVisibility(chartID) {
    var tmpStatus = _objectSpread({}, visibilityObj);

    if (tmpStatus[chartID] === undefined) tmpStatus[chartID] = false;else tmpStatus[chartID] = !visibilityObj[chartID];
    changeVisibility(tmpStatus);
  }

  var dataProvider = props.dataProvider || [];
  var zoomStyle = {};
  var zoomCurrentStyle = {
    fontSize: "18px"
  };
  var margin = chartEleConf.margin || {
    top: 10,
    right: 20,
    left: 40,
    bottom: 100
  };
  var title = chartEleConf.title || "";
  var description = chartEleConf.description || "";
  var layout = chartEleConf.layout || "horizontal";
  var payload = [{
    color: "#ff0000",
    value: "MY TEST",
    type: "rect"
  }];
  return _react["default"].createElement("div", {
    style: {
      height: "500px"
    },
    className: "shadow-sm card border-light"
  }, _react["default"].createElement("div", {
    className: "w-100 card-header border-0 bg-white justify-content-between d-flex mt-2"
  }, _react["default"].createElement("div", null, _react["default"].createElement("h4", {
    className: "card-title"
  }, title), _react["default"].createElement("p", {
    className: "card-category text-secondary"
  }, description)), _react["default"].createElement("div", {
    className: "d-xl-flex flex-wrap justify-content-end bg-red"
  }, _react["default"].createElement(_CustomLegendElement["default"], {
    chartRules: chartRules,
    visibilityObj: visibilityObj,
    onClick: setVisibility
  }))), _react["default"].createElement("div", {
    className: "card-body"
  }, _react["default"].createElement(_reactSizeme.SizeMe, {
    monitorHeight: true
  }, function (_ref) {
    var size = _ref.size;
    return _react["default"].createElement("div", {
      className: "zoomDivContainer"
    }, _react["default"].createElement(_recharts.ComposedChart, {
      layout: layout,
      height: size.height,
      width: size.width,
      data: dataProvider,
      margin: margin
    }, (0, _ChartElements["default"])(chartRules, dataProvider, visibilityObj, setVisibility), _react["default"].createElement(_recharts.CartesianGrid, {
      strokeDasharray: "1 3",
      vertical: false
    }), _react["default"].createElement(_recharts.Tooltip, {
      content: _react["default"].createElement(_CustomTooltip.CustomTooltip, null),
      contentStyle: {
        background: "#E3EBF6",
        borderRadius: "0.5em"
      }
    })), _react["default"].createElement("div", {
      className: "zoomDiv",
      style: zoomStyle,
      height: "500px"
    }));
  })));
};

exports.ChartComponent = ChartComponent;
var _default = ChartComponent;
exports["default"] = _default;