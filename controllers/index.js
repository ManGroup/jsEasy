/*
 * GET home page.
 */
var user = require("../proxy/user");

exports.index = function (req, res) {
    res.render("index", {result: result});
};
