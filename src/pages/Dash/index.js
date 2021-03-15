import React from 'react';

import Header from '../../components/Header';
import Intro from '../../components/Intro';


const Dash = () => {

    return(
        <React.Fragment>
            <Header />
            <Intro 
                image={'bgDash'}
                title={'Corona Dash'}
            />
        </React.Fragment>
    );

}

export default Dash;