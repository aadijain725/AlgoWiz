import React from 'react';
import { AnimateSharedLayout } from "framer-motion";
import VizRect from './VizRect';

export class VizSelectionSort extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			default: [3, 2, 5, 1, 4],
			current: [3, 2, 5, 1, 4],
			i: 0,
			j: 0,
			min: 0,
			step: 0
		}
	}

	reset = () => {
		console.log('pressed reset');
		// TODO: shuffle contents instead?
		// TODO: reset messes up default?
		this.setState({
			current: [...this.state.default],
			i: 0,
			j: 0,
			step: 0,
			min: 0
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
		// grab state (never mutate state directly)
		let i = this.state.i;
		let j = this.state.j;
		let min = this.state.min;
		let arr = [...this.state.current];
		
		// Do not step further if done sorting
		if (i >= arr.length - 1) return;

		// Break up the algorithm into steps so we can animate each independently
		switch (this.state.step % 3) {
			case 0:
				// Find the minimum element in unsorted array 
        min = i; 
        for (j = i + 1; j < arr.length; j++) {
        	if (arr[j] < arr[min]) {
            min = j; 
					}
				}
				break;
			case 1:
				// Swap the found minimum element with the first element 
				let first = arr[i];
				arr[i] = arr[min];
				arr[min] = first;
				// change min so the arrow moves with the element
				min = i;
				break;
			case 2:
				// increment i
				i++;
				break;
			default:
				console.log('Something in step function broke.');
		}
		// update the state
		this.setState({
			i,
			j,
			min,
			step: this.state.step + 1,
			current: arr
		})
	}

	render() {
		const st = this.state;
		return(
			<div id='vizEngine'>
				<div style={{width:'15%'}}><p>left</p></div>
				<div style={{width:'70%' }}>
					<p>mid</p>
					{
					<AnimateSharedLayout>
						<div className='array' >
							{this.state.current.map(item => (
									<VizRect 
										key={item} 
										s={item} 
										isIndex={st.current[st.i] === item}
										isMin={st.current[st.min] === item}
									/>
							))}
						</div>
					</AnimateSharedLayout>
							}
				</div>
				<div style={{width:'15%'}}><p>right</p></div>				
			</div>
		);
	}
}

export default VizSelectionSort;
