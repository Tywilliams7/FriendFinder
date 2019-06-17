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
    var userTotal = 0;
    var totals = [];
    var leastIndex = 0;
    var leastDiff = 99;


    console.log("New Entry: " + newperson.scores);
    console.log("New Entry Length: " + newperson.scores.length);


    // New User total
    for (let i = 0; i < newperson.scores.length; i++) {
        userTotal += Number(newperson.scores[i]);
    }

    // PeopleArr total
    const result = peopleArray.map((value) => {


        return {
            name: value.name,
            score: value.scores.reduce((userTotal, score) => userTotal + Number(score), 0),

        }

    });
    console.log("User Total: " + userTotal)
    console.log(result);
    console.log("Number of people in array: " + result.length);

    for (let i = 0; i < result.length; i++) {
        totals.push(result[i].score);
        for (let j = 0; j < totals.length; j++) {
            var diff = Math.abs(totals[j] - userTotal);
            if (diff < leastDiff) {
                leastDiff = diff
                leastIndex = i
            }
        }
    }
    console.log("Least Difference: " + leastDiff);
    console.log("Index of friend: " + leastIndex);
    console.log("Your best match is.... ");
    console.log(result[leastIndex]);

    // document.getElementById("match-name").innerText = peopleArray[leastIndex].name;
    // document.getElementById("match-img").setAttribute = "src", peopleArray[leastIndex].photo;
    // document.getElementById("results-modal").modal = "toggle";
    

    // $("#match-name").text(peopleArray[leastIndex].name);
    // $("#match-img").attr("src", peopleArray[leastIndex].photo);

    // // Show the modal with the best match
    // $("#results-modal").modal("toggle");


    peopleArray.push(newperson);

    res.json(newperson);

});

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});


















// Comparing number to array


    // for (let i = 0; i < result.length; i++) {

    //     totals.push(result[i].score);

    //     if (total == result[i].score) {
    //         console.log("Exact Match: " + result[i])
    //     } else {
    //         var closest = totals.reduce(function (prev, curr) {
    //             return (Math.abs(curr - total) < Math.abs(prev - total) ? curr : total);
    //         });z
    //     }
    // }
    // c = Number(closest);
    // console.log("Index of Match: " + c);
    // console.log(result[c]);
    // console.log(totals);
