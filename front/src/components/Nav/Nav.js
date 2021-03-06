import React, { Component } from 'react';
import Logo from '../../images/robokids.png';
import {Link} from "react-router-dom";

class Nav extends Component{

  constructor(){
    super();
    this.state = {

    }
  } 

  render(){
    return(
  
<div>

    <div class="page-border" data-wow-duration="0.7s" data-wow-delay="0.2s">
    <div class="top-border wow fadeInDown animated" ></div>
    <div class="right-border wow fadeInRight animated" ></div>
    <div class="bottom-border wow fadeInUp animated" ></div>
    <div class="left-border wow fadeInLeft animated" ></div>
</div>

<header id="banner" class="scrollto clearfix" data-enllax-ratio=".5">
        <div id="header" class="nav-collapse">
            <div class="row clearfix">
                <div class="col-1">

                <div id="logo">
                <img src={Logo} id="banner-logo" alt="Landing Page"/>
                <img src={Logo} id="navigation-logo" alt="Landing Page"/>  
                </div>
                
                    <aside>

                        <ul class="social-icons">
                            <li>
                                <a title="Facebook" href="https://www.facebook.com/gus.zuppa">
                                    <i class="fa fa-facebook fa-1x"></i><span>Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a title="GitHub" href="http://github.com/gzuppa">
                                    <i class="fa fa-github fa-1x"></i><span>GitHub</span>
                                </a>
                            </li>
                            <li>
                                <a title="Twitter" href="http://www.twitter.com/guszuppa">
                                    <i class="fa fa-twitter fa-1x"></i><span>Twitter</span>
                                </a>
                            </li>
                            <li>
                                <a title="Instagram" href="http://www.instagram.com/guszuppa">
                                    <i class="fa fa-instagram fa-1x"></i><span>Instagram</span>
                                </a>
                            </li>
                        </ul>
                    </aside>

                    <nav id="nav-main">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/arduino">Programar Arduino</Link>
                            </li>
                            
                            <li>
                                <Link to="/shop">Tienda</Link>
                            </li>
                            <li>
                                <Link to="/login"><strong>Login</strong></Link>
                            </li>
                        </ul>
                    </nav>

                    <div id="nav-trigger"><span></span></div>
                    <nav id="nav-mobile"></nav>
                </div>  
            </div>
        </div>
      
    </header>

</div>
    )
  }
}

export default Nav;

