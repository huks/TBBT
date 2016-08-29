(function() {
  var app = angular.module("tbbtApp");

  var raiderCtrl = function($scope, $cookieStore, rosterFactory, wowapi) {

    $scope.rowList = rosterFactory.getRoster();

    // Tank
    $scope.tanks = [{
      id: "raider1"
    }, {
      id: "raider2"
    }];

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
      if (length !== 0) {
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

    // Healer
    $scope.healers = [{
      id: "raider1"
    }, {
      id: "raider2"
    }, {
      id: "raider3"
    }, {
      id: "raider4"
    }];

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
      if (length !== 0) {
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

    // DPS
    $scope.dps = [{
      id: "raider1"
    }, {
      id: "raider2"
    }, {
      id: "raider3"
    }, {
      id: "raider4"
    }, {
      id: "raider5"
    }, {
      id: "raider6"
    }, {
      id: "raider7"
    }, {
      id: "raider8"
    }, {
      id: "raider9"
    }];

    $scope.getDpsNum = function() {
      var nullStr = "";
      var num = 0;

      for (i = 0; i < $scope.dps.length; i++) {
        try {
          if ($scope.dps[i].json.items.averageItemLevel != nullStr) {
            num++
          }
        } catch (error) {
          // error
        }
      }
      return num;
    }

    $scope.getDpsIlvl = function() {
      var length = $scope.getDpsNum();
      var sum = 0;
      var avg = 0;
      if (length !== 0) {
        for (i = 0; i < $scope.dps.length; i++) {
          try {
            sum += $scope.dps[i].json.items.averageItemLevel;
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
      num = $scope.getTanksNum() + $scope.getHealersNum() + $scope.getDpsNum();
      return num;
    }

    $scope.getRaidersIlvl = function() {
      var avg = 0;
      if ($scope.getRaidersNum() !== 0) {
        avg = ($scope.getTanksIlvl() * $scope.getTanksNum() + $scope.getHealersIlvl() * $scope.getHealersNum() + $scope.getDpsIlvl() * $scope.getDpsNum()) / $scope.getRaidersNum();
      }
      return avg;
    }

    /* isEpicCtrl */
    $scope.customSelected = {};
    wowapi.getCharacterItems("Kaltoe").success(function(response) {
      $scope.customSelected = response;     
    });

    /* Wow Equipment Color Scheme */
    $scope.getEpic = function(data) {
      var qual = "poor";
      if (data == 1) {
        qual = "common";
      } else if (data == 2) {
        qual = "uncommon";
      } else if (data == 3) {
        qual = "rare";
      } else if (data == 4) {
        qual = "epic";
      } else if (data == 5) {
        qual = "legendary";
      }
      return qual;
    };
    
    /* Wow Class Colcor Scheme */
    $scope.getClass = function(data) {
      return wowapi.getClassColor(data);
    };

    /*
     * New "DTD" codes below
     *
     */

    $scope.ngClick = function(param) {
      console.log("foo: " + JSON.stringify(param));

      //console.log("customSelected: " + $scope.customSelected.name);
      //console.log("bar: " + param[0].json.name)
      //console.log("bar: " + $scope.tanks[0].json.name);
      //console.log("bar: " + $scope.rowList[0].name);
    };
    
  }

  app.controller("raiderCtrl", raiderCtrl);

}());
