const getTimeTaken = require('./getTimeTaken');

test('Test will properly get the time taken', () =>
{
    expect( getTimeTaken( 1, 20 ) ).toBe( 3 + " minutes " + 40 + " seconds " );
});