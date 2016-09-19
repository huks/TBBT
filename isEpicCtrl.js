(function() {
  var app = angular.module("tbbtApp");

  var isEpicCtrl = function($scope, $cookieStore, rosterFactory, wowapi) {

    $scope.ngClick = function(param) {
      $cookieStore.put("isepic_realm", param.realm);
      $cookieStore.put("isepic_charactername", param.name);
      console.log(param.name + " IS NOW EPIC COOKIE!!");
    };
  
    $scope.customSelected = {};
    wowapi.getCharacterItems
      (
      $cookieStore.get("isepic_realm") || "Nagrand",
      $cookieStore.get("isepic_charactername") || "Kaltoe"
      ).success(function(response)
        {
          $scope.customSelected = response;      
        }
      );

    $scope.gearList = rosterFactory.getRoster();

    $scope.getEpic = function(data) {
      var qual = "else";
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
      } else if (data == 6) {
        qual = "artifact"
      } else {
        qual = "else"
      }
      return qual;
    }
  }

  app.controller("isEpicCtrl", isEpicCtrl);

}());
