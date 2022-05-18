import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MenuVariants } from '../../../utils/motionAnimate'

const Navbar = (props) => {

    const { home, 
        infection, 
        dash,
        about,
        contact 
    } = props.items.menu

    return (
        <motion.nav 
        variants={MenuVariants}
        exit="hidden"
        className="menu" id="navbar">
            <ul className="menu">
                <li className="list-group-item">
                <Link to="/">
                    <a href="#home" id="home">
                        {home}
                    </a>
                </Link>
                </li>
                <li className="list-group-item">
                    <Link to="/infection">
                        <a href="#infection" id="infection">
                            {infection}
                        </a>
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link to="/dash">
                        <a href="#dash" id="dash">
                            {dash}
                        </a>
                    </Link>
                    
                </li>
                <li className="list-group-item">
                    <Link to="/about">
                        <a href="#about" id="about">
                            {about}
                        </a>
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link to="/contact">
                        <a href="#contact" id="contact">
                            {contact}
                        </a>
                    </Link>
                </li>
            </ul>
            <a href="#covid" id="toggle-btn">Covid</a>
        </motion.nav>
    );
}

export default Navbar;