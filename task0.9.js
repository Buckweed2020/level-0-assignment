function returnVowels(word) {
    word = word.replace( /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g, '' );

    Array.from(word);
    return word.split("")
}  

console.log("Vowels: " + returnVowels("Rinnegan"));