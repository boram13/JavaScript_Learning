function secondLowestGreatest(argument){

    let sorted = argument.sort()

    console.log(sorted)

    const secondMinMax ={
        secondMin:sorted[1],
        secondMax:sorted[argument.length - 2]
    }

    return secondMinMax
}

let inputFunction = secondLowestGreatest([1,3,2,6,8,9,7])
console.log(inputFunction)
