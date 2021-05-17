import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Tabs,
  Tab,
  Row,
  Col,
  Container
} from "react-bootstrap";

import HomePageTab from "./HomePageTab";

export class HomePageTopics extends React.Component {
  render() {
    /* TODO: 1. These should not be hardcoded, they should be built from the built 
     * from the fetched JSON data
     * 2. avoid inline styles
     */

    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <Tabs
                defaultActiveKey="Search"
                id="uncontrolled-tab-example"
                className="nav nav pills"
                style={{ color: "red", fontSize: "150%", padding :"0.5em" }}
              >
                  
                <Tab eventKey="Search" title="Search" key = "a" >
                  <HomePageTab topic="Search" />
                </Tab>

                <Tab eventKey="home" title="Graph" key = "b">
                  <HomePageTab topic="Graph" /> 
                </Tab>

                <Tab eventKey="Sorting" title="Sorting" key = "c">
                  <HomePageTab topic="Sorting" />
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePageTopics;
