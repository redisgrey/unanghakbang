console.log("yo!");

const xy = {
    firstGrading: 95,
    subject: "English",
    teachers: ["Jelly", "Jem", "Joey"],
    isStudent: true,
    school: {
        city: "Pangasinan",
        country: "Philippines"
    },
    classmates: [
        {
        name: "Dahl",
        batch: "26"
        },

        {
            name: "John Paul",
            batch: "5"
        },

        {
            name: "Jhyx",
            batch: "1"
        }

    ],

    description: function(){
        return `${this.subject}: ${this.firstGrading}`
    }

}

// ACCESSING PROPERTIES
// DOT NOTATION AND BRACKET

console.log(xy.firstGrading);
// 95

console.log(xy.subject);
// English

console.log(xy[`isStudent`]);
// true

console.log(xy[`teachers`]);
// array of teachers

console.log(xy.teachers);
// array of teachers

console.log(xy.teachers[1]);
// Jem

console.log(xy.school);
// array of school address

console.log(xy.school.city);
// Pangasinan

console.log(xy.school[`city`]);
// Pangasinan

console.log(xy[`school`][`city`]);
// Pangasinan

// ACCESS SCHOOL COUNTRY
console.log(xy[`school`][`country`]);
// Philippines


// ACCESS CLASSMATES
console.log(xy[`classmates`][`1`]);
// John Paul 5

console.log(xy[`classmates`][`1`][`batch`]);
// 5

// ACCESS FUNCTION IN THE OBJECT
console.log(xy.description());


// ADD PROPERTY
xy.semester = "first";
console.log(xy);

// DELETE PROPERTY
delete xy.semester;

console.log(xy);


const studentGrades = [
    {
        studentId: 1,
        Q1: 89.3,
        Q2: 91.2,
        Q3: 93.3,
        Q4: 89.8
        // Q5: 99.9
    
        
    },
        
    {
        studentId: 2,
        Q1: 69.2,
        Q2: 71.8,
        Q3: 76.5,
        Q4: 81.9
    },

    {
        studentId: 3,
        Q1: 95.7,
        Q2: 91.4,
        Q3: 90.7,
        Q4: 85.6
    },

    {
        studentId: 4,
        Q1: 86.9,
        Q2: 74.5,
        Q3: 83.3,
        Q4: 86.1
    },

    {
        studentId: 5,
        Q1: 70.9,
        Q2: 73.8,
        Q3: 80.1,
        Q4: 81.8
    }


]


// ASSIGNMENT: Compute the student average by accessing the declared objects

// CLUE: We can use to compute the average manually or using for loop


// MANUAL COMPUTATION OF AVERAGE 
// let sum = studentGrades[1][`Q1`] + studentGrades[1][`Q2`] + studentGrades[1][`Q3`] + studentGrades[1][`Q4`];
// let average = sum / 4;
// console.log(sum);
// console.log(average);


// FOR LOOP COMPUTATION OF AVERAGE

// console.table(studentGrades);
// console.log(Object.values(studentGrades[0]));
// console.log(Object.keys(studentGrades[0]).length);

// let sum = 0;
// for(let i = 0; i < studentGrades.length; i++){   
//         for (prop in studentGrades[i]){
//             sum += studentGrades[i][`Q1`];
//         }  
// }

// console.log(sum);


// SOLUTION 1
for (let i = 0; i < studentGrades.length; i++){
    let forLoopAve = (studentGrades[i].Q1 + studentGrades[i].Q2 + studentGrades[i].Q3 + studentGrades[i].Q4) / 4;

    console.log(forLoopAve);

    studentGrades[i].forLoopAve = parseFloat(forLoopAve.toFixed(1));
}

console.log(studentGrades);


// SOLUTION 2
studentGrades.forEach(function (element){
    let forEachAve = (element.Q1 + element.Q2 + element.Q3 + element.Q4)/4;
    console.log(forEachAve);
    element.forEachAve = parseFloat(forEachAve.toFixed(1));
});

console.log(studentGrades);




// OBJECT CONSTRUCTOR - serves as a blueprint of our objects
// uses the "this" method

let hero = {
    name: "Angela",
    level: 1,
    role: "support",
    health: 100,
    attack: 50,
    mana: 100,

    tackle: function(){
        console.log(`This ${hero} tackled ${hero}`);
        console.log(`Target hero's health is now reduced to heroHealth`);
    },

    faint: function(){
        console.log(`Hero fainted`);
    }
}


console.log(hero);

// STEPS IN CREATING OBJECT CONSTRUCTOR
// Step 1 - create a template or blueprint
function pokemon(name, lvl, hp){
    this.name = name;
    this.level = lvl;
    this.health = hp * 2;
    this.attack = lvl;

    this.tackle = function(target){
        console.log(target);

        console.log(`This ${this.name} tackled ${target.name}`);

        console.log(`${target.name}'s health is now reduced to ${target.health - this.attack}`);
    },

    this.faint = function(){
        console.log(`${this.name} fainted!`);
    }
}

//STEP 2: INITIALIZE AN OBJECT WITH ARGUMENTS

let pikachu = new pokemon("Pikachu", 5, 50);
let charizzard = new pokemon("Charizzard", 8, 40);

console.log(pikachu);
console.log(charizzard);

//STEP 3: EXECUTE THE PROPERTY
console.log(pikachu.tackle(charizzard));


// ACTIVITY
// STEP 1
function fordaFerson(name, birthday, age, address, email){
    this.name = name;
    this.birthday = birthday;
    this.age = age;
    this.address = address;
    this.email = email;
    
    this.meet = function(friend){

        console.log(`${this.name} became friends with ${friend.name} because of Kodego`);
        
        console.log("Thank you Kodego");
    }
}


// STEP 2
let dahl = new fordaFerson("Dahl", "August 9, 1998", 24, "Oriental Mindoro", "dahltamares89@gmail.com");
let jem = new fordaFerson("Jem", "January 1, 2000", 22, "Batangas City", "jemcutie@gmail.com");

console.log(dahl);
console.log(jem);


// STEP 3
console.log(dahl.meet(jem));



// ARRAY OF OBJECTS
let cars = [
    {
        brand: "Toyota",
        model: "Vios",
        price: 1000000
    },

    {
        brand: "Mazda",
        model: "MX-5",
        price: 2000000 
    },

    {
        brand: "Nissan",
        model: "Fortuner",
        price: 2500000
    }
]

// find( callback function());
// iterates over items in our array and returns the item/element which will satisfy the condition
// find() will return the "first" item that will satisfy the condition and stops its process
// if find() cannot satisfy its condition even after iterating all of the items/ elements in the arrat, it will return undefined
// we can use logical operators for condition

// let foundCar = cars.find(
//     function(car){
//         console.log(car);
        // displays the objects inside the car array
//         return (car.brand === "toyota");
//     }
// );

// console.log(foundCar);

// if (foundCar === undefined){
//     console.log(`some data not existing`);
// }else {
//     console.log(`Data exists`);
// }

// EXCERISE 2
let users = [
	{
		username: "kimdhyn",
		email: "dahyun@gmail.com",
		password: "dahyunTwiceu"
	},
	{
		username: "jenKimBP",
		email: "jennieSolo@gmail.com",
		password: "dududuJennie",
	},
	{
		username: "lisaBP",
		email: "lisaManoban@gmail.com",
		password: "lisaIsHere"
	}
];



/*
Create a new function called login.
This function should be able to receive an email and a password.
This function should be able to find the user with the correct email and password.
Save the returned user into a variable.
show the found user object in the console.

Stretch Goal:
if we can't find a user with the same email or password: Show an alert: Login Failed. Wrong Credentials.
if we did find a user with the same email or password: Show an alert: Thank you for logging in.
*/

// let userLoggedIn = users.find(
//     function(user){
        
//         return (user.username === "kimdhyn");
//     }
// );

// console.log(userLoggedIn);

// if (userLoggedIn === undefined){
//    alert(`Login Failed. Wrong Credentials.`);
// }else {
//     alert(`Thank you for logging in.`);
// }
