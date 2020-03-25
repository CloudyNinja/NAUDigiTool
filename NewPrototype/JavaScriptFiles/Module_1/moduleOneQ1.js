// 3 var truth table translation
var array = new Array(8);
var userArray = new Array(8);
var groupingArray = new Array(8);
var dontCare = 0;
var hint = 1;
var practiceMode = 0;

array = createArray(3);
userArray = createUserArray(3);
createTruthTable(3);
createKMap(3);

/*array[0] = 0;
array[1] = 1;
array[2] = 1;
array[3] = 1;
array[4] = 1;
array[5] = 0;
array[6] = 0;
array[7] = 1;*/

//console.log( JSON.stringify( array ) );

/*var start = new Date().getTime();
var end = new Date().getTime();
var time = end - start;
alert('Execution time: ' + time);*/

// Attempts Left Message
var start = new Date().getTime();
var attemptsLeft = 3;
var starsGiven = 1;
var levelMaxStars = 1;
var totalUserStars = 0;

document.getElementById("attemptsLeft").innerHTML = "Attempts left: " + attemptsLeft.toString();

// Star score message
document.getElementById("scoreText").innerHTML =  " Star Score: " + starsGiven.toString() + "/" + levelMaxStars.toString();
