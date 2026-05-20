const promisesone=new Promise(function(resolve,reject){
    // Do an async task
    // DB calls,cryptography,network calls
    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
    },1000);
});

promisesone.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 is completed");
        resolve();
    },2000);
}).then(function(){
    console.log("Promise two consumed");
});

const promise3=new Promise(function(resolve,reject){

    setTimeout(function(){
        
        resolve({message: "Promise three resolved"});
    },1000);
})

promise3.then(function(data){
    console.log("Promise three consumed");
    console.log("Data: ", data);
}); 

// chaining promises
new Promise(function(resolve,reject){

    setTimeout(function(){
        resolve({message: "Promise four resolved"});
    },1000);
}).then(function(data){ 
    console.log("Promise four consumed");
    console.log("Data: ", data);
}); 

const promise5=new Promise(function(resolve,reject){

    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username: "JohnDoe"});
        } else {
            reject(new Error("Promise five rejected")); 
        }

    },1000);
});
 
async function consumePromise5(){
    try {
        const response =await promise5;
        console.log("Promise five consumed");
        console.log("Data: ", response);
    } catch(error){
        console.log("Error: ", error.message);
    }   
   
}
consumePromise5();


//somethings we need to do after consuming promise, we can use async await to consume promise and handle error using try catch block
//sometimes it takes time to get data from server, we can use async await to wait for the data to be fetched and then consume it
async function getAllUSers(){
    try {
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        const data= await response.json();
        console.log("Users: ", data);
    } catch(error){
        console.log("Error: ", error.message);
    }   
   
}
consumePromise5();

async function getAllUSers(){
    try {
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        const data= await response.json();
        console.log("Users: ", data);
    } catch(error){
        console.log("Error: ", error.message);
    }   
   
}
getAllUSers();

// async await didn't handle error directly, we need to use try catch block to handle error

// using fetch to get data from server and handle error using try catch block
fetch("https://jsonplaceholder.typicode.com/users").then(function(response){
    return response.json();
}).then(function(data){
    console.log("Users: ", data);
}).catch(function(error){
    console.log("Error: ", error.message);
});