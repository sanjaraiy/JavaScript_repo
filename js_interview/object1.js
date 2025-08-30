const Rai={
    name:"Sanjay",
    sayName:function(){
        console.log(this.name);
    }
}

const mirdul={
    name:"Rahul",
    sayName:function(){
        console.log(this.name);
    }
}

//-----
mirdul.sayName.call(Rai);




//------------------UnderStand the working of call()-------------------
// function hello(){
//     console.log(this.name);
// }

// hello() //it finds in global object (context/ refer)
// hello.call(Rai) //here we specify a object (context/ refer) to refer specified object

