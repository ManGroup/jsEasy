exports.defaultJson = function (req, res) {

  res.json({
      "version": "0.0.1",
      "appName": "Login",
      "lang": "jp"
  });
};
exports.getFoodList = function (req, res) {
  res.json({"data": [
      {
        "foodname": "青椒肉丝",
        "foodprice": "39",
        "foodsrc": "/public/images/detail01.jpg",
        "id": "1",
        "selltotal": "20"
      },
      {
        "foodname": "青椒肉丝",
        "foodprice": "39",
        "foodsrc": "/public/images/detail01.jpg",
        "id": "1",
        "selltotal": "20"
      },
      {
        "foodname": "青椒肉丝",
        "foodprice": "39",
        "foodsrc": "/public/images/detail01.jpg",
        "id": "1",
        "selltotal": "20"
      },
      {
        "foodname": "青椒肉丝",
        "foodprice": "39",
        "foodsrc": "/public/images/detail01.jpg",
        "id": "1",
        "selltotal": "20"
      },
      {
        "foodname": "青椒肉丝",
        "foodprice": "39",
        "foodsrc": "/public/images/detail01.jpg",
        "id": "1",
        "selltotal": "20"
      },
      {
        "foodname": "青椒肉丝",
        "foodprice": "39",
        "foodsrc": "/public/images/detail01.jpg",
        "id": "1",
        "selltotal": "20"
      }
    ]
    }
  );
}
exports.getFood = function (req, res) {

    res.json({
            "error": "",
            "data": {
                "id" :  "1",
                "name" : "口水鸡",
                "price" : "Y2111",
                "fileId" : "/public/images/detail01.jpg",
                "description" : "XXXXX"
            }
        }
    );
};