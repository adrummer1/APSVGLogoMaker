const { Circle, Triangle, Square } = require('./shapes');

describe('Triangle', () => {
    test('should create a triangle with a specific color', () => {
        const triangle = new Triangle('red');
        expect(triangle.shapeColor).toBe('red');
    });

    test('should draw a triangle', () => {
        const triangle = new Triangle('red', { textColor: 'white', text: 'Hello!' });
        const svgCode = triangle.draw();
        expect(svgCode).toContain('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
        expect(svgCode).toContain('<text x="150" y="125" font-size="45" text-anchor="middle" fill="white">Hello!</text>');
    });
});

describe('Circle', () => {
    test('should create a circle with a specific color', () => {
        const circle = new Circle('blue');
        expect(circle.shapeColor).toBe('blue');
    });

    test('should draw a circle', () => {
        const circle = new Circle('blue', { textColor: 'yellow', text: "Hello!" });
        const svgCode = circle.draw();
        expect(svgCode).toContain(`<circle cx="150" cy="100" r="80" fill="blue" />`);
        expect(svgCode).toContain('<text x="150" y="115" font-size="45" text-anchor="middle" fill="yellow">Hello!</text>');
    });
});

describe('Square', () => {
    test('should create a square with a specific color', () => {
        const square = new Square('green');
        expect(square.shapeColor).toBe('green');
    });

    test('should draw a square', () => {
        const square = new Square('green', { textColor: 'purple', text: "Howdy!"});
        const svgCode = square.draw();
        expect(svgCode).toContain('<rect x="90" y="40" width="120" height="120" fill="green" />');
        expect(svgCode).toContain(`<text x="150" y="125" font-size="45" text-anchor="middle" fill="purple">Howdy!</text>`);
    });
});


