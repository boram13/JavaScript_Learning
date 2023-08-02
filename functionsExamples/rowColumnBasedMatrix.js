// duhet te ndertoj nje matrice bazuar nga numri i kolonave dhe rreshtave dhe ta mbush me njesha
//deklaroj numrin e rreshtave dhe te colonave qe do vendos ne matrice 
const nbRows = 5 ;
const nbColumns = 5 ;


function matrixBy(rows, columns){

    // deklaroj si fillim matrice boshe qe do ta perdor me vone per ta mbushur 
    let matrix = [];

    // me kushtin e for do leviz tek cdo element i secilit rresht qe do shtoj ne vazhdim
    for ( let i = 0; i < rows; i++){

        let newRow = []

        for ( let j=0; j< columns; j++){
          
            let newCol = i + j// e barazoj me zero ne rast se kerkoj qe te printoj nje matrice e cla i ka te gjithe 
            // elementet zero, nese kerkoj qe ti kete te renditura >>> atehere do ti jap vleren i+j
            
            newRow.push(newCol)
        }
        matrix.push(newRow)
      }
      return matrix
}
let inputMatrix = matrixBy(nbRows, nbColumns)
console.log(inputMatrix)
      


 
