//a very very simple server

var express = require('express');
var app = express();

//here, we are going to create custom routes
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

app.get('/', function(request,response){
  // response.json({"status":"success"});
  response.send(200, "waiting for your command, master");
  console.log("standby, awaiting command");
})

app.listen(8081, function () {
  console.log("Shazam!")
})
