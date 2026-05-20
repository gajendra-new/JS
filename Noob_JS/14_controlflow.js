if(true){
    // code to execute if condition is true
}   
else if(true){
    // code to execute if anotherCondition is true
}

//Nullish coalescing operator (??) is a logical operator that returns the right-hand side operand when the left-hand side operand is null or undefined, and otherwise returns the left-hand side operand. It is often used to provide default values for variables that may be null or undefined.

let value1 = null;
let value2 = undefined;
let defaultValue = "Default Value";

let result1 = value1 ?? defaultValue;
let result2 = value2 ?? defaultValue;

//ternary operator is a shorthand for if-else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.

let age = 18;
let isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult)