(function() {
  var app = angular.module('tbbtApp', ['ui.router', 'ui.bootstrap']);

  app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('raiders', {
          url: '/raiders',
          templateUrl: '/raiders.html',
          controller: 'RaiderCtrl'
        })
        .state('roster', {
          url: '/roster',
          templateUrl: '/roster.html',
          controller: 'RosterCtrl'
        });

      $urlRouterProvider.otherwise('raiders');
  }]);
  
}());