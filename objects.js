// when the temp literal se jo object banta hai vo singleton object nhi banta hai 
//constructor se always object singleton banta hai

//-----object literals-------
// const mySym=Symbol("key1")
// const User={
//       name:"Sanjh",
//       "full name":"Sanjh Rai",
//        mySym:"mykey1", //treat as string not symbol
//        [mySym]:"mykey1",
//       age:18,
//       location:"Jaipur",
//       email:"Sanjh@google.com",
//       isLoggedIn:false,
//       lastLoginDays:["Monday","Saturday"]
// }

// console.log(User.email);
// console.log(User["email"]);
// console.log(User["full name"]);
// console.log(User["mySym"]);
// console.log(typeof User.mySym);
// console.log(typeof User[mySym]);

// User.email="SanjhDeep@chatgpt.com"
// console.log(User["email"]);
// Object.freeze(User) //can't change any property of object
// User.email="SanjhDeep@microsoft.com"
// console.log(User);

// User.greeting=function(){
//     console.log("Hello Js user");
// }

// console.log(User.greeting); //give function reference only not a executing
// console.log(User.greeting()); // function executing

//string interpolation means that use the 'backtik'
// User.greetingTwo=function(){
//     console.log(`Hello JS user2, ${this.name}`);
// }
// console.log(User.greetingTwo());





//--------object Constructor(singleton)--------
// const tinderUser=new Object() //singleton object
const tinderUser={}  //non-singleton object
 tinderUser.id="123abc"
 tinderUser.name="Sammy"
 tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    email:"some@google.com",
    fullname:{
        userfullname:{
            firstname:"Sanjh",
            lastname:"Rai"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

// const obj1={1:"a",2:"b"}
// const obj2={3:"a",4:"b"}
// const obj4={5:"a",6:"b"}
// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2,obj4)

// const obj5={...obj1,...obj2}
// console.log(obj5);


const users=[
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:2,
        email:"d@gmail.com"
    },
    {
        id:3,
        email:"n@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLogged'));
