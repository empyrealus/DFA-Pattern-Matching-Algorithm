// Theoretical Quantum Logic Programing (w/o boolean)*
// Using recursion to perform matrix multiplication
// features includes: valid matrix check (quantum logic gates), finite numbers only, terneary break statement work around with custom error reporting
// Console.log(result) is used to show where the loop ends programmatically
'use strict';
var matrixY = [1,3,4,4],matrixX = [2,5,4,4],result = [],error = "Invalid Matrix",i=-1,newval;
function UserException(state){this.name = 'UserException';this.message = state;};
function that(val){i++; if(i !== -1){
    let myProduct = (!Number.isNaN((matrixX[val]*matrixY[val] == false))) ? matrixX[val]*matrixY[val] : null;
    if(isFinite(myProduct)){result.push(myProduct);}
} return i;}
function breakIt(){console.log(result);throw new UserException("Completed");}
function loop_matrix(values){that(i);(i < (values+1)) ? loop_matrix(values) : breakIt();}
var matrixState = Number(matrixX.length) + Number(matrixY.length),
matrixRem = matrixState/2,value = (matrixState % 2 === 0 && matrixX.length!=0 && matrixY.length!=0 ) ? 
loop_matrix(matrixRem) : throw new UserException("Invalid Matrix");
