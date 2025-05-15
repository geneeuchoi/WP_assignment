function wordSearch(sentence, key) {
    let array = sentence.split(' ');
    let result = '';

    for (let i = 0; i < array.length; i++) {
        result += array[i].includes(key)? array[i] + ' ': '';
    }

    console.log(`sentence = '${sentence}'`, sentence);
    console.log(`key = '${key}'`);

    if (result=='') {
        console.log("not found!");
    } else {
        console.log(`result: ${result}`);
    }
}

wordSearch('The quick brown fox jumps over the lazy dog', 'o');
wordSearch('The quick brown fox jumps over the lazy dog', 'ov');
wordSearch('The quick brown fox jumps over the lazy dog', 'os');