/**
 * Created by Antony on 2014/12/7.
 */
jsEasyApp.controller('profileCtrl', ["$rootScope", "$scope" , 'app', '$location', 'detailService', function ($rootScope, $scope, app, $location, detailService) {
    $scope.feebackClick = function () {
        $location.search({}).path('/feedback');
    }

    $scope.addressClick = function() {
        $location.search({}).path('/address');
    }

    $scope.callService = function () {
        window.location.href= "tel:18642698912";
    };
}]);