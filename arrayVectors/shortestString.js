function longestString(str){
    
    //  split
    let splited = str.split( " ")
   

    //mar nje variabel dhe do mbaj numrin me te vogel duke nis si nje stringe pa karaktere, qe nis gjatesia nga zero
    let shortest = splited[0]; 

    // me duhet nje loop per tu fut ne vektor tashme
    for ( let i = 0; i < splited.length; i++ ) {

        const current = splited[i]

        if( current.length<shortest.length){

        shortest = current
        }
    
    

    }
    return shortest


}
let inputString = longestString("development helius systems developer")
console.log(inputString)