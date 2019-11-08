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
text.fillText( 0, 180, 105 );

// Puts number in row 3 column 4
text.font = "20px Arial";
text.fillText( 1, 180, 140 );

// Puts number in row 4 column 4
text.font = "20px Arial";
text.fillText( 1, 180, 175 );

// Puts number in row 5 column 4
text.font = "20px Arial";
text.fillText( 0, 180, 210 );

// Puts number in row 6 column 4
text.font = "20px Arial";
text.fillText( 1, 180, 245 );

// Puts number in row 7 column 4
text.font = "20px Arial";
text.fillText( 0, 180, 280 );

// Puts number in row 8 column 4
text.font = "20px Arial";
text.fillText( 0, 180, 315 );

// Puts number in row 9 column 4
text.font = "20px Arial";
text.fillText( 1, 180,350 );

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

// 11
kMapText.font = "20px Arial";
kMapText.fillText("11", 213, 96);

// 10
kMapText.font = "20px Arial";
kMapText.fillText("10", 263, 96);

generateSquare();

// Generates random number and assigns it to number
// MAY NOT NEED IT
/*var number = -1;
number = generateNumber( number );*/

// Generates random number and assigns it to number
//number = generateNumber( number );

// Generates 0 or 1
// THIS WORKS I'M JUST NOT SURE IF WE NEED IT
/*function generateNumber( variable ) 
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
}*/

/* Generate shaded square */
function generateSquare()
{ 
    // Generates a random number from 1 ( inclusive ) to 5 ( inclusive )
    var number = Math.floor( ( Math.random() * 5 ) + 1 );
    
    // Create shaded rectangle
    var truthTableCanvas = document.getElementById("myTruthTableCanvas");
    var shadedNumbers = truthTableCanvas.getContext("2d");
    
    shadedNumbers.font = "20px Arial";
    shadedNumbers.fillStyle = "#597dd9";
    
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
    }
    
    //var rectangle = truthTableCanvas.getContext("2d");
    
    /* This creates rectangle but I'm unsure how to correlate the shaded area with K-Map validation.
       So I'm going to try and create 4 by 4 grid of shaded colors in the truth table. */
    
    /*rectangle.beginPath();
    
    // Fills rectangle
    rectangle.lineWidth = "100";
    
    // Sets rectangle color
    rectangle.strokeStyle = "#fbff94";
    
    // Sets rectangle transparency
    rectangle.globalAlpha = 0.5;
    
    // Sets coordinates of triangle
    rectangle.rect(70, 135, 30, 35);
    rectangle.stroke();*/
    
    return number;
}
