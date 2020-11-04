"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _XAxisLabel = _interopRequireDefault(require("./XAxisLabel"));

var _moment = _interopRequireDefault(require("moment"));

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

    if (variables && variables.length > 0) {
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
    if (item.fillOpacity) style['fillOpacity'] = item.fillOpacity; //if(item.opacity) style['opacity']=item.opacity;

    return style;
  };

  var filterTicks = function filterTicks(dataProvider, xAxisName) {
    var ticks = []; //{};

    dataProvider.forEach(function (data, index) {
      ticks.push(data[xAxisName]); //ticks[data[xAxisName]]=data[xAxisName];
    });
    return ticks; //Object.keys(ticks)
  };

  var payloadFormatter = function payloadFormatter(value, name, props) {
    return value;
  };

  var getAxisProps = function getAxisProps(rule, dataKey) {
    var AxisProps = {};
    if (rule.type) AxisProps['type'] = rule.type;
    if (rule.padding) AxisProps['padding'] = rule.padding;
    if (rule.type === "number" && rule.domain === undefined) AxisProps['domain'] = ['dataMin - 1', 'dataMax  + 1'];
    if (rule.domain) AxisProps['domain'] = rule.domain;
    if (dataKey) AxisProps['dataKey'] = dataKey;
    if (rule.type === "category") AxisProps['ticks'] = filterTicks(dataProvider, dataKey);
    return AxisProps;
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
    var customColors = rule.customColors;
    var colorEntry = rule.colorEntry;
    var activeDot = {
      r: dotR
    };

    switch (chartType) {
      case 'Tooltip':
        return _react["default"].createElement(_recharts.Tooltip, {
          formatter: payloadFormatter
        });

      case 'YAxis':
        var labelEl = rule.label ? {
          label: _react["default"].createElement("text", {
            id: "mylabel",
            x: "0",
            y: "0",
            dx: "-150",
            dy: "20",
            offset: "5",
            transform: "rotate(-90)"
          }, rule.label)
        } : {};
        var yAxisProps = getAxisProps(rule, dataKey);
        return _react["default"].createElement(_recharts.YAxis, _extends({}, labelEl, {
          allowDuplicatedCategory: true
        }, yAxisProps, {
          tick: _react["default"].createElement(_XAxisLabel["default"], {
            yOffset: 0,
            rotate: rule.labelRotate,
            labelDateOutput: rule.labelDateOutput
          })
        }));

      case 'XAxis':
        /*const formatterLabel=(value)=>{
        	 if(rule.labelDateOutput){
              const mom=moment(value)
              value=mom.format(rule.labelDateOutput)
            }
            return value; formatter={formatterLabel} tickFormatter={formatterLabel}
        }*/
        //
        var xAxisProps = getAxisProps(rule, dataKey);
        return _react["default"].createElement(_recharts.XAxis, _extends({}, xAxisProps, {
          tick: _react["default"].createElement(_XAxisLabel["default"], {
            rotate: rule.labelRotate,
            labelDateOutput: rule.labelDateOutput
          })
        }));

      case 'Bar':
        var stackId = rule.stackId ? {
          stackId: stackId
        } : {};
        var barSize = rule.barSize || 2; //barSize={barSize}

        return dataKey && _react["default"].createElement(_recharts.Bar, _extends({
          name: name,
          dataKey: dataKey
        }, style, {
          barSize: barSize
        }), customColors && colorEntry && dataProvider.map(function (entry, index) {
          var entryValue = entry[colorEntry];
          var currentColor = customColors[entryValue] ? customColors[entryValue] : '#ffff00';
          return _react["default"].createElement(_recharts.Cell, {
            stroke: currentColor,
            fill: currentColor
          });
        }));

      case 'Legend':
        var payload = rule.payload ? {
          payload: rule.payload
        } : {};
        return _react["default"].createElement(_recharts.Legend, _extends({
          verticalAlign: "top"
        }, payload, {
          height: 50
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