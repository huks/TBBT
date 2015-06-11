(function() {
  var app = angular.module("tbbtApp");

  // Factory
  var rosterFactory = function(wowapi) {
    
    var roster = [];

    var pushRowdata = function(rowdata) {
      if (rowdata.level == 100 && rowdata.items.averageItemLevel >= 640) {
        roster.push(rowdata);
      }
    };

    var createRoster = function(guild) {
      for (i = 0; i < guild.members.length; i++) {
        if (guild.members[i].rank < 4) {
          //members above rank 4 are "potential" raiders
          wowapi.getCharacterItems(guild.members[i].character.name).success(pushRowdata);
        }
      }
    };

    var getRoster = function() {
      roster = []; // init...
      wowapi.getGuildMembers().success(createRoster);
      return roster;
    };

    return {
      pushRowdata: pushRowdata,
      createRoster: createRoster,
      getRoster: getRoster
    };
  }

  app.factory("rosterFactory", rosterFactory);

  // Controller
  var rosterCtrl = function($scope, rosterFactory) {

    $scope.roster = rosterFactory.getRoster();

    $scope.rosterFilter = function(data) {
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

  app.controller("rosterCtrl", rosterCtrl);

}());