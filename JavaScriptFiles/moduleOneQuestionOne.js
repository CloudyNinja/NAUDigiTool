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
text.font = "20px Arial";
text.fillText("A", 30, 75);

// Puts number in row 2 column 1
text.font = "20px Arial";
text.fillText( 0, 30, 105 );

// Puts number in row 3 column 1
text.font = "20px Arial";
text.fillText( 0, 30, 140 );

// Puts number in row 4 column 1
text.font = "20px Arial";
text.fillText( 0, 30, 175 );

// Puts number in row 5 column 1
text.font = "20px Arial";
text.fillText( 0, 30, 210 );

// Puts number in row 6 column 1
text.font = "20px Arial";
text.fillText( 1, 30, 245 );

// Puts number in row 7 column 1
text.font = "20px Arial";
text.fillText( 1, 30, 280 );

// Puts number in row 8 column 1
text.font = "20px Arial";
text.fillText( 1, 30, 315 );

// Puts number in row 9 column 1
text.font = "20px Arial";
text.fillText( 1, 30, 350 );

//----------------------------------------------------------------------------------

// B text
text.font = "20px Arial";
text.fillText("B", 80, 75);

// Puts number in row 2 column 2
text.font = "20px Arial";
text.fillText( 0, 80, 105 );

// Puts number in row 3 column 2
text.font = "20px Arial";
text.fillText( 0, 80, 140 );

// Puts number in row 4 column 2
text.font = "20px Arial";
text.fillText( 1, 80, 175 );

// Puts number in row 5 column 2
text.font = "20px Arial";
text.fillText( 1, 80, 210 );

// Puts number in row 6 column 2
text.font = "20px Arial";
text.fillText( 0, 80, 245 );

// Puts number in row 7 column 2
text.font = "20px Arial";
text.fillText( 0, 80, 280 );

// Puts number in row 8 column 2
text.font = "20px Arial";
text.fillText( 1, 80, 315 );

// Puts number in row 9 column 2
text.font = "20px Arial";
text.fillText( 1, 80,350 );

//----------------------------------------------------------------------------------

// C text
text.font = "20px Arial";
text.fillText("C", 130, 75);

// Puts number in row 2 column 3
text.font = "20px Arial";
text.fillText( 0, 130, 105 );

// Puts number in row 3 column 3
text.font = "20px Arial";
text.fillText( 1, 130, 140 );

// Puts number in row 4 column 3
text.font = "20px Arial";
text.fillText( 0, 130, 175 );

// Puts number in row 5 column 3
text.font = "20px Arial";
text.fillText( 1, 130, 210 );

// Puts number in row 6 column 3
text.font = "20px Arial";
text.fillText( 0, 130, 245 );

// Puts number in row 7 column 3
text.font = "20px Arial";
text.fillText( 1, 130, 280 );

// Puts number in row 8 column 3
text.font = "20px Arial";
text.fillText( 0, 130, 315 );

// Puts number in row 9 column 3
text.font = "20px Arial";
text.fillText( 1, 130,350 );

//----------------------------------------------------------------------------------

// F text
text.font = "20px Arial";
text.fillText("F", 180, 75);

// Puts number in row 2 column 4
text.font = "20px Arial";
var numberOne = generateNumber();
text.fillText( numberOne, 180, 105 );

// Puts number in row 3 column 4
text.font = "20px Arial";
var numberTwo = generateNumber();
text.fillText( numberTwo, 180, 140 );

// Puts number in row 4 column 4
text.font = "20px Arial";
var numberThree = generateNumber();
text.fillText( numberThree, 180, 175 );

// Puts number in row 5 column 4
text.font = "20px Arial";
var numberFour = generateNumber();
text.fillText( numberFour, 180, 210 );

// Puts number in row 6 column 4
text.font = "20px Arial";
var numberFive = generateNumber();
text.fillText( numberFive, 180, 245 );

// Puts number in row 7 column 4
text.font = "20px Arial";
var numberSix = generateNumber();
text.fillText( numberSix, 180, 280 );

// Puts number in row 8 column 4
text.font = "20px Arial";
var numberSeven = generateNumber();
text.fillText( numberSeven, 180, 315 );

// Puts number in row 9 column 4
text.font = "20px Arial";
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

//var numberGenerate = generateSquare();

// Generates 0 or 1
// THIS WORKS BUT I'M NOT SURE IF WE NEED IT
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

/* Generate shaded square */
/*function generateSquare()
{ 
    // Generates a random number from 1 ( inclusive ) to 5 ( inclusive )
    var number = Math.floor( ( Math.random() * 5 ) + 1 );
    
    // Create shaded rectangle
    var truthTableCanvas = document.getElementById("myTruthTableCanvas");
    var shadedNumbers = truthTableCanvas.getContext("2d");
    
    shadedNumbers.font = "20px Arial";
    shadedNumbers.fillStyle = "#2066fa";
    
    if ( number == 1 )
    {
        // A
        shadedNumbers.fillText( 0, 30, 105 );
        shadedNumbers.fillText( 0, 30, 140 );
        shadedNumbers.fillText( 0, 30, 175 );
        shadedNumbers.fillText( 0, 30, 210 );
        
        // B
        shadedNumbers.fillText( 0, 80, 105 );
        shadedNumbers.fillText( 0, 80, 140 );
        shadedNumbers.fillText( 1, 80, 175 );
        shadedNumbers.fillText( 1, 80, 210 );
        
        // C
        shadedNumbers.fillText( 0, 130, 105 );
        shadedNumbers.fillText( 1, 130, 140 );
        shadedNumbers.fillText( 0, 130, 175 );
        shadedNumbers.fillText( 1, 130, 210 ); 
        
        // F
        shadedNumbers.fillText( 0, 180, 105 );
        shadedNumbers.fillText( 1, 180, 140 );
        shadedNumbers.fillText( 1, 180, 175 );
        shadedNumbers.fillText( 0, 180, 210 ); 
    }
    
    else if ( number == 2 )
    {
        // A
        shadedNumbers.fillText( 0, 30, 140 );
        shadedNumbers.fillText( 0, 30, 175 );
        shadedNumbers.fillText( 0, 30, 210 );
        shadedNumbers.fillText( 1, 30, 245 );
        
        // B
        shadedNumbers.fillText( 0, 80, 140 );
        shadedNumbers.fillText( 1, 80, 175 );
        shadedNumbers.fillText( 1, 80, 210 );
        shadedNumbers.fillText( 0, 80, 245 );
        
        // C
        shadedNumbers.fillText( 1, 130, 140 );
        shadedNumbers.fillText( 0, 130, 175 );
        shadedNumbers.fillText( 1, 130, 210 );
        shadedNumbers.fillText( 0, 130, 245 );
        
        // F
        shadedNumbers.fillText( 1, 180, 140 );
        shadedNumbers.fillText( 1, 180, 175 );
        shadedNumbers.fillText( 0, 180, 210 );
        shadedNumbers.fillText( 1, 180, 245 ); 
    }
    
    else if ( number == 3 )
    {
        // A
        shadedNumbers.fillText( 0, 30, 175 );
        shadedNumbers.fillText( 0, 30, 210 );
        shadedNumbers.fillText( 1, 30, 245 );
        shadedNumbers.fillText( 1, 30, 280 );
        
        // B
        shadedNumbers.fillText( 1, 80, 175 );
        shadedNumbers.fillText( 1, 80, 210 );
        shadedNumbers.fillText( 0, 80, 245 );
        shadedNumbers.fillText( 0, 80, 280 );
        
        // C
        shadedNumbers.fillText( 0, 130, 175 );
        shadedNumbers.fillText( 1, 130, 210 );
        shadedNumbers.fillText( 0, 130, 245 );
        shadedNumbers.fillText( 1, 130, 280 );
        
        // F
        shadedNumbers.fillText( 1, 180, 175 );
        shadedNumbers.fillText( 0, 180, 210 );
        shadedNumbers.fillText( 1, 180, 245 );
        shadedNumbers.fillText( 0, 180, 280 ); 
    }
    
    else if ( number == 4 )
    {
        // A
        shadedNumbers.fillText( 0, 30, 210 );
        shadedNumbers.fillText( 1, 30, 245 );
        shadedNumbers.fillText( 1, 30, 280 );
        shadedNumbers.fillText( 1, 30, 315 );
        
        // B
        shadedNumbers.fillText( 1, 80, 210 );
        shadedNumbers.fillText( 0, 80, 245 );
        shadedNumbers.fillText( 0, 80, 280 );
        shadedNumbers.fillText( 1, 80, 315 );
        
        // C
        shadedNumbers.fillText( 1, 130, 210 );
        shadedNumbers.fillText( 0, 130, 245 );
        shadedNumbers.fillText( 1, 130, 280 );
        shadedNumbers.fillText( 0, 130, 315 );
        
        // F
        shadedNumbers.fillText( 0, 180, 210 );
        shadedNumbers.fillText( 1, 180, 245 );
        shadedNumbers.fillText( 0, 180, 280 );
        shadedNumbers.fillText( 0, 180, 315 ); 
    }
    
    else
    {
        // A
        shadedNumbers.fillText( 1, 30, 245 );
        shadedNumbers.fillText( 1, 30, 280 );
        shadedNumbers.fillText( 1, 30, 315 );
        shadedNumbers.fillText( 1, 30, 350 );
        
        // B
        shadedNumbers.fillText( 0, 80, 245 );
        shadedNumbers.fillText( 0, 80, 280 );
        shadedNumbers.fillText( 1, 80, 315 );
        shadedNumbers.fillText( 1, 80, 350 );
        
        // C
        shadedNumbers.fillText( 0, 130, 245 );
        shadedNumbers.fillText( 1, 130, 280 );
        shadedNumbers.fillText( 0, 130, 315 );
        shadedNumbers.fillText( 1, 130, 350 );
        
        // F
        shadedNumbers.fillText( 1, 180, 245 );
        shadedNumbers.fillText( 0, 180, 280 );
        shadedNumbers.fillText( 0, 180, 315 );
        shadedNumbers.fillText( 1, 180, 350 ); 
    }
    
    return number;
}*/

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

// Checks user input number to see if they are correct. If they are, move to the next question. If not, retry.
/*function checkAnswers()
{
    if ( numberGenerate == 1 )
    {
        if ( document.getElementById("numberOne").value == 0 && document.getElementById("numberTwo").value == 1 &&       document.getElementById("numberThree").value == 0 && document.getElementById("numberFour").value == 1 &&
        document.getElementById("numberFive").value == 0 && document.getElementById("numberSix").value == 0 &&
        document.getElementById("numberSeven").value == 0 && document.getElementById("numberEight").value == 0 )
        {
            window.location.href = "questionTwo.html";
        }
        
        else
        {
            document.getElementById("incorrectAnswerMessage").innerHTML = "Incorrect, please try again";
        }
    }
        
    else if ( numberGenerate == 2 )
    {
        if ( document.getElementById("numberOne").value == 0 && document.getElementById("numberTwo").value == 1 &&       document.getElementById("numberThree").value == 0 && document.getElementById("numberFour").value == 1 &&
        document.getElementById("numberFive").value == 1 && document.getElementById("numberSix").value == 0 &&
        document.getElementById("numberSeven").value == 0 && document.getElementById("numberEight").value == 0 )
        {
            window.location.href = "questionTwo.html";
        }
        
        else
        {
            document.getElementById("incorrectAnswerMessage").innerHTML = "Incorrect, please try again";
        }
    }
    
    else if ( numberGenerate == 3 )
    {
        if ( document.getElementById("numberOne").value == 0 && document.getElementById("numberTwo").value == 0 &&       document.getElementById("numberThree").value == 0 && document.getElementById("numberFour").value == 1 &&
        document.getElementById("numberFive").value == 1 && document.getElementById("numberSix").value == 0 &&
        document.getElementById("numberSeven").value == 0 && document.getElementById("numberEight").value == 0 )
        {
            window.location.href = "questionTwo.html";
        }
        
        else
        {
            document.getElementById("incorrectAnswerMessage").innerHTML = "Incorrect, please try again";
        }
    }
    
    else if ( numberGenerate == 4 )
    {
        if ( document.getElementById("numberOne").value == 0 && document.getElementById("numberTwo").value == 0 &&       document.getElementById("numberThree").value == 0 && document.getElementById("numberFour").value == 0 &&
        document.getElementById("numberFive").value == 1 && document.getElementById("numberSix").value == 0 &&
        document.getElementById("numberSeven").value == 0 && document.getElementById("numberEight").value == 0 )
        {
            window.location.href = "questionTwo.html";
        }
        
        else
        {
            document.getElementById("incorrectAnswerMessage").innerHTML = "Incorrect, please try again";
        }
    }
    
    else if ( numberGenerate == 5 )
    {
        if ( document.getElementById("numberOne").value == 0 && document.getElementById("numberTwo").value == 0 &&       document.getElementById("numberThree").value == 0 && document.getElementById("numberFour").value == 0 &&
        document.getElementById("numberFive").value == 1 && document.getElementById("numberSix").value == 0 &&
        document.getElementById("numberSeven").value == 1 && document.getElementById("numberEight").value == 0 )
        {
            window.location.href = "questionTwo.html";
        }
        
        else
        {
            document.getElementById("incorrectAnswerMessage").innerHTML = "Incorrect, please try again";
        }
    }
    
    return 0;
}*/
function checkAnswers()
{
    if ( document.getElementById("numberOne").value == numberOne 
         && document.getElementById("numberTwo").value == numberTwo 
         && document.getElementById("numberThree").value == numberThree 
         && document.getElementById("numberFour").value == numberFour
         && document.getElementById("numberFive").value == numberFive
         && document.getElementById("numberSix").value == numberSix
         && document.getElementById("numberSeven").value == numberSeven
         && document.getElementById("numberEight").value == numberEight )
    {
        window.location.href = "moduleOneQuestionTwo.html";
    }
        
    else
    {
        document.getElementById("incorrectAnswerMessage").innerHTML = "Incorrect, please try again";
    }
    
    return 0;
}

function receiveHint()
{
    document.getElementById("hint").innerHTML = "0s and 1s are only needed...";
    
    return 0;
}
