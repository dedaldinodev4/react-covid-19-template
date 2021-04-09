import React, {useState} from 'react';

import Header from '../../components/Header';
import Intro from '../../components/Intro';
import JsonData from '../../data/data.json';


const About = () => {
    const [data, setData] = useState(JsonData);
    return (
        <>
            <Header main = {data.Header} />
            <Intro data={data.Intro.about} />
        </>
    );
}

export default About;