import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Row, Col, Container, Button} from 'react-bootstrap';
import LessonRow from './lessonComps/LessonRow';
export class LessonPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessonData: null
        }
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        // TODO: make async fetch here using 
        this.getData();
    }

    getData() {
        fetch('data.json',{
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
    }

    render() {
        let content;
        let data = this.state.lessonData;
        if (this.state.lessonData == null) {
            content = <p>Loading...</p>;
        } else {
            content = 
            <div id='lessonContent'>
                <Row><Col>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                </Col></Row>
                {data.rows.map((row, i) => {
                    return <LessonRow key={i} cols={row.cols}/>
                })}
                <Row className='my-2'><Col className='text-center'>
                    <Link to={`/quiz/${data.quizID}`}><Button variant='primary'>Start Quiz</Button></Link>
                </Col></Row>
            </div>;
        }

        return(
            <div id='lesson'>
                <Container fluid>
                    {content}
                </Container>
            </div>
        )
    }
}

export default withRouter(LessonPage);