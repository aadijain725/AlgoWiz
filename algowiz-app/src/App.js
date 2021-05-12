// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Navbar from './components/NavBar';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import LessonPage from './components/LessonPage';
import Gutter from './components/Gutter';

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Navbar/> 
			<Container fluid h-100>
				<Row h-100><Gutter/>
				<Col xs='10' h-100 id='appBody'>
					<Switch>
						<Route exact path='/'>
							<HomePage/>
						</Route>
						<Route path='/lesson/:lessonID'>
							<LessonPage/>
						</Route>
						<Route path='/quiz/:quizID'>
							<QuizPage/>
						</Route>
						<Route path='*'>
							<h2>404 Bad Route</h2>
						</Route>
					</Switch>
				</Col>
				<Gutter/>
				</Row>
			</Container>
		</Router>
	);
}

export default App;
