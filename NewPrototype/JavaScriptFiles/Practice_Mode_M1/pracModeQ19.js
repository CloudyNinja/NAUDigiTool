// 4 var grouping ( DC ) ( POS )
var array = new Array(16);
var userArray = new Array(16);
var groupingArray = new Array(16);
var dontCare = 0;
var hint = 4;
var practiceMode = 1;
var pos = 1;
var ctx = canvas.getContext('2d');
function init() 
{
    canvas.addEventListener('mousedown', mouseDown, false);
    canvas.addEventListener('mouseup', mouseUp, false);
    canvas.addEventListener('mousemove', mouseMove, false);
}
init();

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
array[0] = 0;
array[1] = 0;
userArray = createUserArray(4);
createTruthTable(4);
createKMap(4);
fillKMap();

find16sPOS();
find8sPOS();
find4sPOS();
find2sPOS();

// Attempts Left Message
var starsGiven = 0;
var levelMaxStars = 0;
