import React from 'react';
import {Link} from 'react-router-dom';

export class NavBar extends React.Component {
    render() {
        return(
            <div id="nav">
                <h2>This is the Navbar</h2>
                <Link to="/">Home</Link>
                <Link to="/quiz">Quiz</Link>
                <Link to="/lesson">Lesson</Link>
            </div>
        );
    }
}

export default NavBar;