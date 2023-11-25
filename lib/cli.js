console.log("Welcome to the Logo Creator App! Once moment please...");

//use wikipedia article on svg files to utilize code syntax for this project!

const inquirer = require('inquirer');
const fs = require('fs');

function generateSVG() {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'readmefilename',
      message: 'What would you like to name your README file?'
    },
    {
      type: 'checkbox',
      message: 'Which Licenses would you like to add?',
      name: 'addlicenses',
      choices: ['No License', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Eclipse Public License 2.0'],
    },
  ])
  .then(() => {
    const svgFile = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="300" height="200" viewBox="-70.5 -70.5 391 391" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<polygon points="-100,-10 0,200 100,-10" stroke="black" fill="black" stroke-width="5"/>
</g>
</svg>`;
  
    fs.writeFile("logo.svg", svgFile, (err) =>
        err ? console.log(err) : console.log('README file generated! Right-click on your file and select "Open Preview"')
    );
});
};


module.exports = generateSVG;


//square => <rect x="10" y="10" width="50" height="50" stroke="black" fill="____" stroke-width="5"/>
//circle => <circle cx="25" cy="75" r="50" stroke="black" fill="_______" stroke-width="5"/>
//triangle => <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />