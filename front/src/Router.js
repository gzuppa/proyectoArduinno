import React from 'react';
import {Switch, Route} from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";


const Router = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
    </Switch>
);

export default Router;