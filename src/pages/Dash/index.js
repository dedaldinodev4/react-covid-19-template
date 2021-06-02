import React, {useState, useEffect} from 'react';

import Header from '../../components/Header';
import Intro from '../../components/Intro';
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/Footer';
import Chart from '../../components/Chart';
import {DataContext} from '../../App';
import Loader from '../../components/Loader';
import {motion} from 'framer-motion';


const dashVariants = {
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

const Dash = () => {
    const [isDoneLoader, setIsDoneLoader] = useState(true);

    useEffect(() => {
        setInterval(() =>{
            setIsDoneLoader(false);
        }, 1000)
    }, [isDoneLoader]);

    return(

        <>
            {
                isDoneLoader ? 
                <Loader />
                :
                <motion.div
                    variants={dashVariants}
                    exit="hidden"
                >
                    <DataContext.Consumer>
                        {
                            data => {
                                return (
                                    <div>
                                        <Header main = {data.Header}/>
                                        <Intro data = {data.Intro.dash} />
                                        <Chart data = {data.Chart} />
                                        <ContactUs data={data.Contact} />
                                        <Footer data={data.Footer} />
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

export default Dash;