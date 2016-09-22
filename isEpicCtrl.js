(function() {
  var app = angular.module("tbbtApp");

  var isEpicCtrl = function($scope, $cookieStore, rosterFactory, wowapi) {    
  
    $scope.customSelected = {};

    wowapi.getCharacterItems
    (
      $cookieStore.get("isepic_realm") || "Nagrand",
      $cookieStore.get("isepic_charactername") || "Kaltoe"
    ).success(function(char_items)
      {
        wowapi.getCharacterTalents(char_items.realm, char_items.name).success(function(char_talents)
        {
          char_items.talents = char_talents.talents; // add new "talents" property to WoW JSON object
          $scope.customSelected = char_items;
        });  
      }
    );

    $scope.gearList = rosterFactory.getRoster(1);

    $scope.getEpic = function(data) {
      return wowapi.getEpic(data);
    };

    $scope.ngClick = function(param) {
      $cookieStore.put("isepic_realm", param.realm);
      $cookieStore.put("isepic_charactername", param.name);
    };
    
  }

  app.controller("isEpicCtrl", isEpicCtrl);

}());
