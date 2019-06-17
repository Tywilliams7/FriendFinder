var express = require("express"),

    peopleArray = require("./data/friends"),
    app = express(),


    PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);
// hde
app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    var newperson = req.body;
    var newScores = newperson.score;
    var newTotal = 0;
    
    console.log("New Entry: " + newperson.score);
    // Sum of New User
    for (let i = 0; i < newScores.length; i++) {
        newTotal += Number(newScores[i]);
    }
    console.log("New Person Total "+newTotal);

    // Sum of Old Users
    const result = peopleArray.map((value) => {
        return {
            name: value.name,
            photo: value.photo,
            score: value.scores.reduce((total, score) => total + Number(score), 0)
        }
    
    });
    console.log(result);
    console.log(result.length)
    for (let i = 0; i < result.length; i++) {
        if (newTotal == result[i].score){
            console.log("Hi!");

        }
        console.log("bye")
    }
    

    


    peopleArray.push(newperson);

    res.json(newperson);

});

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});