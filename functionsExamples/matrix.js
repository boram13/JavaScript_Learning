const mtr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
//10. Write a JavaScript function which returns the n rows by n columns identity matrix.

function matrix(nElement){

    let i; // number of rows
    let j; //number of columns

    // for condition to walk on a array like column or row

    console.log(nElement.length)
    console.log(nElement[0])
    for ( i = 0;i < nElement.length; i++){
        const currentRow = nElement[i]
        for ( j = 0;j < currentRow.length; j++){
            // console.log(nElement[i][j])
        }
    }
}
matrix(mtr)
// let inputFunction = matrix(mtr)
// console.log(inputFunction)


