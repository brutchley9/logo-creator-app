const sum = require('../lib/shapes')

test('Accurately produces a sum of two entered numbers', () => {
    expect(sum(1, 2)).toBe(3)
});