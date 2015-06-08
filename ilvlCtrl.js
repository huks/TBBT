(function() {
  var app = angular.module("tbbtApp");

  // Factory
  var ilvlFactory = function(wowapi) {
    
    var ilvlList = [];

    var pushRowdata = function(rowdata) {
      if (rowdata.level == 100 && rowdata.items.averageItemLevel >= 640) {
        ilvlList.push(rowdata);
      }
    };

    var createIlvlList = function(guild) {
      for (i = 0; i < guild.members.length; i++) {
        wowapi.getCharacterItems(guild.members[i].character.name).success(pushRowdata);
      }
    };

    var getIlvlList = function() {
      ilvlList = []; // init...
      wowapi.getGuildMembers().success(createIlvlList);
      return ilvlList;
    };

    return {
      pushRowdata: pushRowdata,
      createIlvlList: createIlvlList,
      getIlvlList: getIlvlList
    };
  }

  app.factory("ilvlFactory", ilvlFactory);

  // Controller
  var ilvlCtrl = function($scope, ilvlFactory) {

    $scope.ilvlList = ilvlFactory.getIlvlList();

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

  app.controller("ilvlCtrl", ilvlCtrl);

}());