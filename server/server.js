var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

app.use(express.static('client'));
app.use(bodyParser.json());

mongoose.connect('mongodb://greenfield:<greenfield>@ds145039.mlab.com:45039/metis_database');

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
  console.log('mongoDB connection is open');
});

var port = process.env.PORT || 8888;

app.listen(port, function() {
  console.log('Express-SERVER listening at port: ' + port);
});
