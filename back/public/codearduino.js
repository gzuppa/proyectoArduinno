const Board = require('firmata');

Board.requestPort(function(err,port) {
  if (err) {
    console.log(err);
    return;
  }

  const board = new Board(port.comName);

  board.on('ready', function(){
    board.pinMode(13, board.MODES.OUTPUT);

    let ledOn = true;
    setInterval(function(){
      if (ledOn){
        console.log("ON");
        board.digitalWrite(13, board.HIGH);
      } else {
        board.digitalWrite(13, board.LOW);
      }
      ledOn = !ledOn
    },1000)

    
  })

})
