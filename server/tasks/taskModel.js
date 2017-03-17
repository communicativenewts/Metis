var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  task: String,
  date: String,
  time: String,
  user: String
});

module.exports = mongoose.model('Task', TaskSchema);