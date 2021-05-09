import React from 'react';
import Question from '../components/Question';
import Progress from './Progress';



export class QuizPage extends React.Component {
    constructor(props) {
        super(props);
        var topic = props.topic;
        console.log(topic);
        var test = this.getQuestion(topic);
        console.log(test);
    }

    // Fetches the question details for the current topic
    getQuestion (topic) {
        // TODO:  add fecth call
        // TODO: add json parser
        return "Test Info";
    }

    render() {
        return(
            <div className = "quiz-page">
                <h2>Quiz Page: {this.props.topic}</h2>
                <Progress value = {60} ></Progress>
                <Question value = {this.getQuestion(this.props.topic)}></Question>
            </div>
        )

    }
}

export default QuizPage;