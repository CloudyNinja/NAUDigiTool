var canvas = document.getElementById("myCanvas");

//----------------------------------------------------------------------------------

// Creates vertical line
var verticalLine = canvas.getContext("2d");

// Vertical Line
verticalLine.beginPath();

// Sets start point
verticalLine.moveTo(120, 50);

// Sets end point
verticalLine.lineTo(120, 300);

// Draws line
verticalLine.stroke();

//----------------------------------------------------------------------------------

// Creates horizontal line
var horizontalLine = canvas.getContext("2d");

// Horizontal Line
horizontalLine.beginPath();

// Sets start point
horizontalLine.moveTo(10, 80);

// Sets end point
horizontalLine.lineTo(200, 80);

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
text.fillText( 1, 30, 175 );

// Puts number in row 5 column 1
text.font = "20px Arial";
text.fillText( 1, 30, 210 );

//----------------------------------------------------------------------------------

// B text
text.font = "20px Arial";
text.fillText("B", 80, 75);

// Puts number in row 2 column 2
text.font = "20px Arial";
text.fillText( 0, 80, 105 );

// Puts number in row 3 column 2
text.font = "20px Arial";
text.fillText( 1, 80, 140 );

// Puts number in row 4 column 2
text.font = "20px Arial";
text.fillText( 0, 80, 175 );

// Puts number in row 5 column 2
text.font = "20px Arial";
text.fillText( 1, 80, 210 );

//----------------------------------------------------------------------------------

// F text
text.font = "20px Arial";
text.fillText("F", 155, 75);

// Puts number in row 2 column 3
text.font = "20px Arial";
text.fillText( 0, 155, 105 );

// Puts number in row 3 column 3
text.font = "20px Arial";
text.fillText( 1, 155, 140 );

// Puts number in row 4 column 3
text.font = "20px Arial";
text.fillText( 1, 155, 175 );

// Puts number in row 5 column 3
text.font = "20px Arial";
text.fillText( 1, 155, 210 );

//----------------------------------------------------------------------------------

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
