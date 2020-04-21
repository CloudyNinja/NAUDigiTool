const createArray = require('./createArray');

test('Test will properly check to see if array is properly created', () =>
{
    expect( createArray(3)).toEqual( "Array sucessfully created!" );
});