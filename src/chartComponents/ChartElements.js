import React from 'react';
import XAxisLabel from './XAxisLabel'

import ChartPointLabel from './ChartPointLabel'
import  {ResponsiveContainer, Rectangle,Surface,
	     Symbols,ComposedChart, Line, Area, XAxis, YAxis,
	     CartesianGrid, Tooltip, Legend, Bar} from  "recharts";

 const ChartElements= (graphConf,dataProvider) =>{
 	
		const getVariable=(variables)=>{
			let value=null;
			if(variables.length>0){
				value=variables[0];
			}
			return value
		}

		const getStyle=(item)=>{
			const style={"strokeWidth":2, "stroke":"#ff8000"}
			if(item.strokeWidth) style['strokeWidth']=item.strokeWidth;
			if(item.stroke) style['stroke']=item.stroke;
			if(item.fill) style['fill']=item.fill;

			return style;
		}

		const filterTicks=(dataProvider,xAxisName)=>{
	  	 	let ticks=[];
		 	//const xAxis=this.graphConf.XAxis && this.graphConf.XAxis.dataKey || 'timestamp';

	  	 	dataProvider.forEach((data,index)=>{
	  	 	//if(index===0 && index===(dataProvider.length-1)){
	  	 	//	ticks.push(data.timestamp);
	  	 	//}else if(data.date_i && data.date_i.endsWith('01')){
	  	 			ticks.push(data[xAxisName]);
	  	 	//}
	  	 	})

	  	 	return ticks;
  		}

  		

  		return graphConf.map((item,index)=>{
  			    const pattern =item.pattern || {}
  			    const rule=item.rule || {}
  				const dataKey = getVariable(pattern['variables']);

  				const chartType = pattern.scope || 'line';
				const name=  rule.label || dataKey;
				const type= rule.type || "monotone"
				const style = getStyle(rule);
				const dot  = rule.dot || false;
				const dotR = rule.dotR || 15

				const activeDot ={r : dotR}


				switch(chartType){
					case 'XAxis':
						const xAxisType=rule.type ? rule.type : 'category'
    					const labelRotate=rule.labelRotate ? rule.labelRotate : null
    					const ticks=filterTicks(dataProvider,dataKey);
    					const padding=rule.padding ? rule.padding : { left: 0, right: 0 }
    					
						return <XAxis dataKey={dataKey} type={xAxisType} padding={padding}
				       		  	tick={<XAxisLabel rotate={labelRotate}/>} 
				       		  	ticks={ticks}
				       		  	domain={['dataMin - 1', 'dataMax  + 1']}/>
					case 'Bar':
						const barSize = rule.barSize || 20
						return dataKey &&  <Bar dataKey={dataKey} {...style} barSize={barSize} />
					case 'Area':
						return dataKey && <Area name={name} type={type} dataKey={dataKey} {...style} />
					case 'Point':
						return dataKey && <Line name={name} type={type} dataKey={dataKey}  stroke="none" dot={{...style}} activeDot={activeDot}/>
					case 'Line':
					default:
						return dataKey && <Line  label={<ChartPointLabel/>} type="basisClosed" name={name} type={type} dataKey={dataKey} {...style} dot={dot}/>
				}
	    })


 }
 export default ChartElements;