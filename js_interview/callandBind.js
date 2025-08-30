const sanjay={
    name:"Sanjay Rai",
    sayName:function(){
        console.log(this.name);
    },
};

//------setTimeout is a different Web browser API------------------
// setTimeout(sanjay.sayName,3*1000)  //when it calls to sayName function then sayName no know about this which object refer to.

//-----Using binding method--------
// setTimeout(sanjay.sayName.bind(sanjay),3*1000) // it return a new function
// setTimeout(sanjay.sayName.bind(sanjay),3*1000);

// const newFun=sanjay.sayName.bind(sanjay);
// setTimeout(newFun,3*1000);

setTimeout(()=>sanjay.sayName(),3*1000)




// call method => directly call/ not give reference
//bind method => it return a newFunction
