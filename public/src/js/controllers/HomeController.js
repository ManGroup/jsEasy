/**
 * Created by Antony on 14/11/21.
 */

jsEasyControllers.controller("homeCtrl", ["$rootScope", "$scope", "$routeParams", "$locale",
                                          function ($rootScope, $scope, $routeParams, $locale) {
  $scope.message = $locale.HOME.message;
  $scope.title = "我的";

  $rootScope.$on('$routeChangeStart', function () {
    $rootScope.loading = true;
  });

  $rootScope.$on('$routeChangeSuccess', function () {
    $rootScope.loading = false;
  });

  $scope.login = function () {
    alert('You submitted the login form');
  };
}]);