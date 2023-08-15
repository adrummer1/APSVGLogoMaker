const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square, UserShape } = require('./lib/shapes');

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
            message: 'Please enter a text color (keyword or hexadecimal number):',
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

    const shape = userInput.shape;

    let logo;
    switch (userInput.shape) {
        case 'circle':
        case 'triangle':
        case 'square':
            logo = new UserShape(userInput);
            break;
        default:
            console.log('Invalid shape');
    }

    function generateShape(shape, shapeColor) {
        const userShape = new UserShape({ shape, shapeColor, textColor: userInput.textColor, text: userInput.text });
        return userShape.draw();
    } 

    const svgContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${generateShape(userInput.shape, userInput.shapeColor)}
  </svg>`;

    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
}

generateLogo();


