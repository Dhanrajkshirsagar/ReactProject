import React from "react";
import { Table, Button } from "react-bootstrap";



class StateSummarryTable extends React.Component {
  render() {
    var StateData = this.props.StateData;
  
    return (
      <div>
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
              {StateData.map((stateDataObj, index) => {
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
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default StateSummarryTable;
