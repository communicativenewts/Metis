var taskController = require('../tasks/taskController.js');

module.exports = function (app, express) {

  app.get('/api/tasks/:id', taskController.getTasks);
  app.post('/api/tasks', taskController.addTask);
  app.delete('/api/tasks/:id', taskController.removeTask);

};