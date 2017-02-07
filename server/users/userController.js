//currently unused, you will need to refactor all files in server/tasks, server/config and server/users in order to setup the database as partway through our project we pivoted to have all our data saved on the google calendar api.

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./userModel.js');


module.exports = {

  //currently unused
  signup: function(req, res) {
    mongoose.model('users', function(err, user) {

      if (err) { res.send(err); }
      console.log(req.body, 'newUser was ADDED to the database');

      var newUser = new User({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        start_time: req.body.start,
        end_time: req.body.time,
        id_token: req.body.id_token
      });

      newUser.save();
    });
  }
}
