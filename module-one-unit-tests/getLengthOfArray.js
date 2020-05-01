// Added parameter to meet testing needs
function getLengthOfArray( arrayPassed )
{
    var counter = 0;

    for ( var index = 0; index < arrayPassed.length; index++ )
    {
        counter++;
    }

    return counter;
}

module.exports = getLengthOfArray;