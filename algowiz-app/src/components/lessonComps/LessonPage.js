
import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Row, Col, Container, Button} from 'react-bootstrap';
import { Bar } from "react-chartjs-2";
import LessonRow from './LessonRow';
import VizRoot from '../viz/VizRoot'

// Variables for Binary Search 
const userInput = [1,2,3,4,5,6,7,8,9];
const baseColor = "rgba(255, 218, 128,0.4)";
const target = 3;
 

export class LessonPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessonData: null,
            barData : {
                labels: userInput,
                datasets: [
                {
                    label: 'Values',
                    data: userInput,
                    backgroundColor: baseColor,
                }
                ],
                borderWidth: 100
                }
        }
        // TODO: once local backend serves lesson properly then change this
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        // TODO: change to APIHelper once backend fixed
        this.getData();
    }

    // TODO: once backend fixed this can be replaced with APIHelper
    getData() {
        fetch(`./lesson/${this.props.match.params.lessonID}`, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(lessonData => {
            this.setState({
                lessonData
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        let content;
        const data = this.state.lessonData;
        // conditionally render loading bar or content
        if (this.state.lessonData == null) {
            content = 
            <p>Loading...</p>;
        } else {
            content = 
            <Container fluid id='lessonContent'>
                <Row><Col>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                </Col></Row>
                {data.rows.map((row, i) => {
                    // create a row for each element in array and pass them params
                    return <LessonRow key={i} cols={row.cols}/>
                })}
                <Row className='justify-content-md-center'><VizRoot id={data.lessonID}/></Row>
                <Row className='my-2'><Col className='text-center'>
                    <Link to={`/quiz/${data.quizID}`}><Button variant='primary'>Start Quiz</Button></Link>
                </Col></Row>
            </Container>;
        }

        return(
            <Container fluid id='lesson'>
                {content}
            </Container>
        )
    }
}

export default withRouter(LessonPage);