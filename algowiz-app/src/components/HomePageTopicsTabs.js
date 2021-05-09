import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Tabs,
  Tab,
  Modal,
  Row,
  Button,
  Col,
  Form,
  Card,
  Container,
  ListGroupItem,
  ListGroup
} from "react-bootstrap";

import HomePageTopicsTab from './HomePageTopicTab'

export class HomePageTopicsTabs extends React.Component {
  render() {
    return (
      <div>
        <Container >
          <Row>
            <Col>
              <Tabs defaultActiveKey="Graph" id="controlled-tab-example">
                <Tab eventKey="home" title="Graph">
                    <HomePageTopicsTab title ="Dijkstras">  </HomePageTopicsTab>
                </Tab>
                <Tab eventKey="profile" title="Sorting">
                <HomePageTopicsTab title ="Selection Sort"> </HomePageTopicsTab>
                </Tab>
                <Tab eventKey="contact" title="Binary">
                <HomePageTopicsTab title ="Binary Search">  </HomePageTopicsTab>
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
