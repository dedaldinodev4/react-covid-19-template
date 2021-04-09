import React from 'react';

import { Container, BtnPrimary } from '../styles/';
import {AboutSection, AboutContent, Image} from './styled';

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

                        <BtnPrimary>Read More</BtnPrimary>
                    </div>
                </AboutContent>
            </Container>
        </AboutSection>

    );
}

export default AboutUs;