import React, { useState } from 'react';

import Header from '../../components/Header';
import Intro from '../../components/Intro';
import Prevention from '../../components/Prevention';
import AboutUs from '../../components/AboutUs';
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/Footer';
import JsonData from '../../data/data.json';

const Home = () => {

    const [data, setData] = useState(JsonData);
    
    return (
        <>
            <Header main = {data.Header} />
            <Intro data = {data.Intro.home} />
            <Prevention data = {data.Prevention} />
            <AboutUs data = {data.About} />
            <ContactUs data = {data.Contact} />
            <Footer data = {data.Footer} />

        </>
    );

}

export default Home;