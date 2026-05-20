//using new keyword to create objects
"use strict"        
let person1=new Object()
person1.name="John"
person1.age=30
person1.email="john@example.com"

//singleton object
let person2={
    name:"Alice",
    age:25,
    email:"alice@example.com"
}

//object inside object
let person3={
    name:"Bob",
    age:35,
    email:"bob@example.com",
    address:{
        city:"New York",
        country:"USA"
    }
}

//adding two objects
let person4=Object.assign({},person1,person2)
console.log(person4)