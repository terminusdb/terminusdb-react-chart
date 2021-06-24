"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _recharts = require("recharts");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CustomLegendElement = function CustomLegendElement(props) {
  var chartRules = props.chartRules || [];
  var legendDataProvider = chartRules.find(function (element) {
    return element.pattern && element.pattern.scope === 'Legend';
  });
  var rule = legendDataProvider.rule;
  if (rule.type === "default") return '';
  var payload = rule.payload ? rule.payload : [];
  var layout = rule.layout || "horizontal";
  var align = rule.align || "center";
  var visibilityObj = props.visibilityObj || {};

  var onClick = function onClick(evt) {
    //console.log("commit name",evt.target.name)
    props.onClick(evt.currentTarget.id);
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "recharts-default-legend"
  }, payload.map(function (entry, index) {
    var color = entry.color;
    var opacity = visibilityObj[entry.id] === false ? 0.4 : 1;
    return /*#__PURE__*/_react["default"].createElement("span", {
      key: "index_".concat(index),
      onClick: onClick,
      className: "recharts-legend-item legend-item-0 mr-4 cursor-pointer",
      id: entry.id
    }, /*#__PURE__*/_react["default"].createElement(_recharts.Surface, {
      width: 20,
      height: 20
    }, /*#__PURE__*/_react["default"].createElement(_recharts.Symbols, {
      cx: 10,
      cy: 10,
      type: "circle",
      size: 120,
      fill: color,
      opacity: opacity
    })), /*#__PURE__*/_react["default"].createElement("span", null, entry.value));
  }));
};

var _default = CustomLegendElement;
exports["default"] = _default;