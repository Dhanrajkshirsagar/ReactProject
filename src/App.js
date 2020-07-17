import React from "react";
import "./App.css";
import CollapsibleTable from "./CollapsibleTable";
import CovidCards from "./CovidCards";
import DayWiseSummary from "./DayWiseSummary";
import { Image, Spinner, Tabs, Tab } from "react-bootstrap";
import ChartView from "./ChartView";

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
            data.Country === "India" && country.push({ data });
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

    if (error) {
      return <div>Error : API Getting failed </div>;
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
          <div>
            <ChartView
              covidData={this.state.GobleData}
              label={"Global Covid Cases"}
              text={"Global"}
            />
          </div>
          <div>
            <ChartView
              covidData={this.state.countryData[0].data}
              label={"India Covid Cases"}
              text={"India"}
            />
          </div>

          <Tabs defaultActiveKey="home" id="home">
            <Tab eventKey="home" title="Home">
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
