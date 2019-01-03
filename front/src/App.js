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
import './css/article-list-large.css'
import './css/image-list-small.css'
import './css/bulma.min.css'

/*import './javascripts/jquery.1.8.3.min.js'
import './javascripts/jquery.easing.min.js'
import './javascripts/jquery.enllax.min.js'
import './javascripts/jquery.scrollup.min.js'
import './javascripts/jquery.stickyNavbar.min.js'
import './javascripts/jquery.waypoints.min.js'
import './javascripts/featherlight.gallery.min.js'
import './javascripts/featherlight.min.js'
import './javascripts/images-loaded.min.js'
import './javascripts/lightbox.min.js'
import './javascripts/pushy.min.js'
import './javascripts/wow.min.js'
import './javascripts/site.js'*/



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
