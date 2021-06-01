import React from "react";
import {
  Row,
  Col,
  Container,
} from "react-bootstrap";
import logo from "./AlgoWiz Logo.png";

import text from "./IntroductionText.js"


export class HomePageIntroduction extends React.Component {

  styleintro(description) {
    return (
      <p id="introFont" class="text-right" style={{ "font-size": "1.7vw" }}>
        {" "}
        {description}
      </p>
    );
  }

  render() {
      return (
        <Container padding="left-align">
          <Row>
            <h1 style={{ padding: "centre-align" }}>Welcome to AlgoWiz</h1>
          </Row>
          <Row>
            <Col>
              {" "}
              <img
                src={logo}
                className="img-fluid"
                alt="intro logo"
                width="90%"
              ></img>{" "}
            </Col>
            <Col sm={7}>
              {" "}
              {this.styleintro(text)}
            </Col>
          </Row>
        </Container>
      );
  }
}

export default HomePageIntroduction;
