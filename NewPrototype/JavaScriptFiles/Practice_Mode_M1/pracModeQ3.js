// 3 var equation writing
var array = new Array(8);
var userArray = new Array(8);
var groupingArray = new Array(8);
var dontCare = 0;
var hint = 3;
var practiceMode = 1;
var pos = 0;

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

array = createArray(3);
userArray = createUserArray(3);
createTruthTable(3);
createKMap(3);
fillKMap();

find8s();
find4s();
find2s();

autodrawRectangles( eightArray );
autodrawRectangles( fourArray );
autodrawRectangles( twoArray );

addValuesToEquationArray( eightArray );
addValuesToEquationArray( fourArray );
addValuesToEquationArray( twoArray );

// Attempts Left Message
var starsGiven = 0;
var levelMaxStars = 0;

