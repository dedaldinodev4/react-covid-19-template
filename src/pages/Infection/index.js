import React, {useState, useEffect} from 'react';

import Header from '../../components/Header';
import Intro from '../../components/Intro';
import {Container, Section, InputRadio} from '../../components/styles';
import {Item, Box, BoxDefault} from './styled';
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/Footer';
import {DataContext} from '../../App';
import Loader from '../../components/Loader';
import {motion} from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAfrica,
        faHeartBroken, 
        faStethoscope, 
        faChartBar, faVirus, faViruses } from '@fortawesome/free-solid-svg-icons';

const infectionVariants = {
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

const wideVariants = {
    hidden: {
        x: '-100vw'
    },
    visible: {
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 120
        }
    }
}


const Infection = () => {
    const [isDoneLoader, setIsDoneLoader] = useState(true);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setInterval(() =>{
            setIsDoneLoader(false);
        }, 1000)
    }, [isDoneLoader]);

    return (
        <>
            {
                isDoneLoader ?
                    <Loader /> :

                <motion.div className="infection"
                    variants={infectionVariants}
                    exit="hidden"
                >
                    <DataContext.Consumer>
                        {
                            data => {
                                return (
                                    <div>
                                        <Header main= {data.Header}/>
                                        <Intro data = {data.Intro.infection}/>
                                        <Section>
                                            <Container className="container">
                                                <h2>{data.WideData.title}</h2>
                                                <p>{data.WideData.paragraph[0]}<br/>
                                                    {data.WideData.paragraph[1]}
                                                </p>
                                                <InputRadio id="global" name="data"/>
                                                <motion.label for="global" className="label"
                                                onClick={() => setIsActive(!isActive)}
                                                >
                                                    Global
                                                </motion.label>
                                                <InputRadio id="angola" name="data" />
                                                <motion.label for="angola" className="label" onClick={() => setIsActive(!isActive)}>Angola</motion.label>
                                            </Container>
                                            <>
                                            
                                            { isActive === true ? 
                                                
                                            <motion.div className="infection-content"
                                                variants={wideVariants}
                                                initial = "hidden"
                                                animate = "visible"
                                            >
                                                <Item>
                                                    <Box color={data.WideData.colors[0]}>
                                                        <h4><FontAwesomeIcon icon={faGlobeAfrica} />
                                                            &nbsp; &nbsp; Total World
                                                            <span>509 950 124</span>
                                                        </h4>
                                                    </Box>
                                                    <Box color={data.WideData.colors[1]}>
                                                        <h4>
                                                            <FontAwesomeIcon icon={faHeartBroken} />
                                                        &nbsp; &nbsp; Deaths
                                                        <span>913 358</span>
                                                        </h4>
                                                        
                                                    </Box>
                                                    <Box color={data.WideData.colors[2]}>
                                                        <h4>
                                                            <FontAwesomeIcon icon={faStethoscope} />
                                                            &nbsp; &nbsp; Recovered
                                                            <span>421 767</span>
                                                        </h4>   
                                                    </Box>
                                                    <Box color={data.WideData.colors[3]}>
                                                        <h4>
                                                            <FontAwesomeIcon icon={faChartBar} />
                                                            &nbsp; &nbsp; Actives
                                                            <span>3 421 767</span>
                                                        </h4>
                                                    </Box>

                                                    <BoxDefault border>
                                                        <h4>
                                                            <FontAwesomeIcon icon={faVirus} />
                                                            &nbsp; &nbsp; Asymptomatic
                                                            <span>1 724</span>
                                                        </h4>
                                                    </BoxDefault>

                                                    <BoxDefault border>
                                                        <h4>
                                                            <FontAwesomeIcon icon={faViruses} />
                                                            &nbsp; &nbsp; Symptomatic
                                                            <span>370</span>
                                                        </h4>
                                                    </BoxDefault>
                                                </Item>
                                            </motion.div>
                                            : <div></div>
                                        
                                        }
                                        </>
                                        </Section>
                                       
                                        <ContactUs data={data.Contact} />
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

export default Infection;