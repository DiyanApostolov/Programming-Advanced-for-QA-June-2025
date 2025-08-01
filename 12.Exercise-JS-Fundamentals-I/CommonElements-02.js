function commonElements (arr1, arr2) {
    //отпечатаме общите елементи в двата масива
    //arr1 = [3, 4, 5, 6]
    //arr2 = [2, 4, 6]
    //common elements: 4, 6

    for (let element of arr1) {
        if (arr2.includes(element)) {
            console.log(element);
        }  
    }

}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);
