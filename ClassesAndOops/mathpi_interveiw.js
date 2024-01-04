//------Problem => change the value of PI -----------
// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);
// console.log( typeof Math);

//------due to this reason ,we can't change value of PI------------
// const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);




//-----------------When we create a own library--------
const mynewObject=Object.create(null)  //factory function
const chai={
    name:'ginger chai',
    price:250,
    isAvailable:true,

    orderChai:function(){
        console.log("chai nhi banni");
    }
}

// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    // writable:false,
    enumerable:false,
})
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

//----directly object is not iterable----
// for (const [key,value] of chai) {
//     console.log(`${key} : ${value}`);
// }

//-----now, object is iterable----------
// for (const [key,value] of Object.entries(chai)) {
//    if(typeof value!=='function'){
//        console.log(`${key} : ${value}`);
//     }
// }



