import React from "react";
import { Card, ListGroup, Container } from "react-bootstrap";

export class Question extends React.Component {
  // Initializing state
  constructor(props) {
    super(props);
    this.state = {}
  }


  // Method to set class for highlighted button based on selected option  
  toggleClass(i) {
    this.setState({ selected: i });
  }

  // Method to show highlighted button based on selected option  
  setClasses(i) {
    let classList = "";
    this.state.selected && this.state.selected === i + 1? classList += "active " : classList ="";
    return classList;
  }

  // Funtion to get the different questions in the card
  getOptions() {
    let options = []; // List of all options in a given question 
    // Generating ESX tags for each option for the given question
    for (let i = 0; i < this.props.options.length; i++) { 
      let option = (<ListGroup.Item
        action
        className = {this.setClasses(i) } // Set class based on state
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

  
  // Renders the ESX for the Question card that is displayed to the user
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
