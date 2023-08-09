//16. Write a JavaScript function to extract unique characters from a string.
//Example string : "thequickbrownfoxjumpsoverthelazydog"
//Expected Output : "thequickbrownfxjmpsvlazydg"


function uniqueChar(item){

 let uniqueChar ="";

 for (let i=0; i < item.length;i++) {

  if(uniqueChar.indexOf(item.charAt(i)) ==-1) {

    uniqueChar += item[i];  
  
   }
  }
  return uniqueChar;  
}  

let printFunction = uniqueChar("BoraMenerjatrembedhjete")
console.log(printFunction)

