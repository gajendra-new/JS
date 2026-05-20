"use strict"//treat all JS code as new and modern

//Data types in JavaScript
//1. Primitive data types: string, number, boolean, null, undefined, symbol
//2. Non-primitive data types: object, array, function

console.log(typeof"Data types in JavaScript:")
console.log(typeof null)
console.log(typeof undefined)

//primitive data types
let name="John Doe"
let age=30
let isStudent=true
// js is dynamically typed language, which means we can change the data type of a variable at runtime
name=12345
console.log(typeof name)

//non primitive data types
let person={
    name:"John Doe",
    age:30,
    isStudent:true
}   

//array is a special type of object that can hold multiple values in a single variable. It is ordered and indexed, which means we can access its elements using their index. 
let numbers=[1,2,3,4,5]
console.log(typeof numbers)

//Symbols are unique and immutable data types that can be used as identifiers for object properties. They were introduced in ES6 (ECMAScript 2015) and are often used to create private properties or to avoid name collisions in objects.

let sym1 = Symbol('description');
let sym2 = Symbol('description');
console.log(sym1 === sym2); // false

let bigIntValue = 1234567890123456789012345678901234567890n; // The 'n' at the end indicates a BigInt literal
console.log(typeof bigIntValue); // "bigint"