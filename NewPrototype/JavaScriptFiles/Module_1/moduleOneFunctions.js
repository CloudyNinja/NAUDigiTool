var equationArray = new Array(15);
var canGroup = 0;

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

    if ( numberOfVariables == 3 )
    {
       // Swaps array indices to match KMap table
        swapArrayIndices( 2, 3 );
        swapArrayIndices( 6, 7 ); 
    }
    
    else if ( numberOfVariables == 4 )
    {
        // Swaps array indices to match KMap table
        swapArrayIndices( 2, 3 );
        swapArrayIndices( 6, 7 );
        swapArrayIndices( 10, 11 );
        swapArrayIndices( 14, 15 );
    }

    return array;
}

/////////////////////////////// For creating truth table /////////////////////////////////////////
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
        
        swapArrayIndices( 2, 3 );
        swapArrayIndices( 6, 7 );
        
        // This for loop adds the numbers for column Y 
        for ( var index = 0; index < 8; index++ )
        {   
            text.fillText( array[ index ], yColumnX, yColumnY );
            yColumnY += 35;
        } 
        
        swapArrayIndices( 2, 3 );
        swapArrayIndices( 6, 7 );
        
        // Fills square
        square.fillStyle = "#AE61FF";
        square.globalAlpha = 0.3;
        square.fillRect(20, 220, 180, 140);
    }
    
    // For four variable truth table
    else if ( numOfVariables == 4 )
    { 
        // Sets vertical and horizontal lines
        var verticalLine = canvas.getContext("2d");
        var horizontalLine = canvas.getContext("2d");
        
        // Text properties
        var text = canvas.getContext("2d");
        text.font = "16px Arial";
        
        // Creates square
        var square = canvas.getContext("2d");
        
        var aColumnX = 30;
        var aColumnY = 105;
        
        var bColumnX = 80;
        var bColumnY = 105;
        
        var cColumnX = 130;
        var cColumnY = 105;
        
        var dColumnX = 180;
        var dColumnY = 105;
        
        var yColumnX = 230;
        var yColumnY = 105;

        // This for loop creates truth table lines
        for ( var index = 0; index < 1; index++ )
        {
            verticalLine.beginPath();
            verticalLine.moveTo(200, 50);
            verticalLine.lineTo(200, 360);
            verticalLine.stroke();
            
            horizontalLine.beginPath();
            horizontalLine.moveTo(10, 83);
            horizontalLine.lineTo(250, 83);
            horizontalLine.stroke();
        } 
        
        text.fillText("Truth Table", 100, 30);
        text.fillText("A", 30, 75);
        text.fillText("B", 80, 75);
        text.fillText("C", 130, 75);
        text.fillText("D", 180, 75);
        text.fillText("Y", 230, 75);
        
        // This for loop adds the numbers for column A
        for ( var index = 0; index < 16; index++ )
        {
            if ( index < 8 )
            {
                text.fillText( 0, aColumnX, aColumnY ); 
            }
            
            else
            {
                text.fillText( 1, aColumnX, aColumnY ); 
            }
            
            aColumnY += 25;
        }
        
        // This for loop adds the numbers for column B
        for ( var index = 0; index < 16; index++ )
        {
            if ( ( index >= 0 && index <= 3 ) || ( index >= 8 && index <= 11 ) )
            {
                text.fillText( 0, bColumnX, bColumnY );
            }
                
            else
            {
                text.fillText( 1, bColumnX, bColumnY );
            }
            
            bColumnY += 25;
        } 
        
        // This for loop adds the numbers for column C
        for ( var index = 0; index < 16; index++ )
        {
            if ( ( index >= 0 && index <= 1 ) || ( index >= 5 && index <= 6 ) || ( index >= 8 && index <= 9 )
            || ( index >= 12 && index <= 13 ) )
            {
                text.fillText( 0, cColumnX, cColumnY );
            }
                
            else
            {
                text.fillText( 1, cColumnX, cColumnY );
            }
            
            cColumnY += 25;
        }
        
        // This for loop adds the numbers for column D
        for ( var index = 0; index < 16; index++ )
        {
            if ( index % 2 == 0 )
            {
                text.fillText( 0, dColumnX, dColumnY );
            }
                
            else
            {
                text.fillText( 1, dColumnX, dColumnY );
            }
            
            dColumnY += 25;
        }
        
        // Flip once to match kmap
        swapArrayIndices( 2, 3 );
        swapArrayIndices( 6, 7 );
        swapArrayIndices( 10, 11 );
        swapArrayIndices( 14, 15 );
        
        // Gonna need to swap indices twice more
        
        // This for loop adds the numbers for column Y 
        for ( var index = 0; index < 16; index++ )
        {   
            text.fillText( array[ index ], yColumnX, yColumnY );
            yColumnY += 25;
        } 
        
        // Flip again to for correct groupings and equation.
        swapArrayIndices( 2, 3 );
        swapArrayIndices( 6, 7 );
        swapArrayIndices( 10, 11 );
        swapArrayIndices( 14, 15 );
        
        // Gonna need to swap indices twice more
        
        // Fills square
        square.fillStyle = "#AE61FF";
        square.globalAlpha = 0.3;
        square.fillRect(20, 290, 230, 200);
    }
}

/////////////////////////////// For creating KMap /////////////////////////////////////////
function createKMap( numofVariables )
{
    // Creates K-MAP
    var kMapCanvas = document.getElementById("myKMapCanvas");
    
    if ( numofVariables == 3 )
    {
        // K-Map text
        var kMapText = kMapCanvas.getContext("2d");
        kMapText.font = "20px Arial";
        kMapText.fillText("K-Map", 160, 30);

        // Creates diagonal line
        var diagonalLine = kMapCanvas.getContext("2d");
        diagonalLine.beginPath();
        diagonalLine.moveTo(65, 50);
        diagonalLine.lineTo(100, 100);
        diagonalLine.stroke();
        
        // Creates vertical line
        var verticalLine = kMapCanvas.getContext("2d");
        var verticalLineMoveToX = 100;
        var verticalLineMoveToY = 100;
        var verticalLineLineToX = 100;
        var verticalLineLineToY = 200;
        
        verticalLine.moveTo(verticalLineMoveToX, verticalLineMoveToY);
        verticalLine.lineTo(verticalLineLineToX, verticalLineLineToY);
        
        for ( var index = 0; index < 4; index++ )
        {
            verticalLine.stroke();
            verticalLineMoveToX += 50;
            verticalLineLineToX += 50;
            verticalLine.moveTo(verticalLineMoveToX, verticalLineMoveToY);
            verticalLine.lineTo(verticalLineLineToX, verticalLineLineToY);
        }
        
        // Creates first horizontal line
        var horizontalLine = kMapCanvas.getContext("2d");
        var horizontalLineMoveToX = 100;
        var horizontalLineMoveToY = 100;
        var horizontalLineLineToX = 301;
        var horizontalLineLineToY = 100;
        
        horizontalLine.moveTo(horizontalLineMoveToX, horizontalLineMoveToY);
        horizontalLine.lineTo(horizontalLineLineToX, horizontalLineLineToY);
        
        for ( var index = 0; index < 3; index++ )
        {
            horizontalLine.stroke();
            horizontalLineMoveToY += 50;
            horizontalLineLineToY += 50;
            horizontalLine.moveTo(horizontalLineMoveToX, horizontalLineMoveToY);
            horizontalLine.lineTo(horizontalLineLineToX, horizontalLineLineToY);
        }
        
        // Sets A, B, and C text as well as numbers
        var kMapText = kMapCanvas.getContext("2d");
        kMapText.font = "20px Arial";
        
        kMapText.fillText("A", 55, 70);
        kMapText.fillText("B C", 81, 70);
        kMapText.fillText("0", 80, 130);  
        kMapText.fillText("1", 80, 180);
        kMapText.fillText("00", 113, 96);
        kMapText.fillText("01", 163, 96);
        kMapText.fillText("11", 213, 96);
        kMapText.fillText("10", 263, 96);
    }
    
    else if ( numofVariables == 4 )
    {
        // K-Map text
        var kMapText = kMapCanvas.getContext("2d");
        kMapText.font = "20px Arial";
        kMapText.fillText("K-Map", 160, 30);

        // Creates diagonal line
        var diagonalLine = kMapCanvas.getContext("2d");
        diagonalLine.beginPath();
        diagonalLine.moveTo(65, 50);
        diagonalLine.lineTo(100, 100);
        diagonalLine.stroke();
        
        // Creates vertical line
        var verticalLine = kMapCanvas.getContext("2d");
        var verticalLineMoveToX = 100;
        var verticalLineMoveToY = 100;
        var verticalLineLineToX = 100;
        var verticalLineLineToY = 300;
        
        verticalLine.moveTo(verticalLineMoveToX, verticalLineMoveToY);
        verticalLine.lineTo(verticalLineLineToX, verticalLineLineToY);
        
        for ( var index = 0; index < 4; index++ )
        {
            verticalLine.stroke();
            verticalLineMoveToX += 50;
            verticalLineLineToX += 50;
            verticalLine.moveTo(verticalLineMoveToX, verticalLineMoveToY);
            verticalLine.lineTo(verticalLineLineToX, verticalLineLineToY);
        }
        
        // Creates first horizontal line
        var horizontalLine = kMapCanvas.getContext("2d");
        var horizontalLineMoveToX = 100;
        var horizontalLineMoveToY = 100;
        var horizontalLineLineToX = 301;
        var horizontalLineLineToY = 100;
        
        horizontalLine.moveTo(horizontalLineMoveToX, horizontalLineMoveToY);
        horizontalLine.lineTo(horizontalLineLineToX, horizontalLineLineToY);
        
        for ( var index = 0; index < 5; index++ )
        {
            horizontalLine.stroke();
            horizontalLineMoveToY += 50;
            horizontalLineLineToY += 50;
            horizontalLine.moveTo(horizontalLineMoveToX, horizontalLineMoveToY);
            horizontalLine.lineTo(horizontalLineLineToX, horizontalLineLineToY);
        }
        
        // Sets A, B, and C text as well as numbers
        var kMapText = kMapCanvas.getContext("2d");
        kMapText.font = "20px Arial";
        
        // For A and B
        kMapText.fillText("A B", 30, 70);
        kMapText.fillText("00", 70, 130);  
        kMapText.fillText("01", 70, 180);
        kMapText.fillText("11", 70, 230);  
        kMapText.fillText("10", 70, 280);
        
        
        // For C and D
        kMapText.fillText("C D", 81, 70);
        kMapText.fillText("00", 113, 96);
        kMapText.fillText("01", 163, 96);
        kMapText.fillText("11", 213, 96);
        kMapText.fillText("10", 263, 96);
    }
}

function fillKMap()
{
    var kMapCanvas = document.getElementById("myKMapCanvas");
    var kMapText = kMapCanvas.getContext("2d");
    kMapText.font = "20px Arial";
    
    var xCoordinate = 118;
    var yCoordinate = 130;
    
    // For 3 var KMaps
    if ( array.length == 8 )
    {
       for ( var index = 0; index < array.length; index++ )
       {
           if ( index == 4 )
            {
                xCoordinate = 118;
                yCoordinate += 50;
                kMapText.fillText(array[index], xCoordinate, yCoordinate);
                
            }
           
           else
            {
                kMapText.fillText(array[index], xCoordinate, yCoordinate);
            }
           
           xCoordinate += 50;
       }
    }
    
    // For 4 var KMaps
    else if ( array.length == 16 )
    {
       for ( var index = 0; index < array.length; index++ )
       {
           if ( index == 4 || index == 8 || index == 12 )
            {
                xCoordinate = 118;
                yCoordinate += 50;
                kMapText.fillText(array[index], xCoordinate, yCoordinate);
                
            }
           
           else
            {
                kMapText.fillText(array[index], xCoordinate, yCoordinate);
            }
           
           xCoordinate += 50;
       }
    }
}

function swapArrayIndices( indexOne, indexTwo )
{
    var tempVal = array[ indexOne ];

    array[ indexOne ] = array[ indexTwo ];
    array[ indexTwo ] = tempVal;
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

/////////////////////////////// Grouping functions go here //////////////////////////////////////

// Gets the length of array
function getLengthOfArray()
{
    var counter = 0;

    for ( var index = 0; index < array.length; index++ )
    {
        counter += 1;
    }

    return counter;
}

// Finds octet matches in array
function findOctetGroups()
{
    var length = getLengthOfArray();

    // For 3 Var KMap
    if ( length == 8 )
    {
        if ( array[ 0 ] == 1 )
        {
            checkEightArrayIndicesIfOneAndNotInGroupArray( 0, 1, 2, 3, 4, 5, 6, 7 );
        }
    }
}

// Finds quad matches in array
function findQuadGroups()
{
    var length = getLengthOfArray();

    // This is for a 3 variable truth table: Read it from TOP LEFT to BOTTOM RIGHT
    if ( length == 8 )
    {
        for ( var index = 0; index < length; index++ )
        {
            if ( index == 0 )
            {
                checkFourArrayIndicesIfOneAndNotInGroupArray( index, index + 1, index + 2, index + 3 );
                checkFourArrayIndicesIfOneAndNotInGroupArray( index, index + 1, index + 4, index + 5 );
                checkFourArrayIndicesIfOneAndNotInGroupArray( index, index + 3, index + 4, index + 7 );
            }

            else if ( index == 1 || index == 2 )
            {
                checkFourArrayIndicesIfOneAndNotInGroupArray( index, index + 1, index + 4, index + 5 );
            }

            else if ( index == 4 )
            {
                checkFourArrayIndicesIfOneAndNotInGroupArray( index, index + 1, index + 2, index + 3 );
            }
        }
    }
}

function findPairGroups()
{
    var length = getLengthOfArray();

    // This is for a 3 variable truth table: Read it from TOP LEFT to BOTTOM RIGHT
    if ( length == 8 )
    {
        for ( var index = 0; index < length; index++ )
        {
            if ( index == 0 )
            {
                checkTwoArrayIndicesIfOneAndNotInGroupArray(index, index + 1);
                checkTwoArrayIndicesIfOneAndNotInGroupArray(index, index + 4);
                checkTwoArrayIndicesIfOneAndNotInGroupArray(index, index + 3);
            }

            else if ( index == 1 || index == 2 )
            {
                checkTwoArrayIndicesIfOneAndNotInGroupArray( index, index + 1 );
                checkTwoArrayIndicesIfOneAndNotInGroupArray( index, index + 4 );
            }

            else if ( index == 3 )
            {
                checkTwoArrayIndicesIfOneAndNotInGroupArray( index, index + 4 );
            }

            else if ( index == 4 )
            {
                checkTwoArrayIndicesIfOneAndNotInGroupArray(index, index + 1);
                checkTwoArrayIndicesIfOneAndNotInGroupArray(index, index + 3);
            }

            else if ( index == 5 || index == 6 )
            {
                checkTwoArrayIndicesIfOneAndNotInGroupArray(index, index + 1);
            }
        }
    }
}

// Prints array
function printArray()
{
    console.log(JSON.stringify(array));
    console.log(JSON.stringify(equationArray));

    console.log( "\nA | BC________________________");
    console.log( "  |     00 |  01 |  11 |  10  |");
    console.log( " 0|      " + array[0] + " |   " + array[1] + " |   " + array[2] + " |   " + array[3] + "  |" );
    console.log( " 1|      " + array[4] + " |   " + array[5] + " |   " + array[6] + " |   " + array[7] + "  |\n" );


}

// Prints grouping array
function printGroupingArray()
{
    console.log(JSON.stringify(groupingArray));
}

// Check eight indices in array to see if they are one. More modular.
function checkEightArrayIndicesIfOneAndNotInGroupArray( firstIndex, secondIndex, thirdIndex, fourthIndex,
fifthIndex, sixthIndex, seventhIndex, eighthIndex )
{
    var octetFormed = Boolean(array[ firstIndex ] == 1 && array[ secondIndex ] == 1 && array[ thirdIndex ] == 1
            && array[ fourthIndex ] == 1 && array[ fifthIndex ] == 1 && array[ sixthIndex ] == 1
            && array[ seventhIndex ] == 1 && array[ eighthIndex ] == 1 );

    var inGroupArray = Boolean( groupingArray[ firstIndex ] != 1 || groupingArray[ secondIndex ] != 1 || groupingArray[ thirdIndex ] != 1
            || groupingArray[ fourthIndex ] != 1 || groupingArray[ fifthIndex ] != 1 || groupingArray[ sixthIndex ] != 1
            || groupingArray[ seventhIndex ] != 1 || groupingArray[ eighthIndex ] != 1 );

    if ( octetFormed && inGroupArray )
    {
        addOctetToGroupArray( firstIndex, secondIndex, thirdIndex, fourthIndex, fifthIndex, sixthIndex, seventhIndex,
        eighthIndex );
    }
}

// Check four indices in array to see if they are one. More modular.
function checkFourArrayIndicesIfOneAndNotInGroupArray( firstIndex, secondIndex, thirdIndex, fourthIndex )
{
    var quadFormed = Boolean( array[ firstIndex ] == 1 && array[ secondIndex ] == 1 && array[ thirdIndex ] == 1
    && array[ fourthIndex ] == 1 );

    var inGroupArray = Boolean( groupingArray[ firstIndex ] != 1 || groupingArray[ secondIndex ] != 1 || groupingArray[ thirdIndex ] != 1
    || groupingArray[ fourthIndex ] != 1 );

    if ( quadFormed && inGroupArray )
    {
        addQuadToGroupArray(firstIndex, secondIndex, thirdIndex, fourthIndex);
    }
}

// Check two indices in array to see if they are one. More modular.
function checkTwoArrayIndicesIfOneAndNotInGroupArray( firstIndex, secondIndex )
{
    var pairFormed = Boolean( array[ firstIndex ] == 1 && array[ secondIndex ] == 1 );

    var inGroupArray = Boolean( groupingArray[ firstIndex ] != 1 || groupingArray[ secondIndex ] != 1 );

    if ( pairFormed && inGroupArray )
    {
        addPairToGroupArray( firstIndex, secondIndex );
    }
}

// Adds given pair to group array. More modular.
function addPairToGroupArray( firstIndex, secondIndex )
{
    groupingArray[ firstIndex ] = array[ firstIndex ];
    groupingArray[ secondIndex ] = array[ secondIndex ];
    canGroup = 1;
    console.log( "\nPair formed: " + firstIndex + ", " + secondIndex + ".\n" );
    addPairToThreeVarEquation( firstIndex, secondIndex );
}

// Counts number of elements in equation array
function countElementsInEquationArray()
{
    var index = 0;
    var count = 0;
    
    while ( equationArray[ index ] != null )
    {
        index++;
        count += 1;
    }
    
    return count;
}

// Adds given pair to equation array
function addToEquationArray( equationString )
{
    var index = 0;
    
    while ( equationArray[ index ] != null )
    {
        index++;
    }
    
    equationArray[ index ] = equationString;
    console.log(JSON.stringify(equationArray));
    console.log( countElementsInEquationArray() );
}

// Adds given pair to three variable equation. More modular.
function addPairToThreeVarEquation( firstIndex, secondIndex )
{
    if ( firstIndex == 0 && secondIndex == 1 )
    {
        addToEquationArray( "A'B'" );
    }

    else if ( firstIndex == 0 && secondIndex == 3 )
    {
        addToEquationArray( "A'C'" );
    }

    else if ( firstIndex == 0 && secondIndex == 4 )
    {
        addToEquationArray( "B'C'" );
    }

    else if ( firstIndex == 1 && secondIndex == 2 )
    {
        addToEquationArray( "A'C" );
    }

    else if ( firstIndex == 1 && secondIndex == 5 )
    {
        addToEquationArray( "B'C" );
    }

    else if ( firstIndex == 2 && secondIndex == 3 )
    {
        addToEquationArray( "A'B" );
    }

    else if ( firstIndex == 2 && secondIndex == 6 )
    {
        addToEquationArray( "BC" );
    }

    else if ( firstIndex == 3 && secondIndex == 7 )
    {
        addToEquationArray( "BC'" );
    }

    else if ( firstIndex == 4 && secondIndex == 5 )
    {
        addToEquationArray( "AB'" );
    }

    else if ( firstIndex == 4 && secondIndex == 7 )
    {
        addToEquationArray( "AC'" );
    }

    else if ( firstIndex == 5 && secondIndex == 6 )
    {
        addToEquationArray( "AC" );
    }

    else if ( firstIndex == 6 && secondIndex == 7 )
    {
        addToEquationArray( "AB" );
    }
}

// Adds given quad pair to group array. More modular.
function addQuadToGroupArray( firstIndex, secondIndex, thirdIndex, fourthIndex )
{
    groupingArray[ firstIndex ] = array[ firstIndex ];
    groupingArray[ secondIndex ] = array[ secondIndex ];
    groupingArray[ thirdIndex ] = array[ thirdIndex ];
    groupingArray[ fourthIndex ] = array[ fourthIndex ];
    canGroup = 1;
    console.log( "\nQuad formed: " + firstIndex + ", " + secondIndex + ", " + thirdIndex + ", " + fourthIndex + ".\n");
    addQuadToThreeVarEquation( firstIndex, secondIndex, thirdIndex, fourthIndex );
}

// Adds given octet to group array. More modular.
function addOctetToGroupArray( firstIndex, secondIndex, thirdIndex, fourthIndex, fifthIndex,
                                  sixthIndex, seventhIndex, eighthIndex )
{
    groupingArray[ firstIndex ] = array[ firstIndex ];
    groupingArray[ secondIndex ] = array[ secondIndex ];
    groupingArray[ thirdIndex ] = array[ thirdIndex ];
    groupingArray[ fourthIndex ] = array[ fourthIndex ];
    groupingArray[ fifthIndex ] = array[ fifthIndex ];
    groupingArray[ sixthIndex ] = array[ sixthIndex ];
    groupingArray[ seventhIndex ] = array[ seventhIndex ];
    groupingArray[ eighthIndex ] = array[ eighthIndex ];
    canGroup = 1;
    console.log( "\nOctet formed: " + firstIndex + ", " + secondIndex + ", " + thirdIndex + ", " + fourthIndex + ", " +
    fifthIndex + ", " + sixthIndex + ", " + seventhIndex + ", " + eighthIndex + ".\n");
    addOctetToThreeVarEquation( firstIndex, secondIndex, thirdIndex, fourthIndex, fifthIndex, sixthIndex, seventhIndex, eighthIndex );
}

// Adds octet to three variable equation. More modular.
function addOctetToThreeVarEquation( firstIndex, secondIndex, thirdIndex, fourthIndex, fifthIndex,
sixthIndex, seventhIndex, eighthIndex )
{
    addToEquationArray( "1" );
}

// Adds quad to three variable equation. More modular.
function addQuadToThreeVarEquation( firstIndex, secondIndex, thirdIndex, fourthIndex )
{
    if ( firstIndex == 0 && secondIndex == 1 && thirdIndex == 2 && fourthIndex == 3 )
    {
        addToEquationArray( "A'" );
    }

    else if ( firstIndex == 0 && secondIndex == 1 && thirdIndex == 4 && fourthIndex == 5 )
    {
        addToEquationArray( "B'" );
    }

    else if ( firstIndex == 0 && secondIndex == 3 && thirdIndex == 4 && fourthIndex == 7 )
    {
        addToEquationArray( "C'" );
    }

    else if ( firstIndex == 1 && secondIndex == 2 && thirdIndex == 5 && fourthIndex == 6 )
    {
        addToEquationArray( "C" );
    }

    else if ( firstIndex == 2 && secondIndex == 3 && thirdIndex == 6 && fourthIndex == 7 )
    {
        addToEquationArray( "B" );
    }

    else if ( firstIndex == 4 && secondIndex == 5 && thirdIndex == 6 && fourthIndex == 7 )
    {
        addToEquationArray( "A" );
    }
}

/////////////////////////////// Check functions go here /////////////////////////////////////////
function checkAnswers()
{
    swapArrayIndices( 2, 3 );
    swapArrayIndices( 6, 7 );
    
    var isRight = 0;
    
    for ( var index = 1; index < 9; index++ )
    {
        if ( Boolean( document.getElementById("number" + index).value != array[index - 1] ) )
        {
            isRight = -1;
        }
    }
    
    if ( isRight == 0 )
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

// NEED TO DO
function checkGroupings()
{    
    document.getElementById("incorrectAnswerMessage").innerHTML = "Incorrect, please try again";
        
    attemptsLeft = decreaseAttemptsM1Q2( attemptsLeft );
    
    return 0;
}

// Checks if user equation is valid
function checkUserEquation()
{  
    var counter = 0;
    var userInput = document.getElementById("userEquation").value.replace(/ /g,'').toUpperCase().split("+");
    
    console.log( userInput );
    
    if ( Boolean( userInput.length == countElementsInEquationArray() ) )
    {
        for ( var outerIndex = 0; outerIndex < equationArray.length; outerIndex++ )
        {
            for ( var innerIndex = 0; innerIndex < userInput.length; innerIndex++ )
            {
                if ( Boolean( equationArray[ outerIndex ] == userInput[ innerIndex ] ) )
                {
                    counter += 1;
                }
            }
        }
        
        // Since user input has to be same length as answer array
        if ( counter == userInput.length )
        {
           showScore(); 
        }
        
        else
        {
            document.getElementById("incorrectAnswerMessage").innerHTML = "Incorrect, please try again";
            attemptsLeft = decreaseAttemptsM1Q3( attemptsLeft );
        }
    }
    
    // If no groups formed
    else if ( canGroup == 0 && userInput == "" )
    {
        showScore();
    }
    
    else
    {
        document.getElementById("incorrectAnswerMessage").innerHTML = "Incorrect, please try again";
        attemptsLeft = decreaseAttemptsM1Q3( attemptsLeft );
    }
}

/////////////////////////////// Reset functions go here /////////////////////////////////////////
function resetNumbers()
{ 
    if ( array.length == 8 )
    {
       for ( var index = 1; index < 9; index++ )
        {
            document.getElementById("number" + index).value = 0;
        }

        document.getElementById("incorrectAnswerMessage").innerHTML = "";
        document.getElementById("hint").innerHTML = ""; 
    }
    
    else if ( array.length == 16 )
    {
       for ( var index = 1; index < 17; index++ )
        {
            document.getElementById("number" + index).value = 0;
        }

        document.getElementById("incorrectAnswerMessage").innerHTML = "";
        document.getElementById("hint").innerHTML = ""; 
    }
}

function resetEquation()
{
    document.getElementById("userEquation").value = "";
     document.getElementById("incorrectAnswerMessage").innerHTML = "";
    document.getElementById("hint").innerHTML = "";
}

/////////////////////////////// Hint functions go here /////////////////////////////////////////
function receiveHint()
{
    document.getElementById("hint").innerHTML = "0s and 1s are only needed...";
    
    return 0;
}

function receiveHintM1Q2()
{
    document.getElementById("hint").innerHTML = "0s should never be grouped...";
    
    return 0;
}

function receiveHintM1Q3()
{
    document.getElementById("hint").innerHTML = "Completely simplify answer...";
    
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

/////////////////////////////// Decrease attemmpts go here /////////////////////////////////////////
function decreaseAttemptsM1Q2( number )
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
        window.location.href = "moduleOneQuestionThree.html";
    }
    
    return number;
}

function decreaseAttemptsM1Q3( number )
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
        console.log("FINISHED")
        showScore();
    }
    
    return number;
}

/////////////////////////////// Only one function needed for score /////////////////////////////////////////
function showScore()
{
    totalUserStars += starsGiven;
    passUserStars( totalUserStars );
    
    if ( totalUserStars >= 8 )
    {
        alert( "MODULE STAR SCORE: " + totalUserStars + "/" + moduleOneMaxStars.toString() + "\n\n\nYou passed Karnaugh Maps!!");
    }
    
    else
    {
        alert( "MODULE STAR SCORE: " + totalUserStars + "/" + moduleOneMaxStars.toString() + "\n\n\nModule failed. Try again.");
    }
}