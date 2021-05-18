import React from 'react';
import Question from '../components/quizComps/Question'
import Progress from '../components/quizComps/Progress'
import "bootstrap/dist/css/bootstrap.min.css";
import Parser from "./testJson/QuizPageParser.js"
import P2 from "./testJson/QuizPageParser_1";
import {Container, Row, Col, Alert, Button} from 'react-bootstrap'
import Result from './quizComps/Result';

// Functional component for getting correct user feedback depending on the 
// User's answer and the correct answer 
export function getUserFeedback(correct_ans, ans, feedbacks, option_index) {
    console.log(feedbacks);
    console.log(option_index)
    if (!ans) {
        return <Alert 
            id = "feedback" 
            className = "mt-5"
            variant = 'warning'> 
            Please select an answer before submitting 
        </Alert>
    } else if (correct_ans === ans){
        return <Alert 
            id = "feedback" 
            className = "mt-5"
            variant = 'success'> 
            {feedbacks[option_index]}
        </Alert>
    } else {
        return <Alert 
            id = "feedback" 
            className = "mt-5"
            variant = 'danger'> 
            {feedbacks[option_index]}
        </Alert>
    }
}


export class QuizPage extends React.Component {
    constructor(props) {
        super(props);
        let parser = new Parser();
        let data2 = new P2().getInfo();
        console.log("questionsList", data2["questions"][0]);
        let data = parser.getInfo();
        window.info = data2["questions"];
        window.title = data2["title"];
        // console.log("length of data", window.info.length);
        this.state = {
            qnum : 0,
            ans: null,
            submitted: false,
            showSubmit: true,
            numCorrect: 0 
        };
    }

    // Function that handles selecting buttons 
    handleSelect = (ans, idx) => {
        console.log("index in handleSelect is:", idx);
        this.setState({
            qnum: this.state.qnum, 
            ans: ans,
            submitted: false,
            showSubmit: true,
            numCorrect: this.state.numCorrect,
            idx: idx
        })
    }
    // Function that handles user submissions
    handleSubmit = (ans) => {
        console.log("index in handleSubmit is:", this.state.idx);
        if (ans == null) {
            this.setState({
                qnum: this.state.qnum, 
                ans: ans,
                submitted: true,
                showSubmit: false,
                idx: this.state.idx,
                numCorrect: this.state.numCorrect
            })
        } else  if (ans === this.getAnswer(this.state.qnum)) {
            this.setState({
                qnum: this.state.qnum, 
                ans: ans,
                submitted: true,
                showSubmit: false,
                idx: this.state.idx,
                numCorrect: this.state.numCorrect + 1
            })
        } else {
            this.setState({
                qnum: this.state.qnum, 
                ans: ans,
                submitted: true,
                showSubmit: false,
                idx: this.state.idx,
                numCorrect: this.state.numCorrect
            })
        }
    }

    // Function that handles continue functionality
    handleContinue =  (ans) => {
        if (ans == null) {
            this.setState({
                qnum: this.state.qnum, 
                ans: ans,
                submitted: true,
                showSubmit: true,
                idx: this.idx,
                numCorrect: this.state.numCorrect
            })
        } else  {
            this.setState({
                qnum: this.state.qnum + 1, 
                ans: ans,
                submitted: true,
                showSubmit: true,
                idx: this.idx,
                numCorrect: this.state.numCorrect
            })
        }
    }

    render() {
        if (window.info.length > this.state.qnum) {
        return(
            <Container className = "quiz-page">
                {/* Top row -- topic + progress bar */}
                <Row>
                    <Col sm= {6}> <h2>Quiz Page: {this.getCategory()}</h2> </Col>
                    <Col sm = {6}> <Progress id = "quiz-progress-bar" type = "Questions Answered" curr = {this.state.qnum} total = {window.info.length}></Progress> </Col>
                </Row>
                <Row>
                    <Col sm = {3}></Col>
                    <Col sm = {6}>
                        {!this.state.submitted &&
                        <Question 
                    value = {this.getQuestion(this.state.qnum)} 
                    qnum = {this.state.qnum}
                    onSelect = {this.handleSelect}
                    options = {this.getOptions(this.state.qnum)}
                    ></Question>}
                     </Col>
                </Row>
                {this.state.submitted === true &&
                    <Row>
                        {getUserFeedback(this.getAnswer(this.state.qnum), this.state.ans, this.getFeedback(this.state.qnum), this.state.idx)}
                    </Row>
                }
                {/* Bottom row -- submit */}
                <Row>
                    <Col sm={3}></Col>
                    <Col>
                        {this.state.showSubmit && 
                            <Button
                            id="quiz-submit-btn"
                            variant="outline-primary"
                            size="lg"
                            onClick={()=> {
                                this.handleSubmit(this.state.ans)
                                }}
                            >
                            {" "}
                            Submit{" "}
                            </Button>
                        }
                        {!this.state.showSubmit && 
                        <Button
                            id="quiz-submit-btn"
                            variant="outline-primary"
                            size="lg"
                            onClick={()=> {
                                this.handleContinue(this.state.ans)
                                this.setState({
                                    qnum: this.state.qnum + 1, 
                                    ans: this.ans,
                                    submitted : false,
                                    showSubmit: true,
                                    numCorrect: this.state.numCorrect
                                    });
                                }}
                            >
                            {" "}
                            Continue{" "}
                        </Button>
                        }
                    </Col>
                    <Col sm={3}></Col>
                </Row>
                
            </Container>
        )
        } else {
            return <Result curr = {this.state.numCorrect} total = {window.info.length}> </Result>
        }
    }

    // Fetches the question details for the current topic
    getQuestion (qnum) {
        return window.info[qnum]["question"];
    }
    // Fetches the title name for the current topic
    getCategory () {
        return window.title;
    }

    // Fetches the question options list for the current question that is selected
    getOptions (qnum) {
        return window.info[qnum]["option"];
    }

    // Fetches the correct answer for the current question that is selected
    getAnswer(qnum) {
        let index = window.info[qnum]["answer"];
        console.log("answer idx is ", index);
        console.log("answer is ", window.info[qnum]["option"][index]);
        return window.info[qnum]["option"][index];
    }


    // Fetches the feedback list for the current question that is selected
    getFeedback(qnum) {
        return window.info[qnum]["feebacks"];
    }
}

export default QuizPage;


