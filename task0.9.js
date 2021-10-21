function returnVowels(word) {
    word = word.replace( /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g, '' );

    Array.from(word);
}  

console.log("Vowels: " + returnVowels("Rinnegan"));