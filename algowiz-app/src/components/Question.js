import React from "react";
import { Card, ListGroup, Col, Row, Container, Button } from "react-bootstrap";

export class Question extends React.Component {
  constructor(props) {
    super(props);
    // console.log("From question, ", this.props.value);
    this.state = {ans:  null};
  }

  selectButton(value) {
    // console.log(value);
    // console.log(this.props.options[value]);
    this.setState({
        ans: this.props.options[value]
    });
  }

  

  render() {
    return (
      <Container>
        <Row>
          <Card className="quiz-question-card">
            <Card.Body>
              <Card.Title> Question #{this.props.qnum} </Card.Title>
              <Card.Subtitle className="mb-2 text-muted"> </Card.Subtitle>
              <Card.Text>Question Goes Here</Card.Text>
              <ListGroup variant="flush">
                {/* https://react-bootstrap.github.io/components/list-group/ */}
                <ListGroup.Item
                  action
                  onClick={() => {this.selectButton(0)}}
                >
                  {this.props.options[0]}
                </ListGroup.Item>
                <ListGroup.Item 
                    action 
                    onClick={() => {this.selectButton(1)}}>
                  {this.props.options[1]}
                </ListGroup.Item>
                <ListGroup.Item 
                    action
                    onClick={() => {this.selectButton(2)}}>
                  {this.props.options[2]}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Col sm={3}></Col>
          <Col>
            <Button
              id="quiz-submit-btn"
              variant="outline-primary"
              size="lg"
              onClick={()=> {
                  this.props.onSubmit(this.state.ans)
                  this.setState({
                    ans: null
                });
                }}
            >
              {" "}
              Submit{" "}
            </Button>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
    );
  }
}

export default Question;
