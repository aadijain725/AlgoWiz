import React from 'react';
import HomePageTopics from './HomePageTopics';
import { HomePageIntroduction } from './HomePageIntroduction';
import { Container, Row, Col } from 'react-bootstrap';

// Import the API helper class
import APIHelper from '../helpers/APIHelper';

// Import the HomePageParser
import HomePageParser from "../testJson/HomePageParser.js";



export class HomePage extends React.Component {
    // Older style React constructor
    constructor(props) {
        super(props);
        this.state = {
            homeData: null,
            topics: null
        }
    }

    componentDidMount() {
        // TODO: change to APIHelper once backend fixed


        APIHelper('home')
            .then(homeData => {
                this.setState({ homeData: homeData })
            }).then(() => {
                var parsedData = new HomePageParser(this.state.homeData, null); // there is no topic to be found in the initial stage
                this.setState({
                    topics: parsedData.getTopicNames()
                })
            })
            .catch(err => {
                console.log(err);
            })

    }



    render() {
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
