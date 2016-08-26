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
        // if (guild.members[i].rank < 4) { // commented out because Kaltoe wants to be a raider!!
          //members above rank 4 are "potential" raiders
          wowapi.getCharacterItems(guild.members[i].character.name).success(pushRowdata);
        // }
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
  var rosterCtrl = function($scope, rosterFactory, wowapi) {

    $scope.roster = rosterFactory.getRoster();

    $scope.rosterFilter = function(data) {
      if (data < 655) {
        return "warning"
      } else {
        return ""
      }
    }

    $scope.getClass = function(data) {
      return wowapi.getClassColor(data);
    };

  }

  app.controller("rosterCtrl", rosterCtrl);

}());