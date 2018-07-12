var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
friendsArray = require("./App/Data/friends.js");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./Routing/apiRoutes")(app);
require("./Routing/htmlRoutes")(app);

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/App/Public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/App/Public/survey.html"));
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});