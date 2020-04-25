const checkForDuplicates = require('./checkForDuplicates');

test('Test will properly check for duplicates', () =>
{
    expect( checkForDuplicates( [1, 2, 3, 4], [1, 2, 3, 4]) ).toEqual( "Duplicate found 1! Duplicate found 2! Duplicate found 3! Duplicate found 4! " );
});