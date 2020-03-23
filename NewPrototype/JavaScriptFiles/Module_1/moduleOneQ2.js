// 3 var grouping
var array = new Array(8);
var userArray = new Array(8);
var groupingArray = new Array(8);
var dontCare = 0;
var hint = 2;
var practiceMode = 0;

// Since no sixteens are present
var sixteenAmount = 0;
var sixteenArray = [null];
var sixteenDrawingArray = new Array(1);
var sixteenArrayIndex = 0;

// Counter for 8s along with array
var eightCounter = 0;
var eightAmount = 0;
var eightArray = new Array(1);
var eightDrawingArray = new Array(1);
var eightArrayIndex = 0;

// Counter for 4s along with array
var fourCounter = 0;
var fourAmount = 0;
var fourArray = new Array(1);
var fourDrawingArray = new Array(1);
var fourArrayIndex = 0;

// Counter for 2s along with array
var twoCounter = 0;
var twoAmount = 0;
var twoArray = new Array(1);
var twoDrawingArray = new Array(1);
var twoArrayIndex = 0;

var iOneDup = false;
var iTwoDup = false;
var iThreeDup = false;
var iFourDup = false;

array = createArray(3);
userArray = createUserArray(3);
createTruthTable(3);
createKMap(3);
fillKMap();

// For hardcoding array ( testing )
/*array[0] = 1;
array[1] = 1;
array[2] = 1;
array[3] = 0;
array[4] = 1;
array[5] = 0;
array[6] = 0;
array[7] = 0;*/

console.log( "\nA | BC________________________");
console.log( "  |     00 |  01 |  11 |  10  |");
console.log( "00|      " + array[0] + " |   " + array[1] + " |   " + array[2] + " |   " + array[3] + "  |" );
console.log( "01|      " + array[4] + " |   " + array[5] + " |   " + array[6] + " |   " + array[7] + "  |\n" );

find8s();
find4s();
find2s();

// Attempts Left Message
var attemptsLeft = 3;
var starsGiven = 3;
var levelMaxStars = 3;
var totalUserStars = parseInt(localStorage.getItem("updatedUserStars"));

document.getElementById("attemptsLeft").innerHTML = "Attempts left: " + attemptsLeft.toString();

// Star score message
document.getElementById("scoreText").innerHTML =  " Star Score: " + starsGiven.toString() + "/" + levelMaxStars.toString();
