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

console.log( "\nA | BC________________________");
console.log( "  |     00 |  01 |  11 |  10  |");
console.log( "00|      " + array[0] + " |   " + array[1] + " |   " + array[2] + " |   " + array[3] + "  |" );
console.log( "01|      " + array[4] + " |   " + array[5] + " |   " + array[6] + " |   " + array[7] + "  |\n" );

console.log( "ARRAY FORMED: " + JSON.stringify( array ) );

find8s();
find4s();
find2s();

// TEST MAIN

/*var arraysToGenerateFrom3Var = [ [1,"X",1,"X",1,1,1,1], [1,"X",1,"X",0,1,0,1], [1,"X",0,0,"X","X",0,1],
                             [1,"X",1,1,1,1,"X",1], [1,"X","X",1,0,1,0,1],
                             [1,"X",1,"X","X","X",1,1], [1,"X",1,1,0,0,1,1], [1,"X","X",1,"X","X",1,1],
                             [1,"X",0,0,0,"X","X",0], [1,"X",1,1,"X",1,1,"X"], [1,"X","X","X",0,1,1,0],
                             [1,"X",1,0,1,1,"X",0], [1,"X",1,0,1,1,1,1], [1,"X",1,0,1,1,1,0],
                             [1,"X","X","X",1,1,1,1], [1,"X",0,0,1,1,0,1], [1,"X",1,"X","X","X",1,"X"],
                             [1,"X","X",1,0,"X",0,1], [1,"X",1,"X",1,1,"X",1], [1,"X",0,0,1,1,1,1],
                             [1,"X",1,1,1,0,0,"X"], [1,"X",0,0,1,"X",0,1], [1,"X","X",1,0,0,1,"X"],
                             [1,"X","X","X",1,1,"X",1], [1,"X",0,0,"X",1,0,0], [1,"X","X",1,1,0,0,0],
                             [1,"X","X","X",0,0,"X",1],
                             [1,"X",1,1,"X","X","X","X"], [1,"X","X","X","X","X",1,1],  [1,"X","X",1,1,"X",1,1], [1,"X",1,1,1,1,1,1], [1,"X","X",1,0,0,1,1], [1,"X",1,"X",1,"X","X",1],
                             [1,"X",0,1,"X",1,0,0], [1,"X",1,1,1,0,0,0], [1,"X","X",1,"X",1,1,1], [1,"X",1,1,1,"X",1,1], [1,"X",1,1,0,1,1,1], [1,"X",1,"X",1,"X",1,1],
                             [1,"X",1,1,1,"X","X",1], [1,"X",1,0,"X",1,"X",0], [1,"X",0,0,0,"X",0,1],
                             [1,"X",0,0,0,1,1,1], [1,"X",1,1,1,1,0,1], [1,"X",0,"X",1,1,0,1], [1,"X",0,1,1,1,1,0], [1,"X",0,1,1,1,0,0], [1,"X","X",1,1,1,"X",1] ];

for ( var index = 0; index < arraysToGenerateFrom3Var.length; index++ )
{
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
    array = arraysToGenerateFrom3Var[index];
    //array = generateArrayIndex();
    userArray = createUserArray(3);
    createTruthTable(3);
    createKMap(3);
    fillKMap();
    timer = setInterval( "countDown()", 100000 );

    console.log( "\n\nARRAY FORMED: " + JSON.stringify( array ) + "\n" );
    console.log( "\nA | BC________________________");
    console.log( "  |     00 |  01 |  11 |  10  |");
    console.log( "00|      " + array[0] + " |   " + array[1] + " |   " + array[2] + " |   " + array[3] + "  |" );
    console.log( "01|      " + array[4] + " |   " + array[5] + " |   " + array[6] + " |   " + array[7] + "  |\n\n" );

    find8s();
    find4s();
    find2s();
}*/

// END OF TEST

// Attempts Left Message
var attemptsLeft = 3;
var starsGiven = 1;
var levelMaxStars = 1;
var totalUserStars = parseInt(localStorage.getItem("updatedUserStars"));

document.getElementById("attemptsLeft").innerHTML = "Attempts left: " + attemptsLeft.toString();

// Star score message
document.getElementById("scoreText").innerHTML =  " Star Score: " + totalUserStars + "/" + 60;