var express = require('express');
var app = express();

// for static assets
app.use(express.static(__dirname + '/dist'));

// for bundled js
app.use(express.static(__dirname + '/build'));

app.listen(3000, function () {
  console.log('React starter running on :3000');
});