(function() {
  /**
   * ngRoute: Provides routing and deeplinking services and directives
   * ngCookies: ngCookie
   * ui.boostrap: ui.bootstrap
   */
  var app = angular.module("tbbtApp", ["ngRoute", "ngCookies", "ui.bootstrap"]);  
  
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
      redirectTo: "/isepic"
    });
  });
}());


