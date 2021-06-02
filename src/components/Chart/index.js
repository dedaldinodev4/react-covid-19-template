import React from 'react';
import {Section, Container, InputRadio, Label} from '../styles';

const Chart = (props) => {

    return(
        <Section>
            <Container className="container">
                <h2>{props.data.title}</h2>
                <p>{props.data.paragraph[0]}<br/>
                    {props.data.paragraph[1]}
                </p>
                <InputRadio name="data" id="global" />
                <Label for="global">Global</Label>
                <InputRadio name="data" id="angola"/>
                <Label for="angola">Angola</Label>
            </Container>
            {/* CHART */}
        </Section>
    );
}

export default Chart