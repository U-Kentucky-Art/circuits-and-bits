var express = require('express');
var app = express();
var SerialPort = require('serialport');

app.use(express.static('public'));

var port = new SerialPort('/dev/tty.usbmodem1411', {   //will need to input your own serial port address
  parser: SerialPort.parsers.readline('\n'),
  baudRate: 9600
});

var server = app.listen(8081, function () {
  console.log("Shazam! listening on port 8081");
})

var io = require('socket.io')(server);    //http://socket.io/docs/
var name_spaced_com = io.of('/my_namespace'); //change this name!!!

name_spaced_com.on('connection', function (socket) {
//this is a little brute force but demonstrates the concept
  console.log("Client ID"+socket.id+" connected");

  port.on('data', function (data_received) {
    //console.log(data_received);
    if(data_received==="A"){
      console.log("switch closure detected");
      name_spaced_com.emit('trigger_1');
    }
  });
})

//ARDUINO CODE:

// int input_pin=7;
// int output_pin=13;
//
// void setup(){
//
//   pinMode(input_pin, INPUT);
//   pinMode(output_pin, OUTPUT);
//   Serial.begin(9600);
// }
//
// void loop(){
//
//   if(digitalRead(input_pin)==HIGH){
//
//     Serial.print("A\n");
//     digitalWrite(output_pin,HIGH);
//     delay(250);                    //cheap debouncing
//     digitalWrite(output_pin,LOW);
//   }
//
// }
