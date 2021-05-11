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
                    src='https://blog.penjee.com/wp-content/uploads/2015/04/binary-and-linear-search-animations.gif' 
                    alt='Placeholder Viz'
                />
            </Col>
        </Row>
        )
    }
}

export default Visualizer;