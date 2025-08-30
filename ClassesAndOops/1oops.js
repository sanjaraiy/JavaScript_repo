//---------Object literal-------------
// const user={
//     username: "Sanjh",
//     loginCount:8,
//     signedIn: true,

//     getUserDetails:function(){
//         // console.log("Got user details from database");
//         // console.log(`username: ${this.username}`);
//         console.log(this);
//     }
// }
// // console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

//----- this keyword current context ki baat karta hai--------------
//------In Node.js(runtime-environment),globally "this" keyword empty {} deta hai and globally current context ko change bhi kiya ja sakta hai-----------------
//-----In any browser console,globally current context "window object {}" hota hai or "this" keyword uska access deta hai--------


//------------------constructor---------------
// console.log(this);
function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    
    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }
    // return this


}

// const userOne=User("Sanjh",12,true);
// const userTwo=User("Deep",10,true);
const userOne=new User("Sanjh",12,true);
// const userTwo=new User("Deep",10,true);
console.log(userOne.constructor);
// console.log(userTwo);


// new =>   (1) new object {} create as instance
        //  (2) constructor function call hota hai due to "new" keyword that packets all the arguments and give them.
        //  (3) all arguments are injenced with the "this" keyword
        // (4) we will get them in function 

      



















