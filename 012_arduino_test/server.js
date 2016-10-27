//ping Arduion every three second and recieve status back
var SerialPort = require('serialport');

var port = new SerialPort('/dev/tty.usbmodem1451', {   //will need to input your own serial port address
  parser: SerialPort.parsers.readline('\n'),
  baudRate: 9600
});

port.on('data', function (data_received) {
  console.log(data_received);
});

var pingDevice = function(){
  port.write("P");    //P for ping
  console.log("ping");
}

setInterval(pingDevice, 3000);




//ARDUINO CODE:

// int in_byte;
//
// void setup() {
//
//  Serial.begin(9600);
//
// }
//
// void loop() {
//
//   if (Serial.available())  //read incoming message one char at a time
//   {
//      in_byte = Serial.read();
//
//      delay(100);
//      if(in_byte=='P'){
//        Serial.write("{\"status\":\"active\"}\n");
//      }
//   }
// }
