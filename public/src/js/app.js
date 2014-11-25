

var jsEasyApp = angular.module('jsEasy', ['jsEasy.router', 'jsEasy.services', 'jsEasy.locale', 'jsEasy.controllers','mobile-angular-ui']);

jsEasyApp.config(['$httpProvider', 'app', function ($httpProvider, app) {

    'use strict';

  }]).run(['app', '$location', 'restAPI', function (app, $location, restAPI) {

    'use strict';

    function init() {
      restAPI.defaultJson.get({}, function (data) {
        app.version = data.version;
        app.lang = data.lang;
        app.location = $location;
      });
    }

    init();
}]);