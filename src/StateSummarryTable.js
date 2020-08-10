import React from "react";
import { Table } from "react-bootstrap";
import ExportData from "./ExportData";

class StateSummarryTable extends React.Component {
  state = { stateName: "", filterData: this.props.StateData, counter: true };

  filterStateData = (name) => {
    let filterStateData = this.props.StateData.filter((data) => {
      return data.state.toLowerCase().indexOf(name.toLowerCase()) !== -1;
    });
    this.setState({ filterData: filterStateData });
  };

  sortedData = () => {
    let filterStateData;
    if (this.state.counter === true) {
      filterStateData = this.state.filterData.sort(
        (a, b) => b.active - a.active
      );
      this.setState({counter:false})
    } else {
      filterStateData = this.state.filterData.sort(
        (a, b) => a.active - b.active
      );
      this.setState({counter:true})
    }
    this.setState({ filterData: filterStateData});
  };
  render() {
    return (
      <div>
        <ExportData filterStateData={this.state.filterData} />
        <div style={{ margin: "10px" }} class="table" id="stateSummary">
          <Table className="center">
            <thead onClick={this.sortedData}>
              <th>Sr.No</th>
              <th>State Name</th>
              <th >Total Active
              <button style={{marginLeft:"10px"}}  type="button" class="btn btn-outline-dark">Sort</button>
              </th>
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
                      this.filterStateData(e.target.value);
                    }}
                  ></input>
                </th>
              </tr>
              {this.state.filterData.length === 0 ? (
                <h3>No Data found</h3>
              ) : (
                this.state.filterData.map((stateDataObj, index) => {
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
