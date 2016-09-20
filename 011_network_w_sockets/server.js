//a very very simple server

var express = require('express');
var app = express();
var server = app.listen(8081, function () {
  console.log("Shazam! listening on port 8081");
})
var io = require('socket.io')(server);    //http://socket.io/docs/

app.use(express.static('public'));

io.sockets.on('connection', function (socket) {
  console.log("Client ID"+socket.id+" connected");

  app.get('/trigger_1', function(request,response){
    // response.json({"status":"success"});
    response.sendStatus(200);
    console.log("trigger 1 pressed");
    socket.emit('trigger_1');
  })

  app.get('/trigger_2', function(request,response){
    // response.json({"status":"success"});
    response.sendStatus(200);
    console.log("trigger 2 pressed");
    socket.emit('trigger_2');
  })
})
