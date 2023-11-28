const sum = require('../lib/shapes')

const {Square, Triangle, Circle} = ('../lib/shapes')







test('Accurately produces a sum of two entered numbers', () => {
    expect(sum(1, 2)).toBe(3)
});

//verified Jest is correctly installed by utilizing simple sum function, and test passes on my device.

test('Accurately renders a square', () => {
    const renderSquare = render(<rect x="10" y="10" width="100" height="100" fill="${this.shapecolor}"/>);
    expect(renderSquare(Square)).toBeInTheDocument();
});