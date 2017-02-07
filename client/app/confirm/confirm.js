angular.module('app.confirm', [])
  .controller('confirmCtrl', function($scope, $location, Tasks, Algorithm) {

    // Grab saved user data
    $scope.userData = Tasks.getUserData();

    // Previously sorted events array
    $scope.sortedEvents = Tasks.getTasks();

    // Remove time from UTC date
    $scope.formatDate = function() {
      var date = $scope.userData.longDate;
      var dateIndex = date.indexOf(':');
      var formatted = date.slice(0, dateIndex - 3);
      return formatted;
    };

    // Create events array to be used for confirmation page view
    $scope.displaySchedule = function() {
      $scope.events = Algorithm.displaySchedule($scope.sortedEvents);
      $scope.date = $scope.formatDate();
    };

    // Create displaySchedule events array
    $scope.displaySchedule();

    // Add events in events array to calendar
    $scope.addToCalendar = function() {
      $scope.events.forEach(function(event) {
        event.date = $scope.formatDate();
      });
      // Send events array to internal storage array in services.js
      Tasks.sendTaskList($scope.events);
      // Create events array formatted for Google Calendar API
      var apiEvents = Algorithm.makeAPI($scope.sortedEvents, $scope.userData);
      // Send each event object in array to the Google Calendar API
      apiEvents.forEach(function(event) {
        Tasks.sendToGoogle(event);
      });
      $scope.redirect('/calendar');
    };

    // Redirect to different page view
    $scope.redirect = function(page) {
      $location.path(page);
    };
  });