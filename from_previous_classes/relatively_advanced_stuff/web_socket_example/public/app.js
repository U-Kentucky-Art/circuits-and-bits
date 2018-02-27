
function setup(){
  createCanvas(400, 400);
  background(0);

  console.log("Begin logging:");

  var socket = io();
  //var socket = io.connect('http://localhost:8081');

  socket.on('timestamp', function(data){
    console.log(data);
  })

  socket.emit('test_call', 'hello');

}
