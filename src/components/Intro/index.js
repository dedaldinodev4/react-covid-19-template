import React from 'react';
import  {Cover, Container, Text, BtnStart } from './styled';

import { motion } from 'framer-motion';

const Intro = (props) => {

    return(
        <>
            <Cover image={props.data.image}>
                <Container className="container">
                    <Text>
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                        >
                            {props.data.title}
                        </motion.h1>
                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2.0}}
                        >
                            Coronavirus<br/>
                            Pandemic 
                        </motion.h3><br/>
                        
                        {props.data.btn ? <BtnStart
                        >
                            Get Started
                        </BtnStart> : null
                        
                    
                        }
                          
                    </Text>  
                </Container>
                
                
            </Cover>
        </>
    );

};

export default Intro;