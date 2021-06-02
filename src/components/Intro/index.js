import React from 'react';
import  {Cover, Container, Text} from './styled';
import { motion } from 'framer-motion';


const btnVariants = {
    hidden: {
        x: '100vw'
    },
    visible: {
        x: 0,
        transition: {
            type: 'spring', stiffness: 120
        }
    },
    hover: {
        background: "#f10e46", 
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
          duration: 0.3,
          yoyo: Infinity
        }
    }
}
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
                        
                        {props.data.btn ? 
                            <motion.button className="btnStart"
                                variants={btnVariants}
                                initial ="hidden"
                                animate = "visible"
                                whileHover="hover"
                            >
                            Get Started
                        </motion.button> : null
                        
                    
                        }
                          
                    </Text>  
                </Container>
                
                
            </Cover>
        </>
    );

};

export default Intro;