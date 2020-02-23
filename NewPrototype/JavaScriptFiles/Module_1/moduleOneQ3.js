var array = new Array(8);
var groupingArray = new Array(8);
var twoDArray = new Array( 4 );
var drawRectangles = 1;
create2DArray();

array = createArray(3);
createTruthTable(3);
createKMap(3);
fillKMap();

/*array[0] = 1;
array[1] = 1;
array[2] = 1;
array[3] = 0;
array[4] = 1;
array[5] = 0;
array[6] = 1;
array[7] = 1;*/

printArray();
findOctetGroups();
findQuadGroups();
findPairGroups();

console.log( "Before check: " + JSON.stringify( twoDArray ) );
twoDArray = checkForRedundancies( twoDArray );
console.log( JSON.stringify( twoDArray ) );

drawEquationPairRectangles( twoDArray );
addPairsToThreeVarEquation( twoDArray );
console.log(JSON.stringify(equationArray));

// Attempts Left Message
var attemptsLeft = 3;
var starsGiven = 3;
var levelMaxStars = 3;
var totalUserStars = parseInt(localStorage.getItem("updatedUserStars"));

document.getElementById("attemptsLeft").innerHTML = "Attempts left: " + attemptsLeft.toString();

// Star score message
document.getElementById("scoreText").innerHTML =  " Star Score: " + starsGiven.toString() + "/" + levelMaxStars.toString();

