function countElementsInEquationArray()
{
    var index = 0;
    var count = 0;
    var equationArray = ["A", "B", "C"];

    while ( equationArray[ index ] != null )
    {
        index++;
        count += 1;
    }
    
    return count;
}

module.exports = countElementsInEquationArray;