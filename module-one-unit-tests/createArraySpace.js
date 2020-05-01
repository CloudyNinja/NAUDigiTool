function createArraySpace( arrayPassed )
{
    var index = 0;
    
    while ( arrayPassed[index] != null )
    {
        index++;
    }
    
    return index;
}

module.exports = createArraySpace;