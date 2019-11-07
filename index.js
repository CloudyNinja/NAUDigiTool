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

// Creates diagonal line
var diagonalLine = kMapCanvas.getContext("2d");

// Diagonal Line
diagonalLine.beginPath();

// Sets start point
diagonalLine.moveTo(250, 50);

// Sets end point
diagonalLine.lineTo(250, 360);

// Draws line
diagonalLine.stroke();


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
