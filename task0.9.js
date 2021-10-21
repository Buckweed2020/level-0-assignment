function returnVowels(word) {
    word = word.replace( /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g, '' );

    Array.from(word);

    return Array.from(word);
}  

console.log("Vowels: " + returnVowels("Rinnegan"))