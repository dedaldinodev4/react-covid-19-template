import React, {useState, useEffect} from 'react';

import Header from '../../components/Header';
import Intro from '../../components/Intro';
import Prevention from '../../components/Prevention';
import AboutUs from '../../components/AboutUs';
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import {DataContext} from '../../App';
import {motion} from 'framer-motion';

const homeVariants = {
    hidden: {
        opacity: 0,
        x: '-100vw'
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

const Home = () => {
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
                : 
            
                    <motion.div className="home"
                        variants={homeVariants}
                        exit="hidden"
                        >
                        <DataContext.Consumer>
                            {
                                data => {
                                    return (
                                        <div>
                                            <Header main = {data.Header} />
                                            <Intro data = {data.Intro.home} />
                                            <Prevention data = {data.Prevention} />
                                            <AboutUs data = {data.About} />
                                            <ContactUs data = {data.Contact} />
                                            <Footer data = {data.Footer} />
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

export default Home;