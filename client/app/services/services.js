angular.module('app.services', [])

.factory('Tasks', function ($http, $location) {

  // User data to be populated on login
  var userData = {};
  // Array of all tasks to populate calendar view
  var allTasks = [];
  // Events array to be set and retrieved with helpers below
  var tasks = [];

  // Helper to set userData object
  var setUserData = function(data) {
    userData = data;
  };

  // Helper to access userData object
  var getUserData = function() {
    return userData;
  };

  // Helper to access tasks array
  var getTasks = function() {
    return tasks;
  };

  // Helper to set tasks array
  var setTasks = function(eventsList) {
    tasks = eventsList;
  };

  // Grab tasks from allTasks
  var populateTaskList = function() {
    return $http({
      method: 'GET',
      url: '/api/tasks/' + window.authResponse.id_token
    })
    .then(function(res) {
      allTasks = res.data;
      return allTasks;
    });
  };

  var removeTask = function(id) {
    // Remove task from database
    return $http({
      method: 'DELETE',
      url: '/api/tasks/' + id
    })
    .then(function(res) {
      return res.data;
    });
  };

  // Add tasks to allTasks
  var sendTaskList = function(taskList) {
    allTasks = allTasks.concat(taskList);
  };

  // Authentication token for header of POST request
  var auth = "Bearer " + window.authResponse.access_token;

  // Send events to Google Calendar
  var sendToGoogle = function(event) {
    return $http({
      method: 'POST',
      url: 'https://www.googleapis.com/calendar/v3/calendars/primary/events',
      headers: {
        "Content-Type": "application/json",
        "Authorization": auth
      },
      data: event
    })
    .then(function(res) {
      return res;
    });
  };

  return {
    setUserData: setUserData,
    getUserData: getUserData,
    getTasks: getTasks,
    setTasks: setTasks,
    populateTaskList: populateTaskList,
    removeTask: removeTask,
    sendTaskList: sendTaskList,
    sendToGoogle: sendToGoogle
  };
});