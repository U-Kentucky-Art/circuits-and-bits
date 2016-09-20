//a very very simple server

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/trigger_1', function(request,response){
  // response.json({"status":"success"});
  response.sendStatus(200);
  console.log("trigger 1 pressed");
})

app.get('/trigger_2', function(request,response){
  // response.json({"status":"success"});
  response.sendStatus(200);
  console.log("trigger 2 pressed");
})

// rely again on static server -->

// app.get('/', function(request,response){
//   // response.json({"status":"success"});
//   response.send(200, "waiting for your command, master");
//   console.log("standby, awaiting command");
// })

var server = app.listen(8081, function () {
  console.log("Shazam! listening on port 8081");
})
