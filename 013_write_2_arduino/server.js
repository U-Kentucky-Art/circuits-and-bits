var express = require('express');
var app = express();
var SerialPort = require('serialport');

app.use(express.static('public'));

var port = new SerialPort('/dev/tty.usbmodem1451', {   //will need to input your own serial port address
  parser: SerialPort.parsers.readline('\n'),
  baudRate: 9600
});

var server = app.listen(8081, function () {
  console.log("Shazam! listening on port 8081");
})


app.get('/trigger_1', function(request,response){
  // response.json({"status":"success"});
  response.sendStatus(200);
  console.log("trigger 13 pressed");
  toggleLED('A');  //MAP 13 to A, 7 to G
})

app.get('/trigger_2', function(request,response){
  // response.json({"status":"success"});
  response.sendStatus(200);
  console.log("trigger 13 pressed");
  toggleLED('G');  //MAP 13 to A, 7 to G
})


port.on('data', function (data_received) {
  console.log(data_received);
});

var toggleLED = function(which_LED){
  port.write(which_LED);
  console.log("toggle signal sent LED:"+which_LED);
}


//ARDUINO CODE:

// int in_byte;
// boolean state_13, state_7;
//
// void setup() {
//
//  Serial.begin(9600);
//  pinMode(13, OUTPUT);
//  pinMode(7, OUTPUT);
//
//  state_13=false;
//  state_7=true;
// }
//
// void loop() {
//
//   if (Serial.available())  //read incoming message one char at a time
//   {
//      in_byte = Serial.read();
//
//      delay(10);
//
//      if(in_byte=='A'){
//         state_13=!state_13;
//         Serial.write("{\"recieved\":\"trigger 13\"}\n"); //super ugly but avoids having to do direct buffer manipulations
//      }
//
//      if(in_byte=='G'){
//         state_7=!state_7;
//         Serial.write("{\"recieved\":\"trigger 7\"}\n"); //super ugly but avoids having to do direct buffer manipulations
//
//      }
//   }
//
//   digitalWrite(13, state_13);
//   digitalWrite(7, state_7);
// }
