
// deklaroj funksionin qe do gjej minimumin 
function maxElement(arr) {
   
    elMax = arr[0];

    //cikli qe do futem ne vektor te kontrolloj elementet qe kam , supozoj qe kam n elemente 
    for (let i = 0; i < arr.length; i++){

         if (arr[i] > elMax )  {  
               
            elMax = arr[i];
        }
    }

     return elMax
 
    }
   
//therras funksionin qe i jap dhe vlerat vektorit 
 let functionPrint = maxElement([4, 1, 2, 5, 9, 0]);

console.log(functionPrint)