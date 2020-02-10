"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _XAxisLabel = _interopRequireDefault(require("./XAxisLabel"));

var _ChartPointLabel = _interopRequireDefault(require("./ChartPointLabel"));

var _recharts = require("recharts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ChartElements = function ChartElements(graphConf, dataProvider) {
  var getVariable = function getVariable(variables) {
    var value = null;

    if (variables.length > 0) {
      value = variables[0];
    }

    return value;
  };

  var getStyle = function getStyle(item) {
    var style = {
      "strokeWidth": 2,
      "stroke": "#ff8000"
    };
    if (item.strokeWidth) style['strokeWidth'] = item.strokeWidth;
    if (item.stroke) style['stroke'] = item.stroke;
    if (item.fill) style['fill'] = item.fill;
    return style;
  };

  var filterTicks = function filterTicks(dataProvider, xAxisName) {
    var ticks = []; //const xAxis=this.graphConf.XAxis && this.graphConf.XAxis.dataKey || 'timestamp';

    dataProvider.forEach(function (data, index) {
      //if(index===0 && index===(dataProvider.length-1)){
      //	ticks.push(data.timestamp);
      //}else if(data.date_i && data.date_i.endsWith('01')){
      ticks.push(data[xAxisName]); //}
    });
    return ticks;
  };

  return graphConf.map(function (item, index) {
    var _extends2;

    var pattern = item.pattern || {};
    var rule = item.rule || {};
    var dataKey = getVariable(pattern['variables']);
    var chartType = pattern.scope || 'line';
    var name = rule.label || dataKey;
    var type = rule.type || "monotone";
    var style = getStyle(rule);
    var dot = rule.dot || false;
    var dotR = rule.dotR || 15;
    var activeDot = {
      r: dotR
    };

    switch (chartType) {
      case 'XAxis':
        var xAxisType = rule.type ? rule.type : 'category';
        var labelRotate = rule.labelRotate ? rule.labelRotate : null;
        var ticks = filterTicks(dataProvider, dataKey);
        var padding = rule.padding ? rule.padding : {
          left: 0,
          right: 0
        };
        return _react["default"].createElement(_recharts.XAxis, {
          dataKey: dataKey,
          type: xAxisType,
          padding: padding,
          tick: _react["default"].createElement(_XAxisLabel["default"], {
            rotate: labelRotate
          }),
          ticks: ticks,
          domain: ['dataMin - 1', 'dataMax  + 1']
        });

      case 'Bar':
        var barSize = rule.barSize || 20;
        return dataKey && _react["default"].createElement(_recharts.Bar, _extends({
          dataKey: dataKey
        }, style, {
          barSize: barSize
        }));

      case 'Area':
        return dataKey && _react["default"].createElement(_recharts.Area, _extends({
          name: name,
          type: type,
          dataKey: dataKey
        }, style));

      case 'Point':
        return dataKey && _react["default"].createElement(_recharts.Line, {
          name: name,
          type: type,
          dataKey: dataKey,
          stroke: "none",
          dot: _objectSpread({}, style),
          activeDot: activeDot
        });

      case 'Line':
      default:
        return dataKey && _react["default"].createElement(_recharts.Line, _extends((_extends2 = {
          label: _react["default"].createElement(_ChartPointLabel["default"], null),
          type: "basisClosed",
          name: name
        }, _defineProperty(_extends2, "type", type), _defineProperty(_extends2, "dataKey", dataKey), _extends2), style, {
          dot: dot
        }));
    }
  });
};

var _default = ChartElements;
exports["default"] = _default;