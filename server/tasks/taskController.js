var Task = require('./taskModel.js');

module.exports = {

  getTasks: function(req, res) {
    // get tasks for logged in user
    var user = req.params.id;
  },

  addTask: function(req, res) {
    // add task for logged in user
    var task = req.body.task;
    console.log('Task:', task);
  },

  removeTask: function(req, res) {
    // remove task for logged in user
    var id = req.params.id;
  }

};