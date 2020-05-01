// Same test applies for swap user array indices, since code is exactly the same
const swapArrayIndices = require('./swapArrayIndices');

test('Test will properly check to array indices swapped', () =>
{
    expect( swapArrayIndices( [1, 2], 0, 1 )).toEqual( 2 );
});