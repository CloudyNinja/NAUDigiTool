// Added parameter to meet testing needs
function swapArrayIndices( array, indexOne, indexTwo )
{
    var tempVal = array[ indexOne ];

    array[ indexOne ] = array[ indexTwo ];
    array[ indexTwo ] = tempVal;

    return array[ indexOne ]; 
}

module.exports = swapArrayIndices;