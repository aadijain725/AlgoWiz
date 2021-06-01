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


  //   <Tab eventKey="Search" title="Search" key = "a" >
  //   <HomePageTab topic="Search" />
  // </Tab>

  // <Tab eventKey="Graph" title="Graph" key = "b">
  //   <HomePageTab topic="Graph" /> 
  // </Tab>

  // <Tab eventKey="Sorting" title="Sorting" key = "c">
  //   <HomePageTab topic="Sorting" />
  // </Tab>
 
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
              {this.getMenuForTopics(this.props.data, this.props.topics)}
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  // return the menu for topics
  getMenuForTopics(data, topics) {
    let menu =[]
    
    for(let i =0; i < topics.length; i++) {
      let nameOfTopic =   topics[i]
      menu.push(
        <Tab eventKey= {nameOfTopic} title= {nameOfTopic} key = {i+""} >
            <HomePageTab topic= {nameOfTopic} data = {data}/>
        </Tab>
      )
    }
    return menu
  }
}

export default HomePageTopics;
