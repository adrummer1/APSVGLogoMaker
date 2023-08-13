const inquirer = require('inquirer');
const fs = require('fs');
const { buildSVG } = require('./lib/shapes');

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
    ]);

    // let shape;
    // switch (userInput.shape) {
    //     case 'circle':
    //         shape = new Circle();
    //         break;
    //     case 'triangle':
    //         shape = new Triangle();
    //         break;
    //     case 'square':
    //         shape = new Square();
    //         break;
    // }

    // shape.setColor(userInput.shapeColor);

    const svg = buildSVG(userInput);

    console.log('Generated logo.svg');
}

generateLogo();
