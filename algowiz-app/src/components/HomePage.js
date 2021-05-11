import React from "react";
import HomePageTopicsTabs from "./HomePageTopicsTabs";
import { HomePageIntroduction } from "./HomePageIntroduction";
import { Container, Row, Col } from "react-bootstrap";

export class HomePage extends React.Component {
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
