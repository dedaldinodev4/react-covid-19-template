import React from 'react';

import Header from '../../components/Header';
import Intro from '../../components/Intro';

const Infection = () => {

    return (
        <React.Fragment>
            <Header />
            <Intro 
                image={'bgInfections'}
                title={'Infections'}
            />
        </React.Fragment>
    );
}

export default Infection;