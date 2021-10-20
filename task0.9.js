function returnVowels(str) {
    str = str.replace( /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g, '' );
    return str
}

console.log("Vowels: " + returnVowels("Rinnegan"))