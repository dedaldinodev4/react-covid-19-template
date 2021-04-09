import React, { useState } from 'react';

import Header from '../../components/Header';
import Intro from '../../components/Intro';
import WideData from '../../components/WideData';
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/Footer';
import JsonData from '../../data/data.json';


const Infection = () => {

    const [data, setData] = useState(JsonData);

    return (
        <React.Fragment>
            <Header main= {data.Header}/>
            <Intro data = {data.Intro.infection}/>
            <WideData data={data.WideData}/>
            <ContactUs data={data.Contact} />
            <Footer data={data.Footer}/>
        </React.Fragment>
    );
}

export default Infection;