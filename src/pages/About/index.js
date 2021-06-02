import React, {useState, useEffect} from 'react';

import Header from '../../components/Header';
import Intro from '../../components/Intro';
import ContactUs from '../../components/ContactUs'; 
import Footer from '../../components/Footer';
import Whom from '../../components/Whom';
import {DataContext} from '../../App';
import {motion} from 'framer-motion';
import Loader from '../../components/Loader';


const aboutVariants = {
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

const About = () => {
    const [isDoneLoader, setIsDoneLoader] = useState(true);

    useEffect(() => {
        setInterval(() =>{
            setIsDoneLoader(false);
        }, 1000)
    }, [isDoneLoader]);

    return (
        <>
            {
                isDoneLoader ? 
                <Loader />                 
                :<motion.div className="about"
                    variants={aboutVariants}
                    exit = "hidden"
                >
                    <DataContext.Consumer>
                        {
                            data => {
                                return (
                                    <div>
                                        <Header main = {data.Header} />
                                        <Intro data={data.Intro.about} />
                                        <Whom data={data.Whom} />
                                        <ContactUs data={data.Contact}/>
                                        <Footer data={data.Footer}/>
                                    </div>
                                )
                            }
                        }
                    </DataContext.Consumer>
                </motion.div>
            }
        </>
    );
}

export default About;