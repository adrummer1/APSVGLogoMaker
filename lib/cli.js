const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square, UserShape } = require("./shapes");

class CLI {
  async generateLogo() {
    const userInput = await inquirer.prompt([
      {
        type: "input",
        name: "text",
        message:
          "Please enter some text for the logo (up to three characters):",
        validate: (input) => input.length <= 3,
      },
      {
        type: "input",
        name: "textColor",
        message: "Please enter a text color (keyword or hexadecimal number):",
        validate: (input) => validateColor(input),
      },
      {
        type: "list",
        name: "shape",
        message: "Please choose a shape",
        choices: ["circle", "triangle", "square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Please enter a shape color (keyword or hexadecimal number):",
        validate: (input) => validateColor(input),
      },
    ]);

    function validateColor(input) {
      const colorKeywords = ['red', 'blue', 'green', 'yellow', 'orange', 'aqua', 'black', 'fuchsia', 'gray', 'lime', 'maroon', 'navy', 'olive', 'purple', 'silver', 'teal', 'white']; 
      if (colorKeywords.includes(input.toLowerCase())) {
        return true;
      }
    
      const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/i;
      if (hexRegex.test(input)) {
        return true;
      }
    
      return 'Please enter a valid color keyword or hexadecimal number.';
    }

    const shape = userInput.shape;

    let logo;
    switch (userInput.shape) {
      case "circle":
      case "triangle":
      case "square":
        logo = new UserShape(userInput);
        break;
      default:
        console.log("Invalid shape");
    }

    function generateShape(shape, shapeColor) {
      const userShape = new UserShape({
        shape,
        shapeColor,
        textColor: userInput.textColor,
        text: userInput.text,
      });
      return userShape.draw();
    }

    const svgContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${generateShape(userInput.shape, userInput.shapeColor)}
  </svg>`;

    fs.writeFileSync("logo.svg", svgContent);
    console.log("Generated logo.svg");
  }

  run() {
    return this.generateLogo();
  }
}

module.exports = CLI;
