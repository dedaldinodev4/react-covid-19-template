import React from 'react'
import {Section} from './styled';
import {Container} from '../styles/';

const WideData = (props) => {
    
    return (
        <div>
            <Section>
                <Container className="container">
                    <h2>{props.data.title}</h2>
                    <p>{props.data.paragraph[0]}<br/>
                    {props.data.paragraph[1]}
                    </p>
                </Container>
            </Section>
        </div>
    )
}

export default WideData;
