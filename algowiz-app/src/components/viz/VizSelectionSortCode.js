import React from 'react';
import VizCodeLine from './VizCodeLine';

const VizSelectionSortCode = (props) => {
	const line = props.step % 3;
	console.log(line);

	return (
		<ul id='vizCode' className='fa-ul'>
			<VizCodeLine isSelected={line === 2}>{'move the index of the unsorted subarray'} </VizCodeLine>
			<VizCodeLine isSelected={line === 0}>{'find the minimum element in unsorted array'}</VizCodeLine>
			<VizCodeLine isSelected={line === 1}>{'swap the found minimum element with the first element'}</VizCodeLine>
		</ul>
	);


}

export default VizSelectionSortCode;