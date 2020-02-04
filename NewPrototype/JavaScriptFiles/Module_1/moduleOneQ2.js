var array = new Array(8);
var groupingArray = new Array(8);

array = createArray(3);
createTruthTable(3);
createKMap(3);

// Attempts Left Message
var attemptsLeft = 3;
var starsGiven = 3;
var levelMaxStars = 3;
var totalUserStars = parseInt(localStorage.getItem("updatedUserStars"));

document.getElementById("attemptsLeft").innerHTML = "Attempts left: " + attemptsLeft.toString();

// Star score message
document.getElementById("scoreText").innerHTML =  " Star Score: " + starsGiven.toString() + "/" + levelMaxStars.toString();

// Sets numbers to match truth table
// First row
 /* kMapText.fillText(numberOne, 118, 130);
kMapText.fillText(numberTwo, 168, 130);
kMapText.fillText(numberThree, 218, 130);
kMapText.fillText(numberFour, 268, 130);

// Second Row
kMapText.fillText(numberFive, 118, 180);
kMapText.fillText(numberSix, 168, 180);
kMapText.fillText(numberSeven, 218, 180);
kMapText.fillText(numberEight, 268, 180); */
