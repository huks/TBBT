(function() {
  /**
   * ngRoute: provides routing and deeplinking services and directives
   * ngCookies: for reading and writing browser cookies
   * ui.boostrap: Bootstrap's markup and CSS
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
      redirectTo: "/roster"
    });
  });
}());


