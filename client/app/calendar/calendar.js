angular.module('app.calendar', ['ngSanitize'])
  .controller('calendarCtrl', function($scope, $sce, $location, Tasks) {

    var tz = jstz.determine();

    $scope.makeUserName = function() {
      var email = window.profile.U3;
      var index = email.indexOf('@');
      return email.slice(0, index);
    };

    // Use to store tasks from database
    $scope.tasks = [];

    // User settings retrieved at login
    $scope.userData = {
      user: $scope.makeUserName(),
      tz: tz.name()
    };

    // set userData object in the Tasks factory
    Tasks.setUserData($scope.userData);

    // source for iframe used in calendar.html
    $scope.calSource = "https://calendar.google.com/calendar/embed?showPrint=0&mode=AGENDA&src=" + $scope.userData.user + "%40gmail.com&ctz=" + $scope.userData.tz;

    // Force iframe to use dynamically created link as trusted src
    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    };

    // Redirect to different view
    $scope.redirect = function(page) {
      $location.path(page);
    };

    // Get tasks saved in database
    $scope.populateTaskList = function() {
      $scope.tasks = Tasks.populateTaskList();
    };

    // Populate task list when app loads
    $scope.populateTaskList();
  });