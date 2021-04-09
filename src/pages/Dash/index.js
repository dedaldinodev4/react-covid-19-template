import React, { useState } from 'react';

import Header from '../../components/Header';
import Intro from '../../components/Intro';
import JsonData from '../../data/data.json';

const Dash = () => {

    const [data, setData] = useState(JsonData);

    return(
        <React.Fragment>
            <Header main = {data.Header}/>
            <Intro data = {data.Intro.dash} />
        </React.Fragment>
    );

}

export default Dash;