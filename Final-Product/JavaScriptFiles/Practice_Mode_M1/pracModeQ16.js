// 3 var equation writing ( DC )( POS )
var array = new Array(8);
var userArray = new Array(8);
var groupingArray = new Array(8);
var dontCare = 1;
var hint = 3;
var practiceMode = 1;
var pos = 1;

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
array = generateArrayIndex();

// Switches array to POS array
for ( var index = 0; index < array.length; index++ )
{
    if ( array[index] == 0 )
    {
        array[index] = 1;
    }
    
    else if ( array[index] == 1 )
    {
        array[index] = 0;
    }
}
userArray = createUserArray(3);
createTruthTable(3);
createKMap(3);
fillKMap();

find8sPOS();
find4sPOS();
find2sPOS();

autodrawRectangles( eightArray );
autodrawRectangles( fourArray );
autodrawRectangles( twoArray );

addValuesToEquationArrayPOS( eightArray );
addValuesToEquationArrayPOS( fourArray );
addValuesToEquationArrayPOS( twoArray );

// Attempts Left Message
var starsGiven = 0;
var levelMaxStars = 0;

