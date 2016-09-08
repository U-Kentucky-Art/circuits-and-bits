//a very very simple server

var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(8081, function () {
  console.log("Shazam!")
})
