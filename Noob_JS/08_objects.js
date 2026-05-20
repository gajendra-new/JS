//Objects tutorial

let person={
    name:"John",
    age:30, 
    email:"john@example.com"
}

console.log(person.age)
console.log(person['email'])
//use symbol in object

let sym=Symbol('id')
let user={
    name:"Alice",
    [sym]:12345
}
console.log(user[sym])

person.greetings=function(){
    console.log("Hello, World!")
}

console.log(person.greetings())