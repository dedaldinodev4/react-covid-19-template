import React, {useState, useEffect} from 'react';
import Intro from '../../components/Intro';
import Prevention from '../../components/Prevention';
import AboutUs from '../../components/AboutUs';
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import {DataContext} from '../../context/dataContext';
import {motion} from 'framer-motion';
import { homeVariants } from '../../utils/motionAnimate';


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
                                            <Intro main = {data.Header} data = {data.Intro.home} />
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