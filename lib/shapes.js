class Circle {
  constructor(shapeColor, userInput) {
    this.shapeColor = shapeColor;
    this.userInput = userInput || { textColor: "", text: "" };
  }

  draw() {
    return (
      `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />` +
      `<text x="150" y="115" font-size="45" text-anchor="middle" fill="${this.userInput.textColor}">${this.userInput.text}</text>`
    );
  }
}

class Triangle {
  constructor(shapeColor, userInput) {
    this.shapeColor = shapeColor;
    this.userInput = userInput || {};
  }

  draw() {
    return (
      `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />` +
      `<text x="150" y="125" font-size="45" text-anchor="middle" fill="${this.userInput.textColor}">${this.userInput.text}</text>`
    );
  }
}

class Square {
  constructor(shapeColor, userInput) {
    this.shapeColor = shapeColor;
    this.userInput = userInput || {};
  }

  draw() {
    return (
      `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />` +
      `<text x="150" y="125" font-size="45" text-anchor="middle" fill="${this.userInput.textColor}">${this.userInput.text}</text>`
    );
  }
}

class UserShape {
  constructor(userInput) {
    this.text = userInput.text;
    this.textColor = userInput.textColor;
    this.shape = userInput.shape;
    this.shapeColor = userInput.shapeColor;
    this.userInput = userInput;
  }

  draw() {
    if (this.shape === "circle") {
      const circle = new Circle(this.shapeColor, this.userInput);
      return `${circle.draw()}`;
    } else if (this.shape === "triangle") {
      const triangle = new Triangle(this.shapeColor, this.userInput);
      return `${triangle.draw()}`;
    } else if (this.shape === "square") {
      const square = new Square(this.shapeColor, this.userInput);
      return `${square.draw()}`;
    } else {
      throw new Error("Invalid shape");
    }
  }
}

module.exports = { Circle, Triangle, Square, UserShape };
