const myNums=[1,2,3,4,5,6,7,8,9,10]

//filter method
const evenNums=myNums.filter(num=>num%2===0)
console.log(evenNums)
const oddNums=myNums.filter(num=>num%2!==0)
console.log(oddNums)

//with scope you have to use return keyword-curly braces
const evenNums2=myNums.filter(num=>{
    return num%2===0
})
console.log(evenNums2)

myNums.forEach((num) =>{
    if(num >4){
        console.log(num)
    }       
})

const myNumber=[1,2,3,4,5,6,7,8,9,10]

const updatedNumbers=myNumber.map( (num) => num+10)
console.log(updatedNumbers) //original array is not modified

//reduce method
const sum=myNumber.reduce((accumulator,currentValue) => accumulator+currentValue,0)
console.log(sum) 