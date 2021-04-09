import React from 'react';
import {Wrapper} from './styled';
import Navbar from '../Menu/';

const Header = (props) => {

    return(
        <Wrapper>
            <Navbar main = {props.main.menu}/>
        </Wrapper>
    );
}

export default Header;