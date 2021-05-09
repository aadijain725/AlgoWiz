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
import "bootstrap/dist/css/bootstrap.min.css";

export class HomePageTopicsTab extends React.Component {
  render() {
    const allCards = this.getAllCards();
    return (
      <ul class="list-group">
        {allCards.map((counter) => (
          <>{counter} </>
        ))}
      </ul>
    );
  }

  getAllCards() {
    let cardsArray = [];

    for (let i = 0; i < 3; i++) {
      cardsArray.push(this.getCard(i));
    }
    return cardsArray;
  }
  getCard(title) {
    let cards = (
      <Card style={{ width: "60rem" }} className="card">
        <Container>
          <Row>
            <Col>
              <Card.Body>
                <Card.Title>{this.props.title + " " + title}</Card.Title>
                <Card.Img
                  variant="top"
                  src="algowiz-app/src/components/pathfinding.png"
                  alt="logo"
                />
              </Card.Body>
            </Col>
            <Col>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Button
                  href="/Lesson"
                  variant="primary"
                  class="btn btn-primary stretched-link"
                >
                  Lesson
                </Button>
                <Button
                  href="/Quiz"
                  variant="primary"
                  class="btn btn-primary stretched-link"
                >
                  Go To Quiz
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
