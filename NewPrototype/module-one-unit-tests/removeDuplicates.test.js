const removeDuplicates = require('./removeDuplicates');

test('Test will properly check to see if duplicates are removed from array', () =>
{
    expect( removeDuplicates( [[0,1],[0,1],[2,3],[2,3]] ) ).toEqual( [[0,1],[2,3]] );
});