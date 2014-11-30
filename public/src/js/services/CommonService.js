/**
 * Created by Antony on 14/11/21.
 */

var jsEasyServices = angular.module('jsEasy.services', ['ngResource']);

jsEasyServices.factory('restAPI', ['$resource', function ($resource) {
  return {
    defaultJson: $resource('/api/defaultJson.json'),
    login: $resource('/api/login.json'),
    foodlist: $resource('/api/food/list.json'),
    getDetail: $resource('/api/food/get.json')
  };
}]);