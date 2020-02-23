var equationArray = new Array(15);
var canGroup = 0;

var octects = 0;
var quads =  0;
var pairs = 0;

var canvas = document.getElementById('userCanvas');
var ctx = canvas.getContext('2d');
var rect = {};
var drag = false;
var canDraw = 0;

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
    
    swapUserArrayIndices( 2, 3 );
    swapUserArrayIndices( 6, 7 );
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
    //console.log( "X: " +  + " Y: " + coord.y );
    console.log(JSON.stringify(groupingArray));
    console.log(JSON.stringify(drawingArray));
}

function addRectangleToArray( rectangle )
{
    var index = 0;
    
    if ( canDraw == 1 )
    {
        while ( rectangleArray[ index ] != null )
        {
            //console.log(rectangleArray[ index ] );
            index++;
        }
    
        rectangleArray[index] = rectangle;  
        console.log(JSON.stringify(rectangleArray));
    }
}

// Adds given pair to drawing array. More modular.
function addPairToDrawingArray( firstIndex, secondIndex )
{
    if ( drawingArray[ firstIndex ] != 1 || drawingArray[ secondIndex ] != 1 && octects == 0 && quads == 0 )
    {
        drawingArray[ firstIndex ] = 1;
        drawingArray[ secondIndex ] = 1;
        canDraw = 1;
        pairs -= 1;
    }
    
    else
    {
        canDraw = 0;
    }
    
    return 0;
}

// Adds given quad to drawing array. More modular.
function addQuadToDrawingArray( firstIndex, secondIndex, thirdIndex, fourthIndex )
{
    if ( drawingArray[ firstIndex ] != 1 || drawingArray[ secondIndex ] != 1 || drawingArray[ thirdIndex ] != 1 || drawingArray[ fourthIndex ] != 1 && octects == 0 )
    {
        drawingArray[ firstIndex ] = 1;
        drawingArray[ secondIndex ] = 1;
        drawingArray[ thirdIndex ] = 1;
        drawingArray[ fourthIndex ] = 1;
        canDraw = 1;
        quads -= 1;
    }
    
    else
    {
        canDraw = 0;
    }
    
    return 0;
}

// Adds given octect to drawing array. More modular.
function addOctetToDrawingArray( firstIndex, secondIndex, thirdIndex, fourthIndex, fifthIndex, sixthIndex, seventhIndex, eighthIndex )
{
    if ( drawingArray[ firstIndex ] != 1 || drawingArray[ secondIndex ] != 1 || drawingArray[ thirdIndex ] != 1 || drawingArray[ fourthIndex ] != 1 || drawingArray[ fifthIndex ] != 1 || drawingArray[ sixthIndex ] != 1 || drawingArray[ seventhIndex ] != 1 || drawingArray[ eighthIndex ] != 1 )
    {
        drawingArray[ firstIndex ] = 1;
        drawingArray[ secondIndex ] = 1;
        drawingArray[ thirdIndex ] = 1;
        drawingArray[ fourthIndex ] = 1;
        drawingArray[ fifthIndex ] = 1;
        drawingArray[ sixthIndex ] = 1;
        drawingArray[ seventhIndex ] = 1;
        drawingArray[ eighthIndex ] = 1;
        canDraw = 1;
        octects -= 1;
    }
    
    else
    {
        canDraw = 0;
    }
    
    return 0;
}

// This formats rectangle as a user groups them
function formatRectangle( rectangle, event )
{
    // Coordinates
    var x = event.clientX;
    var y = event.clientY;
    
    // First four if statements is for vertical pair grouping
    if ( x > 575 && x < 625 && y > 300 && y < 350 && rectangle.w > 5 && rectangle.w < 35 && rectangle.h > 70 && rectangle.h < 80 )
    {
        temp = { startX: 110, startY: 110, w: 30, h : 80 };
        addPairToDrawingArray( 0, 4 );
        addRectangleToArray( temp );
        
    }
    
    else if ( x > 625 && x < 675 && y > 300 && y < 350 && rectangle.w > 5 && rectangle.w < 35 && rectangle.h > 70 && rectangle.h < 80 )
    {
        temp = { startX: 160, startY: 110, w: 30, h : 80 };
        addPairToDrawingArray( 1, 5 );
        addRectangleToArray( temp );
    }

    else if ( x > 675 && x < 725 && y > 300 && y < 350 && rectangle.w > 5 && rectangle.w < 35 && rectangle.h > 70 && rectangle.h < 80 )
    {
        temp = { startX: 210, startY: 110, w: 30, h : 80 };
        addPairToDrawingArray( 2, 6 );
        addRectangleToArray( temp );
    }
    
    else if ( x > 725 && x < 775 && y > 300 && y < 350 && rectangle.w > 5 && rectangle.w < 35 && rectangle.h > 70 && rectangle.h < 80 )
    {
        temp = { startX: 260, startY: 110, w: 30, h : 80 };
        addPairToDrawingArray( 3, 7 );
        addRectangleToArray( temp );
    }
    
    // Next eight if statements is for horizontal pair grouping
        // First three is top row
    else if ( x > 575 && x < 675 && y > 250 && y < 300 && rectangle.w > 35 && rectangle.w < 85 && rectangle.h > 20 && rectangle.h < 30  )
    {
        temp = { startX: 110, startY: 110, w: 80, h : 30 };
        addPairToDrawingArray( 0, 1 );
        addRectangleToArray( temp );
    }
    
    else if ( x > 625 && x < 725 && y > 250 && y < 300 && rectangle.w > 35 && rectangle.w < 85 && rectangle.h > 20 && rectangle.h < 30 )
    {
        temp = { startX: 160, startY: 110, w: 80, h : 30 };
        addPairToDrawingArray( 1, 2 );
        addRectangleToArray( temp );
    }
    
    else if ( x > 675 && x < 775 && y > 250 && y < 300 && rectangle.w > 35 && rectangle.w < 85 && rectangle.h > 20 && rectangle.h < 30 )
    {
        temp = { startX: 210, startY: 110, w: 80, h : 30 };
        addPairToDrawingArray( 2, 3 );
        addRectangleToArray( temp );
    }
    
        // Next three is bottom row
    else if ( x > 575 && x < 675 && y > 300 && y < 350 && rectangle.w > 35 && rectangle.w < 85 && rectangle.h > 20 && rectangle.h < 30 )
    {
        temp = { startX: 110, startY: 160, w: 80, h : 30 };
        addPairToDrawingArray( 4, 5 );
        addRectangleToArray( temp );
    }
    
    else if ( x > 625 && x < 725 && y > 300 && y < 350 && rectangle.w > 35 && rectangle.w < 85 && rectangle.h > 20 && rectangle.h < 30 )
    {
        temp = { startX: 160, startY: 160, w: 80, h : 30 };
        addPairToDrawingArray( 5, 6 );
        addRectangleToArray( temp );
    }
    
    else if ( x > 675 && x < 775 && y > 300 && y < 350 && rectangle.w > 35 && rectangle.w < 85 && rectangle.h > 20 && rectangle.h < 30 )
    {
        temp = { startX: 210, startY: 160, w: 80, h : 30 };
        addPairToDrawingArray( 6, 7 );
        addRectangleToArray( temp );
    }
    
        // Next two are the wraps
            // Top Row
    else if ( x > 540 && x < 574 && y > 250 && y < 300 && rectangle.w > 5 && rectangle.w < 33 && rectangle.h > 5 && rectangle.h < 25 )
    {
        // Top row wrap
        addPairToDrawingArray( 0, 3 );
        temp = { startX: 100, startY: 110, w: 40, h : 30 };
        addRectangleToArray( temp );
        temp = { startX: 260, startY: 110, w: 40, h : 30 };
        addRectangleToArray( temp );
    }
            // Bottom row
    else if ( x > 540 && x < 574 && y > 300 && y < 350 && rectangle.w > 5 && rectangle.w < 33 && rectangle.h > 5 && rectangle.h < 25 )
    {
        // Bottom row wrap
        addPairToDrawingArray( 4, 7 );
        temp = { startX: 100, startY: 160, w: 40, h : 30 };
        addRectangleToArray( temp );
        temp = { startX: 260, startY: 160, w: 40, h : 30 };
        addRectangleToArray( temp );
    }
    
    // Next 3 if statements is for vertical quad grouping
    else if ( x > 575 && x < 675 && y > 250 && y < 350 && rectangle.w > 70 && rectangle.w < 85 && rectangle.h > 70 && rectangle.h < 85 )
    {
        // Bottom row wrap
        temp = { startX: 110, startY: 110, w: 80, h : 80 };
        addQuadToDrawingArray( 0, 1, 4, 5 );
        addRectangleToArray( temp );
    }
    
    else if ( x > 625 && x < 725 && y > 250 && y < 350 && rectangle.w > 70 && rectangle.w < 85 && rectangle.h > 70 && rectangle.h < 85 )
    {
        // Bottom row wrap
        temp = { startX: 160, startY: 110, w: 80, h : 80 };
        addQuadToDrawingArray( 1, 2, 5, 6 );
        addRectangleToArray( temp );
    }
    
     else if ( x > 675 && x < 775 && y > 250 && y < 350 && rectangle.w > 70 && rectangle.w < 85 && rectangle.h > 70 && rectangle.h < 85 )
    {
        // Bottom row wrap
        temp = { startX: 210, startY: 110, w: 80, h : 80 };
        addQuadToDrawingArray( 2, 3, 6, 7 );
        addRectangleToArray( temp );
    }
    
    // Next 2 if statements is for horizontal quad grouping
    else if ( x > 575 && x < 775 && y > 250 && y < 300 && rectangle.w > 162 && rectangle.w < 170 && rectangle.h > 5 && rectangle.h < 50 )
    {
        // Bottom row wrap
        temp = { startX: 110, startY: 110, w: 180, h : 30 };
        addQuadToDrawingArray( 0, 1, 2, 3 );
        addRectangleToArray( temp );
    }
    
    else if ( x > 575 && x < 775 && y > 300 && y < 350 && rectangle.w > 162 && rectangle.w < 170 && rectangle.h > 5 && rectangle.h < 50 )
    {
        // Bottom row wrap
        temp = { startX: 110, startY: 160, w: 180, h : 30 };
        addQuadToDrawingArray( 4, 5, 6, 7 );
        addRectangleToArray( temp );
    }
    
    // Next if statement is for wrap quad grouping
    else if ( x > 550 && x < 570 && y > 250 && y < 350 && rectangle.w > 5 && rectangle.w < 33 && rectangle.h > 70 && rectangle.h < 80 )
    {
        addQuadToDrawingArray( 0, 3, 4, 7 );
        temp = { startX: 100, startY: 110, w: 40, h : 80 };
        addRectangleToArray( temp );
        temp = { startX: 260, startY: 110, w: 40, h : 80 };
        addRectangleToArray( temp );
    }
    
    // Octal group
    else if ( x > 575 && x < 775 && y > 250 && y < 350 && rectangle.w > 150 && rectangle.w < 190 && rectangle.h > 70 && rectangle.h < 80 )
    {
        temp = { startX: 110, startY: 110, w: 180, h : 80 };
        addOctetToDrawingArray( 0, 1, 2, 3, 4, 5, 6, 7 );
        addRectangleToArray( temp );
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
        ctx.strokeRect( rectangleArray[index].startX, rectangleArray[index].startY, rectangleArray[index].w, rectangleArray[index].h );
        index++;
    }
}

function mouseMove(e) 
{    
    if ( drag ) 
    {
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

// Used for finding grouping grid
function showCoords( event ) 
{
    var x = event.clientX;
    var y = event.clientY;
    console.log( "X coords: " + x + ", Y coords: " + y );
    
    return 0;
}

// This function can be used for grouping but I haven't implemented it yet.
function generateColor()
{
    var index = 0
    var letters = "0123456789ABCDEF"; 
    var color = '#'; 

    for ( var index = 0; index < 6; index++ ) 
    {
       color += letters[ ( Math.floor( Math.random() * 16 ) ) ]; 
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
        console.log( "ARRAY[0] " + array[0] + ", ARRAY[1] " + array[1] );
        if ( array[0] != 1 || array[1] != 1 )
        {
            array[0] = 1;
            array[1] = 1;
        }
        
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

    // For a 3 variable truth table: First loop is for Horizontal pairs, second loop is for Vertical pairs
    if ( length == 8 )
    {        
        var index = 0;
    
        // Wrap conditions
        checkTwoArrayIndicesIfOneAndNotInGroupArray( 0, 3 );
        checkTwoArrayIndicesIfOneAndNotInGroupArray( 4, 7 );
        
        // Vertical groupings
        while ( index < length )
        {
            if ( index == 0 || index == 1 || index == 2 || index == 3 )
            {
                checkTwoArrayIndicesIfOneAndNotInGroupArray( index, index + 4 );
            }
            
            index++;
        }
        
        // Reset index
        index = 0;
        
        // Horizontal groupings
        while ( index < length )
        {
            if ( index == 0 || index == 1 || index == 2 || index == 4 || index == 5 || index == 6 )
            {
                checkTwoArrayIndicesIfOneAndNotInGroupArray( index, index + 1 );
            }
            
            index++;
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
    pairs += 1;
    groupingArray[ firstIndex ] = array[ firstIndex ];
    groupingArray[ secondIndex ] = array[ secondIndex ];
    canGroup = 1;
    console.log( "\nPair formed: " + firstIndex + ", " + secondIndex + ".\n" );
    twoDArray = addPairToTwoDArray( firstIndex, secondIndex );
    //addPairToThreeVarEquation( firstIndex, secondIndex );
}

// Creates 2D array 
function create2DArray()
{
    // Loop to create 2D array using 1D array 
    for ( var index = 0; index < twoDArray.length; index++ ) 
    { 
        twoDArray[index] = new Array(2); 
    } 
  
    // Loop to initilize 2D array elements. 
    for (var i = 0; i < twoDArray.length; i++) 
    { 
        for (var j = 0; j < 2; j++) 
        { 
            twoDArray[i][j] = 0; 
        } 
    } 
}

// Adds pair to twoDArray
function addPairToTwoDArray( firstIndex, secondIndex )
{
    var index = 0; 
    
    while ( twoDArray[ index ][0] != 0 || twoDArray[ index ][1] != 0  )
    {
        index++;
    }
    
    twoDArray[ index ][ 0 ] = firstIndex;
    twoDArray[ index ][ 1 ] = secondIndex;
    
    console.log( "Stopped at index: " + index );
    console.log( JSON.stringify( twoDArray ) );
    
    return twoDArray;
}

// takes an array of pairs and returns the array with no redundant groups
function checkForRedundancies( pairsArray ) 
{
    var temp = pairsArray;
    var redundant1; //boolean for first element
    var redundant2; //boolean for second element

    //loop through all groups
    for ( group in temp ) 
    {
        //console.log( "FIRST NUM: " + pairsArray[group][0] + " SECOND NUM: " + pairsArray[group][1] );
        
        if ( temp[group][0] != 0 ) 
        {
            //reset redundant when checking a new group
            redundant1 = false;
            redundant2 = false;
            
            //loop through all groups to compare to
            for ( compareGroup in temp ) 
            {
                //console.log("Comparing groups " + group + " " + compareGroup);
                // do not compare to self
                if ( compareGroup != group ) 
                {
                    //console.log("Comparing " + temp[group][0] + " with " + temp[compareGroup][0] + " and " + temp[compareGroup][1]);

                    // if first element matches either element in compare
                    if ( temp[group][0] == temp[compareGroup][0] || temp[group][0] == temp[compareGroup][1] ) 
                    {
                        //console.log("1 is redundant");
                        //first element is redundant
                        redundant1 = true;
                        console.log( "R1 IS TRUE" );
                    }
                    //console.log("Comparing " + temp[group][1] + " with " + temp[compareGroup][0] + " and " + temp[compareGroup][1]);

                    //if second element matches either element in compare
                    if ( temp[group][1] == temp[compareGroup][0] || temp[group][1] == temp[compareGroup][1] ) 
                    {
                        //console.log("2 is redundant");
                        //second element is redundant
                        redundant2 = true;
                        console.log( "R2 IS TRUE" );
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
        console.log( "Checking " + userArray[index] + " with " + array[index] );
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
        
        if ( Boolean( window.location.href.indexOf("moduleOneQuestionOne") > -1 ) )
        {
            window.location.href = "moduleOneQuestionTwo.html";
        }
        
        else if ( Boolean( window.location.href.indexOf("moduleOneQuestionFour") > -1 ) )
        {
            showScore();
            window.location.href = "moduleOneQuestionFive.html";
        }
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
    var isRight = 0;
    
    for ( var index = 0; index < groupingArray.length; index++ )
    {
        if ( drawingArray[ index ] != groupingArray[ index ] )
        {
            isRight = 1;
        }
    }
    
    console.log( isRight );
    
    if ( isRight == 0 )
    {
        userStars += starsGiven;
        passUserStars( userStars );
        
        if ( Boolean( window.location.href.indexOf("moduleOneQuestionTwo") > -1 ) )
        {
            window.location.href = "moduleOneQuestionThree.html";
        }
    }
        
    else
    {
        document.getElementById("incorrectAnswerMessage").innerHTML = "Incorrect, please try again";
        setDrawingArray();
        attemptsLeft = decreaseAttempts( attemptsLeft );
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
           window.location.href = "moduleOneQuestionFour.html";
        }
        
        else
        {
            document.getElementById("incorrectAnswerMessage").innerHTML = "Incorrect, please try again";
            attemptsLeft = decreaseAttempts( attemptsLeft );
        }
    }
    
    // If no groups formed
    else if ( canGroup == 0 && userInput == "" )
    {
        window.location.href = "moduleOneQuestionFive.html";
    }
    
    else
    {
        document.getElementById("incorrectAnswerMessage").innerHTML = "Incorrect, please try again";
        attemptsLeft = decreaseAttempts( attemptsLeft );
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
    document.getElementById("incorrectAnswerMessage").innerHTML = "";
    document.getElementById("hint").innerHTML = "";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    clearRectangleArray();
    setDrawingArray();
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

/////////////////////////////// Hint functions go here /////////////////////////////////////////
function receiveHint()
{
    if ( Boolean( window.location.href.indexOf("moduleOneQuestionOne") > -1 ) )
    {
        document.getElementById("hint").innerHTML = "0s and 1s are only needed...";
    }
    
    else if ( Boolean( window.location.href.indexOf("moduleOneQuestionTwo") > -1 ) )
    {
        document.getElementById("hint").innerHTML = "0s should never be grouped...";
    }
    
    else if ( Boolean( window.location.href.indexOf("moduleOneQuestionThree") > -1 ) )
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
        
        if ( Boolean( window.location.href.indexOf("moduleOneQuestionOne") > -1 ) )
        {
            window.location.href = "moduleOneQuestionTwo.html";
        }
        
        else if ( Boolean( window.location.href.indexOf("moduleOneQuestionTwo") > -1 ) )
        {
            window.location.href = "moduleOneQuestionThree.html";
        }
        
        else if ( Boolean( window.location.href.indexOf("moduleOneQuestionThree") > -1 ) )
        {
            window.location.href = "moduleOneQuestionFour.html";
        }
        
        else if ( Boolean( window.location.href.indexOf("moduleOneQuestionFour") > -1 ) )
        {
            window.location.href = "moduleOneQuestionFive.html";
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
    
    if ( totalUserStars >= 8 )
    {
        alert( "MODULE STAR SCORE: " + totalUserStars + "/" + moduleOneMaxStars.toString() + "\n\n\nYou passed Karnaugh Maps!!");
    }
    
    else
    {
        alert( "MODULE STAR SCORE: " + totalUserStars + "/" + moduleOneMaxStars.toString() + "\n\n\nModule failed. Try again.");
    }
}