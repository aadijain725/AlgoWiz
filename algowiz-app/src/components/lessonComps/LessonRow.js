import React from 'react';
import {Row} from 'react-bootstrap';
import LessonCol from './LessonCol';

export class LessonRow extends React.Component {
	render() {
		// Render a row and create a column for each, forward the params
		return(  
			<Row>{
					this.props.cols.map((k,i) => {
							return <LessonCol key={i} content={k}/>
					})
			}</Row>
		);
	}
}

export default LessonRow;