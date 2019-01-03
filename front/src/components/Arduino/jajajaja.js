const Board = require('firmata'); // La constante Board llama a Firmata
Board.requestPort(function(err, port) { //Indicamos el puerto de Arduino
  if(err) {
    console.log(error);
    return;
  }

  var board = new Board(port.comName); //Nuevo tablero, enviamos puerto
  board.on("ready", function() { //Cuando la tarjeta este lista
    var ledOn = true; //ejecutamos función

    board.pinMode(13, board.MODES.OUTPUT); //Indicamos el PIN
    setInterval(function() { //configuramos intervalo
      if(ledOn) { 
        console.log('ON'); //cuando el led encienda escribe ON en consola
        board.digitalWrite(13, board.HIGH);//luz alta en PIN 13
      } else {
        console.log('OFF');//cuando el led se apague escribe OFF en consola
        board.digitalWrite(13, board.LOW);//luz baja en PIN 13
      }
      ledOn = !ledOn;
    }, 1000);
  });
})