import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import CreateUser from './pages/CreateUser';


const App = props => {

    return (
        <Switch>
            <Route exact path="/createuser" component={CreateUser} />
            <Route exact path="/" component={Home} />
        </Switch>
    );

}

export default App;
