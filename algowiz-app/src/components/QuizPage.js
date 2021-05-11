import React from 'react';
import Question from '../components/Question'
import Progress from './Progress'
import "bootstrap/dist/css/bootstrap.min.css";
import Parser from "./testJson/QuizPageParser.js"
import {Container, Row, Col, Alert, Button} from 'react-bootstrap'
import Result from './Result';


function getUserFeedback(correct_ans, ans, feedbacks) {
    console.log("ans in getUserFeedback is:", ans );
    console.log("props in getUserFeedback is:",  correct_ans);
    if (!ans) {
        return <Alert 
            className = "mt-5"
            variant = 'warning'> 
            Please select an answer before submitting 
        </Alert>
    } else if (correct_ans === ans){
        return <Alert 
            className = "mt-5"
            variant = 'success'> 
            {feedbacks[0]}
        </Alert>
    } else {
        return <Alert 
            className = "mt-5"
            variant = 'danger'> 
            {feedbacks[1]}
        </Alert>
    }
}


export class QuizPage extends React.Component {
    constructor(props) {
        super(props);
        let topic = props.topic;
        console.log(topic);
        let parser = new Parser();
        let data = parser.getInfo();
        console.log("data ", data[0]["question"]);
        window.info = data;
        // console.log("length of data", window.info.length);
        this.state = {
            qnum : 0,
            ans: null,
            submitted: false,
            showSubmit: true, 
        };
    }


    handleSelect = (ans) => {
        console.log("Selection recieved ", ans);
        this.setState({
            qnum: this.state.qnum, 
            ans: ans,
            submitted: false,
            showSubmit: true
        })
    }

    handleSubmit = (ans) => {
        console.log("Submission recieved ", ans);
        
        if (ans == null) {
            this.setState({
                qnum: this.state.qnum, 
                ans: ans,
                submitted: true,
                showSubmit: false
            })
        } else  {
            this.setState({
                qnum: this.state.qnum, 
                ans: ans,
                submitted: true,
                showSubmit: false
            })
        }
        console.log("Submission updated to ", this.state.ans);
    }

    handleContinue =  (ans) => {
        console.log("handle continue ans ", ans);
        if (ans == null) {
            this.setState({
                qnum: this.state.qnum, 
                ans: ans,
                submitted: true,
                showSubmit: true
            })
        } else  {
            this.setState({
                qnum: this.state.qnum + 1, 
                ans: ans,
                submitted: true,
                showSubmit: true
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
                    <Col sm= {6}> <h2>Quiz Page: {this.props.topic}</h2> </Col>
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
                                    showSubmit: true
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
            return <Result numc = {this.state.qnum}> </Result>
        }
    }

    // Fetches the question details for the current topic
    getQuestion (qnum) {
        // TODO:  add fecth call  
        // TODO: add json parser -- SHIVAMS
        
        console.log("question data", window.info[qnum]["question"]);
        // console.log("topic", window.info[qnum]["question"]);
        return window.info[qnum]["question"];
    }

    getOptions (qnum) {
        console.log("question data", window.info[qnum]["option"]);
        return window.info[qnum]["option"];
    }

    getAnswer(qnum) {
        return window.info[qnum]["answer"];
    }

    getFeedback(qnum) {
        console.log("question data", window.info[qnum]["feebacks"]);
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