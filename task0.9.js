function returnVowels(word) {
    word = word.replace( /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g, '' );


    word = word.toLowerCase()
    word = new Set(word)
    word = Array.from(word)


    console.log("Vowels: " + word)
}  

console.log(returnVowels("Umuzi"));