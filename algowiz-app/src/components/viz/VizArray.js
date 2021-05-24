import React from 'react';
import { motion, AnimateSharedLayout } from "framer-motion";
import VizRect from './VizRect';

const VizArray = (props) => {
	console.log(props)
	return (
		<AnimateSharedLayout>
		<motion.ul layout>
			{props.arr.map(item => {
				return <VizRect id={item}/>
			})}
		</motion.ul>
		</AnimateSharedLayout>
	);
}

export default VizArray;