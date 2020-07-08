import React from "react";

class CovidCards extends React.Component {
  render() {
    var covidData = this.props.covidData;

    return (
      <div class="flex-container">
        <div class="card" style={{ margin: "25px", width: "500px" }}>
          <div style={{ fontWeight: "bold" }} class="card-header">
            Global Covid Cases-- Todays)
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Total Confirmed : {covidData.Global.TotalConfirmed}
              <span style={{ margin: "25px" }}>
                New Confirmed : {covidData.Global.NewConfirmed}
              </span>
            </li>
            <li class="list-group-item">
              Total Deaths : {covidData.Global.TotalDeaths}
              <span style={{ marginLeft: "35px" }}>
                New Deaths : {covidData.Global.NewDeaths}
              </span>
            </li>
            <li class="list-group-item">
              Total Recovered : {covidData.Global.TotalRecovered}
              <span style={{ margin: "25px" }}>
                New Recovered :{covidData.Global.NewRecovered}
              </span>
            </li>
          </ul>
        </div>
        <div class="card" style={{ margin: "25px", width: "500px" }}>
          <div style={{ fontWeight: "bold" }} class="card-header">
            India Covid Cases-- Todays)
          </div>
          {covidData.Countries.map(
            (india) =>
              india.Country === "India" && (
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    Total Confirmed : {india.TotalConfirmed}
                    <span style={{ margin: "25px" }}>
                      New Confirmed : {india.NewConfirmed}
                    </span>
                  </li>
                  <li class="list-group-item">
                    Total Deaths : {india.TotalDeaths}
                    <span style={{ marginLeft: "35px" }}>
                      New Deaths : {india.NewDeaths}
                    </span>
                  </li>
                  <li class="list-group-item">
                    Total Recovered : {india.TotalRecovered}
                    <span style={{ margin: "25px" }}>
                      New Recovered :{india.NewRecovered}
                    </span>
                  </li>
                </ul>
              )
          )}
        </div>
      </div>
    );
  }
}

export default CovidCards;
