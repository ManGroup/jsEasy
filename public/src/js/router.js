/**
 * Created by Antony on 14/11/21.
 */

angular.module('jsEasy.router', ['ngRoute']).constant('app', {}).provider('getFile', ['app', function (app) {

    'use strict';
  
    this.html = function (fileName) {
      console.log(fileName);
      return '/public/dist/tpl/' + fileName + '?v=' + app.version;
    };
    this.$get = function () {
      console.log(this.html);
      return {
        html: this.html
      };
    };
  }
]).config(['$routeProvider', '$locationProvider', 'getFileProvider',
 function ($routeProvider, $locationProvider, getFileProvider) {

   'use strict';

   var index = {
     templateUrl: getFileProvider.html('index.html'),
     controller: 'indexCtrl'
   };

   var login = {
     templateUrl: getFileProvider.html('login.html'),
     controller: 'loginCtrl'
   };

   var home = {
     templateUrl: getFileProvider.html('home.html'),
     controller: 'homeCtrl'
   };

   $routeProvider.
     when('/index', index).
     when('/login', login).
     when('/home', home).
     when('/', index).
     otherwise({
       redirectTo: '/'
     });
   $locationProvider.html5Mode(true).hashPrefix('!');
}]);