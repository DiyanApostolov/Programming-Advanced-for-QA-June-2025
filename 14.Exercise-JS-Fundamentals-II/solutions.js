// 01. Еmployees

function solve(inputArr){
    class Employee{
        constructor (name, personalNumber){
            this.name = name
            this.personalNumber = personalNumber
        }

        printInfo(){
            return  `Name: ${this.name} -- Personal Number: ${this.personalNumber}` 
        }
    }

    for (const element of inputArr) {
        let name = element
        let personalNumber = name.length

        let employee = new Employee(name, personalNumber)
        console.log(employee.printInfo())
    }
}

// solve([
// 'Silas Butler',
// 'Adnaan Buckley',
// 'Juan Peterson',
// 'Brendan Villarreal'
// ]
// )

// 02. Towns 
function towns(inputArr){
    class Town{
        constructor (name, lat=0, long=0){
            this.town = name
            this.latitude = lat
            this.longitude = long
        }
    }

    for (const element of inputArr) {
        let [name, latitudeStr, longitudeStr] = element.split(' | ')
        let latitude = Number(latitudeStr).toFixed(2)
        let longitude = Number(longitudeStr).toFixed(2)

        let city = new Town(name, latitude, longitude)
        console.log(`{ town: '${city.town}', latitude: '${city.latitude}', longitude: '${city.longitude}' }`)
    }
}

// towns(['Sofia | 42.696552 | 23.32601',
// 'Beijing | 39.913818 | 116.363625']
// )

// 03. Store Provision
function storeProvision (currentStock, orderedProducts){
    let store = {}

    for (let i = 0; i < currentStock.length; i+=2) {
        let productName = currentStock[i];
        let quantity = Number(currentStock[i+1])
        
        store[productName] = quantity
    }

    for (let i = 0; i < orderedProducts.length; i+=2) {
        let productName = orderedProducts[i];
        let quantity = Number(orderedProducts[i+1])
        
        if(store.hasOwnProperty(productName)){
            store[productName] += quantity  // добавяме стойност към съществуващ ключ
        } else {
            store[productName] = quantity  // добавяме нов продукт (ключ) в асоциативния масив
        }
    }

    for (const key in store) {
        console.log(`${key} -> ${store[key]}`)
    }
}

// storeProvision([
// 'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
// ],
// [
// 'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
// ]
// )

// 04. Movies
function movies (inpurArr){
    let allMovies = []

    for (const commandLine of inpurArr) {
        if (commandLine.startsWith('addMovie')){

            let movieName = commandLine.substring(9)
            allMovies.push({'name': movieName}) // добавям абект {} в масива с едно пропърти name

        } else if (commandLine.includes('directedBy')) {
            let [movieName, directorName] = commandLine.split(' directedBy ')

            let movie = allMovies.find(m => m.name === movieName) // търся дали има филм с такова име

            if(movie) {
                movie.director = directorName // добавям ново пропърти director и стойност срещу него
            }
        } else if (commandLine.includes('onDate')){
            let [movieName, movieDate] = commandLine.split(' onDate ')

            let movie = allMovies.find(m => m.name === movieName)

            if(movie){
                movie.date = movieDate // добавям ново пропърти date и стойност срещу него
            }
        }
    }

    for (const movie of allMovies) {
        if(movie.director && movie.date){
            console.log(JSON.stringify(movie))
        }
    }
}

// movies([
// 'addMovie Fast and Furious',
// 'addMovie Godfather',
// 'Inception directedBy Christopher Nolan',
// 'Godfather directedBy Francis Ford Coppola',
// 'Godfather onDate 29.07.2018',
// 'Fast and Furious onDate 30.07.2018',
// 'Batman onDate 01.08.2018',
// 'Fast and Furious directedBy Rob Cohen'
// ]
// )

// 05. Class Vehicle
class Vehicle{
    constructor (type, model, parts, fuel){
        this.type = type
        this.model = model
        this.parts = {
            engine: parts.engine,
            power: parts.power,
            quality: parts.engine * parts.power
        }
        this.fuel = fuel
    }

    drive(fuelLoss){
        this.fuel -= fuelLoss
    }
}

// let parts = { engine: 6, power: 100 };
// let vehicle = new Vehicle('Car', 'BMW', parts, 200);
// vehicle.drive(100);
// console.log(vehicle.fuel);
// console.log(vehicle.parts.quality);

// 06. Characters in Range
function charactersInRange(a, b){
    let start = Math.min(a.charCodeAt(), b.charCodeAt())
    let end = Math.max(a.charCodeAt(), b.charCodeAt())

    let chars = []

    for (let i = start + 1; i < end; i++) {
        chars.push(String.fromCharCode(i)) // обръщаме от десетично число в string (char)   
    }

    console.log(chars.join(' '))
}

// charactersInRange('a', 'g')
// charactersInRange('g', 'a')

// 07. Odd And Even Sum
function oddAndEvenSum(num){
    let oddSum = 0;
    let evenSum = 0;
    let digitsArray = num.toString().split('') // масив от числа като стрингове 

    for (const digit of digitsArray) {
        let currentDigit = Number(digit)  // кастваме стринг числото към Number

        if (currentDigit % 2 === 0){
            evenSum += currentDigit
        } else {
            oddSum += currentDigit
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

//oddAndEvenSum(3495892137259234)

// 08. Palindrome Integers
function palindromeIntegers(inputArr){
    for (const number of inputArr) {
        console.log(isPalindrome(number))
    }

    function isPalindrome(num){
        let stringNum = num.toString()
        let reversedStringNum = stringNum.split('').reverse().join('')

        if (stringNum === reversedStringNum){
            return true
        } else {
            return false
        }
    }
}

// функционално решение на 8 задача
function secondSolution(inputArr){
    for (const element of inputArr) {
        console.log(element == element.toString().split('').reverse().join(''))
    }
}

//secondSolution([123,323,421,121])

// 09. Perfect Number
function perfectNumber(num){
    let result = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0){ // намирам делител без остатък
            result += i
        } 
    }

    if (num === result){
        console.log('We have a perfect number!')
    } else {
        console.log('It\'s not so perfect.')
    }
}

// perfectNumber(6)
// perfectNumber(28)
// perfectNumber(734894)

// 10. Factorial Division
function factorialDivision(firstNum, secondNum) {
    let factorial1 = factorial(firstNum);
    let factorial2 = factorial(secondNum);
    let result = factorial1 / factorial2

    return result.toFixed(2);

    function factorial(num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }
}