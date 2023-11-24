const sum = require('../lib/mathematics')

test('Accurately produces a sum of two entered numbers', () => {
    expect(sum(1, 2)).toBe(3)
});