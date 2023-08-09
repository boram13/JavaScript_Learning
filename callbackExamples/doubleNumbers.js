
/////Write a javascript function that takes an array of numbers and a callback as a parameter, 
////and returns the doubles of each element in a new array
const modArray = [0,1,2,3,4,5,6,7,8,9,10]

const numbersToDouble = (nr) => {
   return  nr *=2; // nr do me mbaj 2x e secilit number tani 
}

function toDouble(modArray, callback) {
   const modified = []; // ktu do mar dhe do bej coppy te gjithe elementet e vektorit 
   // qe do ti perdor ne fund ne return per ti afishuar

   for(let i = 1; i < modArray.length; i++) {

      // ne vleren i te vektorit do bej replace cdo element duke hedhur nje kopje te tij,
      // ne pozicionin i do hedh elementin qe eshte dyfishi i vleres i 
      modified.push(callback(modArray[i])); 
   }

   return modified;
   
}
let printFunction = toDouble(modArray,numbersToDouble)
   console.log( printFunction);