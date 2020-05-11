"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _recharts = require("recharts");

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SelectableLegendItem = function SelectableLegendItem(props) {
  var _ref = _this.props || {
    dataKey: 'No Key',
    style: {},
    label: 'No Label'
  },
      dataKey = _ref.dataKey,
      style = _ref.style,
      label = _ref.label;

  var fill = style.fill,
      stroke = style.stroke;
  var color = fill || stroke;
  var mylabel = label || dataKey;
  var currentStyle = {};
  var opacity = 1; // 0.5;

  if (_this.props.selectObject && _this.props.selectObject === true) {
    currentStyle = {
      fontWeight: 800
    };
    opacity = 1;
  }

  return _react["default"].createElement("span", {
    className: "legend-item",
    onClick: _this.props.onClick,
    style: currentStyle
  }, _react["default"].createElement(_recharts.Surface, {
    width: 10,
    height: 10
  }, _react["default"].createElement(_recharts.Symbols, {
    cx: 5,
    cy: 5,
    type: "circle",
    size: 100,
    fill: color,
    opacity: opacity
  })), _react["default"].createElement("span", {
    style: {
      marginLeft: '5px'
    }
  }, mylabel, "mmmmm"));
};

var _default = SelectableLegendItem;
exports["default"] = _default;