function oddOccurences (sentence) {
    //sentence = 'Cake IS SWEET is Soft CAKE sweet Food'
    let words = sentence.toLowerCase().split(' ');
    //'Cake IS SWEET is Soft CAKE sweet Food'.toLowerCase() -> 'cake is swee is soft cake swee food'
    //'cake is sweet is soft cake swee food'.split(' ') -> ['cake', 'is', 'sweet', 'is'...]

    //1. преброим всяка дума в текста колко пъти се среща
    let wordsCount = {};
    //дума -> бр. срещания
    for (let word of words) {
        if (wordsCount[word]) {
            //има я записана тази дума -> текущ брой срещания + 1
            wordsCount[word]++;
        } else {
            //няма я записана думата -> добавяме със стойност 1
            wordsCount[word] = 1;
        }
    }

    //wordsCount: дума -> брой срещания
    //2. взимаме само думите, които се срещат нечетен брой пъти
    let oddOccurencesWords = []; //само думи, които се срещат нечетен брой пъти
    for (let word in wordsCount) {
        if (wordsCount[word] % 2 !== 0) {
            oddOccurencesWords.push(word);
        }
    }

    console.log(oddOccurencesWords.join(' '));
} 

oddOccurences('Cake IS SWEET is Soft CAKE sweet Food');