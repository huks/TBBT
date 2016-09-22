(function() {
  var app = angular.module("tbbtApp");

  var raiderCtrl = function($scope, $cookieStore, rosterFactory, wowapi) {

    $scope.rowList = rosterFactory.getRoster(1);

    $scope.ngClick = function(tanks, healers, dealers) {
      /* Tank Cookies */
      for (var i = 0; i < num_of_tanks; i++) {
        if (!tanks[i].json.name || !tanks[i].json.items.averageItemLevel) {
          $cookieStore.remove("tank_"+[i]+"_name");
          $cookieStore.remove("tank_"+[i]+"_class");
          $cookieStore.remove("tank_"+[i]+"_items_averageItemLevel");          
        } else {
          $cookieStore.put("tank_"+[i]+"_name", tanks[i].json.name);
          $cookieStore.put("tank_"+[i]+"_class", tanks[i].json.class);
          $cookieStore.put("tank_"+[i]+"_items_averageItemLevel", tanks[i].json.items.averageItemLevel);
        }        
      }
      /* Healer Cookies */
      for (var i = 0; i < num_of_healers; i++) {
        if (!healers[i].json.name || !healers[i].json.items.averageItemLevel) {
          $cookieStore.remove("healer_"+[i]+"_name");
          $cookieStore.remove("healer_"+[i]+"_class");
          $cookieStore.remove("healer_"+[i]+"_items_averageItemLevel");   
        } else {
          $cookieStore.put("healer_"+[i]+"_name", healers[i].json.name);
          $cookieStore.put("healer_"+[i]+"_class", healers[i].json.class);
          $cookieStore.put("healer_"+[i]+"_items_averageItemLevel", healers[i].json.items.averageItemLevel);
        }        
      }
      /* Dealer Cookies */
      for (var i = 0; i < num_of_dealers; i++) {
        if (!dealers[i].json.name || !dealers[i].json.items.averageItemLevel) {
          $cookieStore.remove("dealer_"+[i]+"_name");
          $cookieStore.remove("dealer_"+[i]+"_class");
          $cookieStore.remove("dealer_"+[i]+"_items_averageItemLevel");   
        } else {
          $cookieStore.put("dealer_"+[i]+"_name", dealers[i].json.name);
          $cookieStore.put("dealer_"+[i]+"_class", dealers[i].json.class);
          $cookieStore.put("dealer_"+[i]+"_items_averageItemLevel", dealers[i].json.items.averageItemLevel);
        }        
      }
    };    

    /* Tank Codes */

    var num_of_tanks = 2;
    
    $scope.tanks = [];
    
    for (var i = 0; i < num_of_tanks; i++) {
      var tank = {
        id: "tank"+[i],
        json: {
          name: $cookieStore.get("tank_"+[i]+"_name") || "",
          class: $cookieStore.get("tank_"+[i]+"_class") || "",
          items: {
            averageItemLevel: $cookieStore.get("tank_"+[i]+"_items_averageItemLevel") || ""
          }
        }
      };
      $scope.tanks.push(tank);
    } 

    $scope.getTanksNum = function() {
      var nullStr = "";
      var num = 0;

      for (i = 0; i < $scope.tanks.length; i++) {
        try {
          if ($scope.tanks[i].json.items.averageItemLevel != nullStr) {
            num++
          }
        } catch (error) {
          // error
        }
      }
      return num;
    }

    $scope.getTanksIlvl = function() {
      var length = $scope.getTanksNum();
      var sum = 0;
      var avg = 0;
      if (length != 0) {
        for (i = 0; i < $scope.tanks.length; i++) {
          try {
            sum += $scope.tanks[i].json.items.averageItemLevel;
          } catch (error) {
            // error
          }
        }
        avg = sum / length;
        return avg;
      } else {
        return avg;
      }
    }

    /* Healer Codes */

    var num_of_healers = 4;
    
    $scope.healers = [];
    
    for (var i = 0; i < num_of_healers; i++) {
      var healer = {
        id: "healer"+[i],
        json: {
          name: $cookieStore.get("healer_"+[i]+"_name") || "",
          class: $cookieStore.get("healer_"+[i]+"_class") || "",
          items: {
            averageItemLevel: $cookieStore.get("healer_"+[i]+"_items_averageItemLevel") || ""
          }
        }
      };
      $scope.healers.push(healer);
    } 

    $scope.getHealersNum = function() {
      var nullStr = "";
      var num = 0;

      for (i = 0; i < $scope.healers.length; i++) {
        try {
          if ($scope.healers[i].json.items.averageItemLevel != nullStr) {
            num++
          }
        } catch (error) {
          // error
        }
      }
      return num;
    }

    $scope.getHealersIlvl = function() {
      var length = $scope.getHealersNum();
      var sum = 0;
      var avg = 0;
      if (length != 0) {
        for (i = 0; i < $scope.healers.length; i++) {
          try {
            sum += $scope.healers[i].json.items.averageItemLevel;
          } catch (error) {
            // error
          }
        }
        avg = sum / length;
        return avg;
      } else {
        return avg;
      }
    }

    /* Dealer Codes */

    var num_of_dealers = 9;
    
    $scope.dealers = [];
    
    for (var i = 0; i < num_of_dealers; i++) {
      var dealer = {
        id: "dealer"+[i],
        json: {
          name: $cookieStore.get("dealer_"+[i]+"_name") || "",
          class: $cookieStore.get("dealer_"+[i]+"_class") || "",
          items: {
            averageItemLevel: $cookieStore.get("dealer_"+[i]+"_items_averageItemLevel") || ""
          }
        }
      };
      $scope.dealers.push(dealer);
    } 


    $scope.getDealersNum = function() {
      var nullStr = "";
      var num = 0;

      for (i = 0; i < $scope.dealers.length; i++) {
        try {
          if ($scope.dealers[i].json.items.averageItemLevel != nullStr) {
            num++
          }
        } catch (error) {
          // error
        }
      }
      return num;
    }

    $scope.getDealersIlvl = function() {
      var length = $scope.getDealersNum();
      var sum = 0;
      var avg = 0;
      if (length != 0) {
        for (i = 0; i < $scope.dealers.length; i++) {
          try {
            sum += $scope.dealers[i].json.items.averageItemLevel;
          } catch (error) {
            // error
          }
        }
        avg = sum / length;
        return avg;
      } else {
        return avg;
      }
    }

    // Total
    $scope.getRaidersNum = function() {
      var num = 0;
      num = $scope.getTanksNum() + $scope.getHealersNum() + $scope.getDealersNum();
      return num;
    }

    $scope.getRaidersIlvl = function() {
      var avg = 0;
      if ($scope.getRaidersNum() != 0) {
        avg = ($scope.getTanksIlvl() * $scope.getTanksNum() + $scope.getHealersIlvl() * $scope.getHealersNum() + $scope.getDealersIlvl() * $scope.getDealersNum()) / $scope.getRaidersNum();
      }
      return avg;
    }

    /* isEpicCtrl */
    $scope.customSelected = {};
    wowapi.getCharacterItems("Nagrand", "Kaltoe").success(function(response) {
      $scope.customSelected = response;     
    });

    /* Wow Equipment Color Scheme */
    $scope.getEpic = function(data) {
      return wowapi.getEpic(data);
    };
    
    /* Wow Class Colcor Scheme */
    $scope.getClass = function(data) {
      return wowapi.getClassColor(data);
    };

    /*
     * New "DTD" codes below
     */

    $scope.getCurrentTalents = function(talents) {
      /* talent: customSelected.talents); */
      return wowapi.getCurrentTalents(talents);
    };

  }

  app.controller("raiderCtrl", raiderCtrl);

}());
