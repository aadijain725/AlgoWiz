import React from 'react';
import Question from '../components/quizComps/Question'
import Progress from '../components/quizComps/Progress'
import "bootstrap/dist/css/bootstrap.min.css";
import {withRouter} from 'react-router-dom';
import APIHelper from './helpers/APIHelper'
import {Container, Row, Col, Alert, Button} from 'react-bootstrap'
import Result from './quizComps/Result';

// Functional component for generating ESX correct user feedback depending on the 
// User's answer and the correct answer 
export function getUserFeedback(correct_ans, ans, feedbacks, option_index) {
    let variant = "";
    let feedback = "";
    if (!ans) { // No answer is selected by user
        feedback = "Please select an answer before submitting";
        variant = "warning";
    } else if (correct_ans === ans){ // User selected the correct answer
        feedback = feedbacks[option_index];
        variant = "success";
    } else { // User selected the incorrect answer
        feedback = feedbacks[option_index];
        variant = "danger";
    }

    return <Alert 
            id = "feedback" 
            className = "mt-5"
            variant = {variant}> 
            {feedback}
        </Alert>
}


export class QuizPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qnum : 0,
            ans: null,
            submitted: false,
            showSubmit: true,
            numCorrect: 0,
            data: null 
        };
        this.getLessonID();
    }

    // Function that returns a string for the 
    // corresponding lessonID to the quiz page 
    // that we are currently on.
    getLessonID() {
        let x = this.props.match.params.quizID;
        let q = x.split("_");
        q[q.length - 1] = "lesson";
        let lessonID = q[0];
        for (let i = 1;  i < q.length; i++) {
            lessonID += "_" + q[i];
        }
        return lessonID;
    }

    componentDidMount() {
        APIHelper(`quiz/${this.props.match.params.quizID}`)
        .then(homeData => {
            window.info = homeData["questionsList"];
            window.title = homeData["title"];
            this.setState({
                data: homeData 
            });
        })
        .catch(err => {
            console.log(err);
        })
    }

    // Function that handles user selecting buttons 
    handleSelect = (ans, idx) => {
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
    handleSubmit = () => {
        let ans = this.state.ans;
        let numCorrect = this.state.numCorrect;
        if (ans === this.getAnswer(this.state.qnum) ) { // User's Answer is correct 
            numCorrect += 1;
        } 
        this.setState({
            qnum: this.state.qnum, 
            ans: ans,
            submitted: true,
            showSubmit: false,
            idx: this.state.idx,
            numCorrect: numCorrect
        })
    }

    // Function that handles continue button functionality
    handleContinue =  () => {
        let ans = this.state.ans;
        let q = this.state.qnum; 
        if (ans) { // if an answer is selected, show next question
            q += 1;
        }
        this.setState({
            qnum: q, 
            ans: null,
            submitted: false,
            showSubmit: true,
            idx: this.idx,
            numCorrect: this.state.numCorrect
        });
    }

    // Renders
    render() {
        if (window.info && window.info.length > this.state.qnum) { // Quiz still ongoing and questions are left 
        // Rendering corrresponding ESX for quiz
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
                        {
                    getUserFeedback(this.getAnswer(this.state.qnum), this.state.ans, this.getFeedback(this.state.qnum), this.state.idx)
                    }
                    </Row>
                }
                {/* Bottom row -- submit and continue buttons*/}
                <Row>
                    <Col sm={3}></Col>
                    <Col>
                        {this.state.showSubmit && // if user has not already submitted, show submit
                            <Button
                            id="quiz-submit-btn"
                            variant="outline-primary"
                            size="lg"
                            onClick={()=> {
                                this.handleSubmit()
                                }}
                            >
                            {" "}
                            Submit{" "}
                            </Button>
                        }
                        {!this.state.showSubmit && // if user has submitted show continue option
                        <Button
                            id="quiz-submit-btn"
                            variant="outline-primary"
                            size="lg"
                            onClick={()=> {
                                this.handleContinue(this.state.ans)
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
        } else if (window.info){ // user has reached end of quiz
            let lessonID = this.getLessonID();
            return <Result curr = {this.state.numCorrect} total = {window.info.length} lessonID = {lessonID}> </Result>
        } else {
            return (<h1>Loading ... </h1>)
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
        return window.info[qnum]["options"];
    }

    // Fetches the correct answer for the current question that is selected
    getAnswer(qnum) {
        let index = window.info[qnum]["correctAnswer"];
        return window.info[qnum]["options"][index];
    }


    // Fetches the feedback list for the current question that is selected
    getFeedback(qnum) {
        return window.info[qnum]["responses"];
    }
}

// wrap export in withRouter so it can access React url params
export default withRouter(QuizPage);


