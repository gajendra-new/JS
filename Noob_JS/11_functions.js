//functions
  function greet(){
    console.log("Hello World")
  } 

  greet()


function add(a,b){
    let sum=a+b
    console.log(`The sum of ${a} and ${b} is: ${sum}`);
     return sum
}

console.log(add(5,10))


const user={
    name:"Alice",
    age:25
}



function handleUser(user){
    console.log(`User name: ${user.name}, Age: ${user.age}`)
}
handleUser(user)
