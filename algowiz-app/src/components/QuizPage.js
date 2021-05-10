import React from 'react';
import Question from '../components/Question'
import Progress from './Progress'
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col, Alert, Button} from 'react-bootstrap'


function getUserFeedback(props, ans) {
    console.log("ans in getUserFeedback is:", ans );
    console.log("props in getUserFeedback is:", props );
    let posFeeback = "Great Job!";
    let negFeeback = "Oops, that was wrong";
    if (!ans) {
        return <Alert 
            className = "mt-5"
            variant = 'warning'> 
            Please select an answer before submitting 
        </Alert>
    } else if (props.correct_ans === ans){
        return <Alert 
            className = "mt-5"
            variant = 'success'> 
            {posFeeback}
        </Alert>
    } else {
        return <Alert 
            className = "mt-5"
            variant = 'danger'> 
            {negFeeback}
        </Alert>
    }
}

export class QuizPage extends React.Component {
    constructor(props) {
        super(props);
        let topic = props.topic;
        console.log(topic);
        let test = this.getQuestion(topic);
        console.log(test);
        this.state = {
            qnum : 0,
            ans: null,
            submitted: false
        };
    }



    // Fetches the question details for the current topic
    getQuestion (topic) {
        // TODO:  add fecth call  
        // TODO: add json parser -- SHIVAMS
        return "Test Info";
    }

    handleSelect = (ans) => {
        console.log("Selection recieved ", ans);
        this.setState({
            qnum: this.state.qnum, 
            ans: ans,
            submitted: false
        })
    }

    handleSubmit = (ans) => {
        console.log("Submission recieved ", ans);
        
        if (ans == null) {
            this.setState({
                qnum: this.state.qnum, 
                ans: ans,
                submitted: true
            })
        } else  {
            this.setState({
                qnum: this.state.qnum + 1, 
                ans: ans,
                submitted: true
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.submitted === true) {
            console.log("submission was successful");
            this.setState({
                qnum: this.state.qnum + 1, 
                ans: this.ans,
                submitted : false
            })
        }
    }


    render() {
        console.log("Current state is:", this.state);
        return(
            <Container className = "quiz-page">
                {/* Top row -- topic + progress bar */}
                <Row>
                    <Col sm= {6}> <h2>Quiz Page: {this.props.topic}</h2> </Col>
                    <Col sm = {6}> <Progress id = "quiz-progress-bar" value = {(this.state.qnum/this.props.num)*100}></Progress> </Col>
                </Row>
                <Row>
                    <Col sm = {3}></Col>
                    <Col sm = {6}><Question 
                    value = {this.getQuestion(this.props.topic)} 
                    qnum = {this.state.qnum}
                    onSelect = {this.handleSelect}
                    // onSubmit = {this.handleSubmit}
                    options = {["test 1", "test2", "test3"]}
                    ></Question> </Col>
                </Row>
                {this.state.submitted === true &&
                    <Row>
                        {getUserFeedback(this.props, this.state.ans)}
                    </Row>
                }
                {/* Bottom row -- submit */}
                <Row>
                    <Col sm={3}></Col>
                    <Col>
                        <Button
                        id="quiz-submit-btn"
                        variant="outline-primary"
                        size="lg"
                        onClick={()=> {
                            this.handleSubmit(this.state.ans)
                            this.setState({
                                ans: null
                            });
                            }}
                        >
                        {" "}
                        Submit{" "}
                        </Button>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
                
            </Container>
        )
    }
}

export default QuizPage;