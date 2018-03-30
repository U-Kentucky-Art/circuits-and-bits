var Fetch = require('fetch');
var Request = require('request');
var express = require('express');
var app = express();

function SendCommand(function_name,command){
  var particle_url='https://api.particle.io/v1/devices/'+process.env.DEVICE_ID+'/'+function_name;
  
  Request.post({url:particle_url, form:{access_token:process.env.ACCESS_TOKEN, args:command}},
    function (error, _response, body){
      console.log(body);      // here for debugging
    })
}

app.get("/on", function(request, response){
  SendCommand('ledTest','on');
  response.json({"status":"success"});
})

app.get("/off", function(request, response){
  SendCommand('ledTest','off');
  response.json({"status":"success"});
})

app.use(express.static('public'));


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


/* --------------------------------- */
/*        PARTICLE CODE              */
/* --------------------------------- */

// int test_LED = D7;

// int LedTest(String command){

//     if (command == "on") {
//         digitalWrite(test_LED, HIGH);
//         return 1;
//     }
//     else if (command == "off") {
//         digitalWrite(test_LED, LOW);
//         return 0;
//     }
//     else {
//         return -1;
//     }

// }

// void setup() {
//     pinMode(test_LED, OUTPUT);
//     Particle.function("ledtest", LedTest);
// }

// void loop() {
//     //
// }