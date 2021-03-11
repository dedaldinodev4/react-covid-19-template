import React from 'react';
import  {Cover, Container, Text, BtnStart } from './styled';

const Intro = (props) => {

    return(
        <>
            <Cover imagem={props.imagem}>
                <Container className="container">
                    <Text>
                        <h1>Covid-19</h1>
                        <h3>
                            Coronavirus<br/>
                            Pandemic 
                        </h3><br/>
                        
                        <BtnStart>
                            Get Started
                            <img className="icon-fa" src="./assets/images/icons/arrow.png" alt="arrowRight" />
                        </BtnStart>  
                    </Text>  
                </Container>
                
                
            </Cover>
        </>
    );

};

export default Intro;