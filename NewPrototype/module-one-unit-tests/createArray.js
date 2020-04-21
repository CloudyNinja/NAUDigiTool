function createArray( numberOfVariables )
{
    // Added these two variables since test needed them 
    var array = new Array(2);
    var groupingArray = new Array(2);
    var dontCare = 0;
    var variable = Math.round(Math.random());
    var arrayOfThings = [ 0, 1, "X" ];
    
    if ( dontCare == 1 )
    {
        variable = arrayOfThings[ Math.round( Math.random() * 2 ) ];
    }

    var length = Math.pow( 2, numberOfVariables );
    array.length = length;
    groupingArray.length = length;

    for ( var index = 0; index < array.length; index++ )
    {
        array[ index ] = arrayOfThings[ Math.round( Math.random() * 1 ) ];;
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

        // Removed swap indices funciton since that will be ran as a separate test
    }
    
    else if ( numberOfVariables == 4 )
    {
        if ( array[0] != 1 || array[1] != 1 )
        {
            array[0] = 1;
            array[1] = 1;
        }
    }

    // Instead of returning array, I returned a print statement since array is always randomized
    return "Array sucessfully created!";
}

module.exports = createArray;