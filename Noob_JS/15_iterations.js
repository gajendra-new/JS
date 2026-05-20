//for loops
for(let i=0;i<5;i++){
    console.log(`Iteration ${i}`)
}

//while loop
let j=0
while(j<5){
    console.log(`While loop iteration ${j}`)
    j++
}

//do while loop
let k=0
do{
    console.log(`Do-While loop iteration ${k}`)
    k++
}while(k<5) 

//for of loop
const fruits=["apple","banana","cherry"]
for(let fruit of fruits){
    console.log(`Fruit: ${fruit}`)
}

//Maps
const userMap=new Map()
userMap.set("name","Alice")
userMap.set("age",25)
for(let [key,value] of userMap){
    console.log(`${key}: ${value}`)
}


const coding=["JavaScript","Python","Java"]
for(let language of coding){
    console.log(`Language: ${language}`)
}


