import React , {useState} from 'react';
import { Container} from "reactstrap";
import ChartElements from "./chartComponents/ChartElements";

import  {ResponsiveContainer, Rectangle,Surface,BarChart,
	     Symbols,ComposedChart, Line, Area, XAxis, YAxis,
	     CartesianGrid, Tooltip, Legend, Bar} from  "recharts";

import XAxisLabel from './chartComponents/XAxisLabel';
import SelectableLegendItem from './chartComponents/SelectableLegendItem';

import ZoomSelection from './chartComponents/ZoomSelection';

import { SizeMe } from 'react-sizeme';
import ChartPointLabel from './chartComponents/ChartPointLabel';

import LegendComponent from './chartComponents/LegendComponent'
import moment from 'moment'

export const ChartComponent = (props)=>{

	const activeZoom = () => {}; //zoomToggle(!zoomIsActive);

	const chartConf=props.config || {};

	const chartRules=chartConf.rules || [];

 	const chartEleConf=chartConf.chart || {};

	const onWheel=(e)=>{
  		const obj=e;

  	}

	const onMouseDown=(e)=>{

	}

	const onMouseMove = (e)=>{
	  }

  	const onMouseUp = (e)=>{

  	};

    const zoomBack=()=>{
    };

    const calculateGraph=()=>{
    };


	let dataProvider = props.dataProvider || [];

	const zoomStyle = {};

	let zoomCurrentStyle = {fontSize:"18px"};

    const margin = chartEleConf.margin || {top: 10, right: 20, left: 40, bottom:100};

    const title = chartEleConf.title || ""
    const layout= chartEleConf.layout || "horizontal"

    const payload=[{color:"#ff0000",value:"MY TEST",type: "rect"}]

    const payloadFormatter = (value,name,props)=>{
    		/*
    		*to be review  ["formatted value", "formatted name"， ]
    		*/
    		let label=[]
    		if(name==="Promotion"){
    		 	const mom=moment(value[0])
			 	const startValue=mom.format("YYYY-MM-DD ddd")
			 	const mom01=moment(value[1])
			 	const endValue=mom01.format("YYYY-MM-DD ddd")
			 	label=[`${startValue} - ${endValue}`,name]
    		}else{
    			label=[value,name]
    		}
  	 		return label
   	};

   	/*const axisLabelFormatter = (axisLabel)=>{
   		const mom=moment(axisLabel)
   		return mom.format("YYYY-MM-DD ddd")
   	}*/



	return(<Container style={{height:"500px"}} fluid className="border">
          	<h4 >{title}</h4>
			<div className="chartContainer">
			  <div className="chartTools">
			      <div className="chartToolItem" style={zoomCurrentStyle} onClick={activeZoom}>
					<span className="fa fa-search-plus"  style={{cursor:'pointer'}} onClick={activeZoom}></span>
				  </div>
				  <div className="chartToolItem" style={{fontSize:"18px"}} onClick={zoomBack}>
					<span className="fa fa-undo"  style={{cursor:'pointer'}}></span>
				  </div>
			  </div>

			 	<SizeMe monitorHeight={true}>{({ size }) =>
			  	<div className="zoomDivContainer">

					<ComposedChart layout={layout}	height={size.height} width={size.width}
						data={dataProvider}
						onMouseDown={onMouseDown}
						onMouseUp={onMouseUp}
						onMouseMove={onMouseMove}
			            margin={margin}>

				      	{ChartElements(chartRules,dataProvider)}
				       <CartesianGrid strokeDasharray="1 3"/>
				      <Tooltip  formatter={payloadFormatter}/>

			      </ComposedChart>

			    <div className="zoomDiv" style={zoomStyle} height="500px" onMouseUp={onMouseUp}/>
				</div>}
			</SizeMe>
			</div>
			</Container>
			)//
}
// <Tooltip  formatter={payloadFormatter}/>//
export default ChartComponent;
