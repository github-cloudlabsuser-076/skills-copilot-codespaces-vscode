// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

// Function to calculate the result based on operator and operands
function calculate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return "Error: Invalid operator";
    }
}

// Example usage
console.log(calculate('+', 5, 3)); // Output: 8
console.log(calculate('-', 10, 4)); // Output: 6
console.log(calculate('*', 2, 6)); // Output: 12
console.log(calculate('/', 10, 2)); // Output: 5
console.log(calculate('/', 8, 0)); // Output: Error: Division by zero


