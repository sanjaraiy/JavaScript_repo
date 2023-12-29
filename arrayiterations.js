// const coding=["js","ruby","java","python","cpp"]

// const values=coding.forEach((item)=>{
//     //console.log(item)
//     return item
// })
// console.log(values);

//*******callbackFun=>ye forEach-case me fun kuchh bhi return nhi karte hai*********



// const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNum=myNums.filter((num)=>num>4)
// console.log(newNum);

// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num);
//     }
// })
// console.log(newNums);

// // example of filter:- 
// //*******callbackFun=>ye filter-case me fun array return  karta hai*********

// const books=[
//     {
//         title:'Book One',
//         genre:'Fiction',
//         publish:1981,
//         edition:2004,
//     },
//     {
//         title:'Book Two',
//         genre:'Non-Fiction',
//         publish:1992,
//         edition:2008,
//     },
//     {
//         title:'Book Three',
//         genre:'History',
//         publish:1999,
//         edition:2007,
//     },
//     {
//         title:'Book Four',
//         genre:'Non-Fiction',
//         publish:1989,
//         edition:2010,
//     },
//     {
//         title:'Book Five',
//         genre:'Science',
//         publish:2009,
//         edition:2014,
//     },
//     {
//         title:'Book Six',
//         genre:'Fiction',
//         publish:1987,
//         edition:2010,
//     },
// ]

// const userBooks=books.filter((bk)=>bk.genre==='Fiction')
// console.log(userBooks);

//-----Map-loop--------
//********map me callbackfun array return karta hai***********/
// const myNumbers=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNumbers.map((num)=>num+10); //array return
// const newNums=myNumbers.map((num)=>{num+10}); //undefined array return
// console.log(newNums);

//****Chaining in map****/
// const newNums=myNumbers
//              .map((num)=>num*10)
//              .map((num)=>num+1)
//              .filter((num)=>num>=40)
// console.log(newNums);

//-----Reduce method------
// const myNums=[1,2,3]

// const myTotal=myNums.reduce((acc,curr)=>{
//     console.log(`acc: ${acc} and curr: ${curr}`);
//     return acc+curr
// },3)
// console.log(myTotal);

// const shoppingCart=[
//     {
//         item:"js course",
//         price:2999,
//     },
//     {
//         item:"python course",
//         price:999,
//     },
//     {
//         item:"mobile dev course",
//         price:2999,
//     },
//     {
//         item:"data science course",
//         price:12999,
//     },
// ]

// const totalPrice=shoppingCart.reduce((acc,curr)=>{
//     return acc+curr.price
// },0)
// console.log(totalPrice);

