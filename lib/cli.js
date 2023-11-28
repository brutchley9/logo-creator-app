console.log("Welcome to the Logo Creator App! Once moment please...");

//use wikipedia article on svg files to utilize code syntax for this project!

const inquirer = require('inquirer');
const fs = require('fs');
const {Square, Triangle, Circle} = require('./shapes');

//will try to nest logic below within my generateSVG function and test results produced from this.

/*class FinalSVG {
  constructor() {
    this.svgshape = ''
    this.svgtext = ''
  }
  render() {
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg width="300" height="200" viewBox="-70.5 -70.5 391 391" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    ${this.svgshape}
    ${this.svgtext}
    </g>
    </svg>`
  }
  setSVGShape(imageshape) {
    this.svgshape = imageshape.render();
  }
  setSVGText(textcolor, textentry) {
    this.svgtext = `<text x="50" y="60" fill='${textcolor}'>${textentry}</text>`
  }


}*/













function generateSVG() {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'textentry',
      message: 'Please add any text you would like to add to your SVG file (no more than three characters)'
    },
    {
      type: 'input',
      name: 'textcolor',
      message: 'What color should your text be? (can enter the color itself or its hexadecimal value)'
    },
    {
      name: "Imageshape",
      message: "Which shape would you like your svg file to be?",
      type: "list",
      choices: ["Square", "Triangle", "Circle"]
    },
    {
      name: "shapecolor",
      message: "What color is your shape? (can enter either the color itself or its hexadecimal value)",
      type: "input",
    }

  ])
  .then((data) => {
    console.log(data);
    /*if (data.Imageshape === "Square") {
      console.log("Is a square");
      const ourShape = new Square();
      ourShape.setColor(data.shapecolor);
      console.log(ourShape);

    } else if (data.Imageshape === "Triangle") {
      console.log("Is a triangle");
      const ourShape = new Triangle();
      ourShape.setColor(data.shapecolor);
      console.log(ourShape);

    } else if (data.Imageshape === "Circle") {
      console.log("Is a circle");
      const ourShape = new Circle();
      ourShape.setColor(data.shapecolor);
      console.log(ourShape);
    }*/
    const svgFile = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg width="300" height="200" viewBox="-70.5 -70.5 391 391" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect x="10" y="10" width="100" height="100" fill="${data.shapecolor}"/>
    <text x="50" y="60" fill='${data.textcolor}'>${data.textentry}</text>
    </g>
    </svg>`

    //utilize shape and color that we selected here to pass to larger template

    /*class FinalSVG {
      constructor() {
        this.svgshape = ''
        this.svgtext = ''
      }
      render() {
        return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg width="300" height="200" viewBox="-70.5 -70.5 391 391" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        ${this.svgshape}
        ${this.svgtext}
        </g>
        </svg>`
      }
      setSVGShape(Imageshape) {
        this.svgshape = Imageshape.render();
      }
      setSVGText(textcolor, textentry) {
        this.svgtext = `<text x="50" y="60" fill='${textcolor}'>${textentry}</text>`
      }
    
    
    }*/
    fs.writeFile("logo.svg", svgFile, (err) =>
        err ? console.log(err) : console.log('Generated logo.svg')
    );
});
};


module.exports = generateSVG;


//triangle shape = <polygon points="10,-10 60,150 110,-10" fill="____"/>
//square = <rect x="10" y="10" width="100" height="100" fill="____"/>
//circle = <circle cx="60" cy="60" r="60" fill="____"/>
//text line = <text x="50" y="60" fill='____'>____</text>


//Above is the order each of these lines should be presented, shape first, then text overlapping it





//TODO: link shapes.js to cli.js!!!!