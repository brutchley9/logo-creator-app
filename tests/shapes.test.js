/*const sum = require('../lib/shapes')*/

const {Square, Triangle, Circle} = require('../lib/shapes')







/*test('Accurately produces a sum of two entered numbers', () => {
    expect(sum(1, 2)).toBe(3)
});*/

//verified Jest is correctly installed by utilizing simple sum function, and test passes on my device.

describe('Square', () => {
    it ("should render a string of code corresponding to the square shape", () => {
        square = new Square();
        const shapecolor = "green"
        const result = square.render(`<rect x="10" y="10" width="100" height="100" fill="${shapecolor}"/>`)
        expect(result).toEqual('<rect x="10" y="10" width="100" height="100" fill="green"/>')
    })
});