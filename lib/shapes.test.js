const { Circle, Triangle, Square } = require('./shapes');

describe('Triangle', () => {
    test('should create a triangle with a specific color', () => {
        const triangle = new Triangle('red');
        expect(triangle.color).tobe('red');
    });

    test('should draw a triangle', () => {
        const triangle = triangle.draw();
        expect(svgCode).toContain('<polygon points="..." fill ="red" />');
    });
});

describe('Circle', () => {
    test('should create a circle with a specific color', () => {
        const circle = new Circle('blue');
        expect(circle.color).tobe('blue');
    });

    test('should draw a circle', () => {
        const circle = circle.draw();
        expect(svgCode).toContain('<circle cx="..." cy="..." r="..." fill ="blue" />');
    });
});

describe('Square', () => {
    test('should create a square with a specific color', () => {
        const square = new Square('green');
        expect(square.color).tobe('green');
    });

    test('should draw a square', () => {
        const square = square.draw();
        expect(svgCode).toContain('<rect x="..." c="..." width="..." fill ="green" />');
    });
});


