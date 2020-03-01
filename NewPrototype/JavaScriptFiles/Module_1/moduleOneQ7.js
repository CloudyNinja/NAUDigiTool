var array = new Array(8);
var groupingArray = new Array(8);
var twoDArray = new Array( 4 );
create2DArray( twoDArray );
var dontCare = 1;

var user2DArray = new Array( 20 );
create2DArray( user2DArray );

array = createArray(3);
createTruthTable(3);
createKMap(3);
fillKMap();

array[0] = 1;
array[1] = 1;
array[2] = 1;
array[3] = "X";
array[4] = 1;
array[5] = 1;
array[6] = 1;
array[7] = 1;

printArray();
findOctetGroups();
findQuadGroups();
findPairGroups();

console.log( "Before check: " + JSON.stringify( twoDArray ) );
twoDArray = checkForRedundancies( twoDArray );
console.log( "After check: " + JSON.stringify( twoDArray ) );

// Attempts Left Message
var attemptsLeft = 3;
var starsGiven = 3;
var levelMaxStars = 3;
var totalUserStars = parseInt(localStorage.getItem("updatedUserStars"));

document.getElementById("attemptsLeft").innerHTML = "Attempts left: " + attemptsLeft.toString();

// Star score message
document.getElementById("scoreText").innerHTML =  " Star Score: " + starsGiven.toString() + "/" + levelMaxStars.toString();
