import React from 'react';
import {Col, Image} from 'react-bootstrap';
/**
 * Column Component. is passed props.content from parent row component
 */
export class LessonCol extends React.Component {
  render() {
		// conditionally render different html elements based on json contents
		// TODO: use a better system to build html elements from json?
		const data = this.props.content;
		let cont;
		if (data.type === "img") {
			cont = <Image src={data.src} alt={data.alt} fluid/>
		} else if (data.type === "p") { 
			cont = <p>{data.text}</p>
		} else if (data.type === "h2") {
			cont = <h2>{data.text}</h2>
		}else {
			cont = <p>Malformed Column Content</p>
		}
		return(  
			<Col xs={data.xs}>{cont}</Col>
		);
   }
}

export default LessonCol;