import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

// Progress Bar component for the quiz to keep track of number of qs answered
export class Progress extends React.Component {

    render() {
        return (
            <div className = "quiz-progressBar">
                <h1> Testing </h1>
                <ProgressBar now={this.props.value} label={`${this.props.value}%`} srOnly />;
            </div>
        )
    }
}

export default Progress;