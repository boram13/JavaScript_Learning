function word(str){
    
    // .split
    let splited = str.split("")
    
    //sort
    let sorted = splited.sort()

    //join
    let joined = sorted.join("")
    return joined
}
let newWord = word("helius systems")
console.log(newWord)
