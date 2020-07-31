import React from "react";
import { Pie } from "react-chartjs-2";


class ChartView extends React.Component {

  state = {
    chartData: {
      labels: [
        "Confirmed ",
        "New Confirmed",
        "Deaths ",
        "New Deaths",
        "Recovered ",
        "New Recovered ",
      ],
      datasets: [
        {
          lable:this.props.lable,
          backgroundColor: this.props.backgroundColor,
          borderColor: this.props.borderColor,
          borderWidth: 1,
        },
      ],
    },
  };
  render() {
   
    return (
      <div className="pie" >
        <Pie
          data={this.state.chartData}
          width={100}
          height={20}
          options={{
            title: {
              display: true,
              legend:{display:true,position:'bottom',align:"center"},
              labels: {
                fontSize: 14,
              }
            },
          }}
        />
      </div>
    );
  }
}

export default ChartView;
