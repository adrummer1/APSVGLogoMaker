const inquirer = require('inquirer');
const { buildSVG } = require('./lib/shapes');
// const { SVG, Rect, Circle, Triangle } = require('svg-builder');

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
            message: 'Please enter a shape color:',
        },
    ]);

    const svg = buildSVG(userInput);

    console.log('Generated logo.svg');
}

generateLogo();
