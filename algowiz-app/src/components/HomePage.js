import React from 'react';
import HomePageTopics from './HomePageTopics';
import { HomePageIntroduction } from './HomePageIntroduction';
import { Container, Row, Col } from 'react-bootstrap';

// Import the API helper class
import APIHelper from './helpers/APIHelper';

export class HomePage extends React.Component {
    // Older style React constructor
    constructor(props) {
        super(props);
        this.state = {
            homeData: null
        }
    }

    componentDidMount() {
        // Set state from backend using APIHelper function
        APIHelper('home')
        .then(homeData => {
            this.setState({homeData})
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <Container fluid>
                <Row><Col xs='auto'>
                    <HomePageIntroduction />
                </Col></Row>
                <Row><Col xs='auto'>
                    <HomePageTopics/>
                </Col></Row>
            </Container>
        );
    }
}

export default HomePage;
