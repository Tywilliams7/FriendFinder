// All new peoples data will be stored in this array
// Name(String)
// Photo(String)
// Scores(Array)
var peopleArray = [
    {
        name: "Hector Valdes",
        photo: "",
        scores: [
            "5", "1",
            "4", "4",
            "5", "1",
            "2", "5",
            "4", "1"
        ]
    }, {
        name: "Tyler Williams",
        photo: "",
        scores: [
            "5", "1",
            "4", "4",
            "5", "2",
            "2", "5",
            "4", "1"
        ]
    }
]

// for (i = 0; i < length; i++){
// var length = peopleArray.length,
    
// }



// for (i = 0; i < length; i++) {
//     var length = peopleArray.length;
//     var Scores = peopleArray[i].scores;
//     var res = Scores.reduce(function (prev, curr) {
//         return (Number(prev)) + (Number(curr));
//     });
// }
// console.log(length);

// console.log(res); // prints 32 for Hector

module.exports = peopleArray;
