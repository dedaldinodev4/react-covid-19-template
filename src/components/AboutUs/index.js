import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../styles/';
import {AboutSection, AboutContent, Image} from './styled';
import { motion } from 'framer-motion';
import { btnVariants } from '../../utils/motionAnimate';


const AboutUs = (props) => { 
 
    return(
        <AboutSection>
            <Container className="container">
                <AboutContent className="about-content">
                    <div>
                        <Image/>
                    </div>

                    <div>
                        <h2>{props.data.title}</h2>
                        <p>{props.data.paragraph}</p>
                        <Link to="/about">
                            <motion.button className="btnPrimary"
                                variants={btnVariants}
                                whileHover="hover"
                            >Read More</motion.button>
                        </Link>
                    </div>
                </AboutContent>
            </Container>
        </AboutSection>

    );
}

export default AboutUs;