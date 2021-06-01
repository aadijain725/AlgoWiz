import React from 'react';
import { AnimateSharedLayout } from "framer-motion";
import Rect  from './VizSelectionRect';
import VizSelectionSortCode from './VizSelectionSortCode';

export class VizSelectionSort extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			current: [
				{v:3}, {v:2}, {v:5}, {v:1}, {v:4}, {v:6}, {v:9}, {v:8}, {v:7}
			],
			i: 0,
			j: 0,
			min: 0,
			step: 0,
			intervalID: null
		}
	}
	componentDidMount() {
		// Choose random colors for each bar, use H 0-360 in hsv format
		const current = [...this.state.current];
		for (let i = 0; i < current.length; i++) {
			current[i].c = Math.floor(Math.random()*361);
		}
		this.setState({current});
	}

	componentWillUnmount() {
		// if a timer is running cancel it
		this.cancelTimer();
	}

	// On reset, update state with default values and shuffle the array
	reset = () => {
		console.log('pressed reset');
		this.cancelTimer();
		this.setState({
			current: this.shuffle([...this.state.current]),
			i: 0,
			j: 0,
			step: 0,
			min: 0
		})
	}

	// On play state the timer for animation 
	play = () =>  {
		console.log('pressed play');
		// Don't set a new timer if one already exists
		if (this.state.intervalID !== null) return;
		// TODO: check if should call step once first
		let intervalID = setInterval(this.timer, 500);
		this.setState({intervalID});
	}

	// 
	pause = () => {
		console.log('pressed pause');
		this.cancelTimer();
	}

	/** Moves the state up 1 step in the algorithm
	 * 	Returns true if algorithm has completed
	*/
	step = () => {
		console.log('pressed step');
		// do not allow step to be pressed if animation playing
		if (this.state.intervalID === null) this.advanceAlgo();
	}

	advanceAlgo = () => {
		// grab state (never mutate state directly)
		let i = this.state.i;
		let j = this.state.j;
		let min = this.state.min;
		let arr = [...this.state.current];
		
		// Do not step further if done sorting
		if (i >= arr.length - 1) return true;

		// Break up the algorithm into steps so we can animate each independently
		switch (this.state.step % 3) {
			case 0:
				// Find the minimum element in unsorted array 
        min = i; 
        for (j = i + 1; j < arr.length; j++) {
        	if (arr[j].v < arr[min].v) {
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
		return false;
	}

	shuffle = (array) => {
		let currentIndex = array.length, temporaryValue, randomIndex;
	
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
	
			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}

	// timer callback, cancels timer when animation finishes
	timer = () => {
		if (this.advanceAlgo()) {
			this.cancelTimer();
		}
	} 

	// clears the timer and resets state
	cancelTimer = () => {
		if (this.state.intervalID === null) return;
		clearInterval(this.state.intervalID);
		this.setState({intervalID: null});
		console.log('timer canceled');
	}

	render() {
		const st = this.state;
		return(
			<div id='vizSelectSortEngine'>
				<div style={{width:'60%' }}>{
					<AnimateSharedLayout>
						<div className='array' >
							{this.state.current.map(elem => (
								<Rect 
									key={elem.v} 
									data={elem} 
									isIndex={st.current[st.i] === elem}
									isMin={st.current[st.min] === elem}
								/>
							))}
						</div>
					</AnimateSharedLayout>
				}</div>
				<div style={{width:'40%'}}><VizSelectionSortCode step={this.state.step}/></div>				
			</div>
		);
	}
}

export default VizSelectionSort;
