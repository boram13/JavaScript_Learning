
function numberOfVowels(str){
   

    //deklaroj zanoret qe me vone ti perdor per krahasim ne cikel
    const vowels = ["a","e","i","o","u","y"];
    let count =0;
   
    // mbaj nje variabel qe ben count sa here haset nje zanore brenda stringes

    for( let i=0; i<str.length;i++){ 

        let char = str.charAt(i).toLowerCase()
      
       
        if ( vowels.includes(char)){

            count++
        }
       
    }
    return count
}

 let inputFunction = numberOfVowels("Bora Menerja");
 console.log(inputFunction)