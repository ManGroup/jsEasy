/**
 * Created by Antony on 14/11/27.
 */


jsEasyServices.factory('detailService', ['restAPI', function (restAPI) {
  return {
    getDetail: function (id, callback) {
      restAPI.getDetail.get({}, function (data) {
        console.log(data);
        callback(data.error, data);
      });
    }
  }
}]);
