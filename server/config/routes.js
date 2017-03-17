var taskController = require('../tasks/taskController.js');

module.exports = function (app, express) {

  app.get('/api/tasks/:id');
  app.post('/api/tasks');
  app.delete('/api/tasks/:id');

};