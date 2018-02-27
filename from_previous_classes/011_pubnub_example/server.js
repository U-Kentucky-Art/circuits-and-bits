var express = require('express');
var app = express();
var dotenv = require('dotenv');
var PubNub = require('pubnub');
var server = app.listen(8081, function () {
  console.log("Shazam! listening on port 8081");
})

dotenv.load();

app.use(express.static('public'));

var pubnub = new PubNub({
    publishKey : process.env.publishKey,
    subscribeKey : process.env.subscribeKey,
    secretKey: process.env.secretKey,
})

function publishSampleMessage(whichTrigger) {
    var publishConfig = {
        channel : "evil_overlord_command_channel",
        message : whichTrigger
    }
    pubnub.publish(publishConfig, function(status, response) {
        console.log(status, response);
    })
}

app.get('/trigger_1', function(request,response){
  // response.json({"status":"success"});
  response.sendStatus(200);
  console.log("trigger 1 pressed");
  publishSampleMessage('trigger_1');

})

app.get('/trigger_2', function(request,response){
  // response.json({"status":"success"});
  response.sendStatus(200);
  console.log("trigger 2 pressed");
  publishSampleMessage('trigger_2');

})
