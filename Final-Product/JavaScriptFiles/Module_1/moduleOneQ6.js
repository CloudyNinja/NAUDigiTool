// 4 var truth table translation ( DC )
var array = new Array(16);
var userArray = new Array(16);
var groupingArray = new Array(16);
var dontCare = 1;
var hint = 1;
var practiceMode = 0;

array = createArray(4);
userArray = createUserArray(4);
createTruthTable(4);
createKMap(4);
timer = setInterval( "countDown()", 1000 );
userArray = createUserArray(3);

// Attempts Left Message
var attemptsLeft = 3;
var starsGiven = 1;
var levelMaxStars = 1;
var totalUserStars = parseInt(localStorage.getItem("updatedUserStars"));

document.getElementById("attemptsLeft").innerHTML = "Attempts left: " + attemptsLeft.toString();

// Star score message
document.getElementById("scoreText").innerHTML =  " Star Score: " + totalUserStars + "/" + 60;