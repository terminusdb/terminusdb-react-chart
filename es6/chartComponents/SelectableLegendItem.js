"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _recharts = require("recharts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//import {clickChartLegendLabel} from '../../actions/graphActions'
var SelectableLegendItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectableLegendItem, _React$Component);

  function SelectableLegendItem() {
    _classCallCheck(this, SelectableLegendItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(SelectableLegendItem).apply(this, arguments));
  }

  _createClass(SelectableLegendItem, [{
    key: "render",
    value: function render() {
      var _ref = this.props || {
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

      if (this.props.selectObject && this.props.selectObject === true) {
        currentStyle = {
          fontWeight: 800
        };
        opacity = 1; //currentStyle = { color: '#ff8000'}
      }

      return _react["default"].createElement("span", {
        className: "legend-item",
        onClick: this.props.onClick,
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
      }, mylabel));
    }
  }]);

  return SelectableLegendItem;
}(_react["default"].Component);
/*const mapStateToProps = (state , ownProps) => {
  const { chartLegendLabelClicked } = state
  const chartObj=chartLegendLabelClicked[ownProps.chartName] || {};
  let selectObject=true;
  if(chartObj[ownProps.dataKey]!==undefined){
  		selectObject=chartObj[ownProps.dataKey];
  }

  return {selectObject};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return( {onClick:() => {
  	        dispatch(clickChartLegendLabel(ownProps.dataKey,ownProps.chartName));
          }
      }
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectableLegendItem)*/


exports["default"] = SelectableLegendItem;