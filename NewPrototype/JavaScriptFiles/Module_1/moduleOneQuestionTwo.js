var canvas = document.getElementById("myTruthTableCanvas");

//----------------------------------------------------------------------------------

// Creates vertical line
var verticalLine = canvas.getContext("2d");

// Vertical Line
verticalLine.beginPath();

// Sets start point
verticalLine.moveTo(160, 50);

// Sets end point
verticalLine.lineTo(160, 360);

// Draws line
verticalLine.stroke();

//----------------------------------------------------------------------------------

// Creates horizontal line
var horizontalLine = canvas.getContext("2d");

// Horizontal Line
horizontalLine.beginPath();

// Sets start point
horizontalLine.moveTo(10, 83);

// Sets end point
horizontalLine.lineTo(200, 83);

// Draws line
horizontalLine.stroke();

// Sets A, B, and F text
var text = canvas.getContext("2d");

//----------------------------------------------------------------------------------

// Truth Table
text.font = "20px Arial";
text.fillText("Truth Table", 60, 30);

//----------------------------------------------------------------------------------

// A text
text.fillText("A", 30, 75);

// Puts number in row 2 column 1
text.fillText( 0, 30, 105 );

// Puts number in row 3 column 1
text.fillText( 0, 30, 140 );

// Puts number in row 4 column 1
text.fillText( 0, 30, 175 );

// Puts number in row 5 column 1
text.fillText( 0, 30, 210 );

// Puts number in row 6 column 1
text.fillText( 1, 30, 245 );

// Puts number in row 7 column 1
text.fillText( 1, 30, 280 );

// Puts number in row 8 column 1
text.fillText( 1, 30, 315 );

// Puts number in row 9 column 1
text.fillText( 1, 30, 350 );

//----------------------------------------------------------------------------------

// B text
text.fillText("B", 80, 75);

// Puts number in row 2 column 2
text.fillText( 0, 80, 105 );

// Puts number in row 3 column 2
text.fillText( 0, 80, 140 );

// Puts number in row 4 column 2
text.fillText( 1, 80, 175 );

// Puts number in row 5 column 2
text.fillText( 1, 80, 210 );

// Puts number in row 6 column 2
text.fillText( 0, 80, 245 );

// Puts number in row 7 column 2
text.fillText( 0, 80, 280 );

// Puts number in row 8 column 2
text.fillText( 1, 80, 315 );

// Puts number in row 9 column 2
text.fillText( 1, 80,350 );

//----------------------------------------------------------------------------------

// C text
text.fillText("C", 130, 75);

// Puts number in row 2 column 3
text.fillText( 0, 130, 105 );

// Puts number in row 3 column 3
text.fillText( 1, 130, 140 );

// Puts number in row 4 column 3
text.fillText( 0, 130, 175 );

// Puts number in row 5 column 3
text.fillText( 1, 130, 210 );

// Puts number in row 6 column 3
text.fillText( 0, 130, 245 );

// Puts number in row 7 column 3
text.fillText( 1, 130, 280 );

// Puts number in row 8 column 3
text.fillText( 0, 130, 315 );

// Puts number in row 9 column 3
text.fillText( 1, 130,350 );

//----------------------------------------------------------------------------------

// F text
text.fillText("F", 180, 75);

// Puts number in row 2 column 4
var numberOne = generateNumber();
text.fillText( numberOne, 180, 105 );

// Puts number in row 3 column 4
var numberTwo = generateNumber();
text.fillText( numberTwo, 180, 140 );

// Puts number in row 4 column 4
var numberThree = generateNumber();
text.fillText( numberThree, 180, 175 );

// Puts number in row 5 column 4
var numberFour = generateNumber();
text.fillText( numberFour, 180, 210 );

// Puts number in row 6 column 4
var numberFive = generateNumber();
text.fillText( numberFive, 180, 245 );

// Puts number in row 7 column 4
var numberSix = generateNumber();
text.fillText( numberSix, 180, 280 );

// Puts number in row 8 column 4
var numberSeven = generateNumber();
text.fillText( numberSeven, 180, 315 );

// Puts number in row 9 column 4
var numberEight = generateNumber();
text.fillText( numberEight, 180,350 );

// Creates square
var square = canvas.getContext("2d");
square.fillStyle = "#AE61FF";
square.globalAlpha = 0.3;
square.fillRect(20, 220, 180, 140);

//----------------------------------------------------------------------------------

// Creates K-MAP
var kMapCanvas = document.getElementById("myKMapCanvas");

// K-Map text
var kMapText = kMapCanvas.getContext("2d");
kMapText.font = "20px Arial";
kMapText.fillText("K-Map", 160, 30);

// Creates diagonal line
var diagonalLine = kMapCanvas.getContext("2d");

// Diagonal Line
diagonalLine.beginPath();

// Sets start point
diagonalLine.moveTo(65, 50);

// Sets end point
diagonalLine.lineTo(100, 100);

// Draws line
diagonalLine.stroke();

//----------------------------------------------------------------------------------

// K-Map vertical lines from LEFT to RIGHT

// Creates first vertical line
var verticalLineOne = kMapCanvas.getContext("2d");

// Vertical line one
verticalLineOne.beginPath();

// Sets start point
verticalLineOne.moveTo(100, 100);

// Sets end point
verticalLineOne.lineTo(100, 200);

// Draws line
verticalLineOne.stroke();

// Creates second vertical line
var verticalLineTwo = kMapCanvas.getContext("2d");

// Vertical line two
verticalLineTwo.beginPath();

// Sets start point
verticalLineTwo.moveTo(150, 100);

// Sets end point
verticalLineTwo.lineTo(150, 200);

// Draws line
verticalLineTwo.stroke();

// Creates third vertical line
var verticalLineThree = kMapCanvas.getContext("2d");

// Vertical line three
verticalLineThree.beginPath();

// Sets start point
verticalLineThree.moveTo(200, 100);

// Sets end point
verticalLineThree.lineTo(200, 200);

// Draws line
verticalLineThree.stroke();

// Creates fourth vertical line
var verticalLineFour = kMapCanvas.getContext("2d");

// Vertical line four
verticalLineFour.beginPath();

// Sets start point
verticalLineFour.moveTo(250, 100);

// Sets end point
verticalLineFour.lineTo(250, 200);

// Draws line
verticalLineFour.stroke();

// Creates fifth vertical line
var verticalLineFive = kMapCanvas.getContext("2d");

// Vertical line five
verticalLineFive.beginPath();

// Sets start point
verticalLineFive.moveTo(300, 100);

// Sets end point
verticalLineFive.lineTo(300, 200);

// Draws line
verticalLineFive.stroke();

//----------------------------------------------------------------------------------

// K-Map horizontal lines from TOP to Bottom

// Creates first horizontal line
var horizontalLineOne = kMapCanvas.getContext("2d");

// Sets start point
horizontalLineOne.moveTo(100, 100);

// Sets end point
horizontalLineOne.lineTo(301, 100);

// Draws line
horizontalLineOne.stroke();

// Creates second horizontal line
var horizontalLineTwo = kMapCanvas.getContext("2d");

// Sets start point
horizontalLineTwo.moveTo(100, 150);

// Sets end point
horizontalLineTwo.lineTo(301, 150);

// Draws line
horizontalLineTwo.stroke();

// Creates third horizontal line
var horizontalLineThree = kMapCanvas.getContext("2d");

// Sets start point
horizontalLineThree.moveTo(100, 200);

// Sets end point
horizontalLineThree.lineTo(301, 200);

// Draws line
horizontalLineThree.stroke();

//----------------------------------------------------------------------------------

// Sets A, B, and C text as well as numbers
var kMapText = kMapCanvas.getContext("2d");

// A text
kMapText.fillText("A", 55, 70);

// B text
kMapText.fillText("B C", 81, 70);

// 0
kMapText.fillText("0", 80, 130);

// 1
kMapText.fillText("1", 80, 180);

// 00
kMapText.fillText("00", 113, 96);

// 01
kMapText.fillText("01", 163, 96);

// 11
kMapText.fillText("10", 213, 96);

// 10
kMapText.fillText("11", 263, 96);

// Sets numbers to match truth table
// First row
kMapText.fillText(numberOne, 118, 130);
kMapText.fillText(numberTwo, 168, 130);
kMapText.fillText(numberThree, 218, 130);
kMapText.fillText(numberFour, 268, 130);

// Second Row
kMapText.fillText(numberFive, 118, 180);
kMapText.fillText(numberSix, 168, 180);
kMapText.fillText(numberSeven, 218, 180);
kMapText.fillText(numberEight, 268, 180);

// Attempts Left Message
var attemptsLeft = 3;
var starsGiven = 3;
var levelMaxStars = 3;
var totalUserStars = parseInt(localStorage.getItem("updatedUserStars"));

document.getElementById("attemptsLeft").innerHTML = "Attempts left: " + attemptsLeft.toString();

// Star score message
document.getElementById("scoreText").innerHTML = "Star Score: " + starsGiven.toString() + "/" + levelMaxStars.toString();
//document.getElementById("scoreText").innerHTML = "Star Score: " + totalUserStars.toString();

//////////////////////////////////////////////////

var clickCanvas = document.getElementById("userFillCanvas");

// Sets flags for top row of squares
var topLeftFlag = true;
var topLeftMiddleFlag = true;
var topRightMiddleFlag = true;
var topRightFlag = true;

// Sets flags for bottom row of squares
var bottomLeftFlag = true;
var bottomLeftMiddleFlag = true;
var bottomRightMiddleFlag = true;
var bottomRightFlag = true;
    
clickCanvas.addEventListener('mousedown', onmousedown);

// This allows drawing to be done
function onmousedown( event )
{
    var coordinateX = event.pageX;
    var coordinateY = event.pageY;
    
    var inBoundsX = coordinateX > 578 && coordinateX < 775;
    var inBoundsY = coordinateY > 255 && coordinateY < 350;
    
    // Top left square property
    var topLeft = coordinateX >= 578 && coordinateX <= 626 && coordinateY >= 255 && coordinateY <= 300;
    
    // Top left middle square property
    var topLeftMiddle = coordinateX >= 627 && coordinateX <= 675 && coordinateY >= 255 && coordinateY <= 300;
    
    // Top right middle square property
    var topRightMiddle = coordinateX >= 676 && coordinateX <= 724 && coordinateY >= 255 && coordinateY <= 300;
    
    // Top right square property
    var topRight = coordinateX >= 725 && coordinateX <= 772 && coordinateY >= 255 && coordinateY <= 300;
    
    // Bottom left square property
    var bottomLeft = coordinateX >= 578 && coordinateX <= 626 && coordinateY >= 301 && coordinateY <= 355;
    
    // Bottom left middle square property
    var bottomLeftMiddle = coordinateX >= 627 && coordinateX <= 675 && coordinateY >= 301 && coordinateY <= 355;
    
    // Bottom right middle square property
    var bottomRightMiddle = coordinateX >= 676 && coordinateX <= 724 && coordinateY >= 301 && coordinateY <= 355;
    
    // Bottom right square property
    var bottomRight = coordinateX >= 725 && coordinateX <= 772 && coordinateY >= 301 && coordinateY <= 355;
    
    // Square filler
    var sCanvas = document.getElementById("userFillCanvas");
    var square = sCanvas.getContext('2d');
    
    square.fillStyle = "#3EFF00";
    square.globalAlpha = 0.3;
    
    // If statement for top left square
    if ( inBoundsX && inBoundsY && topLeft && topLeftFlag )
    {
        square.fillRect(102, 102, 49, 49);
        topLeftFlag = false;
    }
    
    else if ( inBoundsX && inBoundsY && topLeft && !topLeftFlag )
    {
        square.clearRect(102, 102, 49, 49);
        topLeftFlag = true;
    }
    
    // If statement for top left middle square
    else if ( inBoundsX && inBoundsY && topLeftMiddle && topLeftMiddleFlag )
    {
        square.fillRect(152, 102, 49, 49);
        topLeftMiddleFlag = false;
    }
    
    else if ( inBoundsX && inBoundsY && topLeftMiddle && !topLeftMiddleFlag )
    {
        square.clearRect(152, 102, 49, 49);
        topLeftMiddleFlag = true;
    }
    
    // If statement for top right middle square
    else if ( inBoundsX && inBoundsY && topRightMiddle && topRightMiddleFlag )
    {
        square.fillRect(202, 102, 49, 49);
        topRightMiddleFlag = false;
    }
    
    else if ( inBoundsX && inBoundsY && topRightMiddle && !topRightMiddleFlag )
    {
        square.clearRect(202, 102, 49, 49);
        topRightMiddleFlag = true;
    }
    
    // If statement for top right square
    else if ( inBoundsX && inBoundsY && topRight && topRightFlag )
    {
        square.fillRect(252, 102, 49, 49);
        topRightFlag = false;
    }
    
    else if ( inBoundsX && inBoundsY && topRight && !topRightFlag )
    {
        square.clearRect(252, 102, 49, 49);
        topRightFlag = true;
    }
    
    // If statement for bottom left square
    else if ( inBoundsX && inBoundsY && bottomLeft && bottomLeftFlag )
    {
        square.fillRect(102, 152, 49, 49);
        bottomLeftFlag = false;
    }
    
    else if ( inBoundsX && inBoundsY && bottomLeft && !bottomLeftFlag )
    {
        square.clearRect(102, 152, 49, 49);
        bottomLeftFlag = true;
    }
    
    // If statement for bottom left middle square
    else if ( inBoundsX && inBoundsY && bottomLeftMiddle && bottomLeftMiddleFlag )
    {
        square.fillRect(152, 152, 49, 49);
        bottomLeftMiddleFlag = false;
    }
    
    else if ( inBoundsX && inBoundsY && bottomLeftMiddle && !bottomLeftMiddleFlag )
    {
        square.clearRect(152, 152, 49, 49);
        bottomLeftMiddleFlag = true;
    }
    
    // If statement for bottom right middle square
    else if ( inBoundsX && inBoundsY && bottomRightMiddle && bottomRightMiddleFlag )
    {
        square.fillRect(202, 152, 49, 49);
        bottomRightMiddleFlag = false;
    }
    
    else if ( inBoundsX && inBoundsY && bottomRightMiddle && !bottomRightMiddleFlag )
    {
        square.clearRect(202, 152, 49, 49);
        bottomRightMiddleFlag = true;
    }
    
    // If statement for bottom right square
    else if ( inBoundsX && inBoundsY && bottomRight && bottomRightFlag )
    {
        square.fillRect(252, 152, 49, 49);
        bottomRightFlag = false;
    }
    
    else
    {
        square.clearRect(252, 152, 49, 49);
        bottomRightFlag = true;
    }
    
    /* FOR TESTING PURPOSES: KEEP HERE FOR NOW
    else
    {
        alert( "X, Y = " + coordinateX + ', ' + coordinateY );
        //alert( "NOT IN BOUNDS!" );
    }*/
}

// Generates 0 or 1
function generateNumber() 
{
  var variable = Math.random();
  
  if ( variable >= 0.5 )
  {
  	variable = Math.ceil( variable );
  }
  
  else
  {
  	variable = Math.floor( variable );
  }
  
  return variable;
}

// Resets all user input numbers
function resetColors()
{
    // Square filler
    var eraseCanvas = document.getElementById("userFillCanvas");
    var clearSquare = eraseCanvas.getContext('2d');
    
    clearSquare.clearRect(102, 102, 49, 49);
    topLeftFlag = true;
    clearSquare.clearRect(152, 102, 49, 49);
    topLeftMiddleFlag = true;
    clearSquare.clearRect(202, 102, 49, 49);
    topRightMiddleFlag = true;
    clearSquare.clearRect(252, 102, 49, 49);
    topRightFlag = true;
    clearSquare.clearRect(102, 152, 49, 49);
    bottomLeftFlag = true;
    clearSquare.clearRect(152, 152, 49, 49);
    bottomLeftMiddleFlag = true;
    clearSquare.fillRect(202, 152, 49, 49);
    bottomRightMiddleFlag = true;
    clearSquare.clearRect(202, 152, 49, 49);
    bottomRightMiddleFlag = true;
    clearSquare.clearRect(252, 152, 49, 49);
    bottomRightFlag = true;
    document.getElementById("incorrectAnswerMessage").innerHTML = "";
    document.getElementById("hint").innerHTML = "";
}

function checkAnswers()
{    
    // Numbers
    var topLeftNum = numberOne;
    var topLeftMiddleNum = numberTwo;
    var topRightMiddleNum = numberThree;
    var topRightNum = numberFour;
    
    // Combinations
    var topRowCombOne = topLeftNum == 0 && topLeftMiddleNum == 0 && topRightMiddleNum == 0 && topRightNum == 0;
    var topRowCombTwo = topLeftNum == 1 && topLeftMiddleNum == 1 && topRightMiddleNum == 1 && topRightNum == 1;
    var topRowCombThree = topLeftNum == 1 && topLeftMiddleNum == 0 && topRightMiddleNum == 0 && topRightNum == 1;
    var topRowCombFour = topLeftNum == 1 && topLeftMiddleNum == 1 && topRightMiddleNum == 0 && topRightNum == 0;
    var topRowCombFive = topLeftNum == 0 && topLeftMiddleNum == 0 && topRightMiddleNum == 1 && topRightNum == 1;
    var topRowCombSix = topLeftNum == 0 && topLeftMiddleNum == 1 && topRightMiddleNum == 1 && topRightNum == 0;
    var topRowCombSeven = topLeftNum == 1 && topLeftMiddleNum == 0 && topRightMiddleNum == 0 && topRightNum == 0;
    var topRowCombEight = topLeftNum == 0 && topLeftMiddleNum == 1 && topRightMiddleNum == 0 && topRightNum == 0;
    var topRowCombNine = topLeftNum == 0 && topLeftMiddleNum == 0 && topRightMiddleNum == 1 && topRightNum == 0;
    var topRowCombTen = topLeftNum == 0 && topLeftMiddleNum == 0 && topRightMiddleNum == 0 && topRightNum == 1;
    var topRowCombEleven = topLeftNum == 1 && topLeftMiddleNum == 1 && topRightMiddleNum == 1 && topRightNum == 0;
    var topRowCombTwelve = topLeftNum == 0 && topLeftMiddleNum == 1 && topRightMiddleNum == 1 && topRightNum == 1;
    var topRowCombThirteen = topLeftNum == 1 && topLeftMiddleNum == 0 && topRightMiddleNum == 1 && topRightNum == 0;
    var topRowCombFourteen = topLeftNum == 0 && topLeftMiddleNum == 1 && topRightMiddleNum == 0 && topRightNum == 1;
    var topRowCombFifteen = topLeftNum == 1 && topLeftMiddleNum == 1 && topRightMiddleNum == 0 && topRightNum == 1;
    var topRowCombSixteen = topLeftNum == 1 && topLeftMiddleNum == 0 && topRightMiddleNum == 1 && topRightNum == 1;
    
    // User fill in possbilities for top row ( ! means filled in )
    var topRowFillCombOne = topLeftFlag && topLeftMiddleFlag && topRightMiddleFlag && topRightFlag;
    var topRowFillCombTwo = !topLeftFlag && !topLeftMiddleFlag && !topRightMiddleFlag && !topRightFlag;
    var topRowFillCombThree = !topLeftFlag && topLeftMiddleFlag && topRightMiddleFlag && !topRightFlag;
    var topRowFillCombFour = !topLeftFlag && !topLeftMiddleFlag && topRightMiddleFlag && topRightFlag;
    var topRowFillCombFive = topLeftFlag && topLeftMiddleFlag && !topRightMiddleFlag && !topRightFlag;
    var topRowFillCombSix = topLeftFlag && !topLeftMiddleFlag && !topRightMiddleFlag && topRightFlag;
    var topRowFillCombSeven = !topLeftFlag && topLeftMiddleFlag && topRightMiddleFlag && topRightFlag;
    var topRowFillCombEight = topLeftFlag && !topLeftMiddleFlag && topRightMiddleFlag && topRightFlag;
    var topRowFillCombNine = topLeftFlag && topLeftMiddleFlag && !topRightMiddleFlag && topRightFlag;
    var topRowFillCombTen = topLeftFlag && topLeftMiddleFlag && topRightMiddleFlag && !topRightFlag;
    var topRowFillCombEleven = !topLeftFlag && !topLeftMiddleFlag && !topRightMiddleFlag && topRightFlag;
    var topRowFillCombTwelve = topLeftFlag && !topLeftMiddleFlag && !topRightMiddleFlag && !topRightFlag;
    var topRowFillCombThirteen = !topLeftFlag && topLeftMiddleFlag && !topRightMiddleFlag && topRightFlag;
    var topRowFillCombFourteen = topLeftFlag && !topLeftMiddleFlag && topRightMiddleFlag && !topRightFlag;
    var topRowFillCombFifteen = !topLeftFlag && !topLeftMiddleFlag && topRightMiddleFlag && !topRightFlag;
    var topRowFillCombSixteen = topLeftFlag && topLeftMiddleFlag && !topRightMiddleFlag && !topRightFlag;
    
    // Numbers
    var bottomLeftNum = numberFive;
    var bottomLeftMiddleNum = numberSix;
    var bottomRightMiddleNum = numberSeven;
    var bottomRightNum = numberEight;
    
    // Combinations
    var bottomRowCombOne = bottomLeftNum == 0 && bottomLeftMiddleNum == 0 && bottomRightMiddleNum == 0 && bottomRightNum == 0;
    var bottomRowCombTwo = bottomLeftNum == 1 && bottomLeftMiddleNum == 1 && bottomRightMiddleNum == 1 && bottomRightNum == 1;
    var bottomRowCombThree = bottomLeftNum == 1 && bottomLeftMiddleNum == 0 && bottomRightMiddleNum == 0 && bottomRightNum == 1;
    var bottomRowCombFour = bottomLeftNum == 1 && bottomLeftMiddleNum == 1 && bottomRightMiddleNum == 0 && bottomRightNum == 0;
    var bottomRowCombFive = bottomLeftNum == 0 && bottomLeftMiddleNum == 0 && bottomRightMiddleNum == 1 && bottomRightNum == 1;
    var bottomRowCombSix = bottomLeftNum == 0 && bottomLeftMiddleNum == 1 && bottomRightMiddleNum == 1 && bottomRightNum == 0;
    var bottomRowCombSeven = bottomLeftNum == 1 && bottomLeftMiddleNum == 0 && bottomRightMiddleNum == 0 && bottomRightNum == 0;
    var bottomRowCombEight = bottomLeftNum == 0 && bottomLeftMiddleNum == 1 && bottomRightMiddleNum == 0 && bottomRightNum == 0;
    var bottomRowCombNine = bottomLeftNum == 0 && bottomLeftMiddleNum == 0 && bottomRightMiddleNum == 1 && bottomRightNum == 0;
    var bottomRowCombTen = bottomLeftNum == 0 && bottomLeftMiddleNum == 0 && bottomRightMiddleNum == 0 && bottomRightNum == 1;
    var bottomRowCombEleven = bottomLeftNum == 1 && bottomLeftMiddleNum == 1 && bottomRightMiddleNum == 1 && bottomRightNum == 0;
    var bottomRowCombTwelve = bottomLeftNum == 0 && bottomLeftMiddleNum == 1 && bottomRightMiddleNum == 1 && bottomRightNum == 1;
    var bottomRowCombThirteen = bottomLeftNum == 1 && bottomLeftMiddleNum == 0 && bottomRightMiddleNum == 1 && bottomRightNum == 0;
    var bottomRowCombFourteen = bottomLeftNum == 0 && bottomLeftMiddleNum == 1 && bottomRightMiddleNum == 0 && bottomRightNum == 1;
    var bottomRowCombFifteen = bottomLeftNum == 1 && bottomLeftMiddleNum == 1 && bottomRightMiddleNum == 0 && bottomRightNum == 1;
    var bottomRowCombSixteen = bottomLeftNum == 1 && bottomLeftMiddleNum == 0 && bottomRightMiddleNum == 1 && bottomRightNum == 1; 
    
    // User fill in possbilities for top row ( ! means filled in )
    var bottomRowFillCombOne = bottomLeftFlag && bottomLeftMiddleFlag && bottomRightMiddleFlag && bottomRightFlag;
    var bottomRowFillCombTwo = !bottomLeftFlag && !bottomLeftMiddleFlag && !bottomRightMiddleFlag && !bottomRightFlag;
    var bottomRowFillCombThree = !bottomLeftFlag && bottomLeftMiddleFlag && bottomRightMiddleFlag && !bottomRightFlag;
    var bottomRowFillCombFour = !bottomLeftFlag && !bottomLeftMiddleFlag && bottomRightMiddleFlag && bottomRightFlag;
    var bottomRowFillCombFive = bottomLeftFlag && bottomLeftMiddleFlag && !bottomRightMiddleFlag && !bottomRightFlag;
    var bottomRowFillCombSix = bottomLeftFlag && !bottomLeftMiddleFlag && !bottomRightMiddleFlag && bottomRightFlag;
    var bottomRowFillCombSeven = !bottomLeftFlag && bottomLeftMiddleFlag && bottomRightMiddleFlag && bottomRightFlag;
    var bottomRowFillCombEight = bottomLeftFlag && !bottomLeftMiddleFlag && bottomRightMiddleFlag && bottomRightFlag;
    var bottomRowFillCombNine = bottomLeftFlag && bottomLeftMiddleFlag && !bottomRightMiddleFlag && bottomRightFlag;
    var bottomRowFillCombTen = bottomLeftFlag && bottomLeftMiddleFlag && bottomRightMiddleFlag && !bottomRightFlag;
    var bottomRowFillCombEleven = !bottomLeftFlag && !bottomLeftMiddleFlag && !bottomRightMiddleFlag && bottomRightFlag;
    var bottomRowFillCombTwelve = bottomLeftFlag && !bottomLeftMiddleFlag && !bottomRightMiddleFlag && !bottomRightFlag;
    var bottomRowFillCombThirteen = !bottomLeftFlag && bottomLeftMiddleFlag && !bottomRightMiddleFlag && bottomRightFlag;
    var bottomRowFillCombFourteen = bottomLeftFlag && !bottomLeftMiddleFlag && bottomRightMiddleFlag && !bottomRightFlag;
    var bottomRowFillCombFifteen = !bottomLeftFlag && !bottomLeftMiddleFlag && bottomRightMiddleFlag && !bottomRightFlag;
    var bottomRowFillCombSixteen = !bottomLeftFlag && bottomLeftMiddleFlag && !bottomRightMiddleFlag && !bottomRightFlag;
    
    // If 0000|0000 ( Left: top row, Right: bottom row )
    if ( topRowCombOne && topRowFillCombOne && bottomRowCombOne && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0000|1111 ( Left: top row, Right: bottom row )
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombTwo && bottomRowFillCombTwo )
    {
        showScore();
    }
    
    // If 0000|1001 ( Left: top row, Right: bottom row )
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombThree && bottomRowFillCombThree )
    {
        showScore();
    }
    
    // If 0000|1100 ( Left: top row, Right: bottom row )
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombFour && bottomRowFillCombFour )
    {
        showScore();
    }
    
    // If 0000|0011 ( Left: top row, Right: bottom row )
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombFive && bottomRowFillCombFive )
    {
        showScore();
    }
    
    // If 0000|0110 ( Left: top row, Right: bottom row )
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombSix && bottomRowFillCombSix )
    {
        showScore();
    }
    
    // If 0000|1000 ( Left: top row, Right: bottom row )
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombSeven && bottomRowFillCombOne )
    {
        showScore(); 
    }
    
    // If 0000|0100 ( Left: top row, Right: bottom row )
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombEight && bottomRowFillCombOne )
    {
        showScore(); 
    }
    
    // If 0000|0010 ( Left: top row, Right: bottom row )
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombNine && bottomRowFillCombOne )
    {
        showScore(); 
    }
    
    // If 0000|0001 ( Left: top row, Right: bottom row )
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombTen && bottomRowFillCombOne )
    {
        showScore(); 
    }
    
    // If 0000|1110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        showScore(); 
    }
    
    // If 0000|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        showScore(); 
    }
    
    // If 0000|1010 ( Left: top row, Right: bottom row )
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombThirteen && bottomRowFillCombOne )
    {
        showScore(); 
    }
    
    // If 0000|0101 ( Left: top row, Right: bottom row )
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombFourteen && bottomRowFillCombOne )
    {
        showScore(); 
    }
    
    // If 0000|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombFifteen && bottomRowFillCombFifteen )
    {
        showScore(); 
    }
    
    // If 0000|1011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        showScore(); 
    }
    
    // If 1111|0000 ( Left: top row, Right: bottom row )
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombOne && bottomRowFillCombOne )
    {
        showScore(); 
    }
    
    // If 1111|1111 ( Left: top row, Right: bottom row )
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombTwo && bottomRowFillCombTwo )
    {
        showScore(); 
    }
    
    // If 1111|1001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombThree && bottomRowFillCombThree )
    {
        showScore(); 
    }
    
    // If 1111|1100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombFour && bottomRowFillCombFour )
    {
        showScore(); 
    }
    
    // If 1111|0011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombFive && bottomRowFillCombFive )
    {
        showScore(); 
    }
    
    // If 1111|0110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombSix && bottomRowFillCombSix )
    {
        showScore();
    }
    
    // If 1111|1000 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombSeven && bottomRowFillCombSeven )
    {
        showScore();
    }
    
    // If 1111|0100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombEight && bottomRowFillCombEight )
    {
        showScore();
    }
    
    // If 1111|0010 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombNine && bottomRowFillCombNine )
    {
        showScore();
    }
    
    // If 1111|0001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombTen && bottomRowFillCombTen )
    {
        showScore();
    }
    
    // If 1111|1110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        showScore();
    }
    
    // If 1111|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        showScore();
    }
    
    // If 1111|1010 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombThirteen && bottomRowFillCombThirteen )
    {
        showScore();
    }
    
    // If 1111|0101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombFourteen && bottomRowFillCombFourteen )
    {
        showScore();
    }
    
    // If 1111|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombFifteen && bottomRowFillCombFifteen )
    {
        showScore();
    }
    
    // If 1111|1011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        showScore();
    }
    
    // If 1001|0000 ( Left: top row, Right: bottom row )
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombOne && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 1001|1111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombTwo && bottomRowFillCombTwo )
    {
        showScore();
    }
    
    // If 1001|1001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombThree && bottomRowFillCombThree )
    {
        showScore();
    }
    
    // If 1001|1100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombFour && bottomRowFillCombFour )
    {
        showScore();
    }
    
    // If 1001|0011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombFive && bottomRowFillCombFive )
    {
        showScore();
    }
    
    // If 1001|0110 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombSix && bottomRowFillCombSix )
    {
        showScore();
    }
    
    // If 1001|1000 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombSeven && bottomRowFillCombSeven )
    {
        showScore();
    }
    
    // If 1001|0100 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombEight && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 1001|0010 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombNine && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 1001|0001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombTen && bottomRowFillCombTen )
    {
        showScore();
    }
    
    // If 1001|1110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        showScore();
    }
    
    // If 1001|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        showScore();
    }
    
    // If 1001|1010 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombThirteen && bottomRowFillCombSeven )
    {
        showScore();
    }
    
    // If 1001|0101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombFourteen && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 1001|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombFifteen && bottomRowFillCombFifteen )
    {
        showScore();
    }
    
    // If 1001|1011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        showScore();
    }
    
    // If 1100|0000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombOne && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 1100|1111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombTwo && bottomRowFillCombTwo )
    {
        showScore();
    }
    
    // If 1100|1001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombThree && bottomRowFillCombThree )
    {
        showScore();
    }
    
    // If 1100|1100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombFour && bottomRowFillCombFour )
    {
        showScore();
    }
    
    // If 1100|0011 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombFive && bottomRowFillCombFive )
    {
        showScore();
    }
    
    // If 1100|0110 ( Left: top row, Right: bottom row ) (OL )
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombSix && bottomRowFillCombSix )
    {
        showScore();
    }
    
    // If 1100|1000 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombSeven && bottomRowFillCombSeven )
    {
        showScore();
    }
    
    // If 1100|0100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombEight && bottomRowFillCombEight )
    {
        showScore();
    }
    
    // If 1100|0010 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombNine && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 1100|0001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombTen && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 1100|1110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        showScore();
    }
    
    // If 1100|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        showScore();
    }
    
    // If 1100|1010 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombThirteen && bottomRowFillCombSeven )
    {
        showScore();
    }
    
    // If 1100|0101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombFourteen && bottomRowFillCombEight )
    {
        showScore();
    }
    
    // If 1100|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombFifteen && bottomRowFillCombFour )
    {
        showScore();
    }
    
    // If 1100|1011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        showScore();
    }
    
    // If 0011|0000 ( Left: top row, Right: bottom row )
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombOne && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0011|1111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombTwo && bottomRowFillCombTwo )
    {
        showScore();
    }
    
    // If 0011|1001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombThree && bottomRowFillCombSeven )
    {
        showScore();
    }
    
    // If 0011|1001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombThree && bottomRowFillCombSeven )
    {
        showScore();
    }
    
    // If 0011|1100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombFour && bottomRowFillCombFour )
    {
        showScore();
    }
    
    // If 0011|0011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombFive && bottomRowFillCombFive )
    {
        showScore();
    }
    
    // If 0011|0110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombSix && bottomRowFillCombSix )
    {
        showScore();
    }
    
    // If 0011|1000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombSeven && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0011|0100 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombEight && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0011|0010 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombNine && bottomRowFillCombNine )
    {
        showScore();
    }
    
    // If 0011|0001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombTen && bottomRowFillCombTen )
    {
        showScore();
    }
    
    // If 0011|1110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        showScore();
    }
    
    // If 0011|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        showScore();
    }
    
    // If 0011|1010 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombThirteen && bottomRowFillCombNine )
    {
        showScore();
    }
    
    // If 0011|0101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombFourteen && bottomRowFillCombTen )
    {
        showScore();
    }
    
    // If 0011|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombFifteen && bottomRowFillCombFifteen )
    {
        showScore();
    }
    
    // If 0011|1011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        showScore();
    }
    
    // If 0110|0000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombOne && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0110|1111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombTwo && bottomRowFillCombTwo )
    {
        showScore();
    }
    
    // If 0110|1001 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombThree && bottomRowFillCombThree )
    {
        showScore();
    }
    
    // If 0110|1100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombFour && bottomRowFillCombFour )
    {
        showScore();
    }
    
    // If 0110|0011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombFive && bottomRowFillCombFive )
    {
        showScore();
    }
    
    // If 0110|0110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombSix && bottomRowFillCombSix )
    {
        showScore();
    }
    
    // If 0110|1000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombSeven && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0110|0100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombEight && bottomRowFillCombEight )
    {
        showScore();
    }
    
    // If 0110|0010 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombNine && bottomRowFillCombNine )
    {
        showScore();
    }
    
    // If 0110|0001 ( Left: top row, Right: bottom row )
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombTen && bottomRowFillCombTen )
    {
        showScore();
    }
    
    // If 0110|0001 ( Left: top row, Right: bottom row )
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombTen && bottomRowFillCombTen )
    {
        showScore();
    }
    
    // If 0110|1110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        showScore();
    }
    
    // If 0110|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        showScore();
    }
    
    // If 0110|1010 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombThirteen && bottomRowFillCombNine )
    {
        showScore();
    }
    
    // If 0110|0101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombFourteen && bottomRowFillCombEight )
    {
        showScore();
    }
    
    // If 0110|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombFifteen && bottomRowFillCombEight )
    {
        showScore();
    }
    
    // If 0110|1011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        showScore();
    }
    
    // If 1000|0000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSeven && topRowFillCombOne && bottomRowCombOne && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 1000|1111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSeven && topRowFillCombSeven && bottomRowCombTwo && bottomRowFillCombTwo )
    {
        showScore();
    }
    
    // If 1000|1001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSeven && topRowFillCombSeven && bottomRowCombThree && bottomRowFillCombThree )
    {
        showScore();
    }
    
    // If 1000|1100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSeven && topRowFillCombSeven && bottomRowCombFour && bottomRowFillCombFour )
    {
        showScore();
    }
    
    // If 1000|0011 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSeven && topRowFillCombOne && bottomRowCombFive && bottomRowFillCombFive )
    {
        showScore();
    }
    
    // If 1000|0110 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSeven && topRowFillCombOne && bottomRowCombSix && bottomRowFillCombSix )
    {
        showScore();
    }
    
    // If 1000|1000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSeven && topRowFillCombSeven && bottomRowCombSeven && bottomRowFillCombSeven )
    {
        showScore();
    }
    
    // If 1000|0100 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSeven && topRowFillCombOne && bottomRowCombEight && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 1000|0010 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSeven && topRowFillCombOne && bottomRowCombNine && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 1000|0001 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSeven && topRowFillCombOne && bottomRowCombTen && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 1000|1110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSeven && topRowFillCombSeven && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        showScore();
    }
    
    // If 1000|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSeven && topRowFillCombOne && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        showScore();
    }
    
    // If 1000|1010 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSeven && topRowFillCombSeven && bottomRowCombThirteen && bottomRowFillCombSeven )
    {
        showScore();
    }
    
    // If 1000|0101 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSeven && topRowFillCombOne && bottomRowCombFourteen && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 1000|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSeven && topRowFillCombSeven && bottomRowCombFifteen && bottomRowFillCombFifteen )
    {
        showScore();
    }
    
    // If 1000|1011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSeven && topRowFillCombSeven && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        showScore();
    }
    
    // If 0100|0000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombEight && topRowFillCombOne && bottomRowCombOne && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0100|1111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEight && topRowFillCombEight && bottomRowCombTwo && bottomRowFillCombTwo )
    {
        showScore();
    }
    
    // If 0100|1001 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombEight && topRowFillCombOne && bottomRowCombThree && bottomRowFillCombThree )
    {
        showScore();
    }
    
    // If 0100|1100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEight && topRowFillCombEight && bottomRowCombFour && bottomRowFillCombFour )
    {
        showScore();
    }
    
    // If 0100|0011 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombEight && topRowFillCombOne && bottomRowCombFive && bottomRowFillCombFive )
    {
        showScore();
    }
    
    // If 0100|0110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEight && topRowFillCombEight && bottomRowCombSix && bottomRowFillCombSix )
    {
        showScore();
    }
    
    // If 0100|1000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombEight && topRowFillCombOne && bottomRowCombSeven && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0100|0100 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombEight && topRowFillCombEight && bottomRowCombEight && bottomRowFillCombEight )
    {
        showScore();
    }
    
    // If 0100|0010 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombEight && topRowFillCombOne && bottomRowCombNine && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0100|0001 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombEight && topRowFillCombOne && bottomRowCombTen && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0100|1110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEight && topRowFillCombEight && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        showScore();
    }
    
    // If 0100|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEight && topRowFillCombEight && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        showScore();
    }
    
    // If 0100|1010 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombEight && topRowFillCombOne && bottomRowCombThirteen && bottomRowFillCombOne)
    {
        showScore();
    }
    
    // If 0100|0101 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombEight && topRowFillCombEight && bottomRowCombFourteen && bottomRowFillCombEight )
    {
        showScore();
    }
    
    // If 0100|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEight && topRowFillCombEight && bottomRowCombFifteen && bottomRowFillCombFifteen )
    {
        showScore();
    }
    
    // If 0100|1011 ( Left: top row, Right: bottom row )
    else if ( topRowCombEight && topRowFillCombOne && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        showScore();
    }
    
    // If 0010|0000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombNine && topRowFillCombOne && bottomRowCombOne && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0010|1111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombNine && topRowFillCombNine && bottomRowCombTwo && bottomRowFillCombTwo )
    {
        showScore();
    }
    
    // If 0010|1001 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombNine && topRowFillCombOne && bottomRowCombThree && bottomRowFillCombThree )
    {
        showScore();
    }
    
    // If 0010|1100 ( Left: top row, Right: bottom row )
    else if ( topRowCombNine && topRowFillCombOne && bottomRowCombFour && bottomRowFillCombFour )
    {
        showScore();
    }
    
    // If 0010|0011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombNine && topRowFillCombNine && bottomRowCombFive && bottomRowFillCombFive )
    {
        showScore();
    }
    
    // If 0010|0110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombNine && topRowFillCombNine && bottomRowCombSix && bottomRowFillCombSix )
    {
        showScore();
    }
    
    // If 0010|1000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombNine && topRowFillCombOne && bottomRowCombSeven && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0010|0100 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombNine && topRowFillCombOne && bottomRowCombEight && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0010|0010 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombNine && topRowFillCombNine && bottomRowCombNine && bottomRowFillCombNine )
    {
        showScore();
    }
    
    // If 0010|0001 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombNine && topRowFillCombOne && bottomRowCombTen && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0010|1110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombNine && topRowFillCombNine && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        showScore();
    }
    
    // If 0010|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombNine && topRowFillCombNine && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        showScore();
    }
    
    // If 0010|1010 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombNine && topRowFillCombNine && bottomRowCombThirteen && bottomRowFillCombNine )
    {
        showScore();
    }
    
    // If 0010|0101 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombNine && topRowFillCombEight && bottomRowCombFourteen && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0010|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombNine && topRowFillCombOne && bottomRowCombFifteen && bottomRowFillCombFifteen )
    {
        showScore();
    }
    
    // If 0010|1011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombNine && topRowFillCombNine && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        showScore();
    }
    
    // If 0001|0000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombTen && topRowFillCombOne && bottomRowCombOne && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0001|1111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTen && topRowFillCombTen && bottomRowCombTwo && bottomRowFillCombTwo )
    {
        showScore();
    }
    
    // If 0001|1001 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombTen && topRowFillCombTen && bottomRowCombThree && bottomRowFillCombThree )
    {
        showScore();
    }
    
    // If 0001|1100 ( Left: top row, Right: bottom row )
    else if ( topRowCombTen && topRowFillCombOne && bottomRowCombFour && bottomRowFillCombFour )
    {
        showScore();
    }
    
    // If 0001|0011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTen && topRowFillCombTen && bottomRowCombFive && bottomRowFillCombFive )
    {
        showScore();
    }
    
    // If 0001|0110 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombTen && topRowFillCombOne && bottomRowCombSix && bottomRowFillCombSix )
    {
        showScore();
    }
    
    // If 0001|1000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombTen && topRowFillCombOne && bottomRowCombSeven && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0001|0100 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombTen && topRowFillCombOne && bottomRowCombEight && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0001|0010 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombTen && topRowFillCombOne && bottomRowCombNine && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0001|0001 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombTen && topRowFillCombTen && bottomRowCombTen && bottomRowFillCombTen )
    {
        showScore();
    }
    
    // If 0001|1110 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombTen && topRowFillCombOne && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        showScore();
    }
    
    // If 0001|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTen && topRowFillCombTen && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        showScore();
    }
    
    // If 0001|1010 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombTen && topRowFillCombOne && bottomRowCombThirteen && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0001|0101 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombTen && topRowFillCombTen && bottomRowCombFourteen && bottomRowFillCombTen )
    {
        showScore();
    }
    
    // If 0001|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTen && topRowFillCombTen && bottomRowCombFifteen && bottomRowFillCombFifteen )
    {
        showScore();
    }
    
    // If 0001|1011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTen && topRowFillCombTen && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        showScore();
    }
    
    // If 1110|0000 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEleven && topRowFillCombEleven && bottomRowCombOne && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 1110|1111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEleven && topRowFillCombEleven&& bottomRowCombTwo && bottomRowFillCombTwo )
    {
        showScore();
    }
    
    // If 1110|1001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEleven && topRowFillCombEleven && bottomRowCombThree && bottomRowFillCombThree )
    {
        showScore();
    }
    
    // If 1110|1100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEleven && topRowFillCombEleven && bottomRowCombFour && bottomRowFillCombFour )
    {
        showScore();
    }
    
    // If 1110|0011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEleven && topRowFillCombEleven && bottomRowCombFive && bottomRowFillCombFive )
    {
        showScore();
    }
    
    // If 1110|0110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEleven && topRowFillCombEleven && bottomRowCombSix && bottomRowFillCombSix )
    {
        showScore();
    }
    
    // If 1110|1000 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEleven && topRowFillCombEleven && bottomRowCombSeven && bottomRowFillCombSeven )
    {
        showScore();
    }
    
    // If 1110|0100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEleven && topRowFillCombEleven && bottomRowCombEight && bottomRowFillCombEight )
    {
        showScore();
    }
    
    // If 1110|0010 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEleven && topRowFillCombEleven && bottomRowCombNine && bottomRowFillCombNine )
    {
        showScore();
    }
    
    // If 1110|0001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEleven && topRowFillCombEleven && bottomRowCombTen && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 1110|1110 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombEleven && topRowFillCombEleven && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        showScore();
    }
    
    // If 1110|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEleven && topRowFillCombEleven && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        showScore();
    }
    
    // If 1110|1010 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEleven && topRowFillCombEleven && bottomRowCombThirteen && bottomRowFillCombThirteen )
    {
        showScore();
    }
    
    // If 1110|0101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEleven && topRowFillCombEleven && bottomRowCombFourteen && bottomRowFillCombEight )
    {
        showScore();
    }
    
    // If 1110|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEleven && topRowFillCombEleven && bottomRowCombFifteen && bottomRowFillCombFifteen )
    {
        showScore();
    }
    
    // If 1110|1011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEleven && topRowFillCombEleven && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        showScore();
    }
    
    // If 0111|0000 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwelve && topRowFillCombTwelve && bottomRowCombOne && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0111|1111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwelve && topRowFillCombTwelve && bottomRowCombTwo && bottomRowFillCombTwo )
    {
        showScore();
    }
    
    // If 0111|1001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwelve && topRowFillCombTwelve && bottomRowCombThree && bottomRowFillCombThree )
    {
        showScore();
    }
    
    // If 0111|1100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwelve && topRowFillCombTwelve && bottomRowCombFour && bottomRowFillCombFour )
    {
        showScore();
    }
    
    // If 0111|0011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwelve && topRowFillCombTwelve && bottomRowCombFive && bottomRowFillCombFive )
    {
        showScore();
    }
    
    // If 0111|0110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwelve && topRowFillCombTwelve && bottomRowCombSix && bottomRowFillCombSix )
    {
        showScore();
    }
    
    // If 0111|1000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombTwelve && topRowFillCombTwelve && bottomRowCombSeven && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0111|0100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwelve && topRowFillCombTwelve && bottomRowCombEight && bottomRowFillCombEight )
    {
        showScore();
    }
    
    // If 0111|0010 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwelve && topRowFillCombTwelve && bottomRowCombNine && bottomRowFillCombNine )
    {
        showScore();
    }
    
    // If 0111|0001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwelve && topRowFillCombTwelve && bottomRowCombTen && bottomRowFillCombTen )
    {
        showScore();
    }
    
    // If 0111|1110 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombTwelve && topRowFillCombTwelve && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        showScore();
    }
    
    // If 0111|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwelve && topRowFillCombTwelve && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        showScore();
    }
    
    // If 0111|1010 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwelve && topRowFillCombTwelve && bottomRowCombThirteen && bottomRowFillCombNine )
    {
        showScore();
    }
    
    // If 0111|0101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwelve && topRowFillCombTwelve && bottomRowCombFourteen && bottomRowFillCombFourteen )
    {
        showScore();
    }
    
    // If 0111|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwelve && topRowFillCombTwelve && bottomRowCombFifteen && bottomRowFillCombFifteen )
    {
        showScore();
    }
    
    // If 0111|1011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwelve && topRowFillCombTwelve && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        showScore();
    }
    
    // If 1010|0000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombThirteen && topRowFillCombOne && bottomRowCombOne && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 1010|1111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThirteen && topRowFillCombThirteen && bottomRowCombTwo && bottomRowFillCombTwo )
    {
        showScore();
    }
    
    // If 1010|1001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThirteen && topRowFillCombSeven && bottomRowCombThree && bottomRowFillCombThree )
    {
        showScore();
    }
    
    // If 1010|1100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThirteen && topRowFillCombSeven && bottomRowCombFour && bottomRowFillCombFour )
    {
        showScore();
    }
    
    // If 1010|0011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThirteen && topRowFillCombOne && bottomRowCombFive && bottomRowFillCombFive )
    {
        showScore();
    }
    
    // If 1010|0110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThirteen && topRowFillCombNine && bottomRowCombSix && bottomRowFillCombSix )
    {
        showScore();
    }
    
    // If 1010|1000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombThirteen && topRowFillCombSeven && bottomRowCombSeven && bottomRowFillCombSeven )
    {
        showScore();
    }
    
    // If 1010|0100 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombThirteen && topRowFillCombOne && bottomRowCombEight && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 1010|0010 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombThirteen && topRowFillCombNine && bottomRowCombNine && bottomRowFillCombNine )
    {
        showScore();
    }
    
    // If 1010|0001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThirteen && topRowFillCombOne && bottomRowCombTen && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 1010|1110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThirteen && topRowFillCombThirteen && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        showScore();
    }
    
    // If 1010|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThirteen && topRowFillCombNine && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        showScore();
    }
    
    // If 1010|1010 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombThirteen && topRowFillCombThirteen && bottomRowCombThirteen && bottomRowFillCombThirteen )
    {
        showScore();
    }
    
    // If 1010|0101 ( Left: top row, Right: bottom row )
    else if ( topRowCombThirteen && topRowFillCombOne && bottomRowCombFourteen && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 1010|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThirteen && topRowFillCombSeven && bottomRowCombFifteen && bottomRowFillCombFifteen )
    {
        showScore();
    }
    
    // If 1010|1011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThirteen && topRowFillCombThirteen && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        showScore();
    }
    
    // If 0101|0000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombFourteen && topRowFillCombOne && bottomRowCombOne && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0101|1111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFourteen && topRowFillCombFourteen && bottomRowCombTwo && bottomRowFillCombTwo )
    {
        showScore();
    }
    
    // If 0101|1001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFourteen && topRowFillCombTen && bottomRowCombThree && bottomRowFillCombThree )
    {
        showScore();
    }
    
    // If 0101|1100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFourteen && topRowFillCombEight && bottomRowCombFour && bottomRowFillCombFour )
    {
        showScore();
    }
    
    // If 0101|0011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFourteen && topRowFillCombTen && bottomRowCombFive && bottomRowFillCombFive )
    {
        showScore();
    }
    
    // If 0101|0110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFourteen && topRowFillCombEight && bottomRowCombSix && bottomRowFillCombSix )
    {
        showScore();
    }
    
    // If 0101|1000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombFourteen && topRowFillCombOne && bottomRowCombSeven && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0101|0100 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombFourteen && topRowFillCombEight && bottomRowCombEight && bottomRowFillCombEight )
    {
        showScore();
    }
    
    // If 0101|0010 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombFourteen && topRowFillCombOne && bottomRowCombNine && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0101|0001 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombFourteen && topRowFillCombTen && bottomRowCombTen && bottomRowFillCombTen )
    {
        showScore();
    }
    
    // If 0101|1110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFourteen && topRowFillCombEight && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        showScore();
    }
    
    // If 0101|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFourteen && topRowFillCombFourteen && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        showScore();
    }
    
    // If 0101|1010 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombFourteen && topRowFillCombOne && bottomRowCombThirteen && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 0101|0101 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombFourteen && topRowFillCombFourteen && bottomRowCombFourteen && bottomRowFillCombFourteen )
    {
        showScore();
    }
    
    // If 0101|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFourteen && topRowFillCombFourteen && bottomRowCombFifteen && bottomRowFillCombFifteen )
    {
        showScore();
    }
    
    // If 0101|1011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFourteen && topRowFillCombTen && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        showScore();
    }
    
    // If 1101|0000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombFifteen && topRowFillCombFifteen && bottomRowCombOne && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 1101|1111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFifteen && topRowFillCombFifteen && bottomRowCombTwo && bottomRowFillCombTwo )
    {
        showScore();
    }
    
    // If 1101|1001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFifteen && topRowFillCombFifteen && bottomRowCombThree && bottomRowFillCombThree )
    {
        showScore();
    }
    
    // If 1101|1100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFifteen && topRowFillCombFifteen && bottomRowCombFour && bottomRowFillCombFour )
    {
        showScore();
    }
    
    // If 1101|0011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFifteen && topRowFillCombFifteen && bottomRowCombFive && bottomRowFillCombFive )
    {
        showScore();
    }
    
    // If 1101|0110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFifteen && topRowFillCombFifteen && bottomRowCombSix && bottomRowFillCombSix )
    {
        showScore();
    }
    
    // If 1101|1000 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFifteen && topRowFillCombFifteen && bottomRowCombSeven && bottomRowFillCombSeven )
    {
        showScore();
    }
    
    // If 1101|0100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFifteen && topRowFillCombFifteen && bottomRowCombEight && bottomRowFillCombEight )
    {
        showScore();
    }
    
    // If 1101|0010 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombFifteen && topRowFillCombFifteen && bottomRowCombNine && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 1101|0001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFifteen && topRowFillCombFifteen && bottomRowCombTen && bottomRowFillCombTen )
    {
        showScore();
    }
    
    // If 1101|1110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFifteen && topRowFillCombFifteen && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        showScore();
    }
    
    // If 1101|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFifteen && topRowFillCombFifteen && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        showScore();
    }
    
    // If 1101|1010 ( Left: top row, Right: bottom row ) (OL) 
    else if ( topRowCombFifteen && topRowFillCombFifteen && bottomRowCombThirteen && bottomRowFillCombSeven )
    {
        showScore();
    }
    
    // If 1101|0101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFifteen && topRowFillCombFifteen && bottomRowCombFourteen && bottomRowFillCombFourteen )
    {
        showScore();
    }
    
    // If 1101|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFifteen && topRowFillCombFifteen && bottomRowCombFifteen && bottomRowFillCombFifteen )
    {
        showScore();
    }
    
    // If 1101|1011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFifteen && topRowFillCombFifteen && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        showScore();
    }
    
    // If 1011|0000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSixteen && topRowFillCombSixteen && bottomRowCombOne && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 1011|1111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSixteen && topRowFillCombSixteen && bottomRowCombTwo && bottomRowFillCombTwo )
    {
        showScore();
    }
    
    // If 1011|1001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSixteen && topRowFillCombSixteen && bottomRowCombThree && bottomRowFillCombThree )
    {
        showScore();
    }
    
    // If 1011|1100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSixteen && topRowFillCombSixteen && bottomRowCombFour && bottomRowFillCombFour )
    {
        showScore();
    }
    
    // If 1011|0011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSixteen && topRowFillCombSixteen && bottomRowCombFive && bottomRowFillCombFive )
    {
        showScore();
    }
    
    // If 1011|0110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSixteen && topRowFillCombSixteen && bottomRowCombSix && bottomRowFillCombSix )
    {
        showScore();
    }
    
    // If 1011|1000 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSixteen && topRowFillCombSixteen && bottomRowCombSeven && bottomRowFillCombSeven )
    {
        showScore(); 
    }
    
    // If 1011|0100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSixteen && topRowFillCombSixteen && bottomRowCombEight && bottomRowFillCombOne )
    {
        showScore();
    }
    
    // If 1011|0010 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSixteen && topRowFillCombSixteen && bottomRowCombNine && bottomRowFillCombNine )
    {
        showScore(); 
    }
    
    // If 1011|0001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSixteen && topRowFillCombSixteen && bottomRowCombTen && bottomRowFillCombTen )
    {
        showScore(); 
    }
    
    // If 1011|1110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSixteen && topRowFillCombSixteen && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        showScore();
    }
    
    // If 1011|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSixteen && topRowFillCombSixteen && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        showScore();
    }
    
    // If 1011|1010 ( Left: top row, Right: bottom row ) (OL) 
    else if ( topRowCombSixteen && topRowFillCombSixteen && bottomRowCombThirteen && bottomRowFillCombThirteen )
    {
        showScore();
    }
    
    // If 1011|0101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSixteen && topRowFillCombSixteen && bottomRowCombFourteen && bottomRowFillCombTen )
    {
        showScore(); 
    }
    
    // If 1011|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSixteen && topRowFillCombSixteen && bottomRowCombFifteen && bottomRowFillCombFifteen )
    {
        showScore(); 
    }
    
    // If 1011|1011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSixteen && topRowFillCombSixteen && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        showScore();
    }
    
    else
    {
        document.getElementById("incorrectAnswerMessage").innerHTML = "Incorrect, please try again";
        
        attemptsLeft = decreaseAttempts( attemptsLeft );
    }
    
    return 0;
}

function receiveHint()
{
    document.getElementById("hint").innerHTML = "0s should never be grouped...";
    
    return 0;
}

function decreaseAttempts( number )
{
    if ( number > 1 )
    {
        number -= 1;
        document.getElementById("attemptsLeft").innerHTML = "Attempts left: " + number.toString();
        
        starsGiven -= 1;
        
        document.getElementById("scoreText").innerHTML =  " Star Score: " + starsGiven.toString() + "/" + levelMaxStars.toString();
    }
    
    else
    {
        //window.location.href = "moduleOneQuestionThree.html";
        
        showScore();
    }
    
    return number;
}

function showScore()
{
    totalUserStars += starsGiven;
    passUserStars( totalUserStars );
    
    if ( totalUserStars >= 5 )
    {
        alert( "MODULE STAR SCORE: " + totalUserStars + "/" + moduleOneMaxStars.toString() + "\n\n\nYou passed Karnaugh Maps!!");
    }
    
    else
    {
        alert( "MODULE STAR SCORE: " + totalUserStars + "/" + moduleOneMaxStars.toString() + "\n\n\nModule failed. Try again.");
    }
}