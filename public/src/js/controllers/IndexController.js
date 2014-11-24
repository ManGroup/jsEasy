/**
 * Created by Antony on 14/11/21.
 */

jsEasyControllers.controller("indexCtrl", ["$scope", "$locale", function ($scope, $locale) {
  $scope.hello = $locale.COMMON.hello;
  $scope.login = $locale.COMMON.login;
  console.log("this is index ctrl")
}]);