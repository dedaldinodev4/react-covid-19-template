import React from 'react';

import { Container } from '../styles/';
import { Section, Content, Item } from './styled';
import { motion } from 'framer-motion';

const btnVariants = {
    hover: { 
        scale: 1.1,
        boxShadow: "0px 0px 8px rgb(241,14,70)",
        transition: {
            duration: 0.3,
            yoyo: Infinity
        }
    }
}

const Prevention = (props) => {

    return (
        <Section>
            <Container className="container">
                <h2
                    
                >{props.data.title}
                
                </h2>
                <p>{props.data.paragraph[0]}<br/>
                {props.data.paragraph[1]}.</p>
                <Content className="services-content">
                    <div>
                        <Item>
                            <img 
                                src={props.data.Item[0].image} alt="hand" 
                            />
                            <h3>{props.data.Item[0].name}</h3>
                            <p>{props.data.Item[0].paragraph[0]}
                                <br/>{props.data.Item[0].paragraph[1]}<br/>
                                {props.data.Item[0].paragraph[2]}
                            </p>
                            <motion.button className="btnPrimary"
                                variants={btnVariants}
                                whileHover="hover"
                            >Read More</motion.button>
                        </Item>
                    </div>

                    <div>
                        <Item>
                            <img 
                                src={props.data.Item[1].image} alt="mask" 
                                />
                                <h3>{props.data.Item[1].name}</h3>
                                <p>{props.data.Item[1].paragraph[0]}
                                    <br/>{props.data.Item[1].paragraph[1]}<br/>
                                    {props.data.Item[1].paragraph[2]}
                                </p>
                            <motion.button className="btnPrimary"
                                variants={btnVariants}
                                whileHover="hover"
                            >Read More</motion.button>
                        </Item>
                    </div>
                        
                    <div>
                        <Item>
                            <img 
                                src={props.data.Item[2].image} alt="social" 
                                />
                                <h3>{props.data.Item[2].name}</h3>
                                <p>{props.data.Item[2].paragraph[0]}
                                    <br/>{props.data.Item[2].paragraph[1]}<br/>
                                    {props.data.Item[2].paragraph[2]}
                                </p>
                            <motion.button className="btnPrimary"
                                variants={btnVariants}
                                whileHover="hover"
                            >Read More</motion.button>
                        </Item>
                    </div>
                </Content>

            </Container>
        </Section>

    );
}

export default Prevention;