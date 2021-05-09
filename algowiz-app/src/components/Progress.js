import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

// Progress Bar component for the quiz to keep track of number of qs answered
export class Progress extends React.Component {
    

    render() {
        return (
            <ProgressBar animated variant="info"  now={this.props.value} />
        )
    }
}

export default Progress;