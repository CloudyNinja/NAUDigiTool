const arraysEqual = require('./arraysEqual');

test('Test will properly check to see if arrays are equal', () =>
{
    expect( arraysEqual( [0, 1, 0, 1, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 1] ) ).toBe( false );
});