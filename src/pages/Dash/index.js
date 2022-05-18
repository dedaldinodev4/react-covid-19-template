import React, {useState, useEffect} from 'react';
import Intro from '../../components/Intro';
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/Footer';
import Chart from '../../components/Chart';
import {DataContext} from '../../context/dataContext';
import Loader from '../../components/Loader';
import {motion} from 'framer-motion';
import { LayoutVariants } from '../../utils/motionAnimate';


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
                    variants={LayoutVariants}
                    exit="hidden"
                >
                    <DataContext.Consumer>
                        {
                            data => {
                                return (
                                    <div>
                                        <Intro main={data.Header} data = {data.Intro.dash} />
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