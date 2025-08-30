const myArr=[0,1,2,3,5]

const myHeros=["shaktiman","naagraj"]

const myArr2=new Array(1,2,3,4,5)

// console.log(myArr[1]);


// Array methods
const arr=[1,2,3,4,5]
// arr.push(6);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift(10);
// console.log(arr);
// arr.shift();
// console.log(arr);
// console.log(arr.includes(9));//return datatype->boolean
// console.log(arr.indexOf(3));

//---join method on array-------
// const newArr=arr.join()
// console.log(arr);
// console.log(newArr);
// console.log(typeof newArr);

//-----diff btw slice V/S splice-----
//slice=>(1) original array is not manipulated
      // (2) last index is not included

//splice=>(1) original array is manipulated
       // (2)  last index is included


// console.log("A:-",arr);
// const myn1=arr.slice(1,3);
// console.log(myn1);
// console.log("B:-",arr);

// const myn2=arr.splice(1,3);
// console.log("C:-",arr);
// console.log(myn2);



const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);

//----Concat method----
const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros);

//------spread operator and flat method------
const all_new_heros=[...marvel_heros,...dc_heros];
// console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Sanjh")) //return datatype=>boolean
// console.log(Array.from("Sanjh"))
// console.log(Array.from({name:"hitesh"})) //interesting 

let score1=100
let score2=200
let score3=300

// console.log(Array.of(score1,score2,score3));


//-------Array Methods--------
const arr1=[1,2,13,5]
// console.log(arr1.length);
// console.log(arr1.at(4)) //give value at index 4
// console.log(arr1.concat(['s','a','n','j','h']));
// console.log(arr1.copyWithin(1,3));
// const itr=arr1.entries();
// console.log(itr.next().value);
// console.log(itr.next().value);
// console.log(itr.next().value);
// console.log(itr.next().value);
// console.log(itr.next().value);
// console.log(itr.next().value);

//-------every method-----
// const isBelowThreshold=(curr)=>curr<6;
// console.log(arr1.every(isBelowThreshold)); //return type=>true
// console.log(arr1.fill('a',2)) //modified array return

//-----filter method------
// const result=arr1.filter((ele)=>ele>3)
// console.log(result);

//------find method------
// const found=arr1.find((ele)=>ele<3)
// console.log(found);

//-------findIndex method----- 
// const isLargeElement=arr1.findIndex((ele)=>ele<3)
// console.log(isLargeElement);

// const last=arr1.findLast((ele)=>ele>4)
// console.log(last);
// console.log(arr1.toString());
// const newArr=arr1.toSpliced(0,2);
// console.log(newArr);

// const newArr=arr1.sort()
// console.log(newArr);

const newArr=arr1.toSorted((a,b)=>a-b)
console.log(newArr);

// const newarr=arr1.reverse()
// console.log(newarr);









