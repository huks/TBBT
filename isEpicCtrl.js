(function() {
  var app = angular.module("tbbtApp");

  var isEpicCtrl = function($scope, $cookieStore, rosterFactory, wowapi) {

    $scope.ngClick = function(param) {
      $cookieStore.put("is_epic_cookie", param);
    };
  
    $scope.customSelected = {};
    wowapi.getCharacterItems($cookieStore.get("is_epic_cookie")).success(function(response) {
      $scope.customSelected = response;      
    });

    $scope.gearList = rosterFactory.getRoster();

    $scope.getEpic = function(data) {
      var qual = "common";
      if (data === 0) {
        qual = "poor"
      } else if (data == 1) {
        qual = "common"
      } else if (data == 2) {
        qual = "uncommon"
      } else if (data == 3) {
        qual = "rare"
      } else if (data == 4) {
        qual = "epic"
      } else if (data == 5) {
        qual = "legendary"
      }
      return qual;
    }
  }

  app.controller("isEpicCtrl", isEpicCtrl);

}());
