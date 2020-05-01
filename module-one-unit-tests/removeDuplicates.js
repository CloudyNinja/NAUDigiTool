function removeDuplicates( arrayPassed )
{
    if ( arrayPassed.length > 1 )
    {
        for ( var outerIndex = 0; outerIndex < arrayPassed.length; outerIndex++ )
        {
            for ( var innerIndex = 0; innerIndex < arrayPassed.length; innerIndex++ )
            {
                if ( JSON.stringify( arrayPassed[outerIndex] ) == JSON.stringify( arrayPassed[innerIndex] ) && innerIndex != outerIndex )
                {
                    arrayPassed.splice(innerIndex, innerIndex + 1);
                }
            }
        }
    }
    
    return arrayPassed;
}

module.exports = removeDuplicates;