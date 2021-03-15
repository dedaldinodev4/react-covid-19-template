import React from 'react';
import  {Cover, Container, Text, BtnStart } from './styled';

const Intro = (props) => {

    return(
        <>
            <Cover image={props.image}>
                <Container className="container">
                    <Text>
                        <h1>{props.title}</h1>
                        <h3>
                            Coronavirus<br/>
                            Pandemic 
                        </h3><br/>
                        
                        {props.btn ? <BtnStart>
                            Get Started
                            <img className="icon-fa" src="./assets/images/icons/arrow.png" alt="arrowRight" />
                        </BtnStart> : null
                        
                    
                        }
                          
                    </Text>  
                </Container>
                
                
            </Cover>
        </>
    );

};

export default Intro;