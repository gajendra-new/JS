const user={
    name:"John",
    age:30,
    loginCount:0,
    signedIn:true,
    getUserInfo:function(){
        return `Name: ${this.name}, Age: ${this.age}, Login Count: ${this.loginCount}, Signed In: ${this.signedIn}`;
    }
}

// console.log(user.name);
// console.log(user.age);
// console.log(user.loginCount);
// console.log(user.signedIn);
// console.log(user.getUserInfo());

//this keyword refers to the current object, in this case, the user object. It allows us to access the properties and methods of the object
//  within its own context.


// Constructor function to create multiple user objects
function User(name, age) {
    this.name = name;
    this.age = age;
    this.loginCount = 0;
    this.signedIn = false;

    return this; // Return the newly created object,implicitly done in constructor functions, but can be explicitly returned if needed.
}

const user1 = new User("Alice", 25);
// const user2 = new User("Bob", 28); 
//new keyword creates a new empty object, sets the this keyword to point to that object, and then executes
//  the constructor function to initialize the properties of the object. 
console.log(user1.constructor); // Output: [Function: User]

// console.log(user1);
// console.log(user2);


function multipleBy5(num){
    return num * 5;
}   

multipleBy5.power=2; // This will throw an error because the result of multipleBy5(10) is a number, and numbers do not have a power method.

console.log(multipleBy5.power);// Output: 2

console.log(multipleBy5.prototype); // Output: 50

function createUser(uname,age){
    this.name=uname;
    this.age=age;
    return this;
    
}

createUser.prototype.increment=function(){
    this.age++;
}
createUser.prototype.getAge=function(){
    console.log(this.age);
}
const user4= new createUser("Charlie", 22);
console.log(user4); // Output: { name: 'Charlie', age: 22 }
user4.increment();


const user5=new createUser("Dave", 35);
console.log(user5); // Output: { name: 'Dave', age: 35 }SSS

user5.increment();
console.log(user5); // Output: { name: 'Dave', age: 36 }   


// what happend behind the scenes when we create a new object using a constructor function is that JavaScript
//  creates a new empty object, sets the this keyword to point to that object, and then executes the constructor function
//  to initialize the properties of the object. The prototype property of the constructor function is used to share methods 
// and properties among all instances created by that constructor. When we call a method on an instance, JavaScript looks for 
// that method on the instance itself, 
// and if it doesn't find it, it looks up the prototype chain until it finds it or reaches the end of the chain.

  

