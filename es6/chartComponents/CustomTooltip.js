"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomTooltip = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _DefaultTooltipContent = _interopRequireDefault(require("recharts/lib/component/DefaultTooltipContent"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var CustomTooltip = function CustomTooltip(props) {
  //we check if the tooltip is active
  if (!props.active) {
    return null;
  } // so we create a new payload with the name and value fields set to what we want

  /*format the tooltip payload*/


  var newPayload01 = function newPayload01() {
    var payloadFormatted = [];
    props.payload.forEach(function (item) {
      var name = item.name;
      var value = item.value;
      /*
      *to be review  ["formatted value", "formatted name"， ]
      */

      if (name === "Promotion") {
        var mom = (0, _moment["default"])(value[0]);
        var startValue = mom.format("YYYY-MM-DD ddd");
        var mom01 = (0, _moment["default"])(value[1]);
        var endValue = mom01.format("YYYY-MM-DD ddd");
        value = "".concat(startValue, " - ").concat(endValue);
      } //label=[value,name]


      if (item.payload[name]) {
        var diffTooltip = item.payload[name];

        if (_typeof(diffTooltip) === 'object') {
          var keysObj = Object.keys(diffTooltip);
          var tmpArr = [];
          keysObj.sort();
          keysObj.forEach(function (key) {
            var clonedObj = _objectSpread({}, item);

            clonedObj.value = diffTooltip[key];
            clonedObj.name = key;
            payloadFormatted.push(clonedObj);
          });
        } else {
          var clonedObj = _objectSpread({}, item);

          clonedObj.name = diffTooltip;
        }
      } else {
        var _clonedObj = _objectSpread({}, item);

        _clonedObj.name = name;
        _clonedObj.value = value;
        payloadFormatted.push(_clonedObj);
      }
    });
    return payloadFormatted;
  };

  var newPayload = newPayload01();
  /*
  * add as a rule
  */

  var axisLabelFormatter = function axisLabelFormatter(axisLabel) {
    var mom = (0, _moment["default"])(axisLabel);
    return mom.format("YYYY-MM-DD ddd");
  }; // we render the default, but with our overridden payload


  return /*#__PURE__*/_react["default"].createElement(_DefaultTooltipContent["default"], _extends({
    labelFormatter: axisLabelFormatter
  }, props, {
    payload: newPayload
  }));
};

exports.CustomTooltip = CustomTooltip;