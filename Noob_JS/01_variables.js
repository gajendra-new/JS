const accountID=12345

/*
prefer not to use var, because it can be re-declared and updated, which can lead to bugs. Instead, use let and const for better code readability and maintainability.
*/
let accountEmail="example@example.com"
let accountName="John Doe"
let accountCity="New York"

let accountstate

console.table([accountID, accountEmail, accountName, accountCity,accountstate])