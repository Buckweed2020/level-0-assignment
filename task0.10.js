function matchingCharacters(word1,word2) {
    let similar = []
    let compare = []

    for(let i = 0; i < word1.length; i++) {
    }
    for(let i = 0; i < word2.length; i++) {
    }

   str1 = new Set(string1.toLowerCase())
   str2 = new Set(string2.toLowerCase())

   str1 = Array.from(string1).join('')
   str2 = Array.from(string2).join('')

   letters = string1 + string2


   for(let i of letters) {
       if(!compare.includes(i)){
           compare.push(i)
       } else {
           similar.push(i)
       }
   }

   return similar


} 

matchingCharacters("Bubblegum","Checksum")