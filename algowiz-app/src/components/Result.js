import React from 'react';

export class Result extends React.Component {
    render() {
        return <h1> Good Job, you got {this.props.numc} correct </h1>
    }
}

export default Result;