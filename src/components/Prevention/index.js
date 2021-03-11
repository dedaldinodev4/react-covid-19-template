import React from 'react';

import { Container, BtnPrimary} from '../styles/';
import { Section, Content, Item } from './styled';


const Prevention = () => {

    return (
        <Section>
            <Container className="container">
                <h2>Preventions</h2>
                <p>Our preventions on   coronavirus<br/>
                Cases and death great everday someplace.</p>
                <Content className="services-content">
                    <div>
                        <Item>
                            <img 
                                src="./assets/images/icons/Hands-Icon.png" alt="hand" 
                            />
                            <h3>Wash Hands</h3>
                            <p>wash your Hands
                                <br/>all time of day for there is life<br/>
                                You will do all days always of course.
                            </p>
                            <BtnPrimary>Read More</BtnPrimary>
                        </Item>
                    </div>

                    <div>
                        <Item>
                            <img 
                                src="./assets/images/icons/Mask-Icon.png" alt="mask" 
                            />
                            <h3>Use Mask</h3>
                            <p>wash your Hands
                                <br/>all time of day for there is life<br/>
                                You will do all days always of course.
                            </p>
                            <BtnPrimary>Read More</BtnPrimary>
                        </Item>
                    </div>
                        
                    <div>
                        <Item>
                            <img 
                                src="./assets/images/icons/Distance-Icon.png" alt="social" 
                            />
                            <h3>Social Distance</h3>
                            <p>wash your Hands
                                <br/>all time of day for there is life<br/>
                                You will do all days always of course.
                            </p>
                            <BtnPrimary>Read More</BtnPrimary>
                        </Item>
                    </div>
                </Content>

            </Container>
        </Section>

    );
}

export default Prevention;