/**
 * Created by Antony on 14/11/21.
 */

jsEasyControllers.controller("indexCtrl", ["$scope", 'foodService', 'app', function ($scope, foodService, app) {

  foodService.foodlist(function (err, result) {
    $scope.foodlist = result.data;
  });

}]);

