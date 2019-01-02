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
import vintageRobot from '../../images/vintagerobot.jpg';
import Nav from '../Nav/Nav'



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

             <Nav />

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
                        <h2 class="section-title">No es difícil programar un robot... con paciencia.</h2>
                        <p class="section-subtitle">En RoboKids estamos fascinados con las placas Arduino por su gran capacidad 
                        para programar miles de cosas, todo lo que puedas imaginar. Pero vamos paso a paso.</p>
                    </div>
                </div>

                <div class="col-2-3">
                    <div class="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.1s">
                        <div class="icon">
                            <i class="fa fa-gamepad fa-2x"></i>
                        </div>
                        
                        <div class="icon-block-description">
                            <h4>¿Que es Arduino?</h4>
                            <p>Arduino es una placa informática con pins, conexiones USB, WiFi o de video, que te permite
                                programar microcomputadoras en sencillos pasos. 
                            </p>
                        </div>
                    </div>
                  
                    <div class="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.3s">
                        <div class="icon">
                            <i class="fa fa-code fa-2x"></i>
                        </div>                       
                        <div class="icon-block-description">
                            <h4>¿Como lo hago?</h4>
                            <p>Arduino tiene su propia interfaz de código e incluso su propio lenguaje, con sentencias escritas en código
                                puedes darle órdenes a tu placa.
                            </p>
                        </div>
                    </div>
                    
                    <div class="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">                        
                        <div class="icon">
                            <i class="fa fa-star fa-2x"></i>
                        </div>                       
                        <div class="icon-block-description">
                            <h4>¿Es difícil?</h4>
                            <p>Nada en esta vida es fácil, sin embargo, con dedicación y algunos conocimientos básicos de computación
                                podrás comenzar a programar Arduino.
                            </p>
                        </div>
                    </div>
                    
                    <div class="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">                       
                        <div class="icon">
                            <i class="fa fa-rocket fa-2x"></i>
                        </div>                       
                        <div class="icon-block-description">
                            <h4>¿Que puedo hacer con Arduino?</h4>
                            <p>Una vez que logres encender tu primer LED te darás cuenta que tu imaginación es el límite.</p>
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
                        <q>La ciencia es una sola luz, e iluminar con ella cualquier parte, es iluminar con ella el mundo entero.</q>
                        <footer>— Isaac Asimov, pionero de la robótica</footer>
                    </blockquote>
                    <img src={vintageRobot} alt="robotito"/>
                </div>
               
                <div class="col-3">
                    <div class="section-heading">
                        <h3>CREE EN TI</h3>
                        <h2 class="section-title">El futuro se construye día a día</h2>
                        <p class="section-subtitle">Existen personas en la historia de la Humanidad que han estado destinados a 
                        dar los más grandes regalos a la ciencia con su conocimiento.</p>
                    </div>
                    <p>Isaac Asimov es el gran pionero de la robótica Universal. Alguien que hizo de la curiosidad y la investigación
                        su arma más poderosa en contra de la ignorancia. ¿Viste "El Hombre Bicentenario"? Es producto de la gran mente de Asimov.
                        ¿"Yo, Robot"? También.
                    </p>
                    <p>
                        Sé siempre curioso y no te rindas. Investiga hasta que logres lo que quieres. En tu mente tienes la mejor herramienta.
                        Para conocer más acerca de Asimov, te invitamos a ver el siguiente video.
                    </p>
                    <a href="https://www.youtube.com/watch?v=whznk5G3K2c" data-videoid="UYJ5IjBRlW8" data-videosite="youtube" class="button video link-lightbox">
                        VER VIDEO <i class="fa fa-play" aria-hidden="true"></i>
                    </a>
                </div>
                

                <div class="col-3 doodle">
                    <img src={CuteRobots} alt="CuteRobots"/>
                </div>
            </div>
        </div>
        
        <aside id="testimonials" class="scrollto text-center" data-enllax-ratio=".2">
            <div class="row clearfix">
                <div class="section-heading">
                    <h3>TU OPINIÓN ES LO MÁS IMPORTANTE</h3>
                    <h2 class="section-title">¡Muchas gracias!</h2>
                </div>

                <blockquote class="col-3 testimonial classic">
                    <img src={Spiderman} alt="spiderman"/>
                    <q>Una vez abrí mi computadora para saber como funcionaba, y la descompuse. ¡Pero aprendí muchas cosas!</q>
                    <footer>Spiderman - Feliz Investigador</footer>
                </blockquote>
          
                <blockquote class="col-3 testimonial classic">
                    <img src={RobotAvatar} alt="robotavatar"/>
                    <q>Siempre le tuve miedo a la programación, pensaba que el código era muy difícil, y lo es. Pero si uno es persistente 
                        puede lograr muchas cosas.
                    </q>
                    <footer>RoboChild - Feliz Programador</footer>
                </blockquote>
                
                <blockquote class="col-3 testimonial classic">
                    <img src={Zombie} alt="zombie"/>
                    <q>El futuro está en nuestras manos, los robots son sensacionales.</q>
                    <footer>CodeZombie - Feliz Emprendedor</footer>
                </blockquote>
            </div>
        </aside>
        
        <section id="clients" class="scrollto clearfix">
            <div class="row clearfix">
                <div class="col-3">
                    <div class="section-heading">
                        <h3>Historia de los mejores</h3>
                        <h2 class="section-title">Grandes videojuegos que hicieron historia</h2>
                        <p class="section-subtitle">Programar un videojuego es muy parecido a programar un robot: darle órdenes a todo un conjunto
                        de chips y dispositivos para lograr algo. Por eso, aquí te compartimos la historia de grandes videojuegos que hicieron historia.</p>
                    </div>
                </div>

                <div class="col-2-3">
                    <a href="https://www.youtube.com/watch?v=_13wt0p1XeE" class="col-3">
                        <img src={Pacman} alt="Pacman"/>
                        <div class="client-overlay"><span>Pacman</span></div>
                    </a>
                    <a href="https://www.youtube.com/watch?v=4zkmmXSbr3Y" class="col-3">
                        <img src={Mario} alt="Mario"/>
                        <div class="client-overlay"><span>Mario Bros.</span></div>
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

