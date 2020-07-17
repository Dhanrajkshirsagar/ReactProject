import React from "react";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class DayWiseBarChart extends React.Component {
  render() {
    const options = {
      title: {
        text: "Day Wise Covid Summary",
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { label: "Apple", y: 10 },
            { label: "Orange", y: 15 },
            { label: "Banana", y: 25 },
            { label: "Mango", y: 30 },
            { label: "Grape", y: 28 },
          ],
        },
      ],
    };

    return (
      <div>
        <CanvasJSReact>
        options = {options}
        </CanvasJSReact>
      </div>
    );
  }
}

export default DayWiseBarChart;