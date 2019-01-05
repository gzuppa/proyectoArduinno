import React, { Component } from 'react';
/*import {five, board, led} from 'johnny-five';*/
import Nav from '../Nav/Nav'
import ArduionoUno from '../../images/arduinouno.jpg';
import Potenciometro from '../../images/Potenciometro.jpeg';
import Protoboard from '../../images/proto.png';
import OneIcon from '../../images/numbers/one.png'
import TwoIcon from '../../images/numbers/two.png'
import Firmata from '../../images/ejemplos/sketchfirmata.png'
import ThreeIcon from '../../images/numbers/three.png'
import Lcd from '../../images/LCD.jpg'
import FourIcon from '../../images/numbers/four.png'
import FiveIcon from '../../images/numbers/five.png'
import SixIcon from '../../images/numbers/six.png'
import Dupont from '../../images/dupont.jpeg'
import Bonus from '../../images/bonus.png'
import {Link} from 'react-router-dom'
import ArduinoLCDConectar from '../../images/arduinolcdconectar.jpg';
import codelcd from '../../images/codelcd.png';


class ArduinoLed extends Component{

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

    <h3>ENCENDER UN LED</h3>
    <h2 class="section-title">Aprende a programar un reloj LCD</h2>
    <p class="section-subtitle">Tu placa Arduino es compatible con muchos accesorios. Los tableros LCD son uno de ellos. Aqui te enseñaremos a 
    personalizar textos e incluso a personalizar un reloj con tu Arduino y un LCD</p>
                    
    <h3>¿Qué necesito?</h3>
    <br></br><br></br><br></br>

    <ul class="image-list-small">

      <li>
        <a><img src={ArduionoUno}/></a>
          <div class="details">
            <h3>Placa Arduino Uno USB</h3>
              <p class="image-author"><Link to="/shop">Consíguela aquí</Link></p>
          </div>
      </li>

      <li>
        <a><img src={Lcd}/></a>
          <div class="details">
            <h3>LCD de 16 x 2</h3>
              <p class="image-author"><Link to="/shop">Consíguelo aquí</Link></p>
          </div>
      </li>

      <li>
        <a><img src={Potenciometro}/></a>
          <div class="details">
            <h3>Potenciometro 10 K</h3>
              <p class="image-author"><Link to="/shop">Consíguelo aquí</Link></p>
          </div>
      </li>

      <li>
        <a><img src={Protoboard}/></a>
          <div class="details">
            <h3>Protoboard 400 puntos</h3>
              <p class="image-author"><Link to="/shop">Consíguela aquí</Link></p>
          </div>
      </li>

      <li>
        <a><img src={Dupont}/></a>
          <div class="details">
            <h3>Cables Dupont macho/macho</h3>
              <p class="image-author"><Link to="/shop">Consíguelos aquí</Link></p>
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
        <strong>Preparar el entorno</strong> <small>Conectaremos los componentes</small> 
        <br/>
        A estas alturas ya estamos más familiarizados con los componentes del Arduino y conocemos la cantidad de pines que tiene y su utilidad. Para el
        panel LCD no es muy diferente. Cuenta con 16 pines o sockets los cuales controlan cada uno de los caracteres que se muestran en la pantalla. La forma
        en la que se conectaran los cables de la placa hacia el panel será de la siguiente forma:

        <p><img class="exampleimages" src={ArduinoLCDConectar}/></p>
        <br/>
        En la siguiente tabla te mostramos como debe ir la correspondencia de los pines del Arduino hacia los pines del LCD
        <table class="table is-hoverable">
  <thead>
    <tr>
      <th>VSS</th>
      <th>VDD</th>
      <th>VO</th>
      <th>RS</th>
      <th>RW</th>
      <th>E</th>
      <th>D0</th>
      <th>D1</th>
      <th>D2</th>
      <th>D3</th>
      <th>D4</th>
      <th>D5</th>
      <th>D6</th>
      <th>D7</th>
      <th>A</th>
      <th>K</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <th>GND</th>
      <th>5v</th>
      <th>wiper</th>
      <th>Pin 7</th>
      <th>GND</th>
      <th>Pin 8</th>
      <th>-</th>
      <th>-</th>
      <th>-</th>
      <th>-</th>
      <th>Pin 9</th>
      <th>Pin 10</th>
      <th>Pin 11</th>
      <th>Pin 12</th>
      <th>5V</th>
      <th>GND</th>
    </tr>
  </tbody>
</table>
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
        <strong>Cargar el sketch</strong> <small>Subiendo un sketch con Firmata</small> 
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
        <strong>Comenzando con Johnny Five</strong> <small>Johnny Five es nuestro gran aliado en estos tutoriales</small> 
        <br/>
        La primer parte del codigo definirá nuestras variables y llamará el Framework de J5 para que pueda ser utilizado

        <div class="box">
  <article class="media">
    <div class="media-left">
    </div>
    <div class="media-content">
      <div class="content">
        <p>
        <strong>//Creamos nuestras variables y llamamos a la librería J5</strong><br/>
        <strong>var five = require("johnny-five"), lcd, board;</strong><br/>
        <strong>//Configuramos el puerto de nuestra placa</strong><br/>
        <strong>board = new five.Board(</strong><br/>
        <strong>port: "/dev/cu.usbmodemfa141"</strong><br/>
        <strong>});</strong><br/>
        <strong>board.on("ready", function() </strong><br/>
        <strong>console.log("Placa lista.");</strong><br/>
        </p>
      </div>
    </div>
  </article>
</div>
<br/>

A continuación vamos a configurar los pines que se utilizarán de acuerdo a la tabla anterior, asi como el numero de columnas y filas de nuestro display, la
luz de fondo y el controlador

<div class="box">
  <article class="media">
    <div class="media-left">
    </div>
    <div class="media-content">
      <div class="content">
        <p>
        <strong>lcd = new five.LCD(</strong><br/>
        <strong>pins: [7, 8, 9, 10, 11, 12],</strong><br/>
        <strong>rows: 1,</strong><br/>
        <strong>cols: 16,</strong><br/>
        <strong>backlight: 13,</strong><br/>
        <strong>controller: "2004A"</strong><br/>
        <strong>});</strong><br/>
        </p>
      </div>
    </div>
  </article>
</div>
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
        <strong>Comenzando a escribir</strong> <small>Los primeros caracteres en tu LCD</small> 
        <br/>
        La función useChar(code/name) te permite precargar en la memoria del display los caracteres que vas a utilizar en el momento de mostrar los mensajes, en este caso vamos a utilizar un corazón que ya viene en la librería de caracteres.
        <div class="box">
  <article class="media">
    <div class="media-left">
    </div>
    <div class="media-content">
      <div class="content">
        <p>
        <strong>lcd.useChar("heart");</strong><br/>
        </p>
      </div>
    </div>
  </article>
</div>
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
        <strong>La formula mágica!</strong> <small>Aqui viene la función final</small> 
        <br/>
        La siguiente función es la que ejecutará nuestra escritura en el LCD
         </p>

<p><img class="exampleimages" src={codelcd}/></p>



        </div>
        </div>
  </article>






</div>
                   

</div>
    )
  }
}

export default ArduinoLed;

