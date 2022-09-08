// Simple Matrix Multiplier using a for loop
//Checks for invalid matrix (no inputs or odd inputs), then continues to multiply the matrix's
var matrixY = [1,3],matrixX = [2,5],result = [],error = "Invalid Matrix";
function loop_matrix(values){for(i=0;i<values;i++){result.push((matrixX[i]*matrixY[i]));}console.log(result);}
var matrixState = Number(matrixX.length) + Number(matrixY.length),
matrixRem = matrixState/2,value = (matrixState % 2 === 0 && matrixX.length!=0 && matrixY.length!=0 ) ? loop_matrix(matrixRem) : 
console.log(error);
