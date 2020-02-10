import React from 'react';
import SelectableLegendItem from './SelectableLegendItem';

const LegendComponent = (props) => {
	const graphConf=props.chartObj || [];
	
	return (<div className="customized-legend">
        	{graphConf.map((entry,index) => {
          		return <SelectableLegendItem key={'legend_'+index} {...entry} chartName="LINE_CHART_OBJ"/>
           	})}
       		</div>
	)
}

export default LegendComponent;
