
function firstWord( str ) {
    
    let newWord = str.charAt(0).toUpperCase() + str.substr(1); 
    return newWord        
}

function capitalLetter( str ) {
   
  
    let word  = str.split(" ");
    let print = ""; 

    for ( let i = 0; i < word.length; i++ ) {  
        
        const current = word[i]

        const newWord = firstWord(current)
                                           
       
        print = print.concat(" " + newWord);
        
    }

    return print
} 

let secondFunction = capitalLetter("helius systems junior developer")
console.log(secondFunction)