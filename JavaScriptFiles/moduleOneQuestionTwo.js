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
    document.getElementById("incorrectAnswerMessage").innerHTML = "Incorrect, please try again";
    
    return 0;
}
