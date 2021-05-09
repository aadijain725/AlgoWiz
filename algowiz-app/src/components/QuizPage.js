import React from 'react';
import Question from '../components/Question'
import Progress from './Progress'
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Button, Row, Col} from 'react-bootstrap'



export class QuizPage extends React.Component {
    constructor(props) {
        super(props);
        let topic = props.topic;
        console.log(topic);
        let test = this.getQuestion(topic);
        console.log(test);
        this.state = {qnum : 0};
    }

    // Fetches the question details for the current topic
    getQuestion (topic) {
        // TODO:  add fecth call
        // TODO: add json parser
        return "Test Info";
    }

    render() {
        return(
            <Container className = "quiz-page">
                {/* Top row -- topic + progress bar */}
                <Row>
                    <Col sm= {6}> <h2>Quiz Page: {this.props.topic}</h2> </Col>
                    <Col sm = {6}> <Progress id = "quiz-progress-bar" value = {60}></Progress> </Col>
                </Row>
                <Row>
                    <Col sm = {3}></Col>
                    <Col sm = {6}><Question value = {this.getQuestion(this.props.topic)} qnum = {this.state.qnum}></Question> </Col>
                </Row>
                {/* Bottom row -- submit */}
                <Row>  
                    <Col sm = {3}></Col>
                    <Col>
                        <Button id= "quiz-submit-btn" variant = "outline-primary" size = "lg" onClick={()=>{
                            this.setState((state) => ({
                                qnum: state.qnum + 1
                              }))
                            }
                        }
                        > Submit </Button>
                    </Col>
                    <Col sm = {3}></Col>
                    
                </Row>
            </Container>
        )

    }
}

export default QuizPage;