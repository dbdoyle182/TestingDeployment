var express = require("express");
var bodyParser = require("body-parser");

var friendsArray = require("./app/data/friends.js");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(express.static('App'))

require("./app/Routing/apiRoutes")(app);
require("./app/Routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});