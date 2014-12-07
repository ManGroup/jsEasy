jsEasyApp.controller('feedBackCtrl', ["$rootScope", "$scope" , 'app', '$location', 'detailService', function ($rootScope, $scope, app, $location, detailService) {
    $scope.postFeedBack = function () {
        var tel = $scope.telephoneInput || "";
        var back = $scope.feedbackInput || "";
        alert("提交成功 tel:" + tel + " back: " + back);
    }
}]);