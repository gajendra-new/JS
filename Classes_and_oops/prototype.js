let myName= "Gajendra     "

console.log(myName.length); // Output: 8
// console.log(myName.truelength); // Output: 13



let myHeros= ["Ironman", "Spiderman", "Thor", "Hulk", "Captain America"]

let heroPower={
    thor: "Thunder",
    hulk: "Smash",
    ironman: "Intelligence",
    getHeroPower:function(hero){
        console.log(this[hero]);
    }
}

Object.prototype.gajendra=function(){
    console.log("Gajendra is the best");
}
heroPower.gajendra(); // Output: Gajendra is the best
myHeros.gajendra(); // Output: Gajendra is the best

Array.prototype.heygajendra=function(){
    console.log("Gajendra is here");
}

myHeros.heygajendra(); // Output: Gajendra is here
heroPower.heygajendra(); // Output: Gajendra is here


// Inheritance

function Animal(name){
    this.name = name;
}

const AnimalSupport={
    isAvailable:function(){
    }
}

function Dog(name, breed){
    Animal.call(this, name);
    this.breed = breed;
}   

object.setPrototypeOf(Dog.prototype, AnimalSupport);

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.isAvailable(); // Output: true

let anotherUsername= "GajendraJS  "
String.prototype.trueLength=function(){
    return this.trim().length;
}

console.log(anotherUsername.trueLength()); // Output: 10
