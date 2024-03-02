function additon(matrix1,matrix2){
    if (matrix1.length !== matrix2.length){
     console.log("Matrix must have no. of row and column");
     return;
 }
 const result=[];
 for (let i=0;i<matrix1.length;i++){
     const row=[];
     for(let j=0;j<matrix2.length;j++){
         row.push(matrix1[i][j]+matrix2[i][j]);
     }
     result.push(row)
 }
 return result;
}
function multiplication(matrix1,matrix2){
 if (matrix1.length !== matrix2.length){
     console.log("Matrix must have no. of row and column");
     return;
}
const result=[];
console.log(matrix1.length)
for (let i=0;i<matrix1.length;i++){
 const row=[];
 for(let j=0;j<matrix2[0].length;j++){
     let sum=0;
     for (let k=0;k<matrix1[0].length;k++){
         console.log(matrix1[i][k],matrix2[k][j]);
         sum += matrix1[i][k]*matrix2[k][j];
     }
    console.log(sum) 
    row.push(sum);
 }
 result.push(row);
}
return result;
}
const matrix1=[[1,2],[4,5]];
const matrix2=[[7,8],[10,11]];
console.log("matrix1:",matrix1);
console.log("matrix2:",matrix2);
const sum=additon(matrix1,matrix2);
console.log("sum of matrices is:",sum)

const product=multiplication(matrix1,matrix2);
console.log("multiplication of matrix is:",product)
