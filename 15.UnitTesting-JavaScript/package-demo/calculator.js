function sum (a, b){
    if (typeof a != 'number' || typeof b != 'number'){
        throw new Error('Invalid parameter!')
    }

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

export {
    sum,
    subtract,
    divide,
    multiply
}


