(function() {
  var app = angular.module("tbbtApp");

  /* Roster Factory */
  var rosterFactory = function(wowapi) {
    
    var roster = [];

    var pushRowdata = function(rowdata) {
      /* minimum ilvl for the raider is 810. */
      if (rowdata.items.averageItemLevel >= 810) {
        roster.push(rowdata);
      }
    };

    var createRoster = function(guild) {
      //console.log("createRoster is called: " + guild.name);
      for (i = 0; i < guild.members.length; i++) {
        /* characer max level for the legion expansion is 110. */
        if (guild.members[i].character.level == 110) {
          wowapi.getCharacterItems(guild.realm, guild.members[i].character.name).success(pushRowdata);
        }        
      }
    };

    var getRoster = function(init) {
      //console.log("getRoster is called.");
      if (init == 0) {
        roster = [];
      }
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

  /* Roster Controller */
  var rosterCtrl = function($scope, rosterFactory, wowapi) {

    $scope.roster = rosterFactory.getRoster(0);

    $scope.rosterFilter = function(data) {
      if (data < 825) {
        /* preferred ilvl for the emerald nightmare raid is 825+. */
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