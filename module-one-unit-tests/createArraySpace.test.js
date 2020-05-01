const createArraySpace = require('./createArraySpace');

test('Test will properly create array space', () =>
{
    expect( createArraySpace( [0, 1, 0, 1, 0, 0, 0, 0] ) ).toBe( 8 );
});