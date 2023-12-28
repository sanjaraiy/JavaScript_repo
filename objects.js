// when the temp literal se jo object banta hai vo singleton object nhi banta hai 
//constructor se always object singleton banta hai

//-----object literals-------
const mySym=Symbol("key1")
const User={
      name:"Sanjh",
      "full name":"Sanjh Rai",
       mySym:"mykey1", //treat as string not symbol
       [mySym]:"mykey1",
      age:18,
      location:"Jaipur",
      email:"Sanjh@google.com",
      isLoggedIn:false,
      lastLoginDays:["Monday","Saturday"]
}

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

