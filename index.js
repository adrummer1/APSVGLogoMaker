const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

async function generateLogo() {
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Please enter some text for the logo (up to three characters):',
            validate: (input) => input.length <= 3,          
        },
        {
            type: 'input',
            name: 'textColor',
            messaage: 'Please enter a text color (keyword or hexadecimal number):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please choose a shape',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter a shape color (keyword or hexadecimal number):',
        },
    ])

    let logo;
    switch (shape) {
        case 'circle':
            logo = new Circle(text, textColor, shapeColor);
            break;
        case 'triangle':
            logo = new Triangle(text, textColor, shapeColor);
            break;
        case 'square':
            logo = new Square(text, textColor, shapeColor);
            break;
        default:
            console.log('Invalid shape');
    }

    const svgContent = `<svg width="300" height="200">
    <text x="50%" y="50%" fill="${textColor}" text-anchor="middle">${text}</text>
    ${generateShape(shape, shapeColor)}
  </svg>`;

    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
}

generateLogo();


