(function() {
  var app = angular.module("tbbtApp");

  // Factory
  var rosterFactory = function(wowapi) {
    
    var roster = [];

    var pushRowdata = function(rowdata) {
      /*
       * characer max level for the legion expansion is 110.
       * preferred ilvl is 825+.
       */
      if (rowdata.level == 110 && rowdata.items.averageItemLevel >= 825) {
        roster.push(rowdata);
      }
    };

    var createRoster = function(guild) {
      console.log("createRoster is called: " + guild.name);
      for (i = 0; i < guild.members.length; i++) {
        wowapi.getCharacterItems(guild.realm, guild.members[i].character.name).success(pushRowdata);
      }
    };

    var getRoster = function() {
      console.log("getRoster is called...");
      /* checking if object is empty */
      if (Object.keys(roster).length == 0) {
        wowapi.getGuildMembers("Nagrand", "DTD").success(createRoster);
        wowapi.getGuildMembers("Dreadmaul", "Raid Warning").success(createRoster);
      }      
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