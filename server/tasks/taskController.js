var Task = require('./taskModel.js');

module.exports = {

  // get tasks for logged in user
  getTasks: function(req, res) {
    console.log('*** GETTING TASKS ***')
    var user = req.params.id;
    Task.find({user: user}, function(err, tasks) {
      if (err) {
        console.log(err);
      } else {
        console.log('*** TASKS FOUND ***', tasks);
        res.send(tasks);
      }
    });
  },

  // add task for logged in user
  addTask: function(req, res) {
    console.log('*** ADDING TASK ***');
    var task = req.body;
    console.log('Task:', task);
    task = new Task(task);
    task.save(function(err, task) {
      console.log('*** TASK ADDED ***', task);
      res.send(task);
    });
  },

  // remove task for logged in user
  removeTask: function(req, res) {
    console.log('*** REMOVING TASK ***');
    var id = req.params.id;
    Task.remove({_id: id}, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log('*** TASK REMOVED ***');
        res.send('Task Deleted.');
      }
    });
  }

};