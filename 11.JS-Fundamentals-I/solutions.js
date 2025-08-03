//01. Sum First and Last Array Elements

function solve(arr){
    let firstElement = Number(arr[0])
    let lastElement = Number(arr[arr.length-1])

    console.log(firstElement + lastElement)
}

// solve([10, 20, 30, 40])
// solve([10, 20, 80])
// solve([10, 20, 30, 40, 100])

//02. Day of Week

function dayOfWeek(num){
    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    if(num >= 1 && num <= 7){
        console.log(daysOfWeek[num-1])
    } else {
        console.log("Error")
    }
}

//dayOfWeek(-8)

//03. Reverse an Array of Numbers

function reverseArr(n, arr){
    let newArr = arr.slice(0, n).reverse()

    console.log(newArr.join(' '))
}

//reverseArr(3, [10, 20, 30, 40, 100])
//reverseArr(2, [5, 300, 30, 40, 100])

//04. Reverse in Place
function reverseInPlace(arr){
    for (let i = 0; i < arr.length / 2; i++) {
        let currentElement = arr[i] // вземам елемента на текущия индекс

        arr[i] = arr[arr.length - 1 - i] // заменяме елемента на текущия индекс с огледалния
        
        arr[arr.length - 1 - i] = currentElement // заменям огледалния елемент с взетия по-рано
    }

    console.log(arr.join(' '))
}

//reverseInPlace([10, 20, 30, 40, 50])

// 05. Phone Book

function phoneBook(input){
    let phoneBook = {}

    for (const element of input) {
        let currentElement = element.split(' ')

        let key = currentElement[0]   // името
        let value = currentElement[1] // телефонния номер

        phoneBook[key] = value
    }

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`)
    }
}

// phoneBook(['Tim 0834212554',
//  'Peter 0877547887',
//  'Bill 0896543112',
//  'Tim 0876566344']
// )

// 06. Meetings

function meetings(inputArr){

    let meetings = {}

    for (const element of inputArr) {
        let [weekday, name] = element.split(' ')

        if(meetings.hasOwnProperty(weekday)){
            console.log(`Conflict on ${weekday}!`)
        } else {
            meetings[weekday] = name

            console.log(`Scheduled for ${weekday}`)
        }
    }

    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`)
    }
}

// meetings(['Monday Peter',
//  'Wednesday Bill',
//  'Monday Tim',
//  'Friday Tim']
// )

// 07. Address Book

function addressBook(inpurArr){
    let addressBook = {}

    for (const element of inpurArr) {
        let [name, address] = element.split(':')

        addressBook[name] = address 
    }

    // Сортораме по ключ (името)
    let sortedAddressBook = Object.entries(addressBook).sort((a,b) => a[0].localeCompare(b[0]))

    for (const [key, value] of sortedAddressBook) {
        console.log(`${key} -> ${value}`)
    }
}

// addressBook(['Tim:Doe Crossing',
//  'Bill:Nelson Place',
//  'Peter:Carlyle Ave',
//  'Bill:Ornery Rd']
// )