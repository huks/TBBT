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

    $scope.gearList = rosterFactory.getRoster(1);

    $scope.getEpic = function(data) {
      return wowapi.getEpic(data);
    };
  }

  app.controller("isEpicCtrl", isEpicCtrl);

}());
