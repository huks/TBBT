var app = angular.module('tbbtApp', []);
app.controller('tbbtCtrl', function($scope, $http) {
	$http.get("https://us.api.battle.net/wow/guild/Frostmourne/The%20Big%20Bad%20Theory?fields=members&locale=en_US&apikey=998b45vfwkxvg6ftz5vurk8z789daq37")
	.success(function (data) {
    var members = data.members;
    $scope.rowList = [];

    for(i=0; i<members.length; i++){
      $http.get("https://us.api.battle.net/wow/character/Frostmourne/"+members[i].character.name+"?fields=items&locale=en_US&apikey=998b45vfwkxvg6ftz5vurk8z789daq37")
      .success(function (rowdata) {
        if(rowdata.level == 100){
          $scope.rowList.push(rowdata);
        }
      });
    }
  });
});
