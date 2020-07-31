import React from "react";
import CanvasJSReact from "./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class DayWiseBarChart extends React.Component {
  render() {
    let ConfirmedCases = this.props.Confirmed.map((data) => {
      return { x: new Date(data[1]), y: data[0] };
    });

    const options = {
      animationEnabled: true,
      title: {
        text: "Day Wise Covid Cases",
      },
      axisY: {
        title: this.props.title,
        includeZero: false,
      },
      axisX: {
        valueFormatString: "DD MMM",
      },
      width: 520,
      height: 350,
      toolTip: {
        shared: true,
      },
      data: [
        {
          type: "spline",
          name: this.props.name,
          showInLegend: true,
          yValueFormatString: "#,###",
          xValueFormatString: "DD MMM",
          dataPoints: ConfirmedCases,
        },
        // {
        //   type: "spline",
        //   name: "Active",
        //   showInLegend: true,
        //   yValueFormatString: "#,###",
        //   xValueFormatString: "DD MMM",
        //   dataPoints: ActiveCases
        // }
      ],
    };

    return (
      <div style={{backgroundColor:"blue"}}>
        <CanvasJSChart
          options={options}
        />
      </div>
    );
  }
}

export default DayWiseBarChart;
