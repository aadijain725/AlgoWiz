import React from 'react';
import HomePageTopics from './HomePageTopics';
import { HomePageIntroduction } from './HomePageIntroduction';
import { Container, Row, Col } from 'react-bootstrap';

// Import the API helper class
import APIHelper from '../helpers/APIHelper';

// Import the HomePageParser
import HomePageParser from "../testJson/HomePageParser.js";

/**
 * Homepage builds from fetched data
 */


export class HomePage extends React.Component {
    // Older style React constructor
    constructor(props) {
        super(props);
        this.state = {
            homeData: null,
            topics: null
        }
    }

    /**
     * React Lifecycle method, only fetch once when the component loads. 
     * Saves data into state
     */
    componentDidMount() {
        APIHelper('home')
        .then(homeData => {
            // if fetch successful update the staate
            this.setState({ homeData: homeData })
        }).then(() => {
            // Use the parser to organize the data
            var parsedData = new HomePageParser(this.state.homeData, null); 
            this.setState({
                topics: parsedData.getTopicNames()
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        // If no data yet render a loading message
        // TODO: make a nice loading component
        if (this.state.homeData == null || this.state.topics == null) {
            return (<p>Loading...</p>)
        } else {
            return (
                <Container fluid>
                    <Row>
                        <Col xs='auto'>
                            <HomePageIntroduction />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='auto'>
                            <HomePageTopics data={this.state.homeData} topics={this.state.topics} />
                        </Col>
                    </Row>                
                </Container>
            );
        }
    }
}

export default HomePage;
