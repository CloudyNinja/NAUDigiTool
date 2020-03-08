var equationArray = new Array(15);
var canGroup = 0;

var octects = 0;
var quads =  0;
var pairs = 0;

var canvas = document.getElementById('userCanvas');
var ctx = canvas.getContext('2d');
var rect = {};
var drag = false;

var rectangleArray = new Array( 3 );
var drawingArray = new Array( 8 );
setDrawingArray();

//////////// FOR GROUPING /////////////////
function setDrawingArray()
{
    for ( var index = 0; index < drawingArray.length; index++ )
    {
        drawingArray[ index ] = 0;
    }
}

function createUserArray()
{
    for ( var index = 0; index < userArray.length; index++ )
    {
        userArray[ index ] = 0;
    }
    
    return userArray;
}

function addInputsToUserArray()
{
    for ( var index = 1; index < userArray.length + 1; index++ )
    {
        userArray[ index - 1 ] = document.getElementById("number" + index).value;
    }
    
    if ( array.length == 8 )
    {
        swapUserArrayIndices( 2, 3 );
        swapUserArrayIndices( 6, 7 );
    }
    
    else if ( array.length == 16 )
    {
        swapUserArrayIndices( 2, 3 );
        swapUserArrayIndices( 6, 7 );
        swapUserArrayIndices( 8, 12 );
        swapUserArrayIndices( 9, 13 );
        swapUserArrayIndices( 10, 15 );
        swapUserArrayIndices( 11, 14 );
    }
    
    console.log( JSON.stringify( userArray ) );
}

function init() 
{
    canvas.addEventListener('mousedown', mouseDown, false);
    canvas.addEventListener('mouseup', mouseUp, false);
    canvas.addEventListener('mousemove', mouseMove, false);
}

function mouseDown(e) 
{
    rect.startX = e.pageX - this.offsetLeft;
    rect.startY = e.pageY - this.offsetTop;
    drag = true;
}

function mouseUp() 
{
    drag = false;
    //addRectangleToArray( rect );
    formatRectangle( rect, event );
    ctx.clearRect( 0, 0, canvas.width, canvas.height);
    drawRectangles();
    //console.log( "\nGrouping array: " + JSON.stringify(groupingArray));
    //console.log( " Drawing array: " + JSON.stringify(drawingArray));
}

function addRectangleToArray( rectangle )
{
    var index = 0;
    
    while ( rectangleArray[ index ] != null )
    {
        //console.log(rectangleArray[ index ] );
        index++;
    }

    rectangleArray[index] = rectangle;  
    console.log(JSON.stringify(rectangleArray));
}

// Adds given pair to drawing array. More modular.
function addPairToDrawingArray( firstIndex, secondIndex )
{
    var bothOnes = drawingArray[ firstIndex ] != 1 || drawingArray[ secondIndex ] != 1;
    
    if (  bothOnes && octects == 0 && quads == 0 )
    {
        drawingArray[ firstIndex ] = groupingArray[firstIndex];
        drawingArray[ secondIndex ] = groupingArray[secondIndex];
        pairs -= 1;
    }
    
    return 0;
}

// Adds given quad to drawing array. More modular.
function addQuadToDrawingArray( firstIndex, secondIndex, thirdIndex, fourthIndex )
{
    if ( drawingArray[ firstIndex ] != 1 || drawingArray[ secondIndex ] != 1 || drawingArray[ thirdIndex ] != 1 || drawingArray[ fourthIndex ] != 1 && octects == 0 )
    {
        drawingArray[ firstIndex ] = groupingArray[firstIndex];
        drawingArray[ secondIndex ] = groupingArray[secondIndex];
        drawingArray[ thirdIndex ] = groupingArray[thirdIndex];
        drawingArray[ fourthIndex ] = groupingArray[fourthIndex];
        quads -= 1;
    }
    
    return 0;
}

// Adds given octect to drawing array. More modular.
function addOctetToDrawingArray( firstIndex, secondIndex, thirdIndex, fourthIndex, fifthIndex, sixthIndex, seventhIndex, eighthIndex )
{
    if ( drawingArray[ firstIndex ] != 1 || drawingArray[ secondIndex ] != 1 || drawingArray[ thirdIndex ] != 1 || drawingArray[ fourthIndex ] != 1 || drawingArray[ fifthIndex ] != 1 || drawingArray[ sixthIndex ] != 1 || drawingArray[ seventhIndex ] != 1 || drawingArray[ eighthIndex ] != 1 )
    {
        drawingArray[ firstIndex ] = groupingArray[ firstIndex ];
        drawingArray[ secondIndex ] = groupingArray[ secondIndex ];
        drawingArray[ thirdIndex ] = groupingArray[ thirdIndex ];
        drawingArray[ fourthIndex ] = groupingArray[ fourthIndex ];
        drawingArray[ fifthIndex ] = groupingArray[ fifthIndex ];
        drawingArray[ sixthIndex ] = groupingArray[ sixthIndex ];
        drawingArray[ seventhIndex ] = groupingArray[ seventhIndex ];
        drawingArray[ eighthIndex ] = groupingArray[ eighthIndex ];
        octects -= 1;
    }
    
    return 0;
}

// This formats rectangle as a user groups them
function formatRectangle( rectangle, event )
{
    // Coordinates
    /*var x = event.clientX;
    var y = event.clientY;*/
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    var length = getLengthOfArray();
    var rectColor = generateColor();
    
    if ( length == 8 )
    {
        // First four if statements is for vertical pair grouping
        if ( x > 100 && x < 150 && y > 100 && y < 200 && rectangle.w > 5 && rectangle.w < 47 && rectangle.h > 52 && rectangle.h < 95 )
        {
            temp = { startX: 110, startY: 110, w: 30, h : 80, color: rectColor };
            addPairToDrawingArray( 0, 4 );
            addPairToTwoDArray( user2DArray, 0, 4 );
            addRectangleToArray( temp );
        }

        else if ( x > 150 && x < 200 && y > 100 && y < 200 && rectangle.w > 5 && rectangle.w < 47 && rectangle.h > 52 && rectangle.h < 95 )
        {
            temp = { startX: 160, startY: 110, w: 30, h : 80, color: rectColor };
            addPairToDrawingArray( 1, 5 );
            addPairToTwoDArray( user2DArray, 1, 5 );
            addRectangleToArray( temp );
        }

        else if ( x > 200 && x < 250 && y > 100 && y < 200 && rectangle.w > 5 && rectangle.w < 47 && rectangle.h > 52 && rectangle.h < 95 )
        {
            temp = { startX: 210, startY: 110, w: 30, h : 80, color: rectColor };
            addPairToDrawingArray( 2, 6 );
            addPairToTwoDArray( user2DArray, 2, 6 );
            addRectangleToArray( temp );
        }

        else if ( x > 250 && x < 300 && y > 100 && y < 200 && rectangle.w > 5 && rectangle.w < 47 && rectangle.h > 52 && rectangle.h < 95 )
        {
            temp = { startX: 260, startY: 110, w: 30, h : 80, color: rectColor };
            addPairToDrawingArray( 3, 7 );
            addPairToTwoDArray( user2DArray, 3, 7 );
            addRectangleToArray( temp );
        }

        // Next eight if statements is for horizontal pair grouping
            // First three is top row
        else if ( x > 100 && x < 200 && y > 100 && y < 150 && rectangle.w > 25 && rectangle.w < 98 && rectangle.h > 15 && rectangle.h < 48  )
        {
            temp = { startX: 110, startY: 110, w: 80, h : 30, color: rectColor };
            addPairToDrawingArray( 0, 1 );
            addPairToTwoDArray( user2DArray, 0, 1 );
            addRectangleToArray( temp );
        }

        else if ( x > 150 && x < 250 && y > 100 && y < 150 && rectangle.w > 25 && rectangle.w < 98 && rectangle.h > 15 && rectangle.h < 48 )
        {
            temp = { startX: 160, startY: 110, w: 80, h : 30, color: rectColor };
            addPairToDrawingArray( 1, 2 );
            addPairToTwoDArray( user2DArray, 1, 2 );
            addRectangleToArray( temp );
        }

        else if ( x > 200 && x < 300 && y > 100 && y < 150 && rectangle.w > 25 && rectangle.w < 98 && rectangle.h > 15 && rectangle.h < 48 )
        {
            temp = { startX: 210, startY: 110, w: 80, h : 30, color: rectColor };
            addPairToDrawingArray( 2, 3 );
            addPairToTwoDArray( user2DArray, 2, 3 );
            addRectangleToArray( temp );
        }

            // Next three is bottom row
        else if ( x > 100 && x < 200 && y > 150 && y < 200 && rectangle.w > 25 && rectangle.w < 98 && rectangle.h > 15 && rectangle.h < 48 )
        {
            temp = { startX: 110, startY: 160, w: 80, h : 30, color: rectColor };
            addPairToDrawingArray( 4, 5 );
            addPairToTwoDArray( user2DArray, 4, 5 );
            addRectangleToArray( temp );
        }

        else if ( x > 150 && x < 250 && y > 150 && y < 200 && rectangle.w > 25 && rectangle.w < 98 && rectangle.h > 15 && rectangle.h < 48 )
        {
            temp = { startX: 160, startY: 160, w: 80, h : 30, color: rectColor };
            addPairToDrawingArray( 5, 6 );
            addPairToTwoDArray( user2DArray, 5, 6 );
            addRectangleToArray( temp );
        }

        else if ( x > 200 && x < 300 && y > 150 && y < 200 && rectangle.w > 25 && rectangle.w < 98 && rectangle.h > 15 && rectangle.h < 48 )
        {
            temp = { startX: 210, startY: 160, w: 80, h : 30, color: rectColor };
            addPairToDrawingArray( 6, 7 );
            addPairToTwoDArray( user2DArray, 6, 7 );
            addRectangleToArray( temp );
        }

            // Next two are the wraps
                // Top Row
        else if ( x > 75 && x < 100 && y > 110 && y < 145 && rectangle.w > 5 && rectangle.w < 40 && rectangle.h > 5 && rectangle.h < 40 )
        {
            // Top row wrap
            addPairToDrawingArray( 0, 3 );
            temp = { startX: 100, startY: 110, w: 40, h : 30, color: rectColor };
            addRectangleToArray( temp );
            temp = { startX: 260, startY: 110, w: 40, h : 30, color: rectColor };
            addRectangleToArray( temp );
            addPairToTwoDArray( user2DArray, 0, 3 );
        }
                // Bottom row
        else if ( x > 75 && x < 100 && y > 160 && y < 195 && rectangle.w > 5 && rectangle.w < 40 && rectangle.h > 5 && rectangle.h < 40 )
        {
            // Bottom row wrap
            addPairToDrawingArray( 4, 7 );
            temp = { startX: 100, startY: 160, w: 40, h : 30, color: rectColor };
            addRectangleToArray( temp );
            temp = { startX: 260, startY: 160, w: 40, h : 30, color: rectColor };
            addRectangleToArray( temp );
            addPairToTwoDArray( user2DArray, 4, 7 );
        }

        // Next 3 if statements is for vertical quad grouping
        else if ( x > 100 && x < 200 && y > 100 && y < 200 && rectangle.w > 70 && rectangle.w < 95 && rectangle.h > 70 && rectangle.h < 95 )
        {
            // Bottom row wrap
            temp = { startX: 110, startY: 110, w: 80, h : 80, color: rectColor };
            addQuadToDrawingArray( 0, 1, 4, 5 );
            addRectangleToArray( temp );
        }

        else if ( x > 150 && x < 250 && y > 100 && y < 200 && rectangle.w > 70 && rectangle.w < 95 && rectangle.h > 70 && rectangle.h < 95 )
        {
            // Bottom row wrap
            temp = { startX: 160, startY: 110, w: 80, h : 80, color: rectColor };
            addQuadToDrawingArray( 1, 2, 5, 6 );
            addRectangleToArray( temp );
        }

         else if ( x > 200 && x < 300 && y > 100 && y < 200 && rectangle.w > 70 && rectangle.w < 95 && rectangle.h > 70 && rectangle.h < 95 )
        {
            // Bottom row wrap
            temp = { startX: 210, startY: 110, w: 80, h : 80, color: rectColor };
            addQuadToDrawingArray( 2, 3, 6, 7 );
            addRectangleToArray( temp );
        }

        // Next 2 if statements is for horizontal quad grouping
        else if ( x > 100 && x < 300 && y > 100 && y < 150 && rectangle.w > 162 && rectangle.w < 180 && rectangle.h > 5 && rectangle.h < 50 )
        {
            temp = { startX: 110, startY: 110, w: 180, h : 30, color: rectColor };
            addQuadToDrawingArray( 0, 1, 2, 3 );
            addRectangleToArray( temp );
        }

        else if ( x > 100 && x < 300 && y > 150 && y < 200 && rectangle.w > 162 && rectangle.w < 180 && rectangle.h > 5 && rectangle.h < 50 )
        {
            // Bottom row wrap
            temp = { startX: 110, startY: 160, w: 180, h : 30, color: rectColor };
            addQuadToDrawingArray( 4, 5, 6, 7 );
            addRectangleToArray( temp );
        }

        // Next if statement is for wrap quad grouping
        else if ( x > 75 && x < 100 && y > 110 && y < 195 && rectangle.w > 5 && rectangle.w < 45 && rectangle.h > 70 && rectangle.h < 95 )
        {
            addQuadToDrawingArray( 0, 3, 4, 7 );
            temp = { startX: 100, startY: 110, w: 40, h : 80, color: rectColor };
            addRectangleToArray( temp );
            temp = { startX: 260, startY: 110, w: 40, h : 80, color: rectColor };
            addRectangleToArray( temp );
        }

        // Octal group
        else if ( x > 100 && x < 300 && y > 100 && y < 200 && rectangle.w > 150 && rectangle.w < 190 && rectangle.h > 70 && rectangle.h < 95 )
        {
            temp = { startX: 110, startY: 110, w: 180, h : 80, color: rectColor };
            addOctetToDrawingArray( 0, 1, 2, 3, 4, 5, 6, 7 );
            addRectangleToArray( temp );
        }

        else
        {
            temp = {};
        }
    }
    
    // For 4 variable grouping
    else if ( length == 16 )
    {
        var index = 0;
        
        // For sixteen
        if ( x > 105 && x < 295 && y > 105 && y < 295 && rectangle.w > 165 && rectangle.w < 190 && rectangle.h > 165 && rectangle.h < 185 )
        {
            temp = { startX: 110, startY: 110, w: 180, h : 180, color: rectColor };
            addRectangleToArray( temp );
            
            // Creates array space and adds array from length of sixteenArray - 1 
            index = createArraySpace( sixteenDrawingArray );
            sixteenDrawingArray[index] = sixteenArray[sixteenArray.length-1];
            console.log( "SIXTEEN DRAWING ARRAY: " + JSON.stringify( sixteenDrawingArray ) );
        }
    }
    
    else
    {
        temp = {};
    }
    
    return temp;
}

function drawRectangles()
{
    var index = 0;
    
    while ( rectangleArray[ index ] != null )
    {   
        // This generates random color: May need to fix
        ctx.strokeStyle = rectangleArray[index].color;
        
        ctx.strokeRect( rectangleArray[index].startX, rectangleArray[index].startY, rectangleArray[index].w, rectangleArray[index].h );
        index++;
    }
}

function mouseMove(e) 
{    
    if ( drag ) 
    {
        //getMousePos( canvas, e );
        
        rect.w = (e.pageX - this.offsetLeft) - rect.startX;
        rect.h = (e.pageY - this.offsetTop) - rect.startY ;
        
        //showCoords( e );
        ctx.clearRect( 0, 0, canvas.width, canvas.height);
        drawRectangles();
        sketchRectangle();
    }
}

function sketchRectangle() 
{
    ctx.strokeStyle = "#FF0000";
    ctx.strokeRect( rect.startX, rect.startY, rect.w, rect.h );
    //console.log( rect.startX + " " + rect.startY + " " + rect.w + " " + rect.h );
}

function getMousePos( canvas, event )
{
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    
    console.log( "X: " + x + " Y: " + y );
}
  
// This function can be used for grouping but I haven't implemented it yet.
function generateColor()
{
    var index = 0
    //var letters = "0123456789ABCDEF"; 
    var letters = "012345678"; 
    var color = '#'; 

    for ( var index = 0; index < 6; index++ ) 
    {
       color += letters[ ( Math.floor( Math.random() * 8 ) ) ]; 
    }
    
    return color;
}

init();

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// This function draws the octect for problems where the user needs to write the equation
function drawEquationOctetRectangles( drawRect, firstIndex, secondIndex, thirdIndex, fourthIndex, fifth, sixth, seventh, eighth )
{
    var startX = 110;
    var startY = 110;
    var indexIncrement = 50;
    var octetWidth;
    var octetHeight;
    
    // Sets drawing canvas to random color
    var canvas = document.getElementById('myKMapCanvas');
    var context = canvas.getContext('2d');
    context.strokeStyle = generateColor();
    
    if ( drawRect == 1 && array.length == 8 )
    {
        octetWidth = 180;
        octetHeight = 80;
        context.strokeRect( startX, startY, octetWidth, octetHeight );
    }
    
}
// This function draws the quad rectangles for problems where the user needs to write the equation
function drawEquationQuadRectangles( drawRect, firstIndex, secondIndex, thirdIndex, fourthIndex )
{
    var startX = 110;
    var startY = 110;
    var indexIncrement = 50;
    var quadWidth = 0;
    var quadHeight = 0;
    
    // Sets drawing canvas to random color
    var canvas = document.getElementById('myKMapCanvas');
    var context = canvas.getContext('2d');
    context.strokeStyle = generateColor();
    
    if ( drawRect == 1 && array.length == 8 )
    {
        // For vertical quads
        if ( firstIndex + 4 == thirdIndex && firstIndex + 5 == fourthIndex )
        {
            quadWidth = 80;
            quadHeight = 80;
            
            startX += indexIncrement * firstIndex;
            context.strokeRect( startX, startY, quadWidth, quadHeight );
        }
        
        // For horizonal quads
        else if ( firstIndex + 2 == thirdIndex )
        {
            quadWidth = 180;
            quadHeight = 30;
            
            if ( firstIndex == 4 )
            {
                startY = 160;
            }
            
            context.strokeRect( startX, startY, quadWidth, quadHeight );
        }
        
        else
        {
            quadWidth = 40;
            quadHeight = 80;
            startX = 100;
            context.strokeRect( startX, startY, quadWidth, quadHeight );
            startX = 260;
            context.strokeRect( startX, startY, quadWidth, quadHeight );
        }
    }
}

// This function draws the pair rectangles for problems where the user needs to write the equation
function drawEquationPairRectangles( simplifiedArray )
{
    // Passes in twoDArray after redundacy check
    var startX;
    var startY;
    var indexIncrement = 50;
    var pairWidth;
    var pairHeight;
    
    // 30 80 for vertical, 80 30 for horizontal
    
    // Sets drawing canvas to random color
    var canvas = document.getElementById('myKMapCanvas');
    var context = canvas.getContext('2d');
    
    for ( var index = 0; index < simplifiedArray.length; index++ ) 
    {
        startX = 110;
        startY = 110;
        context.strokeStyle = generateColor();
        
        //console.log( "FIRST NUM: " + simplifiedArray[index][0] + " SECOND NUM: " + simplifiedArray[index][1] );
        
        // For horizontal grouping
            // If difference of group is 1 ( double check for horizonal )
        if ( simplifiedArray[index][1] - simplifiedArray[index][0] == 1 )
        {
            pairWidth = 80;
            pairHeight = 30;
            
            if ( simplifiedArray[index][0] >= 0 && simplifiedArray[index][0] <= 2 )
            {
                startX += indexIncrement * simplifiedArray[index][0];
                context.strokeRect( startX, startY, pairWidth, pairHeight );
            }
            
            else if ( simplifiedArray[index][0] >= 4 && simplifiedArray[index][0] <= 6 )
            {
                startX += indexIncrement * ( simplifiedArray[index][0] - 4 );
                startY += indexIncrement;
                context.strokeRect( startX, startY, pairWidth, pairHeight );
            }
        }
        
        // For vertical grouping
            // If difference of group is 4 ( double check for vertical )
        else if ( simplifiedArray[index][1] - simplifiedArray[index][0] == 4 )
        {
            pairWidth = 30;
            pairHeight = 80;
            
            startX += indexIncrement * simplifiedArray[index][0];
            context.strokeRect( startX, startY, pairWidth, pairHeight );
        }
        
        // For the wraps
        else
        {
            if ( simplifiedArray[index][1] - simplifiedArray[index][0] == 3 )
            {
                pairWidth = 40;
                pairHeight = 30;
                
                // Top row wrap
                if ( simplifiedArray[index][0] == 0 )
                {
                    startX = 100;
                    context.strokeRect( startX, startY, pairWidth, pairHeight );
                    startX = 260;
                    context.strokeRect( startX, startY, pairWidth, pairHeight );
                }
                
                else
                {
                    startY += indexIncrement;
                    startX = 100;
                    context.strokeRect( startX, startY, pairWidth, pairHeight );
                    startX = 260;
                    context.strokeRect( startX, startY, pairWidth, pairHeight );
                }
            }
        }
    }
}    

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
        if ( ( array[0] != 1 || array[1] != 1 ) && dontCare == 0 )
        {
            console.log("DONT CARE: " + dontCare );
            array[0] = 1;
            array[1] = 1;
        }
        
        else if ( ( array[0] != 1 || array[1] != "X" ) && dontCare == 1 )
        {
            console.log("ADD X: " + dontCare );
            array[0] = 1;
            array[1] = "X";
        }
        
        // Swaps array indices to match KMap table
        swapArrayIndices( 2, 3 );
        swapArrayIndices( 6, 7 ); 
    }
    
    else if ( numberOfVariables == 4 )
    {
        if ( array[0] != 1 || array[1] != 1 )
        {
            array[0] = 1;
            array[1] = 1;
        }
        
        // Swaps array indices to match KMap table
        swapArrayIndices( 2, 3 );
        swapArrayIndices( 6, 7 );
        swapArrayIndices( 8, 12 );
        swapArrayIndices( 9, 13 );
        swapArrayIndices( 10, 15 );
        swapArrayIndices( 11, 14 );
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
            if ( ( index >= 0 && index <= 1 ) || ( index >= 4 && index <= 5 ) || ( index >= 8 && index <= 9 )
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
        swapArrayIndices( 8, 12 );
        swapArrayIndices( 9, 13 );
        swapArrayIndices( 10, 14 );
        swapArrayIndices( 11, 15 );
        
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

function swapUserArrayIndices( indexOne, indexTwo )
{
    var tempVal = userArray[ indexOne ];

    userArray[ indexOne ] = userArray[ indexTwo ];
    userArray[ indexTwo ] = tempVal;
}

// Generates 0 or 1
function generateNumber() 
{
    var variable = Math.round(Math.random());
    var arrayOfThings = [ 0, 1, "X" ];
    
    if ( dontCare == 1 )
    {
        variable = arrayOfThings[ Math.round( Math.random() * 2 ) ];
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

//////////// Section for 4 variable GROUPING //////////////

// Finds 16s in array 
function find16s()
{
    var length = getLengthOfArray();
    var counter = 1;
    var newArray = new Array(1);
    var sixteenArrayIndex = 0;
    console.log( "LENGTH: " + length );
    
    for ( var index = 0; index < length; index++ )
    {
        if ( array[index] != 1 )
        {
            counter -= 1;
        }
    }
    
    console.log( "COUNTER: " + counter );
    
    // If all 16s
    if ( counter == 1 )
    {
        // Adds array of all 1s to new array
        for ( var index = 0; index < length; index++ )
        {
            newArray[index] = array[index];
        }
        
        console.log( "NEW ARRAY: " + JSON.stringify( newArray ) );
        
        // Creates slot to add array and adds the array
        sixteenArrayIndex = createArraySpace( sixteenArray );
        sixteenArray[sixteenArrayIndex] = newArray;
        console.log( "SIXTEEN ARRAY: " + JSON.stringify( sixteenArray ) );
    }
}

// Creates space needed to aadd array
function createArraySpace( arrayPassed )
{
    var index = 0;
    
    while ( arrayPassed[index] != null )
    {
        index++;
    }
    
    return index;
}

// Resets drawing array by setting it to null
function resetDrawingArray( arrayPassed )
{
    arrayPassed = new Array(1);
    
    return arrayPassed;
}


// Checks both sixteen arrays to see if they match: can be used for all
function checkIfSixteenArraysMatch( arrayOne, arrayTwo )
{
    var sizeEqual = arrayOne.length == arrayTwo.length;
    var count = 0;
    
    if ( sizeEqual )
    {
        for ( var outerIndex = 0; outerIndex < arrayOne.length; outerIndex++ )
        {
            for ( var innerIndex = 0; innerIndex < arrayOne.length; innerIndex++ )
            {
                var arraysMatch = arraysEqual( arrayOne[outerIndex], arrayTwo[innerIndex] );
                if ( arraysMatch )
                {
                    count += 1;
                }
            }
        }
        
        if ( count == arrayOne.length )
        {
            return true;
        }
        
        else
        {
            return false;
        }
    }
    
    else
    {
        return false;
    }
}

// Checks both arrays to see if they match
function arraysEqual( arrayOne, arrayTwo )
{
    return JSON.stringify( arrayOne ) == JSON.stringify( arrayTwo )
}

//////////// Section for 4 variable GROUPING //////////////

// Finds octet matches in array
function findOctetGroups()
{
    var length = getLengthOfArray();
    
    //console.log( "LENGTH: " + length );

    // For 3 Var KMap
    if ( length == 8 )
    {
        if ( array[ 0 ] == 1 || array[ 0 ] == "X" )
        {
            checkEightArrayIndicesIfOneAndNotInGroupArray( 0, 1, 2, 3, 4, 5, 6, 7, 0 );
            checkEightArrayIndicesIfOneAndNotInGroupArray( 0, 1, 2, 3, 4, 5, 6, 7, 1 );
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
        // First for loop is for grouping 1s ONLY
        checkFourArrayIndicesIfOneAndNotInGroupArray( 0, 1, 2, 3, 0 );
        checkFourArrayIndicesIfOneAndNotInGroupArray( 4, 5, 6, 7, 0 );
        checkFourArrayIndicesIfOneAndNotInGroupArray( 0, 1, 4, 5, 0 );
        checkFourArrayIndicesIfOneAndNotInGroupArray( 1, 2, 5, 6, 0 );
        checkFourArrayIndicesIfOneAndNotInGroupArray( 2, 3, 6, 7, 0 );
        checkFourArrayIndicesIfOneAndNotInGroupArray( 0, 3, 4, 7, 0 );
        
        checkFourArrayIndicesIfOneAndNotInGroupArray( 0, 1, 2, 3, 1 );
        checkFourArrayIndicesIfOneAndNotInGroupArray( 4, 5, 6, 7, 1 );
        checkFourArrayIndicesIfOneAndNotInGroupArray( 0, 1, 4, 5, 1 );
        checkFourArrayIndicesIfOneAndNotInGroupArray( 1, 2, 5, 6, 1 );
        checkFourArrayIndicesIfOneAndNotInGroupArray( 2, 3, 6, 7, 1 );
        checkFourArrayIndicesIfOneAndNotInGroupArray( 0, 3, 4, 7, 1 );
    }
}

function findPairGroups()
{
    var length = getLengthOfArray();

    // For a 3 variable truth table
    if ( length == 8 )
    {   
        // The first two while loops are for finding 1s first
        var index = 0;
        
        // Horizontal groupings for finding 1s FIRST
        while ( index < length )
        {
            if ( index == 0 || index == 1 || index == 2 || index == 4 || index == 5 || index == 6 )
            {
                checkTwoArrayIndicesIfOneAndNotInGroupArray( index, index + 1, 0 );
            }
            
            index++;
        }
        
        // Reset index
        index = 0;
        
        // Vertical groupings for finding 1s FIRST
        while ( index < length )
        {
            if ( index == 0 || index == 1 || index == 2 || index == 3 )
            {
                checkTwoArrayIndicesIfOneAndNotInGroupArray( index, index + 4, 0 );
            }
            
            index++;
        }
        
        // Wrap conditions
        checkTwoArrayIndicesIfOneAndNotInGroupArray( 0, 3, 0 );
        checkTwoArrayIndicesIfOneAndNotInGroupArray( 4, 7, 0 );
        
        // The next two while loops are for finding dont cares
        
        // Reset index
        index = 0;
        
        // Horizontal groupings for finding 1s FIRST
        while ( index < length )
        {
            if ( index == 0 || index == 1 || index == 2 || index == 4 || index == 5 || index == 6 )
            {
                checkTwoArrayIndicesIfOneAndNotInGroupArray( index, index + 1, 1 );
            }
            
            index++;
        }
        
        // Reset index
        index = 0;
        
        // Vertical groupings for finding Xs after 1s groups have been made
        while ( index < length )
        {
            if ( index == 0 || index == 1 || index == 2 || index == 3 )
            {
                checkTwoArrayIndicesIfOneAndNotInGroupArray( index, index + 4, 1 );
            }
            
            index++;
        }
        
        // Wrap conditions
        checkTwoArrayIndicesIfOneAndNotInGroupArray( 0, 3, 1 );
        checkTwoArrayIndicesIfOneAndNotInGroupArray( 4, 7, 1 );
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

// Check eight indices in array to see if they are one. More modular.
function checkEightArrayIndicesIfOneAndNotInGroupArray( firstIndex, secondIndex, thirdIndex, fourthIndex,
fifthIndex, sixthIndex, seventhIndex, eighthIndex, checkForXs )
{
    var octetFormed = Boolean(array[ firstIndex ] == 1 && array[ secondIndex ] == 1 && array[ thirdIndex ] == 1
            && array[ fourthIndex ] == 1 && array[ fifthIndex ] == 1 && array[ sixthIndex ] == 1
            && array[ seventhIndex ] == 1 && array[ eighthIndex ] == 1 );
    
    var octetFormedWithXs = Boolean(array[ firstIndex ] != 0 && array[ secondIndex ] != 0 && array[ thirdIndex ] != 0 && array[ fourthIndex ] != 0 && array[ fifthIndex ] != 0 && array[ sixthIndex ] != 0
    && array[ seventhIndex ] != 0 && array[ eighthIndex ] != 0 );

    var inGroupArray = Boolean( groupingArray[ firstIndex ] != 1 || groupingArray[ secondIndex ] != 1 || groupingArray[ thirdIndex ] != 1
            || groupingArray[ fourthIndex ] != 1 || groupingArray[ fifthIndex ] != 1 || groupingArray[ sixthIndex ] != 1
            || groupingArray[ seventhIndex ] != 1 || groupingArray[ eighthIndex ] != 1 );

    if ( octetFormed && inGroupArray && checkForXs == 0 )
    {
        addOctetToGroupArray( firstIndex, secondIndex, thirdIndex, fourthIndex, fifthIndex, sixthIndex, seventhIndex,
        eighthIndex );
    }
    
    else if ( octetFormedWithXs && checkForXs == 1 )
    {
        addOctetToGroupArray( firstIndex, secondIndex, thirdIndex, fourthIndex, fifthIndex, sixthIndex, seventhIndex,
        eighthIndex ); 
    }
}

// Check four indices in array to see if they are one. More modular.
function checkFourArrayIndicesIfOneAndNotInGroupArray( firstIndex, secondIndex, thirdIndex, fourthIndex, checkForXs )
{
    var quadFormed = Boolean( array[ firstIndex ] == 1 && array[ secondIndex ] == 1 && array[ thirdIndex ] == 1
    && array[ fourthIndex ] == 1 );

    var notInGroupArray = Boolean( groupingArray[ firstIndex ] != 1 || groupingArray[ secondIndex ] != 1 || groupingArray[ thirdIndex ] != 1 || groupingArray[ fourthIndex ] != 1 );
    
    var xInQuad = Boolean( array[ firstIndex ] == "X" || array[ secondIndex ] == "X" || array[ thirdIndex ] == "X" || array[ fourthIndex ] == "X" )
    
    var atLeastAOne = Boolean( ( array[ firstIndex ] == 1 && array[ firstIndex ] != groupingArray[firstIndex] ) || ( array[ secondIndex ] == 1 && array[ secondIndex ] != groupingArray[secondIndex] ) || ( array[ thirdIndex ] == 1 && array[ thirdIndex ] != groupingArray[thirdIndex] ) || ( array[ fourthIndex ] == 1 && array[ fourthIndex] != groupingArray[fourthIndex] ) ); 
    
    var areZero = Boolean( groupingArray[ firstIndex ] == 0 || groupingArray[ secondIndex ] == 0 || groupingArray[ thirdIndex ] == 0 || groupingArray[ fourthIndex ] == 0 );
    
    var arrayFine = Boolean( array[ firstIndex ] != 0 && array[ secondIndex ] != 0 && array[ thirdIndex ] != 0 && array[ fourthIndex ] != 0 );

    if ( quadFormed && notInGroupArray && checkForXs == 0 )
    {
        addQuadToGroupArray(firstIndex, secondIndex, thirdIndex, fourthIndex);
    }
    
    /*console.log( "\nxInQuad: " + xInQuad );
    console.log( "atLeastAOne: " + atLeastAOne );
    console.log( "noneAreZero: " + areZero );
    console.log( "Check for Xs: " + checkForXs );*/
    
    if ( xInQuad && atLeastAOne && areZero && arrayFine && checkForXs == 1 )
    {
        addQuadToGroupArray(firstIndex, secondIndex, thirdIndex, fourthIndex);
    }
}

// Check two indices in array to see if they are one. More modular.
function checkTwoArrayIndicesIfOneAndNotInGroupArray( firstIndex, secondIndex, checkForXs )
{
    var pairFormed = Boolean( array[ firstIndex ] == 1 && array[ secondIndex ] == 1 );
    var inGroupArray = Boolean( groupingArray[ firstIndex ] != 1 || groupingArray[ secondIndex ] != 1 );
    
    var pairFormedWithX = Boolean( ( array[ firstIndex ] == "X" && array[ secondIndex ] == 1 ) || ( array[ firstIndex ] == 1 && array[ secondIndex ] == "X" ) );
    var noXPairNeeded = Boolean( groupingArray[ firstIndex ] == 1 || groupingArray[ secondIndex ] == 1 );

    // If both indexes are one.
    if ( pairFormed && inGroupArray && checkForXs == 0 )
    {
        addPairToGroupArray( firstIndex, secondIndex );
    }
    
    // If one index is X and the other is a 1.
    else if ( pairFormedWithX && !noXPairNeeded && checkForXs == 1 )
    {
        addPairToGroupArray( firstIndex, secondIndex );
        //console.log( "GROUPING ARRAY: " + JSON.stringify( groupingArray ) );
    }
}

// Adds given pair to group array. More modular.
function addPairToGroupArray( firstIndex, secondIndex )
{
    pairs += 1;
    groupingArray[ firstIndex ] = array[ firstIndex ];
    groupingArray[ secondIndex ] = array[ secondIndex ];
    canGroup = 1;
    console.log( "\nPair formed: " + firstIndex + ", " + secondIndex + ".\n" );
    twoDArray = addPairToTwoDArray( twoDArray, firstIndex, secondIndex );
    //addPairToThreeVarEquation( firstIndex, secondIndex );
}

// Creates 2D array 
function create2DArray( twoDimensionArray )
{
    // Loop to create 2D array using 1D array 
    for ( var index = 0; index < twoDimensionArray.length; index++ ) 
    { 
        twoDimensionArray[index] = new Array(2); 
    } 
  
    // Loop to initilize 2D array elements. 
    for (var i = 0; i < twoDimensionArray.length; i++) 
    { 
        for (var j = 0; j < 2; j++) 
        { 
            twoDimensionArray[i][j] = 0; 
        } 
    } 
}

// Adds pair to twoDArray
function addPairToTwoDArray( arrayPassed, firstIndex, secondIndex )
{
    var index = 0; 
    var canAdd = 0;
    
    while ( arrayPassed[ index ][0] != 0 || arrayPassed[ index ][1] != 0  )
    {
        if ( arrayPassed[ index ][0] == firstIndex && arrayPassed[ index ][1] == secondIndex )
        {
            canAdd -= -1;
        }
            
        index++;
    }
    
    if ( canAdd == 0 )
    {
        arrayPassed[ index ][ 0 ] = firstIndex;
        arrayPassed[ index ][ 1 ] = secondIndex;
    }
    
    console.log( "Stopped at index: " + index );
    console.log( "NEW ARRAY: " + JSON.stringify( arrayPassed ) );
    
    return arrayPassed;
}

// takes an array of pairs and returns the array with no redundant groups
// Make sure z
function checkForRedundancies( pairsArray ) 
{
    var temp = pairsArray;
    var redundant1; //boolean for first element
    var redundant2; //boolean for second element

    //loop through all groups
    for ( group in temp ) 
    {
        //console.log( "FIRST NUM: " + pairsArray[group][0] + " SECOND NUM: " + pairsArray[group][1] );
        
        if ( temp[group][0] != 0 || temp[group][1] != 0 ) 
        {
            //reset redundant when checking a new group
            redundant1 = false;
            redundant2 = false;
            
            //loop through all groups to compare to
            for ( compareGroup in temp ) 
            {
                if ( temp[compareGroup][0] != 0 || temp[compareGroup][1] != 0 ) 
                {
                    //console.log("Comparing groups " + group + " " + compareGroup);
                    // do not compare to self
                    if ( compareGroup != group ) 
                    {
                        //console.log("Comparing " + temp[group][0] + " with " + temp[compareGroup][0] + " and " + temp[compareGroup][1]);

                        // if first element matches either element in compare
                        if ( temp[group][0] == temp[compareGroup][0] || temp[group][0] == temp[compareGroup][1] ) 
                        {
                            //first element is redundant
                            redundant1 = true;
                            //console.log( "R1 IS TRUE" );
                        }
                        //console.log("Comparing " + temp[group][1] + " with " + temp[compareGroup][0] + " and " + temp[compareGroup][1]);

                        //if second element matches either element in compare
                        if ( temp[group][1] == temp[compareGroup][0] || temp[group][1] == temp[compareGroup][1] ) 
                        {
                            //second element is redundant
                            redundant2 = true;
                            //console.log( "R2 IS TRUE" );
                        }
                    }
                }
            }

            //both elements were redundant
            if ( redundant1 && redundant2 ) 
            {
                //console.log(`Element ${group} is redundant`);
                //shift all elements starting from group to the left
                //this removes the group from the array
                for ( var i = group; i < temp.length - 1; i++ ) 
                {
                    //console.log(temp[i]);
                    //console.log(temp[Number(i) + 1]);
                    var next = i + 1;
                    //console.log(`Swapping ${temp[i]} with ${temp[Number(i) + 1]}`);
                    temp[i] = temp[Number(i) + 1];
                }
                
                //set final element to 0,0 since it will be listed twice
                temp[temp.length-1] = [0,0];
            }
        }
    }
    
    //hand back modified local array
    return temp;
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
    //console.log(JSON.stringify(equationArray));
    //console.log( countElementsInEquationArray() );
}

// Adds given pair to three variable equation. More modular.
function addPairsToThreeVarEquation( twoDimArray )
{
    var firstValue;
    var secondValue;
    
    for ( var index = 0; index < twoDimArray.length - 1; index++ ) 
    {
        firstValue = twoDimArray[index][0];
        secondValue = twoDimArray[index][1];
        
        if ( firstValue == 0 && secondValue == 1 )
        {
            addToEquationArray( "A'B'" );
        }

        else if ( firstValue == 0 && secondValue == 3 )
        {
            addToEquationArray( "A'C'" );
        }

        else if ( firstValue == 0 && secondValue == 4 )
        {
            addToEquationArray( "B'C'" );
        }

        else if ( firstValue == 1 && secondValue == 2 )
        {
            addToEquationArray( "A'C" );
        }

        else if ( firstValue == 1 && secondValue == 5 )
        {
            addToEquationArray( "B'C" );
        }

        else if ( firstValue == 2 && secondValue == 3 )
        {
            addToEquationArray( "A'B" );
        }

        else if ( firstValue == 2 && secondValue == 6 )
        {
            addToEquationArray( "BC" );
        }

        else if ( firstValue == 3 && secondValue == 7 )
        {
            addToEquationArray( "BC'" );
        }

        else if ( firstValue == 4 && secondValue == 5 )
        {
            addToEquationArray( "AB'" );
        }

        else if ( firstValue == 4 && secondValue == 7 )
        {
            addToEquationArray( "AC'" );
        }

        else if ( firstValue == 5 && secondValue == 6 )
        {
            addToEquationArray( "AC" );
        }

        else if ( firstValue == 6 && secondValue == 7 )
        {
            addToEquationArray( "AB" );
        }
    }
}

// Adds given quad pair to group array. More modular.
function addQuadToGroupArray( firstIndex, secondIndex, thirdIndex, fourthIndex )
{
    quads += 1;
    groupingArray[ firstIndex ] = array[ firstIndex ];
    groupingArray[ secondIndex ] = array[ secondIndex ];
    groupingArray[ thirdIndex ] = array[ thirdIndex ];
    groupingArray[ fourthIndex ] = array[ fourthIndex ];
    canGroup = 1;
    console.log( "\nQuad formed: " + firstIndex + ", " + secondIndex + ", " + thirdIndex + ", " + fourthIndex + ".\n");
    drawEquationQuadRectangles( drawRectangles, firstIndex, secondIndex, thirdIndex, fourthIndex );
    addQuadToThreeVarEquation( firstIndex, secondIndex, thirdIndex, fourthIndex );
}

// Adds given octet to group array. More modular.
function addOctetToGroupArray( firstIndex, secondIndex, thirdIndex, fourthIndex, fifthIndex,
                                  sixthIndex, seventhIndex, eighthIndex )
{
    octects += 1;
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
    drawEquationOctetRectangles( drawRectangles, firstIndex, secondIndex, thirdIndex, fourthIndex, fifthIndex,
    sixthIndex, seventhIndex, eighthIndex );
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
    var isRight = 0;
    addInputsToUserArray();
    
    for ( var index = 0; index < array.length; index++ )
    {
        //console.log( "Checking " + userArray[index] + " with " + array[index] );
        if ( Boolean( userArray[index] != array[index] ) )
        {
            isRight = -1;
        }
    }
    
    console.log( isRight );
    
    if ( isRight == 0 )
    {
        userStars += starsGiven;
        passUserStars( userStars );
        
        if ( Boolean( window.location.href.indexOf("moduleOneQuestion1") > -1 ) )
        {
            window.location.href = "moduleOneQuestion2.html";
        }
        
        else if ( Boolean( window.location.href.indexOf("moduleOneQuestion4") > -1 ) )
        {
            window.location.href = "moduleOneQuestion5.html";
        }
        
        else if ( Boolean( window.location.href.indexOf("moduleOneQuestion5") > -1 ) )
        {
            window.location.href = "moduleOneQuestion6.html";
        }
        
        else if ( Boolean( window.location.href.indexOf("moduleOneQuestion6") > -1 ) )
        {
            window.location.href = "moduleOneQuestion7.html";
        }
        
        else if ( window.location.href.indexOf("pracMode3VarTruthTableTranslation") > -1 || window.location.href.indexOf("pracMode3VarDCTruthTableTranslation") > -1 || window.location.href.indexOf("pracMode4VarTruthTableTranslation") > -1 || window.location.href.indexOf("pracMode4VarDCTruthTableTranslation") > -1 )
        {
            alert( "Congrats, you got the answer right!" );
            window.location.href = "moduleOneQuestionPicker.html";    
        }
    }
        
    else
    {
        if ( window.location.href.indexOf("pracMode3VarTruthTableTranslation") > -1 || window.location.href.indexOf("pracMode3VarDCTruthTableTranslation") > -1 || window.location.href.indexOf("pracMode4VarTruthTableTranslation") > -1 || window.location.href.indexOf("pracMode4VarDCTruthTableTranslation") > -1 )
        {
            document.getElementById("incorrectAnswerMessage").innerHTML = "Incorrect, please try again";  
        }
        
        else
        {
            document.getElementById("incorrectAnswerMessage").innerHTML = "Incorrect, please try again";
            attemptsLeft = decreaseAttempts( attemptsLeft );
        }
    }
    
    return 0;
}

function compareTwo2DArrays( arrayOne, arrayTwo )
{
    var number = 0;
    var arrayOneLength = 0;
    var arrayTwoLength = 0;
    var index = 0;

    // First you would check lengths of both 2DArrays
    while ( arrayOne[index][0] != 0 || arrayOne[index][1] != 0 )
    {
        arrayOneLength += 1;
        index++;
    }
    
    index = 0;
    
    while ( arrayTwo[index][0] != 0 || arrayTwo[index][1] != 0 )
    {
        arrayTwoLength += 1;
        index++;
    }
    
    console.log( "Array one length: " + arrayOneLength );
    console.log( "Array two length: " + arrayTwoLength );
    
    // If they're the same then you can compare both arrays
    if ( arrayOneLength == arrayTwoLength )
    {
        // You can choose arrayOneLength or arrayTwoLength since both are the same
        for ( var outerGroup = 0; outerGroup < arrayOneLength; outerGroup++ )
        {
            for ( var innerGroup = 0; innerGroup < arrayTwoLength; innerGroup++ )
            {
                //console.log( "Comparing: " + arrayOne[outerGroup] + " with " + arrayTwo[innerGroup] );
                if ( arrayOne[outerGroup][0] == arrayTwo[innerGroup][0] && arrayOne[outerGroup][1] == arrayTwo[innerGroup][1]  )
                {
                    //console.log( "MATCH" );
                    number++;
                }
            }
        }
        
        if ( number == arrayOneLength )
        {
            number = 1;
        }
    }
    
    return number;
}

function checkGroupings()
{       
    var length = getLengthOfArray();
    //console.log( "ARE SAME: " + both2DArraysTheSame );
    
    if ( length == 8 )
    {
        var isRight = 0;
        var both2DArraysTheSame = compareTwo2DArrays( twoDArray, user2DArray );
        for ( var index = 0; index < groupingArray.length; index++ )
        {
            if ( drawingArray[ index ] != groupingArray[ index ] )
            {
                isRight = 1;
            }
        }

        //console.log( isRight );

        if ( isRight == 0 && both2DArraysTheSame )
        {
            userStars += starsGiven;
            passUserStars( userStars );

            if ( window.location.href.indexOf("moduleOneQuestion2") > -1 )
            {
                window.location.href = "moduleOneQuestion3.html";
            }

            else if ( window.location.href.indexOf("moduleOneQuestion7") > -1 )
            {
                window.location.href = "moduleOneQuestion8.html";
            }

            else if ( window.location.href.indexOf("pracMode3VarGrouping") > -1 || window.location.href.indexOf("pracMode3VarDCGrouping") > -1 )
            {
                alert( "Congrats, you got the answer right!" );
                window.location.href = "moduleOneQuestionPicker.html";   
            }
        }

        else
        {
            if ( window.location.href.indexOf("pracMode3VarGrouping") > -1 || window.location.href.indexOf("pracMode3VarDCGrouping") > -1 )
            {
                document.getElementById("incorrectAnswerMessage").innerHTML = "Incorrect, please try again";  
            }

            else
            {
                document.getElementById("incorrectAnswerMessage").innerHTML = "Incorrect, please try again";
                //setDrawingArray();
                //resetTwoDArray( user2DArray );
                attemptsLeft = decreaseAttempts( attemptsLeft );
            }
        }
    }
    
    // For 4 variable
    else if ( length == 16 )
    {
        var sixteenArraysMatch = checkIfSixteenArraysMatch( sixteenArray, sixteenDrawingArray );
        
        if ( sixteenArraysMatch )
        {
            alert( "CORRECT!" );
        }
        
        else
        {
            alert( "INCORRECT!" );
        }
    }
    
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
            if ( window.location.href.indexOf("moduleOneQuestion3") > -1 )
            {
                window.location.href = "moduleOneQuestion4.html";
            }
            
            else if ( window.location.href.indexOf("moduleOneQuestion8") > -1 )
            {
                 window.location.href = "moduleOneQuestion9.html";    
            }
            
            else if ( window.location.href.indexOf("pracMode3VarEquationWriting") > -1 || window.location.href.indexOf("pracMode3VarDCEquationWriting") > -1 )
            {
                alert( "Congrats, you got the answer right!" );
                window.location.href = "moduleOneQuestionPicker.html";   
            }
        }
        
        else
        {
            if ( window.location.href.indexOf("pracMode3VarEquationWriting") > -1 || window.location.href.indexOf("pracMode3VarDCEquationWriting") > -1 )
            {
                document.getElementById("incorrectAnswerMessage").innerHTML = "Incorrect, please try again";  
            }
            
            else
            {
                document.getElementById("incorrectAnswerMessage").innerHTML = "Incorrect, please try again";
                attemptsLeft = decreaseAttempts( attemptsLeft );
            }
        }
    }
    
    else
    {
        if ( window.location.href.indexOf("pracMode3VarEquationWriting") > -1 || window.location.href.indexOf("pracMode3VarDCEquationWriting") > -1 )
        {
            document.getElementById("incorrectAnswerMessage").innerHTML = "Incorrect, please try again";  
        }
            
        else
        {
            document.getElementById("incorrectAnswerMessage").innerHTML = "Incorrect, please try again";
            attemptsLeft = decreaseAttempts( attemptsLeft );
        }
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

function resetGroupings()
{
    var length = getLengthOfArray();
    document.getElementById("incorrectAnswerMessage").innerHTML = "";
    document.getElementById("hint").innerHTML = "";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    clearRectangleArray();
    
    if ( length == 8 )
    {
        setDrawingArray();
        resetTwoDArray( user2DArray );
    }
    
    else if ( length == 16 )
    {
        sixteenDrawingArray = resetDrawingArray( sixteenDrawingArray );
        console.log( "SIXTEEN DRAWING ARRAY RESET: " + JSON.stringify( sixteenDrawingArray ) );
    }
}

function resetEquation()
{
    document.getElementById("userEquation").value = "";
    document.getElementById("incorrectAnswerMessage").innerHTML = "";
    document.getElementById("hint").innerHTML = "";
}

function clearRectangleArray()
{
    var index = 0;
    
    while ( rectangleArray[ index ] != null )
    {
        rectangleArray[ index ] = null;
        index++;
    }
}

function resetTwoDArray( arrayToReset )
{
    for ( var index = 0; index < arrayToReset.length - 1; index++ )
    {
        arrayToReset[index] = [0,0];
    }
}

/////////////////////////////// Hint functions go here /////////////////////////////////////////
function receiveHint()
{
    if ( window.location.href.indexOf("moduleOneQuestion1") > -1 || window.location.href.indexOf("moduleOneQuestion4") > -1 || window.location.href.indexOf("moduleOneQuestion5") > -1 || window.location.href.indexOf("moduleOneQuestion6") > -1 || window.location.href.indexOf("pracMode3VarTruthTableTranslation") > -1 || window.location.href.indexOf("pracMode3VarDCTruthTableTranslation") > -1 || window.location.href.indexOf("pracMode4VarTruthTableTranslation") > -1 || window.location.href.indexOf("pracMode4VarDCTruthTableTranslation") > -1 )
    {
        document.getElementById("hint").innerHTML = "0s and 1s are only needed...";
    }
    
    else if ( window.location.href.indexOf("moduleOneQuestion2") > -1 || window.location.href.indexOf("moduleOneQuestion7") > -1 || window.location.href.indexOf("pracMode3VarGrouping") > -1 || window.location.href.indexOf("pracMode3VarDCGrouping") > -1 || window.location.href.indexOf("moduleOneQuestion9") > -1 )
    {
        document.getElementById("hint").innerHTML = "0s should never be grouped...";
    }
    
    else if ( window.location.href.indexOf("moduleOneQuestion3") > -1 || window.location.href.indexOf("pracMode3VarEquationWriting") > -1 || window.location.href.indexOf("pracMode3VarDCEquationWriting") > -1 )
    {
        document.getElementById("hint").innerHTML = "Completely simplify answer...";
    }
    
    return 0;
}

/////////////////////////////// Decrease attemmpts go here /////////////////////////////////////////
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
        
        for ( var index = 1; index <= 15; index++ )
        {
            if ( Boolean( window.location.href.indexOf("moduleOneQuestion" + index ) > -1 ) )
            {
                if ( index < 12 )
                {
                    var nextPage = index + 1;
                    window.location.href = "moduleOneQuestion" + nextPage + ".html";
                }
                
                else
                {
                    window.location.href = "moduleOneQuestionsComplete.html"
                }
            }
        }
    
        /*alert( " Star Score: " + userStars.toString() + "/" + moduleOneMaxStars.toString() );*/
    }
    
    return number;
}

/////////////////////////////// Only one function needed for score /////////////////////////////////////////
function showScore()
{
    totalUserStars += starsGiven;
    passUserStars( totalUserStars );
    
    if ( totalUserStars >= 21 )
    {
        alert( "MODULE STAR SCORE: " + totalUserStars + "/" + moduleOneMaxStars.toString() + "\n\n\nYou passed Karnaugh Maps!!");
    }
    
    else
    {
        alert( "MODULE STAR SCORE: " + totalUserStars + "/" + moduleOneMaxStars.toString() + "\n\n\nModule failed. Try again.");
    }
}