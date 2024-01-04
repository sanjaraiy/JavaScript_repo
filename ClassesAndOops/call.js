//----------------------Call method()---------------------
function SetUsername(username){
    //complex DB calls
    this.username=username
    console.log('Called');
}

function createUser(username,email,password){
    // SetUsername(username)  //technically,it is a reference in js but  not a call
     SetUsername.call(this,username) //this situation, we call explicitly by using ".call()" method
    // ".call()"  method reference ko bhi hold kar ke rakhta hai 
    // here this keyword is refer to global context 
    this.email=email
    this.password=password
}

const chai=new createUser('chai','chai@fb,com',"123")
console.log(chai);
