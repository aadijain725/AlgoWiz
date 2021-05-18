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
export function getUserFeedback(correct_ans, ans, feedbacks) {
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
            {feedbacks[0]}
        </Alert>
    } else {
        return <Alert 
            id = "feedback" 
            className = "mt-5"
            variant = 'danger'> 
            {feedbacks[1]}
        </Alert>
    }
}


export class QuizPage extends React.Component {
    constructor(props) {
        super(props);
        let parser = new Parser();
        let p2 = new P2().getInfo();
        console.log("questionsList", p2[0]);
        let data = parser.getInfo();
        window.info = data;
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
    handleSelect = (ans) => {
        this.setState({
            qnum: this.state.qnum, 
            ans: ans,
            submitted: false,
            showSubmit: true,
            numCorrect: this.state.numCorrect
        })
    }
    // Function that handles user submissions
    handleSubmit = (ans) => {
        
        if (ans == null) {
            this.setState({
                qnum: this.state.qnum, 
                ans: ans,
                submitted: true,
                showSubmit: false,
                numCorrect: this.state.numCorrect
            })
        } else  if (ans === this.getAnswer(this.state.qnum)) {
            this.setState({
                qnum: this.state.qnum, 
                ans: ans,
                submitted: true,
                showSubmit: false,
                numCorrect: this.state.numCorrect + 1
            })
        } else {
            this.setState({
                qnum: this.state.qnum, 
                ans: ans,
                submitted: true,
                showSubmit: false,
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
                numCorrect: this.state.numCorrect
            })
        } else  {
            this.setState({
                qnum: this.state.qnum + 1, 
                ans: ans,
                submitted: true,
                showSubmit: true,
                numCorrect: this.state.numCorrect
            })
        }
    }

    // componentDidMount() {

    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.submitted === true) {
    //         console.log("submission was successful");
    //         this.setState({
    //             qnum: this.state.qnum + 1, 
    //             ans: this.ans,
    //             submitted : false,
    //             showSubmit: true
    //         })
    //     }
    // }


    render() {
        if (window.info.length > this.state.qnum) {
        return(
            <Container className = "quiz-page">
                {/* Top row -- topic + progress bar */}
                <Row>
                    <Col sm= {6}> <h2>Quiz Page: {this.getCategory(this.state.qnum)}</h2> </Col>
                    <Col sm = {6}> <Progress id = "quiz-progress-bar" type = "Questions Answered" curr = {this.state.qnum} total = {window.info.length}></Progress> </Col>
                </Row>
                <Row>
                    <Col sm = {3}></Col>
                    <Col sm = {6}><Question 
                    value = {this.getQuestion(this.state.qnum)} 
                    qnum = {this.state.qnum}
                    onSelect = {this.handleSelect}
                    // onSubmit = {this.handleSubmit}
                    options = {this.getOptions(this.state.qnum)}
                    ></Question> </Col>
                </Row>
                {this.state.submitted === true &&
                    <Row>
                        {getUserFeedback(this.getAnswer(this.state.qnum), this.state.ans, this.getFeedback(this.state.qnum))}
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
        // TODO:  add fecth call  
        // TODO: add json parser -- SHIVAMS
        return window.info[qnum]["question"];
    }

    getCategory (qnum) {
        // TODO:  add fecth call  
        // TODO: add json parser -- SHIVAMS
        
        // console.log("topic", window.info[qnum]["question"]);
        return window.info[qnum]["category"];
    }

    getOptions (qnum) {
        return window.info[qnum]["option"];
    }

    getAnswer(qnum) {
        return window.info[qnum]["answer"];
    }

    getFeedback(qnum) {
        return window.info[qnum]["feebacks"];
    }
}

export default QuizPage;



// // TODO: Need to pass state to this and add buttons accordingly 
// function showButton(showSubmit) {
//     if(showSubmit) {
//         return <Button
//         id="quiz-submit-btn"
//         variant="outline-primary"
//         size="lg"
//         onClick={()=> {
//             this.handleSubmit(this.state.ans)
//             this.setState({
//                 ans: null
//             });
//             }}
//         >
//         {" "}
//         Submit{" "}
//         </Button>
//     } else  {
//         return <Button
//             id="quiz-submit-btn"
//             variant="outline-primary"
//             size="lg"
//             onClick={()=> {
//                 this.handleSubmit(this.state.ans)
//                 this.setState({
//                     ans: null
//                 });
//             }}
//         >
//         {" "}
//         Submit{" "}
//         </Button>
//     }
// }
