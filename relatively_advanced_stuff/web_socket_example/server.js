//a very very simple server

var express = require('express');
var app = express();

app.use(express.static('public'));

var server = app.listen(8081, function () {
  console.log("Shazam!")
})

var io = require('socket.io')(server);

io.sockets.on('connection',
  function (socket) {

    socket.broadcast.emit('timestamp', data);

    socket.on('disconnect', function() {
      console.log("Client has disconnected");
    });
  }
)
