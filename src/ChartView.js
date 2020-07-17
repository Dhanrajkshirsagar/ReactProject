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
          label:this.props.label,
          data: [
            this.props.covidData.TotalConfirmed,
            this.props.covidData.NewConfirmed,
            this.props.covidData.TotalDeaths,
            this.props.covidData.NewDeaths,
            this.props.covidData.TotalRecovered,
            this.props.covidData.NewRecovered,
          ],
          backgroundColor: [
            "rgba(255,99,132,0.6)",
            "rgba(54,162,235,0.6)",
            "rgba(255,206,86,0.6)",
            "rgba(75,192,192,0.6)",
            "rgba(153,102,255,0.6)",
            "rgba(255,159,64,0.6)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
  };
  render() {
   
    return (
      <div className="pie" style={{display:"flex"}}  >
        <Pie
          data={this.state.chartData}
          width={100}
          height={20}
          options={{
            title: {
              display: true,
              text: this.props.text,
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
