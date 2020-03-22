var array = new Array(16);
var userArray = new Array(16);
var groupingArray = new Array(16);
var dontCare = 0;

// Counter for 16s along with array
var sixteenCounter = 0;
var sixteenAmount = 0;
var sixteenArray = new Array(1);
var sixteenDrawingArray = new Array(1);

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

array = createArray(4);
userArray = createUserArray(4);
createTruthTable(4);
createKMap(4);
fillKMap();

// For hardcoding array ( testing )
/*array[0] = 1;
array[1] = 0;
array[2] = 0;
array[3] = 1;
array[4] = 1;
array[5] = 0;
array[6] = 0;
array[7] = 1;
array[8] = 1;
array[9] = 0;
array[10] = 0;
array[11] = 1;
array[12] = 1;
array[13] = 0;
array[14] = 0;
array[15] = 1;*/

console.log( "\nA | BC________________________");
console.log( "  |     00 |  01 |  11 |  10  |");
console.log( "00|      " + array[0] + " |   " + array[1] + " |   " + array[2] + " |   " + array[3] + "  |" );
console.log( "01|      " + array[4] + " |   " + array[5] + " |   " + array[6] + " |   " + array[7] + "  |\n" );
console.log( "11|      " + array[8] + " |   " + array[9] + " |   " + array[10] + " |   " + array[11] + "  |\n" );
console.log( "10|      " + array[12] + " |   " + array[13] + " |   " + array[14] + " |   " + array[15] + "  |\n\n" );

find16s();
find8s();
find4s();
find2s();

autodrawRectangles( sixteenArray );
autodrawRectangles( eightArray );
autodrawRectangles( fourArray );
autodrawRectangles( twoArray );

addValuesToEquationArray( sixteenArray );
addValuesToEquationArray( eightArray );
addValuesToEquationArray( fourArray );
addValuesToEquationArray( twoArray );

// Attempts Left Message
var starsGiven = 0;
var levelMaxStars = 0;
