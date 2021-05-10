import React from 'react';
import Question from '../components/Question'
import Progress from './Progress'
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col, Alert} from 'react-bootstrap'


export class QuizPage extends React.Component {
    constructor(props) {
        super(props);
        let topic = props.topic;
        console.log(topic);
        let test = this.getQuestion(topic);
        console.log(test);
        this.state = {
            qnum : 0,
            ans: null
        };
    }

    // Fetches the question details for the current topic
    getQuestion (topic) {
        // TODO:  add fecth call  
        // TODO: add json parser -- SHIVAMS
        return "Test Info";
    }

    handleSubmit = (ans) => {
        console.log("Submission recieved ", ans);
        const curr_state = this.state.qnum;
        console.log(curr_state);
        
        if (ans == null) {
            return <Alert 
            variant = "warning">
                Please Select 1 option before submitting
            </Alert>;
        } else  {
            this.setState({
                qnum: this.state.qnum + 1
            })
        }
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
                    <Col sm = {6}><Question 
                    value = {this.getQuestion(this.props.topic)} 
                    qnum = {this.state.qnum}
                    onSubmit = {this.handleSubmit}
                    options = {["test 1", "test2", "test3"]}
                    ></Question> </Col>
                </Row>
                {/* Bottom row -- submit */}
                
            </Container>
        )
    }
}

export default QuizPage;