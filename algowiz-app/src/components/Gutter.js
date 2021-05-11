import React from 'react';
import {Col} from 'react-bootstrap';

/**
 * This Class should only be used as a gutter 
 * (bootstrap column) inside a bootstrap <Row> component
 */

export class Gutter extends React.Component {
	render() {
			return(
				<Col xs='1' className='gutter'></Col>
			);
	}
}

export default Gutter;