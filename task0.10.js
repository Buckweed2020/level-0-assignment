//Task 0.10
function matchingChar(str1,str2) {
    let similar = []
    let compare = []

    for(let i = 0; i < str1.length; i++) {
    }
    for(let i = 0; i < str2.length; i++) {
    }

   str1 = new Set(str1.toLowerCase())
   str2 = new Set(str2.toLowerCase())

   str1 = Array.from(str1).join('')
   str2 = Array.from(str2).join('')

   letters = str1 + str2


   for(let i of letters) {
       if(!compare.includes(i)){
           compare.push(i)
       } else {
           similar.push(i)
       }
   }

   return similar


} 

matchingChar("Bubblegum","Checksum")