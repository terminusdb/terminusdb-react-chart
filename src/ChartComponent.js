import React , {useState} from 'react';
import ChartElements from "./chartComponents/ChartElements";

import  {ResponsiveContainer, Rectangle,Surface,BarChart,
	     Symbols,ComposedChart, Line, Area, XAxis, YAxis,
	     CartesianGrid, Tooltip, Legend, Bar} from  "recharts";


import { SizeMe } from 'react-sizeme';

import CustomLegendElement from './chartComponents/CustomLegendElement'
import moment from 'moment'

export const ChartComponent = (props)=>{
<<<<<<< HEAD

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


=======
	const [visibilityObj,changeVisibility] = useState({})
	const chartConf=props.config || {};

	const chartRules=chartConf.rules || [];
  	
	const chartEleConf=chartConf.chart || {};
	
	function setVisibility(chartID){
		const tmpStatus = {...visibilityObj} 
		if(tmpStatus [chartID]===undefined)tmpStatus[chartID]= false
		else tmpStatus[chartID]= !visibilityObj[chartID]
		changeVisibility(tmpStatus)
	}
>>>>>>> 14073b4a625e571955afd08875e134d078d7fd80
	let dataProvider = props.dataProvider || [];

	const zoomStyle = {};

	let zoomCurrentStyle = {fontSize:"18px"};

    const margin = chartEleConf.margin || {top: 10, right: 20, left: 40, bottom:100};

<<<<<<< HEAD
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
=======
	const title = chartEleConf.title || ""
	const description = chartEleConf.description || ""
    const layout= chartEleConf.layout || "horizontal" 

	const payload=[{color:"#ff0000",value:"MY TEST",type: "rect"}]
	
	return (<div style={{height:"500px"}} className="shadow-sm card border-light">
		<div className="w-100 card-header border-0 bg-white justify-content-between d-flex mt-2">
			<div>
			<h4 className="card-title">{title}</h4>
			<p className="card-category text-secondary">{description}</p>
			</div>
			<div className="d-xl-flex flex-wrap justify-content-end bg-red"> 
			   <CustomLegendElement chartRules={chartRules} visibilityObj={visibilityObj} onClick={setVisibility}/>
>>>>>>> 14073b4a625e571955afd08875e134d078d7fd80
			</div>
		</div>
	  	<div className="card-body">
		   <SizeMe monitorHeight={true}>{({ size }) =>
			<div className="zoomDivContainer" >	  
			  <ComposedChart layout={layout} height={size.height} width={size.width}				    			
				  data={dataProvider}
				  margin={margin}> 
				 {ChartElements(chartRules,dataProvider,visibilityObj,setVisibility)}				       
				 <CartesianGrid strokeDasharray="1 3" vertical={false}/>				    
			   <Tooltip content={<CustomTooltip/>} contentStyle={{background:"#E3EBF6",borderRadius:"0.5em"}}/>			  
			</ComposedChart>	   
		  <div className="zoomDiv" style={zoomStyle} height="500px"/>
		  </div>}
	  </SizeMe>	
	  </div>
	  </div>)
}
<<<<<<< HEAD
// <Tooltip  formatter={payloadFormatter}/>//
=======
>>>>>>> 14073b4a625e571955afd08875e134d078d7fd80
export default ChartComponent;
