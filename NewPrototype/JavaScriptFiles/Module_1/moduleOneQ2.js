var array = new Array(8);
var groupingArray = new Array(8);

array = createArray(3);
createTruthTable(3);
createKMap(3);
fillKMap();

findOctetGroups();
findQuadGroups();
findPairGroups();

// Attempts Left Message
var attemptsLeft = 3;
var starsGiven = 3;
var levelMaxStars = 3;
var totalUserStars = parseInt(localStorage.getItem("updatedUserStars"));

document.getElementById("attemptsLeft").innerHTML = "Attempts left: " + attemptsLeft.toString();

// Star score message
document.getElementById("scoreText").innerHTML =  " Star Score: " + starsGiven.toString() + "/" + levelMaxStars.toString();
