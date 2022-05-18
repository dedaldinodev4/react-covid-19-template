import React, {useState, useEffect} from 'react';


import Intro from '../../components/Intro';
import {Container, Section, InputRadio} from '../../components/styles';
import {Item, Box, BoxDefault} from './styled';
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/Footer';
import {DataContext} from '../../context/dataContext';
import covid from '../../data/covid.json'
import Loader from '../../components/Loader';
import { colors } from '../../components/infra/colors';
import {motion} from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAfrica,
        faHeartBroken, 
        faStethoscope, 
        faChartBar, faVirus, faViruses } from '@fortawesome/free-solid-svg-icons';
import { LayoutVariants, wideVariants } from '../../utils/motionAnimate';


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
                    variants={LayoutVariants}
                    exit="hidden"
                >
                    <DataContext.Consumer>
                        {
                            data => {
                                return (
                                    <div>
                                        <Intro data = {data.Intro.infection} main={data.Header}/>
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
                                                    <Box color={colors.pink}>
                                                        <h4><FontAwesomeIcon icon={faGlobeAfrica} />
                                                            &nbsp; &nbsp; Total World
                                                        <span>{covid.angola.world_total}</span>
                                                        </h4>
                                                    </Box>
                                                    <Box color={colors.red}>
                                                        <h4>
                                                            <FontAwesomeIcon icon={faHeartBroken} />
                                                        &nbsp; &nbsp; Deaths
                                                        <span>{covid.angola.deaths}</span>
                                                        </h4>
                                                        
                                                    </Box>
                                                    <Box color={colors.green}>
                                                        <h4>
                                                            <FontAwesomeIcon icon={faStethoscope} />
                                                            &nbsp; &nbsp; Recovered
                                                            <span>{covid.angola.recovereds}</span>
                                                        </h4>   
                                                    </Box>
                                                    <Box color={colors.orange}>
                                                        <h4>
                                                            <FontAwesomeIcon icon={faChartBar} />
                                                            &nbsp; &nbsp; Actives
                                                            <span>{covid.angola.atives}</span>
                                                        </h4>
                                                    </Box>

                                                    <BoxDefault border>
                                                        <h4>
                                                            <FontAwesomeIcon icon={faVirus} />
                                                            &nbsp; &nbsp; Asymptomatic
                                                            <span>{covid.angola.asymptomatics}</span>
                                                        </h4>
                                                    </BoxDefault>

                                                    <BoxDefault border>
                                                        <h4>
                                                            <FontAwesomeIcon icon={faViruses} />
                                                            &nbsp; &nbsp; Symptomatic
                                                            <span>{covid.angola.symptomatics}</span>
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