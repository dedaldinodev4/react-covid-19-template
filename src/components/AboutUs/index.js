import React from 'react';

import { Container, BtnPrimary } from '../styles/';
import {AboutSection, AboutContent, Image} from './styled';

const AboutUs = () => {

    return(
        <AboutSection>
            <Container className="container">
                <AboutContent className="about-content">
                    <div>
                        <Image/>
                    </div>

                    <div>
                        <h2>About Us</h2>
                        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        <BtnPrimary>Read More</BtnPrimary>
                    </div>
                </AboutContent>
            </Container>
        </AboutSection>

    );
}

export default AboutUs;