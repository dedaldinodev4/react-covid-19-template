import React from 'react';
import Navbar from './partials/navbar'

const Header = (props) => {

    return(
        <Navbar items = {props.items}/>
    );
}

export default Header;