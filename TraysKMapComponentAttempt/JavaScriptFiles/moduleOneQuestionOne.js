var array = new Array(8);
var groupingArray = new Array(8);

// Creates an array based on the number of variables provided
function createArray( numberOfVariables )
{
    var length = Math.pow( 2, numberOfVariables );
    array.length = length;
    groupingArray.length = length;

    for ( var index = 0; index < array.length; index++ )
    {
        array[ index ] = generateNumber();
        groupingArray[ index ] = 0;
    }

    // Swaps array indices to match KMap table
    /*swapArrayIndices( 2, 3 );
    swapArrayIndices( 6, 7 );*/
    
    return array;
}

function createTruthTable( numOfVariables )
{
    var canvas = document.getElementById("myTruthTableCanvas");

    // For three variable truth table
    if ( numOfVariables == 3 )
    { 
        // Sets vertical and horizontal lines
        var verticalLine = canvas.getContext("2d");
        var horizontalLine = canvas.getContext("2d");
        
        // Text properties
        var text = canvas.getContext("2d");
        text.font = "20px Arial";
        
        // Creates square
        var square = canvas.getContext("2d");
        
        var aColumnX = 30;
        var aColumnY = 105;
        
        var bColumnX = 80;
        var bColumnY = 105;
        
        var cColumnX = 130;
        var cColumnY = 105;
        
        var yColumnX = 180;
        var yColumnY = 105;

        // This for loop creates truth table lines
        for ( var index = 0; index < 1; index++ )
        {
            verticalLine.beginPath();
            verticalLine.moveTo(160, 50);
            verticalLine.lineTo(160, 360);
            verticalLine.stroke();
            
            horizontalLine.beginPath();
            horizontalLine.moveTo(10, 83);
            horizontalLine.lineTo(200, 83);
            horizontalLine.stroke();
        } 
        
        text.fillText("Truth Table", 60, 30);
        text.fillText("A", 30, 75);
        text.fillText("B", 80, 75);
        text.fillText("C", 130, 75);
        text.fillText("Y", 180, 75);
        
        // This for loop adds the numbers for column A
        for ( var index = 0; index < 8; index++ )
        {
            if ( index < 4 )
            {
                text.fillText( 0, aColumnX, aColumnY ); 
            }
            
            else
            {
                text.fillText( 1, aColumnX, aColumnY ); 
            }
            
            aColumnY += 35;
        }
        
        // This for loop adds the numbers for column B
        for ( var index = 0; index < 8; index++ )
        {
            if ( index == 0 || index == 1 || index == 4 || index == 5 )
            {
                text.fillText( 0, bColumnX, bColumnY );
            }
                
            else
            {
                text.fillText( 1, bColumnX, bColumnY );
            }
            
            bColumnY += 35;
        } 
        
        // This for loop adds the numbers for column C
        for ( var index = 0; index < 8; index++ )
        {
            if ( index % 2 == 0 )
            {
                text.fillText( 0, cColumnX, cColumnY );
            }
                
            else
            {
                text.fillText( 1, cColumnX, cColumnY );
            }
            
            cColumnY += 35;
        }
        
        // This for loop adds the numbers for column Y 
        for ( var index = 0; index < 8; index++ )
        {
            text.fillText( array[ index ], yColumnX, yColumnY );
            yColumnY += 35;
        } 
        
        // Fills square
        square.fillStyle = "#AE61FF";
        square.globalAlpha = 0.3;
        square.fillRect(20, 220, 180, 140);
    }
}

array = createArray(3);
createTruthTable(3);

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
kMapText.font = "20px Arial";
kMapText.fillText("A", 55, 70);

// B text
kMapText.font = "20px Arial";
kMapText.fillText("B C", 81, 70);

// 0
kMapText.font = "20px Arial";
kMapText.fillText("0", 80, 130);

// 1
kMapText.font = "20px Arial";
kMapText.fillText("1", 80, 180);

// 00
kMapText.font = "20px Arial";
kMapText.fillText("00", 113, 96);

// 01
kMapText.font = "20px Arial";
kMapText.fillText("01", 163, 96);

// 10
kMapText.font = "20px Arial";
kMapText.fillText("10", 213, 96);

// 11
kMapText.font = "20px Arial";
kMapText.fillText("11", 263, 96);

// Attempts Left Message
var attemptsLeft = 3;
var starsGiven = 3;
var levelMaxStars = 3;

document.getElementById("attemptsLeft").innerHTML = "Attempts left: " + attemptsLeft.toString();

// Star score message
document.getElementById("scoreText").innerHTML =  " Star Score: " + starsGiven.toString() + "/" + levelMaxStars.toString();

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
function resetNumbers()
{
    document.getElementById("numberOne").value = 0;
    document.getElementById("numberTwo").value = 0;
    document.getElementById("numberThree").value = 0;
    document.getElementById("numberFour").value = 0;
    document.getElementById("numberFive").value = 0;
    document.getElementById("numberSix").value = 0;
    document.getElementById("numberSeven").value = 0;
    document.getElementById("numberEight").value = 0;

    document.getElementById("incorrectAnswerMessage").innerHTML = "";
    document.getElementById("hint").innerHTML = "";
    
}

function checkAnswers()
{
    if ( document.getElementById("numberOne").value == array[0]
         && document.getElementById("numberTwo").value == array[1]
         && document.getElementById("numberThree").value == array[2]
         && document.getElementById("numberFour").value == array[3]
         && document.getElementById("numberFive").value == array[4]
         && document.getElementById("numberSix").value == array[5]
         && document.getElementById("numberSeven").value == array[6]
         && document.getElementById("numberEight").value == array[7] )
    {
        userStars += starsGiven;
        passUserStars( userStars );
        window.location.href = "moduleOneQuestionTwo.html";
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
    document.getElementById("hint").innerHTML = "0s and 1s are only needed...";
    
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
        userStars += starsGiven;
        passUserStars( userStars );
        window.location.href = "moduleOneQuestionTwo.html";
        
        /*alert( " Star Score: " + userStars.toString() + "/" + moduleOneMaxStars.toString() );*/
    }
    
    return number;
}
