/**
 * Created by Antony on 14/11/21.
 */

jsEasyServices.factory('loginService', ['restAPI', function (restAPI) {
  return {
    login: function (callback) {
      restAPI.login.get({}, function (data) {
        console.log(data);
        callback(data.error, data);
      });
    }
  }
}]);