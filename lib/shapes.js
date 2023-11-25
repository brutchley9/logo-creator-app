function sum(a, b) {
    return a + b
}

module.exports = sum

//included sum function to verify that Jest is working

class Imageshape {
    constructor(){
        this.color=''
    }

    setColor(color){
        this.color=(color);
    }
}

//created primary class "Imageshape" as a baseline for which to be extended with EITHER a rectangle, triangle or circle. This will take some trial and error

class Square extends Imageshape{
    render(){
        return `<rect x="10" y="10" width="50" height="50" stroke="black" fill="${this.color}" stroke-width="5"/>`
    }
}



//utilizing code from the svg file resource that I commented out on my CLI.js page.