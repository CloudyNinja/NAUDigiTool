// 3 var truth table translation ( DC )
var array = new Array(8);
var userArray = new Array(8);
var groupingArray = new Array(8);
var dontCare = 1;
var hint = 1;
var practiceMode = 0;

array = createArray(3);
createTruthTable(3);
createKMap(3);
timer = setInterval( "countDown()", 1000 );

console.log( JSON.stringify( array ) );
userArray = createUserArray(3);

// Attempts Left Message
var attemptsLeft = 3;
var starsGiven = 1;
var levelMaxStars = 1;
var totalUserStars = parseInt(localStorage.getItem("updatedUserStars"));

document.getElementById("attemptsLeft").innerHTML = "Attempts left: " + attemptsLeft.toString();

// Star score message
document.getElementById("scoreText").innerHTML =  " Star Score: " + totalUserStars + "/" + 60;
