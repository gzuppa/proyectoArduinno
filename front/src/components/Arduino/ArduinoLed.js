import React, { Component } from 'react';
import {five, board, led} from 'johnny-five';

class ArduinoLed extends Component{

  constructor(){
    super();
    this.state = {

      board = new five.Board();
 
      board.on("ready", function() {
        led = new five.Led(13);
        led.strobe(1000); 
      });

    }
  } 

  render(){
    return(
  
<div>



</div>
    )
  }
}

export default ArduinoLed;

