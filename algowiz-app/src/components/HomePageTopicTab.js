import React from "react";
import { Row, Button, Col, Card, Container,} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import HomePageParser from "./testJson/HomePageParser.js";

export class HomePageTopicsTab extends React.Component {
  render() {
    var parsedData = new HomePageParser(this.props.topic);

    const allCards = this.getAllCards(parsedData.getInfo());

    return (
      <ul class="list-group">
        {allCards.map((counter, idx) => (
          <>{counter} </>
        ))}
      </ul>
    );
  }

  getAllCards(arr) {
    let cardsArray = [];
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      cardsArray.push(
        this.getCard(arr[i]["title"], arr[i]["description"], arr[i]["imageURL"])
      );
    }
    return cardsArray;
  }

  styleDescription(description) {
    return (
      <p
        class="text-info"
        style={{ color: "red", "font-size": "25px", padding: "0.5em" }}
      >
        {" "}
        {description}
      </p>
    );
  }

  getCard(title, description, imageURL) {
    let cards = (
      <Card
        style={{
          width: "75rem",
          height: "22rem",
          border: "9px solid #1C6EA4",
          "border-radius": "4px",
        }}
        className="card"
      >
        <Container>
          <Row>
            <Col>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img
                  variant="top"
                  src={imageURL}
                  className="img-fluid"
                  alt="Responsive image"
                  style={{ width: "80%", height: "70%" }}
                />
              </Card.Body>
            </Col>
            <Col>
              <Card.Body>
                <Card.Text>{this.styleDescription(description)}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Button
                  href="/lesson"
                  variant="primary"
                  className="btn btn-danger btn-sm m-5 stretched"
                >
                  <h4>Lesson</h4>
                </Button>
                <Button
                  href="/quiz"
                  variant="primary"
                  className="btn btn-primary btn-sm m-5 stretched"
                >
                  <h4>Go to Quiz</h4>
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Card>
    );
    return cards;
  }
}
export default HomePageTopicsTab;
