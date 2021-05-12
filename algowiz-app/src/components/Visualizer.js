import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';

export class Visualizer extends React.Component {
    render() {
        return(
        <Row>
            <Col className='justify-content-center'>
                {/** Placeholder image for visualizer */}
                <Image 
                    style={{margin:'0 auto', display:'block'}}
                    fluid
                    src={this.props.imgSrc} 
                    alt='Placeholder Viz'
                />
            </Col>
        </Row>
        )
    }
}

export default Visualizer;