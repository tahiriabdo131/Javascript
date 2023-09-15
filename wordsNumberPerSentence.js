function getWordsNumberPerSentence(str) {
    return str.split(' ').filter(item => item !== '').length;
}

console.log("The number of words is ", getWordsNumberPerSentence("My Name  is  Abdelali  "));
