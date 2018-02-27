//a very very simple server

var express = require('express');
var app = express();
var server = app.listen(8081, function () {
  console.log("Shazam! listening on port 8081");
})

app.use(express.static('public'));

var io = require('socket.io')(server);    //http://socket.io/docs/
var name_spaced_com = io.of('/my_namespace'); //change this name!!!

name_spaced_com.on('connection', function (socket) {
  console.log("Client ID"+socket.id+" connected");

  app.get('/trigger_1', function(request,response){
    // response.json({"status":"success"});
    response.sendStatus(200);
    console.log("trigger 1 pressed");
    name_spaced_com.emit('trigger_1');
  })

  app.get('/trigger_2', function(request,response){
    // response.json({"status":"success"});
    response.sendStatus(200);
    console.log("trigger 2 pressed");
    name_spaced_com.emit('trigger_2');
  })
})
