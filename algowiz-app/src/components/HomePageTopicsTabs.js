import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Tabs,
  Tab,
  Row,
  Col,
  Container
} from "react-bootstrap";

import HomePageTopicsTab from "./HomePageTopicTab";

export class HomePageTopicsTabs extends React.Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <Tabs
                defaultActiveKey="Search"
                id="uncontrolled-tab-example"
                className="nav nav pills"
                style={{ color: "red", "font-size": "150%", padding :"0.5em" }}
              >
                  
                <Tab eventKey="Search" title="Search" key = "a" >
                  <HomePageTopicsTab topic="Search" />
                </Tab>

                <Tab eventKey="home" title="Graph" key = "b">
                  <HomePageTopicsTab topic="Graph" /> 
                </Tab>

                <Tab eventKey="Sorting" title="Sorting" key = "c">
                  <HomePageTopicsTab topic="Sorting" />
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePageTopicsTabs;
