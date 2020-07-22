import React from "react";
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class DayWiseBarChart extends React.Component {

  render() {

    let ActiveCase=this.props.Confirmed.map((data)=>{
      return {x:new Date(data[1]),y:data[0]}
    })
 
    const options = {
      animationEnabled: true,
      title: {
        text: "Day Wise Covid Cases",
      },
      axisX: {
				valueFormatString: "DD MMM"
			},
			axisY: {
				title: "Covid Cases",
				includeZero: false
			},
      data: [{
				yValueFormatString: "#,###",
				xValueFormatString: "DD MMM",
				type: "spline",
				dataPoints: ActiveCase,
			}]
    };

    return (
      <div>
        <CanvasJSChart
        options = {options}
        />
      </div>
    );
  }
}

export default DayWiseBarChart;