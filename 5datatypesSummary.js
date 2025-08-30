//-------Primitive(call by value)-------
//7 types:
// (1) String
// (2) Number
// (3) Boolean
// (4) null
// (5) undefined
// (6) Symbol
// (7) BigInt

//------examples:--------
// const score=100
// const scoreValue=100.3
// const isLoggedIn=false
// const outsideTemp=null
// let userEmail;
// const id=Symbol('123')
// const anotherId=Symbol('123')
// console.log(id===anotherId);
// const bigNumber=1234235346435546456457n


//---------Reference(Non-primitive)(call by reference)--------
// (1) Arrays (return object)
// (2) Objects (return object)
// (3) Functions (return function -->> object-function)

const heros=["shaktiman","naagraj","doga"]
let myObj={
    name:"Sanjh",
    age:22,
}

let myFunction=function(){
    console.log("Hello world");
}

console.log(typeof myFunction);


//---------------Read-more-------------
//https://262.ecma-international.org/5.1/#sec-11.4.3


//-----------datatype-return-type=>----------
// undefined => undefined
// null => Object
// boolean => boolean
// Number => Number
// string => string
// object => object
// function => function-object/function
// Array => object


//*******************************Memory******************************/
/**
 * 2 types memory-allocation
 * (1)-Stack(Primitve)->give copy of original value
 * (2)-Heap(non-Primitive)->give reference of original value
 * 
 * 
 * example:-
 * let myYoutube="SanjhOk33.com"
 * let anothername=myYoutubename
 * anothername="chaiaurcode"
 * 
 * console.log(myYoutubename); //not change value
 * console.log(anothername); //change value of copy variables
 * 
 * let userOne={
 * email:"user@google.com",
 * upi:"user@ybl"
 * }
 * 
 * let userTwo=userOne
 * userTwo.email="Sanjh@google.com"
 * 
 * console.log(userOne.email);
 * console.log(userTwo.email);
 * 
 */
