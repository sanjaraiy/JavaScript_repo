//---------for-loop---------

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);
// }

// for(let i=1;i<=10;i++){
//     console.log(`Outer loop value: ${i}`);
//     for(let j=1;j<=10;j++){
//        console.log(i+'*'+j+'='+i*j);
//     }
// }

//------break and continue-------
// for(let i=1;i<=20;i++){
//  if(i==5){
//     console.log(`Detected 5`);
//     // break;
//     // continue
//  }
//  console.log(`Value of i is ${i}`);

// }

//--------while-loop--------
// let i=1;
// while (i<=10) {
//     console.log(`Value of index is: ${i}`);
//     i+=2;
// } 

// //----------do-while-loop-------
// let score=11
// do{
//     console.log(`Score is: ${score}`);
//     score++;
// }while(score<=10);

//----------for-of-loop----------
// const arr=[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

// const greeting = "Hello world!"
// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
// }

//-----------Maps(object)---------
// const map=new Map()
// map.set('IN','India')
// map.set('USA','United States of America')
// map.set('Fr','France')
// map.set('IN','India')
// console.log(map);
// for (const key of map) {
//     console.log(key);
// }
// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }
// for (const key in map) {
//      console.log(key);
// }


// const obj={
//     'game1':"NFS",
//     'game2':"Sipderman"
// }
//*****object can't be iterable by using "for-of-loop" */
// for (const [key,val] of obj) {
//     console.log(key, ':-', val);
// }

//-------------for-in-loop--------------
//*******Object*******
// const obj={
//     js:'javascript',
//     cpp:'C++',
//     rb:'ruby',
//     swift:'swift by apple',
// }

// for (const key in obj) {
//     console.log(key,':-',obj[key]);
// }

//*******Array********
// const programming=["js","rb","py","java","cpp"]
// for (const key in programming) {
//     console.log(key,':-',programming[key]);
// }

//------------for-each-loop-------------
// const coding=["js","ruby","java","python","cpp"]
// callbackfun=> ek function de-do ki mujhe kya karna hai 

// coding.forEach(function(val){
//     console.log(val);
// })

// coding.forEach((val)=>{
//     console.log(val);
// })

// function print(item){
//    console.log(item);
// }
// coding.forEach(print) //give only reference, not be executed

// coding.forEach((val,index,arr)=>{
//       console.log(val);
//       console.log(index);
//       console.log(arr);
// })

// const myCoding=[
//     {
//         language:"javascript",
//         filename:"js",

//     },
//     {
//         language:"java",
//         filename:"java",

//     },
//     {
//         language:"C++",
//         filename:"cpp",

//     },
// ]

// myCoding.forEach((item)=>{
//     console.log(item.language, ':-', item.filename);
   
// })