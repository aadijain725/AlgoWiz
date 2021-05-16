import React from "react";
import HomePageTopicsTabs from "./HomePageTopicsTabs";
import { HomePageIntroduction } from "./HomePageIntroduction";
import { Container, Row, Col } from "react-bootstrap";

export class HomePage extends React.Component {
    // Older style React constructions
    constructor(props) {
        super(props);
        this.state = {
            homeData: null
        }
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    // Fetch and parse homepage data into state
    getData() {
        // for browser router use this instead
        fetch(`http://localhost:8080/api/v1/home`, {
            credentials:'include',
            method: 'GET',
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
        })
        .then(response => {
            // console.log(response);
            return response.json()
        })
        .then(homeData => {
            // Save data to state
            this.setState({homeData});
        })
        .catch(err => {
            console.log(err);
        })
    }
    render() {
        return (
            <Container fluid>
                <Row><Col auto>
                    <HomePageIntroduction />
                </Col></Row>
                <Row><Col auto>
                    <HomePageTopicsTabs />
                </Col></Row>
            </Container>
        );
    }
}

export default HomePage;
