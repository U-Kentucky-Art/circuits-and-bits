//a very very simple API example

var express = require('express');
var app = express();

//here, we are going to create custom routes
app.get('/trigger_1', function(request,response){
  // response.json({"status":"success"});
  response.status(200);
  console.log("trigger 1 pressed");
})

app.get('/trigger_2', function(request,response){
  // response.json({"status":"success"});
  response.status(200);
  console.log("trigger 2 pressed");
})

app.get('/', function(request,response){
  // response.json({"status":"success"});
  //console.log(request);
  response.status(200).send("waiting for your command, master");
  console.log("standby, awaiting command");
})

app.listen(process.env.PORT || 8081, function () {
  console.log("Shazam!")
})
