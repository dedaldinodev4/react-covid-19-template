import React from 'react';

import Header from '../../components/Header';
import Intro from '../../components/Intro';
import Prevention from '../../components/Prevention';
import AboutUs from '../../components/AboutUs';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const Home = () => {

    return (
        <>
            <Header />
            <Intro 
                image={'bgHome'}
                title={'Covid-19'}
                btn={true}
            />
            <Prevention />
            <AboutUs />
            <Contact />
            <Footer />

        </>
    );

}

export default Home;