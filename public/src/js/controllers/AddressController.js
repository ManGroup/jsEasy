/**
 * Created by Antony on 2014/12/7.
 */
jsEasyApp.controller('addrCtrl', ["$rootScope", "$scope" , 'app', '$location', 'detailService', function ($rootScope, $scope, app, $location, detailService) {
    console.log("addrCtrl");

    var foodNum = 1;

    detailService.getDetail("1", function (err, data) {

        $rootScope.title = data.data.name;
        $scope.file = data.data.fileId;
        $scope.title = data.data.name;
        $scope.price = data.data.price;
    });

    $scope.price = 0;
    $scope.foodNum = foodNum;

    $scope.addFood = function () {
        if (foodNum == 9)
            return;
        foodNum = foodNum + 1;
        $scope.foodNum = foodNum;
    };

    $scope.removeFood = function () {
        if (foodNum == 1)
            return;
        foodNum = foodNum - 1;
        $scope.foodNum = foodNum;
    };
}]);