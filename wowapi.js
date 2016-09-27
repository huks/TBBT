(function() {
    var app = angular.module("tbbtApp");

    var apiKey = "998b45vfwkxvg6ftz5vurk8z789daq37";

    var wowapi = function($http) {

        var getGuildMembers = function(realm, guildName) {
          //console.log("getGuildMembers("+realm+", "+guildName+") is called.");
          return $http.get("https://us.api.battle.net/wow/guild/" + realm + "/" + guildName + "?fields=members&locale=en_US&apikey=" + apiKey)
            .success(function(response) {
              return response;
            });
        };

        var getCharacterItems = function(realm, characterName) {
          //console.log("getCharacterItems("+realm+", "+characterName+") is called." + name);
          return $http.get("https://us.api.battle.net/wow/character/" + realm + "/" + characterName + "?fields=items&locale=en_US&apikey=" + apiKey)
            .then(function(response) {
              return response.data;
            });
        };

        var getCharacterTalents = function(realm, characterName) {
          return $http.get("https://us.api.battle.net/wow/character/" + realm + "/" + characterName + "?fields=talents&locale=en_US&apikey=" + apiKey)
            .success(function(response) {
              return response;
            });
        };
        
        var getClassColor = function(data) {
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
            return "demonhunter" 
          } else {
            //console.log("Undefined WoW Class: " + data);
            return "else"
          }
        };

        var getEpic = function(data) {
          if (data == 0) {
            qual = "poor"
          } else if (data == 1) {
            qual = "common"
          } else if (data == 2) {
            qual = "uncommon"
          } else if (data == 3) {
            qual = "rare"
          } else if (data == 4) {
            qual = "epic"
          } else if (data == 5) {
            qual = "legendary"
          } else if (data == 6) {
            qual = "artifact"
          } else {
            qual = "else"
          }
          return qual;
        };

        var getCurrentTalents = function(data) {
          /* data: customSelected.talents */
          if (data != null) {
            var obj_length = Object.keys(data).length;
          } else {
            // error
          }

          for (var i = 0 ; i < obj_length ; i++) {
            if (data[i].selected) {
              return data[i].spec.name + " " + data[i].spec.role;
            }
          }
        };

        var getArtifact = function(data) {
          /* data: customSelected.items.mainHand */
          var num_rank = 0;

          if (data != null && data.artifactTraits != null) {
            var traits_length = Object.keys(data.artifactTraits).length;
          } else {
            // error
          }

          for (var i = 0 ; i < traits_length ; i++) {
            num_rank += data.artifactTraits[i].rank;
          }

          return num_rank;
        }
        
        return {
          getGuildMembers: getGuildMembers,
          getCharacterItems: getCharacterItems,
          getCharacterTalents: getCharacterTalents,
          getClassColor: getClassColor,
          getEpic: getEpic,
          getCurrentTalents: getCurrentTalents,
          getArtifact: getArtifact
        };
    };
    
    app.factory("wowapi", wowapi);
    
}());
