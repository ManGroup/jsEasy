exports.defaultJson = function (req, res) {

  res.json({
      "version": "0.0.1",
      "appName": "Login",
      "lang": "jp"
  });
};

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