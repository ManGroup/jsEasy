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

}]).directive('myScroll', ['$document', '$window', 'foodService', function ($document, $window, foodService) {

  return function (scope, element, attr) {

    /**
     * 绑定scroll的执行事件
     */
    var handler = function () {
      var eventLimit = 20;
      var offsetHeight , scrollHeight , scrollTop;
      offsetHeight = element[0].offsetHeight;
      scrollHeight = element[0].scrollHeight;
      scrollTop = element[0].scrollTop;

      if (eventLimit > scrollHeight - scrollTop - offsetHeight) {
        foodService.foodlist(function (err, result) {
          var items = result.data;

          for (var i = 0; i < items.length; i++) {
            scope.foodlist.push(items[i]);

          }


        });

      }
    };
    element.on('scroll', handler);
  };
}]);
