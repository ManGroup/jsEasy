/*
 * GET users listing.
 */
var user = require("../proxy/user");

exports.list = function (req, res) {
    user.usersList({}, function (err, result) {
        res.json({result: result});
    });
};

exports.signIn = function (req ,res) {
    res.json({
        "error": "",
        "code": "200",
        "data": {
            "username" : "lihao",
            "password" : "1234"
        }
    });
}