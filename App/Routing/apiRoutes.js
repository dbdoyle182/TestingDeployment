var friendsData = require("../Data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        console.log(res)
        friendsData.push(res)

        console.log(friendsData);
    });
};
