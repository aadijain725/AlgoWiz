import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import './viz.css';
/**
 * This component is the root for all Visualizers.
 * Contains the UI common to all versions.
 * TODO: May need to be refactored in the future 
 */
export class VizRoot extends React.Component {
    render() {
        return(
            <>
            <Row style={{height:'30rem'}} className='vizRow'>
            <Col xs='12' className='text-center justify-content-center vizRow'></Col>
            </Row>
            <Row className='vizRow'>
                <Col xs='12' className='text-center justify-content-centers'>
                
                        <Button variant='primary' className='round tst'><i className="fa fa-undo" /></Button>
                        <Button variant='primary' className='round'><i className="fa fa-play" /></Button>
                        <Button variant='primary' className='round'><i className="fa fa-pause" /></Button>
                        <Button variant='primary' className='round'><i className="fa fa-step-forward" /></Button>
                </Col>
            </Row>
            </>
        )
    }
}

export default VizRoot;