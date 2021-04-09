import React from 'react';
import {Nav} from './styled';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    return (
        <Nav>
            <ul className="list-group">
                <li className="list-group-item">
                <Link to="/">
                    <a hre="#home" id="home">
                        {props.main[0]}
                    </a>
                </Link>
                </li>
                <li className="list-group-item">
                    <Link to="/infection">
                        <a id="infection">
                            {props.main[1]}
                        </a>
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link to="/dash" >
                        <a id="dash">
                            {props.main[2]}
                        </a>
                    </Link>
                    
                </li>
                <li className="list-group-item">
                    <Link to="/about">
                        <a id="about">
                            {props.main[3]}
                        </a>
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link to="/contact">
                        <a id="contact">
                            {props.main[4]}
                        </a>
                    </Link>
                </li>
            </ul>
        </Nav>
    );
}

export default Navbar;