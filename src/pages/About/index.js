import React from 'react';

import Header from '../../components/Header';
import Intro from '../../components/Intro';

const About = () => {

    return (
        <>
            <Header />
            <Intro 
                image={'bgAbout'}
                title={'About Us'}
            />
        </>
    );
}

export default About;