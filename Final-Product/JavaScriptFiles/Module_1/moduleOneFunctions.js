var equationArray = new Array(1);
var octects = 0;
var quads =  0;
var pairs = 0;

var canvas = document.getElementById('userCanvas');
var rect = {};
var drag = false;

var rectangleArray = new Array( 1 );
var drawingArray = new Array( 1 );

var student_id = sessionStorage.getItem('student_id');
if( student_id == null){
    alert("You are not logged in!");
    window.location.href = "../../index.html"; 
}
var mistakesMade = 0;
setupSave();

///// Timer stuff /////////
var maxTime = 60 * 5;
var minutes;
var seconds;

///// Progress Bar /////////
var progress = 0;

setTimeout( enableButton, 3000 );

function getTimeTaken( minutesPassed, secondsPassed )
{
    var minuteCounter = 0;
    var secondCounter = 0;
    var total = 0;
    
    while ( minutesPassed != 5 )
    {
        while ( secondsPassed != 60 )
        {
            secondCounter += 1;
            secondsPassed++;
        }
        
        minutesPassed += 1;
        
        if ( minutesPassed != 5 )
        {
            minuteCounter += 1;
        }
    }
    
    total = minuteCounter + " minutes " + secondCounter + " seconds ";
    return total;
}
    
///// Timer stuff /////////

// Creates user equation for truth table translation inputs
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
    formatRectangle( rect, event );
    ctx.clearRect( 0, 0, canvas.width, canvas.height);
    drawRectangles();
}

function addRectangleToArray( rectangle )
{
    var index = 0;
    
    while ( rectangleArray[ index ] != null )
    {
        index++;
    }

    rectangleArray[index] = rectangle;  
}

// Adds to drawing array. More modular.
function addToDrawingArray( tempPassed, arrayPassed, indexPassed, drawingArrayPassed )
{
    addRectangleToArray( tempPassed );
    indexPassed = createArraySpace( drawingArrayPassed );
    drawingArrayPassed[indexPassed] = arrayPassed;
    drawingArrayPassed = removeDuplicates( drawingArrayPassed );
}

// This formats rectangle as a user groups them
function formatRectangle( rectangle, event )
{
    // Coordinates
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    var length = getLengthOfArray();
    var rectColor = generateColor();
    var arrayToBeAdded;
    
    if ( length == 8 )
    {
        // First four if statements is for vertical pair grouping
        if ( x > 100 && x < 150 && y > 100 && y < 200 && rectangle.w > 5 && rectangle.w < 47 && rectangle.h > 52 && rectangle.h < 95 )
        {
            // Creates spaces and adds to drawing array
            temp = { startX: 110, startY: 110, w: 30, h : 80, color: rectColor };
            arrayToBeAdded = [ 0, 4 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }

        else if ( x > 150 && x < 200 && y > 100 && y < 200 && rectangle.w > 5 && rectangle.w < 47 && rectangle.h > 52 && rectangle.h < 95 )
        {
            temp = { startX: 160, startY: 110, w: 30, h : 80, color: rectColor };
            arrayToBeAdded = [ 1, 5 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }

        else if ( x > 200 && x < 250 && y > 100 && y < 200 && rectangle.w > 5 && rectangle.w < 47 && rectangle.h > 52 && rectangle.h < 95 )
        {
            temp = { startX: 210, startY: 110, w: 30, h : 80, color: rectColor };
            arrayToBeAdded = [ 2, 6 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }

        else if ( x > 250 && x < 300 && y > 100 && y < 200 && rectangle.w > 5 && rectangle.w < 47 && rectangle.h > 52 && rectangle.h < 95 )
        {
            temp = { startX: 260, startY: 110, w: 30, h : 80, color: rectColor };
            arrayToBeAdded = [ 3, 7 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }

        // Next eight if statements is for horizontal pair grouping
            // First three is top row
        else if ( x > 100 && x < 200 && y > 100 && y < 150 && rectangle.w > 25 && rectangle.w < 98 && rectangle.h > 15 && rectangle.h < 48  )
        {
            temp = { startX: 110, startY: 110, w: 80, h : 30, color: rectColor };
            arrayToBeAdded = [ 0, 1 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }

        else if ( x > 150 && x < 250 && y > 100 && y < 150 && rectangle.w > 25 && rectangle.w < 98 && rectangle.h > 15 && rectangle.h < 48 )
        {
            temp = { startX: 160, startY: 110, w: 80, h : 30, color: rectColor };
            arrayToBeAdded = [ 1, 2 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }

        else if ( x > 200 && x < 300 && y > 100 && y < 150 && rectangle.w > 25 && rectangle.w < 98 && rectangle.h > 15 && rectangle.h < 48 )
        {
            temp = { startX: 210, startY: 110, w: 80, h : 30, color: rectColor };
            arrayToBeAdded = [ 2, 3 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }

            // Next three is bottom row
        else if ( x > 100 && x < 200 && y > 150 && y < 200 && rectangle.w > 25 && rectangle.w < 98 && rectangle.h > 15 && rectangle.h < 48 )
        {
            temp = { startX: 110, startY: 160, w: 80, h : 30, color: rectColor };
            arrayToBeAdded = [ 4, 5 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }

        else if ( x > 150 && x < 250 && y > 150 && y < 200 && rectangle.w > 25 && rectangle.w < 98 && rectangle.h > 15 && rectangle.h < 48 )
        {
            temp = { startX: 160, startY: 160, w: 80, h : 30, color: rectColor };
            arrayToBeAdded = [ 5, 6 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }

        else if ( x > 200 && x < 300 && y > 150 && y < 200 && rectangle.w > 25 && rectangle.w < 98 && rectangle.h > 15 && rectangle.h < 48 )
        {
            temp = { startX: 210, startY: 160, w: 80, h : 30, color: rectColor };
            arrayToBeAdded = [ 6, 7 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }

        // Next two are the wraps ( top first, bottom second )
        else if ( x > 75 && x < 100 && y > 110 && y < 145 && rectangle.w > 5 && rectangle.w < 40 && rectangle.h > 5 && rectangle.h < 40 )
        {
            temp = { startX: 100, startY: 110, w: 40, h : 30, color: rectColor };
            arrayToBeAdded = [ 0, 3 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
            temp = { startX: 260, startY: 110, w: 40, h : 30, color: rectColor };
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }

        else if ( x > 75 && x < 100 && y > 160 && y < 195 && rectangle.w > 5 && rectangle.w < 40 && rectangle.h > 5 && rectangle.h < 40 )
        {
            temp = { startX: 100, startY: 160, w: 40, h : 30, color: rectColor };
            arrayToBeAdded = [ 4, 7 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
            temp = { startX: 260, startY: 160, w: 40, h : 30, color: rectColor };
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }

        // Next 3 if statements is for vertical quad grouping
        else if ( x > 100 && x < 200 && y > 100 && y < 200 && rectangle.w > 70 && rectangle.w < 95 && rectangle.h > 70 && rectangle.h < 95 )
        {
            temp = { startX: 110, startY: 110, w: 80, h : 80, color: rectColor };
            arrayToBeAdded = [ 0, 1, 4, 5 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }

        else if ( x > 150 && x < 250 && y > 100 && y < 200 && rectangle.w > 70 && rectangle.w < 95 && rectangle.h > 70 && rectangle.h < 95 )
        {
            temp = { startX: 160, startY: 110, w: 80, h : 80, color: rectColor };
            arrayToBeAdded = [ 1, 2, 5, 6 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }

         else if ( x > 200 && x < 300 && y > 100 && y < 200 && rectangle.w > 70 && rectangle.w < 95 && rectangle.h > 70 && rectangle.h < 95 )
        {
            temp = { startX: 210, startY: 110, w: 80, h : 80, color: rectColor };
            arrayToBeAdded = [ 2, 3, 6, 7 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }

        // Next 2 if statements is for horizontal quad grouping
        else if ( x > 100 && x < 300 && y > 100 && y < 150 && rectangle.w > 162 && rectangle.w < 180 && rectangle.h > 5 && rectangle.h < 50 )
        {
            temp = { startX: 110, startY: 110, w: 180, h : 30, color: rectColor };
            arrayToBeAdded = [ 0, 1, 2, 3 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }

        else if ( x > 100 && x < 300 && y > 150 && y < 200 && rectangle.w > 162 && rectangle.w < 180 && rectangle.h > 5 && rectangle.h < 50 )
        {
            // Bottom row wrap
            temp = { startX: 110, startY: 160, w: 180, h : 30, color: rectColor };
            arrayToBeAdded = [ 4, 5, 6, 7 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }

        // Next if statement is for wrap quad grouping
        else if ( x > 75 && x < 100 && y > 110 && y < 195 && rectangle.w > 5 && rectangle.w < 45 && rectangle.h > 70 && rectangle.h < 95 )
        {
            temp = { startX: 100, startY: 110, w: 40, h : 80, color: rectColor };
            arrayToBeAdded = [ 0, 3, 4, 7 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
            temp = { startX: 260, startY: 110, w: 40, h : 80, color: rectColor };
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }

        // Octal group
        else if ( x > 100 && x < 300 && y > 100 && y < 200 && rectangle.w > 150 && rectangle.w < 190 && rectangle.h > 70 && rectangle.h < 95 )
        {
            temp = { startX: 110, startY: 110, w: 180, h : 80, color: rectColor };
            arrayToBeAdded = [ 0, 1, 2, 3, 4, 5, 6, 7 ];
            addToDrawingArray( temp, arrayToBeAdded, index, eightDrawingArray );
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
            arrayToBeAdded = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
            addToDrawingArray( temp, arrayToBeAdded, index, sixteenDrawingArray );
        }
        
        // For eights // Horizonals, Verticals, Wraps
        else if ( x > 105 && x < 295 && y > 105 && y < 195 && rectangle.w > 165 && rectangle.w < 195 && rectangle.h > 65 && rectangle.h < 95 )
        {
            temp = { startX: 110, startY: 110, w: 180, h : 80, color: rectColor };
            arrayToBeAdded = [ 0, 1, 2, 3, 4, 5, 6, 7 ];
            addToDrawingArray( temp, arrayToBeAdded, index, eightDrawingArray );
        }
        
        else if ( x > 105 && x < 295 && y > 195 && y < 245 && rectangle.w > 165 && rectangle.w < 195 && rectangle.h > 65 && rectangle.h < 95 )
        {
            temp = { startX: 110, startY: 160, w: 180, h : 80, color: rectColor };
            arrayToBeAdded = [ 4, 5, 6, 7, 8, 9, 10, 11 ];
            addToDrawingArray( temp, arrayToBeAdded, index, eightDrawingArray );
        }
        
        else if ( x > 105 && x < 295 && y > 245 && y < 295 && rectangle.w > 165 && rectangle.w < 195 && rectangle.h > 65 && rectangle.h < 95 )
        {
            temp = { startX: 110, startY: 210, w: 180, h : 80, color: rectColor };            
            arrayToBeAdded = [ 8, 9, 10, 11, 12, 13, 14, 15 ];
            addToDrawingArray( temp, arrayToBeAdded, index, eightDrawingArray );
        }
        
        // Verticals
        else if ( x > 105 && x < 195 && y > 105 && y < 295 && rectangle.w > 65 && rectangle.w < 95 && rectangle.h > 165 && rectangle.h < 195 )
        {
            temp = { startX: 110, startY: 110, w: 80, h : 180, color: rectColor };
            arrayToBeAdded = [ 0, 1, 4, 5, 8, 9, 12, 13 ];
            addToDrawingArray( temp, arrayToBeAdded, index, eightDrawingArray );
        }
        
        else if ( x > 195 && x < 245 && y > 105 && y < 295 && rectangle.w > 65 && rectangle.w < 95 && rectangle.h > 165 && rectangle.h < 195 )
        {
            temp = { startX: 160, startY: 110, w: 80, h : 180, color: rectColor };
            arrayToBeAdded = [ 1, 2, 5, 6, 9, 10, 13, 14 ];
            addToDrawingArray( temp, arrayToBeAdded, index, eightDrawingArray );
        }
        
        else if ( x > 245 && x < 295 && y > 105 && y < 295 && rectangle.w > 65 && rectangle.w < 95 && rectangle.h > 165 && rectangle.h < 195 )
        {
            temp = { startX: 210, startY: 110, w: 80, h : 180, color: rectColor };
            arrayToBeAdded = [ 2, 3, 6, 7, 10, 11, 14, 15 ];
            addToDrawingArray( temp, arrayToBeAdded, index, eightDrawingArray );
        }
        
        // Horizontal Wrap
        else if ( x > 55 && x < 100 && y > 100 && y < 300 && rectangle.w > 5 && rectangle.w < 45 && rectangle.h > 155 && rectangle.h < 195 )
        {
            temp = { startX: 100, startY: 110, w: 40, h : 180, color: rectColor };
            arrayToBeAdded = [ 0, 3, 4, 7, 8, 11, 12, 13 ];
            addToDrawingArray( temp, arrayToBeAdded, index, eightDrawingArray );
            temp = { startX: 260, startY: 110, w: 40, h : 180, color: rectColor };
            addToDrawingArray( temp, arrayToBeAdded, index, eightDrawingArray );
        }
        
        // Vertical Wrap
        else if ( x > 100 && x < 300 && y > 55 && y < 100 && rectangle.w > 155 && rectangle.w < 195 && rectangle.h > 5 && rectangle.h < 45 )
        {
            temp = { startX: 110, startY: 100, w: 180, h : 40, color: rectColor };
            arrayToBeAdded = [ 0, 1, 2, 3, 12, 13, 14, 15 ];
            addToDrawingArray( temp, arrayToBeAdded, index, eightDrawingArray );
            temp = { startX: 110, startY: 260, w: 180, h : 40, color: rectColor };
            addToDrawingArray( temp, arrayToBeAdded, index, eightDrawingArray );
        }
        
        // Quads // Horizontals, verticals, squares ( top left to bottom right ), wraps
        else if ( x > 100 && x < 300 && y > 100 && y < 150 && rectangle.w > 155 && rectangle.w < 195 && rectangle.h > 25 && rectangle.h < 45 )
        {
            temp = { startX: 110, startY: 110, w: 180, h : 30, color: rectColor };
            arrayToBeAdded = [ 0, 1, 2, 3 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }
        
        else if ( x > 100 && x < 300 && y > 150 && y < 200 && rectangle.w > 155 && rectangle.w < 195 && rectangle.h > 25 && rectangle.h < 45 )
        {
            temp = { startX: 110, startY: 160, w: 180, h : 30, color: rectColor };
            arrayToBeAdded = [ 4, 5, 6, 7 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }
        
        else if ( x > 100 && x < 300 && y > 200 && y < 250 && rectangle.w > 155 && rectangle.w < 195 && rectangle.h > 25 && rectangle.h < 45 )
        {
            temp = { startX: 110, startY: 210, w: 180, h : 30, color: rectColor };
            arrayToBeAdded = [ 8, 9, 10, 11 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }
        
        else if ( x > 100 && x < 300 && y > 250 && y < 300 && rectangle.w > 155 && rectangle.w < 195 && rectangle.h > 25 && rectangle.h < 45 )
        {
            temp = { startX: 110, startY: 260, w: 180, h : 30, color: rectColor };
            arrayToBeAdded = [ 12, 13, 14, 15 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }
        
        // Verticals
        else if ( x > 100 && x < 150 && y > 100 && y < 300 && rectangle.w > 25 && rectangle.w < 45 && rectangle.h > 155 && rectangle.h < 195 )
        {
            temp = { startX: 110, startY: 110, w: 30, h : 180, color: rectColor };
            arrayToBeAdded = [ 0, 4, 8, 12 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }
        
        else if ( x > 150 && x < 200 && y > 100 && y < 300 && rectangle.w > 25 && rectangle.w < 45 && rectangle.h > 155 && rectangle.h < 195 )
        {
            temp = { startX: 160, startY: 110, w: 30, h : 180, color: rectColor };
            arrayToBeAdded = [ 1, 5, 9, 13 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }
        
        else if ( x > 200 && x < 250 && y > 100 && y < 300 && rectangle.w > 25 && rectangle.w < 45 && rectangle.h > 155 && rectangle.h < 195 )
        {
            temp = { startX: 210, startY: 110, w: 30, h : 180, color: rectColor };
            arrayToBeAdded = [ 2, 6, 10, 14 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }
        
        else if ( x > 250 && x < 300 && y > 100 && y < 300 && rectangle.w > 25 && rectangle.w < 45 && rectangle.h > 155 && rectangle.h < 195 )
        {
            temp = { startX: 260, startY: 110, w: 30, h : 180, color: rectColor };
            arrayToBeAdded = [ 3, 7, 11, 15 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }
        
        // Squares: From left to right
        else if ( x > 100 && x < 200 && y > 100 && y < 200 && rectangle.w > 75 && rectangle.w < 95 && rectangle.h > 75 && rectangle.h < 95 )
        {
            temp = { startX: 110, startY: 110, w: 80, h : 80, color: rectColor };
            arrayToBeAdded = [ 0, 1, 4, 5 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }
        
        else if ( x > 150 && x < 250 && y > 100 && y < 200 && rectangle.w > 75 && rectangle.w < 95 && rectangle.h > 75 && rectangle.h < 95 )
        {
            temp = { startX: 160, startY: 110, w: 80, h : 80, color: rectColor };
            arrayToBeAdded = [ 1, 2, 5, 6 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }
        
        else if ( x > 200 && x < 300 && y > 100 && y < 200 && rectangle.w > 75 && rectangle.w < 95 && rectangle.h > 75 && rectangle.h < 95 )
        {
            temp = { startX: 210, startY: 110, w: 80, h : 80, color: rectColor };
            arrayToBeAdded = [ 2, 3, 6, 7 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }
        
        // Middle squares
        else if ( x > 100 && x < 200 && y > 150 && y < 250 && rectangle.w > 75 && rectangle.w < 95 && rectangle.h > 75 && rectangle.h < 95 )
        {
            temp = { startX: 110, startY: 160, w: 80, h : 80, color: rectColor };
            arrayToBeAdded = [ 4, 5, 8, 9 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }
        
        else if ( x > 150 && x < 250 && y > 150 && y < 250 && rectangle.w > 75 && rectangle.w < 95 && rectangle.h > 75 && rectangle.h < 95 )
        {
            temp = { startX: 160, startY: 160, w: 80, h : 80, color: rectColor };
            arrayToBeAdded = [ 5, 6, 9, 10 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }
        
        else if ( x > 200 && x < 300 && y > 150 && y < 250 && rectangle.w > 75 && rectangle.w < 95 && rectangle.h > 75 && rectangle.h < 95 )
        {
            temp = { startX: 210, startY: 160, w: 80, h : 80, color: rectColor };
            arrayToBeAdded = [ 6, 7, 10, 11 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }
        
        // Bottom squares
        else if ( x > 100 && x < 200 && y > 200 && y < 300 && rectangle.w > 75 && rectangle.w < 95 && rectangle.h > 75 && rectangle.h < 95 )
        {
            temp = { startX: 110, startY: 210, w: 80, h : 80, color: rectColor };
            arrayToBeAdded = [ 8, 9, 12, 13 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }
        
        else if ( x > 150 && x < 250 && y > 200 && y < 300 && rectangle.w > 75 && rectangle.w < 95 && rectangle.h > 75 && rectangle.h < 95 )
        {
            temp = { startX: 160, startY: 210, w: 80, h : 80, color: rectColor };
            arrayToBeAdded = [ 9, 10, 13, 14 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }
        
        else if ( x > 200 && x < 300 && y > 200 && y < 300 && rectangle.w > 75 && rectangle.w < 95 && rectangle.h > 75 && rectangle.h < 95 )
        {
            temp = { startX: 210, startY: 210, w: 80, h : 80, color: rectColor };
            arrayToBeAdded = [ 10, 11, 14, 15 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }
        
        // Wraps ( Horizontals first, verticals second )
        else if ( x > 60 && x < 100 && y > 165 && y < 200 && rectangle.w > 5 && rectangle.w < 45 && rectangle.h > 55 && rectangle.h < 95 )
        {
            temp = { startX: 100, startY: 110, w: 40, h : 80, color: rectColor };
            arrayToBeAdded = [ 0, 3, 4, 7 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
            temp = { startX: 260, startY: 110, w: 40, h : 80, color: rectColor };
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }
        
        else if ( x > 60 && x < 100 && y > 150 && y < 250 && rectangle.w > 5 && rectangle.w < 45 && rectangle.h > 55 && rectangle.h < 95 )
        {
            temp = { startX: 100, startY: 160, w: 40, h : 80, color: rectColor };
            arrayToBeAdded = [ 4, 7, 8, 11 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
            temp = { startX: 260, startY: 160, w: 40, h : 80, color: rectColor };
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }
        
        else if ( x > 60 && x < 100 && y > 200 && y < 300 && rectangle.w > 5 && rectangle.w < 45 && rectangle.h > 55 && rectangle.h < 95 )
        {
            temp = { startX: 100, startY: 210, w: 40, h : 80, color: rectColor };
            arrayToBeAdded = [ 8, 11, 12, 15 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
            temp = { startX: 260, startY: 210, w: 40, h : 80, color: rectColor };
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }
        
            //  Vertical Wraps
        else if ( x > 100 && x < 200 && y > 65 && y < 100 && rectangle.w > 75 && rectangle.w < 95 && rectangle.h > 5 && rectangle.h < 35 )
        {
            temp = { startX: 110, startY: 100, w: 80, h : 40, color: rectColor };
            arrayToBeAdded = [ 0, 1, 12, 13 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
            temp = { startX: 110, startY: 260, w: 80, h : 40, color: rectColor };
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }
        
        else if ( x > 150 && x < 250 && y > 65 && y < 100 && rectangle.w > 75 && rectangle.w < 95 && rectangle.h > 5 && rectangle.h < 35 )
        {
            temp = { startX: 160, startY: 100, w: 80, h : 40, color: rectColor };
            arrayToBeAdded = [ 1, 2, 13, 14 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
            temp = { startX: 160, startY: 260, w: 80, h : 40, color: rectColor };
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }
        
        else if ( x > 200 && x < 300 && y > 65 && y < 100 && rectangle.w > 75 && rectangle.w < 95 && rectangle.h > 5 && rectangle.h < 35 )
        {
            temp = { startX: 210, startY: 100, w: 80, h : 40, color: rectColor };
            arrayToBeAdded = [ 2, 3, 14, 15 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
            temp = { startX: 210, startY: 260, w: 80, h : 40, color: rectColor };
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }
        
        // Four corner wrap
        else if ( x > 25 && x < 75 && y > 45 && y < 85 && rectangle.w > 35 && rectangle.w < 60 && rectangle.h > 15 && rectangle.h < 40 )
        {
            temp = { startX: 100, startY: 100, w: 40, h : 40, color: rectColor };
            arrayToBeAdded = [ 0, 3, 12, 15 ];
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
            temp = { startX: 260, startY: 100, w: 40, h : 40, color: rectColor };
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
            temp = { startX: 100, startY: 260, w: 40, h : 40, color: rectColor };
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
            temp = { startX: 260, startY: 260, w: 40, h : 40, color: rectColor };
            addToDrawingArray( temp, arrayToBeAdded, index, fourDrawingArray );
        }
        
        // For pairs ( Horizontal, Vertical, Wraps ( Horizontal, Vertical ) )
        else if ( x > 100 && x < 200 && y > 100 && y < 150 && rectangle.w > 65 && rectangle.w < 95 && rectangle.h > 25 && rectangle.h < 45 )
        {
            temp = { startX: 110, startY: 110, w: 80, h : 30, color: rectColor };
            arrayToBeAdded = [ 0, 1 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 150 && x < 250 && y > 100 && y < 150 && rectangle.w > 65 && rectangle.w < 95 && rectangle.h > 25 && rectangle.h < 45 )
        {
            temp = { startX: 160, startY: 110, w: 80, h : 30, color: rectColor };
            arrayToBeAdded = [ 1, 2 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 200 && x < 300 && y > 100 && y < 150 && rectangle.w > 65 && rectangle.w < 95 && rectangle.h > 25 && rectangle.h < 45 )
        {
            temp = { startX: 210, startY: 110, w: 80, h : 30, color: rectColor };
            arrayToBeAdded = [ 2, 3 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 100 && x < 200 && y > 150 && y < 200 && rectangle.w > 65 && rectangle.w < 95 && rectangle.h > 25 && rectangle.h < 45 )
        {
            temp = { startX: 110, startY: 160, w: 80, h : 30, color: rectColor };
            arrayToBeAdded = [ 4, 5 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 150 && x < 250 && y > 150 && y < 200 && rectangle.w > 65 && rectangle.w < 95 && rectangle.h > 25 && rectangle.h < 45 )
        {
            temp = { startX: 160, startY: 160, w: 80, h : 30, color: rectColor };
            arrayToBeAdded = [ 5, 6 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 200 && x < 300 && y > 150 && y < 200 && rectangle.w > 65 && rectangle.w < 95 && rectangle.h > 25 && rectangle.h < 45 )
        {
            temp = { startX: 210, startY: 160, w: 80, h : 30, color: rectColor };
            arrayToBeAdded = [ 6, 7 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 100 && x < 200 && y > 200 && y < 250 && rectangle.w > 65 && rectangle.w < 95 && rectangle.h > 25 && rectangle.h < 45 )
        {
            temp = { startX: 110, startY: 210, w: 80, h : 30, color: rectColor };
            arrayToBeAdded = [ 8, 9 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 150 && x < 250 && y > 200 && y < 250 && rectangle.w > 65 && rectangle.w < 95 && rectangle.h > 25 && rectangle.h < 45 )
        {
            temp = { startX: 160, startY: 210, w: 80, h : 30, color: rectColor };
            arrayToBeAdded = [ 9, 10 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 200 && x < 300 && y > 200 && y < 250 && rectangle.w > 65 && rectangle.w < 95 && rectangle.h > 25 && rectangle.h < 45 )
        {
            temp = { startX: 210, startY: 210, w: 80, h : 30, color: rectColor };
            arrayToBeAdded = [ 10, 11 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 100 && x < 200 && y > 250 && y < 300 && rectangle.w > 65 && rectangle.w < 95 && rectangle.h > 25 && rectangle.h < 45 )
        {
            temp = { startX: 110, startY: 260, w: 80, h : 30, color: rectColor };
            arrayToBeAdded = [ 12, 13 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 150 && x < 250 && y > 250 && y < 300 && rectangle.w > 65 && rectangle.w < 95 && rectangle.h > 25 && rectangle.h < 45 )
        {
            temp = { startX: 160, startY: 260, w: 80, h : 30, color: rectColor };
            arrayToBeAdded = [ 13, 14 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 200 && x < 300 && y > 250 && y < 300 && rectangle.w > 65 && rectangle.w < 95 && rectangle.h > 25 && rectangle.h < 45 )
        {
            temp = { startX: 210, startY: 260, w: 80, h : 30, color: rectColor };
            arrayToBeAdded = [ 14, 15 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        // Vertical
        else if ( x > 100 && x < 150 && y > 100 && y < 200 && rectangle.w > 25 && rectangle.w < 45 && rectangle.h > 65 && rectangle.h < 95 )
        {
            temp = { startX: 110, startY: 110, w: 30, h : 80, color: rectColor };
            arrayToBeAdded = [ 0, 4 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 150 && x < 200 && y > 100 && y < 200 && rectangle.w > 25 && rectangle.w < 45 && rectangle.h > 65 && rectangle.h < 95 )
        {
            temp = { startX: 160, startY: 110, w: 30, h : 80, color: rectColor };
            arrayToBeAdded = [ 1, 5 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 200 && x < 250 && y > 100 && y < 200 && rectangle.w > 25 && rectangle.w < 45 && rectangle.h > 65 && rectangle.h < 95 )
        {
            temp = { startX: 210, startY: 110, w: 30, h : 80, color: rectColor };
            arrayToBeAdded = [ 2, 6 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 250 && x < 300 && y > 100 && y < 200 && rectangle.w > 25 && rectangle.w < 45 && rectangle.h > 65 && rectangle.h < 95 )
        {
            temp = { startX: 260, startY: 110, w: 30, h : 80, color: rectColor };
            arrayToBeAdded = [ 3, 7 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 100 && x < 150 && y > 150 && y < 250 && rectangle.w > 25 && rectangle.w < 45 && rectangle.h > 65 && rectangle.h < 95 )
        {
            temp = { startX: 110, startY: 160, w: 30, h : 80, color: rectColor };
            arrayToBeAdded = [ 4, 8 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 150 && x < 200 && y > 150 && y < 250 && rectangle.w > 25 && rectangle.w < 45 && rectangle.h > 65 && rectangle.h < 95 )
        {
            temp = { startX: 160, startY: 160, w: 30, h : 80, color: rectColor };
            arrayToBeAdded = [ 5, 9 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 200 && x < 250 && y > 150 && y < 250 && rectangle.w > 25 && rectangle.w < 45 && rectangle.h > 65 && rectangle.h < 95 )
        {
            temp = { startX: 210, startY: 160, w: 30, h : 80, color: rectColor };
            arrayToBeAdded = [ 6, 10 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 250 && x < 300 && y > 150 && y < 250 && rectangle.w > 25 && rectangle.w < 45 && rectangle.h > 65 && rectangle.h < 95 )
        {
            temp = { startX: 260, startY: 160, w: 30, h : 80, color: rectColor };
            arrayToBeAdded = [ 7, 11 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 100 && x < 150 && y > 200 && y < 300 && rectangle.w > 25 && rectangle.w < 45 && rectangle.h > 65 && rectangle.h < 95 )
        {
            temp = { startX: 110, startY: 210, w: 30, h : 80, color: rectColor };
            arrayToBeAdded = [ 8, 12 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 150 && x < 200 && y > 200 && y < 300 && rectangle.w > 25 && rectangle.w < 45 && rectangle.h > 65 && rectangle.h < 95 )
        {
            temp = { startX: 160, startY: 210, w: 30, h : 80, color: rectColor };
            arrayToBeAdded = [ 9, 13 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 200 && x < 250 && y > 200 && y < 300 && rectangle.w > 25 && rectangle.w < 45 && rectangle.h > 65 && rectangle.h < 95 )
        {
            temp = { startX: 210, startY: 210, w: 30, h : 80, color: rectColor };
            arrayToBeAdded = [ 10, 14 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 250 && x < 300 && y > 200 && y < 300 && rectangle.w > 25 && rectangle.w < 45 && rectangle.h > 65 && rectangle.h < 95 )
        {
            temp = { startX: 260, startY: 210, w: 30, h : 80, color: rectColor };
            arrayToBeAdded = [ 11, 15 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        // Horizontal Wraps
        else if ( x > 60 && x < 100 && y > 100 && y < 140 && rectangle.w > 20 && rectangle.w < 50 && rectangle.h > 20 && rectangle.h < 50 )
        {
            temp = { startX: 100, startY: 110, w: 35, h : 30, color: rectColor };
            arrayToBeAdded = [ 0, 3 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
            temp = { startX: 265, startY: 110, w: 35, h : 30, color: rectColor };
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 60 && x < 100 && y > 150 && y < 190 && rectangle.w > 20 && rectangle.w < 50 && rectangle.h > 20 && rectangle.h < 50 )
        {
            temp = { startX: 100, startY: 160, w: 35, h : 30, color: rectColor };
            arrayToBeAdded = [ 4, 7 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
            temp = { startX: 265, startY: 160, w: 35, h : 30, color: rectColor };
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 60 && x < 100 && y > 200 && y < 240 && rectangle.w > 20 && rectangle.w < 50 && rectangle.h > 20 && rectangle.h < 50 )
        {
            temp = { startX: 100, startY: 210, w: 35, h : 30, color: rectColor };
            arrayToBeAdded = [ 8, 11 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
            temp = { startX: 265, startY: 210, w: 35, h : 30, color: rectColor };
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 60 && x < 100 && y > 250 && y < 290 && rectangle.w > 20 && rectangle.w < 50 && rectangle.h > 20 && rectangle.h < 50 )
        {
            temp = { startX: 100, startY: 260, w: 35, h : 30, color: rectColor };
            arrayToBeAdded = [ 12, 15 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
            temp = { startX: 265, startY: 260, w: 35, h : 30, color: rectColor };
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        // Vertical groups 
        else if ( x > 105 && x < 145 && y > 60 && y < 100 && rectangle.w > 20 && rectangle.w < 50 && rectangle.h > 20 && rectangle.h < 50 )
        {
            temp = { startX: 110, startY: 100, w: 30, h : 40, color: rectColor };
            arrayToBeAdded = [ 0, 12 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
            temp = { startX: 110, startY: 260, w: 30, h : 40, color: rectColor };
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 150 && x < 200 && y > 60 && y < 100 && rectangle.w > 20 && rectangle.w < 50 && rectangle.h > 20 && rectangle.h < 50 )
        {
            temp = { startX: 160, startY: 100, w: 30, h : 40, color: rectColor };
            arrayToBeAdded = [ 1, 13 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
            temp = { startX: 160, startY: 260, w: 30, h : 40, color: rectColor };
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 200 && x < 250 && y > 60 && y < 100 && rectangle.w > 20 && rectangle.w < 50 && rectangle.h > 20 && rectangle.h < 50 )
        {
            temp = { startX: 210, startY: 100, w: 30, h : 40, color: rectColor };
            arrayToBeAdded = [ 2, 14 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray);
            temp = { startX: 210, startY: 260, w: 30, h : 40, color: rectColor };
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else if ( x > 250 && x < 300 && y > 60 && y < 100 && rectangle.w > 20 && rectangle.w < 50 && rectangle.h > 20 && rectangle.h < 50 )
        {
            temp = { startX: 260, startY: 100, w: 30, h : 40, color: rectColor };
            arrayToBeAdded = [ 3, 15 ];
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
            temp = { startX: 260, startY: 260, w: 30, h : 40, color: rectColor };
            addToDrawingArray( temp, arrayToBeAdded, index, twoDrawingArray );
        }
        
        else
        {
            temp = {};
        }
    }
    
    else
    {
        temp = {};
    }
    
    return temp;
}

// Removes duplicates from one array
function removeDuplicates( arrayPassed )
{
    if ( arrayPassed.length > 1 )
    {
        for ( var outerIndex = 0; outerIndex < arrayPassed.length; outerIndex++ )
        {
            for ( var innerIndex = 0; innerIndex < arrayPassed.length; innerIndex++ )
            {
                if ( arraysEqual( arrayPassed[outerIndex], arrayPassed[innerIndex] ) && innerIndex != outerIndex )
                {
                    arrayPassed.splice(innerIndex, innerIndex + 1);
                }
            }
        }
    }
    
    return arrayPassed;
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

        ctx.clearRect( 0, 0, canvas.width, canvas.height);
        drawRectangles();
        sketchRectangle();
    }
}

function sketchRectangle() 
{
    ctx.strokeStyle = "#FF0000";
    ctx.strokeRect( rect.startX, rect.startY, rect.w, rect.h );
}

function getMousePos( canvas, event )
{
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////


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
            array[0] = 1;
            array[1] = 1;
        }
        
        else if ( ( array[0] != 1 || array[1] != "X" ) && dontCare == 1 )
        {
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
            verticalLine.lineTo(200, 485);
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
        if ( dontCare == 0 )
        {
            swapArrayIndices( 8, 12 );
            swapArrayIndices( 9, 13 );
            swapArrayIndices( 10, 14 );
            swapArrayIndices( 11, 15 );
        }
        
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
    var counter = 0;
    var newArray = new Array(1);
    var sixteenArrayIndex = 0;
    
    for ( var index = 0; index < length; index++ )
    {
        if ( array[index] == 1 || array[index] == "X" )
        {
            counter += 1;
        }
    }
    
    // If all 16s
    if ( counter == 16 )
    {
        // Adds array with indexes equal to 1 to new array
        for ( var index = 0; index < length; index++ )
        {
            newArray = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
        }
        
        // Creates slot to add array and adds the array
        sixteenArrayIndex = createArraySpace( sixteenArray );
        sixteenArray[sixteenArrayIndex] = newArray;
        sixteenAmount += 1;
    }
}

// Finds 16s in array ( Product of Sums )
function find16sPOS()
{
    var length = getLengthOfArray();
    var counter = 0;
    var newArray = new Array(1);
    var sixteenArrayIndex = 0;
    
    for ( var index = 0; index < length; index++ )
    {
        if ( array[index] == 0 || array[index] == "X" )
        {
            counter += 1;
        }
    }
    
    // If all 16s
    if ( counter == 16 )
    {
        // Adds array with indexes equal to 1 to new array
        for ( var index = 0; index < length; index++ )
        {
            newArray = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
        }
        
        // Creates slot to add array and adds the array
        sixteenArrayIndex = createArraySpace( sixteenArray );
        sixteenArray[sixteenArrayIndex] = newArray;
        sixteenAmount += 1;
    }
}

// Finds 8s in array
function find8s()
{
    var length = getLengthOfArray();
    var newArray = new Array(1);
    
    if ( sixteenAmount == 0 )
    {
        // 3 Horizontal Groups
        for ( var index = 0; index < length; index++ )
        {   
            if ( index == 0 || index == 4 || index == 8 )
            {                
                if ( ( array[index] == 1 || array[index] == "X" ) && ( array[index + 1] == 1 || array[index + 1] == "X" ) && ( array[index + 2] == 1 || array[index + 2] == "X" ) && ( array[index + 3] == 1 || array[index + 3] == "X" ) && ( array[index + 4] == 1 || array[index + 4] == "X" ) && ( array[index + 5] == 1 || array[index + 5] == "X" ) && ( array[index + 6] == 1 || array[index + 6] == "X" ) && ( array[index + 7] == 1 || array[index + 7] == "X" ) )
                {
                    newArray = [ index, index + 1, index + 2, index + 3, index + 4, index + 5, index + 6, index + 7 ];
        
                    // Creates slot to add array and adds the array
                    eightArrayIndex = createArraySpace( eightArray );
                    eightArray[eightArrayIndex] = newArray;
                    eightAmount += 1;
                }
            }
        }
        
        // 3 Vertical Groups
        for ( var index = 0; index < length; index++ )
        {
            if ( index == 0 || index == 1 || index == 2 )
            {
                if ( ( array[index] == 1 || array[index] == "X" ) && ( array[index + 1] == 1 || array[index + 1] == "X" ) && ( array[index + 4] == 1 || array[index + 4] == "X" ) && ( array[index + 5] == 1 || array[index + 5] == "X" ) && ( array[index + 8] == 1 || array[index + 8] == "X" ) && ( array[index + 9] == 1 || array[index + 9] == "X" ) && ( array[index + 12] == 1 || array[index + 12] == "X" ) && ( array[index + 13] == 1 || array[index + 13] == "X" ) )
                {
                    newArray = [ index, index + 1, index + 4, index + 5, index + 8, index + 9, index + 12, index + 13 ];
        
                    // Creates slot to add array and adds the array
                    eightArrayIndex = createArraySpace( eightArray );
                    eightArray[eightArrayIndex] = newArray;
                    eightAmount += 1;
                }
            }
        }
        
        // 2 Wraps
        for ( var index = 0; index < length; index++ )
        {
            if ( index == 0 )
            {
                if ( ( array[index] == 1 || array[index] == "X" ) && ( array[index + 3] == 1 || array[index + 3] == "X" ) && ( array[index + 4] == 1 || array[index + 4] == "X" ) && ( array[index + 7] == 1 || array[index + 7] == "X" ) && ( array[index + 8] == 1 || array[index + 8] == "X" ) && ( array[index + 11] == 1 || array[index + 11] == "X" ) && ( array[index + 12] == 1 || array[index + 12] == "X" ) && ( array[index + 15] == 1 || array[index + 15] == "X" ) )
                {
                    newArray = [ index, index + 3, index + 4, index + 7, index + 8, index + 11, index + 12, index + 15 ];
        
                    // Creates slot to add array and adds the array
                    eightArrayIndex = createArraySpace( eightArray );
                    eightArray[eightArrayIndex] = newArray;
                    eightAmount += 1;
                }
                
                else if ( ( array[index] == 1 || array[index] == "X" ) && ( array[index + 1] == 1 || array[index + 1] == "X" ) && ( array[index + 2] == 1 || array[index + 2] == "X" ) && ( array[index + 3] == 1 || array[index + 3] == "X" ) && ( array[index + 12] == 1 || array[index + 12] == "X" ) && ( array[index + 13] == 1 || array[index + 13] == "X" ) && ( array[index + 14] == 1 || array[index + 14] == "X" ) && ( array[index + 15] == 1 || array[index + 15] == "X" ) )
                {
                    newArray = [ index, index + 1, index + 2, index + 3, index + 12, index + 13, index + 14, index + 15 ];
        
                    // Creates slot to add array and adds the array
                    eightArrayIndex = createArraySpace( eightArray );
                    eightArray[eightArrayIndex] = newArray;
                    eightAmount += 1;
                }
            }
        }
        
    }
}

// Finds 8s in array ( Product of Sums )
function find8sPOS()
{
    var length = getLengthOfArray();
    var newArray = new Array(1);
    
    if ( sixteenAmount == 0 )
    {
        // 3 Horizontal Groups
        for ( var index = 0; index < length; index++ )
        {   
            if ( index == 0 || index == 4 || index == 8 )
            {                
                if ( ( array[index] == 0 || array[index] == "X" ) && ( array[index + 1] == 0 || array[index + 1] == "X" ) && ( array[index + 2] == 0 || array[index + 2] == "X" ) && ( array[index + 3] == 0 || array[index + 3] == "X" ) && ( array[index + 4] == 0 || array[index + 4] == "X" ) && ( array[index + 5] == 0 || array[index + 5] == "X" ) && ( array[index + 6] == 0 || array[index + 6] == "X" ) && ( array[index + 7] == 0 || array[index + 7] == "X" ) )
                {
                    newArray = [ index, index + 1, index + 2, index + 3, index + 4, index + 5, index + 6, index + 7 ];
        
                    // Creates slot to add array and adds the array
                    eightArrayIndex = createArraySpace( eightArray );
                    eightArray[eightArrayIndex] = newArray;
                    eightAmount += 1;
                }
            }
        }
        
        // 3 Vertical Groups
        for ( var index = 0; index < length; index++ )
        {
            if ( index == 0 || index == 1 || index == 2 )
            {
                if ( ( array[index] == 0 || array[index] == "X" ) && ( array[index + 1] == 0 || array[index + 1] == "X" ) && ( array[index + 4] == 0 || array[index + 4] == "X" ) && ( array[index + 5] == 0 || array[index + 5] == "X" ) && ( array[index + 8] == 0 || array[index + 8] == "X" ) && ( array[index + 9] == 0 || array[index + 9] == "X" ) && ( array[index + 12] == 0 || array[index + 12] == "X" ) && ( array[index + 13] == 0 || array[index + 13] == "X" ) )
                {
                    newArray = [ index, index + 1, index + 4, index + 5, index + 8, index + 9, index + 12, index + 13 ];
        
                    // Creates slot to add array and adds the array
                    eightArrayIndex = createArraySpace( eightArray );
                    eightArray[eightArrayIndex] = newArray;
                    eightAmount += 1;
                }
            }
        }
        
        // 2 Wraps
        for ( var index = 0; index < length; index++ )
        {
            if ( index == 0 )
            {
                if ( ( array[index] == 0 || array[index] == "X" ) && ( array[index + 3] == 0 || array[index + 3] == "X" ) && ( array[index + 4] == 0 || array[index + 4] == "X" ) && ( array[index + 7] == 0 || array[index + 7] == "X" ) && ( array[index + 8] == 0 || array[index + 8] == "X" ) && ( array[index + 11] == 0 || array[index + 11] == "X" ) && ( array[index + 12] == 0 || array[index + 12] == "X" ) && ( array[index + 15] == 0 || array[index + 15] == "X" ) )
                {
                    newArray = [ index, index + 3, index + 4, index + 7, index + 8, index + 11, index + 12, index + 15 ];
        
                    // Creates slot to add array and adds the array
                    eightArrayIndex = createArraySpace( eightArray );
                    eightArray[eightArrayIndex] = newArray;
                    eightAmount += 1;
                }
                
                else if ( ( array[index] == 0 || array[index] == "X" ) && ( array[index + 1] == 0 || array[index + 1] == "X" ) && ( array[index + 2] == 0 || array[index + 2] == "X" ) && ( array[index + 3] == 0 || array[index + 3] == "X" ) && ( array[index + 12] == 0 || array[index + 12] == "X" ) && ( array[index + 13] == 0 || array[index + 13] == "X" ) && ( array[index + 14] == 0 || array[index + 14] == "X" ) && ( array[index + 15] == 0 || array[index + 15] == "X" ) )
                {
                    newArray = [ index, index + 1, index + 2, index + 3, index + 12, index + 13, index + 14, index + 15 ];
        
                    // Creates slot to add array and adds the array
                    eightArrayIndex = createArraySpace( eightArray );
                    eightArray[eightArrayIndex] = newArray;
                    eightAmount += 1;
                }
            }
        }
        
    }
}

// Finds 4s in array
function find4s()
{
    var length = getLengthOfArray();
    var newArray = new Array(1);
    
    if ( sixteenAmount == 0 )
    {
        // For horizontal groupings ( lines only )
        for ( var index = 0; index < length; index++ )
        {
            if ( index == 0 || index == 4 || index == 8 || index == 12 )
            {
                if ( ( array[index] == 1 || array[index] == "X" ) && ( array[index + 1] == 1 || array[index + 1] == "X" ) && ( array[index + 2] == 1 || array[index + 2] == "X" ) && ( array[index + 3] == 1 || array[index + 3] == "X" ) && ( array[index] != "X" || array[index + 1] != "X" || array[index + 2] != "X" || array[index + 3] != "X" ) )
                {
                    newArray = [ index, index + 1, index + 2, index + 3 ];
                    checkIfCanAdd( newArray, eightArray, fourArrayIndex, fourAmount, fourArray, 8 );
                    checkIfCanAdd( newArray, fourArray, fourArrayIndex, fourAmount, fourArray, 4 );
                    resetAllDuplicates();
                }
            }
        }

        // Vertical lines
        for ( var index = 0; index < length; index++ )
        {
            if ( index == 0 || index == 1 || index == 2 || index == 3 )
            {
                if ( ( array[index] == 1 || array[index] == "X" ) && ( array[index + 4] == 1 || array[index + 4] == "X" ) && ( array[index + 8] == 1 || array[index + 8] == "X" ) && ( array[index + 12] == 1 || array[index + 12] == "X" ) && ( array[index] != "X" || array[index + 4] != "X" || array[index + 8] != "X" || array[index + 12] != "X" ) )
                {
                    newArray = [ index, index + 4, index + 8, index + 12 ];
                    checkIfCanAdd( newArray, eightArray, fourArrayIndex, fourAmount, fourArray, 8 );
                    checkIfCanAdd( newArray, fourArray, fourArrayIndex, fourAmount, fourArray, 4 );
                    resetAllDuplicates();
                }
            }
        }

        // Squares from top left to bottom right
        for ( var index = 0; index < length; index++ )
        {
            if ( ( index >= 0 && index <= 2 ) || ( index >= 4 && index <= 6 ) || ( index >= 8 && index <= 10 ) )
            {
                if ( ( array[index] == 1 || array[index] == "X" ) && ( array[index + 1] == 1 || array[index + 1] == "X" ) && ( array[index + 4] == 1 || array[index + 4] == "X" ) && ( array[index + 5] == 1 || array[index + 5] == "X" ) && ( array[index] != "X" || array[index + 1] != "X" || array[index + 4] != "X" || array[index + 5] != "X" ) )
                {
                    newArray = [ index, index + 1, index + 4, index + 5 ];
                    checkIfCanAdd( newArray, eightArray, fourArrayIndex, fourAmount, fourArray, 8 );
                    checkIfCanAdd( newArray, fourArray, fourArrayIndex, fourAmount, fourArray, 4 );
                    resetAllDuplicates();
                }
            }
        }

        // Horizontal Wraps
        for ( var index = 0; index < length; index++ )
        {
            if ( index == 0 || index == 4 || index == 8 )
            {
                if ( ( array[index] == 1 || array[index] == "X" ) && ( array[index + 3] == 1 || array[index + 3] == "X" ) && ( array[index + 4] == 1 || array[index + 4] == "X" ) && ( array[index + 7] == 1 || array[index + 7] == "X" ) && ( array[index] != "X" || array[index + 3] != "X" || array[index + 4] != "X" || array[index + 7] != "X" ) )
                {
                    newArray = [ index, index + 3, index + 4, index + 7 ];
                    checkIfCanAdd( newArray, eightArray, fourArrayIndex, fourAmount, fourArray, 8 );
                    checkIfCanAdd( newArray, fourArray, fourArrayIndex, fourAmount, fourArray, 4 );
                    resetAllDuplicates();
                }
            }
        }

        // Vertical Wraps
        for ( var index = 0; index < length; index++ )
        {
            if ( index == 0 || index == 1 || index == 2 || index == 3 )
            {
                if ( ( array[index] == 1 || array[index] == "X" ) && ( array[index + 1] == 1 || array[index + 1] == "X" ) && ( array[index + 12] == 1 || array[index + 12] == "X" ) && ( array[index + 13] == 1 || array[index + 13] == "X" ) && ( array[index] != "X" || array[index + 1] != "X" || array[index + 12] != "X" || array[index + 13] != "X" ) )
                {
                    newArray = [ index, index + 1, index + 12, index + 13 ];
                    checkIfCanAdd( newArray, eightArray, fourArrayIndex, fourAmount, fourArray, 8 );
                    checkIfCanAdd( newArray, fourArray, fourArrayIndex, fourAmount, fourArray, 4 );
                    resetAllDuplicates();
                }
            }
        }

        // Four corner wrap
        for ( var index = 0; index < length; index++ )
        {
            if ( index == 0 )
            {
                if ( ( array[index] == 1 || array[index] == "X" ) && ( array[index + 3] == 1 || array[index + 3] == "X" ) && ( array[index + 12] == 1 || array[index + 12] == "X" ) && ( array[index + 15] == 1 || array[index + 15] == "X" ) && ( array[index] != "X" || array[index + 3] != "X" || array[index + 12] != "X" || array[index + 15] != "X" ) )
                {
                    newArray = [ index, index + 3, index + 12, index + 15 ];
                    checkIfCanAdd( newArray, eightArray, fourArrayIndex, fourAmount, fourArray, 8 );
                    checkIfCanAdd( newArray, fourArray, fourArrayIndex, fourAmount, fourArray, 4 );
                    resetAllDuplicates();
                }
            }
        }
    }
    
    fourArray = eliminateRedundancies( fourArray );
    resetAllDuplicates();
}

// Finds 4s in array ( Product of Sums )
function find4sPOS()
{
    var length = getLengthOfArray();
    var newArray = new Array(1);
    
    if ( sixteenAmount == 0 )
    {
        // For horizontal groupings ( lines only )
        for ( var index = 0; index < length; index++ )
        {
            if ( index == 0 || index == 4 || index == 8 || index == 12 )
            {
                if ( ( array[index] == 0 || array[index] == "X" ) && ( array[index + 1] == 0 || array[index + 1] == "X" ) && ( array[index + 2] == 0 || array[index + 2] == "X" ) && ( array[index + 3] == 0 || array[index + 3] == "X" ) && ( array[index] != "X" || array[index + 1] != "X" || array[index + 2] != "X" || array[index + 3] != "X" ) )
                {
                    newArray = [ index, index + 1, index + 2, index + 3 ];
                    checkIfCanAdd( newArray, eightArray, fourArrayIndex, fourAmount, fourArray, 8 );
                    checkIfCanAdd( newArray, fourArray, fourArrayIndex, fourAmount, fourArray, 4 );
                    resetAllDuplicates();
                }
            }
        }

        // Vertical lines
        for ( var index = 0; index < length; index++ )
        {
            if ( index == 0 || index == 1 || index == 2 || index == 3 )
            {
                if ( ( array[index] == 0 || array[index] == "X" ) && ( array[index + 4] == 0 || array[index + 4] == "X" ) && ( array[index + 8] == 0 || array[index + 8] == "X" ) && ( array[index + 12] == 0 || array[index + 12] == "X" ) && ( array[index] != "X" || array[index + 4] != "X" || array[index + 8] != "X" || array[index + 12] != "X" ) )
                {
                    newArray = [ index, index + 4, index + 8, index + 12 ];
                    checkIfCanAdd( newArray, eightArray, fourArrayIndex, fourAmount, fourArray, 8 );
                    checkIfCanAdd( newArray, fourArray, fourArrayIndex, fourAmount, fourArray, 4 );
                    resetAllDuplicates();
                }
            }
        }

        // Squares from top left to bottom right
        for ( var index = 0; index < length; index++ )
        {
            if ( ( index >= 0 && index <= 2 ) || ( index >= 4 && index <= 6 ) || ( index >= 8 && index <= 10 ) )
            {
                if ( ( array[index] == 0 || array[index] == "X" ) && ( array[index + 1] == 0 || array[index + 1] == "X" ) && ( array[index + 4] == 0 || array[index + 4] == "X" ) && ( array[index + 5] == 0 || array[index + 5] == "X" ) && ( array[index] != "X" || array[index + 1] != "X" || array[index + 4] != "X" || array[index + 5] != "X" ) )
                {
                    newArray = [ index, index + 1, index + 4, index + 5 ];
                    checkIfCanAdd( newArray, eightArray, fourArrayIndex, fourAmount, fourArray, 8 );
                    checkIfCanAdd( newArray, fourArray, fourArrayIndex, fourAmount, fourArray, 4 );
                    resetAllDuplicates();
                }
            }
        }

        // Horizontal Wraps
        for ( var index = 0; index < length; index++ )
        {
            if ( index == 0 || index == 4 || index == 8 )
            {
                if ( ( array[index] == 0 || array[index] == "X" ) && ( array[index + 3] == 0 || array[index + 3] == "X" ) && ( array[index + 4] == 0 || array[index + 4] == "X" ) && ( array[index + 7] == 0 || array[index + 7] == "X" ) && ( array[index] != "X" || array[index + 3] != "X" || array[index + 4] != "X" || array[index + 7] != "X" ) )
                {
                    newArray = [ index, index + 3, index + 4, index + 7 ];
                    checkIfCanAdd( newArray, eightArray, fourArrayIndex, fourAmount, fourArray, 8 );
                    checkIfCanAdd( newArray, fourArray, fourArrayIndex, fourAmount, fourArray, 4 );
                    resetAllDuplicates();
                }
            }
        }

        // Vertical Wraps
        for ( var index = 0; index < length; index++ )
        {
            if ( index == 0 || index == 1 || index == 2 || index == 3 )
            {
                if ( ( array[index] == 0 || array[index] == "X" ) && ( array[index + 1] == 0 || array[index + 1] == "X" ) && ( array[index + 12] == 0 || array[index + 12] == "X" ) && ( array[index + 13] == 0 || array[index + 13] == "X" ) && ( array[index] != "X" || array[index + 1] != "X" || array[index + 12] != "X" || array[index + 13] != "X" ) )
                {
                    newArray = [ index, index + 1, index + 12, index + 13 ];
                    checkIfCanAdd( newArray, eightArray, fourArrayIndex, fourAmount, fourArray, 8 );
                    checkIfCanAdd( newArray, fourArray, fourArrayIndex, fourAmount, fourArray, 4 );
                    resetAllDuplicates();
                }
            }
        }

        // Four corner wrap
        for ( var index = 0; index < length; index++ )
        {
            if ( index == 0 )
            {
                if ( ( array[index] == 0 || array[index] == "X" ) && ( array[index + 3] == 0 || array[index + 3] == "X" ) && ( array[index + 12] == 0 || array[index + 12] == "X" ) && ( array[index + 15] == 0 || array[index + 15] == "X" ) && ( array[index] != "X" || array[index + 3] != "X" || array[index + 12] != "X" || array[index + 15] != "X" ) )
                {
                    newArray = [ index, index + 3, index + 12, index + 15 ];
                    checkIfCanAdd( newArray, eightArray, fourArrayIndex, fourAmount, fourArray, 8 );
                    checkIfCanAdd( newArray, fourArray, fourArrayIndex, fourAmount, fourArray, 4 );
                    resetAllDuplicates();
                }
            }
        }
    }
    
    fourArray = eliminateRedundancies( fourArray );
    resetAllDuplicates();
}

function resetAllDuplicates()
{
    iOneDup = false;
    iTwoDup = false;
    iThreeDup = false;
    iFourDup = false;
}

// Finds 2s in array 
function find2s()
{
    var length = getLengthOfArray();
    var newArray = new Array(1);

    if ( sixteenAmount == 0 )
    {
        // For horizontal groupings ( lines only )
        for ( var index = 0; index < length; index++ )
        {
            if ( index == 0 || index == 1 || index == 2 || index == 4 || index == 5 || index == 6 || index == 8 || index == 9 || index == 10 || index == 12 || index == 13 || index == 14 )
            {            
                if ( ( array[index] == 1 || array[index] == "X" ) && ( array[index + 1] == 1 || array[index + 1] == "X" ) && ( array[index] != "X" || array[index + 1] != "X" ) )
                {
                    newArray = [ index, index + 1 ];
                    checkIfCanAdd( newArray, eightArray, twoArrayIndex, twoAmount, twoArray, 8 );
                    checkIfCanAdd( newArray, fourArray, twoArrayIndex, twoAmount, twoArray, 4 );
                    checkIfCanAdd( newArray, twoArray, twoArrayIndex, twoAmount, twoArray, 2 );
                    resetAllDuplicates();
                }
            }
        }

        // Vertical lines
        for ( var index = 0; index < length; index++ )
        {
            if ( index == 0 || index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 )
            {
                if ( ( array[index] == 1 || array[index] == "X" ) && ( array[index + 4] == 1 || array[index + 4] == "X" ) && ( array[index] != "X" || array[index + 4] != "X" ) )
                {
                    newArray = [ index, index + 4 ];
                    checkIfCanAdd( newArray, eightArray, twoArrayIndex, twoAmount, twoArray, 8 );
                    checkIfCanAdd( newArray, fourArray, twoArrayIndex, twoAmount, twoArray, 4 );
                    checkIfCanAdd( newArray, twoArray, twoArrayIndex, twoAmount, twoArray, 2 );
                    resetAllDuplicates();
                }
            }
        }

        // Horizontal Wraps
        for ( var index = 0; index < length; index++ )
        {
            if ( index == 0 || index == 4 || index == 8 || index == 12 )
            {
                if ( ( array[index] == 1 || array[index] == "X" ) && ( array[index + 3] == 1 || array[index + 3] == "X" ) && ( array[index] != "X" || array[index + 3] != "X" ) )
                {
                    newArray = [ index, index + 3 ];
                    checkIfCanAdd( newArray, eightArray, twoArrayIndex, twoAmount, twoArray, 8 );
                    checkIfCanAdd( newArray, fourArray, twoArrayIndex, twoAmount, twoArray, 4 );
                    checkIfCanAdd( newArray, twoArray, twoArrayIndex, twoAmount, twoArray, 2 );
                    resetAllDuplicates();
                }
            }
        }

        // Vertical Wraps
        for ( var index = 0; index < length; index++ )
        {
            if ( index == 0 || index == 1 || index == 2 || index == 3 )
            {
                if ( ( array[index] == 1 || array[index] == "X" ) && ( array[index + 12] == 1 || array[index + 12] == "X" ) && ( array[index] != "X" || array[index + 12] != "X" ) )
                {
                    newArray = [ index, index + 12 ];
                    checkIfCanAdd( newArray, eightArray, twoArrayIndex, twoAmount, twoArray, 8 );
                    checkIfCanAdd( newArray, fourArray, twoArrayIndex, twoAmount, twoArray, 4 );
                    checkIfCanAdd( newArray, twoArray, twoArrayIndex, twoAmount, twoArray, 2 );
                    resetAllDuplicates();
                }
            }
        }
    }

    if ( twoArray[0] != null && fourArray[0] != null )
    {
        twoArray = eliminateRedundanciesFromTwoArrays( twoArray, fourArray, twoArray );
    }
    
    else 
    {
        twoArray = eliminateRedundancies( twoArray );
    }
}

// Finds 2s in array  ( Product of Sums )
function find2sPOS()
{
    var length = getLengthOfArray();
    var newArray = new Array(1);

    if ( sixteenAmount == 0 )
    {
        // For horizontal groupings ( lines only )
        for ( var index = 0; index < length; index++ )
        {
            if ( index == 0 || index == 1 || index == 2 || index == 4 || index == 5 || index == 6 || index == 8 || index == 9 || index == 10 || index == 12 || index == 13 || index == 14 )
            {            
                if ( ( array[index] == 0 || array[index] == "X" ) && ( array[index + 1] == 0 || array[index + 1] == "X" ) && ( array[index] != "X" || array[index + 1] != "X" ) )
                {
                    newArray = [ index, index + 1 ];
                    checkIfCanAdd( newArray, eightArray, twoArrayIndex, twoAmount, twoArray, 8 );
                    checkIfCanAdd( newArray, fourArray, twoArrayIndex, twoAmount, twoArray, 4 );
                    checkIfCanAdd( newArray, twoArray, twoArrayIndex, twoAmount, twoArray, 2 );
                    resetAllDuplicates();
                }
            }
        }

        // Vertical lines
        for ( var index = 0; index < length; index++ )
        {
            if ( index == 0 || index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 )
            {
                if ( ( array[index] == 0 || array[index] == "X" ) && ( array[index + 4] == 0 || array[index + 4] == "X" ) && ( array[index] != "X" || array[index + 4] != "X" ) )
                {
                    newArray = [ index, index + 4 ];
                    checkIfCanAdd( newArray, eightArray, twoArrayIndex, twoAmount, twoArray, 8 );
                    checkIfCanAdd( newArray, fourArray, twoArrayIndex, twoAmount, twoArray, 4 );
                    checkIfCanAdd( newArray, twoArray, twoArrayIndex, twoAmount, twoArray, 2 );
                    resetAllDuplicates();
                }
            }
        }

        // Horizontal Wraps
        for ( var index = 0; index < length; index++ )
        {
            if ( index == 0 || index == 4 || index == 8 || index == 12 )
            {
                if ( ( array[index] == 0 || array[index] == "X" ) && ( array[index + 3] == 0 || array[index + 3] == "X" ) && ( array[index] != "X" || array[index + 3] != "X" ) )
                {
                    newArray = [ index, index + 3 ];
                    checkIfCanAdd( newArray, eightArray, twoArrayIndex, twoAmount, twoArray, 8 );
                    checkIfCanAdd( newArray, fourArray, twoArrayIndex, twoAmount, twoArray, 4 );
                    checkIfCanAdd( newArray, twoArray, twoArrayIndex, twoAmount, twoArray, 2 );
                    resetAllDuplicates();
                }
            }
        }

        // Vertical Wraps
        for ( var index = 0; index < length; index++ )
        {
            if ( index == 0 || index == 1 || index == 2 || index == 3 )
            {
                if ( ( array[index] == 0 || array[index] == "X" ) && ( array[index + 12] == 0 || array[index + 12] == "X" ) && ( array[index] != "X" || array[index + 12] != "X" ) )
                {
                    newArray = [ index, index + 12 ];
                    checkIfCanAdd( newArray, eightArray, twoArrayIndex, twoAmount, twoArray, 8 );
                    checkIfCanAdd( newArray, fourArray, twoArrayIndex, twoAmount, twoArray, 4 );
                    checkIfCanAdd( newArray, twoArray, twoArrayIndex, twoAmount, twoArray, 2 );
                    resetAllDuplicates();
                }
            }
        }
    }

    if ( twoArray[0] != null && fourArray[0] != null )
    {
        twoArray = eliminateRedundanciesFromTwoArrays( twoArray, fourArray, twoArray );
    }
    
    else 
    {
        twoArray = eliminateRedundancies( twoArray );
    }
}

// Eliminates Redundacies within one array
function eliminateRedundancies( arrayPassed )
{    
    if ( arrayPassed != null )
    {        
        for ( var outerIndex = arrayPassed.length - 1; outerIndex > 0; outerIndex-- )
        {
            resetAllDuplicates();

            for ( var innerIndex = 0; innerIndex < arrayPassed.length; innerIndex++ )
            {
                if ( arrayPassed[outerIndex] != arrayPassed[innerIndex] )
                {
                    checkForDuplicates( arrayPassed[outerIndex], arrayPassed[innerIndex] );

                    if ( arrayPassed[innerIndex].length == 4 )
                    {
                        if ( iOneDup && iTwoDup && iThreeDup && iFourDup )
                        {
                            arrayPassed.splice( outerIndex, 1 );
                            resetAllDuplicates();
                        }
                    }

                    else if ( arrayPassed[innerIndex].length == 2 )
                    {
                        if ( iOneDup && iTwoDup )
                        {
                            arrayPassed.splice( outerIndex, 1 );
                            resetAllDuplicates();
                        }
                    }
                }
            }
        }
        
        for ( var outerIndex = 0; outerIndex < arrayPassed.length; outerIndex++ )
        {
            resetAllDuplicates();

            for ( var innerIndex = arrayPassed.length - 1; innerIndex > 0; innerIndex-- )
            {
                if ( arrayPassed[outerIndex] != arrayPassed[innerIndex] )
                {
                    checkForDuplicates( arrayPassed[outerIndex], arrayPassed[innerIndex] );

                    if ( arrayPassed[innerIndex].length == 4 )
                    {
                        if ( iOneDup && iTwoDup && iThreeDup && iFourDup )
                        {
                            arrayPassed.splice( outerIndex, 1 );
                            resetAllDuplicates();
                        }
                    }

                    else if ( arrayPassed[innerIndex].length == 2 )
                    {
                        if ( iOneDup && iTwoDup )
                        {
                            arrayPassed.splice( outerIndex, 1 );
                            resetAllDuplicates();
                        }
                    }
                }
            }
        }
        
        return arrayPassed;
    }
    
    return arrayPassed;
}

// Eliminates redundacies within 2 arrays
function eliminateRedundanciesFromTwoArrays( arrayPassed, otherArrayPassed, lastArrayPassed )
{
    if ( arrayPassed != null && otherArrayPassed != null )
    {        
        for ( var outerIndex = 0; outerIndex < arrayPassed.length; outerIndex++ )
        {
            resetAllDuplicates();

            for ( var innerIndex = 0; innerIndex < otherArrayPassed.length; innerIndex++ )
            {
                checkForDuplicates( arrayPassed[outerIndex], otherArrayPassed[innerIndex] );

                if ( iOneDup && iTwoDup )
                {
                    arrayPassed.splice( outerIndex, 1 );
                    resetAllDuplicates();
                }
            }
            
            for ( var index = 0; index < lastArrayPassed.length; index++ )
            {
                if ( arrayPassed[outerIndex] != lastArrayPassed[index] )
                {
                    checkForDuplicates( arrayPassed[outerIndex], lastArrayPassed[index] );
                    
                    if ( iOneDup && iTwoDup )
                    {
                        arrayPassed.splice( outerIndex, 1 );
                        resetAllDuplicates();
                    }
                }
            }
        }
        
        return arrayPassed;
    }
    
    return arrayPassed;
}

function checkIfCanAdd( arrayPassed, comparedArray, arrayIndex, arrayAmount, array, number )
{
    var count = 0;
    var whileIndex = 0;  
    
    while ( comparedArray[whileIndex] != null )
    {
        checkForDuplicates( arrayPassed, comparedArray[whileIndex] );
        whileIndex += 1;
    }

    if ( count == 0 && ( !iOneDup || !iTwoDup || !iThreeDup || !iFourDup ) && arrayPassed.length == 4 && number == 4 )
    {
        arrayIndex = createArraySpace( array );
        array[arrayIndex] = arrayPassed;
        arrayAmount += 1;
    }
    
    else if ( count == 0 && ( !iOneDup || !iTwoDup ) && arrayPassed.length == 2 && number == 2 )
    {  
        arrayIndex = createArraySpace( array );
        array[arrayIndex] = arrayPassed;
        arrayAmount += 1;
    }
    
    else
    {
        count += 1;
    }
}

// Compares two arrays for duplicates
function checkForDuplicates( arrayOne, arrayTwo )
{    
    if ( arrayTwo != null )
    {
        for ( var arrayOneIndex = 0; arrayOneIndex < arrayOne.length; arrayOneIndex++ )
        {
            for ( var arrayTwoIndex = 0; arrayTwoIndex < arrayTwo.length; arrayTwoIndex++ )
            {
                if ( arrayOne[arrayOneIndex] == arrayTwo[arrayTwoIndex] )
                {
                    if ( arrayOneIndex == 0 )
                    {
                        iOneDup = true;
                    }

                    else if ( arrayOneIndex == 1 )
                    {
                        iTwoDup = true;
                    }

                    else if ( arrayOneIndex == 2 )
                    {
                        iThreeDup = true;
                    }

                    else if ( arrayOneIndex == 3 )
                    {
                        iFourDup = true;
                    }
                }
            }
        }
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
function checkIfArraysMatch( arrayOne, arrayTwo )
{
    var sizeEqual = arrayOne.length == arrayTwo.length;
    var count = 0;
    
    if ( sizeEqual && arrayOne[0] != null )
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
    
    else if ( arrayOne[0] == null && arrayTwo[0] == null )
    {
        return true;
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

// Autodraws rectangles from a given array
function autodrawRectangles( arrayPassed )
{
    // 30 80 for vertical, 80 30 for horizontal
    // Sets drawing canvas to random color
    var canvas = document.getElementById('myKMapCanvas');
    var context = canvas.getContext('2d');
    var startX;
    var startY;
    var width;
    var height;
    var heightCounter;
    var valueAtIndex;
    
    if ( arrayPassed[0] != null )
    {   
        // For sixteen array
        if ( arrayPassed[0].length == 16 )
        {
            startX = 110;
            startY = 110;
            context.strokeStyle = generateColor();
            width = 180;
            height = 180;
            context.strokeRect( startX, startY, width, height );
        }
        
        // For eight array
        else if ( arrayPassed[0].length == 8 )
        {
            for ( var index = 0; index < arrayPassed.length; index++ )
            {
                startX = 110;
                startY = 110;
                context.strokeStyle = generateColor();
                
                // Horizontal Eights
                if ( arrayPassed[index][7] - arrayPassed[index][0] == 7 )
                {
                    heightCounter = arrayPassed[index][0];
                    width = 180;
                    height = 80;
                    
                    while ( heightCounter > 0 )
                    {
                        startY += 50;
                        heightCounter -= 4;
                    }

                    context.strokeRect( startX, startY, width, height );
                }
                
                // Vertical Eights
                else if ( arrayPassed[index][7] - arrayPassed[index][0] == 13 )
                {
                    heightCounter = arrayPassed[index][0];
                    width = 80;
                    height = 180;
                    
                    while ( heightCounter > 0 )
                    {
                        startX += 50;
                        heightCounter -= 1;
                    }

                    context.strokeRect( startX, startY, width, height );
                }
                
                // Horizontal Eight Wrap
                else if ( arrayPassed[index][6] - arrayPassed[index][2] == 8 )
                {
                    startX = 100;
                    width = 40;
                    height = 180;
                    context.strokeRect( startX, startY, width, height );
                    startX = 260;
                    context.strokeRect( startX, startY, width, height );
                }
                
                // Vertical Eight Wrap
                else if ( arrayPassed[index][6] - arrayPassed[index][2] == 12 )
                {
                    startY = 100;
                    width = 180;
                    height = 40;
                    context.strokeRect( startX, startY, width, height );
                    startY = 260;
                    context.strokeRect( startX, startY, width, height );
                }
            }
        }
        
        // For four array
        else if ( arrayPassed[0].length == 4 )
        {            
            for ( var index = 0; index < arrayPassed.length; index++ )
            {
                startX = 110;
                startY = 110;
                context.strokeStyle = generateColor();
                
                // Horizontal Quads
                if ( arrayPassed[index][3] - arrayPassed[index][0] == 3 )
                {
                    heightCounter = arrayPassed[index][0];
                    width = 180;
                    height = 30;
                    
                    while ( heightCounter > 0 )
                    {
                        startY += 50;
                        heightCounter -= 4;
                    }

                    context.strokeRect( startX, startY, width, height );
                }
                
                // Vertical Quads
                else if ( arrayPassed[index][3] - arrayPassed[index][0] == 12 )
                {
                    heightCounter = arrayPassed[index][0];
                    width = 30;
                    height = 180;
                    
                    while ( heightCounter > 0 )
                    {
                        startX += 50;
                        heightCounter -= 1;
                    }

                    context.strokeRect( startX, startY, width, height );
                }
                
                // Quad squares
                else if ( arrayPassed[index][3] - arrayPassed[index][0] == 5 )
                {
                    width = 80;
                    height = 80;
                    valueAtIndex = arrayPassed[index][0];
                    
                    if ( valueAtIndex == 0 || valueAtIndex == 1 || valueAtIndex == 2 )
                    {
                        startX += arrayPassed[index][0] * 50;
                        context.strokeRect( startX, startY, width, height );   
                    }
                    
                    else if ( valueAtIndex == 4 || valueAtIndex == 5 || valueAtIndex == 6 )
                    {
                        startX += ( arrayPassed[index][0] - 4 ) * 50;
                        startY += 50;
                        context.strokeRect( startX, startY, width, height );   
                    }
                    
                    else if ( valueAtIndex == 8 || valueAtIndex == 9 || valueAtIndex == 10 )
                    {
                        startX += ( arrayPassed[index][0] - 8 ) * 50;
                        startY += 100;
                        context.strokeRect( startX, startY, width, height );   
                    }
                }
                
                // Horizontal Quad Wrap
                else if ( arrayPassed[index][3] - arrayPassed[index][0] == 7 )
                {
                    heightCounter = arrayPassed[index][0];
                    width = 40;
                    height = 80;
                    
                    while ( heightCounter > 0 )
                    {
                        startY += 50;
                        heightCounter -= 4;
                    }
    
                    startX = 100;
                    context.strokeRect( startX, startY, width, height );
                    startX = 260;
                    context.strokeRect( startX, startY, width, height );
                }
                
                // Vertical Quad Wrap
                else if ( arrayPassed[index][3] - arrayPassed[index][0] == 13 )
                {
                    heightCounter = arrayPassed[index][0];
                    width = 80;
                    height = 40;
                    
                    while ( heightCounter > 0 )
                    {
                        startX += 50;
                        heightCounter -= 1;
                    }
    
                    startY = 100;
                    context.strokeRect( startX, startY, width, height );
                    startY = 260;
                    context.strokeRect( startX, startY, width, height );
                }
                
                // Four corner quad wrap
                else if ( arrayPassed[index][2] - arrayPassed[index][0] == 12 )
                {
                    context.strokeRect( 100, 100, 40, 40 );
                    context.strokeRect( 260, 100, 40, 40 );
                    context.strokeRect( 100, 260, 40, 40 );
                    context.strokeRect( 260, 260, 40, 40 );
                }
            }
        }
        
        // For pair array
        else if ( arrayPassed[0].length == 2 )
        {            
            for ( var index = 0; index < arrayPassed.length; index++ )
            {
                startX = 110;
                startY = 110;
                context.strokeStyle = generateColor();
                
                // Horizontal pair
                if ( arrayPassed[index][1] - arrayPassed[index][0] == 1 )
                {
                    width = 80;
                    height = 30;
                    valueAtIndex = arrayPassed[index][0];
                    
                    if ( valueAtIndex >= 0 && valueAtIndex <= 2 )
                    {
                        startX += valueAtIndex * 50;
                        context.strokeRect( startX, startY, width, height );
                    }
                    
                    else if ( valueAtIndex >= 4 && valueAtIndex <= 6 )
                    {
                        startX += ( valueAtIndex - 4 ) * 50;
                        startY += 50;
                        context.strokeRect( startX, startY, width, height );
                    }
                    
                    else if ( valueAtIndex >= 8 && valueAtIndex <= 10 )
                    {
                        startX += ( valueAtIndex - 8 ) * 50;
                        startY += 100;
                        context.strokeRect( startX, startY, width, height );
                    }
                    
                    else if ( valueAtIndex >= 12 && valueAtIndex <= 14 )
                    {
                        startX += ( valueAtIndex - 12 ) * 50;
                        startY += 150;
                        context.strokeRect( startX, startY, width, height );
                    }
                }
                
                // Vertical pair
                else if ( arrayPassed[index][1] - arrayPassed[index][0] == 4 )
                {
                    width = 30;
                    height = 80;
                    valueAtIndex = arrayPassed[index][0];
                    
                    if ( valueAtIndex >= 0 && valueAtIndex <= 3 )
                    {
                        startX += valueAtIndex * 50;
                        context.strokeRect( startX, startY, width, height );
                    }
                    
                    else if ( valueAtIndex >= 4 && valueAtIndex <= 7 )
                    {
                        startX += ( valueAtIndex - 4 ) * 50;
                        startY += 50;
                        context.strokeRect( startX, startY, width, height );
                    }
                    
                    else if ( valueAtIndex >= 8 && valueAtIndex <= 11 )
                    {
                        startX += ( valueAtIndex - 8 ) * 50;
                        startY += 100;
                        context.strokeRect( startX, startY, width, height );
                    }
                }
                
                // Horizonal pair wrap
                else if ( arrayPassed[index][1] - arrayPassed[index][0] == 3 )
                {
                    width = 40;
                    height = 30;
                    valueAtIndex = arrayPassed[index][0];
                    
                    while ( valueAtIndex > 0 )
                    {
                        startY += 50;
                        valueAtIndex -= 4;
                    }
                    
                    startX = 100;
                    context.strokeRect( startX, startY, width, height );
                    startX = 260;
                    context.strokeRect( startX, startY, width, height );
                }
                
                // Vertical pair wrap
                else if ( arrayPassed[index][1] - arrayPassed[index][0] == 12 )
                {
                    width = 30;
                    height = 40;
                    valueAtIndex = arrayPassed[index][0];
                    
                    while ( valueAtIndex > 0 )
                    {
                        startX += 50;
                        valueAtIndex -= 1;
                    }
                    
                    startY = 100;
                    context.strokeRect( startX, startY, width, height );
                    startY = 260;
                    context.strokeRect( startX, startY, width, height );
                }
            }
        }
    }
}

// Adds values to equation array
function addValuesToEquationArray( arrayPassed )
{
    var firstIndex;
    var lastIndex;
    
    if ( arrayPassed[0] != null )
    {
        // For sixteens
        if ( arrayPassed[0].length == 16 )
        {
            addToEquationArray( "1" );
        }
        
        // For eights
        else if ( arrayPassed[0].length == 8 )
        {
            for ( var index = 0; index < arrayPassed.length; index++ )
            {
                firstIndex = arrayPassed[index][0];
                lastIndex = arrayPassed[index][7];
                
                // For four variable
                if ( array.length == 16 )
                {
                    // Horizontals
                    if ( firstIndex == 0 && lastIndex == 7 )
                    {
                        addToEquationArray( "A'" );
                    }

                    else if ( firstIndex == 4 && lastIndex == 11 )
                    {
                        addToEquationArray( "B" );
                    }

                    else if ( firstIndex == 8 && lastIndex == 15 )
                    {
                        addToEquationArray( "A" );
                    }

                    // Verticals
                    else if ( firstIndex == 0 && lastIndex == 13 )
                    {
                        addToEquationArray( "C'" );
                    }

                    else if ( firstIndex == 1 && lastIndex == 14 )
                    {
                        addToEquationArray( "D" );
                    }

                    else if ( firstIndex == 2 && lastIndex == 15 )
                    {
                        addToEquationArray( "C" );
                    }

                    // Horizontal wrap
                    else if ( firstIndex == 0 && lastIndex == 15 && arrayPassed[index][1] != 1 )
                    {
                        addToEquationArray( "D'" );
                    }

                    // Vertical wrap
                    else if ( firstIndex == 0 && lastIndex == 15 )
                    {
                        addToEquationArray( "B'" );
                    }
                }
                
                else
                {
                    addToEquationArray( "1" );
                }
            }
        }
        
        // For quads
        else if ( arrayPassed[0].length == 4 )
        {
            for ( var index = 0; index < arrayPassed.length; index++ )
            {
                firstIndex = arrayPassed[index][0];
                lastIndex = arrayPassed[index][3];
                
                if ( array.length == 16 )
                {
                    // Horizontals
                    if ( firstIndex == 0 && lastIndex == 3 )
                    {
                        addToEquationArray( "A'B'" );
                    }

                    else if ( firstIndex == 4 && lastIndex == 7 )
                    {
                        addToEquationArray( "A'B" );
                    }

                    else if ( firstIndex == 8 && lastIndex == 11 )
                    {
                        addToEquationArray( "AB" );
                    }

                    else if ( firstIndex == 12 && lastIndex == 15 )
                    {
                        addToEquationArray( "AB'" );
                    }

                    // Verticals
                    else if ( firstIndex == 0 && lastIndex == 12 )
                    {
                        addToEquationArray( "C'D'" );
                    }

                    else if ( firstIndex == 1 && lastIndex == 13 )
                    {
                        addToEquationArray( "C'D" );
                    }

                    else if ( firstIndex == 2 && lastIndex == 14 )
                    {
                        addToEquationArray( "CD" );
                    }

                    else if ( firstIndex == 3 && lastIndex == 15 )
                    {
                        addToEquationArray( "CD'" );
                    }

                    // Horizontal wraps
                    else if ( firstIndex == 0 && lastIndex == 7 )
                    {
                        addToEquationArray( "A'D'" );
                    }

                    else if ( firstIndex == 4 && lastIndex == 11 )
                    {
                        addToEquationArray( "BD'" );
                    }

                    else if ( firstIndex == 8 && lastIndex == 15 )
                    {
                        addToEquationArray( "AD'" );
                    }

                    // Squares ( from top left to bottom right )
                    else if ( firstIndex == 0 && lastIndex == 5 )
                    {
                        addToEquationArray( "A'C'" );
                    }

                    else if ( firstIndex == 1 && lastIndex == 6 )
                    {
                        addToEquationArray( "A'D" );
                    }

                    else if ( firstIndex == 2 && lastIndex == 7 )
                    {
                        addToEquationArray( "A'C" );
                    }

                    else if ( firstIndex == 4 && lastIndex == 9 )
                    {
                        addToEquationArray( "BC'" );
                    }

                    else if ( firstIndex == 5 && lastIndex == 10 )
                    {
                        addToEquationArray( "BD" );
                    }

                    else if ( firstIndex == 6 && lastIndex == 11 )
                    {
                        addToEquationArray( "BC" );
                    }

                    else if ( firstIndex == 8 && lastIndex == 13 )
                    {
                        addToEquationArray( "AC'" );
                    }

                    else if ( firstIndex == 9 && lastIndex == 14 )
                    {
                        addToEquationArray( "AD" );
                    }

                    else if ( firstIndex == 10 && lastIndex == 15 )
                    {
                        addToEquationArray( "AC" );
                    }

                    // Vertical wraps
                    else if ( firstIndex == 0 && lastIndex == 13 )
                    {
                        addToEquationArray( "B'C'" );
                    }

                    else if ( firstIndex == 1 && lastIndex == 14 )
                    {
                        addToEquationArray( "B'D" );
                    }

                    else if ( firstIndex == 2 && lastIndex == 15 )
                    {
                        addToEquationArray( "B'C" );
                    }

                    // Four corner quad
                    else if ( firstIndex == 0 && lastIndex == 15 )
                    {
                        addToEquationArray( "B'D'" );
                    }
                }
                
                else 
                {
                    // Horizontals 
                    if ( firstIndex == 0 && lastIndex == 3 )
                    {
                        addToEquationArray( "A'" );
                    }
                    
                    else if ( firstIndex == 4 && lastIndex == 7 )
                    {
                        addToEquationArray( "A" );
                    }
                    
                    // Squares
                    else if ( firstIndex == 0 && lastIndex == 5 )
                    {
                        addToEquationArray( "B'" );
                    }
                    
                    else if ( firstIndex == 1 && lastIndex == 6 )
                    {
                        addToEquationArray( "C" );
                    }
                    
                    else if ( firstIndex == 2 && lastIndex == 7 )
                    {
                        addToEquationArray( "B" );
                    }
                    
                    // Wrap
                    else if ( firstIndex == 0 && lastIndex == 7 )
                    {
                        addToEquationArray( "C'" );
                    }
                }
            }
        }
        
        // For pairs
        else if ( arrayPassed[0].length == 2 )
        {
            for ( var index = 0; index < arrayPassed.length; index++ )
            {
                firstIndex = arrayPassed[index][0];
                lastIndex = arrayPassed[index][1];
                
                if ( array.length == 16 )
                {
                    // Horizontals
                    if ( firstIndex == 0 && lastIndex == 1 )
                    {
                        addToEquationArray( "A'B'C'" );
                    }

                    else if ( firstIndex == 1 && lastIndex == 2 )
                    {
                        addToEquationArray( "A'B'D" );
                    }

                    else if ( firstIndex == 2 && lastIndex == 3 )
                    {
                        addToEquationArray( "A'B'C" );
                    }

                    else if ( firstIndex == 4 && lastIndex == 5 )
                    {
                        addToEquationArray( "A'BC'" );
                    }

                    else if ( firstIndex == 5 && lastIndex == 6 )
                    {
                        addToEquationArray( "A'BD" );
                    }

                    else if ( firstIndex == 6 && lastIndex == 7 )
                    {
                        addToEquationArray( "A'BC" );
                    }

                    else if ( firstIndex == 8 && lastIndex == 9 )
                    {
                        addToEquationArray( "ABC'" );
                    }

                    else if ( firstIndex == 9 && lastIndex == 10 )
                    {
                        addToEquationArray( "ABD" );
                    }

                    else if ( firstIndex == 10 && lastIndex == 11 )
                    {
                        addToEquationArray( "ABC" );
                    }

                    else if ( firstIndex == 12 && lastIndex == 13 )
                    {
                        addToEquationArray( "AB'C'" );
                    }

                    else if ( firstIndex == 13 && lastIndex == 14 )
                    {
                        addToEquationArray( "AB'D" );
                    }

                    else if ( firstIndex == 14 && lastIndex == 15 )
                    {
                        addToEquationArray( "AB'C" );
                    }

                    // Verticals
                    else if ( firstIndex == 0 && lastIndex == 4 )
                    {
                        addToEquationArray( "A'C'D'" );
                    }

                    else if ( firstIndex == 1 && lastIndex == 5 )
                    {
                        addToEquationArray( "A'C'D" );
                    }

                    else if ( firstIndex == 2 && lastIndex == 6 )
                    {
                        addToEquationArray( "A'CD" );
                    }

                    else if ( firstIndex == 3 && lastIndex == 7 )
                    {
                        addToEquationArray( "A'CD'" );
                    }

                    else if ( firstIndex == 4 && lastIndex == 8 )
                    {
                        addToEquationArray( "BC'D'" );
                    }

                    else if ( firstIndex == 5 && lastIndex == 9 )
                    {
                        addToEquationArray( "BC'D" );
                    }

                    else if ( firstIndex == 6 && lastIndex == 10 )
                    {
                        addToEquationArray( "BCD" );
                    }

                    else if ( firstIndex == 7 && lastIndex == 11 )
                    {
                        addToEquationArray( "BCD'" );
                    }

                    else if ( firstIndex == 8 && lastIndex == 12 )
                    {
                        addToEquationArray( "AC'D'" );
                    }

                    else if ( firstIndex == 9 && lastIndex == 13 )
                    {
                        addToEquationArray( "AC'D" );
                    }

                    else if ( firstIndex == 10 && lastIndex == 14 )
                    {
                        addToEquationArray( "ACD" );
                    }

                    else if ( firstIndex == 11 && lastIndex == 15 )
                    {
                        addToEquationArray( "ACD'" );
                    }

                    // Horizontal pair wraps
                    else if ( firstIndex == 0 && lastIndex == 3 )
                    {
                        addToEquationArray( "A'B'D'" );
                    }

                    else if ( firstIndex == 4 && lastIndex == 7 )
                    {
                        addToEquationArray( "A'BD'" );
                    }

                    else if ( firstIndex == 8 && lastIndex == 11 )
                    {
                        addToEquationArray( "ABD'" );
                    }

                    else if ( firstIndex == 12 && lastIndex == 15 )
                    {
                        addToEquationArray( "AB'D'" );
                    }

                    // Vertical pair wraps
                    else if ( firstIndex == 0 && lastIndex == 12 )
                    {
                        addToEquationArray( "B'C'D'" );
                    }

                    else if ( firstIndex == 1 && lastIndex == 13 )
                    {
                        addToEquationArray( "B'C'D" );
                    }

                    else if ( firstIndex == 2 && lastIndex == 14 )
                    {
                        addToEquationArray( "B'CD" );
                    }

                    else if ( firstIndex == 3 && lastIndex == 15 )
                    {
                        addToEquationArray( "B'CD'" );
                    }
                }
                
                else 
                {
                    // Horizontal
                    if ( firstIndex == 0 && lastIndex == 1 )
                    {
                        addToEquationArray( "A'B'" );
                    }
                    
                    else if ( firstIndex == 1 && lastIndex == 2 )
                    {
                        addToEquationArray( "A'C" );
                    }
                    
                    else if ( firstIndex == 2 && lastIndex == 3 )
                    {
                        addToEquationArray( "A'B" );
                    }
                    
                    else if ( firstIndex == 4 && lastIndex == 5 )
                    {
                        addToEquationArray( "AB'" );
                    }
                    
                    else if ( firstIndex == 5 && lastIndex == 6 )
                    {
                        addToEquationArray( "AC" );
                    }
                    
                    else if ( firstIndex == 6 && lastIndex == 7 )
                    {
                        addToEquationArray( "AB" );
                    }
                    
                    // Vertical 
                    else if ( firstIndex == 0 && lastIndex == 4 )
                    {
                        addToEquationArray( "B'C'" );
                    }
                    
                    else if ( firstIndex == 1 && lastIndex == 5 )
                    {
                        addToEquationArray( "B'C" );
                    }
                    
                    else if ( firstIndex == 2 && lastIndex == 6 )
                    {
                        addToEquationArray( "BC" );
                    }
                    
                    else if ( firstIndex == 3 && lastIndex == 7 )
                    {
                        addToEquationArray( "BC'" );
                    }
                    
                    // Wraps
                    else if ( firstIndex == 0 && lastIndex == 3 )
                    {
                        addToEquationArray( "A'C'" );
                    }
                    
                    else if ( firstIndex == 4 && lastIndex == 7 )
                    {
                        addToEquationArray( "AC'" );
                    }
                }
            }
        }       
    }
}

// Adds values to equation array ( Product of Sums )
function addValuesToEquationArrayPOS( arrayPassed )
{
    var firstIndex;
    var lastIndex;
    
    if ( arrayPassed[0] != null )
    {
        // For sixteens
        if ( arrayPassed[0].length == 16 )
        {
            addToEquationArray( "0" );
        }
        
        // For eights
        else if ( arrayPassed[0].length == 8 )
        {
            for ( var index = 0; index < arrayPassed.length; index++ )
            {
                firstIndex = arrayPassed[index][0];
                lastIndex = arrayPassed[index][7];
                
                // For four variable
                if ( array.length == 16 )
                {
                    // Horizontals
                    if ( firstIndex == 0 && lastIndex == 7 )
                    {
                        addToEquationArray( "(A)" );
                    }

                    else if ( firstIndex == 4 && lastIndex == 11 )
                    {
                        addToEquationArray( "(B')" );
                    }

                    else if ( firstIndex == 8 && lastIndex == 15 )
                    {
                        addToEquationArray( "(A')" );
                    }

                    // Verticals
                    else if ( firstIndex == 0 && lastIndex == 13 )
                    {
                        addToEquationArray( "(C)" );
                    }

                    else if ( firstIndex == 1 && lastIndex == 14 )
                    {
                        addToEquationArray( "(D')" );
                    }

                    else if ( firstIndex == 2 && lastIndex == 15 )
                    {
                        addToEquationArray( "(C')" );
                    }

                    // Horizontal wrap
                    else if ( firstIndex == 0 && lastIndex == 15 && arrayPassed[index][1] != 1 )
                    {
                        addToEquationArray( "(D)" );
                    }

                    // Vertical wrap
                    else if ( firstIndex == 0 && lastIndex == 15 )
                    {
                        addToEquationArray( "(B)" );
                    }
                }
                
                else
                {
                    addToEquationArray( "0" );
                }
            }
        }
        
        // For quads
        else if ( arrayPassed[0].length == 4 )
        {
            for ( var index = 0; index < arrayPassed.length; index++ )
            {
                firstIndex = arrayPassed[index][0];
                lastIndex = arrayPassed[index][3];
                
                if ( array.length == 16 )
                {
                    // Horizontals
                    if ( firstIndex == 0 && lastIndex == 3 )
                    {
                        addToEquationArray( "(A+B)" );
                    }

                    else if ( firstIndex == 4 && lastIndex == 7 )
                    {
                        addToEquationArray( "(A+B')" );
                    }

                    else if ( firstIndex == 8 && lastIndex == 11 )
                    {
                        addToEquationArray( "(A'+B')" );
                    }

                    else if ( firstIndex == 12 && lastIndex == 15 )
                    {
                        addToEquationArray( "(A'+B)" );
                    }

                    // Verticals
                    else if ( firstIndex == 0 && lastIndex == 12 )
                    {
                        addToEquationArray( "(C+D)" );
                    }

                    else if ( firstIndex == 1 && lastIndex == 13 )
                    {
                        addToEquationArray( "(C+D')" );
                    }

                    else if ( firstIndex == 2 && lastIndex == 14 )
                    {
                        addToEquationArray( "(C'+D')" );
                    }

                    else if ( firstIndex == 3 && lastIndex == 15 )
                    {
                        addToEquationArray( "(C'+D)" );
                    }

                    // Horizontal wraps
                    else if ( firstIndex == 0 && lastIndex == 7 )
                    {
                        addToEquationArray( "(A+D)" );
                    }

                    else if ( firstIndex == 4 && lastIndex == 11 )
                    {
                        addToEquationArray( "(B'+D)" );
                    }

                    else if ( firstIndex == 8 && lastIndex == 15 )
                    {
                        addToEquationArray( "(A'+D)" );
                    }

                    // Squares ( from top left to bottom right )
                    else if ( firstIndex == 0 && lastIndex == 5 )
                    {
                        addToEquationArray( "(A+C)" );
                    }

                    else if ( firstIndex == 1 && lastIndex == 6 )
                    {
                        addToEquationArray( "(A+D')" );
                    }

                    else if ( firstIndex == 2 && lastIndex == 7 )
                    {
                        addToEquationArray( "(A+C')" );
                    }

                    else if ( firstIndex == 4 && lastIndex == 9 )
                    {
                        addToEquationArray( "(B'+C)" );
                    }

                    else if ( firstIndex == 5 && lastIndex == 10 )
                    {
                        addToEquationArray( "(B'+D')" );
                    }

                    else if ( firstIndex == 6 && lastIndex == 11 )
                    {
                        addToEquationArray( "(B'+C')" );
                    }

                    else if ( firstIndex == 8 && lastIndex == 13 )
                    {
                        addToEquationArray( "(A'+C)" );
                    }

                    else if ( firstIndex == 9 && lastIndex == 14 )
                    {
                        addToEquationArray( "(A'+D')" );
                    }

                    else if ( firstIndex == 10 && lastIndex == 15 )
                    {
                        addToEquationArray( "(A'+C')" );
                    }

                    // Vertical wraps
                    else if ( firstIndex == 0 && lastIndex == 13 )
                    {
                        addToEquationArray( "(B+C)" );
                    }

                    else if ( firstIndex == 1 && lastIndex == 14 )
                    {
                        addToEquationArray( "(B+D')" );
                    }

                    else if ( firstIndex == 2 && lastIndex == 15 )
                    {
                        addToEquationArray( "(B+C')" );
                    }

                    // Four corner quad
                    else if ( firstIndex == 0 && lastIndex == 15 )
                    {
                        addToEquationArray( "(B+D)" );
                    }
                }
                
                else 
                {
                    // Horizontals 
                    if ( firstIndex == 0 && lastIndex == 3 )
                    {
                        addToEquationArray( "(A)" );
                    }
                    
                    else if ( firstIndex == 4 && lastIndex == 7 )
                    {
                        addToEquationArray( "(A')" );
                    }
                    
                    // Squares
                    else if ( firstIndex == 0 && lastIndex == 5 )
                    {
                        addToEquationArray( "(B)" );
                    }
                    
                    else if ( firstIndex == 1 && lastIndex == 6 )
                    {
                        addToEquationArray( "(C')" );
                    }
                    
                    else if ( firstIndex == 2 && lastIndex == 7 )
                    {
                        addToEquationArray( "(B')" );
                    }
                    
                    // Wrap
                    else if ( firstIndex == 0 && lastIndex == 7 )
                    {
                        addToEquationArray( "(C)" );
                    }
                }
            }
        }
        
        // For pairs
        else if ( arrayPassed[0].length == 2 )
        {
            for ( var index = 0; index < arrayPassed.length; index++ )
            {
                firstIndex = arrayPassed[index][0];
                lastIndex = arrayPassed[index][1];
                
                if ( array.length == 16 )
                {
                    // Horizontals
                    if ( firstIndex == 0 && lastIndex == 1 )
                    {
                        addToEquationArray( "(A+B+C)" );
                    }

                    else if ( firstIndex == 1 && lastIndex == 2 )
                    {
                        addToEquationArray( "(A+B+D')" );
                    }

                    else if ( firstIndex == 2 && lastIndex == 3 )
                    {
                        addToEquationArray( "(A+B+C)" );
                    }

                    else if ( firstIndex == 4 && lastIndex == 5 )
                    {
                        addToEquationArray( "(A+B'+C)" );
                    }

                    else if ( firstIndex == 5 && lastIndex == 6 )
                    {
                        addToEquationArray( "(A+B'+D)" );
                    }

                    else if ( firstIndex == 6 && lastIndex == 7 )
                    {
                        addToEquationArray( "(A+B'+C')" );
                    }

                    else if ( firstIndex == 8 && lastIndex == 9 )
                    {
                        addToEquationArray( "(A'+B'+C)" );
                    }

                    else if ( firstIndex == 9 && lastIndex == 10 )
                    {
                        addToEquationArray( "(A'+B'+D')" );
                    }

                    else if ( firstIndex == 10 && lastIndex == 11 )
                    {
                        addToEquationArray( "(A'+B'+C')" );
                    }

                    else if ( firstIndex == 12 && lastIndex == 13 )
                    {
                        addToEquationArray( "(A'+B+C)" );
                    }

                    else if ( firstIndex == 13 && lastIndex == 14 )
                    {
                        addToEquationArray( "(A'+B+D')" );
                    }

                    else if ( firstIndex == 14 && lastIndex == 15 )
                    {
                        addToEquationArray( "(A'+B+C')" );
                    }

                    // Verticals
                    else if ( firstIndex == 0 && lastIndex == 4 )
                    {
                        addToEquationArray( "(A+C+D)" );
                    }

                    else if ( firstIndex == 1 && lastIndex == 5 )
                    {
                        addToEquationArray( "(A+C+D')" );
                    }

                    else if ( firstIndex == 2 && lastIndex == 6 )
                    {
                        addToEquationArray( "(A+C'+D')" );
                    }

                    else if ( firstIndex == 3 && lastIndex == 7 )
                    {
                        addToEquationArray( "(A+C'+D)" );
                    }

                    else if ( firstIndex == 4 && lastIndex == 8 )
                    {
                        addToEquationArray( "(B'+C+D)" );
                    }

                    else if ( firstIndex == 5 && lastIndex == 9 )
                    {
                        addToEquationArray( "(B'+C+D')" );
                    }

                    else if ( firstIndex == 6 && lastIndex == 10 )
                    {
                        addToEquationArray( "(B'+C'+D')" );
                    }

                    else if ( firstIndex == 7 && lastIndex == 11 )
                    {
                        addToEquationArray( "(B'+C'+D)" );
                    }

                    else if ( firstIndex == 8 && lastIndex == 12 )
                    {
                        addToEquationArray( "(A'+C+D)" );
                    }

                    else if ( firstIndex == 9 && lastIndex == 13 )
                    {
                        addToEquationArray( "(A'+C+D')" );
                    }

                    else if ( firstIndex == 10 && lastIndex == 14 )
                    {
                        addToEquationArray( "(A'+C'+D')" );
                    }

                    else if ( firstIndex == 11 && lastIndex == 15 )
                    {
                        addToEquationArray( "(A'+C'+D)" );
                    }

                    // Horizontal pair wraps
                    else if ( firstIndex == 0 && lastIndex == 3 )
                    {
                        addToEquationArray( "(A+B+D)" );
                    }

                    else if ( firstIndex == 4 && lastIndex == 7 )
                    {
                        addToEquationArray( "(A+B'+D)" );
                    }

                    else if ( firstIndex == 8 && lastIndex == 11 )
                    {
                        addToEquationArray( "(A'+B'+D)" );
                    }

                    else if ( firstIndex == 12 && lastIndex == 15 )
                    {
                        addToEquationArray( "(A'+B+D)" );
                    }

                    // Vertical pair wraps
                    else if ( firstIndex == 0 && lastIndex == 12 )
                    {
                        addToEquationArray( "(B+C+D)" );
                    }

                    else if ( firstIndex == 1 && lastIndex == 13 )
                    {
                        addToEquationArray( "(B+C+D')" );
                    }

                    else if ( firstIndex == 2 && lastIndex == 14 )
                    {
                        addToEquationArray( "(B+C'+D')" );
                    }

                    else if ( firstIndex == 3 && lastIndex == 15 )
                    {
                        addToEquationArray( "(B+C'+D)" );
                    }
                }
                
                else 
                {
                    // Horizontal
                    if ( firstIndex == 0 && lastIndex == 1 )
                    {
                        addToEquationArray( "(A+B)" );
                    }
                    
                    else if ( firstIndex == 1 && lastIndex == 2 )
                    {
                        addToEquationArray( "(A+C')" );
                    }
                    
                    else if ( firstIndex == 2 && lastIndex == 3 )
                    {
                        addToEquationArray( "(A+B')" );
                    }
                    
                    else if ( firstIndex == 4 && lastIndex == 5 )
                    {
                        addToEquationArray( "(A'+B)" );
                    }
                    
                    else if ( firstIndex == 5 && lastIndex == 6 )
                    {
                        addToEquationArray( "(A'+C')" );
                    }
                    
                    else if ( firstIndex == 6 && lastIndex == 7 )
                    {
                        addToEquationArray( "(A'+B')" );
                    }
                    
                    // Vertical 
                    else if ( firstIndex == 0 && lastIndex == 4 )
                    {
                        addToEquationArray( "(B+C)" );
                    }
                    
                    else if ( firstIndex == 1 && lastIndex == 5 )
                    {
                        addToEquationArray( "(B+C')" );
                    }
                    
                    else if ( firstIndex == 2 && lastIndex == 6 )
                    {
                        addToEquationArray( "(B'+C')" );
                    }
                    
                    else if ( firstIndex == 3 && lastIndex == 7 )
                    {
                        addToEquationArray( "(B'+C)" );
                    }
                    
                    // Wraps
                    else if ( firstIndex == 0 && lastIndex == 3 )
                    {
                        addToEquationArray( "(A+C)" );
                    }
                    
                    else if ( firstIndex == 4 && lastIndex == 7 )
                    {
                        addToEquationArray( "(A'+C)" );
                    }
                }
            }
        }       
    }
}

function generateArrayIndex()
{
    var arraysToGenerateFrom3Var = [ [1,"X",1,"X",1,1,1,1], [1,"X",1,"X",0,1,0,1], [1,"X",0,0,"X","X",0,1],
                             [1,"X",1,1,1,1,"X",1], [1,"X","X",1,0,1,0,1],
                             [1,"X",1,"X","X","X",1,1], [1,"X",1,1,0,0,1,1], [1,"X","X",1,"X","X",1,1],
                             [1,"X",0,0,0,"X","X",0], [1,"X",1,1,"X",1,1,"X"], [1,"X","X","X",0,1,1,0],
                             [1,"X",1,0,1,1,"X",0], [1,"X",1,0,1,1,1,1], [1,"X",1,0,1,1,1,0],
                             [1,"X","X","X",1,1,1,1], [1,"X",0,0,1,1,0,1], [1,"X",1,"X","X","X",1,"X"],
                             [1,"X","X",1,0,"X",0,1], [1,"X",1,"X",1,1,"X",1], [1,"X",0,0,1,1,1,1],
                             [1,"X",1,1,1,0,0,"X"], [1,"X",0,0,1,"X",0,1], [1,"X","X",1,0,0,1,"X"],
                             [1,"X","X","X",1,1,"X",1], [1,"X",0,0,"X",1,0,0], [1,"X","X",1,1,0,0,0],
                             [1,"X","X","X",0,0,"X",1],
                             [1,"X",1,1,"X","X","X","X"], [1,"X","X","X","X","X",1,1],  [1,"X","X",1,1,"X",1,1], [1,"X",1,1,1,1,1,1], [1,"X","X",1,0,0,1,1], [1,"X",1,"X",1,"X","X",1],
                             [1,"X",0,1,"X",1,0,0], [1,"X",1,1,1,0,0,0], [1,"X","X",1,"X",1,1,1], [1,"X",1,1,1,"X",1,1], [1,"X",1,1,0,1,1,1], [1,"X",1,"X",1,"X",1,1],
                             [1,"X",1,1,1,"X","X",1], [1,"X",1,0,"X",1,"X",0], [1,"X",0,0,0,"X",0,1],
                             [1,"X",0,0,0,1,1,1], [1,"X",1,1,1,1,0,1], [1,"X",0,"X",1,1,0,1], [1,"X",0,1,1,1,1,0], [1,"X",0,1,1,1,0,0], [1,"X","X",1,1,1,"X",1] ];
    
    var arraysToGenerateFrom = [ [1,1,0,1,1,1,1,1,0,0,"X",1,"X",1,"X","X"],
                             [1,1,1,"X",1,"X",0,0,1,"X",0,"X",1,1,0,1],
                             [1,1,1,"X","X",1,"X",1,0,0,0,0,1,1,1,0],
                             [1,1,1,0,1,1,0,1,0,1,"X",1,1,1,1,1],
                             [1,1,0,0,"X",0,0,1,1,0,1,1,0,1,1,1],
                             [1,1,1,"X",0,1,"X",1,1,"X",1,1,1,1,"X",1],
                             [1,1,0,1,"X","X","X","X",1,"X",1,1,"X",1,0,1],
                             [1,1,"X",1,1,"X",0,1,0,1,"X","X",1,"X",1,1],
                             [1,1,1,0,"X",1,0,1,1,0,0,1,1,1,1,1],
                             [1,1,1,"X",1,"X","X","X",0,1,1,0,1,"X",1,0],
                             [1,1,0,1,1,1,"X",1,1,"X",1,1,1,"X",1,0],
                             [1,1,0,"X",1,1,1,1,1,"X",1,0,"X","X","X",1],
                             [1,1,1,"X",1,1,"X",1,1,1,0,1,1,1,0,0],
                             [1,1,1,0,"X",1,"X",0,1,0,"X",0,"X",1,0,1],
                             [1,1,1,"X","X",0,1,0,1,1,0,1,1,1,0,0],
                             [1,1,1,1,1,"X",1,"X",0,1,"X",1,1,1,"X",0],
                             [1,1,1,1,0,1,0,0,1,1,1,0,1,"X",1,1],
                             [1,1,"X","X",1,1,0,0,1,"X",0,0,"X",1,"X",1],
                             [1,1,1,"X",0,1,0,1,"X",1,1,1,0,"X",0,0],
                             [1,1,1,"X",1,1,1,1,0,1,1,0,0,0,1,"X"],
                             [1,1,"X",1,"X",1,1,1,1,"X",1,1,0,0,1,0],
                             [1,1,1,0,0,0,1,0,1,"X",0,1,0,1,1,1],
                             [1,1,"X","X","X",1,"X",1,1,1,1,"X",1,1,"X","X"],
                             [1,1,1,0,0,0,1,0,0,"X",1,"X",1,"X",0,1],
                             [1,1,1,1,1,0,1,"X","X",0,1,0,"X",1,0,0],
                             [1,1,"X",1,1,1,"X",1,1,1,"X",1,1,1,1,1],
                             [1,1,1,0,"X",1,1,1,"X",1,1,0,1,"X","X",1],
                             [1,1,1,"X",1,0,1,1,0,0,0,1,1,0,1,0],
                             [1,1,0,0,"X",1,1,1,1,1,1,1,1,0,0,"X"],
                             [1,1,1,1,1,1,"X","X",1,0,1,"X",0,0,0,0],
                             [1,1,1,"X","X",1,"X",1,0,"X",1,0,1,1,1,"X"],
                             [1,1,1,"X",0,"X",1,1,0,1,1,0,0,1,0,1],
                             [1,1,1,1,1,1,1,1,1,1,1,1,"X","X",1,1],
                             [1,1,"X",1,1,1,"X","X",0,1,1,1,1,1,0,1],
                             [1,1,"X","X",0,1,0,1,0,"X",0,"X","X",1,1,1],
                             [1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,"X"],
                             [1,1,0,1,"X","X",1,1,0,"X",0,1,0,1,1,1],
                             [1,1,"X",1,1,1,1,"X",0,1,1,1,0,1,1,0],
                             [1,1,0,1,1,"X",0,1,1,0,1,"X",0,1,1,"X"],
                             [1,1,0,"X",0,1,"X",1,0,0,1,"X",0,1,1,1],
                             [1,1,1,0,1,1,1,1,0,1,1,"X",0,"X","X",0],
                             [1,1,"X",1,"X","X",1,1,0,1,"X",0,0,0,1,1],
                             [1,1,1,0,0,0,0,1,1,1,0,"X",0,"X",1,1],
                             [1,1,1,1,0,1,"X",0,1,1,0,0,1,1,1,1],
                             [1,1,1,1,1,1,1,"X",1,"X",1,0,0,"X",1,1],
                             [1,1,1,"X",0,1,"X",0,0,0,1,1,1,1,1,"X"],
                             [1,1,1,1,"X",1,0,"X",0,1,1,1,1,0,0,1],
                             [1,1,1,1,"X",1,"X","X",0,1,0,1,0,0,1,"X"],
                             [1,1,"X","X",1,0,"X",0,0,0,"X",0,1,"X","X","X"],
                             [1,1,0,1,1,"X",1,1,0,0,1,0,1,"X",1,1],
                             [1,1,1,0,0,0,0,0,1,0,"X",0,1,1,"X",0],
                             [1,1,1,1,"X","X",1,"X",1,"X",1,1,1,1,"X",1],
                             [1,1,1,1,"X",1,"X","X",0,"X",1,0,1,1,1,0],
                             [1,1,1,1,1,"X",1,1,"X",1,1,1,1,1,1,1],
                             [1,1,1,0,1,0,1,0,1,0,1,1,0,"X","X",1],
                             [1,1,1,1,1,1,1,1,0,0,1,"X","X",1,1,1],
                             [1,1,1,"X",1,1,"X","X",1,"X",1,1,1,1,1,"X"],
                             [1,1,1,1,1,0,1,0,0,0,1,0,"X",1,1,1],
                             [1,1,0,"X",1,1,1,1,"X",1,1,1,0,1,"X",1],
                             [1,1,1,1,1,"X",0,"X",1,1,0,1,1,0,1,1],
                             [1,1,1,"X",1,1,1,1,1,0,1,1,0,1,0,1],
                             [1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,"X"],
                             [1,1,1,1,1,0,0,1,"X",1,0,1,0,1,0,1],
                             [1,1,0,1,"X",1,1,0,1,"X","X",0,1,1,0,1],
                             [1,1,0,1,1,"X",0,"X",0,1,0,0,1,1,1,0],
                             [1,1,0,1,1,0,1,0,0,1,1,1,1,1,"X","X"],
                             [1,1,1,1,1,1,1,"X",0,0,0,1,1,"X",1,"X"],
                             [1,1,0,"X",0,1,1,0,0,1,"X",0,"X",0,1,1],
                             [1,1,1,1,1,0,0,1,"X",1,0,0,1,1,"X",1],
                             [1,1,"X","X",1,1,"X",1,1,1,1,"X","X","X","X","X"],
                             [1,1,"X",1,0,1,0,0,1,0,0,"X",0,1,0,0],
                             [1,1,1,1,0,1,1,1,0,0,1,0,1,"X",1,1],
                             [1,1,1,0,0,1,"X","X",1,"X",0,1,1,1,0,0],
                             [1,1,1,"X",1,1,1,1,1,1,1,"X","X","X","X","X"],
                             [1,1,1,1,1,1,0,0,1,"X",0,1,1,1,1,"X"],
                             [1,1,1,"X",0,"X","X",1,1,"X","X",0,0,1,1,0],
                             [1,1,1,"X",0,1,0,"X",0,"X",1,1,0,"X",0,"X"],
                             [1,1,1,"X","X",1,1,1,1,1,0,0,"X",1,1,0],
                             [1,1,1,1,1,"X",1,1,1,"X",1,1,1,"X",0,0],
                             [1,1,1,0,1,0,"X",1,1,0,"X",1,0,1,0,0],
                             [1,1,0,1,1,0,1,1,0,0,"X",1,0,1,1,0],
                             [1,1,0,"X",1,0,0,1,1,0,0,1,0,1,1,1],
                             [1,1,1,1,1,0,0,0,1,"X","X","X",1,"X",1,"X"],
                             [1,1,1,1,"X",1,0,0,1,1,1,0,1,1,1,1],
                             [1,1,1,0,"X",1,0,0,"X",0,1,0,1,0,0,1],
                             [1,1,0,1,1,"X",1,0,1,1,1,"X","X",1,"X","X"],
                             [1,1,1,"X",1,"X",1,1,"X","X",1,1,1,1,1,1] ];
    
    if ( array.length == 8 )
    {
        var number = Math.floor((Math.random() * arraysToGenerateFrom3Var.length) + 0);
        return arraysToGenerateFrom3Var[number];
    }
    
    else 
    {
        var number = Math.floor((Math.random() * arraysToGenerateFrom.length) + 0);
        return arraysToGenerateFrom[number];
    }
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
}

/////////////////////////////// Check functions go here /////////////////////////////////////////
function checkAnswers()
{    
    var isRight = 0;
    addInputsToUserArray();
    
    for ( var index = 0; index < array.length; index++ )
    {
        if ( userArray[index].toUpperCase() != array[index] )
        {
            isRight = -1;
        }
    }
    
    if ( isRight == 0 )
    {        
        if ( practiceMode == 1 )
        {
            db_log(student_id, 1, 1, true, starsGiven, mistakesMade, 1);
            disableButton();
            alert( "Congrats, you got the answer right!" );
            window.location.href = "moduleOneQuestionPicker.html";    
        }
        
        else
        {
            showIt();
        }
    }
        
    else
    {
        if ( practiceMode == 1 )
        {
            mistakesMade++;
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

function checkGroupings()
{       
    var length = getLengthOfArray();
    var sixteenArraysMatch = checkIfArraysMatch( sixteenArray, sixteenDrawingArray );
    var eightArraysMatch = checkIfArraysMatch( eightArray, eightDrawingArray );
    var fourArraysMatch = checkIfArraysMatch( fourArray, fourDrawingArray );
    var twoArraysMatch = checkIfArraysMatch( twoArray, twoDrawingArray );
        
    if ( sixteenArraysMatch && eightArraysMatch && fourArraysMatch && twoArraysMatch )
    {   
        if ( practiceMode == 1 )
        {
            db_log(student_id, 1, 1, true, starsGiven, mistakesMade, 1);
            disableButton(  );
            alert( "Congrats, you got the answer right!" );
            window.location.href = "moduleOneQuestionPicker.html";   
        }

        else 
        {
            showIt();
        }
    }

    else
    {
        if ( practiceMode == 1 )
        {
            mistakesMade++;
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

// Checks if user equation is valid
function checkUserEquation()
{  
    var counter = 0;
    
    if ( pos == 0 )
    {
        userInput = document.getElementById("userEquation").value.replace(/ /g,'').toUpperCase().split("+");
    }
    
    else
    {
        var userInput = document.getElementById("userEquation").value.replace(/ /g,'').toUpperCase().split("*");
    }
    
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
            if ( practiceMode == 0 )
            {
                showIt();
            }
            
            else
            {
                db_log(student_id, 1, 1, true, starsGiven, mistakesMade, 1);
                disableButton();
                alert( "Congrats, you got the answer right!" );
                window.location.href = "moduleOneQuestionPicker.html";  
            }
        }
        
        else
        {
            if ( practiceMode == 1 )
            {
                mistakesMade++;
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
        if ( practiceMode == 1 )
        {
            mistakesMade++;
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
        eightDrawingArray = resetDrawingArray( eightDrawingArray );
        fourDrawingArray = resetDrawingArray( fourDrawingArray );
        twoDrawingArray = resetDrawingArray( twoDrawingArray );
    }
    
    else if ( length == 16 )
    {
        sixteenDrawingArray = resetDrawingArray( sixteenDrawingArray );
        eightDrawingArray = resetDrawingArray( eightDrawingArray );
        fourDrawingArray = resetDrawingArray( fourDrawingArray );
        twoDrawingArray = resetDrawingArray( twoDrawingArray );
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

/////////////////////////////// Hint functions go here /////////////////////////////////////////
function receiveHint()
{
    if ( hint == 1 )
    {
        document.getElementById("hint").innerHTML = "0s and 1s are only needed " + "<br />" + " unless you see Xs. Xs aren't " + "<br />" + "case sensitive.";
    }
    
    else if ( hint == 2 )
    {
        document.getElementById("hint").innerHTML = "Group 1s for SOP and 0s " + "<br />" + "for POS. Make your groups as big as possible and " + "<br />" + "if there's a don't care state, pick the values that can " + "<br />" + "make a bigger group.";
    }
    
    else if ( hint == 3 )
    {
        document.getElementById("hint").innerHTML = "When writing equations, don't include 'Y=' " + "<br />" + "and variables aren't case sensitive.";
    }
    
    else
    {
        document.getElementById("hint").innerHTML = "Group 1s for SOP and 0s " + "<br />" + "for POS. Make your groups as big as possible and " + "<br />" + "if there's a don't care state, pick the values that can " + "<br />" + "make a bigger group.";
    }
    
    return 0;
}

/////////////////////////////// Decrease attemmpts go here /////////////////////////////////////////
function decreaseAttempts( number )
{
    mistakesMade++;

    if ( number > 1 )
    {
        number -= 1;
        document.getElementById("attemptsLeft").innerHTML = "Attempts left: " + number.toString();
        document.getElementById("scoreText").innerHTML =  " Star Score: " + totalUserStars.toString() + "/" + 60;
    }
    
    else
    {
        disableButton();
        starsGiven = 0;
        totalUserStars += starsGiven;
        passUserStars( totalUserStars );
        timeTaken = getTimeTaken( minutes, seconds );
        // You can store the timeTaken variable in the db_log statement
        // As of right now it's only registers per question
        db_log(student_id, 1, 0, false, starsGiven, mistakesMade, timeTaken); 
        alert( "Answer missed. No star given." );
        clearInterval( timer );
        goToNextPage();
    }
    
    return number;
}

// Navigates to next page 
function goToNextPage()
{    
    for ( var index = 1; index <= 60; index++ )
    {
        if ( window.location.href.indexOf("moduleOneQuestion" + index ) > -1 )
        {
            if ( index < 60 )
            {
                var nextPage = index + 1;
                window.location.href = "moduleOneQuestion" + nextPage + ".html";
            }

            else
            {
                //window.location.href = "moduleOneQuestionsComplete.html";
                showScore();
            }
        }
    }
}

/////////////////////////////// Only one function needed for score /////////////////////////////////////////
function showScore()
{    
    if ( totalUserStars >= 54 )
    {
        // You can add that database flag that allows them access to Module 2 or not.
        alert( "MODULE STAR SCORE: " + totalUserStars + "/" + moduleOneMaxStars.toString() + "\n\n\nYou passed Karnaugh Maps!!");
        window.location.href = "../../modules.html";
    }
    
    else
    {
        // You can add that database flag that allows them access to Module 2 or not.
        alert( "MODULE STAR SCORE: " + totalUserStars + "/" + moduleOneMaxStars.toString() + "\n\n\nModule failed. Try again.");
        window.location.href = "../../modules.html";
    }
}

/////////////////////////////// For alerts /////////////////////////////////////////
function showIt()
{	
    disableButton();
    starsGiven = 1;
    totalUserStars += starsGiven;
    passUserStars( totalUserStars );
    timeTaken = getTimeTaken( minutes, seconds );
    // You can store the timeTaken variable in the db_log statement
    // As of right now it's only registers per question
    db_log(student_id, 1, 0, true, starsGiven, 3-attemptsLeft, timeTaken);
    document.getElementById('myalert').style.display = "block";	 
    setTimeout( hideIt, 2000 );
}
                    
function hideIt()
{  
    clearInterval( timer );
    document.getElementById('myalert').style.display = "none";
    goToNextPage();
} 

/////////////////////////////// For timer /////////////////////////////////////////

// Creates and sets a timer for each page
function countDown()
{
    if ( maxTime >= 0 )
    {
        hours = Math.floor( maxTime / 3600 );
        minutes = Math.floor( ( maxTime - hours * 3600 ) / 60 );
        seconds = Math.floor( maxTime % 60 );
        var msg = "Time left: " + minutes + " minutes, " + seconds + " seconds.";
        document.getElementById( "timer" ).innerHTML = msg;
        
        // Decrements time
        --maxTime;
        window.name = maxTime;
    }
    
    else
    {
        clearInterval( timer );
        timeTaken = getTimeTaken( minutes, seconds );
        alert( "Time has expired. Moving to next page.");
        goToNextPage();
    }
}

/////////////////////////////// Disables submit button on click /////////////////////////////////////////
function disableButton()
{
    document.getElementById('submitButton').disabled = true;
}

function enableButton()
{
    document.getElementById('submitButton').disabled = false;
}

/////////////////////////////// Creates variable in storage for creating a save /////////////////////////////////////////

function setupSave()
{
    let header = window.location.href;

    if( !header.match("Practice") )
    {
        // works because we have a folder for which module
        // and the question # is the only int
        let moduleAndQNum = header.match(/\d+/g);
        let moduleNum = parseInt(moduleAndQNum[0]);
        let qNum = parseInt(moduleAndQNum[1]);

        let currentStars =  localStorage.getItem( "updatedUserStars" );

        let saveData = new Array();
        saveData[0] = student_id;
        saveData[1] = moduleNum;
        saveData[2] = qNum;
        if( currentStars != null)
        {
            saveData[3] = currentStars;
        }
        else
        {
            saveData[3] = 0;
        }
    
        sessionStorage.setItem("saveData", JSON.stringify(saveData));
    }
}
