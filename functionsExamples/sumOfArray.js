
// krijoj vektorin
let sumOfArray= (arr) =>{

//mar nje variabel per shumen dhe e inicializoj shumen qe nis nga zero
let sum = 0

// bej kushtin per numerimin e secilit eleement ne array
for (let i = 0; i < arr.length; i++ ) {
   
    sum += arr[i]

}
return sum
}
let functionSum = sumOfArray([1,2,3,4,5])
console.log(functionSum)