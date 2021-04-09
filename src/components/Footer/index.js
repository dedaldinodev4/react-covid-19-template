import React from 'react';
import { Section } from './styled';


const Footer = (props) => {

    const year = new Date().getFullYear();

    return (
        <>
            <Section>
                <a href="#">
                © {year} <span>{props.data.company} </span>  {props.data.copyright}
                </a>

            </Section>
        </>

    );
}

export default Footer;