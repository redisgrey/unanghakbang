console.log('yo!');

// ES6 UPDATES (2015)


//*Exponent Operator //

// before ES6, Math.pow() is used for exponent operator
// const firstNum = Math.pow(8,2);
// console.log(firstNum);
// 64

// IN ES6, ** used for exponent operator
// const secondNum = 8 ** 2;
// console.log(secondNum);
// 64

//* Template Literals //
// allows to write strings without using the concatenation operator
// let name = "John";
// let message = "Hello" + " " + name + "! Welcome to Javascript Programming!";

// with template literals
// let message2 = `Hello ${name}! Welcome to my house!`;

// console.log(message);
// console.log(message2);

// let anotherMessage =
// `
//     ${name} knew how to solved 8 ** 2, he answered ${secondNum}
// `;

// console.log(anotherMessage);

// const interestRate = 0.5;
// const principal = 1050;

// console.log(`The interest in your savings' account is ${principal * interestRate}`);


//*ARRAY DESTRUCTURING //
// allows to unpack elements in an array into distinct variables
// allows to name array elements with variables insteard of using numbers
// helps us with code readability


/*
Syntax:
let/const [variableName, variableName] = array;

*/

// const fullName = ["Juan", "Dela", "Cruz"];
// const pet = ["geeko", "tarantula", "centipede"];

// *pre-array destructing
// console.log(fullName[0]);
// console.log(fullName[1]);
// console.log(fullName[2]);

// console.log(pet[0]);
// console.log(pet[1]);
// console.log(pet[2]);



// convert the message using values from array elements
// console.log(`Hello firstname, middlename, lastname! It's nice to meet you`);

// console.log(`Hello ${fullName[0]}, ${fullName[1]}, ${fullName[2]}! It was nie to meet you!`);



// *using Array Destructuring using ES6
// const [firstName, middleName, lastName] = fullName;

// const [pet1, pet2 , pet3] = pet;



// converted each elements into distinct variables
// console.log(firstName);
// console.log(middleName);
// console.log(lastName);

// console.log(`Hello ${firstName}, ${middleName}, ${lastName}. Its nice to meet you!`);




//* using array destructuring in a function
// function introduce(){
//     console.log(`Hi! My name is ${firstName} ${middleName} ${lastName}`);

//     console.log(`I have three pets! I have ${pet1}, ${pet2}, ${pet3}`);
// }


// introduce();


// * using array destructuring in a function using parameters and arguments
// function introduce_2(fn, mn, ln){
//     console.log(`Hi my name is ${fn} ${mn} ${ln}`);

//     console.log(`I have three pets! I have ${pet1}, ${pet2}, ${pet3}`);
// }


// introduce_2(firstName, middleName, lastName);



//* OBJECT DESTRUCTURING //

/*
Syntax:

let/const {propertyName, propertyName} = object;

*/

// const person = {

//     "first": "Jane",
//     "second": "Dela",
//     "last": "Cruz"

// }

//* pre-object destructuring
// console.log(person.first);
// console.log(person.second);
// console.log(person.last);


//* object destructuring

// const {first, second, last} = person;

// console.log(first);
// console.log(second);
// console.log(last);



//* object destructuring inside the function
// function getCompleteName(first, second, last){

//     console.log(`My name is ${first} ${second} ${last}`);

// }

// getCompleteName(person);



//* ARROW FUNCTION //
// compact alternative syntax to traditional syntax
/*
Syntax:
let / const variableName = () =>{

    function codeblock
}
*/

// arrow function with multiline codeblock
const hello = () => {
    console.log(`Hello World`);
}

// arrow function in one line only
const Hello = () => console.log(`Hello`);


// traditional function`
function sayHello(){
    console.log(`Hello`);
}

hello();
Hello();
sayHello();




// let students = ["John", "Jane", "Judy"];

// const [top1, top2, top3] = students;

// const announcement = () => console.log(`Here are the top 3 students of Kodego - ${top1}, ${top2} and ${top3}. Give them a round of applause!`);

// announcement();


// EXERCISE 2: USING ARROW FUNCTIONS

// let students = ["John", "Jane", "Judy"];


// students.forEach(student => console.log(`Hi! My name is ${student}. Let's be friends!`));

//* IMPLICIT RETURN STATEMENT //
// these are instances when you can omit the "return" statement
// this works because even without the "return" statement, javascript implicitly adds it as the result of a function

// traditional function
function product(a,b){
    return a * b;
}

console.log(product(5,2));



// function expression
// anonymous function being stored in a variable
const product_2 = function (){
    return 3 * 3;
}

console.log(product_2());


// arrow function with an implicit return statement

// one-liner function without return and curly braces
const product_3 = () => 2 * 2;

console.log(product_3());


// arrow function with explicit return statement
// multi-liner function code block
const product_4 = () => {
    return 2 * 9;
}

console.log(product_4());


//* DEFAULT FUNCTION ARGUMENT VALUE

const myName = (name = `User`) => {
    return `Good Morning ${name}`
}

console.log(myName("Dahl"));


// *CLASS BASED OBJECT BLUEPRINT
// allows us to create or instantiate objects using classes as blueprints

/*
Syntax:
    class className {
        constructor (objectPropertyA, objectPropertyB){
            this.objectPropertyA = objectPropertyB;
            this.objectPropertyB = objectPropertyB;
        }
    }
*/

class Car{
    constructor(brand, name, year){
        this.brand = brand;
        this.name = name;
        this.year = year;
    }
}

// Step 2: Instantiate an object using new keyword

const myCar = new Car();
console.log(myCar);


// Step 3: Using assignment operator to assign values to properties after instantiation of object

myCar.brand = "Ford";
myCar.name = "Ranger Raptor";
myCar.year = 2021;

// console.log(myCar);


// Step 4: Instantiating a new object from the car class with initialize values

const myNewCar = new Car ("Toyota", "Vios", "2021");

console.log(myNewCar);

// console.log(Car);



// ACTIVITY




// *My Class Based Object Blueprint
class dataWeight {
    constructor (name, kilograms){
        this.name = name;
        this.kilograms = kilograms;
        this.pounds = parseFloat(kilograms * 2.20462).toFixed(2);
    }
}


// *Examples of Data
const weightJelly = new dataWeight ("Jelly", 59.87);

const weightJava = new dataWeight ("Java", 47);

const weightPython = new dataWeight ("Python", 64);


// *My Function for logging the weight in pounds
function viewWeightData(variable){

    console.log(`${variable.name}'s weight in lbs is ${variable.pounds}`);

}

// *It works! :D
viewWeightData(weightJelly);
viewWeightData(weightJava);
viewWeightData(weightPython);