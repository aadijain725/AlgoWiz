import React from 'react';
import { motion } from "framer-motion";

const VizRect = (props) => {

	return <motion.div className='rec' style={{height:`${props.s}rem`}} layout><p>{props.s}</p></motion.div>;
}

export default VizRect;