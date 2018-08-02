var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
friendsArray = require("./App/Data/friends.js");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('App'))

require("./App/Routing/apiRoutes")(app);
require("./App/Routing/htmlRoutes")(app);



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});