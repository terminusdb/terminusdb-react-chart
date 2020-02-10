"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ChartPointLabel = function ChartPointLabel(props) {
  var x = props.x,
      y = props.y,
      stroke = props.stroke,
      value = props.value,
      type = props.type;
  var valueLabel = value;

  if (Number(value)) {
    valueLabel = Number(value).toFixed(2);
  }

  return _react["default"].createElement("text", {
    x: x,
    y: y,
    dy: -4,
    fill: stroke,
    fontSize: 10,
    textAnchor: "middle"
  }, valueLabel);
};

var _default = ChartPointLabel;
exports["default"] = _default;