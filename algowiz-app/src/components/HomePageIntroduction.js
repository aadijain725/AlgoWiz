import React from "react";
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
  ListGroup,
} from "react-bootstrap";

export class HomePageIntroduction extends React.Component {
  render() {
    return (
      <Container padding = "left-align">
        <Row>
          <h1>Welcome to AlgoWiz</h1>
          <img src = "./pathfinding.jpg" alt ="logo"></img>
        </Row>
        <Row> </Row>
      </Container>
    );
  }
}

export default HomePageIntroduction;
