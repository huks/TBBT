(function() {
    var app = angular.module('tbbtApp');

    var realm = 'Frostmourne';
    var guildName = 'The Big Bad Theory';
    var apiKey = '998b45vfwkxvg6ftz5vurk8z789daq37';

    var wowapi = function($http) {

        var getGuildMembers = function() {
          return $http.get('https://us.api.battle.net/wow/guild/' + realm + '/' + guildName + '?fields=members&locale=en_US&apikey=' + apiKey)
            .success(function(response) {
              return response;
            });
        };

        var getCharacterItems = function(name) {
          return $http.get('https://us.api.battle.net/wow/character/' + realm + '/' + name + '?fields=items&locale=en_US&apikey=' + apiKey)
            .success(function(response) {
              return response;
            });
        };
        
        var getCharacterTalents = function(name) {
          return $http.get('https://us.api.battle.net/wow/character/' + realm + '/' + name + '?fields=talents&locale=en_US&apikey=' + apiKey)
            .success(function(response) {
              return response;
            });
        };
        
        var getClassColor = function(data) {
          if (data == 1) {
            return 'warrior'
          } else if (data == 2) {
            return 'paladin'
          } else if (data == 3) {
            return 'hunter'
          } else if (data == 4) {
            return 'rogue'
          } else if (data == 5) {
            return 'priest'
          } else if (data == 6) {
            return 'deathknight'
          } else if (data == 7) {
            return 'shaman'
          } else if (data == 8) {
            return 'mage'
          } else if (data == 9) {
            return 'warlock'
          } else if (data == 10) {
            return 'monk'
          } else if (data == 11) {
            return 'druid'
          } else {
            return ''
          }
        };
        
        return {
          getGuildMembers: getGuildMembers,
          getCharacterItems: getCharacterItems,
          getCharacterTalents: getCharacterTalents,
          getClassColor: getClassColor
        };
    };
    
    app.factory('wowapi', wowapi);
    
}());