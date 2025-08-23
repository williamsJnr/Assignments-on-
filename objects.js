/*const car = {type : "corolla", color : "red", year : 2020, price : 20000, owner : "John Doe", isAvailable : true,};

const person = {skin :"black", age : 20, weight : 50, height : 1.6};

const house = {};

house.address = "123 Main St";
house.color = "blue";
house.rooms = 3;

console.log(house);
console.log(car.type);

//New is used to create an instance of an object
//An object can have object inside of it
const myCar = new Object();

const code = {
    language : ["JavaScript", "Python", "Java"],
    framework : {
        frontEnd : "React",
        backEnd : "Node.js"
    },   
}
console.log(code.framework.frontEnd);
console.log(code.language[1]);

// The this property, it refers the current 
// Object are mutable

const check ={
    name : "John",
    age : 30,

    
}
const x  = check 
x.age = 10
console.log(check.age); // Output: 10

const resdy = ["book", "pen", "pencil", "eraser"];
resdy[0] = "Cleaner"; // Change the first element to "pencil"

console.log(resdy[0]); // Output: pencil*/


/*let laptop = {
    cpu : "19",
    ram : 16,
    brand : "Dell",

    greet : function () {
        console.log ("A good "  + this.cpu )
    }
}
laptop.greet();

const aboutYou = {}
aboutYou.skin = "fair";
aboutYou.eye = "brown";
aboutYou.hair = "black";
console.log(aboutYou)

const manyObjects = {
    name: "John",
    age: 30,
    country: "USA"
}

// adding to the object
aboutYou.skin = "Yellow"
console.log(aboutYou.skin)

//deleting from the object

//delete aboutYou.eye
//console.log(aboutYou)

//const nameSis = {firstName:"John", lastName:"Wills", otherNames:"Chima"}
//console.log(nameSis.firstName)


function bigson(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  }
  let manOman = new bigson("John", "Doe", 30, "blue");
  console.log(manOman.firstName); // Output: John

setTimeout(function(){
    console.log(`Hey Junior, You will be fine.`)
},10000)

(
function(){
    console.log(`Welcome to the greatest guy `);
}
)();

const greet = function(){
    console.log(`Welcome home!`)
}
greet();

const manyObjects = {
    name: "John",
    age: 30,
    country: "USA"
}
for (let eagerly in manyObjects) {//This line of code is used to check the proprty objects usin for loop//

    console.log(manyObjects[eagerly])// This line of code will display the values 
}*/