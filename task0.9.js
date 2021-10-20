function returnVowels(word) {
    word = word.replace( /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g, '' );
}

console.log("Vowels: " + returnVowels("Rinnegan"))