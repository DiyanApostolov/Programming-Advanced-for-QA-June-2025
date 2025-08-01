function wordTracker (array) {
    let wordToTrack = array.shift().split(' '); //масив с думите, които трябва да преброим колко пъти се срещат
    //'this sentence'.split(' ') -> ['this', 'sentence']

    let wordOccurences = {};
    //дума -> бр. срещания

    for (let word of wordToTrack) {
        wordOccurences[word] = 0;
    }

    //wordOccurences = {
       // 'this': 0, 
        //'sentence': 0
    //};

    for (let word of array) {
        if (word in wordOccurences) {
            //тази дума я търся да я броя -> преброявам
            wordOccurences[word]++;
        }
    }

    //wordOccurences = {
        // 'this': 3, 
        //'sentence': 2
    //};

    let entries = Object.entries(wordOccurences);
    entries.sort((a, b) => b[1] - a[1]); //сортираме записите по бр. срещания в намаляващ ред

    //отпечатваме всяка дума колко пъти се среща
    for (let [word, count] of entries) {
        console.log(`${word} - ${count}`)
    }
}

wordTracker([
'this sentence', 
'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);