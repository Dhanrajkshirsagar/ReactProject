import React from "react";
import { Pie } from "react-chartjs-2";

class PieChartView extends React.Component {
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
          data: [
            this.props.covidData.TotalConfirmed,
            this.props.covidData.NewConfirmed,
            this.props.covidData.TotalDeaths,
            this.props.covidData.NewDeaths,
            this.props.covidData.TotalRecovered,
            this.props.covidData.NewRecovered,
          ],
          backgroundColor: this.props.backgroundColor,
          borderColor: this.props.borderColor,
          borderWidth: 1,
        },
      ],
    },
  };
  render() {
    return <div className="pie">
        <div className="pie" >
        <Pie
          data={this.state.chartData}
          width={500}
          height={210} 
          options={{ legend: {
            display: false,
        }}  
        }
        />
      </div>
    </div>;
  }
}

export default PieChartView;
