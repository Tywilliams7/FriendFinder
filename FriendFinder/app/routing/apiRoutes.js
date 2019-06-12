
var peopleData = require("../data/friends");
console.log(peopleData);

module.exports = function(app) {
    app.get("/api/friends", function(req,res){
        res.json(peopleData);
    })
}
