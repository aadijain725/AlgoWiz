import React from 'react';
import {Link} from 'react-router-dom';
import './css/NavBar.css';
import {Nav, Navbar} from 'react-bootstrap';

export class NavBar extends React.Component {
    render() {
        return(  
            <Navbar id='nav' className='px-5'>
                <Nav.Item><Link to='/' id="navLogo">
                AlgoWiz
                </Link></Nav.Item>
            </Navbar>
        );
    }
}

export default NavBar;