//Problem ---->
// let myName="Sanjh     ";
// let myChai="Rai    ";

// console.log(myName.trueLength);

// let myHeros=["thor","spiderman"]

// let heroPower={
//     thor:"hammer",
//     spiderman:"sling",

//     getSpiderPower:function(){
//         console.log(`Spidy Power is ${this.spiderman}`);
//     }
// }

// Object.prototype.sanjh=function(){
//     console.log(`sanjh is present in all objects`);
// }

// Array.prototype.heySanjh=function(){
//     console.log(`Sanjh hey hello`);
// }

// heroPower.sanjh()
// myHeros.sanjh()
// myHeros.heySanjh()


//-----------Inheritance-----------
// const User={
//     name:'chai',
//     email:'chai@google.com',
// }

// const Teacher={
//     makeVideo:true
// }
// const TeachingSupport={
//     isAvailable:false
// }
// const TASupport={
//     makeAssignment:'JS Assignment',
//     fullTime:true,
//     //----inside-inheritance----
//     // __proto__:TeachingSupport
// }

//-----outside-inheritance-----
// Teacher.__proto__=User

//modern Syntax
// Object.setPrototypeOf(TeachingSupport,Teacher);

let anotherUsername="ChaiAurCode       "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is:${this.trim().length}`);
}

anotherUsername.trueLength()
"sanjh".trueLength()
'rai'.trueLength()
