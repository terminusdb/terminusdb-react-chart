import React, { Component } from 'react';
import {ChartComponent} from '@terminusdb/terminus-react-chart';
import TerminusClient from '@terminusdb/terminus-client'

const App= (props) =>{

	const woqlChart= TerminusClient.View.chart();

	woqlChart.title("MY NEW CHART").margin({top: 10, right: 20, left: 40, bottom:200})
	woqlChart.line('v:Quantity').label("Quantity").stroke("#FF9800").dot(true)
	woqlChart.xAxis('v:Date').labelRotate(-50).label("Date")

	console.log(JSON.stringify(woqlChart.json()));

	/*
	{
   "chart":{
      "title":"MY NEW CHART"
   },
   "rules":[
      {
         "pattern":{
            "scope":"Line",
            "variables":[
               "v:Quantity"
            ]
         },
         "rule":{
            "label":"Quantity",
            "stroke":"#FF9800",
            "dot":true
         }
      },
      {
         "pattern":{
            "scope":"XAxis",
            "variables":[
               "v:Date"
            ]
         },
         "rule":{
            "labelRotate":-50
         }
      }
   ]
}*/

	


	const config=woqlChart.json()

    const dataP=[
				      {"v:Date": 'Page A', "v:Quantity": 4000, pv: 2400, amt: 2400},
				      {"v:Date": 'Page B', "v:Quantity": 3000, pv: 1398, amt: 2210},
				      {"v:Date": 'Page C', "v:Quantity": 2000, pv: 9800, amt: 2290},
				      {"v:Date": 'Page D', "v:Quantity": 2780, pv: 3908, amt: 2000},
				      {"v:Date": 'Page E', "v:Quantity": 1890, pv: 4800, amt: 2181},
				      {"v:Date": 'Page F', "v:Quantity": 2390, pv: 3800, amt: 2500},
				      {"v:Date": 'Page G', "v:Quantity": 3490, pv: 4300, amt: 2100}
				]

	return (<div>
				MY TEST
				<ChartComponent config={config} dataProvider={dataP}/>
			</div>)

}

export default App;