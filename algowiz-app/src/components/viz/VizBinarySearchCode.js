import React from 'react';
import VizCodeLine from './VizCodeLine';

const VizBinarySearchCode = (props) => {
	const line = props.step;

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

export default VizBinarySearchCode;