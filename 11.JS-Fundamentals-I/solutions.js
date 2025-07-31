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