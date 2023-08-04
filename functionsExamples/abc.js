
// funksion qe do te ktheje matricen 2x5 te mbushur me elemente me vleren 0

function matrixBy(m, n) {

    var matrix = []
    for(var i = 0; i < n; i++) {

        matrix.push(new Array(m).fill(0))
    }
    return matrix
}
console.log(matrixBy(2,5))