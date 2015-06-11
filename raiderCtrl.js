(function() {
  var app = angular.module("tbbtApp");

  var raiderCtrl = function($scope, rosterFactory) {

    $scope.rowList = rosterFactory.getRoster();
    
    // Tank
    $scope.tanks = [{id: "raider1"}, {id: "raider2"}, {id: "raider3"}];
    
    $scope.addNewTank = function() {
      if ($scope.tanks.length < 3) {
         var newRaiderNo = $scope.tanks.length + 1;
        $scope.tanks.push({
          id: "raider" + newRaiderNo
        });
      }
    };

    $scope.removeTank = function() {
      var lastRaider = $scope.tanks.length - 1;
      if (lastRaider > 1) {
        $scope.tanks.splice(lastRaider);
      }
    };
    
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
        for (i = 0; i < length; i++) {
          sum += $scope.tanks[i].json.items.averageItemLevel; 
        }
        avg = sum/length;
        return avg;
      } else {
        return avg;
      }
    }
    
    // Healer
    $scope.healers = [{id: "raider1"}, {id: "raider2"}, {id: "raider3"}, {id: "raider4"}, {id: "raider5"}];

    $scope.addNewHealer = function() {
      if ($scope.healers.length < 5) {
         var newRaiderNo = $scope.healers.length + 1;
        $scope.healers.push({
          id: "raider" + newRaiderNo
        });
      }
    };

    $scope.removeHealer = function() {
      var lastRaider = $scope.healers.length - 1;
      if (lastRaider > 1) {
        $scope.healers.splice(lastRaider);
      }
    };
    
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
        for (i = 0; i < length; i++) {
          sum += $scope.healers[i].json.items.averageItemLevel; 
        }
        avg = sum/length;
        return avg;
      } else {
        return avg;
      }
    }
    
    // DPS
    $scope.dps = [
      {id: "raider1"},
      {id: "raider2"},
      {id: "raider3"},
      {id: "raider4"},
      {id: "raider5"},
      {id: "raider6"},
      {id: "raider7"},
      {id: "raider8"},
      {id: "raider9"},
      {id: "raider10"},
      {id: "raider11"},
      {id: "raider12"},
      {id: "raider13"}];

    $scope.addNewDps = function() {
      if ($scope.dps.length < 13) {
         var newRaiderNo = $scope.dps.length + 1;
        $scope.dps.push({
          id: "raider" + newRaiderNo
        });
      }
    };

    $scope.removeDps = function() {
      var lastRaider = $scope.dps.length - 1;
      if (lastRaider > 1) {
        $scope.dps.splice(lastRaider);
      }
    };

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
        for (i = 0; i < length; i++) {
          sum += $scope.dps[i].json.items.averageItemLevel; 
        }
        avg = sum/length;
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
        avg = ($scope.getTanksIlvl()*$scope.getTanksNum()+$scope.getHealersIlvl()*$scope.getHealersNum()+$scope.getDpsIlvl()*$scope.getDpsNum())/$scope.getRaidersNum();
      } 
      return avg;
    }
    
  }

  app.controller("raiderCtrl", raiderCtrl);

}());