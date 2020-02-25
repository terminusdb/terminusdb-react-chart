import React from 'react';
import SelectableLegendItem from './SelectableLegendItem';
import  {Surface, Symbols} from  "recharts";
const LegendComponent = (props) => {
	const graphConf=props.chartObj || [];
	const {payload} = props

	return (<div className="customized-legend">
        	{payload.map((entry,index) => {
        		const color =  entry.color ;
          		return <span className="legend-item">
			            <Surface width={10} height={10}>
			              <Symbols cx={5} cy={5} type="circle" size={100} fill={color} />
			            </Surface>
			            <span style={{marginLeft:'5px'}}>{entry.value}</span>
			          </span>
			          })}
			       	</div>
	)
}

export default LegendComponent;
