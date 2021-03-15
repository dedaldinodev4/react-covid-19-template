import React from 'react';

import { Container, BtnPrimary} from '../styles/';
import { Section, Content, Form, Input, TxtArea, Icons} from './styled';



const Contact = () => {

    return (
        <React.Fragment>
            <Section>
                <Container className="container">
                    <Content className="contact-content">
                        <div className="touch">
                            <h3>Get In Touch</h3>
                            <Form>
                                <Input 
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                /><br/>
                                <Input 
                                    type="email"
                                    name="email"
                                    placeholder="Your E-mail"
                                /><br/>
                                <Input 
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                /><br/>
                                <TxtArea
                                name="message"
                                placeholder="Your Message"
                                ></TxtArea><br/><br />

                               
                                
                            
                                <BtnPrimary>Send Message</BtnPrimary>
                            </Form>
                        </div>

                        <div>
                            <h3>Social Medias</h3><br/>
                            <Icons>
                                <img src="./assets/images/icons/facebook.png" alt="facebook"/>
                                <h4>facebook/covid-pandemic19</h4>
                            </Icons>
                            <Icons>
                                <img src="./assets/images/icons/instagram.png" alt="instagram"/>
                                <h4>@covid_pandemic19angolan</h4>
                            </Icons>
                            <Icons>
                                <img src="./assets/images/icons/twitter.png" alt="twitter"/>
                                <h4>@pandemic_covid19</h4>
                            </Icons>
                            <Icons>
                                <img src="./assets/images/icons/google.png" alt="google"/>
                                <h4>covid-pandemic19</h4>
                            </Icons>
                        </div>
                    </Content>
                </Container>
            </Section>
        </React.Fragment>
    );

};


export default Contact;