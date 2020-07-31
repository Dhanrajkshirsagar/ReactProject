import React from "react";
import "./App.css";
import CollapsibleTable from "./CollapsibleTable";
import CovidCards from "./CovidCards";
import DayWiseSummary from "./DayWiseSummary";
import { Image, Spinner, Tabs, Tab } from "react-bootstrap";
// import ChartView from "./ChartView";
import PieChartView from "./PieChartView";

class App extends React.Component {
  state = {
    isLoaded: false,
    covidData: [],
    error: null,
    countryData: {},
    GobleData: {},
  };

  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then(
        (result) => {
          const country = [];
          result.Countries.map((data) => {
            return data.Country === "India" && country.push({ data });
          });
          this.setState({
            isLoaded: true,
            covidData: result,
            countryData: country,
            GobleData: result.Global,
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, covidData } = this.state;

    const backgroundColor = [
      "rgba(255,99,132,0.6)",
      "rgba(54,162,235,0.6)",
      "rgba(255,206,86,0.6)",
      "rgba(75,192,192,0.6)",
      "rgba(153,102,255,0.6)",
      "rgba(255,159,64,0.6)",
    ];
    const borderColor = [
      "rgba(255, 99, 132, 1)",
      "rgba(54, 162, 235, 1)",
      "rgba(255, 206, 86, 1)",
      "rgba(75, 192, 192, 1)",
      "rgba(153, 102, 255, 1)",
      "rgba(255, 159, 64, 1)",
    ];

    if (error) {
      return (
        <div style={{ margin: "25px" }}>Error : API Getting No Response </div>
      );
    } else if (!isLoaded) {
      return (
        <div class="Loader">
          <h2>Loading..</h2>
          <Spinner animation="border" />
        </div>
      );
    } else {
      return (
        <div>
          <Image
            src={process.env.PUBLIC_URL + "/corona.jpg"}
            style={{ width: "1350px", height: "150px" }}
            fluid
          />
          <h3 style={{ margin: "15px" }}>Covid-19 Dashboard</h3>
          <CovidCards covidData={covidData} />

          <Tabs defaultActiveKey="Information" id="Information">
            <Tab eventKey="Information" title="Information">
              <div style={{ display: "flex", margin: "25px" }}>
                <div>
                  <PieChartView
                    covidData={this.state.GobleData}
                    backgroundColor={backgroundColor}
                    borderColor={borderColor}
                  />
                </div>
                <div>
                  <PieChartView
                    covidData={this.state.countryData[0].data}
                    label={"India Covid Cases"}
                    text={"India"}
                    backgroundColor={backgroundColor}
                    borderColor={borderColor}
                  />
                </div>
              </div>
              {/* <div>
                <ChartView
                  label={"Global Covid Cases"}
                  backgroundColor={backgroundColor}
                  borderColor={borderColor}
                />
              </div> */}
              <CollapsibleTable covidData={covidData} />
            </Tab>
            <Tab eventKey="profile" title="Day Wise">
              <DayWiseSummary />
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled></Tab>
          </Tabs>
        </div>
      );
    }
  }
}

export default App;
