import React from "react";
import countries from "react-select-country-list";
import DateRange from "./DateRange";
import { Table } from "react-bootstrap";
import moment from "moment";


const options = countries().getData();

class DayWiseSummary extends React.Component {
  state = {
    DayWiseData: [],
    Loaded: false,
    startDate: "",
    endDate: "",
    FilterData: [],
  };

  searchCountry(key) {
    fetch("https://api.covid19api.com/dayone/country/" + key)
      .then((res) => res.json())
      .then((result) => {
          let startOfWeek = moment().startOf("isoWeek").toISOString();
          let endOfWeek = moment().endOf("isoWeek").toISOString();
         
          this.setState({
            DayWiseData: result,
            Loaded: true,
            startDate: startOfWeek,
            endDate: endOfWeek,
          });
      });
  }

  getDateOnchange = (dateObject) => {
    let startDate = moment(dateObject.startDate).toISOString();
    let endDate = moment(dateObject.endDate).toISOString();

    this.setState({
      startDate: startDate,
      endDate: endDate,
    });
  };

  render() {
    let { DayWiseData, Loaded } = this.state;
   
    let data = DayWiseData;
   
    let getFilterData = data.filter((filterData) => {
      return (
        filterData.Date >= this.state.startDate &&
        filterData.Date < this.state.endDate
      );
    });

    return (
      <div>
        <div>
          <label style={{ margin: "15px" }}> Country Name </label>
          <select
            data-size="20"
            class="selectpicker"
            style={{ marginTop: "15px" }}
            onChange={(event) => this.searchCountry(event.target.value)}
            placeholder="Search Country Name"
          >
            <option>Select Country Name </option>
            {options.map((option) => (
              <option>{option.label}</option>
            ))}
          </select>
         
          <span>
            <DateRange getDateOnchange={this.getDateOnchange} startDate={[this.state.startDate,this.state.endDate]} />
          </span>
        </div>
        <div>
          <Table style={{ margin: "25px" }} class="table">
            <thead>
              <th>Date</th>
              <th>Country Name</th>
              <th>Active</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deaths</th>
            </thead>
            <tbody>
              {!Loaded ? (
                <h3 class="Loader">Loading...</h3>
              ) : data.message === "Not Found" ? (
                <h3 class="Loader">There is no data</h3>
              ) : data.length === 0 ? (
                <h3 class="Loader">there is empty</h3>
              ) : (
                getFilterData.map((dayWise) => (
                  <tr>
                    <td>{dayWise.Date.replace("T00:00:00Z", "")}</td>
                    <td>{dayWise.Country}</td>
                    <td>{dayWise.Active}</td>
                    <td>{dayWise.Confirmed}</td>
                    <td>{dayWise.Recovered}</td>
                    <td>{dayWise.Deaths}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default DayWiseSummary;
