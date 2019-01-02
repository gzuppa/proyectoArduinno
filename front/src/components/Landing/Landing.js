import React, { Component } from 'react';
/*import Nav from '../Nav/Nav'*/
import Logo from '../../images/robokids.png';
import Placa from '../../images/arduinokit.png';
import CodeKids from '../../images/codekids.png';
import PurpleRobot from '../../images/banner-img.png';
import Teaching from '../../images/teach.jpg';
import Shop from '../../images/shopp.jpg';
import About from '../../images/aboutt.jpg';
import CuteRobots from '../../images/vintage.jpg';
import Spiderman from '../../images/spiderman.png';
import RobotAvatar from '../../images/robotavatar.png';
import Zombie from '../../images/zombieavatar.png';
import Pacman from '../../images/pacman.png';
import Mario from '../../images/mario.png';
import Ryu from '../../images/ryu.png';
import Tetris from '../../images/tetris.jpg';
import Zelda from '../../images/link.png';
import Resident from '../../images/re1.jpg';
import Megaman from '../../images/megaman.jpg';
import Space from '../../images/space.png';
import Mortal from '../../images/mk.png';



class Landing extends Component{

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

<div id="wrapper">

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
                                <a href="#banner">Home</a>
                            </li>
                            <li>
                                <a href="#">Programar Arduino</a>
                            </li>
                            <li>
                                <a href="#gallery">Aprender código</a>
                            </li>
                            <li>
                                <a href="#services">Robots!</a>
                            </li>
                            <li>
                                <a href="#testimonials">Tutoriales</a>
                            </li>
                            <li>
                                <a href="#clients">Tienda</a>
                            </li>
                            <li>
                                <a href="#pricing">Acerca de nosotros</a>
                            </li>
                        </ul>
                    </nav>
                   

                    <div id="nav-trigger"><span></span></div>
                    <nav id="nav-mobile"></nav>

                </div>
            </div>
        </div>

        
        <div id="banner-content" class="row clearfix">

            <div class="col-38">

                <div class="section-heading">
                    <h1>PROGRAMAR UN ROBOT ES SUPER DIVERTIDO</h1>
                    <h2>En RoboKids aprenderás a programar tus primeros robots, a comprender el código,
                        y acerca de videojuegos. ¡La imaginación es el límite!
                    </h2>
                </div>

               
                <a href="#" class="button">¡COMIENZA AHORA!</a>
                

            </div>

        </div>
    </header>

    
    <main id="content">
        <section id="about" class="introduction scrollto">
            <div class="row clearfix">
                <div class="col-3">
                    <div class="section-heading">
                        <h3>¿Y COMO EMPIEZO?</h3>
                        <h2 class="section-title">How We Help You To Sell Your Product</h2>
                        <p class="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>
                    </div>
                </div>

                <div class="col-2-3">
                    <div class="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.1s">
                        <div class="icon">
                            <i class="fa fa-html5 fa-2x"></i>
                        </div>
                        
                        <div class="icon-block-description">
                            <h4>HTML5 &amp; CSS3</h4>
                            <p>Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro
                                neglegentur iudico</p>
                        </div>
                    </div>
                  

                    
                    <div class="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.3s">
                        <div class="icon">
                            <i class="fa fa-bolt fa-2x"></i>
                        </div>                       
                        <div class="icon-block-description">
                            <h4>Easy to Use</h4>
                            <p>Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit
                                detracto mediocrem disputationi</p>
                        </div>
                    </div>
                    

                    
                    <div class="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">                        
                        <div class="icon">
                            <i class="fa fa-tablet fa-2x"></i>
                        </div>                       
                        <div class="icon-block-description">
                            <h4>Fully Responsive</h4>
                            <p>Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro
                                nemore vivendum</p>
                        </div>
                    </div>
                    

                    <div class="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">                       
                        <div class="icon">
                            <i class="fa fa-rocket fa-2x"></i>
                        </div>                       
                        <div class="icon-block-description">
                            <h4>Parallax Effect</h4>
                            <p>Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro
                                nemore vivendum</p>
                        </div>
                    </div>              
                </div>
            </div>
        </section>
        


       
        <aside id="gallery" class="row text-center scrollto clearfix" data-featherlight-gallery
                 data-featherlight-filter="a">

                <a href="../../images/arduino.png" data-featherlight="image" class="col-3 wow fadeIn firstImage"
                   data-wow-delay="0.1s"><img src={Placa} alt="arduino"/></a>
                <a href="images/gallery-images/gallery-image-2.jpg" data-featherlight="image" class="col-3 wow fadeIn secondImage"
                   data-wow-delay="0.3s"><img src={CodeKids} alt="codekids"/></a>
                <a href="images/gallery-images/gallery-image-3.jpg" data-featherlight="image" class="col-3 wow fadeIn"
                   data-wow-delay="0.5s"><img src={PurpleRobot} alt="purplerobot"/></a>
                <a href="images/gallery-images/gallery-image-4.jpg" data-featherlight="image" class="col-3 wow fadeIn"
                   data-wow-delay="1.1s"><img src={Teaching} alt="teaching"/></a>
                <a href="images/gallery-images/gallery-image-5.jpg" data-featherlight="image" class="col-3 wow fadeIn"
                   data-wow-delay="0.9s"><img src={Shop} alt="shop"/></a>
                <a href="images/gallery-images/gallery-image-6.jpg" data-featherlight="image" class="col-3 wow fadeIn"
                   data-wow-delay="0.7s"><img src={About} alt="about"/></a>

        </aside>
        


        
        <div id="services" class="scrollto clearfix">

            <div class="row no-padding-bottom clearfix">


                
                <div class="col-3">
                  
                    <blockquote class="testimonial text-right bigtest">
                        <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua</q>
                        <footer>— John Doe, Happy Customer</footer>
                    </blockquote>
                  

                </div>
               

                
                <div class="col-3">
                    <div class="section-heading">
                        <h3>BELIEVING</h3>
                        <h2 class="section-title">Focusing On What Matters Most</h2>
                        <p class="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>
                    </div>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                    </p>
                    <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet!
                    </p>
                    
                    <a href="https://www.youtube.com/watch?v=whznk5G3K2c" data-videoid="UYJ5IjBRlW8" data-videosite="youtube" class="button video link-lightbox">
                        WATCH VIDEO <i class="fa fa-play" aria-hidden="true"></i>
                    </a>
                </div>
                

                <div class="col-3 doodle">
                    <img src={CuteRobots} alt="Dancer"/>
                </div>

            </div>


        </div>
        

       
        <aside id="testimonials" class="scrollto text-center" data-enllax-ratio=".2">

            <div class="row clearfix">

                <div class="section-heading">
                    <h3>FEEDBACK</h3>
                    <h2 class="section-title">What our customers are saying</h2>
                </div>

                
                <blockquote class="col-3 testimonial classic">
                    <img src={Spiderman} alt="spiderman"/>
                    <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua</q>
                    <footer>John Doe - Happy Customer</footer>
                </blockquote>
          

               
                <blockquote class="col-3 testimonial classic">
                    <img src={RobotAvatar} alt="robotavatar"/>
                    <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua</q>
                    <footer>Roslyn Doe - Happy Customer</footer>
                </blockquote>
                

                
                <blockquote class="col-3 testimonial classic">
                    <img src={Zombie} alt="zombie"/>
                    <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua</q>
                    <footer>Thomas Doe - Happy Customer</footer>
                </blockquote>
                

            </div>

        </aside>
       

        
        <section id="clients" class="scrollto clearfix">
            <div class="row clearfix">

                <div class="col-3">

                    <div class="section-heading">
                        <h3>TRUST</h3>
                        <h2 class="section-title">Companies who use our services</h2>
                        <p class="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>
                    </div>

                </div>

                <div class="col-2-3">

                    <a href="https://www.youtube.com/watch?v=_13wt0p1XeE" class="col-3">
                        <img src={Pacman} alt="Pacman"/>
                        <div class="client-overlay"><span>Pacman</span></div>
                    </a>
                    <a href="https://www.youtube.com/watch?v=4zkmmXSbr3Y" class="col-3">
                        <img src={Mario} alt="Mario"/>
                        <div class="client-overlay"><span>Mario</span></div>
                    </a>
                    <a href="https://www.youtube.com/watch?v=IUb_qqj-1ug" class="col-3">
                        <img src={Ryu} alt="Street"/>
                        <div class="client-overlay"><span>Street Fighter</span></div>
                    </a>
                    <a href="https://www.youtube.com/watch?v=_fQtxKmgJC8" class="col-3">
                        <img src={Tetris} alt="Tetris"/>
                        <div class="client-overlay"><span>Tetris</span></div>
                    </a>
                    <a href="https://www.youtube.com/watch?v=R9DdAB7gACU" class="col-3">
                        <img src={Zelda} alt="Zelda"/>
                        <div class="client-overlay"><span>The Legend of Zelda</span></div>
                    </a>
                    <a href="https://www.youtube.com/watch?v=Xjkr-8lrK2w" class="col-3">
                        <img src={Resident} alt="Resident"/>
                        <div class="client-overlay"><span>Resident Evil</span></div>
                    </a>
                    <a href="https://www.youtube.com/watch?v=Pl3NkaEH1z8" class="col-3">
                        <img src={Megaman} alt="Megaman"/>
                        <div class="client-overlay"><span>MegaMan</span></div>
                    </a>
                    <a href="https://www.youtube.com/watch?v=57s3ylANAhM" class="col-3">
                        <img src={Space} alt="Space"/>
                        <div class="client-overlay"><span>Space Invaders</span></div>
                    </a>

                    <a href="https://www.youtube.com/watch?v=khgvi5lm8E8" class="col-3">
                        <img src={Mortal} alt="MortalK"/>
                        <div class="client-overlay"><span>Mortal Kombat</span></div>
                    </a>

                </div>

            </div>
        </section>

    

    </main>
   


    
    <footer id="landing-footer" class="clearfix">
        <div class="row clearfix">

            <p id="copyright" class="col-2">Developed by Gus Zuppa</p>
        </div>
    </footer>
   

</div>


</div>

    )
  }
}

export default Landing;

