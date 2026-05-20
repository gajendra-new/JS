if(true){
    let a=10
    const b=20
    var c=30
}

// console.log(a) //ReferenceError: a is not defined
// console.log(b) //ReferenceError: b is not defined
console.log(c) //30 (var is function-scoped, so it is accessible outside the block) 


function testScope(){
    let x=100
    console.log(x) //100

    function innerFunction(){
        let y=200
        console.log(x) //100 (inner function can access outer function's variables)
        console.log(y) //200 (inner function can access its own variables)
    }
    // console.log(y) //ReferenceError: y is not defined (outer function cannot access inner function's variables)
    // innerFunction()
}

testScope()