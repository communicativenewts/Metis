var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

app.use(express.static('client'));
app.use(bodyParser.json());

var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/';
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
  console.log('mongoDB connection is open');
});

var port = process.env.PORT || 8888;

app.listen(port, function() {
  console.log('Express-SERVER listening at port: ' + port);
});