function addToEquationArray( equationString )
{
    var index = 0;
    var equationArray = ["A'B"];
    
    while ( equationArray[ index ] != null )
    {
        index++;
    }
    
    equationArray[ index ] = equationString;

    // Added return statement for test
    return equationArray[ index ];
}

module.exports = addToEquationArray;