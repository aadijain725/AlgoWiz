import React from 'react';
import VizCodeLine from './VizCodeLine';

const VizCode = (props) => {
	const line = props.step;

	// return (
	// 	<ul id='vizCode' className='fa-ul'>
	// 		<VizCodeLine isSelected={line === 2}>{'move the index of the unsorted subarray'} </VizCodeLine>
	// 		<VizCodeLine isSelected={line === 0}>{'find the minimum element in unsorted array'}</VizCodeLine>
	// 		<VizCodeLine isSelected={line === 1}>{'swap the found minimum element with the first element'}</VizCodeLine>
	// 	</ul>
	// );

	return (
		<ul id='vizCode' className='fa-ul'>
			<li><h6>start = {props.start}</h6></li>
			<li><h6>end = {props.end}</h6></li>
			<li><h6>mid = {props.mid}</h6></li>
			<li><h6>target = {props.target}</h6></li>
			<VizCodeLine isSelected={line === 0}>{`Compare Mid ${props.mid} \n and target: ${props.target}`}</VizCodeLine>
			<VizCodeLine isSelected={line === 1}>{'Filter Search Area'}</VizCodeLine>
			<VizCodeLine isSelected={line === 2}>{'Target found return'} </VizCodeLine>
		</ul>
	);
}

export default VizCode;