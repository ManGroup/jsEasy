var routes = require('./controllers');
var user = require('./controllers/user');
var partial = require("./controllers/partials");
var demo = require("./controllers/demo");

//注释
module.exports = function (app) {
    web(app);
    api(app);
};

function web(app) {
    app.get('/', routes.index);
    app.get('/users', user.list);
    app.get("\/partials\/?([^\/]+)?(.html)\/?", partial.partialRender);
}

function api(app) {
    app.get('/api/login.json',user.signIn);
    app.get('/api/defaultJson.json', demo.defaultJson);
    app.get('/api/food/get.json', demo.getFood);
    app.get('/api/food/list.json', demo.getFoodList);
    app.get('/HealthCheck.json', function (req, res) {
        res.json({ok: "success"});
    });
}

