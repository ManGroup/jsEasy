

var jsEasyApp = angular.module('jsEasy', ['jsEasy.services', 'jsEasy.locale', 'jsEasy.controllers','mobile-angular-ui']);
jsEasyApp.constant('app', {}).provider('getFile', ['app', function (app) {

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
]);

jsEasyApp.config(['$routeProvider', '$locationProvider', 'getFileProvider',
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

        var profile = {
            templateUrl: getFileProvider.html('profile.html'),
            controller: 'homeCtrl'
        };


        $routeProvider.
            when('/index', index).
            when('/login', login).
            when('/home', index).
            when('/profile', profile).
            when('/', index).
            otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true).hashPrefix('!');
    }]);
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

jsEasyApp.controller('MainController', function($rootScope, $scope){
    $rootScope.$on('$routeChangeStart', function(){
        $rootScope.loading = true;
    });

    $rootScope.$on('$routeChangeSuccess', function(){
        $rootScope.loading = false;
    });
});