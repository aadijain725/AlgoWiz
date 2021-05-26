import React from 'react';
import { motion } from "framer-motion";

const VizSelectionRect = (props) => {

	return (
		<div style={{textAlign:'center'}}>
			{props.isIndex && (
				<motion.div layoutId='indexArrow' id='indexArrow'>
					<p style={{textAlign:'center'}}>idx</p>
					<i className='fa fa-chevron-down'/>
				</motion.div>
			)}
			{props.isMin && (
				<motion.i layoutId='minArrow' id='minArrow'>
					<p style={{textAlign:'center'}}>min</p>
					<i className='fa fa-chevron-down'/>
				</motion.i> 
			)}
			<motion.div className='rec' layout style={{
				height:`${props.data.v + 1}rem`, 
				backgroundColor:`hsl(${props.data.c}, 100%, 50%)`
			}}>
				<p>{props.data.v}</p>
			</motion.div>
		</div>
	);
}

export default VizSelectionRect;