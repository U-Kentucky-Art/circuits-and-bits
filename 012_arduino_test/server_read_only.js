var SerialPort = require('serialport');

var port = new SerialPort('/dev/tty.usbmodem1411', {   //will need to input your own serial port address
  parser: SerialPort.parsers.readline('\n'),
  baudRate: 9600
});

port.on('data', function (data_received) {
  console.log(data_received);
});


//ARDUINO CODE:

// void setup() {
//
//  Serial.begin(9600);
//
// }
//
// void loop() {
//   Serial.write("{\"status\":\"active\"}\n");
//
//   delay(1000);
// }
