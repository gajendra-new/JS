//destructuring objects
"use strict"
let person={
    name:"John",
    age:30,
    email:"gaje@gmail.com"
}

const {name:personName, age:personAge, email:personEmail}= person

console.log(personName)
console.log(personAge)
console.log(personEmail)