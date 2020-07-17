import React from "react";
import { Accordion, Card } from "react-bootstrap";
import GetCovidSummary from "./GetCovidSummary";
import StateSummarryTable from './StateSummarryTable';

class CollapsibleTable extends React.Component {
  state = { Loaded: false, StateData: []};
  componentDidMount() {
    fetch("https://api.covidindiatracker.com/state_data.json")
      .then((resp) => resp.json())
      .then((result) =>
        this.setState({
          Loaded: true,
          StateData: result,
        })
      );
  }
  render() {
    const { Loaded, StateData } = this.state;
      return (
        <div className="Card">
          <Accordion defaultActiveKey="0">
            <Card >
              <Accordion.Toggle as={Card.Header} eventKey="0">
                State Wise Covid-19 Records
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body><StateSummarryTable StateData={StateData}/></Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Country Wise Covid-19 Records
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <GetCovidSummary covidData={this.props.covidData} />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
           
          </Accordion>
        </div>
      );
    
  }
}

export default CollapsibleTable;
