//currently unused, you will need to refactor all files in server/tasks, server/config and server/users in order to setup the database as partway through our project we pivoted to have all our data saved on the google calendar api.

var mongoose = require('mongoose');
var User = require('../users/userModel.js');
var Schema = mongoose.Schema;

//currently unused - tasks not saved to database
var TaskSchema = new mongoose.Schema({
  task: String,
  date_due: Date,
  time_due: Date,
  duration: Date,
  priority: Number,
  completed: Boolean,
  id_users: [{type: Schema.Types.ObjectId, ref: 'User'}];
});

var Task = mongoose.model('tasks', TaskSchema);

module.exports = Task;