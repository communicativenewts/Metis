//currently unused, you will need to refactor all files in server/tasks, server/config and server/users in order to setup the database as partway through our project we pivoted to have all our data saved on the google calendar api.

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
  start_time: Date,
  end_time: Date,
  id_token: String
});

var User = mongoose.model('users', UserSchema);

module.exports = User;