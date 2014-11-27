/**
 * Created by Antony on 14/11/21.
 */

jsEasyServices.factory('loginService', ['restAPI', function (restAPI) {
  return {
    foodlist: function (callback) {
      restAPI.foodlist.get({}, function (data) {
        console.log(data);
        callback(data.error, data);
      });
    }
  }
}]);