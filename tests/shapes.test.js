const sum = require('../lib/shapes')

test('Accurately produces a sum of two entered numbers', () => {
    expect(sum(1, 2)).toBe(3)
});

//verified Jest is correctly installed by utilizing simple sum function, and test passes on my device.