const checkIfArraysMatch = require('./checkIfArraysMatch');

test('Test will properly check to see if arrays match', () =>
{
    expect( checkIfArraysMatch( [0, 1, 0, 1, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 1] ) ).toBe( false );
});