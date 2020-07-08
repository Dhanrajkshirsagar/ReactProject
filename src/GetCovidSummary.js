import React from "react";
import { table } from "react-bootstrap";
import ReactExport from "react-html-table-to-excel";


class GetCovidSummary extends React.Component {
  state = { filterStr: "" };

  render() {
    var elements = this.props.covidData.Countries.filter((Countries) => {
      return (
        Countries.Country.toLowerCase().indexOf(
          this.state.filterStr.toLocaleLowerCase()
        ) !== -1
      );
    });

    return (
      <div>
        <div style={{ margin: "5px" }}>
        <div><ReactExport table="Covid" filename="Covid19 report" sheet="sheet1" ButtonText="Export"/></div>
        </div>
        <table style={{ margin: "15px" }} class="table" id="Covid">
          <thead class="thead-light">
            <tr>
              <th scope="col">Sr.No</th>
              <th scope="col">Country</th>
              <th scope="col">New Confirmed</th>
              <th scope="col">Total Confirmed</th>
              <th scope="col">New Deaths</th>
              <th scope="col">Total Deaths</th>
              <th scope="col">New Recovered</th>
              <th scope="col">Total Recovered</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input
                  type="text"
                  placeholder="Search Country"
                  value={this.state.filterStr}
                  onChange={(e) => this.setState({ filterStr: e.target.value })}
                ></input>
              </td>
            </tr>
            {elements.map((countryData, index) => {
              return (
                <tr>
                  <th>{index + 1}</th>
                  <td>{countryData.Country}</td>
                  <td>{countryData.NewConfirmed}</td>
                  <td>{countryData.TotalConfirmed}</td>
                  <td>{countryData.NewDeaths}</td>
                  <td>{countryData.TotalDeaths}</td>
                  <td>{countryData.NewRecovered}</td>
                  <td>{countryData.TotalRecovered}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
       
      </div>
    );
  }
}

export default GetCovidSummary;
