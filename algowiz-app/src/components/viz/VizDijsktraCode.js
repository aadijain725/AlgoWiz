import React from 'react';
import VizDijkstraCodeLine from './VizDijkstraCodeLine';

const VizDisjktraCode = (props) => {
	const line = props.step;

	return (
		<ul id='vizDijkstraCode' className='fa-ul'>
			<VizDijkstraCodeLine isSelected={line === 0}>{'Initialize source node distance to 0 and all other node distances to INIFINITY'} </VizDijkstraCodeLine>
			<VizDijkstraCodeLine isSelected={line === 1}>{'Get the Node with LEAST DISTANCE that has not been explored'}</VizDijkstraCodeLine>
			<VizDijkstraCodeLine isSelected={line === 2}>{'Update the distances of neighbors of ACTIVE NODE if possible'}</VizDijkstraCodeLine>
		</ul>
	);
}

export default VizDisjktraCode;