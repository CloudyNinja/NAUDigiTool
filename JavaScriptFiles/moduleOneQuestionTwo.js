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
    var topRowFillCombFifteen = !topLeftFlag && topLeftMiddleFlag && topRightMiddleFlag && !topRightFlag;
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
    var bottomRowFillCombFifteen = !bottomLeftFlag && bottomLeftMiddleFlag && !bottomRightMiddleFlag && bottomRightFlag;
    var bottomRowFillCombSixteen = !bottomLeftFlag && bottomLeftMiddleFlag && !bottomRightMiddleFlag && !bottomRightFlag;
    
    // If 0000|0000 ( Left: top row, Right: bottom row )
    if ( topRowCombOne && topRowFillCombOne && bottomRowCombOne && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0000|1111 ( Left: top row, Right: bottom row )
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombTwo && bottomRowFillCombTwo )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0000|1001 ( Left: top row, Right: bottom row )
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombThree && bottomRowFillCombThree )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0000|1100 ( Left: top row, Right: bottom row )
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombFour && bottomRowFillCombFour )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0000|0011 ( Left: top row, Right: bottom row )
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombFive && bottomRowFillCombFive )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0000|0110 ( Left: top row, Right: bottom row )
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombSix && bottomRowFillCombSix )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0000|1000 ( Left: top row, Right: bottom row )
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombSeven && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0000|0100 ( Left: top row, Right: bottom row )
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombEight && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0000|0010 ( Left: top row, Right: bottom row )
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombNine && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0000|0001 ( Left: top row, Right: bottom row )
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombTen && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0000|1110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0000|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0000|1010 ( Left: top row, Right: bottom row )
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombThirteen && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0000|0101 ( Left: top row, Right: bottom row )
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombFourteen && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0000|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombFifteen && bottomRowFillCombFifteen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0000|1011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombOne && topRowFillCombOne && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1111|0000 ( Left: top row, Right: bottom row )
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombOne && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1111|1111 ( Left: top row, Right: bottom row )
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombTwo && bottomRowFillCombTwo )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1111|1001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombThree && bottomRowFillCombThree )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1111|1100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombFour && bottomRowFillCombFour )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1111|0011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombFive && bottomRowFillCombFive )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1111|0110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombSix && bottomRowFillCombSix )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1111|1000 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombSeven && bottomRowFillCombSeven )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1111|0100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombEight && bottomRowFillCombEight )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1111|0010 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombNine && bottomRowFillCombNine )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1111|0001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombTen && bottomRowFillCombTen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1111|1110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1111|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1111|1010 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombThirteen && bottomRowFillCombThirteen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1111|0101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombFourteen && bottomRowFillCombFourteen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1111|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombFifteen && bottomRowFillCombFifteen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1111|1011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTwo && topRowFillCombTwo && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1001|0000 ( Left: top row, Right: bottom row )
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombOne && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1001|1111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombTwo && bottomRowFillCombTwo )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1001|1001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombThree && bottomRowFillCombThree )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1001|1100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombFour && bottomRowFillCombFour )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1001|0011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombFive && bottomRowFillCombFive )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1001|0110 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombSix && bottomRowFillCombSix )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1001|1000 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombSeven && bottomRowFillCombSeven )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1001|0100 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombEight && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1001|0010 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombNine && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1001|0001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombTen && bottomRowFillCombTen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1001|1110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1001|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1001|1010 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombThirteen && bottomRowFillCombSeven )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1001|0101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombFourteen && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1001|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombFifteen && bottomRowFillCombFifteen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1001|1011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombThree && topRowFillCombThree && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1100|0000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombOne && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1100|1111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombTwo && bottomRowFillCombTwo )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1100|1001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombThree && bottomRowFillCombThree )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1100|1100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombFour && bottomRowFillCombFour )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1100|0011 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombFive && bottomRowFillCombFive )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1100|0110 ( Left: top row, Right: bottom row ) (OL )
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombSix && bottomRowFillCombSix )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1100|1000 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombSeven && bottomRowFillCombSeven )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1100|0100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombEight && bottomRowFillCombEight )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1100|0010 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombNine && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1100|0001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombTen && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1100|1110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1100|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1100|1010 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombThirteen && bottomRowFillCombSeven )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1100|0101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombFourteen && bottomRowFillCombEight )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1100|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombFifteen && bottomRowFillCombFour )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1100|1011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFour && topRowFillCombFour && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0011|0000 ( Left: top row, Right: bottom row )
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombOne && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0011|1111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombTwo && bottomRowFillCombTwo )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0011|1001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombThree && bottomRowFillCombSeven )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0011|1001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombThree && bottomRowFillCombSeven )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0011|1100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombFour && bottomRowFillCombFour )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0011|0011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombFive && bottomRowFillCombFive )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0011|0110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombSix && bottomRowFillCombNine )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0011|1000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombSeven && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0011|0100 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombEight && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0011|0010 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombNine && bottomRowFillCombNine )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0011|0001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombTen && bottomRowFillCombTen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0011|1110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0011|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0011|1010 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombThirteen && bottomRowFillCombNine )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0011|0101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombFourteen && bottomRowFillCombTen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0011|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombFifteen && bottomRowFillCombFifteen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0011|1011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombFive && topRowFillCombFive && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0110|0000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombOne && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0110|1111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombTwo && bottomRowFillCombTwo )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0110|1001 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombThree && bottomRowFillCombThree )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0110|1100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombFour && bottomRowFillCombFour )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0110|0011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombFive && bottomRowFillCombFive )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0110|0110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombSix && bottomRowFillCombSix )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0110|1000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombSeven && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0110|0100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombEight && bottomRowFillCombEight )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0110|0010 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombNine && bottomRowFillCombNine )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0110|0001 ( Left: top row, Right: bottom row )
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombTen && bottomRowFillCombTen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0110|0001 ( Left: top row, Right: bottom row )
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombTen && bottomRowFillCombTen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0110|1110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0110|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0110|1010 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombThirteen && bottomRowFillCombNine )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0110|0101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombFourteen && bottomRowFillCombEight )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0110|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombFifteen && bottomRowFillCombEight )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0110|1011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSix && topRowFillCombSix && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1000|0000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSeven && topRowFillCombOne && bottomRowCombOne && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1000|1111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSeven && topRowFillCombSeven && bottomRowCombTwo && bottomRowFillCombTwo )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1000|1001 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSeven && topRowFillCombSeven && bottomRowCombThree && bottomRowFillCombThree )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1000|1100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSeven && topRowFillCombSeven && bottomRowCombFour && bottomRowFillCombFour )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1000|0011 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSeven && topRowFillCombOne && bottomRowCombFive && bottomRowFillCombFive )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1000|0110 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSeven && topRowFillCombOne && bottomRowCombSix && bottomRowFillCombSix )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1000|1000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSeven && topRowFillCombSeven && bottomRowCombSeven && bottomRowFillCombSeven )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1000|0100 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSeven && topRowFillCombOne && bottomRowCombEight && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1000|0010 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSeven && topRowFillCombOne && bottomRowCombNine && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1000|0001 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSeven && topRowFillCombOne && bottomRowCombTen && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1000|1110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSeven && topRowFillCombSeven && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1000|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSeven && topRowFillCombOne && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1000|1010 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSeven && topRowFillCombSeven && bottomRowCombThirteen && bottomRowFillCombSeven )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1000|0101 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombSeven && topRowFillCombOne && bottomRowCombFourteen && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1000|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSeven && topRowFillCombSeven && bottomRowCombFifteen && bottomRowFillCombFifteen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 1000|1011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombSeven && topRowFillCombSeven && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0100|0000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombEight && topRowFillCombOne && bottomRowCombOne && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0100|1111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEight && topRowFillCombEight && bottomRowCombTwo && bottomRowFillCombTwo )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0100|1001 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombEight && topRowFillCombOne && bottomRowCombThree && bottomRowFillCombThree )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0100|1100 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEight && topRowFillCombEight && bottomRowCombFour && bottomRowFillCombFour )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0100|0011 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombEight && topRowFillCombOne && bottomRowCombFive && bottomRowFillCombFive )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0100|0110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEight && topRowFillCombEight && bottomRowCombSix && bottomRowFillCombSix )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0100|1000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombEight && topRowFillCombOne && bottomRowCombSeven && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0100|0100 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombEight && topRowFillCombEight && bottomRowCombEight && bottomRowFillCombEight )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0100|0010 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombEight && topRowFillCombOne && bottomRowCombNine && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0100|0001 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombEight && topRowFillCombOne && bottomRowCombTen && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0100|1110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEight && topRowFillCombEight && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0100|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEight && topRowFillCombEight && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0100|1010 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombEight && topRowFillCombOne && bottomRowCombThirteen && bottomRowFillCombOne)
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0100|0101 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombEight && topRowFillCombEight && bottomRowCombFourteen && bottomRowFillCombEight )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0100|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombEight && topRowFillCombEight && bottomRowCombFifteen && bottomRowFillCombFifteen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0100|1011 ( Left: top row, Right: bottom row )
    else if ( topRowCombEight && topRowFillCombOne && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0010|0000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombNine && topRowFillCombOne && bottomRowCombOne && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0010|1111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombNine && topRowFillCombNine && bottomRowCombTwo && bottomRowFillCombTwo )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0010|1001 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombNine && topRowFillCombOne && bottomRowCombThree && bottomRowFillCombThree )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0010|1100 ( Left: top row, Right: bottom row )
    else if ( topRowCombNine && topRowFillCombOne && bottomRowCombFour && bottomRowFillCombFour )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0010|0011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombNine && topRowFillCombNine && bottomRowCombFive && bottomRowFillCombFive )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0010|0110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombNine && topRowFillCombNine && bottomRowCombSix && bottomRowFillCombSix )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0010|1000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombNine && topRowFillCombOne && bottomRowCombSeven && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0010|0100 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombNine && topRowFillCombOne && bottomRowCombEight && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0010|0010 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombNine && topRowFillCombNine && bottomRowCombNine && bottomRowFillCombNine )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0010|0001 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombNine && topRowFillCombOne && bottomRowCombTen && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0010|1110 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombNine && topRowFillCombNine && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0010|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombNine && topRowFillCombNine && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0010|1010 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombNine && topRowFillCombNine && bottomRowCombThirteen && bottomRowFillCombNine )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0010|0101 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombNine && topRowFillCombEight && bottomRowCombFourteen && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0010|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombNine && topRowFillCombOne && bottomRowCombFifteen && bottomRowFillCombFifteen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0010|1011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombNine && topRowFillCombNine && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    ////////////////////////////
    
    // If 0001|0000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombTen && topRowFillCombOne && bottomRowCombOne && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0001|1111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTen && topRowFillCombTen && bottomRowCombTwo && bottomRowFillCombTwo )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0001|1001 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombTen && topRowFillCombTen && bottomRowCombThree && bottomRowFillCombThree )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0001|1100 ( Left: top row, Right: bottom row )
    else if ( topRowCombTen && topRowFillCombOne && bottomRowCombFour && bottomRowFillCombFour )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0001|0011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTen && topRowFillCombTen && bottomRowCombFive && bottomRowFillCombFive )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0001|0110 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombTen && topRowFillCombOne && bottomRowCombSix && bottomRowFillCombSix )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0001|1000 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombTen && topRowFillCombOne && bottomRowCombSeven && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0001|0100 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombTen && topRowFillCombOne && bottomRowCombEight && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0001|0010 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombTen && topRowFillCombOne && bottomRowCombNine && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0001|0001 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombTen && topRowFillCombTen && bottomRowCombTen && bottomRowFillCombTen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0001|1110 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombTen && topRowFillCombOne && bottomRowCombEleven && bottomRowFillCombEleven )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0001|0111 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTen && topRowFillCombTen && bottomRowCombTwelve && bottomRowFillCombTwelve )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0001|1010 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombTen && topRowFillCombOne && bottomRowCombThirteen && bottomRowFillCombOne )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0001|0101 ( Left: top row, Right: bottom row ) 
    else if ( topRowCombTen && topRowFillCombTen && bottomRowCombFourteen && bottomRowFillCombTen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0001|1101 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTen && topRowFillCombTen && bottomRowCombFifteen && bottomRowFillCombFifteen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    // If 0001|1011 ( Left: top row, Right: bottom row ) (OL)
    else if ( topRowCombTen && topRowFillCombTen && bottomRowCombSixteen && bottomRowFillCombSixteen )
    {
        window.location.href = "moduleOneQuestionThree.html"; 
    }
    
    else
    {
        document.getElementById("incorrectAnswerMessage").innerHTML = "Incorrect, please try again";
    }
    
    return 0;
}
