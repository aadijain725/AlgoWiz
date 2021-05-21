import React from 'react';
import { motion, AnimateSharedLayout } from "framer-motion";
import { Col } from 'react-bootstrap';
import VizArray from './VizArray';
import VizRect from './VizRect';

export class VizSelectionSort extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			default: [3, 2, 5, 1, 4],
			current: [3, 2, 5, 1, 4]
		}
	}

	reset = () => {
		console.log('pressed reset');
		// TODO: shuffle contents instead?
		this.setState({
			current: this.state.default
		})
	}

	play = () =>  {
		console.log('pressed play');
	}

	pause = () => {
		console.log('pressed pause');
	}

	step = () => {
		console.log('pressed step');
		// move around the array
		this.setState({
			current: [1,2,3,4,5]
		})
	}

	render() {
		return(
			<>
				<	Col xs='3' ><p>left</p></Col>
				<Col xs='6' className='text-center justify-content-center vizRow'>
					<AnimateSharedLayout>
						<motion.div className='array' layout>
							{this.state.current.map(item => (
									<VizRect key={item} s={item}/>
							))}
						</motion.div>
					</AnimateSharedLayout>
				</Col>
				<Col xs='3' ><p>right</p></Col>
			</>
		);
	}
}

export default VizSelectionSort;
