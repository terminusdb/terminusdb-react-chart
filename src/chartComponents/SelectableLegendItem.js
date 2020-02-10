import React from 'react';
//import {CLICK_CHART_LABEL} from '../../constants/ActionTypes';

//import { connect } from 'react-redux'; 

import  {Surface, Symbols} from  "recharts";

//import {clickChartLegendLabel} from '../../actions/graphActions'

export default class SelectableLegendItem extends React.Component  {

	render(){
		
		const { dataKey, style, label } = this.props || {dataKey:'No Key', style:{}, label:'No Label'};
    const {fill, stroke} = style;

    const color = fill || stroke;

		const mylabel = label || dataKey;
    let currentStyle = {}
    let opacity = 1// 0.5;
    if (this.props.selectObject && this.props.selectObject === true) {
      currentStyle = { fontWeight: 800}
      opacity=1;
      //currentStyle = { color: '#ff8000'}
    }
      return (           
          <span className="legend-item" onClick={this.props.onClick} style={currentStyle}>
            <Surface width={10} height={10}>
              <Symbols cx={5} cy={5} type="circle" size={100} fill={color} opacity={opacity} />
            </Surface>
            <span style={{marginLeft:'5px'}}>{mylabel}</span>
          </span>
      )
    }
}

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



