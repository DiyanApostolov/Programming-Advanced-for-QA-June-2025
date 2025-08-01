function maxNumber (numbers) {
    //numbers = [14, 24, 3, 19, 15, 17]
    let topNumbers = []; //масив, в който ще съхранявам само топ числата

    for (let position = 0; position < numbers.length - 1; position++) {
        //всички числа от първото до предпоследното
        let number = numbers[position];
        let isTop = true; //дали числото е топ

        //обхождам всички числа в масива след моето
        for (let rightPosition = position + 1; rightPosition <= numbers.length - 1; rightPosition++) {
            let numberInRight = numbers[rightPosition];
            if (number <= numberInRight) {
                //моето число не е топ
                isTop = false;
                break;
            }
        }
        //излизаме извън цикъла, който обхожда числата след моето
        //isTop = false -> моето число не е топ
        //isTop = true -> моето число е топ
        if (isTop) {
            topNumbers.push(number);
        }
    }

    //трябва да се погрижим за последното число в масива
    topNumbers.push(numbers[numbers.length - 1]);

    //topNumbers имаме само топ числата
    console.log(topNumbers.join(' '));
}

maxNumber([14, 24, 3, 19, 15, 17]);