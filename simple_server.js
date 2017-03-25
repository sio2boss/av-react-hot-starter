var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/build'));

app.listen(3000, function () {
  console.log('React starter running on :3000!');
});