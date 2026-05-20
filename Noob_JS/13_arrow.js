//Tutorial for arrow functions and this keyword

const user ={
    username:"Alice",
    price:100,

    welcomeMessage:function(){
        console.log(`Welcome, ${this.username}! Your price is ${this.price}.`)
        console.log(this)
    }
}


user.welcomeMessage()
user.username="Bob"
user.price=150
user.welcomeMessage()

// console.log(this)

const arrowFunction=(num1,num2)=>{


   return num1+num2
}

console.log(arrowFunction(5, 10))

const addTwo=(num1,num2)=> num1+num2    
console.log(addTwo(5, 10))
// implicit return


// iife
// (function(){
//     console.log('This is an IIFE');
// })()

  
