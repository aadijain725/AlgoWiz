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

/**
 * Homepage topics component. Renders a menu based on data received 
 * in this.props.data, this.props.topics
 */
export class HomePageTopics extends React.Component {
  render() {
    // TODO: avoid inline styles
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
  
  /**
   * Given data and topics, build the menu
   * @param {*} data 
   * @param {*} topics 
   * @returns JSX menu 
   */
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
