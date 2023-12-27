// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);
// console.log(2===1);

//-------different datatypes---------
// console.log("2">1);
// console.log("02">1);


// console.log(null>0); //false
// console.log(null==0); //false
// console.log(null>=0); //true

//----Reason----
/*
the reason is that an equality check == and comparisons >,<,>=,<= work differently
Comparsions convert NULL to a number, treating it as 0.
that's why (3)  NULL>=0(true) and (1) NULL>0(false).
*/

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);

//===( value+datatype check)
console.log("2"===1);
