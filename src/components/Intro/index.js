import React from 'react';
import Header from '../Header';
import  {Cover, Container, Text} from './styled';
import { motion } from 'framer-motion';
import { btnIntroVariants } from '../../utils/motionAnimate';


const Intro = (props) => {

    return(
        <>
            <Cover image={props.data.image}>
                <Header items = {props.main}/>
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
                            Sed ut perspiciatis unde omnis iste natus 
                            error sit voluptatem accusantium doloremque laudantium, 
                            totam rem aperiam.
                            Sed ut perspiciatis unde omnis iste natus 
                            error sit voluptatem accusantium doloremque laudantium, 
                            totam rem aperiam.
                            
                        </motion.h3><br/>
                        
                        {props.data.btn ? 
                            <motion.button className="btnStart"
                                variants={btnIntroVariants}
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