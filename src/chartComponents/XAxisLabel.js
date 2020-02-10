import React from 'react';
//import {timeConverter} from '../../utils/utils'


export default class XAxisLabel extends React.Component  {
  

  
  render () {
    const {x, y, stroke, payload, rotate} = this.props;

    //const label=timeConverter(payload.value,'simple');
    const label=payload.value;

    const transform = rotate ? {transform:`rotate(${rotate})`} : {};
		
   	return (
    	<g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" {...transform} >{label}</text>
      </g>
    );
  }
}