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
import ThreeIcon from '../../images/numbers/three.png'
import LedRojo from '../../images/ejemplos/arduinoledrojo.png'
import FourIcon from '../../images/numbers/four.png'
import FiveIcon from '../../images/numbers/five.png'

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

<article class="media section-subtitle">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src={ThreeIcon}/>
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>Conectando el Arduino</strong> <small>Conociendo los componentes electrónicos y la forma de conectar</small> 
        <br/>
        Tu placa Arduino tiene 16 pines digitales ennumerados en el borde de la misma. Cada uno de ellos tiene un objetivo particular, sin embargo
        los 16 son capaces de transmitir energía y ciertas órdenes. Para nuestro caso pŕáctico de hoy vamos a utilizar un LED sencillo, el cual deberás
        conectar con la patilla larga en el <strong>PIN GND</strong> y la patilla corta en el <strong>PIN 13</strong>
         <p><img class="exampleimages" src={LedRojo}/></p>
      </p>
    </div>
  </div>
</article>

<article class="media section-subtitle">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src={FourIcon}/>
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>Johnny Five!</strong> <small>¿Que es un Framework y para que me servirá?</small> 
        <br/>
        Un Framework es una herramienta de terceros que te permite realizar integraciones o funciones no nativas en ciertos lenguajes o entornos de
        programación. Para nuestro caso, el Arduino tiene su propio lenguaje que utilizamos en el IDE, sin embargo, para que podamos programarlo via
        Web, usaremos además del protocolo Firmata, el Framework <a href="http://johnny-five.io/"><strong>Johnny-Five</strong></a> el cual está escrito en JavaScript.
        Este Framework nos permitirá una integración más sencilla con nuestras aplicaciones. 

      </p>
    </div>
  </div>
</article>

<article class="media section-subtitle">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src={FiveIcon}/>
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>Montando un pequeño servidor</strong> <small>Paso a paso para tener rapidamente un servidor funcional</small> 
        <br/>
        Vamos a montar un servidor en nuestro equipo para utilizarlo de manera local. Cabe señalar, que practicaremos en entornos locales pero todo lo
        que tu realices puede ser publicado en la Web cuando quieras, para ello, dedicaremos algunos otros temas posteriores.
        <br/>
        Primero, debemos instalar <a href="https://nodejs.org/es/"><strong>NodeJS</strong></a> descargando de su página oficial. Los pasos para la instalación
        son muy sencillos. Para <strong>Windows</strong> solamente descomprime el archivo y abre el ejecutable, sigue los pasos y tendrás Node en tu equipo.
        Si utilizas Linux <strong>abre una terminal</strong> y ejecuta los siguientes comandos:
         
        <div class="box">
          <article class="media">
            <div class="media-content">
              <div class="content">
              <p>      
          <strong> sudo apt-get update </strong><br/>
          <strong> sudo apt-get install nodejs </strong>
              </p>
        </div>
        </div>
           </article>
        </div>

      Ahora vamos a utilizar <strong>NPM</strong> que es un manejador de paquetes perteneciente a NodeJS

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

