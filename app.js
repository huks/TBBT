(function() {
  var app = angular.module("tbbtApp", ["ngRoute", "ui.bootstrap"]);
  
  app.config(function($routeProvider) {
  $routeProvider
    .when("/isepic", {
      templateUrl: "isEpic.html",
      controller: "isEpicCtrl"
    })
    .when("/raider", {
      templateUrl: "raider.html",
      controller: "raiderCtrl"
    })
    .when("/roster", {
      templateUrl: "roster.html",
      controller: "rosterCtrl"
    })
    .otherwise({
      redirectTo: "/raider"
    });
  });
}());


