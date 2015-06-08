(function() {
    var app = angular.module("tbbtApp");

    var realm = "Frostmourne";
    var guildName = "The Big Bad Theory";
    var apiKey = "998b45vfwkxvg6ftz5vurk8z789daq37";

    var wowapi = function($http) {

        var getGuildMembers = function() {
          return $http.get("https://us.api.battle.net/wow/guild/" + realm + "/" + guildName + "?fields=members&locale=en_US&apikey=" + apiKey)
            .success(function(response) {
              return response;
            });
        };

        var getCharacterItems = function(name) {
          return $http.get("https://us.api.battle.net/wow/character/" + realm + "/" + name + "?fields=items&locale=en_US&apikey=" + apiKey)
            .success(function(response) {
              return response;
            });
        };
        
        return {
          getGuildMembers: getGuildMembers,
          getCharacterItems: getCharacterItems
        };
    };
    
    app.factory("wowapi", wowapi);
    
}());