
function firstCapitalLetter( str ) {
   
    let word  = str.split(" ");
    let print = ""; 

      for ( let i = 0; i < word.length; i++ ) {  
        
        const current = word[i]
                                           
        let newWord = current.charAt(0).toUpperCase() + current.substr(1); 
       
        print = print.concat(" " + newWord);
        
    }
    
    return print
} 

let secondFunction = firstCapitalLetter("helius systems junior developer")
console.log(secondFunction)