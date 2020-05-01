const getLengthOfArray = require('./getLengthOfArray');

test('Test will properly check to see if array length is correct', () =>
{
    expect( getLengthOfArray( [0,0,0,0,1,1,1,1] )).toEqual( 8 );
});