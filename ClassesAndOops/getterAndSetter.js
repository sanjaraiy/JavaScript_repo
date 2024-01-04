//------------------------old syntax using function-------------------
// function has double nature as function or object 
// function User(email,password){
//     this._email=email;
//     this._password=password;

//     Object.defineProperty(this,'email',{
//         get: function(){
//             return this._email.toUpperCase();
//         },
//         set: function(value){
//             this._email=value;
//         }
//     })

//     Object.defineProperty(this,'password',{
//         get:function(){
//             return this._password.toUpperCase();
//         },
//         set:function(value){
//             this.password_=value;
//         }
//     })
// }

// const chai=new User("chai@chai.com","chai")
// console.log(chai.email);



//---------------------object base syntax--------------------
// const User={
//     _email:"h@hc.com",
//     _password:"abc",

//     get email(){
//         return this._email.toUpperCase();
//     },

//     set email(value){
//         this._email=value;
//     },

// }

// const tea=Object.create(User)
// console.log(tea.email);



//------------------------new syntax using class--------------------
// class User {
//     constructor(email,password){
//         this.email=email;
//         this.password=password;
//     }
    
//     get email(){
//         return this._email.toUpperCase();
//     }
//     set email(value){
//         this._email=value;
//     }
//     get password(){
//             //   return this._password.toUpperCase()
//               return `${this._password}sanjh`
//     }
    
//     set password(value){
//         this._password=value.toUpperCase();
//     }
// }

// const sanjh=new User("Sanjh.ai","abc")
// console.log(sanjh.password);
// console.log(sanjh.email);