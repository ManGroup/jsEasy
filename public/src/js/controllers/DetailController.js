jsEasyApp.controller('detailCtrl', ["$rootScope", "$scope" , 'app', '$location', 'detailService', function ($rootScope, $scope, app, $location, detailService) {
    console.log("detailCtrl");

    var foodNum = 1;

    detailService.getDetail("1", function (err, data) {
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