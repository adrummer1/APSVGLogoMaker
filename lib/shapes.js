class Circle {
  constructor(radius, shapeColor, userInput) {
    this.radius = radius;
    this.shapeColor = shapeColor;
    this.userInput = userInput || { textColor: "", text: "" };
  }

  draw() {
    return (
      `<circle cx="250" cy="225" r="80" fill="${this.shapeColor}" />` +
      `<text x="150" y="115" font-size="45" text-anchor="middle" fill="${this.userInput.textColor}">${this.userInput.text}</text>`
    );
  }
}

class Triangle {
  constructor(base, height, shapeColor, userInput) {
    this.base = base;
    this.height = height;
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
  constructor(sideLength, shapeColor, userInput) {
    this.sideLength = sideLength;
    this.shapeColor = shapeColor;
    this.userInput = userInput || {};
  }

  draw() {
    const x = "90";
    const y = "40";
    const width = "120";
    const height = "120";
    return (
      `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${this.shapeColor}" />` +
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
      const circle = new Circle(80, this.shapeColor, this.userInput);
      return `${circle.draw()}`;
    } else if (this.shape === "triangle") {
      const triangle = new Triangle(10, 20, this.shapeColor, this.userInput);
      return `${triangle.draw()}`;
    } else if (this.shape === "square") {
      const square = new Square(10, this.shapeColor, this.userInput);
      return `${square.draw()}`;
    } else {
      throw new Error("Invalid shape");
    }
  }
}

module.exports = { Circle, Triangle, Square, UserShape };
