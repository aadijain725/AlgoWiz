
import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Row, Col, Container, Button} from 'react-bootstrap';
import APIHelper from '../helpers/APIHelper';
import LessonRow from './LessonRow';
import VizRoot from '../viz/VizRoot'


/** Root component for a lesson page */
export class LessonPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessonData: null,
        }
    }

    /**
     * React Lifecycle method. Only call fetch once. 
     * Fetches data based on React URL params
    */
    componentDidMount() {
        // build the route based on React URL params
        const url = `lesson/${this.props.match.params.lessonID}`
        APIHelper(url)
        .then(lessonData => {
            this.setState({ lessonData })
        })
        .catch(err => {
            console.log('Something went wrong in Lesson Fetch');
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
            // Build page based on data from api request
            content = 
            <Container fluid id='lessonContent'>
                <Row><Col>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                </Col></Row>
                {data.rows.map((row, i) => {
                    // create a row for each element in data.rows array
                    // and pass them column data to render
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