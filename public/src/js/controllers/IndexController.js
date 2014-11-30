/**
 * Created by Antony on 14/11/21.
 */

jsEasyControllers.controller("indexCtrl", ["$scope", "$locale", 'foodService', 'app', function ($scope, $locale, foodService, app) {
  console.log("this is index ctrl")

  foodService.foodlist(function (err, result) {
    $scope.foodlist = result.data;
  });

}]);

