import React from 'react';
import {Card, ListGroup} from 'react-bootstrap'


export class Question extends React.Component {
    constructor(props) {
        super(props);
        console.log("From question, ", this.props.value);
    
    }

    alertClicked() {
        alert('You clicked the third ListGroupItem');
      }

    render() {
        return (
                    <Card className = "quiz-question-card">
                        <Card.Body>
                            <Card.Title> Question #{this.props.qnum} </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">  </Card.Subtitle>
                            <Card.Text>
                             Question Goes Here
                            </Card.Text>
                            <ListGroup variant="flush">
                            {/* https://react-bootstrap.github.io/components/list-group/ */}
                            <ListGroup.Item action onClick={this.alertClicked}> 
                                This one is a button
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>            
        )
    }
}

export default Question;