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

    const shape = userInput.shape;

    let logo;
    switch (userInput.shape) {
        case 'circle':
            logo = new Circle(userInput.text, userInput.textColor, userInput.shapeColor);
            break;
        case 'triangle':
            logo = new Triangle(userInput.text, userInput.textColor, userInput.shapeColor);
            break;
        case 'square':
            logo = new Square(userInput.text, userInput.textColor, userInput.shapeColor);
            break;
        default:
            console.log('Invalid shape');
    }

    function generateShape(shape, shapeColor) {
        let shapeContent = '';
        switch (shape) {
            case 'circle':
                shapeContent = `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
                break;
            case 'triangle':
                shapeContent = `<polygon points="150,20 50,180 250,180" fill="${shapeColor}" />`;
                break;
            case 'square':
                shapeContent = `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
                break;
            default:
                console.log('Invalid shape');
        }
        return shapeContent;
    }    

    const svgContent = `<svg width="300" height="200">
        <text x="50%" y="50%" fill="${userInput.textColor}" text-anchor="middle">${userInput.text}</text>
    ${generateShape(userInput.shape, userInput.shapeColor)}
  </svg>`;

    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
}

generateLogo();


