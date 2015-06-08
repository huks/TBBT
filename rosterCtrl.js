(function() {
  var app = angular.module("tbbtApp");
  
  var rosterCtrl = function($scope, ilvlFactory) {
    $scope.selected = undefined;
    $scope.rosterList = ilvlFactory.getIlvlList();
  };
  
  app.controller("rosterCtrl", rosterCtrl);

}());