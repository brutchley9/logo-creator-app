const {Square, Triangle, Circle} = require('../lib/shapes')

/*const sum = require('../lib/shapes')*/







/*test('Accurately produces a sum of two entered numbers', () => {
    expect(sum(1, 2)).toEqual(3)
});*/

//verified Jest is correctly installed by utilizing simple sum function, and test passes on my device.

let shapecolor = "green"

describe('Square', () => {
    it ("should render a string of code corresponding to the square shape", () => {
        square = new Square();
        //let shapecolor = "green"
        let result = square.render(`<rect x="10" y="10" width="100" height="100" fill="${shapecolor}"/>`)
        expect(result).toEqual(`<rect x="10" y="10" width="100" height="100" fill="green"/>`)
    })
});

describe('Triangle', () => {
    it ("should render a string of code corresponding to the triangle shape", () => {
        triangle = new Triangle();
        //let shapecolor = "red"
        let result = triangle.render(`<polygon points="10,-10 60,150 110,-10" fill="${shapecolor}"/>`)
        expect(result).toEqual(`<polygon points="10,-10 60,150 110,-10" fill="green"/>`)
    })
});

describe('Circle', () => {
    it ("should render a string of code corresponding to the circle shape", () => {
        circle = new Circle();
        //let shapecolor = "blue"
        let result = circle.render(`<circle cx="60" cy="60" r="60" fill="${shapecolor}"/>`)
        expect(result).toEqual(`<circle cx="60" cy="60" r="60" fill="green"/>`)
    })
});