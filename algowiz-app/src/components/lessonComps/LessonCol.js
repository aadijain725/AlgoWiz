import React from 'react';
import {Col, Image} from 'react-bootstrap';

export class LessonCol extends React.Component {
  render() {
		// conditionally render different columns based on json contents
		const data = this.props.content;
		let cont;
		if (data.type === "img") {
			cont = <Image src={data.src} alt={data.alt} fluid/>
		} else if (data.type === "p") { 
			cont = <p>{data.text}</p>
		} else {
			cont = <p>Malformed Column Content</p>
		}
		return(  
			<Col xs={data.xs}>{cont}</Col>
		);
   }
}

export default LessonCol;