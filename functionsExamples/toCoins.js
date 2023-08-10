function numbersTocoins(number, coins) {

    let index = 0
    let coinsat = [];

    while (number) {
        //fillimisht kontrolloj nese numri i marre ne shqyrtim eshte me i madhe se
        // sa vlera e e coins qe mund te perbehet ne nje indeks te vektorit

        if (number >= coins[index]) {
            coinsat.push(coins[index])

            // bej zbritjen e numrit te marre ne shqyrtim me coins qe kam ne vektor
            // dhe qe jam duke e krahasuar nese eshte i vlefshem kushti me lart

            number-=coins[index]
        }
            // pasi kam bere zbritjen  duhet te kontrolloj serish nese mbetja e zbritjes
            // qe per ne eshte nje numer i ri eshte me i madhe se sa coinsi i rradhes 
            
        if ( number <= coins[index]){
          index++
        }
    }

    return coinsat
}

 let  printFunction = numbersTocoins(46, [25,10,5,2,1])
 console.log(printFunction);