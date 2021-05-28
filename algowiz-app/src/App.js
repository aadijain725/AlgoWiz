import './App.css';
import React from 'react';
import {
	// BrowserRouter as Router, using Hash Router for github pages
	HashRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Navbar from './components/NavBar';
import HomePage from './components/homePageComps/HomePage';
import QuizPage from './components/QuizPage';
import LessonPage from './components/lessonComps/LessonPage';
import Gutter from './components/Gutter';

/**
 * Handles the routing for the frontend. For static sites such as 
 * Github pages, use a HashRouter. In the future url could be prettified 
 * using a BrowserRouter instead. 
 * @returns JSX Router
 */
function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Navbar/> 
			<Container fluid >
				<Row><Gutter/>
				<Col xs='10' id='appBody'>
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
