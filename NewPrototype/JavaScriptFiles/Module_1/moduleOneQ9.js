var array = new Array(16);
var userArray = new Array(16);
var groupingArray = new Array(16);
var dontCare = 0;

// Counter for 16s along with array
var sixteenCounter = 0;
var sixteenAmount = 0;
var sixteenArray = new Array(1);
var sixteenDrawingArray = new Array(1);

array = createArray(4);
userArray = createUserArray(4);
createTruthTable(4);
createKMap(4);
fillKMap();

// For hardcoding array ( testing )
array[0] = 1;
array[1] = 1;
array[2] = 1;
array[3] = 1;
array[4] = 1;
array[5] = 1;
array[6] = 1;
array[7] = 1;
array[8] = 1;
array[9] = 1;
array[10] = 1;
array[11] = 1;
array[12] = 1;
array[13] = 1;
array[14] = 1;
array[15] = 1;

console.log( "\nA | BC________________________");
console.log( "  |     00 |  01 |  11 |  10  |");
console.log( "00|      " + array[0] + " |   " + array[1] + " |   " + array[2] + " |   " + array[3] + "  |" );
console.log( "01|      " + array[4] + " |   " + array[5] + " |   " + array[6] + " |   " + array[7] + "  |\n" );
console.log( "11|      " + array[8] + " |   " + array[9] + " |   " + array[10] + " |   " + array[11] + "  |\n" );
console.log( "10|      " + array[12] + " |   " + array[13] + " |   " + array[14] + " |   " + array[15] + "  |\n\n" );

find16s();

// Attempts Left Message
var attemptsLeft = 3;
var starsGiven = 3;
var levelMaxStars = 3;
var totalUserStars = parseInt(localStorage.getItem("updatedUserStars"));

document.getElementById("attemptsLeft").innerHTML = "Attempts left: " + attemptsLeft.toString();

// Star score message
document.getElementById("scoreText").innerHTML =  " Star Score: " + starsGiven.toString() + "/" + levelMaxStars.toString();
