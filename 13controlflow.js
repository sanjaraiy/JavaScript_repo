// if

// const temperature=41
// if(temperature<50){
//     console.log(`less than 50`);
// }else{
//     console.log(`temperature is greater than 50`);
// }
// console.log(`Execute`);
//< , > , <= , >= , == , != , === , !==



// const score=200
// if(score>100){
//     let power="fly"
//     console.log(`User power:${power}`);
// }
// console.log(`User power:${power}`);

// const balance=1000
// if(balance>500) console.log(`text`) , console.log(`text2`);

// const balance=334;
// if(balance<500){
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

// const userLoggedIn=true
// const debitCard=true
// const loggedInGoogle=false
// const loggedInFromEmail=true

// if(userLoggedIn && debitCard){
//     console.log("Allow to buy course");
// }

// if(loggedInFromEmail || loggedInGoogle){
//     console.log("User Logged In");
// }


//------------Switch case statement--------------
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month=3
// switch(month){
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     default:
//         console.log("default case match");
//         break;
    
// }

//-----without break if any case is satisfied then after that code will be executed except default statement-------

//--------------------Truthy statement----------------------------
// const userEmail="Sanjh@ok"
// if(userEmail){
//     console.log("Got user email");
// }else{
//     console.log("Don't have user email");
// }


//******falsy values => false,0,-0,BigInt,0n,"",null,undefined,NaN*******

//******truthy values => "0",'false'," ",[],{}, function(){}********

// const userEmail1=[]
// if(userEmail1.length===0){
//     console.log("Array is empty");
// }
// const emptyObj={}
// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty");
// }

//---------special points---------------
// false==0(true)
// false==''(true)
// 0==''(true)

//------Nullish Coalescing Operator(??) : null undefined------
let val1;
// val1=5 ?? 10
// val1=null ?? 10
// val1=undefined ?? 15
val1=null ?? 10 ?? 20  //first value give
console.log(val1);

//----------ternary operator------
// condition ? true : false

const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80");


