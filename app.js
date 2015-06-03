var realm = "Frostmourne";
var guildName = "The Big Bad Theory";
var apiKey = "998b45vfwkxvg6ftz5vurk8z789daq37";

var app = angular.module("tbbtApp", ["ngRoute"]);

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
