import './viz.css';
import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
// TODO: find way to import specific engines
import VizSelectionSort from './VizSelectionSort';

/**
 * This component is the root for all Visualizers.
 * Contains the UI common to all versions.
 * TODO: May need to be refactored in the future 
 */
export class VizRoot extends React.Component {
    constructor(props) {
        super(props);
        // create a ref to call playback on the viz engine
        this.engineRef = React.createRef();
    }

    // Render for root component
    render() {
        return(
            <>
            <VizSelectionSort ref={this.engineRef}/>
            <Row className='vizRow'>
                <Col xs='12' className='text-center justify-content-centers'>
                    <Button variant='primary' 
                        onClick={()=> this.engineRef.current.reset()} className='round'>
                        <i className="fa fa-undo" />
                        </Button>
                    <Button variant='primary' 
                        onClick={()=> this.engineRef.current.play()} className='round'>
                        <i className="fa fa-play" />
                    </Button>
                    <Button variant='primary' 
                        onClick={()=> this.engineRef.current.pause()} className='round'>
                        <i className="fa fa-pause" />
                    </Button>
                    <Button variant='primary' 
                        onClick={()=> this.engineRef.current.step()} className='round'>
                        <i className="fa fa-step-forward" />
                    </Button>
                </Col>
            </Row>
            </>
        )
    }
}


export default VizRoot;