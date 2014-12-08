jsEasyApp.controller('feedBackCtrl', ["$rootScope", "$scope" , '$location', function ($rootScope, $scope, $location) {
    $scope.postFeedBack = function () {
        var tel = $scope.telephoneInput || "";
        var back = $scope.feedbackInput || "";
        alert("提交成功 tel:" + tel + " back: " + back);
    }
}]);