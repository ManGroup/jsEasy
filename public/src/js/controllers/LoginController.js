/**
 * Created by Antony on 14/11/21.
 */

jsEasyControllers.controller('loginCtrl', ['app','$scope', '$routeParams', 'loginService','$locale','tools',function (app, $scope, $routeParams, loginService,$locale,tools) {
  var langList = ['LOGIN', 'COMMON'];
  for (var i in langList) {
    for (var j in $locale[langList[i]]) {
      $scope[j] = $locale[langList[i]][j];
    }
  }
  tools.testTool();


  $scope.login = function () {
    loginService.login(function(err,result){
      if (result.data.username == $scope.telephone && result.data.password == $scope.password) {
        app.location.search({}).path('/home');
      } else {
        alert($locale.LOGIN.error);
      }
    });
  };

  $scope.submit = function () {
    return false;
  };

  $scope.register = function () {
      if ($scope.telephone) {
        $scope.telephone = '';
      }
      if ($scope.password) {
        $scope.password = '';
      }
  };
}]);