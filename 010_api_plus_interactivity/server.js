//a very very simple API example

var express = require('express');
var app = express();

//here, we are going to create custom routes
app.get('/trigger_1', function(request,response){
  response.json({"status":"success", "pressed":"trigger ONE"});
  console.log("trigger 1 pressed");
})

app.get('/trigger_2', function(request,response){
  response.json({"status":"success", "pressed":"trigger TWO"});
  console.log("trigger 2 pressed");
})

app.use(express.static('public'));

app.listen(process.env.PORT || 8081, function () {
  console.log("Shazam!")
})
