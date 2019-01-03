import React, { Component } from 'react';
import ArduinoLed from '../../images/arduinoled.png';
import ArduinoLcd from '../../images/arduinolcd.png';
import ArduinoMotor from '../../images/arduinomotor.png';
import ArduinoButton from '../../images/arduinobutton.png';
import Nav from '../Nav/Nav'
import {Link} from 'react-router-dom';

class Arduino extends Component{

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

<Nav />
<br></br><br></br><br></br><br></br><br></br>
<div class="section-heading">
                        <h3>PROGRAMACION CON ARDUINO</h3>
                        <h2 class="section-title">Descubre paso a paso el fascinante mundo de la programación con placas</h2>
                        <p class="section-subtitle">En esta sección encontrarás tutoriales para las acciones más básicas con Arduino. Podrás dar órdenes
                        a tu placa desde tu navegador, y lo más importante es que te mostraremos el código para que aprendas a programarlo
                        paso a paso.</p>
                    </div>

<ul class="article-list-large">
        <li>
            <Link to="/arduino/arduinoled">
                <img src={ArduinoLed} alt="Arduinoled" />
            </Link>
            <h2><a href="#">Como hacer encender LEDs con Arduino paso a paso</a></h2>
            <p>En esta lección podrás hacer encender un LED con un Arduino solamente dando click en algunos botones en tu navegador.
              Pero eso no es todo. También aprenderás paso a paso como escribir el código en JavaScript para darle la orden a tu placa.
            </p>
            <span>by <a href="#">Gus Zuppa</a> &middot; Enero 2019</span>
        </li>

        <li>
            <a href="#">
                <img src={ArduinoLcd} alt="Arduinolcd" />
            </a>
            <h2><a href="#">Como programar una pantalla LCD con Arduino</a></h2>
            <p>En esta lección podrás programar una pantalla LCD para escribir cualquier texto, aplicar intermitencias e incluso hacer un
              pequeño minijuego. Como en la anterior lección también te enseñaremos a programar el código.
            </p>
            <span>by <a href="#">Gus Zuppa</a> &middot; Enero 2019</span>
        </li>

        <li>
            <a href="#">
                <img src={ArduinoMotor} alt="Arduinomotor" />
            </a>
            <h2><a href="#">Como hacer funcionar un motor con Arduino</a></h2>
            <p>En esta lección podrás hacer funcionar un motor, el cual podrás utilizar con kits de ruedas y otros motores para construir un pequeño
              auto o tu primer robot básico. Igual que siempre, te mostramos el código paso a paso.
            </p>
            <span>by <a href="#">Gus Zuppa</a> &middot; Enero 2019</span>
        </li>

        <li>
            <a href="#">
                <img src={ArduinoButton} alt="Arduinobutton" />
            </a>
            <h2><a href="#">Dar funcionalidad a botones y joysticks con Arduino</a></h2>
              <p>Aqui aprenderás a dar ordenes a botones y joysticks para crear tus primeros controles remotos y dar funciones a tus otros dispositivos
                a distancia. Encontrarás, como siempre, el código para reproducirlo y crear los tuyos.
            </p>
            <span>by <a href="#">Gus Zuppa</a> &middot; Enero 2019</span>
        </li>

    </ul>


</div>

    )
  }
}

export default Arduino;

