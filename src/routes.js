
import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Home from './pages/Home';
import Infection from './pages/Infection';
import Dash from './pages/Dash';
import About from './pages/About';
import Contact from './pages/Contact'



const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/infection/" component={Infection} />
            <Route path="/dash/" component={Dash} />  
            <Route path="/about/" component={About} />
            <Route path="/contact/" component={Contact} />
        </Switch>
    </BrowserRouter>
);

export default Routes;