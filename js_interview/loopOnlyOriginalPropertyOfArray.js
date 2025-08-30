// Do looping only of original property of Array

const arr=[1,2,3,5,6];

Array.prototype.extraProperty='sanjay'

// for(let v in arr){
//     console.log(v);
// }

for(let v in arr){
    if(arr.hasOwnProperty(v)){
        console.log(v);
    }
}