// 3 var grouping (DC)
var array = new Array(8);
var userArray = new Array(8);
var groupingArray = new Array(8);
var dontCare = 1;
var hint = 2;
var practiceMode = 0;
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

array = createArray(3);
array = generateArrayIndex();
userArray = createUserArray(3);
createTruthTable(3);
createKMap(3);
fillKMap();
timer = setInterval( "countDown()", 1000 );

find8s();
find4s();
find2s();

// Attempts Left Message
var attemptsLeft = 3;
var starsGiven = 1;
var levelMaxStars = 1;
var totalUserStars = parseInt(localStorage.getItem("updatedUserStars"));

document.getElementById("attemptsLeft").innerHTML = "Attempts left: " + attemptsLeft.toString();

// Star score message
document.getElementById("scoreText").innerHTML =  " Star Score: " + totalUserStars + "/" + 60;