function A(){
  console.log("A");
}

setTimeout(()=>console.log("Hello"),0)

A()

console.log("B")

Promise.resolve().then(()=>console.log("I am developer"));
