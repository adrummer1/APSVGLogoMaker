function buildSVG(userInput) {
    const { text, textColor, shape, shapeColor } = userInput
}

class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    render(color) {
        return `<svg width="300" height="200">
            <circle cx="150" cy="100" r="${this.radius}" fill="${color}"
            </svg>`
    }
}

class Triangle extends Shape {
    constructor(triangle) {
        super();
        this.triangle = triangle;
    }

    render(color) {
        return `<svg width="300" height="200">
            <circle cx="150" cy="100" r="${this.radius}" fill="${color}"
            </svg>`
    }
}

class Square extends Shape {
    constructor(square) {
        super();
        this.square = square;
    }

    render(color) {
        return `<svg width="300" height="200">
            <circle cx="150" cy="100" r="${this.radius}" fill="${color}"
            </svg>`
    }
}

module.exports = { buildSVG };