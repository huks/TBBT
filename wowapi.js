(function() {
    var app = angular.module("tbbtApp");

    var realm = "Nagrand";
    var guildName = "DTD";
    var apiKey = "998b45vfwkxvg6ftz5vurk8z789daq37";

    var wowapi = function($http) {

        var getGuildMembers = function() {
          console.log("getGuildMembers is called.");
          return $http.get("https://us.api.battle.net/wow/guild/" + realm + "/" + guildName + "?fields=members&locale=en_US&apikey=" + apiKey)
            .success(function(response) {
              return response;
            });
        };

        var getCharacterItems = function(name) {
          //console.log("getCharacterItems is called.");
          return $http.get("https://us.api.battle.net/wow/character/" + realm + "/" + name + "?fields=items&locale=en_US&apikey=" + apiKey)
            .success(function(response) {
              return response;
            });
        };
        
        var getClassColor = function(data) {
          //console.log("getClassColor is called.");
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
          } else if (data == 12) {
            return "demon_hunter" 
          } else {
            //console.log("Undefined WoW Class: " + data);
            return "else"
          }
        };
        
        return {
          getGuildMembers: getGuildMembers,
          getCharacterItems: getCharacterItems,
          getClassColor: getClassColor
        };
    };
    
    app.factory("wowapi", wowapi);
    
}());
