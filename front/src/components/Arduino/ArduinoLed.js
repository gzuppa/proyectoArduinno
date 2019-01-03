import React, { Component } from 'react';
//import {five, board, led} from 'johnny-five';
import Nav from '../Nav/Nav'
import ArduionoUno from '../../images/arduinouno.jpg';
import Leds from '../../images/leds.png';
import Dupont from '../../images/dupont.jpeg';
import Protoboard from '../../images/proto.png';
import OneIcon from '../../images/numbers/one.png'
import TwoIcon from '../../images/numbers/two.png'
import Firmata from '../../images/ejemplos/sketchfirmata.png'

class ArduinoLed extends Component{

  constructor(){
    super();
    this.state = {

    }

    //FUNCIONES AQUI

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

    <h3>ENCENDER UN LED</h3>
    <h2 class="section-title">Aprende a encender LEDs</h2>
    <p class="section-subtitle">"Hola Mundo" es la primer prueba que hace un programador cuando comienza. Para Arduino, el "Hola Mundo" es la posibilidad de encender un LED. Paso a paso te lo enseñamos.</p>
                    
    <h3>¿Qué necesito?</h3>
    <br></br><br></br><br></br>

    <ul class="image-list-small">

      <li>
        <a><img src={ArduionoUno}/></a>
          <div class="details">
            <h3>Placa Arduino Uno USB</h3>
              <p class="image-author"><a href="#">Consíguela aquí</a></p>
          </div>
      </li>

      <li>
        <a><img src={Leds}/></a>
          <div class="details">
            <h3>LEDs sencillos</h3>
              <p class="image-author"><a href="#">Consíguelos aquí</a></p>
          </div>
      </li>

      <li>
        <a><img src={Dupont}/></a>
          <div class="details">
            <h3>2 Cable Dupont Jumper</h3>
              <p class="image-author"><a href="#">Consíguelos aquí</a></p>
          </div>
      </li>

      <li>
        <a><img src={Protoboard}/></a>
          <div class="details">
            <h3>Protoboard 400 puntos</h3>
              <p class="image-author"><a href="#">Consíguela aquí</a></p>
          </div>
      </li>
    </ul>
</div>

<div>

<article class="media section-subtitle">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src={OneIcon}/>
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>Preparar el entorno Arduino</strong> <small>Conociendo tu placa y el IDE Arduino</small> 
        <br/>
        Antes que todo, vamos a conocer tu placa y el entorno de programación de Arduino. Para ello, dirigete a <a href="https://www.arduino.cc/"> el sitio
        oficial de Arduino en la Web</a> para descargar el IDE (Entorno de Desarrollo Integrado) de la placa. En otro artículo enseñamos como utilizar
        dicho entorno, por lo que en este solo daremos el paso a paso para encender nuestro LED. Una vez descargado el IDE, conectalo por medio del Cable
        USB a tu computadora y abre el software.
        Nosotros vamos a conectarnos via Web a nuestro Arduino, por ello, necesitaremos un protocolo llamado Firmata, el cual nos permitirá conectarnos
        desde nuestras aplicaciones a los microcontroladores de la placa
      </p>
    </div>
  </div>
</article>

<article class="media section-subtitle">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src={TwoIcon}/>
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>Configurando el Arduino</strong> <small>Subiendo un sketch con Firmata</small> 
        <br/>
        Este paso es muy sencillo. Una vez conectada tu pĺaca por USB, abrimos el IDE Arduino y seguimos la siguiente ruta <strong>Archivo / Ejemplos /
         Firmata / StandardFirmata </strong> 
         <p><img class="exampleimages" src={Firmata}/></p>
         <br/>
        Una vez que hayas seleccionado el sketch, presiona el botón de <strong>Subir</strong> que se encuentra en los menús principales. Inmediatamente
        se desplegará en la parte inferior de tu IDE el avance del procedimiento. Una vez que llega al 100% tu sketch está cargado en la placa y listo para
        usarse.
      </p>
    </div>
  </div>
</article>

</div>
                   

</div>
    )
  }
}

export default ArduinoLed;

