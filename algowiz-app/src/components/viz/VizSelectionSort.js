import React from 'react';
import { motion, AnimateSharedLayout } from "framer-motion";
import { Col } from 'react-bootstrap';
import VizRect from './VizRect';

export class VizSelectionSort extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			default: [3, 2, 5, 1, 4],
			current: [3, 2, 5, 1, 4],
			i: 0,
			j: 0
		}
	}

	reset = () => {
		console.log('pressed reset');
		// TODO: shuffle contents instead?
		// TODO: reset messes up default?
		this.setState({
			current: this.state.default,
			i: 0,
			j: 0
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
		let i = this.state.i;
		let j = this.state.j;
		let min = 0;
		let arr = this.state.current;
  
    // One by one move boundary of unsorted subarray 
    if (i < arr.length - 1) { 
        // Find the minimum element in unsorted array 
        min = i; 
        for (j = i + 1; j < arr.length; j++) {
        	if (arr[j] < arr[min]) {
            min = j; 
					}
				}
        // Swap the found minimum element with the first element 
				let first = arr[i];
				arr[i] = arr[min];
				arr[min] = first;
				i++;
    } 
		// move around the array
		this.setState({
			i,
			j,
			current: arr
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
