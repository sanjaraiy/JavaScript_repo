//---------------------Example-1------------------------
console.log("A");
console.log("B");

setTimeout(()=>console.log("C"),0)

console.log("D");
console.log("E");
console.log("F");


//-----------------Example-2--------------------
// async function getData(){
//    return 1;
// }
// console.log("A");
// console.log("B");

// setTimeout(()=>console.log("C"),0)

// //MircosTask high Priority
// getData().then(()=>console.log("I am developer"))

// console.log("D");
// console.log("E");
// console.log("F");

//-----------------Example-3----------------------------
// console.log("A");
// console.log("B");

// setTimeout(()=>console.log("C"),1000)

// fetch('https://api.github.com/user/sanjariay').then(()=>console.log("I am developer")) //fetch data is some taking time.

// console.log("D")
// console.log("E")
// console.log("F")

//--------------JavaScript Starvation Problem-------------------------------
// It happens because in the microtask queue if one executes and creates another callback function it continuously happens and the microtask queue is not free. due to its higher priority, it’s run again and again whenever the call stack is free and there is no chance of the callback queue to run. due to this callback queue going into starvation.
