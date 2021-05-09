import React from 'react';



export class Question extends React.Component {
    constructor(props) {
        super(props);
        console.log("From question, ", this.props.value);
    }
    render() {
        return (
            <div className = "quiz-question">
                <h1> Testing </h1>
            </div>
        )
    }
}

export default Question;