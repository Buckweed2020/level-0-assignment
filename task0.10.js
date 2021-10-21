function matchingCharacters(word1,word2) {
    let similar = []
    let compare = []

    for(let i = 0; i < word1.length; i++) {
    }
    for(let i = 0; i < word2.length; i++) {
    }

   word1 = new Set(word1.toLowerCase())
   word2 = new Set(word2.toLowerCase())

   word1 = Array.from(word1).join('')
   word2 = Array.from(word2).join('')

   letters = word1 + word2


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