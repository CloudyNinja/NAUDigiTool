function arraysEqual( arrayOne, arrayTwo )
{
    return JSON.stringify( arrayOne ) == JSON.stringify( arrayTwo )
}

module.exports = arraysEqual;