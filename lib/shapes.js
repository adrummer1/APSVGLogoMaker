class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
}

class Triangle {
    constructor(base, height, color) {
        this.base = base;
        this.height = height;
        this.color = color
    }
}

class Square {
    constructor(sideLength, color) {
        this.sideLength = sideLength;
        this.color = color;
    }
}

module.exports = { Circle, Triangle, Square };