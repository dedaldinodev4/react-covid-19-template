import React from 'react';

import { Container, Form, 
    Input, TxtArea, Icons} from '../styles';
import { Section, Content} from './styled';
import { motion } from 'framer-motion';
import { btnVariants } from '../../utils/motionAnimate';



const ContactUs = (props) => {

    return (
        <React.Fragment>
            <Section>
                <Container className="container">
                    <Content className="contact-content">
                        <div className="touch">
                            <h3>{props.data.touch.title}</h3>
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

                                <motion.button className="btnPrimary"
                                    variants={btnVariants}
                                    whileHover="hover"
                                >
                                    Send Message
                                </motion.button>
                            </Form>
                        </div>

                        <div>
                            <h3>{props.data.social.title}</h3><br/>
                            <Icons>
                                <img src={props.data.social.icons.facebook.icon} alt="facebook"/>
                                <h4>{props.data.social.icons.facebook.name}</h4>
                            </Icons>
                            <Icons>
                                <img src={props.data.social.icons.instagram.icon}alt="instagram"/>
                                <h4>{props.data.social.icons.instagram.name}</h4>
                            </Icons>
                            <Icons>
                                <img src={props.data.social.icons.twitter.icon} alt="twitter"/>
                                <h4>{props.data.social.icons.twitter.name}</h4>
                            </Icons>
                            <Icons>
                                <img src={props.data.social.icons.google.icon} alt="google"/>
                                <h4>{props.data.social.icons.google.name}</h4>
                            </Icons>
                        </div>
                    </Content>
                </Container>
            </Section>
        </React.Fragment>
    );

};


export default ContactUs;