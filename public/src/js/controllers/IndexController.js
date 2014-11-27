/**
 * Created by Antony on 14/11/21.
 */

jsEasyControllers.controller("indexCtrl", ["$scope", "$locale", 'foodService', function ($scope, $locale, foodService, app) {
  console.log("this is index ctrl")
  $scope.message = "你好";
//  var foodList=function(){
//    foodService.foodlist(function(err,result){
//      console.info(result);
//      return result.data;
//    });
//  }

  var foodList = {"data": [
    {"foodname": "青椒肉丝",
      "foodprice": "39",
      "foodsrc": "/imags/test.png",
      "id": "1",
      "selltotal": "20"
    },
    {"foodname": "青椒肉丝",
      "foodprice": "39",
      "foodsrc": "/imags/test.png",
      "id": "1",
      "selltotal": "20"},
    {"foodname": "青椒肉丝",
      "foodprice": "39",
      "foodsrc": "/imags/test.png",
      "id": "1",
      "selltotal": "20"
    },
    {"foodname": "青椒肉丝",
      "foodprice": "39",
      "foodsrc": "/imags/test.png",
      "id": "1",
      "selltotal": "20"
    },
    {"foodname": "青椒肉丝",
      "foodprice": "39",
      "foodsrc": "/imags/test.png",
      "id": "1",
      "selltotal": "20"
    },
    {"foodname": "青椒肉丝",
      "foodprice": "39",
      "foodsrc": "/imags/test.png",
      "id": "1",
      "selltotal": "20"
    }
  ]
  }
  $scope.foodlist = foodList.data;



}]);

