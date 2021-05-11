import React from "react";
import HomePageTopicsTabs from "./HomePageTopicsTabs";
import { HomePageIntroduction } from "./HomePageIntroduction";
import Result from "./Result";
import { Container } from "react-bootstrap";

export class HomePage extends React.Component {
    render() {
        return (
            <Container>
                <HomePageIntroduction></HomePageIntroduction>
                <HomePageTopicsTabs></HomePageTopicsTabs>
                
            </Container>
        );
    }
}

export default HomePage;
