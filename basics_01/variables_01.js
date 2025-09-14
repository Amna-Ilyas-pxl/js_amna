const accountId = 145666
let accountEmail = "amna@google.com"   //mostly in use for variable is "let" datatype
var accountPassword = "321456"
accountCity = "Lahore"

// accountId = 2  // not allowed bcoz constant

console.log(accountId);

/*
prefer not to use var because of issue in block scope and functional scope
*/
accountEmail = "haseeb@google.com"
accountPassword = "456321"
accountCity = "Karachi"

console.table([accountId, accountEmail, accountPassword, accountEmail])    //prints every variable mentioned at single run

