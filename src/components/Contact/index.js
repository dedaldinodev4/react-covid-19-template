import React from 'react';

import { Container, BtnPrimary} from '../styles/';
import { Section, Content, Input, TxtArea } from './styled';

const Contact = () => {

    return (
        <React.Fragment>
            <Section>
                <Container className="container">
                    <Content className="contact-content">
                        <div>
                            <h3>Get In Touch</h3>
                            <form>
                                <Input 
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                />
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
                                ></TxtArea><br/>
                            
                                <BtnPrimary>Send Message</BtnPrimary>
                            </form>
                        </div>

                        <div>
                            <h3>Social Medias</h3>
                        </div>
                    </Content>
                </Container>
            </Section>
        </React.Fragment>
    );

};


export default Contact;