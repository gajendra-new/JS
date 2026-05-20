//Learn about array in js
"use strict"    

let fruits=["apple","banana","orange"]
console.log(fruits)
console.log(typeof fruits)  

//resiszable
fruits.push("grapes")
console.log(fruits)
console.log(fruits[0])

//shallow copy
let newfruits=fruits
console.log(newfruits)
newfruits.push("mango")
console.log(fruits)

//using new keyword
let newfruits2= new Array("apple","banana","orange")
console.log(newfruits2)

//array methods 
console.log(fruits.length)
console.log(fruits.indexOf("banana"))
console.log(fruits.includes("grapes"))
console.log(fruits.join(", "))
//join method is used to join all the elements of an array into a string and returns the 
// string. The separator is specified as an argument to the join method. If no separator is provided, it defaults to a comma (,).

//concatenation of arrays
let morefruits=["kiwi","pineapple"]
let allfruits=fruits.concat(morefruits)
console.log(allfruits)

//spread operator
let allfruits2=[...fruits,...morefruits]

console.log("Spread operator example:")
console.log(allfruits2)

const anotherArray=[1,2,[3,4,5]]
console.log(anotherArray[2][1])

//flat use
let flatArray=anotherArray.flat()
console.log(flatArray)  

//depth
let nestedArray=[1,2,[3,4,[5,6]]]
let flatNestedArray=nestedArray.flat(1)
console.log(flatNestedArray)    

//from
let string="Hello"
let charArray=Array.from(string)
console.log(charArray)

//from using key pair variations
let arrayLikeObject = Array.from(Object.entries({name:"John", age:30}))
console.log(arrayLikeObject)  