import React from 'react';
import {Nav} from './styled';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    return (
        <Nav>
            <ul className="list-group">
                <li className="list-group-item">
                <Link to="/">
                    <a href="#home" id="home">
                        {props.main[0]}
                    </a>
                </Link>
                </li>
                <li className="list-group-item">
                    <Link to="/infection">
                        <a href="#infection" id="infection">
                            {props.main[1]}
                        </a>
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link to="/dash">
                        <a href="#dash" id="dash">
                            {props.main[2]}
                        </a>
                    </Link>
                    
                </li>
                <li className="list-group-item">
                    <Link to="/about">
                        <a href="#about" id="about">
                            {props.main[3]}
                        </a>
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link to="/contact">
                        <a href="#contact" id="contact">
                            {props.main[4]}
                        </a>
                    </Link>
                </li>
            </ul>
        </Nav>
    );
}

export default Navbar;