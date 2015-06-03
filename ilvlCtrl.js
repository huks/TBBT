angular.module("tbbtApp").controller("ilvlCtrl", ["$scope", "$http",
  function($scope, $http) {
    $http.get("https://us.api.battle.net/wow/guild/" + realm + "/" + guildName + "?fields=members&locale=en_US&apikey=" + apiKey)
      .success(function(data) {
        var members = data.members;
        $scope.rowList = [];

        function getItemLvl(rowdata) {
          $http.get("https://us.api.battle.net/wow/character/" + realm + "/" + rowdata.character.name + "?fields=items&locale=en_US&apikey=" + apiKey)
            .success(function(rowdata) {
              if (rowdata.level == 100 && rowdata.items.averageItemLevel >= 640) {
                $scope.rowList.push(rowdata);
              }
            });
        }

        for (i = 0; i < members.length; i++) {
          getItemLvl(members[i]);
        }
      });

    $scope.iLvlFilter = function(data) {
      if (data < 655) {
        return "warning"
      } else {
        return ""
      }
    }

    $scope.getClass = function(data) {
      if (data == 1) {
        return "warrior"
      } else if (data == 2) {
        return "paladin"
      } else if (data == 3) {
        return "hunter"
      } else if (data == 4) {
        return "rogue"
      } else if (data == 5) {
        return "priest"
      } else if (data == 6) {
        return "deathknight"
      } else if (data == 7) {
        return "shaman"
      } else if (data == 8) {
        return "mage"
      } else if (data == 9) {
        return "warlock"
      } else if (data == 10) {
        return "monk"
      } else if (data == 11) {
        return "druid"
      } else {
        return ""
      }
    }
  }
]);
