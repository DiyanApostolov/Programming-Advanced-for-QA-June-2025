function arrayRotation (arr, countRotations) {
    //arr = [51, 47, 32, 61, 21]
    //countRotations = 2

    for (let rotations = 1; rotations <= countRotations; rotations++) {
        let firstElement = arr.shift(); //премахваме и взимаме първия елемент в масива
        //arr = [51, 47, 32, 61, 21].shift() => [47, 32, 61, 21]
        arr.push(firstElement); //добавяме първия елемент в края на масива
        //[47, 32, 61, 21].push(51) => [47, 32, 61, 21, 51]
    }

    console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);