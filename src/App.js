import React from "react";
import "./App.css";
import CollapsibleTable from './CollapsibleTable';
import CovidCards from "./CovidCards";
import DayWiseSummary from './DayWiseSummary'
import { Image, Spinner, Tabs, Tab } from "react-bootstrap";

class App extends React.Component {
  state = { isLoaded: false, covidData: [],error:null };

  
  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            covidData: result
          });
        },
        
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    const { error,isLoaded, covidData } = this.state;
    if(error){
      return(
        <div>Error : API Getting failed </div>
      )
    }else 
    if (!isLoaded) {
      return (
        <div style={{ margin: "15px", marginLeft: "500px" }}>
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
          <Tabs defaultActiveKey="home" id="home">
            <Tab eventKey="home" title="Home">
              <CollapsibleTable covidData={covidData} />
            </Tab>
            <Tab eventKey="profile" title="Day Wise">
            <DayWiseSummary/>
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled></Tab>
          </Tabs>
        </div>
      );
    }
  }
}

export default App;
