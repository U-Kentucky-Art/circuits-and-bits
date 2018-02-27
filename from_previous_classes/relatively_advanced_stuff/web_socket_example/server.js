//a very very simple server

var express = require('express');
var app = express();

app.use(express.static('public'));

var server = app.listen(8081, function () {
  console.log("Shazam!");
})

var io = require('socket.io')(server);

io.sockets.on('connection', function (socket) {
  console.log("Client ID"+socket.id+" connected");

  socket.emit('timestamp', {
    'timestamp':Date(),
    'client_id':'player_0',
    'video_trigger':'start'
  });

  socket.on('test_call', function(data){
    console.log(data);
  })

  socket.on('disconnect', function() {
    console.log("Client ID"+socket.id+" has disconnected");
  })
})
