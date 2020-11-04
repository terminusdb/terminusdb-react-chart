"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ChartComponent = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _ChartElements = _interopRequireDefault(require("./chartComponents/ChartElements"));

var _recharts = require("recharts");

var _XAxisLabel = _interopRequireDefault(require("./chartComponents/XAxisLabel"));

var _SelectableLegendItem = _interopRequireDefault(require("./chartComponents/SelectableLegendItem"));

var _ZoomSelection = _interopRequireDefault(require("./chartComponents/ZoomSelection"));

var _reactSizeme = require("react-sizeme");

var _ChartPointLabel = _interopRequireDefault(require("./chartComponents/ChartPointLabel"));

var _LegendComponent = _interopRequireDefault(require("./chartComponents/LegendComponent"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ChartComponent = function ChartComponent(props) {
  var activeZoom = function activeZoom() {}; //zoomToggle(!zoomIsActive);


  var chartConf = props.config || {};
  var chartRules = chartConf.rules || [];
  var chartEleConf = chartConf.chart || {};

  var onWheel = function onWheel(e) {
    var obj = e;
  };

  var onMouseDown = function onMouseDown(e) {};

  var onMouseMove = function onMouseMove(e) {};

  var onMouseUp = function onMouseUp(e) {};

  var zoomBack = function zoomBack() {};

  var calculateGraph = function calculateGraph() {};

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
  var layout = chartEleConf.layout || "horizontal";
  var payload = [{
    color: "#ff0000",
    value: "MY TEST",
    type: "rect"
  }];

  var payloadFormatter = function payloadFormatter(value, name, props) {
    /*
    *to be review  ["formatted value", "formatted name"， ]
    */
    var label = [];

    if (name === "Promotion") {
      var mom = (0, _moment["default"])(value[0]);
      var startValue = mom.format("YYYY-MM-DD ddd");
      var mom01 = (0, _moment["default"])(value[1]);
      var endValue = mom01.format("YYYY-MM-DD ddd");
      label = ["".concat(startValue, " - ").concat(endValue), name];
    } else {
      label = [value, name];
    }

    console.log(label);
    return label;
  };

  var axisLabelFormatter = function axisLabelFormatter(axisLabel) {
    var mom = (0, _moment["default"])(axisLabel);
    return mom.format("YYYY-MM-DD ddd");
  };

  return _react["default"].createElement(_reactstrap.Container, {
    style: {
      height: "500px"
    },
    fluid: true,
    className: "border"
  }, _react["default"].createElement("h4", null, title), _react["default"].createElement("div", {
    className: "chartContainer"
  }, _react["default"].createElement("div", {
    className: "chartTools"
  }, _react["default"].createElement("div", {
    className: "chartToolItem",
    style: zoomCurrentStyle,
    onClick: activeZoom
  }, _react["default"].createElement("span", {
    className: "fa fa-search-plus",
    style: {
      cursor: 'pointer'
    },
    onClick: activeZoom
  })), _react["default"].createElement("div", {
    className: "chartToolItem",
    style: {
      fontSize: "18px"
    },
    onClick: zoomBack
  }, _react["default"].createElement("span", {
    className: "fa fa-undo",
    style: {
      cursor: 'pointer'
    }
  }))), _react["default"].createElement(_reactSizeme.SizeMe, {
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
      onMouseDown: onMouseDown,
      onMouseUp: onMouseUp,
      onMouseMove: onMouseMove,
      margin: margin
    }, (0, _ChartElements["default"])(chartRules, dataProvider), _react["default"].createElement(_recharts.CartesianGrid, {
      strokeDasharray: "1 3"
    }), _react["default"].createElement(_recharts.Tooltip, {
      formatter: payloadFormatter,
      labelFormatter: axisLabelFormatter
    })), _react["default"].createElement("div", {
      className: "zoomDiv",
      style: zoomStyle,
      height: "500px",
      onMouseUp: onMouseUp
    }));
  }))); //
}; // <Tooltip  formatter={payloadFormatter}/>//


exports.ChartComponent = ChartComponent;
var _default = ChartComponent;
exports["default"] = _default;