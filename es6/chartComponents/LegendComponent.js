"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SelectableLegendItem = _interopRequireDefault(require("./SelectableLegendItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var LegendComponent = function LegendComponent(props) {
  var graphConf = props.chartObj || [];
  return _react["default"].createElement("div", {
    className: "customized-legend"
  }, graphConf.map(function (entry, index) {
    return _react["default"].createElement(_SelectableLegendItem["default"], _extends({
      key: 'legend_' + index
    }, entry, {
      chartName: "LINE_CHART_OBJ"
    }));
  }));
};

var _default = LegendComponent;
exports["default"] = _default;