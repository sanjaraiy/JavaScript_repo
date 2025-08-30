// const obj={
//     height:30,
// }

// console.log(obj.height);

// delete(obj.height);

// console.log(obj.height);


//---------------------other way--------------------
const obj=Object.create({
    height:30,
})
console.log(obj.height);

delete(obj.height);

console.log(obj.height);

