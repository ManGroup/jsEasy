/**
 * Created by chenyingxi on 2014/11/27.
 */

jsEasyServices.factory('foodService', ['restAPI', function (restAPI) {
  return {
    foodlist: function (callback) {
      restAPI.foodlist.get({}, function (data) {
        console.log(data);
        callback(data.error, data);
      });
    }
  }
}]);