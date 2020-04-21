const sum = require('./sum');

test('Test will properly add two numbers', () =>
{
    expect( sum( 1, 2 ) ).toBe(3);
});