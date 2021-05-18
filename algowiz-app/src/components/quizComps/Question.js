import React from "react";
import { Card, ListGroup, Container } from "react-bootstrap";

export class Question extends React.Component {
  constructor(props) {
    super(props);
    console.log("submit in curr", this.props.submit);
    this.state = {}
    // console.log("From question, ", this.props.value);
  }

  // selectButton(value) {
  //   // console.log(value);
  //   // console.log(this.props.options[value]);
  //   this.setState({
  //       ans: this.props.options[value]
  //   });
  // }

  toggleClass(i) {
    console.log("toggling for i: ", i);
    this.setState({ selected: i });
  }

  // Funtion to get the different questions in the card
  getOptions() {
    let options = [];
    for (let i = 0; i < this.props.options.length; i++) {
      let option = (<ListGroup.Item
        action
        className = {this.state.selected && this.state.selected == i + 1? "active" : null}
        onClick={() => {
          this.props.onSelect(this.props.options[i], i);
          this.toggleClass(i + 1);
        }}
      >
        {this.props.options[i]}
      </ListGroup.Item>);
      options.push(option)
    }
    return options;
  }

  

  render() {
    return (
      <Container>
          <Card id = "question-card" className="quiz-question-card">
            <Card.Body>
              <Card.Title> {this.props.value} </Card.Title>
              <Card.Subtitle className="mb-2 text-muted"> </Card.Subtitle>
              <Card.Text>Question #{this.props.qnum + 1} </Card.Text>
              <ListGroup 
                className = {!this.props.submit ? "Disabled":""}
                variant="flush"
              >
                {this.getOptions()}
              </ListGroup>
            </Card.Body>
          </Card>
      </Container>
    );
  }
}

export default Question;
