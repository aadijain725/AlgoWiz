// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import Navbar from './components/NavBar';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import LessonPage from './components/LessonPage'

function App() {
	return (
		<Router>
			<Navbar/> 
			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>
			<Switch>
				<Route exact path="/">
					<HomePage/>
				</Route>
				<Route path="/lesson">
					<LessonPage/>
				</Route>
				<Route path="/quiz">
					<QuizPage/>
				</Route>
				<Route path="*">
					<h2>Bad Route</h2>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
