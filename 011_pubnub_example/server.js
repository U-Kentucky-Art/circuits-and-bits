var express = require('express');
var app = express();
var PubNub = require('pubnub');
var server = app.listen(8081, function () {
  console.log("Shazam! listening on port 8081");
})

app.use(express.static('public'));

var pubnub = new PubNub({
    publishKey : 'pub-c-455ea36c-14f7-4956-a9ef-67587a092d3a',
    subscribeKey : 'sub-c-ebae0edc-863e-11e6-b8cb-02ee2ddab7fe',
    secretKey: 'sec-c-NzczNWY1OGEtOTE3Mi00OGQ2LWJiMDItZGUyYzRhZjE3NTc4',
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
