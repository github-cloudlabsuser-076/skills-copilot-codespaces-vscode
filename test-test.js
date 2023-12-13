const { add, subtract, multiply, divide, calculate } = require('./test'); // assuming your file is named test.js

describe('Test arithmetic functions', () => {
    test('add function adds correctly', () => {
        expect(add(1, 2)).toBe(3);
        expect(add(-1, 2)).toBe(1);
    });

    test('subtract function subtracts correctly', () => {
        expect(subtract(2, 1)).toBe(1);
        expect(subtract(-1, 2)).toBe(-3);
    });

    test('multiply function multiplies correctly', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-2, 3)).toBe(-6);
    });

    test('divide function divides correctly', () => {
        expect(divide(6, 3)).toBe(2);
        expect(divide(-6, 3)).toBe(-2);
    });

    test('divide function returns error when dividing by zero', () => {
        expect(divide(6, 0)).toBe("Error: Division by zero");
    });
});

describe('Test calculate function', () => {
    test('calculate function works correctly with different operators', () => {
        expect(calculate('+', 1, 2)).toBe(3);
        expect(calculate('-', 2, 1)).toBe(1);
        expect(calculate('*', 2, 3)).toBe(6);
        expect(calculate('/', 6, 3)).toBe(2);
    });

    test('calculate function returns error with invalid operator', () => {
        expect(calculate('invalid', 1, 2)).toBe("Error: Invalid operator");
    });

    test('calculate function returns error when dividing by zero', () => {
        expect(calculate('/', 6, 0)).toBe("Error: Division by zero");
    });
});