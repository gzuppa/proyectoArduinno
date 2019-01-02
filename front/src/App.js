import React, { Component } from 'react';
import Router from "./Router";
import './App.css';
import './css/animate.css'
import './css/font-awesome.css'
import './css/font-awesome.min.css'
import './css/namari-color.css'
import './css/style.css'
import './css/main.css'
import './css/util.css'
import './css/icon-font.min.css'

/*import './javascripts/jquery-2.2.4.min.js';*/
/*import './javascripts/bootstrap.min.js';*/



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router/>
      </div>
    );
  }
}

export default App;
