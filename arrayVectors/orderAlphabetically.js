function orderAlphabetically(str){
    
    // .split
    let splited = str.split("")
    
    //sort
    let sorted = splited.sort()

    //join
    let joined = sorted.join("")
    return joined
}
let newOrder = orderAlphabetically("helius systems")
console.log(newOrder)
