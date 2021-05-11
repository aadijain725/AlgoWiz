import React from "react";
import { Card, ListGroup, Container } from "react-bootstrap";

export class Question extends React.Component {
  constructor(props) {
    super(props);
    // console.log("From question, ", this.props.value);
    this.state = {ans:  null};
  }

  // selectButton(value) {
  //   // console.log(value);
  //   // console.log(this.props.options[value]);
  //   this.setState({
  //       ans: this.props.options[value]
  //   });
  // }

  

  render() {
    return (
      <Container>
          <Card className="quiz-question-card">
            <Card.Body>
              <Card.Title> {this.props.value} </Card.Title>
              <Card.Subtitle className="mb-2 text-muted"> </Card.Subtitle>
              <Card.Text>Question #{this.props.qnum + 1} </Card.Text>
              <ListGroup variant="flush">
                {/* https://react-bootstrap.github.io/components/list-group/ */}
                <ListGroup.Item
                  action
                  onClick={() => {this.props.onSelect(this.props.options[0])}}
                >
                  {this.props.options[0]}
                </ListGroup.Item>
                <ListGroup.Item 
                    action 
                    onClick={() => {this.props.onSelect(this.props.options[1])}}>
                  {this.props.options[1]}
                </ListGroup.Item>
                <ListGroup.Item 
                    action
                    onClick={() => {this.props.onSelect(this.props.options[2])}}>
                  {this.props.options[2]}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
      </Container>
    );
  }
}

export default Question;
