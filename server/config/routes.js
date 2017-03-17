var taskController = require('../tasks/taskController.js');
var userController = require('../users/userController.js');

module.exports = function (app, express) {

  app.get('/api/users/tasks');
  app.post('/api/users/tasks');
  app.delete('/api/users/tasks/:id');

};