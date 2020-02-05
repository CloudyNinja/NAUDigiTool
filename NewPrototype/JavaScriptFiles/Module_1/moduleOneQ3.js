var array = new Array(8);
var groupingArray = new Array(8);

array = createArray(3);
createTruthTable(3);
createKMap(3);
fillKMap();

/*array[0] = 1;
array[1] = 1;
array[2] = 0;
array[3] = 1;
array[4] = 1;
array[5] = 0;
array[6] = 0;
array[7] = 0;*/

printArray();
findOctetGroups();
findQuadGroups();
findPairGroups();
printThreeVariableEquation();

// Attempts Left Message
var attemptsLeft = 3;
var starsGiven = 3;
var levelMaxStars = 3;
var totalUserStars = parseInt(localStorage.getItem("updatedUserStars"));

document.getElementById("attemptsLeft").innerHTML = "Attempts left: " + attemptsLeft.toString();

// Star score message
document.getElementById("scoreText").innerHTML =  " Star Score: " + starsGiven.toString() + "/" + levelMaxStars.toString();

