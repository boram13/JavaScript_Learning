//14. Write a JavaScript function to convert an amount into coins.
//Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
//Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
//Output : 25, 10, 10, 1

function numbersTocoins(number, coins) {

    let index = 0
    let coinsat = [];
    
    while (number >= coins[index]) {

            // do te zbres coins nga number dhe me pas kaloj ne nje indeks 
            // me shume te vektorit te coins qe i bie te jete coins me i vogel ne rradhe 
        
            number-=coins[index]

        coinsat.push(coins[index])

        if ( number <= coins[index]){
         
          index++
           
        } 
        
    }
    
    return coinsat

}

let  printFunction = numbersTocoins(46, [25,10,5,2,1])
console.log(printFunction);

//ushtrim i paperfunduar

 