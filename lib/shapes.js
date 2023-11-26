function sum(a, b) {
    return a + b
}


module.exports = sum;


//included sum function to verify that Jest is working

class Imageshape {
    constructor() {
        this.shapecolor=''
    }

    setColor(shapecolor) {
        this.shapecolor=(shapecolor);
    }
}

//created primary class "Imageshape" as a baseline for which to be extended with EITHER a rectangle, triangle or circle. This will take some trial and error

class Square extends Imageshape {
    render() {
        return `<rect x="10" y="10" width="100" height="100" fill="${this.shapecolor}"/>`
    }
    then() {
        console.log("Shape and color selected!")
    }
}

class Triangle extends Imageshape{
    render() {
        return `<polygon points="10,-10 60,150 110,-10" fill="${this.shapecolor}"/>`
    }
    then() {
        console.log("Shape and color selected!")
    }
}

class Circle extends Imageshape{
    render() {
        return `<circle cx="60" cy="60" r="60" fill="${this.shapecolor}"/>`
    }
    then() {
        console.log("Shape and color selected!")
    }
}



module.exports = {Square, Triangle, Circle};

//utilizing code from the svg file resource that I commented out on my CLI.js page