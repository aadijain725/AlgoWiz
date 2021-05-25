import React from 'react';


const VizCodeLine = ({isSelected = false, children}) => {
	console.log(isSelected)
	return (
			<li>
				{isSelected && <i className='fa-li fa fa-chevron-right'/>}
				<p>{children}</p>
			</li>
	);
}

export default VizCodeLine;