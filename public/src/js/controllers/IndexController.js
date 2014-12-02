/**
 * Created by Antony on 14/11/21.
 */
//'src/vendor/angular-route/angular-route.js'

jsEasyControllers.controller('indexCtrl', ['$rootScope', '$scope', '$locale', 'foodService', '$location', function ($rootScope, $scope, $locale, foodService, $location) {

    $rootScope.title = "宅语菜园";


  foodService.foodlist(function (err, result) {
        $scope.foodlist = result.data;
    });

    $scope.gotoDetail = function () {
        $location.search({}).path('/detail');
    }

}]).directive('myScroll', ['$document', function ($document) {
  return function (scope, element, attr) {

    element.on('scroll', function (event) {

      console.info("scroll");

    });


  };
}]);
