function sum (a, b){
    return a + b
 }

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide (a, b){
    return a / b
}

// module.exports = sum;
// module.exports = subtract;

// exports.sum = sum;
// exports.divide = divide;

module.exports = {
    sum,
    subtract,
    divide,
    multiply
}

