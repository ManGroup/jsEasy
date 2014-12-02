/**
 * Created by Antony on 14/11/21.
 */
//'src/vendor/angular-route/angular-route.js'

jsEasyControllers.controller('indexCtrl', ['$rootScope', '$scope', '$locale', 'foodService', '$location', function ($rootScope, $scope, $locale, foodService, $location) {

    $rootScope.title = "宅语菜园";
  $scope.sectionhide = true;
  $scope.togglePhoto = "fa fa-sort-desc";
//
  foodService.foodlist(function (err, result) {
        $scope.foodlist = result.data;
    });

    $scope.gotoDetail = function () {
        $location.search({}).path('/detail');
    }

  $scope.hide = function () {
    if ($scope.sectionhide) {
      $scope.togglePhoto = "fa fa-sort-up";
      $scope.sectionhide = false;
    } else {
      $scope.togglePhoto = "fa fa-sort-desc";
      $scope.sectionhide = true;
    }

  }

}]);
jsEasyControllers.directive('myScroll', ['$document', '$window', function ($document, $window) {

  return function (scope, element, attr) {


    var _offsetHeight = "123";
    var _scrollTop = "123";


    handler = function () {
      var elementBottom, remaining, shouldScroll, windowBottom;
//      windowBottom = $window.height() + $window.scrollTop();
      elementBottom = element.offset().top + element.height();
      remaining = elementBottom - windowBottom;
      shouldScroll = remaining <= $window.height() * scrollDistance;
      console.info("**********************");
//      console.info("windowBottom"+windowBottom);
      console.info("elementBottom" + elementBottom);
      console.info("remaining" + remaining);
      console.info("shouldScroll" + shouldScroll);
    };
    element.on('scroll', handler);
  };
}]);
