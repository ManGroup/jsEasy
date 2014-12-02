/**
 * Created by Antony on 14/11/21.
 */

jsEasyControllers.controller('indexCtrl', ['$rootScope', '$scope', '$locale', 'foodService', '$location', function ($rootScope, $scope, $locale, foodService, $location) {

    $rootScope.title = "宅语菜园";

    foodService.foodlist(function (err, result) {
        $scope.foodlist = result.data;
    });

    $scope.gotoDetail = function () {
        $location.search({}).path('/detail');
    }
}]);
jsEasyControllers.directive('indexScroll', ['$document', function ($document) {
  return function (scope, element, attr) {
    //   var elementBottom = element.offset().top ;
    element.on('scroll', function () {
      console.log("scrollTop");
      //        console.info(elementBottom) ;
    });
  };
}]);
