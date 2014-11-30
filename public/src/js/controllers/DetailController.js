jsEasyApp.controller('detailCtrl', ["$rootScope", "$scope" ,'app','$location','detailService',function ($rootScope, $scope,app,$location,detailService) {
  console.log("detailCtrl");
  detailService.getDetail("1", function (err, data) {
    $scope.file = data.data.fileId;
  });
}]);