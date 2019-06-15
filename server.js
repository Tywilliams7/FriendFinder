var express = require("express"),

    peopleArray = require("./app/data/friends"),
    app = express(),


    PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// hde
app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newperson = req.body;
    var total = 0;
    var totals = []

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    console.log("New Entry: " + newperson.score);
    console.log("People: " + peopleArray);
    console.log(newperson.score.length);

    // New User total
    for (i = 0; i < newperson.score.length; i++) {
        total += Number(newperson.score[i]);
    }
    console.log("New User total: " + total);


    // PeopleArr total
    const result = peopleArray.map((value) => {
        return {
            name: value.name,
            score: value.scores.reduce((total, score) => total + Number(score), 0)
        }

    });
    console.log(result);
    console.log("length: " + result.length);

    // Comparing number to array


    for (let i = 0; i < result.length; i++) {

        totals.push(result[i].score);

        if (total == result[i].score) {
            console.log("Exact Match: " + result[i])
        } else {
            var closest = totals.reduce(function (prev, curr) {
                return (Math.abs(curr - total) < Math.abs(prev - total) ? curr : total);
            });
        }
    }
    c = Number(closest);
    console.log("Index: " + c);
    console.log(result[c]);



    console.log(totals)

    peopleArray.push(newperson);

    res.json(newperson);

});

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});