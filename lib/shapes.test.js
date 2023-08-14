const { Circle, Triangle, Square } = require('./shapes');

describe('Triangle', () => {
    test('should create a triangle with a specific color', () => {
        const triangle = new Triangle(10, 20, 'red');
        expect(triangle.color).toBe('red');
    });

    test('should draw a triangle', () => {
        const triangle = new Triangle(10, 20, 'red');
        const svgCode = triangle.draw();
        expect(svgCode).toContain('<polygon points="..." fill="red" />');
    });
});

describe('Circle', () => {
    test('should create a circle with a specific color', () => {
        const circle = new Circle(5, 'blue');
        expect(circle.color).toBe('blue');
    });

    test('should draw a circle', () => {
        const circle = new Circle(5, 'blue');
        const svgCode = circle.draw();
        expect(svgCode).toContain('<circle cx="..." cy="..." r="..." fill="blue" />');
    });
});

describe('Square', () => {
    test('should create a square with a specific color', () => {
        const square = new Square(10, 'green');
        expect(square.color).toBe('green');
    });

    test('should draw a square', () => {
        const square = new Square(10, 'green');
        const svgCode = square.draw();
        expect(svgCode).toContain('<rect x="..." y="..." width="..." height="..." fill="green" />');
    });
});


