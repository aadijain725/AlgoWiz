import React from "react";
import { Link } from 'react-router-dom';
import { Row, Button,Card, Container } from "react-bootstrap";
import Progress from "./Progress"
export class Result extends React.Component {
  
/* commenting out on merge, not sure if needed
    render() {
        return <h1> Good Job, you got {this.props.numc} correct </h1>
    }
*/

displayResults(correct, incorrect) {

}

render() {
    return (
    <Container id = "results-page">
    <Row>
      <Card style={{ width: "40rem" }}>
        <Card.Img variant="top" src="https://bsmedia.business-standard.com/_media/bs/img/article/2018-06/14/full/1528966655-8748.jpg" />
        <Card.Body>    
          <Card.Title>Here are your resuts for the quiz</Card.Title>
          
          <Progress type ="Your Score :" curr ={this.props.curr} total ={this.props.total}></Progress>
          <Link to='/'>
            <Button className="btn btn-primary btn-m m-5">Go Back to Home</Button>
          </Link>
          <Link to="/lesson/l1">
                  <Button
                    href="/lesson"
                    className="btn btn-danger btn-m m-5"
                  >
                    Go to corresponding Lesson Page
                  </Button>
          </Link>
        </Card.Body>
      </Card>
      </Row>
      </Container>
    );
  }
}

export default Result;
