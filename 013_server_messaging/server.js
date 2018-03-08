//a very very simple API example

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Request = require('request'); 

function HTTPmessage(endpoint, message, callback){
  Request.post({url: endpoint, json: true, body: {"message":message}},
    function (error, _response, body){
      callback(error,body);
    })
}

app.use(bodyParser.json())

//here, we are going to create custom routes
app.get('/trigger_1_endpoint', function(request,response){
  response.json({"status":"success", "pressed":"trigger ONE"});
  console.log("trigger 1 pressed");
})

app.post('/webhook', function(request, response){
  console.log(request.body);
  response.json({"status":"success", "origin":"walkie-talkie-two"}); 
  
})

app.post('/remote_trigger', function(request, response){

  console.log(request.body);
  
  HTTPmessage(request.body.url,request.body.message, function(error, data){
    if(error){
      response.json({"status":"failed"}); 
    }
    else{
      //console.log(body);
      console.log("Activated Remote Trigger");
      response.json(data); 
    }
  })
  

})

app.use(express.static('public'));

app.listen(process.env.PORT || 8081, function () {
  console.log("Shazam!")
})
