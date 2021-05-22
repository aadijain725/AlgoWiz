import React from 'react';
import { motion } from "framer-motion";

const VizRect = (props) => {

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
			<motion.div className='rec' layout style={{height:`${props.s}rem`}} >
				<p>{props.s}</p>
			</motion.div>
		</div>
	);
}

export default VizRect;