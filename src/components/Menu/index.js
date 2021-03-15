import React from 'react';
import {Nav} from './styled';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <Nav>
            <ul className="list-group">
                <li className="list-group-item">
                <Link to="/">
                    <a hre="#home" id="home">
                        Home
                    </a>
                </Link>
                </li>
                <li className="list-group-item">
                    <Link to="/infection">
                        <a id="infection">
                            Infections
                        </a>
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link to="/dash" >
                        <a id="dash">
                            Corona Dash
                        </a>
                    </Link>
                    
                </li>
                <li className="list-group-item">
                    <Link to="/about">
                        <a id="#about">
                        About
                        </a>
                    </Link>
                </li>
            </ul>
        </Nav>
    );
}

export default Navbar;