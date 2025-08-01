function addAndSubtract(numbers) {
    //numbers = [3, 4, 5, 6, 7]
    //1. намерим сумата от елементите в масива

    let sum = 0; //сума на елементите в масива
    let modifiedSum = 0; //сума на променените елементи в масива
    
    for (let position = 0; position <= numbers.length - 1; position++) {
            sum += numbers[position];

            //промяна на елемента
            if (numbers[position] % 2 === 0) {
                numbers[position] += position;
            } else {
                numbers[position] -= position;
            }

            //добавяме променения елемент към сумата
            modifiedSum += numbers[position];
    }

    console.log(numbers);
    console.log(sum);
    console.log(modifiedSum);
}

addAndSubtract([5, 15, 23, 56, 35]);