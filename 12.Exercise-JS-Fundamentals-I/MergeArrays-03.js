function mergeArrays (arr1, arr2) {
    //arr1 и arr2 -> масиви от текстове
    //дължина на arr1 === дължина на arr2
    let newArray = []; //празен масив

    for (let position = 0; position <= arr1.length - 1; position++) {
        let element1 = arr1[position]; //текст '3'
        let element2 = arr2[position]; //текст '4'

        if (position % 2 === 0) {
            let sum = Number(element1) + Number(element2);
            newArray.push(sum);
        } else {
            newArray.push(element1 + element2); //'3' + '4' = '34'
        }
    }

    console.log(newArray.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);