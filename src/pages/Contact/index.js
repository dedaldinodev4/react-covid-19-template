import React, {useState, useEffect} from 'react'

import Header from '../../components/Header';
import Intro from '../../components/Intro';
import Footer from '../../components/Footer';
import {SectionDefault, Grid, Container
    , Form, Input, TxtArea
    ,Icons} from '../../components/styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faMailBulk, faPhoneSquare} from '@fortawesome/free-solid-svg-icons';
import {DataContext} from '../../App';
import Loader from '../../components/Loader';
import {motion} from 'framer-motion';


const contactVariants = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            durantion: 0.5,
            delay: 0.5
        }
    },
 
};

const btnVariants = {
    hover: { 
        scale: 1.1,
        boxShadow: "0px 0px 8px rgb(241,14,70)",
        transition: {
            duration: 0.3,
            yoyo: Infinity
        }
    }
}

const Contact = () => {
    const [isDoneLoader, setIsDoneLoader] = useState(true);

    useEffect(() => {
        setInterval(() =>{
            setIsDoneLoader(false);
        }, 1000)
    }, [isDoneLoader]);

    return (

        <>
            {
                isDoneLoader ? <Loader />
                :
                <motion.div className="contact"
                    variants={contactVariants}
                    exit="hidden"
                >
                    <DataContext.Consumer>
                        {
                            data => {
                                return (
                                        <div>
                                            <Header main={data.Header} />
                                            <Intro data={data.Intro.contact} />
                                            <SectionDefault>
                                                <Container className="container">
                                                    <Grid gridsize={2} text={"center"} className="contact-content">
                                                        <div className="left">
                                                        <h3>Get in touch</h3>
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
                                                            >Send Message</motion.button>
                                                        </Form>
                                                    </div>
                                                        <div className="right">
                                                            <h3>Contact Information</h3>
                                                            <div className="info-contents">
                                                                <Icons>
                                                                    <h3>
                                                                        <FontAwesomeIcon icon={faHome} />
                                                                        &nbsp;&nbsp;
                                                                        198 West 21th Street  
                                                                        
                                                                    </h3>
                                                                </Icons>
                                                                <Icons>
                                                                    <h3>
                                                                        <FontAwesomeIcon icon={faMailBulk} />
                                                                        &nbsp;&nbsp;
                                                                        codeInk@gmail.com 
                                                                        
                                                                    </h3>
                                                                </Icons>
                                                                <Icons>
                                                                    <h3>
                                                                        <FontAwesomeIcon icon={faPhoneSquare} />
                                                                        &nbsp;&nbsp; +(24) 4923 5235 595 6  
                                                                        
                                                                    </h3>
                                                                </Icons>
                                                            </div>
                                                        </div>
                                                    </Grid>
                                                </Container>
                                            </SectionDefault>
                                            <Footer data={data.Footer} />
                                        </div>
                                    )
                            }
                        }
                    </DataContext.Consumer>
                </motion.div>
            }
        </>
    )
}

export default Contact;
