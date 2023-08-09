function numbersTocoins(number, coins) {
    let index = 0
    let coinsat = [];
    while (number) {
        if (number >= coins[index]) {
            coinsat.push(coins[index])
            number-=coins[index]
        }
        if ( number <= coins[index]){
          index++
        }
    }
    return coinsat
}
 let  printFunction = numbersTocoins(46, [25,10,5,2,1])
 console.log(printFunction);