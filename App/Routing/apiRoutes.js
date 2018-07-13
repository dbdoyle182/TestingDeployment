var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/tables", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/clear", function () {
        friendsData = [];

        console.log(friendsData);
    });
};
