import React from 'react';
import { Section } from './styled';


const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <Section>
                <a href="#">
                © {year} <span>Code Ink </span>  All right reserved.
                </a>

            </Section>
        </>

    );
}

export default Footer;