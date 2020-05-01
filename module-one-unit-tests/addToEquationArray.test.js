const addToEquationArray = require('./addToEquationArray');

test('Test will add equation to array', () =>
{
    expect( addToEquationArray( "A'C" ) ).toEqual( "A'C" );
});