class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    draw() {
        return `<circle cx="..." cy="..." r="..." fill="${this.color}" />`;
    }
}

class Triangle {
    constructor(base, height, color) {
        this.base = base;
        this.height = height;
        this.color = color
    }

    draw() {
        return `<polygon points="..." fill="${this.color}" />`;
    }
}

class Square {
    constructor(sideLength, color) {
        this.sideLength = sideLength;
        this.color = color;
    }

    draw() {
        const x = '...';
        const y = '...';
        const width = '...';
        const height = '...'
        return `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square };