module.exports = function (app) {

    var friendsData = require("../data/friends.js");



    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });


    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        var match;
        var lowestDiff = 100;

        for (let i in friendsData) {

            var diff = 0;

            for (let k in friendsData[i].score) {
                diff += Math.abs(friend.scores[k] - friendsArray[i].scores[k]);
            }

            if (diff < lowestDiff) {
                lowestDiff = diff;
                match = friendsData[i];
            }

        }
        friendsData.push(newFriend);
        res.json(match);
    });

};