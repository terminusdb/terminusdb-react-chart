"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SelectableLegendItem = _interopRequireDefault(require("./SelectableLegendItem"));

var _recharts = require("recharts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LegendComponent = function LegendComponent(props) {
  var graphConf = props.chartObj || [];
  var payload = props.payload;
  return _react["default"].createElement("div", {
    className: "customized-legend"
  }, payload.map(function (entry, index) {
    var color = entry.color;
    return _react["default"].createElement("span", {
      className: "legend-item"
    }, _react["default"].createElement(_recharts.Surface, {
      width: 10,
      height: 10
    }, _react["default"].createElement(_recharts.Symbols, {
      cx: 5,
      cy: 5,
      type: "circle",
      size: 100,
      fill: color
    })), _react["default"].createElement("span", {
      style: {
        marginLeft: '5px'
      }
    }, entry.value));
  }));
};

var _default = LegendComponent;
exports["default"] = _default;