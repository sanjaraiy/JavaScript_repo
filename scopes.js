// let a=100
// const b=20
// var c=30

// if(true){
//     let a=10
//     const b=20
//     var c=30
//     console.log("INNER:-",a);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// NOTE => node wala scope different hai window console wala scope se 


//-------clousre property---------
// function one(){
//     const username="Sanjh"

//     function two(){
//         const website="youtube"
//         console.log(username);
//     }
//     // console.log(website);

//     two()
// }

// one()

//-----------------clousre property---------------
// if(true){
//     const username="Sanjh"
//     if(username==="Sanjh"){
//         const website=" youtube"
//         console.log(username+website);
//     }
//     // console.log(website);
// }
// console.log(username);



// console.log(addone(5));
// function addone(num){
//     return num+1
// }
// // addone(5)

// console.log(addTwo(5));
// const addTwo=function(num){
//     return num+2
// }

// // addTwo(5)

//-----------------------------Arrow function-----------------------
// const user={
//     username:"Sanjh",
//     price:999,

//     welcomeMessage: function(){
//       console.log(`${this.username}, Welcome to website`); //current context ko access karne ke liye this keyword use kiya hai  
//     //   console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username="John"
// user.welcomeMessage()



// console.log(this);
// browse me this keyword ka global object window hota hai 
// jabki node environment me this keyword ka global object empty object hota hai 

// function chai(){
//     let username="sanjh"
//     // console.log(this);
//     console.log(this.username);
// }
// chai()


// const chai=function(){
//     let username="Sanjh"
//     console.log(this);
//     // console.log(this.username);
// }

// chai()

// const chai=()=>{
//     let username="Sanjh"
//     console.log(this);
//     // console.log(this.username);
// }

// chai()



// const addTwo=(a,b)=>{
//   return a+b  //explicit return
// }

// const addTwo=(a,b)=> a+b;  //implicit return 
// const addTwo=(a,b)=> (a+b);  //implicit return 
// const addTwo=(a,b)=>({username:"Sanjh"}) //object implicitly return
// console.log(addTwo(3,4));














