class Circle {
    constructor(radius, shapeColor, userInput) {
        this.radius = radius;
        // this.color = color;
        this.shapeColor = shapeColor;
        this.userInput = userInput || { textColor: '', text: ''};
    }

    draw() {
        return `<circle cx="250" cy="225" r="${this.radius}" fill="${this.shapeColor}" />` +
            `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.userInput.textColor}">${this.userInput.text}</text>`;
    }
}

class Triangle {
    constructor(base, height, color, userInput) {
        this.base = base;
        this.height = height;
        this.color = color;
        this.userInput = userInput || {};
    }

    draw() {
        return `<polygon points="..." fill="${this.color}" />` +
            `<text x="..." y="..." fill="${this.userInput.textColor}">${this.userInput.text}</text>`;
    }
}

class Square {
    constructor(sideLength, color, userInput) {
        this.sideLength = sideLength;
        this.color = color;
        this.userInput = userInput || {};
    }

    draw() {
        const x = '...';
        const y = '...';
        const width = '...';
        const height = '...'
        return `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${this.color}" />` +
            `<text x="..." y="..." fill="${this.userInput.textColor}">${this.userInput.text}</text>`;;
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
        if (this.shape === 'circle') {
            const circle = new Circle(80, this.shapeColor, this.userInput);
            return `${circle.draw()}`;
        } else if (this.shape === 'triangle') {
            const triangle = new Triangle(10, 20, this.shapeColor, this.userInput);
            return `${triangle.draw()}<text x="..." y="..." fill="${this.textColor}">${this.text}</text>`;
        } else if (this.shape === 'square') {
            const square = new Square(10, this.shapeColor, this.userInput);
            return `${square.draw()}<text x="..." y="..." fill="${this.textColor}">${this.text}</text>`;
        } else {
            throw new Error('Invalid shape')
        }
    }
}

module.exports = { Circle, Triangle, Square, UserShape };