import * as calc from './calculator.mjs'
import {sum} from './calculator.mjs'

console.log(sum(5, 15))           //20      

console.log(calc.x)               //10
console.log(calc.sum(5, 10))      //15
console.log(calc.subtract(5, 10)) //-5
console.log(calc.multiply(5, 10)) //50
console.log(calc.divide(5, 10))   //0.5
