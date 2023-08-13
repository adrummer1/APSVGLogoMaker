const inquirer = require('inquirer');
const { SVG, Rect, Circle, Triangle } = require('svg-builder');

inquirer
    .prompt([ 
        {
            type: 'input',
            name: 'text',
            message: 'Please enter some text:',
            validate: function (value) {
                if (value.length <= 3) {
                return true;
                }
                return 'Please enter up to three characters.';
            },
        },
        {
            type: 'input',
            name: 'textColor',
            messaage: 'Please enter a text color:',
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
    ])
    .then((answers) => {
        generateSVG(answers);   
    });