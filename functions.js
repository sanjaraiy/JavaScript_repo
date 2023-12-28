// function sayMyName(){
//     console.log("S");
//     console.log("A");
//     console.log("N");
//     console.log("J");
//     console.log("H");
// }

// sayMyName; //function reference
// sayMyName(); //function execution

// function add(num1,num2){ //parameters
//     // console.log(num1+num2);
//     return num1+num2;
// }


// add(2,null) //arguments
// const res=add(2,3);
// console.log(res);


function loginUserMessage(username="John"){
    if(!username){
         console.log(`Please enter a username..!!`);
    }else{
        return `${username} just logged in`
    }
    
}
const res=loginUserMessage()
// const res=loginUserMessage("Sanjh")
console.log(res);