function returnVowels(str) {
    str = str.replace( /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g, '' );
    return str
}

"Vowels: " + returnVowels("Rinnegan")