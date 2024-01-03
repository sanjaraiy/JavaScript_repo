//-------Promise is object and we can create a instance of promise (in ES6) by using "new" keyword--------------
//---Step-(1) create Instance promise------
// const promiseOne=new Promise(function(resolve,reject){
//   //Do an async task
//   //DB calls, cryptography, network
//   setTimeout(function(){
//     console.log('Async task is complete');
//     resolve(); //now connected .then()
//   },1000)
// })

// //---Step-(2) consume Instance promise------
// //******".then()" is directly connected with resolve*****
// promiseOne.then(function(){
// console.log("Promise consumed");
// })


//---------------Promise two-----------------
// new Promise(function(resolve,reject){
//   setTimeout(function(){
//     console.log('Async task 2');
//     resolve();
//   },1000)
// }).then(function(){
//   console.log('Async 2 resolved');
// })


//---------------Promise three---------------
// const promiseThree=new Promise(function(resolve,reject){
//   setTimeout(function(){
//     resolve({usename:"Chai",email:"chai@example.com"})
//   },1000);

// })

// promiseThree.then(function(user){
//  console.log(user);
// })

//-----------Promise four--------------
//******(1) Method ---> Use Here => .then().catch().finally()************/
// const promiseFour=new Promise(function(resolve,reject){
//    setTimeout(function(){
//      let error=true;
//      if(!error){
//       resolve({username:"Sanjh",password:"123"});
//      }else{
//       reject('Something went wrong');
//      }

//    },1000)
// })
// promiseFour
// .then(function(user){
//    console.log(user);
//    return user.username;
// })
// .then((username)=>{
//   console.log(username);
// })
// .catch(function(error){
//      console.log(error);
// })
// .finally(()=>{
//   console.log('The promise is either resolved or rejected');
// })

//---------------------Promise five----------------------
//******(2) Method ---> Use Here => async await ************/
// const promiseFive=new Promise(function(resolve,reject){
//   setTimeout(function(){
//     let error=true;
//     if(!error){
//      resolve({username:"Javascript",password:"123"});
//     }else{
//      reject('ERROR: JS went wrong');
//     }
//   },1000)
// })
// async function consumePromiseFive(){
//    try{
//       const response=await promiseFive;
//       console.log(response);
//    }catch(error){
//        console.log(error);
//    }
// }
//  consumePromiseFive();


// async function getAllUsers(){
//   try{
//      //-----------------------fetch is an object that gives the response as a promise-----------------------------------
//      const response=await fetch('https://api.github.com/users/sanjaraiy')
//     //  console.log(response);
//       const data= await response.json(); //it takes time to convert promise into json() form
//       console.log(data);
//   }catch(error){
//           console.log("Error:",error);
//   }
// }
// getAllUsers();

fetch('https://api.github.com/users/sanjaraiy')
.then((response)=>{
   return response.json()
}).then((data)=>{
   console.log(data);
})
.catch((error)=>{
   console.log("Error:",error);
})









