import React from "react";
import { Table } from "react-bootstrap";
import ExportData from "./ExportData";

class StateSummarryTable extends React.Component {
  state = { stateName: "" };
  render() {
    var StateData = this.props.StateData;

    var filterStateData = StateData.filter((data) => {
      return (
        data.state.toLowerCase().indexOf(this.state.stateName.toLowerCase()) !==
        -1
      );
    });

    return (
      <div>
        <ExportData filterStateData={filterStateData}/>
        <div style={{ margin: "10px" }} class="table" id="stateSummary">
          <Table className="center">
            <thead>
              <th>Sr.No</th>
              <th>State Name</th>
              <th>Total Active</th>
              <th>Total Recovered</th>
              <th>Total Deaths</th>
              <th>Total Confirmed</th>
            </thead>
            <tbody>
              <tr>
                <th></th>
                <th>
                  <input
                    placeholder="Search State"
                    type="text"
                    onChange={(e) => {
                      this.setState({ stateName: e.target.value });
                    }}
                  ></input>
                </th>
              </tr>
              {filterStateData.length === 0 ? (
                <h3>No Data found</h3>
              ) : (
                filterStateData.map((stateDataObj, index) => {
                  return (
                    <tr>
                      <th>{index + 1}</th>
                      <td>{stateDataObj.state}</td>
                      <td>{stateDataObj.active}</td>
                      <td>{stateDataObj.recovered}</td>
                      <td>{stateDataObj.deaths}</td>
                      <td>{stateDataObj.confirmed}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default StateSummarryTable;
