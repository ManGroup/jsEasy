/**
 * Created by Antony on 14/11/21.
 */

jsEasyControllers.controller("homeCtrl", ["$scope", "$routeParams", "$locale", function ($scope, $routeParams, $locale) {
  $scope.message = $locale.HOME.message;
}]);