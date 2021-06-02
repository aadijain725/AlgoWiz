import './css/NavBar.css';
import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';

/**
 * Navbar component, for now simply renders AlgoWiz text and link to 
 * application root
 */
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