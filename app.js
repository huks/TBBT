var app = angular.module('tbbtApp', []);
var realm = "Frostmourne";
var guildName = "The Big Bad Theory";
var apiKey = "998b45vfwkxvg6ftz5vurk8z789daq37";
app.controller('tbbtCtrl', function($scope, $http) {
	$http.get("https://us.api.battle.net/wow/guild/"+realm+"/"+guildName+"?fields=members&locale=en_US&apikey="+apiKey)
	.success(function (data) {
    var members = data.members;
    $scope.rowList = [];
    
    function getItemLvl(rowdata){
      $http.get("https://us.api.battle.net/wow/character/"+realm+"/"+rowdata.character.name+"?fields=items&locale=en_US&apikey="+apiKey)
      .success(function (rowdata) {
        if(rowdata.level == 100 && rowdata.items.averageItemLevel >= 640){
          $scope.rowList.push(rowdata);
        }
      });
    }

    for(i=0; i<members.length; i++){
      getItemLvl(members[i]);
    }
  });
});
