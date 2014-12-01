/**
 * Created by Antony on 14/11/21.
 */

jsEasyControllers.controller("indexCtrl", ["$rootScope", "$scope", "$locale", 'foodService', 'app', '$location', function ($rootScope, $scope, $locale, foodService, app, $location) {

    $rootScope.title = "宅语菜园";

    foodService.foodlist(function (err, result) {
        $scope.foodlist = result.data;
    });

    $scope.gotoDetail = function () {
        console.log("gotoDetail");
        $location.search({}).path('/detail');
    }


}]);

