const accountId=144353;
let accountEmail="deep785765@google.com";
var accountPassword="12345";
accountCity="Jaipur";
let accountState;


// accountId=2; // not allowed
console.log(accountId);


accountEmail="deep466.com";
accountPassword="123242412";
accountCity="Bengaluru";

console.log(accountId);
/*
prefer not to use ' var '
because of issue in block scope and  functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);