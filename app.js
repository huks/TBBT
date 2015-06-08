(function() {
  var app = angular.module("tbbtApp", ["ngRoute", "ui.bootstrap"]);
  
  app.config(function($routeProvider) {
  $routeProvider
    .when("/ilvl", {
      templateUrl: "ilvl.html",
      controller: "ilvlCtrl"
    })
    .when("/roster", {
      templateUrl: "roster.html",
      controller: "rosterCtrl"
    })
    .otherwise({
      redirectTo: "/ilvl"
    });
  });
}());


