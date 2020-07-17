import React from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

class DateRange extends React.Component {
  state = {
    endDate: "",
    startDate: "",
  };
  handleChange(value) {
    
    this.setState({
      endDate: value.selection.endDate,
      startDate: value.selection.startDate,
    },()=>{this.props.getDateOnchange(this.state)});
  }
  render() {
    let timeObject = [
      {
        endDate: this.state.endDate,
        startDate: this.state.startDate,
        key: "selection",
      },
    ];
    return (
      <span style={{ display: 'flex',marginLeft:"800px"}}>
      <DateRangePicker
        ranges={timeObject}
        onChange={(value) => this.handleChange(value)}
        showSelectionPreview={false}
        moveRangeOnFirstSelection={false}
        showDateDisplay={false}
       
        months={1}
      />
      </span>
    );
  }
}

export default DateRange;
