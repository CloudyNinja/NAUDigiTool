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
                // Replaced arraysEqual method with hard code since method was tested individually already.
                var arraysMatch = JSON.stringify( arrayOne[outerIndex] ) == JSON.stringify( arrayTwo[innerIndex] );
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

module.exports = checkIfArraysMatch;