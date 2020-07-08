import React from "react";

class DayWiseSummary extends React.Component {
  state = { DayWiseData: [] };
 
  searchCountry(key) {
    fetch("https://api.covid19api.com/dayone/country/" + key)
      .then((res) => res.json())
      .then((result) => this.setState({ DayWiseData: result }));
  }

  render() {
      console.log(this.state.DayWiseData)
    return (
      <div>
        <select
          style={{ margin: "15px" }}
          onChange={(event) => this.searchCountry(event.target.value)}
          placeholder="Search Country Name"
        >
         <option></option> 
        </select>
      </div>
    );
  }
}

export default DayWiseSummary;
