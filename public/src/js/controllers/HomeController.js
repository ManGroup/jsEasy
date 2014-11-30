/**
 * Created by Antony on 14/11/21.
 */

jsEasyControllers.controller("homeCtrl", ["$rootScope", "$scope", "$routeParams", "$locale",
                                          function ($rootScope, $scope, $routeParams, $locale) {
  $scope.userAgent = navigator.userAgent;
  $scope.message = "登录成功！！！";
  $scope.title = "宅语菜园";


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