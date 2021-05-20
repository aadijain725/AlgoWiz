import './viz.css';
import React from 'react';
// import { useState } from "react"; // for testing framer motion
import {Row, Col, Button} from 'react-bootstrap';
import VizArray from './VizArray';
import VizRect from './VizRect';
import { motion, AnimateSharedLayout } from "framer-motion";

/**
 * This component is the root for all Visualizers.
 * Contains the UI common to all versions.
 * TODO: May need to be refactored in the future 
 */
export class VizRoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {it : [1, 2, 3, 4, 5]}
    }

    // Render for root component
    render() {
        return(
            <>
            <Row className='vizRow'>
            <Col xs='3' >
                <p>left</p>
            </Col>
            <Col xs='6' className='text-center justify-content-center vizRow'>
            <AnimateSharedLayout>
            <motion.div className='array' layout>
                {this.state.it.map(item => (
                    <VizRect key={item} s={item}/>
                ))}
            </motion.div>
            </AnimateSharedLayout>
            </Col>
            
            <Col xs='3' >
                <p>right</p>
            </Col>
            </Row>
            <Row className='vizRow'>
                <Col xs='12' className='text-center justify-content-centers'>
                    <Button variant='primary' className='round tst'><i className="fa fa-undo" /></Button>
                    <Button variant='primary' className='round'><i className="fa fa-play" /></Button>
                    <Button variant='primary' className='round'><i className="fa fa-pause" /></Button>
                    <Button variant='primary' 
                        onClick={()=> {
                            let arr = this.state.it;
                            let last = arr.pop();
                            arr.splice(0, 0, last);
                            this.setState({it:arr});
                        }}
                        className='round'><i className="fa fa-step-forward" /></Button>
                </Col>
            </Row>
            </>
        )
    }
}


export default VizRoot;