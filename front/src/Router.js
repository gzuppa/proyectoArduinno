import React from 'react';
import {Switch, Route} from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Arduino from "./components/Arduino/Arduino";


const Router = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/arduino" component={Arduino} />
    </Switch>
);

export default Router;