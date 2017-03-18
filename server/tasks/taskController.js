var Task = require('./taskModel.js');

module.exports = {

  // get tasks for logged in user
  getTasks: function(req, res) {
    var user = req.params.id;
    Task.find({user: user}, function(err, tasks) {
      if (err) {
        console.log(err);
      } else {
        res.send(tasks);
      }
    });
  },

  // add task for logged in user
  addTask: function(req, res) {
    var task = req.body;
    console.log('Task:', task);
    task = new Task(task);
    task.save(function(err, bracket) {
      res.send(task);
    });
  },

  // remove task for logged in user
  removeTask: function(req, res) {
    var id = req.params.id;
    Task.remove({_id: id}, function(err) {
      if (err) {
        console.log(err);
      } else {
        res.send('Task Deleted.');
      }
    });
  }

};