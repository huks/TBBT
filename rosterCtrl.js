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
        //console.log("roster is empty, creating roster...");
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

    $scope.roster = rosterFactory.getRoster(1); // 0: init load, 1: just load

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

    $scope.numClass = function(bar) {
      var num_class = 0;
      var str_class = "";
      var mFontSize = 10;
      for (i = 0; i < $scope.roster.length; i++) {
        if ($scope.roster[i].class == bar) {
          num_class++
        }
      }
      if (num_class > 0 && num_class <= 5) {
        mFontSize = mFontSize + num_class * 10;
      } else if (num_class > 5) {
        mFontSize = 70;
      }
      if (bar == 1) {
        str_class = " 영광충" // WARRIOR
        $scope.warriorStyle = { 'color' : '#C79C6E' , 'font-size' : mFontSize+'px' };
      } else if (bar == 2) {
        str_class = " PALADIN" // PALADIN
        $scope.paladinStyle = { 'color' : '#F58CBA' , 'font-size' : mFontSize+'px' };
      } else if (bar == 3) {
        str_class = " HUNTER" // HUNTER
        $scope.hunterStyle = { 'color' : '#ABD473' , 'font-size' : mFontSize+'px' };
      } else if (bar == 4) {
        str_class = " 도닥붕" // ROGUE
        $scope.rogueStyle = { 'color' : '#FFF569' , 'font-size' : mFontSize+'px' };
      } else if (bar == 5) {
        str_class = " 흰거" // PRIEST, original class color is #FFFFFF.
        $scope.priestStyle = { 'color' : '#FFFFFF' , 'font-size' : mFontSize+'px' };
      } else if (bar == 6) {
        str_class = " DEATHKNIGHT" // DEATHKNIGHT
        $scope.deathknightStyle = { 'color' : '#C41F3B' , 'font-size' : mFontSize+'px' };
      } else if (bar == 7) {
        str_class = " SHAMAN" // SHAMAN
        $scope.shamanStyle = { 'color' : '#0070DE' , 'font-size' : mFontSize+'px' };
      } else if (bar == 8) {
        str_class = " 정수기" // MAGE
        $scope.mageStyle = { 'color' : '#69CCF0' , 'font-size' : mFontSize+'px' };
      } else if (bar == 9) {
        str_class = " WARLOCK" // WARLOCK
        $scope.warlockStyle = { 'color' : '#9482C9' , 'font-size' : mFontSize+'px' };
      } else if (bar == 10) {
        str_class = " MONK" // MONK
        $scope.monkStyle = { 'color' : '#00FF96' , 'font-size' : mFontSize+'px' };
      } else if (bar == 11) {
        str_class = " DRUID" // DRUID
        $scope.druidStyle = { 'color' : '#FF7D0A' , 'font-size' : mFontSize+'px' };
      } else if (bar == 12) {
        str_class = " 일리충" // DEMONHUNTER
        $scope.demonhunterStyle = { 'color' : '#A330C9' , 'font-size' : mFontSize+'px' };
      } 
      return num_class + str_class
    }

    // $scope.getRosterStatistics = function() {

    //   var rosterStat = "";

    //   var num_warrior = 0;
    //   var num_paladin = 0;
    //   var num_hunter = 0;
    //   var num_rogue = 0;
    //   var num_priest = 0;
    //   var num_deathknight = 0;
    //   var num_shaman = 0;
    //   var num_mage = 0;
    //   var num_warlock = 0;
    //   var num_monk = 0;
    //   var num_druid = 0;
    //   var num_demonhunter = 0;

    //   for (i = 0; i < $scope.roster.length; i++) {
    //     var data = $scope.roster[i].class;
    //     if (data == 1) {
    //       num_warrior++
    //     } else if (data == 2) {
    //       num_paladin++
    //     } else if (data == 3) {
    //       num_hunter++
    //     } else if (data == 4) {
    //       num_rogue++
    //     } else if (data == 5) {
    //       num_priest++
    //     } else if (data == 6) {
    //       num_deathknight++
    //     } else if (data == 7) {
    //       num_shaman++
    //     } else if (data == 8) {
    //       num_mage++
    //     } else if (data == 9) {
    //       num_warlock++
    //     } else if (data == 10) {
    //       num_monk++
    //     } else if (data == 11) {
    //       num_druid++
    //     } else if (data == 12) {
    //       num_demonhunter++
    //     } else {
    //       // error
    //     }
    //   }

    //   rosterStat =
    //   num_warrior + " warrior(s), " + num_paladin + " paladin(s), " + num_hunter + " hunter(s), " +
    //   num_rogue + " rogue(s), " + num_priest + " priest(s), " + num_deathknight + " deathknight(s), " +
    //   num_shaman + " shaman(s), " + num_mage + " mage(s), " + num_warlock + " warlock(s), " +
    //   num_monk + " monk(s), " + num_druid + " druid(s), " + num_demonhunter + " demonhuner(s)";

    //   return rosterStat;
    // };

  }

  app.controller("rosterCtrl", rosterCtrl);

}());