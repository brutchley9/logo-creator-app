console.log("Welcome to the Logo Creator App! Once moment please...");

//use wikipedia article on svg files to utilize code syntax for this project!

const inquirer = require('inquirer');
const fs = require('fs');
const {Square, Triangle, Circle} = require('./shapes');





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
      name: "shape",
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
  .then(() => {
    const svgFile = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="300" height="200" viewBox="-70.5 -70.5 391 391" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<polygon points="-100,-10 0,200 100,-10" stroke="black" fill="black" stroke-width="5"/>
<rect x="10" y="10" width="50" height="50" stroke="black" fill="red" stroke-width="5"/>
</g>
</svg>`;
  
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