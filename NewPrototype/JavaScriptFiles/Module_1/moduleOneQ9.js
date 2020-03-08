var array = new Array(16);
var userArray = new Array(16);
var groupingArray = new Array(16);
var dontCare = 0;

array = createArray(4);
userArray = createUserArray(4);
createTruthTable(4);
createKMap(4);
fillKMap();

// Attempts Left Message
var attemptsLeft = 3;
var starsGiven = 3;
var levelMaxStars = 3;
var totalUserStars = parseInt(localStorage.getItem("updatedUserStars"));

document.getElementById("attemptsLeft").innerHTML = "Attempts left: " + attemptsLeft.toString();

// Star score message
document.getElementById("scoreText").innerHTML =  " Star Score: " + starsGiven.toString() + "/" + levelMaxStars.toString();
