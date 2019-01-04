import React from 'react';
import {Switch, Route} from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Arduino from "./components/Arduino/Arduino";
import ArduinoLed from "./components/Arduino/ArduinoLed"
import ArduinoLcd from "./components/Arduino/ArduinoLcd"
import Profile from "./components/Profile/Profile"
import Shop from "./components/Shop/Shop"
import Signup from "./components/Login/Signup"


const Router = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/arduino" component={Arduino} />
        <Route exact path="/arduino/arduinoled" component={ArduinoLed} />
        <Route exact path="/arduino/arduinolcd" component={ArduinoLcd} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signup" component={Signup} />
    </Switch>
);

export default Router;